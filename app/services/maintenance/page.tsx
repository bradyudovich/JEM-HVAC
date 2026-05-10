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

const fieldClass =
  'w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent'

export default function MaintenancePage() {
  return (
    <ServiceLayout
      title="Maintenance Contract"
      subtitle="Think about how you take care of your car. To keep it operating at its best, you need an occasional tune-up from a trained professional. Your heating and cooling system is no different."
    >
      <form className="space-y-6 rounded-2xl bg-white p-4 shadow-md md:p-8">
        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Commercial or Residential</legend>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">
            <label className="text-base text-gray-700"><input type="radio" name="property" value="commercial" className="mr-2" />Commercial</label>
            <label className="text-base text-gray-700"><input type="radio" name="property" value="residential" className="mr-2" />Residential</label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Fuel type</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">{fuels.map((item) => <label key={item} className="text-base text-gray-700"><input type="checkbox" name="fuelType" value={item} className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Appliances</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">{appliances.map((item) => <label key={item} className="text-base text-gray-700"><input type="checkbox" name="appliances" value={item} className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Blower location</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">{blowerLocations.map((item) => <label key={item} className="text-base text-gray-700"><input type="checkbox" name="blowerLocation" value={item} className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block text-base font-semibold text-gray-700">Total thermostats/systems<input type="number" min="0" name="systemCount" className={fieldClass} /></label>
          <label className="block text-base font-semibold text-gray-700">Zip code<input type="text" name="zipCode" className={fieldClass} /></label>
        </div>

        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Service frequency</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">{frequencies.map((item) => <label key={item} className="text-base text-gray-700"><input type="radio" name="frequency" value={item} className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-display font-bold text-primary">Additional appliances</legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">{additional.map((item) => <label key={item} className="text-base text-gray-700"><input type="checkbox" name="additionalAppliances" value={item} className="mr-2" />{item}</label>)}</div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="text-base font-semibold text-gray-700">Name<input type="text" name="name" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700">Address<input type="text" name="address" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700">City<input type="text" name="city" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700">State<input type="text" name="state" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700">Zip<input type="text" name="zip" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700">Phone<input type="tel" name="phone" className={fieldClass} /></label>
          <label className="text-base font-semibold text-gray-700 md:col-span-2">Email<input type="email" name="email" className={fieldClass} /></label>
        </div>

        <button type="submit" className="min-h-[44px] min-w-[44px] w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600 focus-visible:bg-orange-600">Submit</button>
      </form>
    </ServiceLayout>
  )
}
