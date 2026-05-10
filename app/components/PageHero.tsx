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
    <section className="bg-primary py-24 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm uppercase tracking-widest text-white/50">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mb-4 text-5xl font-display font-bold text-white">{title}</h1>
        {subtitle ? <p className="mx-auto max-w-2xl text-xl text-white/70">{subtitle}</p> : null}
      </div>
    </section>
  )
}
