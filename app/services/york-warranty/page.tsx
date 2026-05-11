import Link from 'next/link'
import { buttonStyles, cardStyles, layoutClasses } from '@/app/lib/styles'
import { createPageMetadata } from '@/app/lib/metadata'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'

export const metadata = createPageMetadata({
  pageName: 'York Extended Warranty',
  description:
    'Review and accept York Comfort Plan extended warranty terms through JEM Heating and Air Conditioning.',
  path: '/services/york-warranty',
})

const fieldClass =
  'w-full rounded-md border border-gray-200 px-4 py-3 text-sm md:text-base text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

export default function YorkWarrantyPage() {
  return (
    <>
      <PageHero
        title="York Extended Warranty"
        subtitle="As an authorized York dealer, JEM offers the York Comfort Plan Extended Warranty."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'York Extended Warranty' },
        ]}
      />

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={`${layoutClasses.container} space-y-8`}>
          <article className={cardStyles.standard}>
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Warranty Details</p>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">York Comfort Plan — Terms & Conditions</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <Link href="/york_warranty.pdf" className={`${buttonStyles.secondary} w-full sm:w-auto`}>
              Download PDF
            </Link>
          </article>

          <form className={`${cardStyles.standard} space-y-4`}>
            <label className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
              <input type="checkbox" name="acceptTerms" className="mt-1 accent-accent" />
              <span>I accept the York Comfort Plan terms and conditions</span>
            </label>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-primary">Name<input type="text" name="name" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary">Address<input type="text" name="address" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary">City<input type="text" name="city" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary">State<input type="text" name="state" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary">Zip<input type="text" name="zip" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary">Phone<input type="tel" name="phone" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-primary md:col-span-2">Email<input type="email" name="email" className={fieldClass} /></label>
            </div>
            <button type="submit" className={`${buttonStyles.primary} w-full`}>
              Submit
            </button>
          </form>
        </div>
      </section>

      <CTABanner
        heading="Questions about warranty coverage?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
