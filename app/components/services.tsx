import { Container, SectionHeading } from '@/app/components/ui'

const services = [
  {
    title: 'Air Conditioning Repair',
    description:
      'Quick diagnostics and dependable repairs to restore cooling performance when you need it most.',
  },
  {
    title: 'Heating System Service',
    description:
      'Keep furnaces and heat pumps operating safely and efficiently through every cold season.',
  },
  {
    title: 'HVAC Installation',
    description:
      'Upgrade your comfort with properly sized, professionally installed high-efficiency systems.',
  },
  {
    title: 'Preventive Maintenance',
    description:
      'Seasonal tune-ups designed to improve reliability, reduce energy waste, and extend system life.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-12 md:py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="Professional HVAC care for year-round comfort"
            description="From urgent repairs to complete system replacements, we deliver practical solutions tailored to your property and budget."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border-t-4 border-accent bg-white p-8 shadow-md hover:shadow-xl">
                <h3 className="mb-2 text-xl font-display font-bold text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
