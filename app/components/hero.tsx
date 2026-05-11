import Link from 'next/link'
import { Container } from '@/app/components/ui'
import { buttonStyles, layoutClasses } from '@/app/lib/styles'

export function Hero() {
  return (
    <section className={`bg-primary text-center ${layoutClasses.homepageSection}`}>
      <Container>
        <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Carroll County, Maryland</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white mb-3 leading-tight">
          Carroll County&apos;s Trusted HVAC Experts Since 1997
        </h1>
        <p className="mx-auto max-w-3xl text-sm md:text-base text-white/75 leading-relaxed mb-6">
          Family-owned and community-focused. We’ve been keeping Carroll County comfortable for nearly 30 years — with honest work, fair prices, and people who actually pick up the phone.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={`${buttonStyles.primary} w-full sm:w-auto`}>
            Request Service
          </Link>
          <Link href="/services" className={`${buttonStyles.outline} w-full sm:w-auto`}>
            View Services
          </Link>
        </div>
      </Container>
    </section>
  )
}
