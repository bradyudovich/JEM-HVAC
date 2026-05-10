import { createPageMetadata } from '@/app/lib/metadata'
import { ServiceLayout } from '@/app/components/ServiceLayout'

export const metadata = createPageMetadata({
  pageName: 'Commercial Services',
  description:
    'Commercial HVAC maintenance, repair, and replacement including rooftop units and specialty equipment.',
  path: '/services/commercial',
})

const services = [
  'AC',
  'Heating',
  'Heat Pumps',
  'Furnaces',
  'Water Heaters',
  'Rooftop Units',
  'Compressors',
  'Chillers',
  'Cooling Towers',
  'Refrigeration Boxes',
  'Ice Machines',
  'Exhaust Fans',
  'Air Rotation Units',
]

export default function CommercialPage() {
  return (
    <ServiceLayout
      title="Commercial Services"
      subtitle="Our specialty is the maintenance, repair, and replacement of rooftop packaged equipment. Commercial clients include H&R Block, General Dynamics, Flowserve, and New Windsor Bank."
    >
      <section className="rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Service List</h2>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-3 border-b border-gray-100 py-2 last:border-0">
              <span className="text-lg text-accent">✓</span>
              <span className="text-sm text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Maintenance Agreements</h2>
          <ul>
            {['Quarterly', 'Semi-Annual', 'Custom'].map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-gray-100 py-2 last:border-0">
                <span className="text-lg text-accent">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Why Preventive Maintenance?</h2>
          <p>Ask us about our commercial maintenance program.</p>
        </article>
      </section>
    </ServiceLayout>
  )
}
