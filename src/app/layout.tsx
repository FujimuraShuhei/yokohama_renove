import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'YOKOHAMA RENOVE',
  description: '横浜のリノベーション会社です。横浜のリノベーション、新築設計ならお任せください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
