import { siteConfig } from '@/app/lib/site-config'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-content px-6">{children}</div>
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
      {description ? <p className="text-lg text-muted">{description}</p> : null}
    </div>
  )
}

export function ContactCard() {
  return (
    <div className="rounded-2xl bg-primary p-8 text-white shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Need fast service?
      </p>
      <h3 className="mt-4 font-display text-3xl text-white">Call today</h3>
      <div className="mt-6 space-y-3 text-base text-white/80">
        <p>{siteConfig.phone}</p>
        <p>{siteConfig.email}</p>
        <p>{siteConfig.hours}</p>
      </div>
    </div>
  )
}
