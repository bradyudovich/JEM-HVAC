import Link from 'next/link'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'

export const metadata = createPageMetadata({
  pageName: 'York Extended Warranty',
  description:
    'Review and accept York Comfort Plan extended warranty terms through JEM Heating and Air Conditioning.',
  path: '/services/york-warranty',
})

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

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <article className="rounded-2xl shadow-md bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="font-display text-3xl">York Comfort Plan — Terms & Conditions</h2>
            <Link href="/york_warranty.pdf" className="rounded-full bg-accent px-6 py-3 text-white font-semibold text-center hover:opacity-90">
              Download PDF
            </Link>
          </article>

          <form className="rounded-2xl shadow-md bg-white p-6 space-y-4">
            <label className="flex gap-2">
              <input type="checkbox" name="acceptTerms" /> I accept the York Comfort Plan terms and conditions
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <label>Name<input type="text" name="name" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label>Address<input type="text" name="address" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label>City<input type="text" name="city" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label>State<input type="text" name="state" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label>Zip<input type="text" name="zip" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label>Phone<input type="tel" name="phone" className="mt-1 w-full rounded-xl border p-2" /></label>
              <label className="md:col-span-2">Email<input type="email" name="email" className="mt-1 w-full rounded-xl border p-2" /></label>
            </div>
            <button type="submit" className="rounded-full bg-accent px-6 py-3 text-white font-semibold">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}
