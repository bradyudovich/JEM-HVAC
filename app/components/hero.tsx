import Link from 'next/link'
import { Container } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function Hero() {
  return (
    <section className="bg-primary min-h-screen flex items-center justify-center text-center px-6">
      <Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Carroll County, Maryland</p>
        <h1 className="mb-6 text-6xl font-display font-bold leading-tight text-white md:text-7xl">
          Carroll County’s Trusted HVAC Experts Since 1997
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-white/70">
          {siteConfig.name} provides expert installations, reliable repairs, and proactive maintenance for homes and businesses.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="#contact" className="rounded-full bg-accent px-10 py-4 font-semibold text-white hover:bg-orange-600">
            Request Service
          </Link>
          <Link href="#services" className="rounded-full border-2 border-white px-10 py-4 font-semibold text-white hover:bg-white hover:text-primary">
            Explore Services
          </Link>
        </div>
      </Container>
    </section>
  )
}
