import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CTABanner } from '@/app/components/CTABanner'
import FadeIn from '@/app/components/FadeIn'
import { PageHero } from '@/app/components/PageHero'
import { blogPosts } from '@/app/lib/blogPosts'
import { createPageMetadata } from '@/app/lib/metadata'
import { layoutClasses } from '@/app/lib/styles'

export const metadata = createPageMetadata({
  pageName: 'HVAC Tips & Resources',
  description: 'Helpful advice from the JEM team to keep your home comfortable year-round.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="HVAC Tips & Resources"
        subtitle="Helpful advice from the JEM team to keep your home comfortable year-round."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tips' }]}
      />

      <section className={`bg-white ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">JEM Tips</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Helpful Articles for Homeowners and Businesses</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {blogPosts.map((post, i) => (
              <FadeIn delay={i * 75} key={post.slug} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group h-full block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col border border-gray-100/80">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{post.category}</span>
                  <h3 className="text-base font-display font-semibold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-muted">{post.date} · {post.readTime}</span>
                    <span className="text-accent text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need personal advice about your system?"
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
