import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import './globals.css'
import { profile } from './content'

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.title,
  description: profile.description,
  openGraph: {
    title: profile.title,
    description: profile.description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSerif.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
