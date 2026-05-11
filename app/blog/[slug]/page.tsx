import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { blogPosts } from '@/app/lib/blogPosts'
import { createPageMetadata } from '@/app/lib/metadata'
import { layoutClasses } from '@/app/lib/styles'

const articleSections: Record<string, Array<{ heading: string; paragraphs: string[] }>> = {
  'when-to-replace-hvac-system': [
    {
      heading: 'Watch the Age of the Equipment',
      paragraphs: [
        'Most systems give homeowners 15 to 20 years of dependable service. If yours is already in that range, every major repair deserves a bigger replacement conversation.',
        'Even if the system still runs, older equipment often costs more to operate and may struggle to keep temperatures even from room to room.',
      ],
    },
    {
      heading: 'When Repairs Start Stacking Up',
      paragraphs: [
        'One repair does not mean you need a new system. But frequent service calls, hard-to-find parts, and repeat breakdowns are usually signs the system is nearing the end.',
        'A good rule of thumb is simple: if the repair is expensive and the unit is already older, replacement may give you more value and peace of mind.',
      ],
    },
    {
      heading: 'Choosing the Right Replacement',
      paragraphs: [
        'The best replacement is not always the biggest or most expensive option. Proper sizing, installation quality, and long-term efficiency matter most.',
        'When we help homeowners compare options, we focus on comfort goals, budget, and how the home is actually used day to day.',
      ],
    },
  ],
  'spring-ac-tune-up-checklist': [
    {
      heading: 'Start With a Full System Check',
      paragraphs: [
        'A solid spring tune-up should include thermostat testing, airflow checks, electrical inspection, and a full look at the indoor and outdoor equipment.',
        'If the visit feels rushed or only covers the outdoor unit, you are probably not getting the value of a real maintenance appointment.',
      ],
    },
    {
      heading: 'Cleaning Matters More Than People Think',
      paragraphs: [
        'Dirty coils, clogged drains, and neglected filters make your system work harder than it should. Cleaning these basics can improve efficiency and help prevent mid-season failures.',
        'Ask your technician what was cleaned, what still needs attention, and whether any buildup could affect performance later in the summer.',
      ],
    },
    {
      heading: 'Leave With Clear Notes',
      paragraphs: [
        'A good technician should tell you what is in good shape, what to keep an eye on, and whether any repair should be scheduled soon.',
        'The goal of maintenance is not pressure. It is helping you avoid surprises when the weather gets hot.',
      ],
    },
  ],
  'heat-pump-vs-furnace-maryland': [
    {
      heading: 'Think About Local Weather',
      paragraphs: [
        'Carroll County winters are real, but they are not severe every day of the season. That makes heat pumps a strong option for many homes, especially when efficiency matters.',
        'Gas furnaces still make sense for homeowners who want strong high-heat output and already have gas service available.',
      ],
    },
    {
      heading: 'Comfort and Operating Cost',
      paragraphs: [
        'Heat pumps often deliver steady, even comfort and can cool your home in summer as well. Furnaces may feel warmer at the supply vents, which some homeowners prefer on the coldest days.',
        'Energy prices, insulation levels, and duct condition all play a role in which system will cost less to run.',
      ],
    },
    {
      heading: 'The Best Fit Is Home-Specific',
      paragraphs: [
        'There is no one-size-fits-all answer. The right system depends on your existing setup, budget, and what kind of comfort experience you want.',
        'That is why we look at the home first and make recommendations second.',
      ],
    },
  ],
  'indoor-air-quality-basics': [
    {
      heading: 'What Is Floating Around Indoors?',
      paragraphs: [
        'Modern homes hold on to more indoor air than many homeowners realize. That can mean dust, pet dander, cooking particles, and moisture stay trapped longer than they should.',
        'If someone in the home deals with allergies, headaches, or stale air, indoor air quality deserves attention.',
      ],
    },
    {
      heading: 'Simple Upgrades Can Help',
      paragraphs: [
        'Better filtration, humidity control, and fresh-air solutions can all improve how a home feels. The right answer depends on what is causing the biggest problem.',
        'In some homes, a better filter is enough. In others, humidity or ventilation is the bigger issue.',
      ],
    },
    {
      heading: 'Start With a Practical Plan',
      paragraphs: [
        'You do not need every product on the market. Start with the issues you are noticing most and choose upgrades that match your system and your budget.',
        'A practical plan usually gives better results than chasing trendy add-ons.',
      ],
    },
  ],
  'refrigerant-leak-signs': [
    {
      heading: 'Weak Cooling Is the First Clue',
      paragraphs: [
        'If your AC runs longer but your house still feels warm, low refrigerant may be part of the issue. Many homeowners notice longer run times before they notice anything else.',
        'Warm air at the vents, rising humidity, and uneven temperatures can all point in the same direction.',
      ],
    },
    {
      heading: 'Look for Icing or Hissing',
      paragraphs: [
        'Ice on the refrigerant lines or indoor coil can happen when a system is low on charge. Some homeowners also hear a faint hissing sound near the equipment or line set.',
        'These symptoms do not confirm the leak location, but they are strong signs the system should be inspected soon.',
      ],
    },
    {
      heading: 'Why Quick Action Matters',
      paragraphs: [
        'A refrigerant leak does not solve itself. The longer it goes unaddressed, the harder your system has to work and the greater the risk of compressor damage.',
        'Prompt diagnosis gives you more repair options and helps prevent bigger costs later.',
      ],
    },
  ],
  'commercial-preventive-maintenance': [
    {
      heading: 'Downtime Gets Expensive Fast',
      paragraphs: [
        'When a business loses heating or cooling unexpectedly, the cost goes beyond the repair bill. Productivity drops, customers notice, and employees get uncomfortable quickly.',
        'Preventive maintenance is one of the easiest ways to reduce that risk.',
      ],
    },
    {
      heading: 'Maintenance Makes Budgeting Easier',
      paragraphs: [
        'Routine inspections help you spot worn parts, airflow issues, and efficiency losses before they turn into emergency calls. That makes costs easier to plan for across the year.',
        'It also helps protect equipment life so you are not replacing systems earlier than necessary.',
      ],
    },
    {
      heading: 'A Good Program Is Consistent',
      paragraphs: [
        'The best maintenance plans are not complicated. They are thorough, consistent, and built around the type of equipment you actually have on site.',
        'If your building depends on HVAC uptime, a preventive program usually pays for itself in fewer surprises alone.',
      ],
    },
  ],
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return createPageMetadata({
      pageName: 'HVAC Tips',
      description: 'Helpful advice from the JEM team to keep your home comfortable year-round.',
      path: '/blog',
    })
  }

  return createPageMetadata({
    pageName: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) notFound()

  const sections = articleSections[slug]
  const relatedPosts = blogPosts.filter((entry) => entry.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.date} · ${post.readTime}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tips', href: '/blog' }, { label: post.title }]}
      />

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.editorial}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Tips
          </Link>

          <article className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">{section.heading}</h2>
                <div className="w-10 h-0.5 bg-accent mb-6" />
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Related Tips</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">More Helpful Reading</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{related.category}</span>
                <h3 className="text-base md:text-lg font-display font-semibold text-primary mb-2">{related.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a question about your own system?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
