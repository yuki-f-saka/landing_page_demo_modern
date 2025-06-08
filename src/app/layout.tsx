import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'レンタルおじさん - あなたの「欲しい」におじさんがお応えします',
  description: '話し相手から愚痴聞き、お出かけ同伴まで。どんなシーンにもおじさんがお手伝いします。気軽にご利用ください。',
  keywords: 'レンタルおじさん,話し相手,愚痴聞き,お出かけ同伴,人生相談',
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