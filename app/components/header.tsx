import Link from 'next/link'
import { siteConfig } from '@/app/lib/site-config'
import { Container } from '@/app/components/ui'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="border-b border-black/5 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-primary">
              JEM Heating & Air Conditioning
            </p>
            <p className="text-sm text-muted">Reliable comfort for every season</p>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-primary"
          >
            {siteConfig.cta}
          </Link>
        </div>
      </Container>
    </header>
  )
}
