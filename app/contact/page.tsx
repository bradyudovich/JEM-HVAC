'use client'

import Link from 'next/link'
import type { FormEvent } from 'react'

const contactDetails = [
  {
    label: 'Phone',
    content: (
      <p>
        <Link href="tel:1-888-684-0657" className="hover:text-accent">
          1-888-684-0657
        </Link>{' '}
        <span className="text-white/60">(toll-free)</span> |{' '}
        <Link href="tel:410-840-9328" className="hover:text-accent">
          410-840-9328
        </Link>
      </p>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    content: (
      <p>
        <Link href="mailto:contact@4jem.com" className="hover:text-accent">
          contact@4jem.com
        </Link>
      </p>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    content: <p>150 Airport Drive, Unit 1, Westminster, MD 21157</p>,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Hours',
    content: <p>Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</p>,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: wire to email service (Resend, Formspree, or EmailJS)
  }

  return (
    <>
      <section className="bg-primary py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Get in Touch
            </p>
            <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-white/80">
              We&apos;re here to serve. Our commitment doesn&apos;t end when we leave your driveway.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[90rem] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <aside className="animate-fade-up rounded-3xl bg-primary p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Contact Information
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Reach out to our team.
            </h2>

            <div className="mt-8 space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="mt-1 text-accent">{detail.icon}</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                      {detail.label}
                    </p>
                    <div className="mt-2 text-base text-white/85">{detail.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="animate-fade-up rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl text-primary sm:text-4xl">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Name *
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Email Address *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  City & State
                </span>
                <input
                  type="text"
                  name="cityState"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Message / Comments
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          {/* TODO: embed Google Maps iframe for 150 Airport Drive, Westminster MD */}
          <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-black/10 bg-surface text-center shadow-soft">
            <div className="max-w-lg px-6 py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Location Map
              </p>
              <h2 className="mt-4 font-display text-3xl text-primary sm:text-4xl">
                Google Maps Embed Placeholder
              </h2>
              <p className="mt-4 text-muted">
                150 Airport Drive, Unit 1, Westminster, MD 21157
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
