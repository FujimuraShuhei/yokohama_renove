import './globals.css';
import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_New } from 'next/font/google';

const Zenkaku_new400 = Zen_Kaku_Gothic_New({
  weight: '400',
  preload: false,
});

export const metadata: Metadata = {
  title: 'YOKOHAMA RENOVE',
  description:
    '横浜のリノベーション会社です。横浜のリノベーション、新築設計ならお任せください。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={Zenkaku_new400.className}>{children}</body>
    </html>
  );
}
