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

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">{children}</div>
          <aside className="h-fit rounded-2xl bg-surface p-8 shadow-md lg:sticky lg:top-28">
            <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">
              Service Pages
            </h2>
            <nav className="space-y-2" aria-label="Service pages">
              <Link href="/services" className="block text-sm font-medium text-accent hover:underline">
                Services Overview
              </Link>
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="block text-sm font-medium text-accent hover:underline">
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
