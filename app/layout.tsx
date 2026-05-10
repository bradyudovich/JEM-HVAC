import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { siteConfig } from '@/app/lib/site-config'

export const metadata: Metadata = {
  title: 'JEM Heating & Air Conditioning — Westminster, MD',
  description:
    'Professional HVAC service for residential and commercial clients across Carroll County, Maryland.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'JEM Heating & Air Conditioning — Westminster, MD',
    description:
      'Professional heating and cooling service, fast response times, and honest pricing for residential and commercial clients.',
    url: siteConfig.url,
    siteName: 'JEM Heating & Air Conditioning',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface font-sans text-gray-700 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
