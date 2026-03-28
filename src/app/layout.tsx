import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Harness the power of artificial intelligence to create, optimize, and scale your marketing campaigns like never before. Start your free trial today.',
  keywords: 'AI marketing, artificial intelligence, marketing automation, content generation, predictive analytics, campaign optimization',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  creator: 'ADmyBRAND AI',
  publisher: 'ADmyBRAND AI',
  metadataBase: new URL('https://admybrand.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand.ai',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Harness the power of artificial intelligence to create, optimize, and scale your marketing campaigns like never before.',
    siteName: 'ADmyBRAND AI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Harness the power of artificial intelligence to create, optimize, and scale your marketing campaigns like never before.',
    creator: '@admybrand',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}