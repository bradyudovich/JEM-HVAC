'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
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

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
          <aside className="rounded-2xl bg-primary p-10 text-white">
            <h2 className="mb-6 text-3xl font-display font-bold text-white">Contact Information</h2>
            <div className="space-y-5">
              <div>
                <p className="text-white/60">📞 Phone</p>
                <p className="font-semibold text-white">
                  <Link href="tel:1-888-684-0657" className="text-white hover:text-accent">
                    1-888-684-0657
                  </Link>{' '}
                  (toll-free)
                </p>
                <p className="font-semibold text-white">
                  <Link href="tel:410-840-9328" className="text-white hover:text-accent">
                    410-840-9328
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white/60">✉️ Email</p>
                <p className="font-semibold text-white">
                  <Link href="mailto:contact@4jem.com" className="text-white hover:text-accent">
                    contact@4jem.com
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white/60">📍 Address</p>
                <p className="font-semibold text-white">150 Airport Drive, Unit 1, Westminster, MD 21157</p>
              </div>
              <div>
                <p className="text-white/60">🕐 Hours</p>
                <p className="font-semibold text-white">Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-10 shadow-md space-y-4">
            <h2 className="mb-2 text-3xl font-display font-bold text-primary">Send a Message</h2>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Name (required)</span>
              <input required name="name" type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Phone</span>
              <input name="phone" type="tel" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Email (required)</span>
              <input required name="email" type="email" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">City &amp; State</span>
              <input name="cityState" type="text" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Message</span>
              <textarea name="message" rows={5} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent" />
            </label>

            <button type="submit" className="w-full rounded-full bg-accent py-4 font-semibold text-white hover:bg-orange-600">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-surface p-12 text-center shadow-md">
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
