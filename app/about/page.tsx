import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'About',
  description:
    'Learn about JEM Heating and Air Conditioning and our commitment to honesty, integrity, and expediency since 1997.',
  path: '/about',
})

const values = [
  { title: 'Honesty', description: 'Clear communication and straightforward recommendations every time.' },
  { title: 'Integrity', description: 'We do what we say and stand behind our workmanship.' },
  { title: 'Expediency', description: 'Fast, dependable response when your comfort is on the line.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JEM Heating & Air Conditioning"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
            <h2 className="mb-4 text-4xl font-display font-bold text-primary">Built From the Ground Up</h2>
            <p>
              JEM was established on February 19, 1997. Armed with only a pickup truck, a handful
              of tools, and a dream, we set out to develop a company that would deliver quality
              craftsmanship, prompt service, and reasonable prices. While the company has grown
              over time, our dedication to customer service remains unchanged. We promise to fulfill
              your heating and cooling needs with uncompromised honesty, integrity, and expediency.
            </p>
          </div>
          <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-gray-200 text-lg text-gray-400">
            Company History Image Placeholder
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Our Values</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">How We Work</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border-t-4 border-accent bg-white p-8 shadow-md hover:shadow-xl">
                <p className="mb-4 text-3xl text-accent" aria-hidden="true">
                  ⭐
                </p>
                <h3 className="mb-2 text-xl font-display font-bold text-primary">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Service Area</p>
          <h2 className="mb-4 text-4xl font-display font-bold text-primary">Where We Serve</h2>
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
