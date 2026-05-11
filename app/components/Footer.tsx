import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '@/app/components/Logo'
import { layoutClasses } from '@/app/lib/styles'
import { navLinks } from '@/app/lib/services'

const quickLinks = navLinks.map((item) =>
  item.href === '/blog' ? { ...item, label: 'HVAC Tips' } : item,
)

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className={`${layoutClasses.container} ${layoutClasses.footer} grid grid-cols-1 gap-8 md:grid-cols-3`}>
        <div>
          <Logo size="sm" light />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Serving Carroll County, Maryland with honest, reliable HVAC service since February 19, 1997.
          </p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Quick Links</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Contact</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="space-y-3">
            <p className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>1-888-684-0657 | 410-840-9328</span>
            </p>
            <p className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>contact@4jem.com</span>
            </p>
            <p className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>150 Airport Drive, Unit 1, Westminster, MD 21157</span>
            </p>
            <p className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
              <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 md:px-8">
        © 2026 JEM Heating and Air Conditioning, Inc. All rights reserved. | York Authorized Dealer
      </div>
    </footer>
  )
}
