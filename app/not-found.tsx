import Link from 'next/link'
import { buttonStyles, layoutClasses } from '@/app/lib/styles'

export default function NotFound() {
  return (
    <div className={`flex min-h-[60vh] items-center bg-primary text-center text-white ${layoutClasses.pageHero}`}>
      <div className={layoutClasses.container}>
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3">Page Not Found</h1>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-white/80 leading-relaxed">
          We couldn&apos;t find that page — but we can definitely help with your heating and cooling needs.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={`${buttonStyles.primary} w-full sm:w-auto`}>
            Go Home
          </Link>
          <Link href="/contact" className={`${buttonStyles.outline} w-full sm:w-auto`}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
