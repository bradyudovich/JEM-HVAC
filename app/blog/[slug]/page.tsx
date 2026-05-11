import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { blogContent } from '@/app/lib/blogContent'
import { blogPosts } from '@/app/lib/blogPosts'
import { createPageMetadata } from '@/app/lib/metadata'
import { layoutClasses } from '@/app/lib/styles'

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

  const sections = blogContent[slug]
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
