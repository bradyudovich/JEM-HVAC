import type { Metadata } from 'next'
import { siteConfig } from '@/app/lib/site-config'

type CreatePageMetadataOptions = {
  title: string
  description: string
  path: string
  openGraphType?: 'website' | 'article'
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
}: CreatePageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`

  return {
    title: `${title} | JEM Heating & Air Conditioning`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | JEM Heating & Air Conditioning`,
      description,
      type: openGraphType,
      url: new URL(canonicalPath, siteConfig.url).toString(),
    },
  }
}
