'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from '@/app/components/Logo'
import { buttonStyles, layoutClasses } from '@/app/lib/styles'
import { navLinks } from '@/app/lib/services'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <div className={`bg-accent text-white text-xs text-center px-4 ${layoutClasses.announcement}`}>
        <span className="font-medium">Serving Carroll County since 1997</span>
        <span className="mx-2 opacity-60">|</span>
        <span>Mon–Fri 8AM–4:30PM</span>
        <span className="mx-2 opacity-60">|</span>
        <span>Emergency service available</span>
        <span className="mx-2 opacity-60">|</span>
        <a href="tel:18886840657" className="font-semibold underline hover:no-underline">
          1-888-684-0657
        </a>
      </div>
      <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
        <div className={`${layoutClasses.container} flex h-16 items-center justify-between gap-4 md:h-20`}>
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <Logo size="md" light />
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Main navigation">
            {navLinks.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center text-sm font-semibold hover:text-accent ${pathname === item.href ? 'text-accent' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )
              }

              const isActive = pathname === item.href || item.children.some((child) => pathname === child.href)

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center text-sm font-semibold hover:text-accent ${isActive ? 'text-accent' : 'text-white'}`}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                  </button>
                  <div
                    className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-primary p-3 shadow-md ${
                      servicesOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`mb-1 flex items-center rounded-2xl px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-accent ${
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
            <Link href="tel:1-888-684-0657" className={`${buttonStyles.primary} hidden md:inline-flex`}>
              <Phone className="h-4 w-4" />
              Call 1-888-684-0657
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 p-2 text-white hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-150 md:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-expanded={mobileOpen}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-primary text-white transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className={`${layoutClasses.container} flex h-16 items-center justify-between`}>
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Logo size="sm" light />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-md border-2 border-white/40 p-2 text-white hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-150"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-6" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <div key={item.href} className="border-b border-white/10">
              <Link
                href={item.href}
                className="flex items-center py-4 text-base font-semibold text-white hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="pb-3 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center py-2 text-sm text-white/80 hover:text-accent"
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

        <div className="px-4 pb-6">
          <Link
            href="tel:1-888-684-0657"
            className={`${buttonStyles.outline} w-full`}
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="h-4 w-4" />
            Call 1-888-684-0657
          </Link>
        </div>
      </div>
    </>
  )
}
