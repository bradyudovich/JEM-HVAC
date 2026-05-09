import type { Metadata } from 'next'
import { Geist, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
})

export const metadata: Metadata = {
  title: {
    default: 'JEM Heating & Air Conditioning',
    template: '%s | JEM Heating & Air Conditioning',
  },
  description:
    'Professional HVAC services including heating, air conditioning, repairs, maintenance, and installations for residential and commercial customers.',
  keywords: [
    'HVAC',
    'heating and air conditioning',
    'air conditioning repair',
    'heating repair',
    'HVAC installation',
    'HVAC maintenance',
    'JEM Heating & Air Conditioning',
  ],
  metadataBase: new URL('https://www.jemhvac.com'),
  openGraph: {
    title: 'JEM Heating & Air Conditioning',
    description:
      'Trusted heating and cooling services for homes and businesses.',
    url: 'https://www.jemhvac.com',
    siteName: 'JEM Heating & Air Conditioning',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEM Heating & Air Conditioning',
    description:
      'Trusted heating and cooling services for homes and businesses.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="bg-surface text-text font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
