import Link from 'next/link'

type CTABannerProps = {
  heading: string
  subtext: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-accent py-20 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-4xl font-display font-bold text-white">{heading}</h2>
        <p className="mb-8 text-lg text-white/80">{subtext}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-full bg-white px-8 py-3 font-semibold text-accent hover:bg-gray-100"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-accent"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
