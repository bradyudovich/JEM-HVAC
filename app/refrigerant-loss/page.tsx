import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export const metadata = createPageMetadata({
  pageName: 'Refrigerant Loss',
  description:
    'Understand refrigerant loss, leak diagnosis, and repair options for sealed HVAC systems.',
  path: '/refrigerant-loss',
})

export default function RefrigerantLossPage() {
  return (
    <>
      <PageHero
        title="Refrigerant Loss — What You Need to Know"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Residential', href: '/services/residential' },
          { label: 'Refrigerant Loss' },
        ]}
      />

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <article className="mx-auto max-w-3xl space-y-8">
          <section className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-2 text-xl font-display font-bold text-primary">Understanding Refrigerant in a Sealed System</h2>
            <p>
              Refrigerant belongs in a sealed system and should not be consumed over time. If levels
              are low, there is a leak that must be addressed.
            </p>
          </section>

          <section className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-2 text-xl font-display font-bold text-primary">How Systems Are Charged</h2>
            <p>
              Systems are charged during installation to match manufacturer specifications. Proper
              charging is critical for efficiency, comfort, and equipment reliability.
            </p>
          </section>

          <section className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-4 text-xl font-display font-bold text-primary">Your Two Options When Refrigerant Is Low</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
                <span>Add refrigerant to restore short-term operation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
                <span>Locate and repair the leak to correct the root issue.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-2 text-xl font-display font-bold text-primary">How We Find Leaks</h2>
            <p>
              We use proven detection methods to identify leaks in evaporator coils, condenser coils,
              and refrigerant lines, then provide repair recommendations.
            </p>
          </section>

          <section className="rounded-xl border border-amber-300 bg-amber-100 p-4 shadow-md md:p-6">
            <h2 className="mb-2 text-xl font-display font-bold text-primary">Policy</h2>
            <p className="text-amber-900">
              If you elect to add refrigerant or leak sealant, the risk is entirely yours. We will
              not refund or reimburse for repeat leaks or additional service.
            </p>
          </section>

          <Link
            href="/services/residential"
            className="inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-accent hover:underline focus-visible:underline"
          >
            ← Back to Residential Services
          </Link>
        </article>
      </section>

      <CTABanner
        heading="Need help with refrigerant issues?"
        subtext="Our team can inspect your system and explain the best next step."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
