import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aynix | Premium Technology',
  description: 'Aynix creates premium consumer technology - smartwatches, laptops, and phones designed for the modern lifestyle.',
  keywords: ['Aynix', 'technology', 'smartwatch', 'laptop', 'phone', 'premium', 'minimal'],
  authors: [{ name: 'Aynix' }],
  creator: 'Aynix',
  openGraph: {
    title: 'Aynix | Premium Technology',
    description: 'Premium consumer technology for the modern lifestyle',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
