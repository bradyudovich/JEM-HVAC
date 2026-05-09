import { Container } from '@/app/components/ui'
import { siteConfig } from '@/app/lib/site-config'

export function Footer() {
  return (
    <footer className="bg-surface py-8">
      <Container>
        <div className="flex flex-col gap-3 border-t border-black/5 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.hours}</p>
        </div>
      </Container>
    </footer>
  )
}
