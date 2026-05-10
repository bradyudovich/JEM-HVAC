import { Shield, BadgeCheck, Zap } from 'lucide-react'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'About',
  description:
    'Learn about JEM Heating and Air Conditioning and our commitment to honesty, integrity, and expediency since 1997.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JEM Heating & Air Conditioning"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="bg-white px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
            <h2 className="mb-4 text-2xl font-display font-bold text-primary md:text-4xl">Built From the Ground Up</h2>
            <p>
              JEM was established on February 19, 1997. Armed with only a pickup truck, a handful
              of tools, and a dream, we set out to develop a company that would deliver quality
              craftsmanship, prompt service, and reasonable prices. While the company has grown
              over time, our dedication to customer service remains unchanged. We promise to fulfill
              your heating and cooling needs with uncompromised honesty, integrity, and expediency.
            </p>
          </div>
          <div className="order-last flex h-56 w-full items-center justify-center rounded-2xl bg-gray-200 text-lg text-gray-400 md:order-none md:h-80">
            Company History Image Placeholder
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Our Values</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">How We Work</h2>
            <div className="w-12 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Honesty</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clear communication and straightforward recommendations every time. No upselling, no surprises.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Integrity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We do what we say and stand behind every job. If something isn&apos;t right, we make it right.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-2">Expediency</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fast, dependable response when your comfort is on the line. We know waiting isn&apos;t an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 text-center md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Service Area</p>
          <h2 className="mb-4 text-2xl font-display font-bold text-primary md:text-4xl">Where We Serve</h2>
          <p>
            Proudly serving Westminster, New Windsor, Carroll County, and surrounding Maryland
            areas.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Questions? We’re easy to reach."
        subtext="Our team is ready to help with your heating and cooling needs."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
