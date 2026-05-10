import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function Hero() {
  return (
    <section className="min-h-screen bg-primary px-4 text-center md:px-6">
      <Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Carroll County, Maryland</p>
        <h1 className="mb-6 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Carroll County’s Trusted HVAC Experts Since 1997
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base text-white/70 md:text-xl">
          {siteConfig.name} provides expert installations, reliable repairs, and proactive maintenance for homes and businesses.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="#contact" className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full bg-accent px-8 py-3 text-center font-semibold text-white hover:bg-orange-600 focus-visible:bg-orange-600 sm:w-auto md:py-4">
            Request Service
          </Link>
          <Link href="#services" className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full border-2 border-white px-8 py-3 text-center font-semibold text-white hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary sm:w-auto md:py-4">
            Explore Services
          </Link>
        </div>
        <div className="mt-16 flex justify-center">
          <ChevronDown className="h-8 w-8 animate-bounce text-white/40" aria-hidden="true" />
        </div>
      </Container>
    </section>
  )
}
