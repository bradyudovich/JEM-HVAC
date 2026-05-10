import { siteConfig } from '@/app/lib/site-config'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 md:px-6">{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-4 text-3xl font-display font-bold text-primary md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-gray-600">{description}</p> : null}
    </div>
  )
}

export function ContactCard() {
  return (
    <div className="rounded-2xl bg-primary p-8 text-white shadow-md">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Need fast service?
      </p>
      <h3 className="mt-4 text-3xl font-display font-bold text-white">Call today</h3>
      <div className="mt-6 space-y-3 text-base text-white/80">
        <p>{siteConfig.phone}</p>
        <p>{siteConfig.email}</p>
        <p>{siteConfig.hours}</p>
      </div>
    </div>
  )
}
