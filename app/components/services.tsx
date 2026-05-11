import { Container, SectionHeading } from '@/app/components/ui'
import { cardStyles, layoutClasses } from '@/app/lib/styles'

const services = [
  {
    title: 'Air Conditioning Repair',
    description: 'Quick diagnostics and dependable repairs to restore cooling performance when you need it most.',
  },
  {
    title: 'Heating System Service',
    description: 'Keep furnaces and heat pumps operating safely and efficiently through every cold season.',
  },
  {
    title: 'HVAC Installation',
    description: 'Upgrade your comfort with properly sized, professionally installed high-efficiency systems.',
  },
  {
    title: 'Preventive Maintenance',
    description: 'Seasonal tune-ups designed to improve reliability, reduce energy waste, and extend system life.',
  },
]

export function Services() {
  return (
    <section id="services" className={`bg-surface ${layoutClasses.homepageSection}`}>
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="Professional HVAC care for year-round comfort"
            description="From urgent repairs to complete system replacements, we deliver practical solutions tailored to your property and budget."
            align="center"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-6">
            {services.map((service) => (
              <article key={service.title} className={`${cardStyles.standard} h-full flex flex-col`}>
                <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
