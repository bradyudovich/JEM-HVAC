import Link from 'next/link'
import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'

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

      <section className="py-12 md:py-20 bg-surface">
        <article className="max-w-3xl mx-auto px-6 space-y-8">
          <section>
            <h2 className="font-display text-3xl">Understanding Refrigerant in a Sealed System</h2>
            <p className="mt-3 text-muted">
              Refrigerant belongs in a sealed system and should not be consumed over time. If levels
              are low, there is a leak that must be addressed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl">How Systems Are Charged</h2>
            <p className="mt-3 text-muted">
              Systems are charged during installation to match manufacturer specifications. Proper
              charging is critical for efficiency, comfort, and equipment reliability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl">Your Two Options When Refrigerant Is Low</h2>
            <ol className="mt-3 list-decimal list-inside text-muted space-y-2">
              <li>Add refrigerant to restore short-term operation.</li>
              <li>Locate and repair the leak to correct the root issue.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-3xl">How We Find Leaks</h2>
            <p className="mt-3 text-muted">
              We use proven detection methods to identify leaks in evaporator coils, condenser coils,
              and refrigerant lines, then provide repair recommendations.
            </p>
          </section>

          <section className="rounded-2xl border border-amber-300 bg-amber-100 p-6">
            <h2 className="font-display text-3xl">Policy</h2>
            <p className="mt-3 text-amber-900">
              If you elect to add refrigerant or leak sealant, the risk is entirely yours. We will
              not refund or reimburse for repeat leaks or additional service.
            </p>
          </section>

          <Link href="/services/residential" className="inline-block font-semibold text-accent hover:text-primary">
            ← Back to Residential Services
          </Link>
        </article>
      </section>
    </>
  )
}
