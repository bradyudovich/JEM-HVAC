import Link from 'next/link'
import { Container, SectionHeading } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'
import { buttonStyles, layoutClasses } from '@/app/lib/styles'

export function ContactCta() {
  return (
    <section id="contact" className={`bg-surface border-t-4 border-accent ${layoutClasses.cta}`}>
      <Container>
        <div className="text-center">
          <SectionHeading
            eyebrow="Contact"
            title="Ready for reliable comfort?"
            description="Schedule an estimate, request service, or ask about preventive maintenance for your heating and cooling systems."
            align="center"
          />

          <div className="mt-8 space-y-2 text-gray-600">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>

          <Link href={`tel:${siteConfig.phone}`} className={`${buttonStyles.primary} mt-8 w-full sm:w-auto`}>
            Call Now
          </Link>
        </div>
      </Container>
    </section>
  )
}
