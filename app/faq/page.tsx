import { CTABanner } from '@/app/components/CTABanner'
import { FAQAccordion } from '@/app/components/FAQAccordion'
import { PageHero } from '@/app/components/PageHero'
import { faqs } from '@/app/lib/faqs'
import { createPageMetadata } from '@/app/lib/metadata'
import { layoutClasses } from '@/app/lib/styles'

export const metadata = createPageMetadata({
  pageName: 'FAQ',
  description:
    'Frequently asked questions about HVAC service, maintenance, emergency calls, and financing.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Answers to Common Questions</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still have questions?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
