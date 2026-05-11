import { CheckCircle2 } from 'lucide-react'
import { ServiceLayout } from '@/app/components/ServiceLayout'
import { createPageMetadata } from '@/app/lib/metadata'
import { cardStyles } from '@/app/lib/styles'

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
      subtitle="Maintenance, repair, and replacement support for rooftop packaged equipment and specialty commercial systems across Carroll County."
    >
      <section className={cardStyles.standard}>
        <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Service List</h2>
        <div className="w-10 h-0.5 bg-accent mb-6" />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-gray-600 leading-relaxed">{service}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <article className={`${cardStyles.standard} h-full flex flex-col`}>
          <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Maintenance Agreements</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <ul className="space-y-3 flex-1">
            {['Quarterly', 'Semi-Annual', 'Custom'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className={`${cardStyles.standard} h-full flex flex-col`}>
          <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Why Preventive Maintenance?</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
            Regular service reduces surprise breakdowns, helps protect energy efficiency, and gives your team fewer HVAC interruptions to deal with.
          </p>
        </article>
      </section>
    </ServiceLayout>
  )
}
