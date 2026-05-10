import Link from 'next/link'
import { Container, SectionHeading } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function ContactCta() {
  return (
    <section id="contact" className="bg-accent py-20 text-center">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Ready for reliable comfort?"
          description="Schedule an estimate, request service, or ask about preventive maintenance for your heating and cooling systems."
        />

        <div className="mt-8 space-y-2 text-white/90">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
        </div>

        <Link href={`tel:${siteConfig.phone}`} className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-accent hover:bg-gray-100">
          Call Now
        </Link>
      </Container>
    </section>
  )
}
