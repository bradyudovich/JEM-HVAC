import Link from 'next/link'
import { navLinks } from '@/app/lib/services'

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl font-bold text-accent">JEM</h2>
          <p className="mt-3 text-white/70">Heating & Air Conditioning</p>
          <p className="mt-2 text-white/70">Quality • Integrity • Expediency</p>
          <p className="mt-4 text-white/80">150 Airport Drive, Unit 1</p>
          <p className="text-white/80">Westminster, MD 21157</p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-accent">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-accent">Contact</h2>
          <div className="mt-4 space-y-3 text-white/90">
            <p>📞 1-888-684-0657 | 410-840-9328</p>
            <p>✉️ contact@4jem.com</p>
            <p>📍 150 Airport Drive, Unit 1, Westminster, MD 21157</p>
            <p>🕐 Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 px-6 pt-6 text-sm text-white/50">
        © 2026 JEM Heating and Air Conditioning, Inc. All rights reserved. | York Authorized Dealer
      </div>
    </footer>
  )
}
