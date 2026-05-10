import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'Indoor Air Quality',
  description:
    'Indoor air quality solutions including electronic air cleaners, humidifiers, ERVs, and ultraviolet systems.',
  path: '/indoor-air-quality',
})

const cards = [
  {
    title: 'Electronic Air Cleaners',
    description:
      'Capture fine airborne particles that standard filters may miss. Helps reduce irritants in your living space.',
  },
  {
    title: 'Humidifiers',
    description:
      'Balance indoor humidity during winter months. Improve comfort while reducing dry air side effects.',
  },
  {
    title: 'Energy Recovery Ventilators',
    description:
      'Bring in fresh air while recovering energy from outgoing conditioned air. Great for tightly sealed homes.',
  },
  {
    title: 'UltraViolet Plus Systems',
    description:
      'Reduce microbial growth in HVAC equipment. Helps support cleaner air circulation in your home.',
  },
]

export default function IndoorAirQualityPage() {
  return (
    <>
      <PageHero
        title="Indoor Air Quality Solutions"
        subtitle="Healthy indoor air matters for comfort, sleep, and long-term wellness."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Indoor Air Quality' }]}
      />

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <p className="max-w-3xl text-muted">
            Indoor air quality can impact respiratory health, comfort, and HVAC performance. JEM
            offers proven IAQ solutions to help remove contaminants and balance humidity.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="rounded-2xl shadow-md bg-white p-6">
                <p className="text-accent text-2xl" aria-hidden="true">✦</p>
                <h2 className="mt-2 font-display text-2xl">{card.title}</h2>
                <p className="mt-3 text-muted">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want healthier air at home?"
        subtext="Talk with our team about the right IAQ upgrades for your system."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
