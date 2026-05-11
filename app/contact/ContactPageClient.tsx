'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { cardStyles, buttonStyles, layoutClasses } from '@/app/lib/styles'

const fieldClass =
  'w-full rounded-md border border-gray-200 px-4 py-3 text-sm md:text-base text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

export function ContactPageClient() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We’re easy to reach and quick to respond. Whether you need emergency service, a routine tune-up, or a new system — we’re here to help."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={`${layoutClasses.container} grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10`}>
          <aside className={`${cardStyles.surface} bg-primary text-white hover:shadow-md`}>
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Get in Touch</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">Contact Information</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <div className="space-y-5">
              <div>
                <p className="flex items-center gap-2 text-white/65 text-sm md:text-base"><Phone className="h-4 w-4" />Phone</p>
                <p className="mt-1 text-sm md:text-base text-white">
                  <Link href="tel:1-888-684-0657" className="font-semibold hover:text-accent">
                    1-888-684-0657
                  </Link>{' '}
                  (toll-free)
                </p>
                <p className="text-sm md:text-base text-white">
                  <Link href="tel:410-840-9328" className="font-semibold hover:text-accent">
                    410-840-9328
                  </Link>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/65 text-sm md:text-base"><Mail className="h-4 w-4" />Email</p>
                <p className="mt-1 text-sm md:text-base text-white">
                  <Link href="mailto:contact@4jem.com" className="font-semibold hover:text-accent">
                    contact@4jem.com
                  </Link>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/65 text-sm md:text-base"><MapPin className="h-4 w-4" />Address</p>
                <p className="mt-1 text-sm md:text-base text-white">150 Airport Drive, Unit 1, Westminster, MD 21157</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/65 text-sm md:text-base"><Clock className="h-4 w-4" />Hours</p>
                <p className="mt-1 text-sm md:text-base text-white">Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className={`${cardStyles.standard} space-y-4`}>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Send a Message</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">How Can We Help?</h2>
              <div className="w-10 h-0.5 bg-accent mb-6" />
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-primary">Name (required)</span>
              <input required name="name" type="text" className={fieldClass} />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-primary">Phone</span>
              <input name="phone" type="tel" className={fieldClass} />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-primary">Email (required)</span>
              <input required name="email" type="email" className={fieldClass} />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-primary">City &amp; State</span>
              <input name="cityState" type="text" className={fieldClass} />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-primary">Message</span>
              <textarea name="message" className={`${fieldClass} min-h-[140px]`} />
            </label>

            <button type="submit" className={`${buttonStyles.primary} w-full`}>
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <div className={`${cardStyles.standard} flex h-64 items-center justify-center`}>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Visit Us</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Westminster Office</h2>
              <div className="w-10 h-0.5 bg-accent mb-6" />
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">150 Airport Drive, Unit 1, Westminster, MD 21157</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need immediate HVAC help?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
