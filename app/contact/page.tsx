import { createPageMetadata } from '@/app/lib/metadata'
import { ContactPageClient } from '@/app/contact/ContactPageClient'

export const metadata = createPageMetadata({
  pageName: 'Contact',
  description:
    'Contact JEM Heating and Air Conditioning for service scheduling, emergency HVAC support, and maintenance inquiries.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactPageClient />
}
