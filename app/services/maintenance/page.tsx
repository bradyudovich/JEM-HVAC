import { createPageMetadata } from '@/app/lib/metadata'
import { ServiceLayout } from '@/app/components/ServiceLayout'

export const metadata = createPageMetadata({
  pageName: 'Maintenance Contract',
  description:
    'Request residential or commercial preventive HVAC maintenance contracts with annual, semi-annual, or quarterly schedules.',
  path: '/services/maintenance',
})

const fuels = ['Gas', 'Oil', 'Electric', 'Uncertain']
const appliances = ['Furnace', 'Boiler', 'Heat Pump', 'Air Conditioner', 'Packaged Unit', 'Uncertain']
const blowerLocations = ['Attic', 'Rooftop', 'Closet', 'Mechanical Room', 'Basement']
const frequencies = ['Annual', 'Semi-Annual', 'Quarterly']
const additional = ['Humidifier', 'Media Air Cleaner', 'Electronic Air Cleaner', 'Ventilator', 'Disposable Filter', 'Washable Filter', 'Economizer']

export default function MaintenancePage() {
  return (
    <ServiceLayout
      title="Maintenance Contract"
      subtitle="Think about how you take care of your car. To keep it operating at its best, you need an occasional tune-up from a trained professional. Your heating and cooling system is no different."
    >
      <form className="rounded-2xl shadow-md bg-white p-6 space-y-6">
        <fieldset>
          <legend className="font-display text-2xl">Commercial or Residential</legend>
          <div className="mt-3 flex gap-6">
            <label><input type="radio" name="property" className="mr-2" />Commercial</label>
            <label><input type="radio" name="property" className="mr-2" />Residential</label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold">Fuel type</legend>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">{fuels.map((item) => <label key={item}><input type="checkbox" className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold">Appliances</legend>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">{appliances.map((item) => <label key={item}><input type="checkbox" className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold">Blower location</legend>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">{blowerLocations.map((item) => <label key={item}><input type="checkbox" className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">Total thermostats/systems<input type="number" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label className="block">Zip code<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
        </div>

        <fieldset>
          <legend className="font-semibold">Service frequency</legend>
          <div className="mt-2 flex flex-wrap gap-4">{frequencies.map((item) => <label key={item}><input type="radio" name="frequency" className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold">Additional appliances</legend>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">{additional.map((item) => <label key={item}><input type="checkbox" className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <div className="grid md:grid-cols-2 gap-4">
          <label>Name<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label>Address<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label>City<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label>State<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label>Zip<input type="text" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label>Phone<input type="tel" className="mt-1 w-full rounded-xl border p-2" /></label>
          <label className="md:col-span-2">Email<input type="email" className="mt-1 w-full rounded-xl border p-2" /></label>
        </div>

        <button type="submit" className="rounded-full bg-accent px-6 py-3 text-white font-semibold">Submit</button>
      </form>
    </ServiceLayout>
  )
}
