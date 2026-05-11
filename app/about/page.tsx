import { BadgeCheck, Shield, Zap } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { createPageMetadata } from '@/app/lib/metadata'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

export const metadata = createPageMetadata({
  pageName: 'About',
  description:
    'Learn about JEM Heating and Air Conditioning and our commitment to honesty, integrity, and expediency since 1997.',
  path: '/about',
})

const values = [
  {
    icon: Shield,
    title: 'Honesty',
    body: 'Clear communication, fair recommendations, and no pressure — just straightforward service from people you can trust.',
  },
  {
    icon: BadgeCheck,
    title: 'Integrity',
    body: 'We stand behind our work, keep our word, and treat your home or business with care and respect.',
  },
  {
    icon: Zap,
    title: 'Expediency',
    body: 'When your comfort system is down, we move quickly and keep the process simple from start to finish.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JEM Heating & Air Conditioning"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={`${layoutClasses.container} grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16`}>
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Our Story</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Built From the Ground Up</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              JEM was established on February 19, 1997. Armed with only a pickup truck, a handful of tools, and a dream, we set out to build a company known for dependable service, honest pricing, and work that lasts.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Over the years we’ve grown, but our values haven’t. Every technician we send to your home is someone we’d trust in our own. Every price we quote is the price you pay. That’s the JEM way.
            </p>
          </div>
          <div className="h-64 w-full rounded-2xl bg-surface shadow-sm md:h-80" aria-hidden="true" />
        </div>
      </section>

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Our Values</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">How We Work</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {values.map((value) => (
              <article key={value.title} className={`${cardStyles.standard} group h-full flex flex-col`}>
                <div className={cardStyles.iconContainer}>
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Service Area</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Where We Serve</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="max-w-3xl text-sm md:text-base text-gray-600 leading-relaxed">
            We proudly serve Westminster, New Windsor, Carroll County, and surrounding Maryland communities with responsive residential and commercial HVAC service.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Questions? We’re easy to reach."
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
