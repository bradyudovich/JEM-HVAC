import { createPageMetadata } from '@/app/lib/metadata'
import { ContactPageClient } from '@/app/contact/ContactPageClient'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact our Westminster MD HVAC team for heating and air conditioning repair, maintenance, and installation. Call or message JEM for fast comfort service.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactPageClient />
}
