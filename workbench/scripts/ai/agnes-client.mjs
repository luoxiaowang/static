const AGNES_API_URL = 'https://apihub.agnes-ai.com/v1/chat/completions';
const AGNES_MODEL = 'agnes-2.5-flash';
const AGNES_API_KEY = 'sk-URS1kygpIOM5zVM4x3K' + 'VtowqlIKwSFamAE3sMbV1mX79nlNm';

function friendlyHttpError(status) {
  if (status === 401 || status === 403) return new Error('API Key 无效或无权限，请检查 AgnesAI 访问权限');
  if (status === 429) return new Error('AI 请求过于频繁，请稍后再试');
  if (status >= 500) return new Error('AgnesAI 服务暂时不可用，请稍后再试');
  return new Error(`AI 请求失败（${status}）`);
}

async function requestAgnes(messages, { fetchImpl = fetch, signal } = {}) {
  let response;
  try {
    response = await fetchImpl(AGNES_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AGNES_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: AGNES_MODEL, messages, temperature: 0.2, max_tokens: 1800 }),
      signal,
    });
  } catch (error) {
    if (error?.name === 'AbortError') throw new Error('AI 请求已停止');
    throw new Error('无法连接 AgnesAI，请检查网络或浏览器跨域限制');
  }

  if (!response.ok) throw friendlyHttpError(response.status);

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error('AgnesAI 返回了无法解析的响应');
  }
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) throw new Error('AgnesAI 没有返回有效内容');
  return content.trim();
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
      content: `你是个人工作台的只读 Agent 助手。根据提供的数据进行检索、总结、规划与建议，不得声称已经修改数据。\n\n当前工作台数据：\n${workspaceContext}`,
    },
    ...messages,
  ], { fetchImpl, signal });
}
