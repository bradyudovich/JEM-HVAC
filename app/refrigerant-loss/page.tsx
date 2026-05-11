import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { createPageMetadata } from '@/app/lib/metadata'
import { buttonStyles, cardStyles, layoutClasses } from '@/app/lib/styles'

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

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <article className={`${layoutClasses.editorial} space-y-6`}>
          <section className={cardStyles.standard}>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Understanding Refrigerant in a Sealed System</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Refrigerant belongs in a sealed system and should not be used up over time. If levels are low, there is a leak that needs to be addressed.
            </p>
          </section>

          <section className={cardStyles.standard}>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">How Systems Are Charged</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Systems are charged during installation to match manufacturer specifications. Proper charging is essential for comfort, efficiency, and long-term reliability.
            </p>
          </section>

          <section className={cardStyles.standard}>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-4">Your Two Options When Refrigerant Is Low</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">Add refrigerant to restore short-term operation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">Locate and repair the leak to correct the root issue.</span>
              </li>
            </ul>
          </section>

          <section className={cardStyles.standard}>
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">How We Find Leaks</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We use proven leak detection methods to inspect evaporator coils, condenser coils, and refrigerant lines before we recommend the next step.
            </p>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
            <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Policy</h2>
            <p className="text-sm md:text-base text-amber-900 leading-relaxed">
              If you choose to add refrigerant or leak sealant, the risk is entirely yours. We do not refund or reimburse for repeat leaks or additional service tied to that decision.
            </p>
          </section>

          <Link href="/services/residential" className={`${buttonStyles.secondary} w-full sm:w-auto`}>
            Back to Residential Services
          </Link>
        </article>
      </section>

      <CTABanner
        heading="Need help with refrigerant issues?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
