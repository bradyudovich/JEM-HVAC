import Link from 'next/link'
import { Container, SectionHeading } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function ContactCta() {
  return (
    <section id="contact" className="bg-primary py-20 text-white">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-primary">
          <SectionHeading
            eyebrow="Contact"
            title="Ready for reliable comfort?"
            description="Schedule an estimate, request service, or ask about preventive maintenance for your heating and cooling systems."
          />

          <div className="flex flex-col gap-4 text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>

            <Link
              href={`tel:${siteConfig.phone}`}
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white hover:text-primary"
            >
              Call Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
