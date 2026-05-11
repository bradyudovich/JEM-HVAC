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

      <section className="bg-white px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12 lg:flex-row">
          <div className="w-full space-y-8 lg:flex-1">{children}</div>
          <aside className="hidden h-fit w-64 flex-shrink-0 rounded-2xl bg-surface p-8 shadow-md lg:sticky lg:top-28 lg:block">
            <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">
              Service Pages
            </h2>
            <nav className="space-y-2" aria-label="Service pages">
              <Link
                href="/services"
                className="flex min-h-[44px] min-w-[44px] items-center text-sm font-medium text-accent hover:underline focus-visible:underline"
              >
                Services Overview
              </Link>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex min-h-[44px] min-w-[44px] items-center text-sm font-medium text-accent hover:underline focus-visible:underline"
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
