import Link from 'next/link'
import { ServiceLayout } from '@/app/components/ServiceLayout'
import { createPageMetadata } from '@/app/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore Westminster MD HVAC services from JEM, including heating and air conditioning repair, replacement, maintenance agreements, and indoor comfort solutions.',
  path: '/services',
})

const cards = [
  {
    title: 'Residential Services',
    description:
      'Heating and cooling repair, replacement, upgrades, and indoor comfort solutions for your home.',
    href: '/services/residential',
  },
  {
    title: 'Commercial Services',
    description:
      'Maintenance, repair, and replacement for packaged rooftop equipment and other commercial HVAC systems.',
    href: '/services/commercial',
  },
  {
    title: 'Maintenance Contracts',
    description:
      'Protect system performance with a preventive maintenance agreement tailored to your equipment and schedule.',
    href: '/services/maintenance',
  },
]

export default function ServicesPage() {
  return (
    <ServiceLayout
      title="Our Services"
      intro="JEM Heating and Air Conditioning offers both residential and commercial HVAC services. Our experienced team has the knowledge to service, repair, and replace all makes and models."
    >
      <div className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
        <h2 className="font-display text-3xl text-primary">Service Categories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border-t-4 border-accent bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="font-display text-2xl text-primary">{card.title}</h3>
              <p className="mt-4 text-muted">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-accent hover:text-primary"
              >
                Explore Service →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </ServiceLayout>
  )
}
