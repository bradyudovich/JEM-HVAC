'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navLinks } from '@/app/lib/services'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const isHome = pathname === '/'

  return (
    <>
      <header className={`sticky top-0 z-50 w-full ${isHome ? 'bg-transparent' : 'bg-primary'}`}>
        <div className="max-w-7xl mx-auto px-6 min-h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-accent">JEM</span>
            <span className="font-display text-sm text-white sm:text-base">Heating & Air Conditioning</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((item) => {
              if (!item.children) {
                return (
                  <Link key={item.href} href={item.href} className="text-white hover:text-accent text-sm font-medium">
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
                    className="text-white hover:text-accent text-sm font-medium"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                  </button>
                  <div
                    className={`absolute left-0 top-full mt-2 w-64 rounded-2xl bg-primary p-2 shadow-md ${
                      servicesOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="tel:1-888-684-0657"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary"
            >
              Call 1-888-684-0657
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-md border border-white/40 p-2 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden transition ${mobileOpen ? 'visible' : 'invisible'}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
          aria-label="Close mobile menu overlay"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full bg-primary p-8 text-white transition-transform ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-accent">JEM</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>
          <nav className="mt-8 space-y-4" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <div key={item.href} className="border-b border-white/20 pb-4">
                <Link
                  href={item.href}
                  className="text-lg hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-3 pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-white/80 hover:text-accent"
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
            className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            1-888-684-0657
          </Link>
        </aside>
      </div>
    </>
  )
}
