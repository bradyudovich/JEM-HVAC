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

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <FAQAccordion items={faqs} />
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
