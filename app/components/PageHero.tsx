import Link from 'next/link'
import { layoutClasses } from '@/app/lib/styles'

type Breadcrumb = {
  label: string
  href?: string
}

type PageHeroProps = {
  title: string
  subtitle?: string
  breadcrumbs: Breadcrumb[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className={`bg-primary text-center ${layoutClasses.pageHero}`}>
      <div className={layoutClasses.container}>
        <nav aria-label="Breadcrumb" className="mb-4 text-xs uppercase tracking-widest text-white/60">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="inline-flex items-center hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3">{title}</h1>
        {subtitle ? (
          <p className="mx-auto max-w-2xl text-sm md:text-base text-white/75 leading-relaxed">{subtitle}</p>
        ) : null}
      </div>
    </section>
  )
}
