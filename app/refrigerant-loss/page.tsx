import Link from 'next/link'

const sections = [
  {
    title: 'Understanding Refrigerant in a Sealed System',
    body: 'Your air conditioning or refrigeration system is a sealed system — refrigerant (commonly called Freon) should never leak out. There are two main types of systems: factory-sealed units like a refrigerator, and "split systems" connected with copper tubing in the field, like a typical home AC or heat pump.',
  },
  {
    title: 'How Systems Are Charged',
    body: 'Split systems require a technician to set the refrigerant charge during installation. The most accurate method is by weight, but other approaches (superheat/subcooling/approach methods) are also used. If a system was improperly charged at installation, performance and efficiency can suffer — though this is typically not the culprit when we find very low system pressures.',
  },
  {
    title: 'Your Two Options When Refrigerant Is Low',
    body: 'When a system is low, you have two choices:\n1. Add refrigerant for immediate relief\n2. Identify and seal the leak\n\nLeaks can occur in the indoor unit, outdoor unit, or the copper tubing between them. There may also be multiple leaks. Common causes include salt corrosion at coastal locations, household chemicals, and manufacturing defects — an industry-wide issue across all major manufacturers.',
  },
  {
    title: 'How We Find Leaks',
    body: 'Leak detection methods include: refrigerant sniffers, ultrasonic detectors, and UV dye injection. We do not use UV dye injection as it can void some compressor warranties. Some leaks are large and obvious; others are so small they are virtually undetectable. In difficult cases, all three components must be isolated and pressure-tested with nitrogen — a labor-intensive process.',
  },
]

export default function RefrigerantLossPage() {
  return (
    <div className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link href="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link href="/services/residential" className="hover:text-accent">
                Residential
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="text-primary">Refrigerant Loss</li>
          </ol>
        </nav>

        <header className="mt-8 animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Residential HVAC Information
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">
            Refrigerant Loss — What You Need to Know
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Important guidance on how refrigerant loss happens, how leaks are diagnosed, and what your options are when a sealed system is low.
          </p>
        </header>

        <article className="mt-12 space-y-12 rounded-3xl bg-white p-8 shadow-soft sm:p-10">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="animate-fade-up space-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="font-display text-3xl text-primary">{section.title}</h2>
              <div className="space-y-4 text-lg text-muted">
                {section.body.split('\n\n').map((paragraph) => {
                  const lines = paragraph.split('\n')
                  const isList = lines.every((line) => /^\d+\./.test(line))

                  if (isList) {
                    return (
                      <ol key={paragraph} className="list-decimal space-y-2 pl-6">
                        {lines.map((line) => (
                          <li key={line}>{line.replace(/^\d+\.\s*/, '')}</li>
                        ))}
                      </ol>
                    )
                  }

                  return <p key={paragraph}>{paragraph}</p>
                })}
              </div>
            </section>
          ))}

          <section className="animate-fade-up rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Our Policy
            </p>
            <p className="mt-4 text-lg leading-8 text-amber-950">
              It is important that you are informed. If you elect to add a leak sealant or simply add refrigerant to the system, the risk is entirely yours. We are happy to take whatever action you choose, but will not refund, reimburse, or otherwise provide compensation for repeat leaks or additional service that may be necessary.
            </p>
          </section>
        </article>

        <div className="mt-12 animate-fade-up">
          <Link
            href="/services/residential"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
          >
            Back to Residential Services
          </Link>
        </div>
      </div>
    </div>
  )
}
