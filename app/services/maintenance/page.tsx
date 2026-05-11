import { buttonStyles, cardStyles } from '@/app/lib/styles'
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
  'w-full rounded-md border border-gray-200 px-4 py-3 text-sm md:text-base text-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

const choiceClass = 'text-sm md:text-base text-gray-600 leading-relaxed flex items-center gap-2'

export default function MaintenancePage() {
  return (
    <ServiceLayout
      title="Maintenance Contract"
      subtitle="Routine tune-ups help your heating and cooling system run better, last longer, and catch problems before they become expensive."
    >
      <form className={`${cardStyles.standard} space-y-6`}>
        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-2">Commercial or Residential</legend>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className={choiceClass}><input type="radio" name="property" value="commercial" className="accent-accent" />Commercial</label>
            <label className={choiceClass}><input type="radio" name="property" value="residential" className="accent-accent" />Residential</label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-4">Fuel type</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{fuels.map((item) => <label key={item} className={choiceClass}><input type="checkbox" name="fuelType" value={item} className="accent-accent" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-4">Appliances</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{appliances.map((item) => <label key={item} className={choiceClass}><input type="checkbox" name="appliances" value={item} className="accent-accent" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-4">Blower location</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{blowerLocations.map((item) => <label key={item} className={choiceClass}><input type="checkbox" name="blowerLocation" value={item} className="accent-accent" />{item}</label>)}</div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block text-sm font-semibold text-primary">Total thermostats/systems<input type="number" min="0" name="systemCount" className={fieldClass} /></label>
          <label className="block text-sm font-semibold text-primary">Zip code<input type="text" name="zipCode" className={fieldClass} /></label>
        </div>

        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-4">Service frequency</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{frequencies.map((item) => <label key={item} className={choiceClass}><input type="radio" name="frequency" value={item} className="accent-accent" />{item}</label>)}</div>
        </fieldset>

        <fieldset>
          <legend className="text-base md:text-lg font-display font-semibold text-primary mb-4">Additional appliances</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{additional.map((item) => <label key={item} className={choiceClass}><input type="checkbox" name="additionalAppliances" value={item} className="accent-accent" />{item}</label>)}</div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-primary">Name<input type="text" name="name" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary">Address<input type="text" name="address" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary">City<input type="text" name="city" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary">State<input type="text" name="state" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary">Zip<input type="text" name="zip" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary">Phone<input type="tel" name="phone" className={fieldClass} /></label>
          <label className="text-sm font-semibold text-primary md:col-span-2">Email<input type="email" name="email" className={fieldClass} /></label>
        </div>

        <button type="submit" className={`${buttonStyles.primary} w-full`}>
          Submit
        </button>
      </form>
    </ServiceLayout>
  )
}
