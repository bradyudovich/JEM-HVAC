import { Wind } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { createPageMetadata } from '@/app/lib/metadata'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

export const metadata = createPageMetadata({
  pageName: 'Indoor Air Quality',
  description:
    'Indoor air quality solutions including electronic air cleaners, humidifiers, ERVs, and ultraviolet systems.',
  path: '/indoor-air-quality',
})

const cards = [
  {
    title: 'Electronic Air Cleaners',
    description: 'Capture fine airborne particles that standard filters may miss and help reduce common irritants.',
  },
  {
    title: 'Humidifiers',
    description: 'Balance indoor humidity during dry winter months for better comfort throughout your home.',
  },
  {
    title: 'Energy Recovery Ventilators',
    description: 'Bring in fresh air while keeping your system efficient, especially in tightly sealed homes.',
  },
  {
    title: 'Ultraviolet Systems',
    description: 'Reduce microbial growth inside HVAC equipment and support cleaner air circulation.',
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

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Indoor Air Quality</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Cleaner, Healthier Indoor Air</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="max-w-3xl text-sm md:text-base text-gray-600 leading-relaxed">
            Indoor air quality affects comfort, sleep, and overall well-being. JEM offers practical upgrades that help reduce pollutants and balance humidity in your home.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {cards.map((card) => (
              <article key={card.title} className={`${cardStyles.standard} group h-full flex flex-col`}>
                <div className={cardStyles.iconContainer}>
                  <Wind className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want healthier air at home?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
