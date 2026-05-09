import { Container, SectionHeading } from '@/app/components/ui'

export function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="Built on dependable service and long-term customer relationships"
            description="We believe HVAC service should feel straightforward, respectful, and results-driven. Our team focuses on clear communication, skilled workmanship, and solutions that keep your home or business comfortable in every season."
          />

          <div className="rounded-2xl bg-white p-8 shadow-soft">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-4xl font-display text-accent">10+</p>
                <p className="mt-2 text-muted">Years serving local homeowners and businesses</p>
              </div>
              <div>
                <p className="text-4xl font-display text-accent">24/7</p>
                <p className="mt-2 text-muted">Emergency support availability for urgent comfort issues</p>
              </div>
              <div>
                <p className="text-4xl font-display text-accent">100%</p>
                <p className="mt-2 text-muted">Commitment to honest recommendations and quality care</p>
              </div>
              <div>
                <p className="text-4xl font-display text-accent">Top Tier</p>
                <p className="mt-2 text-muted">Equipment and installation standards for lasting performance</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
