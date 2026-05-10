import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    name: 'Electronic Air Cleaners',
    description:
      'Help clean the air and eliminate small particles of pollutants that irritate your lungs, eyes, and sinuses the most.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 5v14" />
      </svg>
    ),
  },
  {
    name: 'Humidifiers',
    description:
      'Maintain ideal humidity in your home — relief from dry nasal passages, static electricity, and dry, itchy skin.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.5 3-5 5.8-5 9a5 5 0 1 0 10 0c0-3.2-2.5-6-5-9Z" />
      </svg>
    ),
  },
  {
    name: 'Energy Recovery Ventilators',
    description:
      'Exhaust stale indoor air outside through a recovery core while drawing in fresh air warmed or cooled by the energy already present in the exhaust air.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m10 8 4 4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H10" />
      </svg>
    ),
  },
  {
    name: 'UltraViolet Plus Systems',
    description:
      'Destroys bacteria, viruses, Volatile Organic Compounds (VOCs), mold, mildew, and odors from cooking, tobacco, or pets.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 12h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.6 5.6 2.8 2.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.6 15.6 2.8 2.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.4 5.6-2.8 2.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.4 15.6-2.8 2.8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
]

export default function IndoorAirQualityPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-primary text-white">
        <Image
          src="/images/iaq-hero.jpg"
          alt="Indoor Air Quality Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-14 pt-32 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li className="text-white">Indoor Air Quality</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-4xl animate-fade-up">
            <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              Indoor Air Quality Solutions
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Healthier Indoor Comfort
          </p>
          <h2 className="mt-4 animate-fade-up font-display text-4xl sm:text-5xl">
            Cleaner air can make a real difference in everyday life.
          </h2>
          <p className="mt-6 animate-fade-up text-lg text-muted">
            Indoor Air Quality (IAQ) is a major health issue. Since windows and doors remain closed during summer and winter, we are often subjected to airborne contaminants — dust mites, molds, viruses, bacteria, and pet dander. Very low humidity in winter adds problems like dry nasal passages and static electricity. We recommend one or a combination of the tools below to improve your health, comfort, and quality of life.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="animate-fade-up rounded-2xl border-l-4 border-accent bg-white p-8 shadow-soft"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="text-primary">{product.icon}</div>
                <h2 className="mt-6 font-display text-3xl text-primary">{product.name}</h2>
                <p className="mt-4 text-muted">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Interested in improving your home&apos;s air quality?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Contact us to discuss which solution is right for your home.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
