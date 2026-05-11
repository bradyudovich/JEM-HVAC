import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { ServiceLayout } from '@/app/components/ServiceLayout'
import { createPageMetadata } from '@/app/lib/metadata'
import { cardStyles } from '@/app/lib/styles'

export const metadata = createPageMetadata({
  pageName: 'Residential Services',
  description:
    'Residential HVAC repair, replacement, and indoor air quality services for homes in Westminster and Carroll County, MD.',
  path: '/services/residential',
})

const serviceReplace = ['Air Conditioning', 'Heat Pumps', 'Gas & Oil Furnaces', 'Gas & Oil Boilers', 'Water Heaters']
const indoorAirQuality = ['Humidifiers', 'Electronic Air Cleaners', 'UV Lights', 'Media Air Filters', 'Programmable Thermostats']

const additionalServices = [
  { label: 'Refrigerant Loss', href: '/refrigerant-loss' },
  { label: 'Load Calculations' },
  { label: 'Zone Systems' },
  { label: 'Attic Fans' },
  { label: 'Duct Work' },
  { label: 'Ductless Split Systems' },
  { label: 'PTACs' },
  { label: 'Maintenance Agreements' },
]

export default function ResidentialPage() {
  return (
    <ServiceLayout
      title="Residential Services"
      subtitle="Contact JEM for repair, replacement, upgrades, preventive maintenance, and service for all makes and models in your home."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className={`${cardStyles.standard} h-full flex flex-col`}>
          <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Service & Replace</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <ul className="space-y-3 flex-1">
            {serviceReplace.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${cardStyles.standard} h-full flex flex-col`}>
          <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Indoor Air Quality</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <ul className="space-y-3 flex-1">
            {indoorAirQuality.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className={cardStyles.standard}>
        <h2 className="text-base md:text-lg font-display font-semibold text-primary mb-2">Additional Services</h2>
        <div className="w-10 h-0.5 bg-accent mb-6" />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {additionalServices.map((service) => (
            <li key={service.label} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              {service.href ? (
                <Link href={service.href} className="text-sm md:text-base font-semibold text-accent hover:underline">
                  {service.label}
                </Link>
              ) : (
                <span className="text-sm md:text-base text-gray-600 leading-relaxed">{service.label}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
          We service all makes and models. Major credit cards accepted. Financing available.
        </p>
      </section>
    </ServiceLayout>
  )
}
