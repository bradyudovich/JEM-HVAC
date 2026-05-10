import Link from 'next/link'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'York Extended Warranty',
  description:
    'Review and accept York Comfort Plan extended warranty terms through JEM Heating and Air Conditioning.',
  path: '/services/york-warranty',
})

const fieldClass =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'

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

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          <article className="rounded-2xl bg-white p-8 shadow-md">
            <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">
              York Comfort Plan — Terms & Conditions
            </h2>
            <Link href="/york_warranty.pdf" className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600">
              Download PDF
            </Link>
          </article>

          <form className="rounded-2xl bg-white p-8 shadow-md space-y-4">
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" name="acceptTerms" className="mt-1" />
              <span>I accept the York Comfort Plan terms and conditions</span>
            </label>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-gray-700">Name<input type="text" name="name" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700">Address<input type="text" name="address" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700">City<input type="text" name="city" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700">State<input type="text" name="state" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700">Zip<input type="text" name="zip" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700">Phone<input type="tel" name="phone" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-gray-700 md:col-span-2">Email<input type="email" name="email" className={fieldClass} /></label>
            </div>
            <button type="submit" className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600">Submit</button>
          </form>
        </div>
      </section>

      <CTABanner
        heading="Questions about warranty coverage?"
        subtext="Our team can walk you through your options and next steps."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
