import type { ReactNode } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { cardStyles, layoutClasses } from '@/app/lib/styles'
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

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={`${layoutClasses.container} flex flex-col gap-8 lg:flex-row lg:gap-12`}>
          <div className="w-full space-y-8 lg:flex-1">{children}</div>
          <aside className={`hidden lg:block lg:sticky lg:top-28 lg:h-fit lg:w-72 lg:flex-shrink-0 ${cardStyles.surface}`}>
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Service Pages</p>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Explore More Services</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <nav className="space-y-3" aria-label="Service pages">
              <Link href="/services" className="flex items-start gap-3 text-sm text-gray-600 hover:text-accent">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Services Overview</span>
              </Link>
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="flex items-start gap-3 text-sm text-gray-600 hover:text-accent">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{service.label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <CTABanner
        heading="Need HVAC help right away?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />
    </>
  )
}
