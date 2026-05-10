import Link from 'next/link'
import Image from 'next/image'
import { createPageMetadata } from '@/app/lib/metadata'

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn how Westminster MD HVAC company JEM Heating & Air Conditioning delivers trusted heating, cooling, and indoor comfort service for homes and businesses.',
  path: '/about',
})

const values = [
  {
    title: 'Honesty',
    description:
      'We tell you exactly what you need — no upselling, no surprises.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.75 1.75L15 10" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      'We show up on time, do the job right the first time, and stand behind our work.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    title: 'Expediency',
    description:
      "We know a broken HVAC isn't just an inconvenience. We respond fast.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v5l3 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
      </svg>
    ),
  },
]

const brands = ['York Authorized Dealer', 'WaterFurnace Geothermal', 'All Makes & Models Serviced']

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-primary text-white">
        <Image
          src="/images/about-hero.jpg"
          alt="About JEM Heating & Air Conditioning"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-14 pt-32 lg:px-8">
          <nav aria-label="Breadcrumb" className="animate-fade-up text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li className="text-white">About</li>
            </ol>
          </nav>

          <div className="mt-6 animate-fade-up">
            <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              About JEM Heating & Air Conditioning
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[90rem] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="animate-fade-up space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl">Built From the Ground Up</h2>
            <div className="space-y-5 text-lg text-muted">
              <p>
                JEM was established on February 19, 1997. Armed with only a pickup truck, a handful of tools, and a dream, we set out to develop a company that would deliver quality craftsmanship, prompt service, and reasonable prices.
              </p>
              <p>
                While the company has grown over time, our dedication to customer service remains unchanged. We promise to fulfill your heating and cooling needs with uncompromised honesty, integrity, and expediency.
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-surface shadow-soft animate-fade-up">
            <Image
              src="/images/about-story.jpg"
              alt="JEM company story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="animate-fade-up text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Our Values</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">How We Do Business</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="animate-fade-up rounded-2xl border-t-4 border-accent bg-white p-8 shadow-soft"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="text-primary">{value.icon}</div>
                <h3 className="mt-6 font-display text-3xl">{value.title}</h3>
                <p className="mt-4 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent animate-fade-up">
            Service Area
          </p>
          <h2 className="mt-4 animate-fade-up font-display text-4xl sm:text-5xl">
            Proudly Serving Our Maryland Communities
          </h2>
          <p className="mt-6 animate-fade-up text-lg text-muted">
            Proudly serving Westminster, New Windsor, Carroll County, and surrounding areas in Maryland.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="animate-fade-up text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Partners & Brands</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Trusted Equipment. Proven Service.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="animate-fade-up flex min-h-[140px] items-center justify-center rounded-2xl bg-white p-8 text-center shadow-soft"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="font-display text-2xl text-primary">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="animate-fade-up max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Contact Us</p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
              Questions? We&apos;re easy to reach.
            </h2>
          </div>

          <div className="animate-fade-up flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
