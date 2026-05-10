import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { createPageMetadata } from '@/app/lib/metadata'
import { ServiceLayout } from '@/app/components/ServiceLayout'

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
      subtitle="Contact JEM for all your home heating and cooling needs. We specialize in add-on systems, system replacement and upgrade, preventive maintenance, repair, and service of all makes and models."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Service & Replace</h2>
          <ul>
            {serviceReplace.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-gray-100 py-2 last:border-0">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Indoor Air Quality</h2>
          <ul>
            {indoorAirQuality.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-gray-100 py-2 last:border-0">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-md md:p-8">
        <h2 className="mb-4 border-t-4 border-accent pt-4 text-xl font-display font-bold text-primary">Additional Services</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {additionalServices.map((service) => (
            <li key={service.label} className="flex items-center gap-3 border-b border-gray-100 py-2 last:border-0">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              {service.href ? (
                <Link href={service.href} className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm text-accent hover:underline focus-visible:underline font-medium">
                  {service.label}
                </Link>
              ) : (
                <span className="text-sm text-gray-700">{service.label}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-medium text-primary">
          We service all makes and models. Major credit cards accepted. Financing available.
        </p>
      </section>
    </ServiceLayout>
  )
}
