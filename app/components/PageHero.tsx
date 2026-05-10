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
    <section className="flex h-[45vh] min-h-[320px] items-center justify-center bg-gradient-to-br from-primary via-primary to-[#152540] text-white">
      <div className="max-w-7xl mx-auto w-full px-6 text-center">
        <nav aria-label="Breadcrumb" className="text-sm text-white/75">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent focus-visible:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-3xl mx-auto text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  )
}
