'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const serviceItems = [
  { label: 'Residential', href: '/services/residential' },
  { label: 'Commercial', href: '/services/commercial' },
  { label: 'Maintenance Contract', href: '/services/maintenance' },
  { label: 'York Warranty', href: '/york-warranty' },
]

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', children: serviceItems },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const [openServices, setOpenServices] = useState(false)

  return (
    <>
      {navItems.map((item) => {
        const isActive = item.href === '/'
          ? pathname === '/'
          : pathname?.startsWith(item.href)

        if (!item.children) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive ? 'text-accent' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          )
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              type="button"
              onClick={() => setOpenServices((value) => !value)}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent ${
                isActive || item.children.some((child) => pathname?.startsWith(child.href))
                  ? 'text-accent'
                  : 'text-white'
              }`}
            >
              {item.label}
              <span className={`text-xs transition-transform ${openServices ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-primary p-3 shadow-soft transition-all ${
                openServices
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => {
                      setOpenServices(false)
                      onNavigate?.()
                    }}
                    className="block rounded-xl px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-accent"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = useMemo(() => pathname === '/', [pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          isHome ? 'bg-transparent' : 'bg-primary/95 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex min-h-20 w-full max-w-[90rem] items-center justify-between gap-6 px-6 lg:px-8">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-accent">JEM</span>
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-white sm:text-base">
              Heating & Air Conditioning
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href="tel:1-888-684-0657"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              1-888-684-0657
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white xl:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] xl:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-primary px-6 pb-8 pt-24 text-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-baseline gap-2">
            <span className="font-display text-3xl text-accent">JEM</span>
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-white">
              Heating & Air Conditioning
            </span>
          </div>

          <nav className="flex flex-1 flex-col gap-5">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-5">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>

                {item.children ? (
                  <div className="mt-4 grid gap-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-white/80 transition-colors hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link
            href="tel:1-888-684-0657"
            onClick={() => setMobileOpen(false)}
            className="mt-8 inline-flex justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            Call Now: 1-888-684-0657
          </Link>
        </aside>
      </div>
    </>
  )
}
