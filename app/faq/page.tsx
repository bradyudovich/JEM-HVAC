import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { FAQAccordion } from '@/app/components/FAQAccordion'
import { CTABanner } from '@/app/components/CTABanner'
import { faqs } from '@/app/lib/faqs'

export const metadata = createPageMetadata({
  pageName: 'FAQ',
  description:
    'Frequently asked questions about HVAC service, maintenance, emergency calls, and financing.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="bg-white px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mb-4 text-2xl font-display font-bold text-primary md:text-4xl">Answers to Common Questions</h2>
          <div className="max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still have questions?"
        subtext="Our team is happy to help with your HVAC needs."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
