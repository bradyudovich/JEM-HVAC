import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '@/app/lib/services'

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3 md:gap-10 md:px-8">
        <div className="mb-8 md:mb-0">
          <h2 className="mb-2 font-display text-3xl font-bold text-accent">JEM</h2>
          <p className="mb-3 text-white/70">Heating & Air Conditioning</p>
          <p className="mt-2 text-white/70">Quality • Integrity • Expediency</p>
          <p className="mt-3 text-white/80">150 Airport Drive, Unit 1</p>
          <p className="text-white/80">Westminster, MD 21157</p>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="mb-3 text-xl font-display font-semibold text-accent">Quick Links</h2>
          <ul className="space-y-1.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center py-1 text-white hover:text-accent focus-visible:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="mb-3 text-xl font-display font-semibold text-accent">Contact</h2>
          <div className="space-y-2 text-white/90">
            <p className="flex items-start gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>1-888-684-0657 | 410-840-9328</span>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>contact@4jem.com</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>150 Airport Drive, Unit 1, Westminster, MD 21157</span>
            </p>
            <p className="flex items-start gap-2">
              <Clock className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 px-4 py-4 text-sm text-white/50 md:px-8">
        © 2026 JEM Heating and Air Conditioning, Inc. All rights reserved. | York Authorized Dealer
      </div>
    </footer>
  )
}
