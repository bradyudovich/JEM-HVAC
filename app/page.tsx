import Link from 'next/link'
import Image from 'next/image'

const serviceCards = [
  {
    title: 'Residential',
    description:
      'Reliable heating and cooling repairs, replacements, and tune-ups to keep your home comfortable year-round.',
    href: '/services/residential',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a4 4 0 1 0 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a4 4 0 1 1-4 4" />
      </svg>
    ),
  },
  {
    title: 'Commercial',
    description:
      'Professional HVAC solutions for offices, retail spaces, and facilities that demand dependable performance.',
    href: '/services/commercial',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7a2 2 0 0 1 2-2h7v16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 21V3h5a2 2 0 0 1 2 2v16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 9h1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 13h1" />
      </svg>
    ),
  },
  {
    title: 'Indoor Air Quality',
    description:
      'Cleaner, healthier indoor environments with filtration, purification, and airflow improvement solutions.',
    href: '/indoor-air-quality',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 13c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18c2 0 2-1.5 4-1.5S11 18 13 18s2-1.5 4-1.5S19 18 21 18" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Pat & Garret Falcone',
    quote: 'You guys are fabulous!! ...You are now our company to call!!',
  },
  {
    name: 'Robert Weyrich',
    quote:
      'He was punctual, competent, conscientious, and friendly. His efforts exceeded my expectations.',
  },
  {
    name: 'June Main',
    quote:
      "I'm so glad that I chose your firm...everyone was courteous and professional, and everything was left neat and orderly.",
  },
]

const trustStats = [
  { title: 'Since 1997', subtitle: 'In Business' },
  { title: 'Residential & Commercial', subtitle: 'Service' },
  { title: 'All Makes & Models', subtitle: 'Serviced' },
  { title: 'Emergency Service', subtitle: 'Available' },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 0 0-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary text-white">
        <Image
          src="/images/hero.jpg"
          alt="JEM Heating & Air Conditioning hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />

        <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-6 pb-16 pt-32 lg:px-8">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Trusted Heating & Cooling Solutions
            </p>
            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Carroll County&apos;s Trusted HVAC Experts Since 1997
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/85 sm:text-xl">
              Professional heating & cooling service, fast response times, and honest pricing for residential and commercial clients.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
              >
                Request Service
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto grid w-full max-w-[90rem] divide-y divide-white/10 px-6 py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
          {trustStats.map((stat) => (
            <div key={stat.title} className="px-6 py-4 text-center">
              <p className="text-lg font-semibold text-white">{stat.title}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/65">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="animate-fade-up text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Services Overview</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What We Do</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card, index) => (
              <article
                key={card.title}
                className="animate-fade-up rounded-2xl border-t-4 border-accent bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="text-primary">{card.icon}</div>
                <h3 className="mt-6 font-display text-3xl">{card.title}</h3>
                <p className="mt-4 text-muted">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent hover:text-primary"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[90rem] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-surface shadow-soft animate-fade-up">
            <Image
              src="/images/about-placeholder.jpg"
              alt="JEM Heating & Air Conditioning story"
              fill
              className="object-cover"
            />
          </div>

          <div className="animate-fade-up space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">About JEM</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              A Pickup Truck, a Handful of Tools, and a Dream
            </h2>
            <p className="max-w-2xl text-lg text-muted">
              JEM was founded on February 19, 1997 with a simple promise — quality craftsmanship, prompt service, and honest prices. While we&apos;ve grown over the years, that commitment to our customers has never changed.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-base font-semibold text-accent hover:text-primary"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="animate-fade-up text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">What Our Customers Say</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="animate-fade-up rounded-2xl bg-white p-8 shadow-soft"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <Stars />
                <p className="mt-6 text-muted">“{testimonial.quote}”</p>
                <p className="mt-6 text-base font-semibold text-primary">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="animate-fade-up max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Get Started</p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Ready to Schedule Service?</h2>
            <p className="mt-4 text-lg text-white/85">
              Call us toll-free or send a message — we respond quickly.
            </p>
          </div>

          <div className="animate-fade-up flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="tel:1-888-684-0657"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              Call 1-888-684-0657
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
