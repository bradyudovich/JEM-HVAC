import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'

const serviceNav = [
  { label: 'Services Overview', href: '/services' },
  { label: 'Residential Services', href: '/services/residential' },
  { label: 'Commercial Services', href: '/services/commercial' },
  { label: 'Maintenance Contracts', href: '/services/maintenance' },
]

type ServiceLayoutProps = {
  title: string
  intro: string
  children: ReactNode
}

export function ServiceLayout({ title, intro, children }: ServiceLayoutProps) {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-primary text-white">
        <Image
          src="/images/services-hero.jpg"
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-14 pt-32 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <Link href="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li className="text-white">{title}</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-4xl animate-fade-up">
            <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/85">{intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[90rem] gap-10 px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-primary">Service Pages</h2>
              <nav className="mt-6 space-y-2">
                {serviceNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-surface hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">{children}</div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              Need Help Choosing?
            </p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
              Let&apos;s find the right HVAC solution for your space.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Call us today or send a message to talk through your residential or commercial service needs.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row animate-fade-up">
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
