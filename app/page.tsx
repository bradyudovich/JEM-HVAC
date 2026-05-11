import Link from 'next/link'
import { ArrowRight, BadgeCheck, Building2, Clock, Home, Shield, ThumbsUp, Wind } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import FadeIn from '@/app/components/FadeIn'
import SectionDivider from '@/app/components/SectionDivider'
import { TestimonialCard } from '@/app/components/TestimonialCard'
import { createPageMetadata } from '@/app/lib/metadata'
import { blogPosts } from '@/app/lib/blogPosts'
import { buttonStyles, cardStyles, layoutClasses } from '@/app/lib/styles'
import { testimonials } from '@/app/lib/testimonials'

export const metadata = createPageMetadata({
  pageName: 'Home',
  description:
    'Carroll County’s trusted HVAC experts since 1997 for residential and commercial heating and cooling service.',
  path: '/',
})

const trustItems = [
  { value: '1997', label: 'Since', description: 'Serving Carroll County' },
  { value: '24/7', label: 'Support', description: 'Emergency service available' },
  { value: '100%', label: 'Coverage', description: 'All makes and models serviced' },
  { value: 'York', label: 'Authorized', description: 'Certified York dealer' },
]

const serviceCards = [
  {
    icon: Home,
    title: 'Residential HVAC',
    description: 'Repair, replacement, and upgrades that keep your home comfortable through every season.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial HVAC',
    description: 'Responsive maintenance and repair for business systems that need to stay up and running.',
    href: '/services/commercial',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Filtration, humidity control, and cleaner-air options for a healthier home environment.',
    href: '/indoor-air-quality',
  },
]

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    body: 'Trusted service from an experienced team that takes pride in doing things the right way.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    body: 'When comfort is on the line, we answer quickly and keep you informed from start to finish.',
  },
  {
    icon: ThumbsUp,
    title: 'All Makes & Models',
    body: 'We work on the equipment you already have and explain your options in plain language.',
  },
  {
    icon: BadgeCheck,
    title: 'York Authorized Dealer',
    body: 'Certified installation and warranty support backed by one of the industry’s most trusted brands.',
  },
]

const areas = [
  'Westminster',
  'New Windsor',
  'Eldersburg',
  'Taneytown',
  'Sykesville',
  'Hampstead',
  'Manchester',
  'Mount Airy',
  'Carroll County, MD',
]

export default function HomePage() {
  return (
    <>
      <section className={`bg-primary text-center text-white ${layoutClasses.homepageSection}`}>
        <div className={layoutClasses.container}>
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
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" aria-hidden="true" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> York Authorized Dealer
            </span>
          </p>
        </div>
      </section>

      <SectionDivider fromColor="#1B3A2D" toColor="#F7F3ED" />

      <section className={`bg-primary text-white ${layoutClasses.trustBar}`}>
        <div className={`${layoutClasses.container} grid grid-cols-2 gap-4 text-center md:grid-cols-4`}>
          {trustItems.map((item) => (
            <div key={item.description} className="px-2 py-2">
              <p className="text-2xl font-display font-semibold text-accent mb-1">{item.value}</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-white mb-1">{item.label}</p>
              <p className="text-sm text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider fromColor="#1B3A2D" toColor="#F7F3ED" />

      <section className={`bg-surface ${layoutClasses.homepageSection}`}>
        <div className={layoutClasses.container}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Services</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">What We Do</h2>
            <div className="w-10 h-0.5 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {serviceCards.map((card, i) => (
              <FadeIn delay={i * 100} key={card.title} className="h-full">
                <article className={`${cardStyles.standard} group h-full flex flex-col`}>
                  <div className={cardStyles.iconContainer}>
                    <card.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.description}</p>
                  <Link href={card.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#F7F3ED" toColor="#FFFFFF" />

      <section className={`bg-white ${layoutClasses.homepageSection}`}>
        <div className={layoutClasses.container}>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Why JEM</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">The JEM Difference</h2>
            <div className="w-10 h-0.5 bg-accent mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {reasons.map((item, i) => (
              <FadeIn delay={i * 75} key={item.title} className="h-full">
                <article className={`${cardStyles.surface} group h-full flex flex-col text-center`}>
                  <div className={`${cardStyles.iconContainer} mx-auto`}>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#FFFFFF" toColor="#F7F3ED" />

      <section className={`bg-surface ${layoutClasses.homepageSection}`}>
        <div className={`${layoutClasses.container} grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16`}>
          <div className="order-last h-64 w-full rounded-2xl bg-white shadow-sm md:order-none md:h-80" aria-hidden="true" />
          <FadeIn>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">About JEM</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Built From the Ground Up</h2>
              <div className="w-10 h-0.5 bg-accent mb-8" />
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                JEM was founded on February 19, 1997 — armed with only a pickup truck, a handful of tools, and a dream. We’ve grown steadily, but our commitment to honest work and dependable service still leads every job.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We’re not a call center. When you contact JEM, you’re talking to people who live and work in this community — and who take pride in getting the job done right the first time.
              </p>
              <Link href="/about" className={`${buttonStyles.secondary} w-full sm:w-auto`}>
                Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider fromColor="#F7F3ED" toColor="#FFFFFF" />

      <section className={`bg-white ${layoutClasses.homepageSection}`}>
        <div className={`${layoutClasses.container} text-center`}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Coverage</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Our Service Area</h2>
          <div className="w-10 h-0.5 bg-accent mx-auto mb-8" />
          <p className="mx-auto max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            Proudly serving Westminster, New Windsor, Eldersburg, Taneytown, Sykesville, and communities across Carroll County, Maryland.
          </p>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {areas.map((area) => (
                <span key={area} className="rounded-full border border-gray-200 bg-surface px-4 py-2 text-xs font-semibold text-primary shadow-sm">
                  {area}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider fromColor="#FFFFFF" toColor="#F7F3ED" />

      <section className={`bg-surface ${layoutClasses.homepageSection}`}>
        <div className={layoutClasses.container}>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">What Our Customers Say</h2>
            <div className="w-10 h-0.5 bg-accent mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <FadeIn delay={i * 100} key={testimonial.name} className="h-full">
                <TestimonialCard {...testimonial} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/testimonials" className={`${buttonStyles.secondary} w-full sm:w-auto`}>
              See All Testimonials
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#F7F3ED" toColor="#1B3A2D" />

      <section className={`bg-primary ${layoutClasses.emergency}`}>
        <div className={`${layoutClasses.container} flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left`}>
          <div>
            <h3 className="text-base md:text-lg font-display font-semibold text-white mb-2">HVAC Emergency? We&apos;re Here.</h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Heating or cooling failure doesn’t wait for business hours — and neither do we.
            </p>
          </div>
          <Link href="/contact" className={`${buttonStyles.outline} w-full sm:w-auto`}>
            Request Emergency Service
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Ready to schedule service?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Schedule Service"
        primaryHref="/contact"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />

      <section className={`bg-white ${layoutClasses.homepageSection}`}>
        <div className={layoutClasses.container}>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">HVAC Tips</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Helpful Advice From the JEM Team</h2>
            <div className="w-10 h-0.5 bg-accent mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <FadeIn delay={i * 75} key={post.slug} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group h-full block">
                  <article className={`${cardStyles.standard} h-full flex flex-col`}>
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{post.category}</span>
                    <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2 group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                      <span className="text-xs text-muted">
                        {post.date} · {post.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className={`${buttonStyles.primary} w-full sm:w-auto`}>
              Browse HVAC Tips
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
