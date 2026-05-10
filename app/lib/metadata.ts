import type { Metadata } from 'next'
import { siteConfig } from '@/app/lib/site-config'

type PageMetadataInput = {
  pageName: string
  description: string
  path: string
}

export function createPageMetadata({
  pageName,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`
  const title = `${pageName} | JEM Heating & Air Conditioning — Westminster, MD`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: new URL(canonicalPath, siteConfig.url).toString(),
      siteName: siteConfig.shortName,
    },
  }
}
