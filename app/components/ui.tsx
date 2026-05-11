import type { ReactNode } from 'react'
import { siteConfig } from '@/app/lib/site-config'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

export function Container({ children, editorial = false }: { children: ReactNode; editorial?: boolean }) {
  return <div className={editorial ? layoutClasses.editorial : layoutClasses.container}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'

  return (
    <div className={`space-y-3 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}`}>
      {eyebrow ? (
        <p className={`text-xs uppercase tracking-widest font-semibold text-accent mb-2 ${centered ? 'text-center' : ''}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">{title}</h2>
      <div className={`w-10 h-0.5 bg-accent mb-8 ${centered ? 'mx-auto' : ''}`} />
      {description ? <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p> : null}
    </div>
  )
}

export function ContactCard() {
  return (
    <div className={`${cardStyles.standard} flex flex-col bg-white`}>
      <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Need fast service?</p>
      <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Call today</h3>
      <div className="space-y-2 flex-1">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{siteConfig.phone}</p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{siteConfig.email}</p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{siteConfig.hours}</p>
      </div>
    </div>
  )
}
