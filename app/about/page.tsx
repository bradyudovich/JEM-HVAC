import Image from 'next/image'
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

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-4xl">Built From the Ground Up</h2>
            <p className="mt-4 text-muted">
              JEM was established on February 19, 1997. Armed with only a pickup truck, a handful
              of tools, and a dream, we set out to develop a company that would deliver quality
              craftsmanship, prompt service, and reasonable prices. While the company has grown
              over time, our dedication to customer service remains unchanged. We promise to fulfill
              your heating and cooling needs with uncompromised honesty, integrity, and expediency.
            </p>
          </div>
          <div className="rounded-2xl shadow-md bg-surface overflow-hidden">
            <Image
              src="/images/placeholder.svg"
              alt="JEM Heating and Air Conditioning company history"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl shadow-md bg-white p-6">
              <p className="text-accent text-2xl" aria-hidden="true">◆</p>
              <h3 className="mt-3 font-display text-2xl">{value.title}</h3>
              <p className="mt-2 text-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl">Service Area</h2>
          <p className="mt-4 text-muted">
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
