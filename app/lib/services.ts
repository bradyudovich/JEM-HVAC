export type ServiceLink = {
  label: string
  href: string
}

export const serviceLinks: ServiceLink[] = [
  { label: 'Residential', href: '/services/residential' },
  { label: 'Commercial', href: '/services/commercial' },
  { label: 'Maintenance Contract', href: '/services/maintenance' },
  { label: 'York Warranty', href: '/services/york-warranty' },
]

export const navLinks: Array<ServiceLink & { children?: ServiceLink[] }> = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', children: serviceLinks },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]
