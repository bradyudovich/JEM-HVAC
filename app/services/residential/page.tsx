import Link from 'next/link'
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
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="font-display text-3xl">Service & Replace</h2>
          <ul className="mt-4 space-y-2 text-muted list-disc list-inside">
            {serviceReplace.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="font-display text-3xl">Indoor Air Quality</h2>
          <ul className="mt-4 space-y-2 text-muted list-disc list-inside">
            {indoorAirQuality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl shadow-md bg-white p-6">
        <h2 className="font-display text-3xl">Additional Services</h2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-muted">
          {additionalServices.map((service) => (
            <li key={service.label}>
              {service.href ? (
                <Link href={service.href} className="font-medium text-accent hover:text-primary">
                  {service.label}
                </Link>
              ) : (
                service.label
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
