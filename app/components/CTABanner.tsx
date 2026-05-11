import Link from 'next/link'
import { buttonStyles, layoutClasses } from '@/app/lib/styles'

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
    <section className={`border-t-4 border-accent bg-surface ${layoutClasses.cta}`}>
      <div className={`${layoutClasses.container} text-center`}>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">{heading}</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto max-w-2xl mb-8">{subtext}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primaryHref} className={`${buttonStyles.primary} w-full sm:w-auto`}>
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className={`${buttonStyles.secondary} w-full sm:w-auto`}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
