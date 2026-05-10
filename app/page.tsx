import Link from 'next/link'
import { BadgeCheck, Building2, ChevronDown, Clock, Home, Phone, Shield, ThumbsUp, Wind } from 'lucide-react'
import { createPageMetadata } from '@/app/lib/metadata'
import { testimonials } from '@/app/lib/testimonials'
import { CTABanner } from '@/app/components/CTABanner'
import { TestimonialCard } from '@/app/components/TestimonialCard'

export const metadata = createPageMetadata({
  pageName: 'Home',
  description:
    'Carroll County’s trusted HVAC experts since 1997 for residential and commercial heating and cooling service.',
  path: '/',
})

const trustItems = [
  { value: '1997', label: 'Since', description: 'Serving Carroll County' },
  { value: '24/7', label: 'Support', description: 'Emergency Service Available' },
  { value: '100%', label: 'Coverage', description: 'All Makes & Models Serviced' },
  { value: '2', label: 'Markets', description: 'Residential & Commercial' },
]

const serviceCards = [
  {
    icon: Home,
    title: 'Residential HVAC',
    description: 'Repair, replacement, and system upgrades for total home comfort.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial HVAC',
    description: 'Responsive maintenance and repair for business-critical systems.',
    href: '/services/commercial',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Filtration and purification options to improve indoor health and comfort.',
    href: '/indoor-air-quality',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="bg-primary flex items-center justify-center text-center px-4 md:px-6" style={{ minHeight: '70vh' }}>
        <div className="max-w-4xl mx-auto py-12 md:py-16">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">
            Carroll County, Maryland
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-3">
            Carroll County&apos;s Trusted HVAC Experts Since 1997
          </h1>
          <p className="text-sm md:text-lg text-white/70 max-w-xl mx-auto mb-6">
            Professional heating &amp; cooling service, fast response times, and honest pricing for residential and commercial clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a href="/contact" className="w-full sm:w-auto bg-accent text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-orange-600 focus-visible:bg-orange-600 transition-colors">
              Request Service
            </a>
            <a href="/services" className="w-full sm:w-auto border-2 border-white text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary transition-colors">
              View Services
            </a>
          </div>
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce mx-auto" aria-hidden="true" />
        </div>
      </section>

      <section className="border-t border-white/10 bg-primary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-0 divide-white/10 px-4 text-center md:grid-cols-4 md:divide-x md:px-6">
          {trustItems.map((item) => (
            <div key={item.description} className="px-2 py-6 md:py-8">
              <p className="text-xl font-bold text-accent md:text-2xl">{item.value}</p>
              <p className="text-sm uppercase tracking-wide text-white">{item.label}</p>
              <p className="text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What We Do</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md hover:shadow-xl md:p-8"
              >
                <card.icon className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-display font-bold text-primary md:text-xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-semibold text-accent hover:underline focus-visible:underline"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Why JEM</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">The JEM Difference</h2>
            <div className="w-12 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Shield className="w-8 h-8" aria-hidden="true" />, title: 'Licensed & Insured', body: 'Fully licensed, bonded, and insured for your peace of mind on every job.' },
              { icon: <Clock className="w-8 h-8" aria-hidden="true" />, title: 'Fast Response', body: 'We know a broken HVAC isn\'t just inconvenient. We respond quickly — including emergencies.' },
              { icon: <ThumbsUp className="w-8 h-8" aria-hidden="true" />, title: 'All Makes & Models', body: 'We service every brand and every system — not just the ones we sell.' },
              { icon: <BadgeCheck className="w-8 h-8" aria-hidden="true" />, title: 'York Authorized Dealer', body: 'Certified to install and warrant York equipment, one of the most trusted names in HVAC.' },
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-accent mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-base font-display font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="order-last flex h-56 w-full items-center justify-center rounded-2xl bg-gray-200 text-lg text-gray-400 md:order-none md:h-80">
            Team Photo Placeholder
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">About JEM</p>
            <h2 className="mb-4 text-4xl font-display font-bold text-primary">Built From the Ground Up</h2>
            <p>
              JEM was founded on February 19, 1997 — armed with only a pickup truck, a handful of
              tools, and a dream. While we&apos;ve grown over the years, our commitment to quality
              craftsmanship, prompt service, and honest prices has never changed.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-accent hover:underline focus-visible:underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Coverage</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">Our Service Area</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-8">
            Proudly serving Westminster, New Windsor, Eldersburg, Taneytown, Sykesville, and all of Carroll County, Maryland — since 1997.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Westminster', 'New Windsor', 'Eldersburg', 'Taneytown', 'Sykesville', 'Hampstead', 'Manchester', 'Mount Airy', 'Carroll County, MD'].map((area) => (
              <span key={area} className="bg-white border border-gray-200 text-primary text-xs font-medium rounded-full px-4 py-2 shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What Our Customers Say</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/testimonials"
              className="inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-accent hover:underline focus-visible:underline"
            >
              See All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
              HVAC Emergency? We&apos;re Here.
            </h3>
            <p className="text-white/60 text-sm">
              Heating or cooling failure doesn&apos;t wait for business hours. Call us any time.
            </p>
          </div>
          <a
            href="tel:18886840657"
            className="flex items-center gap-2 bg-accent text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-orange-600 focus-visible:bg-orange-600 transition-colors whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call 1-888-684-0657
          </a>
        </div>
      </section>

      <CTABanner
        heading="Ready to Schedule Service?"
        subtext="Call us toll-free or send a message — we respond quickly."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />
    </>
  )
}
