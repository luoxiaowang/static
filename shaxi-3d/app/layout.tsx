import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '沙溪 · 旧时游',
  description:
    '在青瓦木屋、古树石巷与河畔石桥间，漫游一座以云南沙溪为灵感的三维古镇。',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
