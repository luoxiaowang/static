const IMAGE_INTENT = /(?:生成|画|绘制|制作|设计|创建|做)(?:一张|一个|一幅|些)?[^，。！？\n]{0,12}(?:图片|图像|海报|封面|插画|壁纸|头像)|文生图/i;
const WORKSPACE_INTENT = /todo|待办|任务|倒计时|番茄钟|灵感|碎碎念|收藏夹|工作台/i;
const WEB_INTENT = /联网|上网|搜索|搜一下|查一下|查询|最新|新闻|天气|价格|行情|实时|近期|最近发布|官网/i;

export function detectAgentIntent(text = '') {
  const content = String(text).trim();
  if (!content) return 'chat';
  if (IMAGE_INTENT.test(content)) return 'image';
  if (WORKSPACE_INTENT.test(content)) return 'chat';
  if (WEB_INTENT.test(content)) return 'web';
  return 'unknown';
}
