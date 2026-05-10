import { Container, SectionHeading } from '@/app/components/ui'

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-12 md:px-6 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="About"
            title="Built on dependable service and long-term customer relationships"
            description="We believe HVAC service should feel straightforward, respectful, and results-driven. Our team focuses on clear communication, skilled workmanship, and solutions that keep your home or business comfortable in every season."
          />

          <div className="order-last h-56 w-full rounded-2xl bg-surface p-8 shadow-md md:order-none md:h-80">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-4xl font-display font-bold text-accent">10+</p>
                <p>Years serving local homeowners and businesses</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent">24/7</p>
                <p>Emergency support availability for urgent comfort issues</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent">100%</p>
                <p>Commitment to honest recommendations and quality care</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent">Top Tier</p>
                <p>Equipment and installation standards for lasting performance</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
