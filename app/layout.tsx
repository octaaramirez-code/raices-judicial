import type { Metadata } from 'next'
import { Montserrat, Work_Sans } from 'next/font/google'
import './globals.css'
import { profile } from './content'

// Rebranding: Montserrat para títulos y destacados, Work Sans para textos y cuerpo.
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
    images: [{ url: profile.logoFull, width: 1024, height: 1024, alt: profile.name }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
