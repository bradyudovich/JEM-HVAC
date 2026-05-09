import Link from 'next/link'
import { ServiceLayout } from '@/app/components/ServiceLayout'

const serviceReplace = [
  'Air Conditioning',
  'Heat Pumps',
  'Gas & Oil Furnaces',
  'Gas & Oil Boilers',
  'Water Heaters',
]

const indoorAirQuality = [
  'Humidifiers',
  'Electronic Air Cleaners',
  'UV Lights',
  'Media Air Filters',
  'Energy Saving Programmable Thermostats',
]

const additionalServices = [
  { label: 'Refrigerant Loss', href: '/refrigerant-loss' },
  { label: 'Heating and Cooling Load Calculations' },
  { label: 'Zone Systems' },
  { label: 'Attic Fans' },
  { label: 'Duct Work' },
  { label: 'Ductless Split Systems' },
  { label: 'Packaged Terminal Air Conditioners (PTACs)' },
  { label: 'Maintenance Agreements' },
]

export default function ResidentialServicesPage() {
  return (
    <ServiceLayout
      title="Residential Services"
      intro="Contact JEM for all your home heating and cooling needs. We specialize in add-on systems, system replacement and upgrade, preventive maintenance, repair, and service of all makes and models."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
          <h2 className="font-display text-3xl text-primary">Service & Replace</h2>
          <ul className="mt-6 space-y-4 text-muted">
            {serviceReplace.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
          <h2 className="font-display text-3xl text-primary">Indoor Air Quality</h2>
          <ul className="mt-6 space-y-4 text-muted">
            {indoorAirQuality.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
        <h2 className="font-display text-3xl text-primary">Additional Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {additionalServices.map((item) => (
            <div key={item.label} className="rounded-2xl bg-surface px-5 py-4 text-muted">
              {item.href ? (
                <Link href={item.href} className="font-medium text-accent hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm font-medium text-primary">
          We service all makes and models. Major credit cards accepted. Financing available.
        </p>
      </section>
    </ServiceLayout>
  )
}
