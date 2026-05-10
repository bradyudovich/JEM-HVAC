'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'

export function ContactPageClient() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: wire to Resend / Formspree / EmailJS
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We’re here to serve. Our commitment doesn’t end when we leave your driveway."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
          <aside className="rounded-2xl bg-primary p-6 text-white md:p-10">
            <h2 className="mb-6 text-3xl font-display font-bold text-white">Contact Information</h2>
            <div className="space-y-5">
              <div>
                <p className="flex items-center gap-2 text-white/60"><Phone className="h-5 w-5" />Phone</p>
                <p className="font-semibold text-white">
                  <Link
                    href="tel:1-888-684-0657"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-white hover:text-accent focus-visible:text-accent"
                  >
                    1-888-684-0657
                  </Link>{' '}
                  (toll-free)
                </p>
                <p className="font-semibold text-white">
                  <Link
                    href="tel:410-840-9328"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-white hover:text-accent focus-visible:text-accent"
                  >
                    410-840-9328
                  </Link>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/60"><Mail className="h-5 w-5" />Email</p>
                <p className="font-semibold text-white">
                  <Link
                    href="mailto:contact@4jem.com"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-white hover:text-accent focus-visible:text-accent"
                  >
                    contact@4jem.com
                  </Link>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/60"><MapPin className="h-5 w-5" />Address</p>
                <p className="font-semibold text-white">150 Airport Drive, Unit 1, Westminster, MD 21157</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-white/60"><Clock className="h-5 w-5" />Hours</p>
                <p className="font-semibold text-white">Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-md md:p-10">
            <h2 className="mb-2 text-3xl font-display font-bold text-primary">Send a Message</h2>

            <label className="block">
              <span className="mb-1 block text-base font-semibold text-gray-700">Name (required)</span>
              <input required name="name" type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-base font-semibold text-gray-700">Phone</span>
              <input name="phone" type="tel" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-base font-semibold text-gray-700">Email (required)</span>
              <input required name="email" type="email" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-base font-semibold text-gray-700">City &amp; State</span>
              <input name="cityState" type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-base font-semibold text-gray-700">Message</span>
              <textarea name="message" className="min-h-[120px] w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent md:min-h-[150px]" />
            </label>

            <button
              type="submit"
              className="w-full min-h-[44px] min-w-[44px] rounded-full bg-accent py-4 font-semibold text-white hover:bg-orange-600 focus-visible:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-surface p-6 text-center shadow-md md:p-10">
            <h2 className="mb-2 text-3xl font-display font-bold text-primary">Map Placeholder</h2>
            <p>150 Airport Drive, Unit 1, Westminster, MD 21157</p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need immediate HVAC help?"
        subtext="Call us now or send a message and we’ll respond quickly."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
