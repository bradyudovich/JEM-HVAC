import type { MetadataRoute } from 'next'
import { siteConfig } from '@/app/lib/site-config'

const pagePaths = [
  '/',
  '/about',
  '/contact',
  '/indoor-air-quality',
  '/refrigerant-loss',
  '/services',
  '/services/commercial',
  '/services/maintenance',
  '/services/residential',
  '/york-warranty',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pagePaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
  }))
}
