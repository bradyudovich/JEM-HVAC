import Link from 'next/link'

export default function YorkWarrantyPage() {
  return (
    <div className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
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
            <li className="text-primary">York Extended Warranty</li>
          </ol>
        </nav>

        <header className="mt-8 animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Authorized York Dealer
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">
            York Extended Warranty
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            As an authorized York dealer, JEM Heating & Air Conditioning offers the York Comfort Plan Extended Warranty. Please download and review the terms and conditions, then complete the acceptance form below.
          </p>
        </header>

        <section className="mt-12 animate-fade-up rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-center text-sm font-semibold uppercase tracking-[0.16em] text-white">
                York
              </div>
              <div>
                <h2 className="font-display text-2xl text-primary">
                  York Comfort Plan — Terms & Conditions
                </h2>
                <p className="mt-2 text-muted">
                  Review the agreement details before completing your warranty acceptance.
                </p>
              </div>
            </div>

            <Link
              href="/york_warranty.pdf"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
            >
              Download PDF
            </Link>
          </div>
        </section>

        <section className="mt-10 animate-fade-up rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-primary">Warranty Acceptance Form</h2>
          <form className="mt-8 space-y-8">
            <label className="flex items-start gap-4 rounded-2xl border border-black/10 bg-surface px-5 py-4 text-sm text-primary has-[:checked]:border-accent has-[:checked]:bg-accent/10">
              <input
                type="checkbox"
                name="acceptTerms"
                className="mt-1 h-4 w-4 accent-[#E8720C]"
              />
              <span className="font-medium">
                I have read and accept the terms and conditions outlined in the York Comfort Plan Warranty Agreement.
              </span>
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Name</span>
                <input
                  type="text"
                  name="name"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Address</span>
                <input
                  type="text"
                  name="address"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">City</span>
                <input
                  type="text"
                  name="city"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">State</span>
                <input
                  type="text"
                  name="state"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Zip</span>
                <input
                  type="text"
                  name="zip"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Telephone</span>
                <input
                  type="tel"
                  name="telephone"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Email</span>
                <input
                  type="email"
                  name="email"
                  className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primary outline-none transition focus:border-accent"
                />
              </label>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Questions about your warranty? Call us at{' '}
                <Link href="tel:1-888-684-0657" className="font-semibold text-accent hover:text-primary">
                  1-888-684-0657
                </Link>
                .
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
              >
                Submit Warranty Acceptance
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
