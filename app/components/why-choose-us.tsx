import { ContactCard, Container, SectionHeading } from '@/app/components/ui'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

const reasons = [
  'Licensed and experienced HVAC professionals',
  'Prompt arrival windows and responsive scheduling',
  'Clear recommendations without pressure',
  'Maintenance plans that help prevent breakdowns',
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className={`bg-white ${layoutClasses.homepageSection}`}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A professional experience from first call to final walkthrough"
              description="We combine technical expertise with customer-first service so you always know what to expect and feel confident in the work being done."
            />

            <div className="grid gap-4">
              {reasons.map((reason) => (
                <div key={reason} className={`${cardStyles.surface} text-sm md:text-base text-gray-600 leading-relaxed`}>
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <ContactCard />
        </div>
      </Container>
    </section>
  )
}
