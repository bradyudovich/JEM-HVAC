import Link from 'next/link'
import { Container, SectionHeading } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function ContactCta() {
  return (
    <section id="contact" className="bg-accent px-4 py-12 text-center md:px-6 md:py-20">
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

        <Link
          href={`tel:${siteConfig.phone}`}
          className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-accent hover:bg-gray-100 focus-visible:bg-gray-100"
        >
          Call Now
        </Link>
      </Container>
    </section>
  )
}
