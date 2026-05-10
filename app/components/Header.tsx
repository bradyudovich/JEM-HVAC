'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navLinks } from '@/app/lib/services'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 h-20 w-full bg-primary shadow-lg">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-6">
          <Link href="/" className="flex items-baseline gap-2" onClick={() => setMobileOpen(false)}>
            <span className="font-display text-2xl font-bold text-accent">JEM</span>
            <span className="text-sm text-white">Heating & Air Conditioning</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm uppercase tracking-wide hover:text-accent ${pathname === item.href ? 'text-accent' : 'text-white'}`}
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
                    className="text-sm uppercase tracking-wide text-white hover:text-accent"
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
                        className={`mb-1 block rounded-xl px-4 py-2 text-sm uppercase tracking-wide text-white hover:bg-white/10 hover:text-accent ${
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
              className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Call 1-888-684-0657
            </Link>

            <button
              type="button"
              className="rounded-full border border-white/30 px-3 py-1 text-2xl leading-none text-white lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
          aria-label="Close mobile menu overlay"
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full bg-primary p-8 text-white ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-accent">JEM</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-2xl">
              ✕
            </button>
          </div>

          <nav className="space-y-4" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <div key={item.href} className="border-b border-white/20 pb-4">
                <Link
                  href={item.href}
                  className="block text-base uppercase tracking-wide text-white hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-3 space-y-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm uppercase tracking-wide text-white/80 hover:text-accent"
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
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-orange-600"
            onClick={() => setMobileOpen(false)}
          >
            Call 1-888-684-0657
          </Link>
        </aside>
      </div>
    </>
  )
}
