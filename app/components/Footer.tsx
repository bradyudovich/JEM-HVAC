import Link from 'next/link'
import { navLinks } from '@/app/lib/services'

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="mt-1 inline-flex h-5 w-5 text-accent">{children}</span>
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl text-white">JEM Heating & Air Conditioning</h2>
          <p className="mt-4 text-white/80">Quality • Integrity • Expediency</p>
          <p className="mt-2 text-white/70">Serving Carroll County, MD since 1997.</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li className="flex gap-2">
              <Icon>☎</Icon>
              <span>
                <Link href="tel:1-888-684-0657" className="hover:text-accent">1-888-684-0657</Link> |{' '}
                <Link href="tel:410-840-9328" className="hover:text-accent">410-840-9328</Link>
              </span>
            </li>
            <li className="flex gap-2">
              <Icon>✉</Icon>
              <Link href="mailto:contact@4jem.com" className="hover:text-accent">contact@4jem.com</Link>
            </li>
            <li className="flex gap-2">
              <Icon>📍</Icon>
              <span>150 Airport Drive, Unit 1, Westminster, MD 21157</span>
            </li>
            <li className="flex gap-2">
              <Icon>🕒</Icon>
              <span>Mon–Fri 8:00AM–4:30PM | Sat–Sun: Closed | Emergencies: Call for Service</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-sm text-white/70">
        © 2026 JEM Heating and Air Conditioning, Inc. All rights reserved. | York Authorized Dealer
      </div>
    </footer>
  )
}
