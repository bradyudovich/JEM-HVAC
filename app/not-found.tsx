import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center bg-primary px-4 py-20 text-center text-white">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-5xl font-display font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-white/80">
          We couldn&apos;t find that page — but we can definitely fix your HVAC.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600 focus-visible:bg-orange-600">
            Go Home
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
