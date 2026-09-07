/** 单文件发行版内嵌素材；开发服务器继续使用 public 目录。 */
export function assetUrl(path: string): string {
  const assets = (
    globalThis as typeof globalThis & {
      __SHAXI_ASSETS__?: Record<string, string>;
    }
  ).__SHAXI_ASSETS__;
  if (!assets) return path;
  const embedded = assets[path];
  if (!embedded) throw new Error(`单文件缺少素材：${path}`);
  return embedded;
}
