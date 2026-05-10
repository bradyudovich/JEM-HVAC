import type { ReactNode } from 'react'
import Link from 'next/link'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'
import { serviceLinks } from '@/app/lib/services'

type ServiceLayoutProps = {
  children: ReactNode
  title: string
  subtitle: string
}

export function ServiceLayout({ children, title, subtitle }: ServiceLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: title },
        ]}
      />

      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-8">{children}</div>
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl bg-white p-6 shadow-md">
            <h2 className="font-display text-2xl">Service Pages</h2>
            <nav className="mt-4 space-y-2" aria-label="Service pages">
              <Link
                href="/services"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-surface hover:text-accent"
              >
                Services Overview
              </Link>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-surface hover:text-accent"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <CTABanner
        heading="Need HVAC Help Right Away?"
        subtext="Call our team or send a message and we’ll help you choose the right service."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />
    </>
  )
}
