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
    <section id="services" className="bg-white py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="Professional HVAC care for year-round comfort"
            description="From urgent repairs to complete system replacements, we deliver practical solutions tailored to your property and budget."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-surface p-6 shadow-soft"
              >
                <h3 className="text-2xl font-display">{service.title}</h3>
                <p className="mt-4 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
