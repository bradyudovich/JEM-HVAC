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
      <section className="rounded-2xl shadow-md bg-white p-6">
        <h2 className="font-display text-3xl">Service List</h2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-muted list-disc list-inside">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="font-display text-3xl">Maintenance Agreements</h2>
          <ul className="mt-4 space-y-2 text-muted list-disc list-inside">
            <li>Quarterly</li>
            <li>Semi-Annual</li>
            <li>Custom</li>
          </ul>
        </article>
        <article className="rounded-2xl shadow-md bg-amber-50 border border-amber-300 p-6">
          <h2 className="font-display text-3xl">Why Preventive Maintenance?</h2>
          <p className="mt-3 text-muted">
            Ask us about our commercial maintenance program.
          </p>
        </article>
      </section>
    </ServiceLayout>
  )
}
