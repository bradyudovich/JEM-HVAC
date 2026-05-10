'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { PageHero } from '@/app/components/PageHero'

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

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 lg:grid-cols-2">
          <aside className="rounded-2xl bg-primary text-white p-6 shadow-md">
            <h2 className="font-display text-3xl text-white">Contact Information</h2>
            <ul className="mt-4 space-y-4 text-white/90">
              <li>☎ <Link href="tel:1-888-684-0657" className="hover:text-accent">1-888-684-0657</Link> (toll-free)</li>
              <li>☎ <Link href="tel:410-840-9328" className="hover:text-accent">410-840-9328</Link></li>
              <li>✉ <Link href="mailto:contact@4jem.com" className="hover:text-accent">contact@4jem.com</Link></li>
              <li>📍 150 Airport Drive, Unit 1, Westminster, MD 21157</li>
              <li>🕒 Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</li>
            </ul>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-md space-y-4">
            <h2 className="font-display text-3xl">Send a Message</h2>
            <label className="block"><span>Name (required)</span><input required name="name" type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
            <label className="block"><span>Phone</span><input name="phone" type="tel" className="mt-1 w-full rounded-xl border p-2" /></label>
            <label className="block"><span>Email (required)</span><input required name="email" type="email" className="mt-1 w-full rounded-xl border p-2" /></label>
            <label className="block"><span>City &amp; State</span><input name="cityState" type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
            <label className="block"><span>Message</span><textarea name="message" rows={5} className="mt-1 w-full rounded-xl border p-2" /></label>
            <button type="submit" className="rounded-full bg-accent px-6 py-3 text-white font-semibold">Submit</button>
          </form>
        </div>
      </section>

      <section className="pb-12 md:pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border-2 border-dashed border-muted/40 bg-white p-12 text-center">
            <h2 className="font-display text-3xl">Map Placeholder</h2>
            <p className="mt-3 text-muted">150 Airport Drive, Unit 1, Westminster, MD 21157</p>
          </div>
        </div>
      </section>
    </>
  )
}
