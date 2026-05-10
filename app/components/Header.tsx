'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks } from '@/app/lib/services'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 md:h-20 md:px-8">
          <Link href="/" className="flex items-baseline gap-2" onClick={() => setMobileOpen(false)}>
            <span className="font-display text-lg font-bold text-accent md:text-2xl">JEM</span>
            <span className="hidden text-xs text-white sm:inline md:text-sm">Heating & Air Conditioning</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Main navigation">
            {navLinks.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex min-h-[44px] min-w-[44px] items-center text-sm uppercase tracking-wide hover:text-accent focus-visible:text-accent ${pathname === item.href ? 'text-accent' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="min-h-[44px] min-w-[44px] text-sm uppercase tracking-wide text-white hover:text-accent focus-visible:text-accent"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                  </button>
                  <div
                    className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-primary p-3 shadow-xl ${
                      servicesOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`mb-1 flex min-h-[44px] min-w-[44px] items-center rounded-xl px-4 py-2 text-sm uppercase tracking-wide text-white hover:bg-white/10 hover:text-accent focus-visible:bg-white/10 focus-visible:text-accent ${
                          pathname === child.href ? 'text-accent' : ''
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="tel:1-888-684-0657"
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:bg-orange-600 md:px-6"
            >
              <Phone className="h-4 w-4" />
              <span className="md:hidden">Call</span>
              <span className="hidden md:inline">Call 1-888-684-0657</span>
            </Link>

            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-full border border-white/30 p-2 text-white md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-primary text-white transition-transform md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex h-16 items-center justify-between px-4 md:h-20">
          <span className="font-display text-lg font-bold text-accent">JEM</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-[44px] min-w-[44px] items-center border-b border-white/10 px-6 py-4 text-lg text-white hover:text-accent focus-visible:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex min-h-[44px] min-w-[44px] items-center border-b border-white/10 px-10 py-4 text-sm uppercase tracking-wide text-white/80 hover:text-accent focus-visible:text-accent"
                      onClick={() => setMobileOpen(false)}
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
          className="mx-6 mb-6 mt-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 focus-visible:bg-orange-600"
          onClick={() => setMobileOpen(false)}
        >
          <Phone className="h-4 w-4" />
          Call 1-888-684-0657
        </Link>
      </div>
    </>
  )
}
