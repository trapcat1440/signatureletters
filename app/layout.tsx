import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Signature & Letter SS | Blog Media',
  description: 'Fashion, culture, brands, and digital life — Rights Reserved.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/pixlr-image-6a890744916c36051e004df4-removebg-preview.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pixlr-image-6a890744916c36051e004df4-removebg-preview.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pixlr-image-6a890744916c36051e004df4-removebg-preview.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
