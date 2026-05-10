import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '@/app/lib/services'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div>
          <h2 className="text-lg font-display font-bold mb-1">JEM</h2>
          <p className="text-white/60 text-xs mb-2">Heating & Air Conditioning</p>
          <p className="text-white/60 text-xs leading-relaxed">Quality • Integrity • Expediency</p>
          <p className="text-white/60 text-xs leading-relaxed">150 Airport Drive, Unit 1</p>
          <p className="text-white/60 text-xs leading-relaxed">Westminster, MD 21157</p>
        </div>

        <div>
          <h2 className="text-accent text-xs uppercase tracking-widest font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-accent text-xs transition-colors block py-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-accent text-xs uppercase tracking-widest font-semibold mb-2">Contact</h2>
          <div>
            <p className="flex items-start gap-2 text-xs text-white/70 mb-1.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>1-888-684-0657 | 410-840-9328</span>
            </p>
            <p className="flex items-start gap-2 text-xs text-white/70 mb-1.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>contact@4jem.com</span>
            </p>
            <p className="flex items-start gap-2 text-xs text-white/70 mb-1.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>150 Airport Drive, Unit 1, Westminster, MD 21157</span>
            </p>
            <p className="flex items-start gap-2 text-xs text-white/70 mb-1.5">
              <Clock className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <span>Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 md:px-8 py-3 text-center text-white/40 text-xs">
        © 2026 JEM Heating and Air Conditioning, Inc. All rights reserved. | York Authorized Dealer
      </div>
    </footer>
  )
}
