import { About } from '@/app/components/about'
import { ContactCta } from '@/app/components/contact-cta'
import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/header'
import { Hero } from '@/app/components/hero'
import { Services } from '@/app/components/services'
import { WhyChooseUs } from '@/app/components/why-choose-us'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
