import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-primary text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center w-full">
        <h1 className="font-display text-5xl text-white">Page Not Found</h1>
        <p className="mt-4 text-white/80">
          We couldn&apos;t find that page — but we can definitely fix your HVAC.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="rounded-full bg-accent px-6 py-3 font-semibold text-white">Go Home</Link>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 font-semibold text-white">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
