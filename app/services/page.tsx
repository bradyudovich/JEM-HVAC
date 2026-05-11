import Link from 'next/link'
import { Building2, Home, Wrench } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { createPageMetadata } from '@/app/lib/metadata'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

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
    description: 'Repair, maintenance, and replacement support for business HVAC equipment.',
    href: '/services/commercial',
  },
  {
    icon: Wrench,
    title: 'Maintenance Contract',
    description: 'Preventive maintenance agreements designed for long-term comfort and reliability.',
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

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Services</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Complete HVAC Support</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="max-w-3xl text-sm md:text-base text-gray-600 leading-relaxed">
            JEM provides dependable HVAC service across Carroll County, from emergency repairs and preventive maintenance to complete system replacement.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {serviceCards.map((card) => (
              <article key={card.title} className={`${cardStyles.standard} group h-full flex flex-col`}>
                <div className={cardStyles.iconContainer}>
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.description}</p>
                <Link href={card.href} className="mt-5 inline-flex items-center text-sm font-semibold text-accent hover:underline">
                  View Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need HVAC service now?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
