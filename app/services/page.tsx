import Link from 'next/link'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'

export const metadata = createPageMetadata({
  pageName: 'Services',
  description:
    'Explore residential, commercial, and maintenance HVAC services from JEM Heating and Air Conditioning.',
  path: '/services',
})

const serviceCards = [
  {
    title: 'Residential Services',
    description: 'Complete home heating and cooling support for all makes and models.',
    href: '/services/residential',
  },
  {
    title: 'Commercial Services',
    description: 'Repair, maintenance, and replacement for business HVAC equipment.',
    href: '/services/commercial',
  },
  {
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

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <p className="max-w-3xl text-muted">
            JEM provides dependable HVAC service across Carroll County, from emergency repairs and
            preventive maintenance to complete system replacement.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-2xl shadow-md bg-white p-6">
                <h2 className="font-display text-2xl">{card.title}</h2>
                <p className="mt-3 text-muted">{card.description}</p>
                <Link href={card.href} className="mt-4 inline-block font-semibold text-accent hover:text-primary">
                  View Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
