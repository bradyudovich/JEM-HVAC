import Link from 'next/link'
import { Container } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function Hero() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Trusted HVAC Professionals
              </p>
              <h1 className="max-w-4xl font-display text-5xl leading-tight text-primary sm:text-6xl">
                Heating and cooling solutions built around comfort, quality, and trust.
              </h1>
              <p className="max-w-2xl text-lg text-muted">
                {siteConfig.name} provides expert installations, reliable repairs, and
                proactive maintenance for homes and businesses.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-primary"
              >
                Request Service
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary hover:bg-primary hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Why homeowners choose JEM
              </p>
              <ul className="space-y-4 text-muted">
                <li>• Fast response times and dependable scheduling</li>
                <li>• Honest recommendations and quality workmanship</li>
                <li>• Residential and commercial HVAC expertise</li>
                <li>• Seasonal maintenance to protect your investment</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
