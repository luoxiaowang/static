const AGNES_API_URL = 'https://apihub.agnes-ai.com/v1/chat/completions';
const AGNES_RESPONSES_URL = 'https://apihub.agnes-ai.com/v1/responses';
const AGNES_IMAGES_URL = 'https://apihub.agnes-ai.com/v1/images/generations';
const AGNES_MODEL = 'agnes-2.5-flash';
const AGNES_IMAGE_MODEL = 'agnes-image-2.1-flash';
const AGNES_API_KEY = 'sk-URS1kygpIOM5zVM4x3K' + 'VtowqlIKwSFamAE3sMbV1mX79nlNm';

function friendlyHttpError(status) {
  if (status === 401 || status === 403) return new Error('API Key 无效或无权限，请检查 AgnesAI 访问权限');
  if (status === 429) return new Error('AI 请求过于频繁，请稍后再试');
  if (status >= 500) return new Error('AgnesAI 服务暂时不可用，请稍后再试');
  return new Error(`AI 请求失败（${status}）`);
}

async function requestAgnes(messages, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_API_URL, { model: AGNES_MODEL, messages, temperature: 0.2, max_tokens: 1800 }, {
    fetchImpl,
    signal,
    timeoutMs: 60000,
    timeoutMessage: 'AI 响应超时，请稍后重试',
  });
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) throw new Error('AgnesAI 没有返回有效内容');
  return content.trim();
}

async function requestJson(url, body, { fetchImpl = fetch, signal, timeoutMs, timeoutMessage } = {}) {
  const controller = new AbortController();
  let timedOut = false;
  const abortFromParent = () => controller.abort(signal?.reason);
  if (signal?.aborted) abortFromParent();
  else signal?.addEventListener('abort', abortFromParent, { once: true });
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, timeoutMs);
  let response;
  try {
    response = await fetchImpl(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AGNES_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (error) {
    if (error?.name === 'AbortError') throw new Error(timedOut ? timeoutMessage : 'AI 请求已停止');
    throw new Error('无法连接 AgnesAI，请检查网络或浏览器跨域限制');
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abortFromParent);
  }

  if (!response.ok) throw friendlyHttpError(response.status);

  try {
    return await response.json();
  } catch {
    throw new Error('AgnesAI 返回了无法解析的响应');
  }
}

function parseFavoriteRecognition(content) {
  const cleaned = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  let data;
  try {
    data = JSON.parse(cleaned);
  } catch {
    throw new Error('无法解析 AI 返回的收藏内容，请手动填写');
  }
  const fields = ['title', 'summary', 'outline'];
  if (fields.some((field) => typeof data[field] !== 'string' || !data[field].trim())) {
    throw new Error('无法解析 AI 返回的收藏内容，请手动填写');
  }
  return Object.fromEntries(fields.map((field) => [field, data[field].trim()]));
}

export async function recognizeFavorite(url, { fetchImpl = fetch, signal } = {}) {
  const content = await requestAgnes([
    {
      role: 'system',
      content: '你是网页内容识别助手。必须实际读取用户提供的网页后再回答；无法访问时明确说明失败，禁止根据 URL 猜测。只输出合法 JSON。',
    },
    {
      role: 'user',
      content: `读取网页 ${url}，生成简洁结果。只返回：{"title":"网页标题","summary":"不超过160字的摘要","outline":"Markdown 分层大纲"}`,
    },
  ], { fetchImpl, signal });
  return parseFavoriteRecognition(content);
}

export function askWorkspaceAgent(messages, workspaceContext, { fetchImpl = fetch, signal } = {}) {
  return requestAgnes([
    {
      role: 'system',
      content: `你是个人工作台的只读 Agent 助手。根据提供的数据进行检索、总结、规划与建议，不得声称已经修改数据。涉及今天、明天、昨天或是否到期时，必须以工作台上下文中的当前本机日期时间为准，不得使用模型自身日期。\n\n当前工作台数据：\n${workspaceContext}`,
    },
    ...messages,
  ], { fetchImpl, signal });
}

export async function classifyAgentIntent(text, { fetchImpl = fetch, signal } = {}) {
  try {
    const content = await requestAgnes([
      {
        role: 'system',
        content: '判断用户意图，只输出合法 JSON：{"intent":"chat|web|image"}。chat 表示普通问答或工作台数据咨询；web 表示必须联网获取实时或外部信息；image 表示生成图片。',
      },
      { role: 'user', content: text },
    ], { fetchImpl, signal });
    const parsed = JSON.parse(content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim());
    return ['chat', 'web', 'image'].includes(parsed.intent) ? parsed.intent : 'chat';
  } catch (error) {
    if (error?.message === 'AI 请求已停止') throw error;
    return 'chat';
  }
}

export async function searchWebWithAgent(text, workspaceContext, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_RESPONSES_URL, {
    model: AGNES_MODEL,
    instructions: `你是个人工作台的联网查询助手。必须联网搜索后回答，不得依赖模型记忆猜测实时信息。回答使用中文，并给出可验证来源。以下工作台上下文仅用于理解用户问题：\n${workspaceContext}`,
    input: text,
    tools: [{ type: 'web_search_preview' }],
  }, { fetchImpl, signal, timeoutMs: 90000, timeoutMessage: '联网查询超时，请稍后重试' });

  const outputText = (payload?.output || [])
    .filter((item) => item?.type === 'message')
    .flatMap((item) => item.content || [])
    .filter((item) => item?.type === 'output_text');
  const content = outputText.map((item) => item.text || '').join('\n\n').trim();
  if (!content) throw new Error('AgnesAI 联网查询没有返回有效内容');

  const sourceMap = new Map();
  outputText.flatMap((item) => item.annotations || []).forEach((annotation) => {
    const citation = annotation?.url_citation || annotation;
    if (typeof citation?.url !== 'string' || !/^https?:\/\//i.test(citation.url)) return;
    if (!sourceMap.has(citation.url)) sourceMap.set(citation.url, { title: citation.title || new URL(citation.url).hostname, url: citation.url });
  });
  const sources = [...sourceMap.values()];
  if (!sources.length) throw new Error('AgnesAI 联网查询没有返回可验证的来源');
  return { content, sources };
}

export async function generateAgentImage(prompt, { fetchImpl = fetch, signal } = {}) {
  const payload = await requestJson(AGNES_IMAGES_URL, {
    model: AGNES_IMAGE_MODEL,
    prompt: `根据以下需求生成高质量图片。若画面包含文字，必须使用准确、清晰的简体中文：${prompt}`,
    size: '1024x1024',
    extra_body: { response_format: 'url' },
  }, { fetchImpl, signal, timeoutMs: 120000, timeoutMessage: '图片生成超时，请稍后重试' });
  const image = payload?.data?.[0];
  const imageUrl = typeof image?.url === 'string' && image.url
    ? image.url
    : typeof image?.b64_json === 'string' && image.b64_json
      ? `data:image/png;base64,${image.b64_json}`
      : '';
  if (!imageUrl) throw new Error('AgnesAI 没有返回有效图片');
  return { imageUrl, revisedPrompt: typeof image.revised_prompt === 'string' ? image.revised_prompt : '' };
}
