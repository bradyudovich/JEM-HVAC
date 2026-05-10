import Link from 'next/link'

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
    <section className="bg-primary px-4 py-16 text-center md:py-24">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm uppercase tracking-widest text-white/50">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-accent focus-visible:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mb-4 text-3xl font-display font-bold text-white md:text-5xl">{title}</h1>
        {subtitle ? <p className="mx-auto max-w-2xl text-base text-white/70 md:text-xl">{subtitle}</p> : null}
      </div>
    </section>
  )
}
