import { Container, SectionHeading } from '@/app/components/ui'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

export function About() {
  return (
    <section id="about" className={`bg-white ${layoutClasses.homepageSection}`}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="About"
            title="Built on dependable service and long-term customer relationships"
            description="We believe HVAC service should feel straightforward, respectful, and results-driven. Our team focuses on clear communication, skilled workmanship, and solutions that keep your home or business comfortable in every season."
          />

          <div className={`${cardStyles.surface} grid gap-6 sm:grid-cols-2`}>
            {[
              ['Nearly 30', 'Years serving local homeowners and businesses'],
              ['24/7', 'Emergency support availability for urgent comfort issues'],
              ['All Makes', 'Service for the equipment you already rely on'],
              ['Family-Owned', 'A team rooted in the same community we serve'],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">{value}</p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
