import { ServiceLayout } from '@/app/components/ServiceLayout'
import { createPageMetadata } from '@/app/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Commercial Services',
  description:
    'Westminster MD commercial HVAC services for rooftop units, heating and cooling repair, replacement, and preventive maintenance to keep business systems running.',
  path: '/services/commercial',
})

const commercialEquipment = [
  'Air Conditioning',
  'Heating',
  'Heat Pumps',
  'Gas & Oil Furnaces',
  'Water Heaters',
  'Roof Top Packaged Units',
  'Compressors',
  'Chillers',
  'Cooling Towers',
  'Refrigeration Boxes',
  'Ice Machines',
  'Exhaust Fans',
  'Air Rotation Units',
]

const maintenanceOptions = ['Quarterly', 'Semi-Annual', 'Custom']

export default function CommercialServicesPage() {
  return (
    <ServiceLayout
      title="Commercial Services"
      intro="Our specialty is the maintenance, repair, and replacement of rooftop packaged equipment. Our commercial clients include familiar names such as H&R Block, General Dynamics, Flowserve, and New Windsor Bank."
    >
      <section className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
        <h2 className="font-display text-3xl text-primary">Service & Replace</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {commercialEquipment.map((item) => (
            <div key={item} className="rounded-2xl bg-surface px-5 py-4 text-muted">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
          <h2 className="font-display text-3xl text-primary">Maintenance Agreements</h2>
          <ul className="mt-6 space-y-4 text-muted">
            {maintenanceOptions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-accent/20 bg-accent/10 p-8 shadow-soft animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Why Preventive Maintenance?
          </p>
          <h3 className="mt-4 font-display text-3xl text-primary">
            Protect the equipment your business depends on.
          </h3>
          <p className="mt-4 text-lg text-muted">
            Ask us about our commercial maintenance program — it&apos;s the best investment you can make in your equipment.
          </p>
        </div>
      </section>
    </ServiceLayout>
  )
}
