import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aynix | Futuristic Consumer Technology',
  description: 'Aynix pioneers the future of consumer technology with innovative smartwatches, laptops, and next-generation mobile devices. Experience tomorrow, today.',
  keywords: ['Aynix', 'technology', 'smartwatch', 'laptop', 'mobile', 'futuristic', 'innovation'],
  authors: [{ name: 'Aynix' }],
  creator: 'Aynix',
  openGraph: {
    title: 'Aynix | Futuristic Consumer Technology',
    description: 'Pioneering the future of consumer technology',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0891b2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
