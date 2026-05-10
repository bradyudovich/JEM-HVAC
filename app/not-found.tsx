import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-surface py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-8">
        <h1 className="font-display text-4xl text-primary sm:text-5xl">Page Not Found</h1>
        <p className="mt-6 text-lg text-muted">
          We couldn&apos;t find that page — but we can definitely fix your HVAC.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
          >
            Return to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  )
}
