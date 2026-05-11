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
    <section className="bg-accent px-4 py-12 text-center md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl font-display font-bold text-white md:text-4xl">{heading}</h2>
        <p className="mb-8 text-lg text-white/80">{subtext}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full bg-white px-8 py-3 text-center font-semibold text-accent hover:bg-gray-100 focus-visible:bg-gray-100 sm:w-auto"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full border-2 border-white px-8 py-3 text-center font-semibold text-white hover:bg-white hover:text-accent focus-visible:bg-white focus-visible:text-accent sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
