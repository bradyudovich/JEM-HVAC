import Link from 'next/link'
import { Building2, Home, Wrench } from 'lucide-react'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'Services',
  description:
    'Explore residential, commercial, and maintenance HVAC services from JEM Heating and Air Conditioning.',
  path: '/services',
})

const serviceCards = [
  {
    icon: Home,
    title: 'Residential Services',
    description: 'Complete home heating and cooling support for all makes and models.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial Services',
    description: 'Repair, maintenance, and replacement for business HVAC equipment.',
    href: '/services/commercial',
  },
  {
    icon: Wrench,
    title: 'Maintenance Contract',
    description: 'Preventive maintenance agreements for long-term comfort and reliability.',
    href: '/services/maintenance',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Residential and commercial heating and cooling services delivered with quality, integrity, and expediency."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mb-4 text-2xl font-display font-bold text-primary md:text-4xl">Complete HVAC Support</h2>
          <p>
            JEM provides dependable HVAC service across Carroll County, from emergency repairs and
            preventive maintenance to complete system replacement.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md hover:shadow-xl md:p-8">
                <card.icon className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-display font-bold text-primary md:text-xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-semibold text-accent hover:underline focus-visible:underline"
                >
                  View Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need HVAC service now?"
        subtext="Our team is ready to help with fast, dependable support."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
