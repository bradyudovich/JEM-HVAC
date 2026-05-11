import type { MetadataRoute } from 'next'
import { blogPosts } from '@/app/lib/blogPosts'
import { siteConfig } from '@/app/lib/site-config'

const routes = [
  '/',
  '/about',
  '/blog',
  '/services',
  '/services/residential',
  '/services/commercial',
  '/services/maintenance',
  '/services/york-warranty',
  '/indoor-air-quality',
  '/refrigerant-loss',
  '/testimonials',
  '/faq',
  '/contact',
  ...blogPosts.map((post) => `/blog/${post.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
  }))
}
