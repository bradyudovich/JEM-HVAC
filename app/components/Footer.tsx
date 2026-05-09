import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-accent">JEM</span>
              <span className="text-sm font-medium uppercase tracking-[0.16em] text-white sm:text-base">
                Heating & Air Conditioning
              </span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Quality • Integrity • Expediency
            </p>
            <p className="max-w-md text-base text-white/75">
              Serving Carroll County, MD and surrounding areas since 1997.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white">Contact</h2>
            <div className="mt-5 space-y-3 text-white/80">
              <p>
                <span className="font-semibold text-white">Phone:</span>{' '}
                <Link href="tel:1-888-684-0657" className="transition-colors hover:text-accent">
                  1-888-684-0657
                </Link>
                {' / '}
                <Link href="tel:410-840-9328" className="transition-colors hover:text-accent">
                  410-840-9328
                </Link>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <Link href="mailto:contact@4jem.com" className="transition-colors hover:text-accent">
                  contact@4jem.com
                </Link>
              </p>
              <p>
                <span className="font-semibold text-white">Address:</span> 150 Airport Drive Unit 1,
                Westminster, MD 21157
              </p>
              <div>
                <p className="font-semibold text-white">Hours:</p>
                <p>Mon–Fri 8AM–4:30PM</p>
                <p>Sat–Sun Closed</p>
                <p>Emergencies: Call for Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/65">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 JEM Heating and Air Conditioning, Inc. All rights reserved.</p>
            <p>York Authorized Dealer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
