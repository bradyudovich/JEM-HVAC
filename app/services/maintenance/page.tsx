import { ServiceLayout } from '@/app/components/ServiceLayout'
import { createPageMetadata } from '@/app/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Maintenance Contracts',
  description:
    'Request Westminster MD HVAC maintenance contracts for residential or commercial systems, with seasonal tune-ups and preventive service for heating and cooling.',
  path: '/services/maintenance',
})

const fuelTypes = ['Gas', 'Oil', 'Electric', 'Uncertain']
const appliances = [
  'Furnace',
  'Boiler',
  'Heat Pump',
  'Air Conditioner',
  'Packaged Unit',
  'Uncertain',
]
const blowerLocations = ['Attic', 'Rooftop', 'Closet', 'Mechanical Room', 'Basement']
const serviceFrequencies = ['Annual', 'Semi-Annual', 'Quarterly']
const additionalAppliances = [
  'Humidifier',
  'Media Air Cleaner',
  'Electronic Air Cleaner',
  'Ventilator',
  'Disposable Filter',
  'Washable Filter',
  'Economizer',
]

function CheckboxGrid({ items, name }: { items: string[]; name: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-primary transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/10"
        >
          <input type="checkbox" name={name} value={item} className="h-4 w-4 accent-[#B45309]" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

function RadioGrid({ items, name }: { items: string[]; name: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-primary transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/10"
        >
          <input type="radio" name={name} value={item} className="h-4 w-4 accent-[#B45309]" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

export default function MaintenancePage() {
  return (
    <ServiceLayout
      title="Maintenance Contracts"
      intro="Think about how you take care of your car. To keep your car operating at its best, you need an occasional tune-up from a trained professional. Your heating and cooling system is no different. To get the most performance and longest life from your system, have a professional perform routine checks in the spring and fall."
    >
      <form className="space-y-8 rounded-3xl bg-white p-8 shadow-soft animate-fade-up">
        <section className="rounded-3xl bg-surface p-6">
          <h2 className="font-display text-3xl text-primary">Agreement Type</h2>
          <div className="mt-6">
            <RadioGrid items={['Commercial', 'Residential']} name="agreementType" />
          </div>
        </section>

        <section className="rounded-3xl bg-surface p-6">
          <h2 className="font-display text-3xl text-primary">Equipment Details</h2>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Fuel Type</p>
              <div className="mt-4">
                <CheckboxGrid items={fuelTypes} name="fuelType" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Appliances</p>
              <div className="mt-4">
                <CheckboxGrid items={appliances} name="appliances" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Blower Location</p>
              <div className="mt-4">
                <CheckboxGrid items={blowerLocations} name="blowerLocation" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Total Thermostats / Systems
                </span>
                <input
                  type="number"
                  min="0"
                  name="systemCount"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Zip Code</span>
                <input
                  type="text"
                  name="zipCode"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Service Frequency</p>
              <div className="mt-4">
                <RadioGrid items={serviceFrequencies} name="serviceFrequency" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Additional Appliances</p>
              <div className="mt-4">
                <CheckboxGrid items={additionalAppliances} name="additionalAppliances" />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-surface p-6">
          <h2 className="font-display text-3xl text-primary">Contact Information</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Name</span>
              <input
                type="text"
                name="name"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Address</span>
              <input
                type="text"
                name="address"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">City</span>
              <input
                type="text"
                name="city"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">State</span>
              <input
                type="text"
                name="state"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Zip</span>
              <input
                type="text"
                name="contactZip"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Phone</span>
              <input
                type="tel"
                name="phone"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Email</span>
              <input
                type="email"
                name="email"
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
              />
            </label>
          </div>
        </section>

        <div className="flex justify-start">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </ServiceLayout>
  )
}
