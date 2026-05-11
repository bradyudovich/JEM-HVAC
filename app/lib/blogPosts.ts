export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'when-to-replace-hvac-system',
    title: 'How Do You Know When It\'s Time to Replace Your HVAC System?',
    excerpt:
      'Most HVAC systems last 15–20 years. Here are the signs that repair no longer makes sense — and what to consider when choosing a replacement.',
    category: 'Buying Advice',
    readTime: '4 min read',
    date: 'March 2025',
  },
  {
    slug: 'spring-ac-tune-up-checklist',
    title: 'Spring AC Tune-Up Checklist: What a Good Technician Should Do',
    excerpt:
      'Before the heat hits, your AC needs attention. Here\'s exactly what a thorough spring tune-up covers — and what to ask your technician.',
    category: 'Maintenance',
    readTime: '3 min read',
    date: 'April 2025',
  },
  {
    slug: 'heat-pump-vs-furnace-maryland',
    title: 'Heat Pump vs. Gas Furnace: What\'s Right for a Maryland Home?',
    excerpt:
      'Maryland winters are cold but not extreme. We break down which heating system makes the most sense for Carroll County homeowners.',
    category: 'Buying Advice',
    readTime: '5 min read',
    date: 'October 2024',
  },
  {
    slug: 'indoor-air-quality-basics',
    title: 'Indoor Air Quality 101: Why Your Home\'s Air Might Be Making You Feel Worse',
    excerpt:
      'Dust mites, mold spores, pet dander, and VOCs — your sealed home traps more than you think. Here\'s what you can do about it.',
    category: 'Air Quality',
    readTime: '4 min read',
    date: 'January 2025',
  },
  {
    slug: 'refrigerant-leak-signs',
    title: '5 Signs Your AC System Has a Refrigerant Leak',
    excerpt:
      'A refrigerant leak doesn\'t fix itself — and it gets worse over time. These are the warning signs Carroll County homeowners should know.',
    category: 'Troubleshooting',
    readTime: '3 min read',
    date: 'June 2024',
  },
  {
    slug: 'commercial-preventive-maintenance',
    title: 'Why Commercial HVAC Preventive Maintenance Pays for Itself',
    excerpt:
      'Unplanned HVAC failures cost businesses far more than regular maintenance contracts. Here\'s the math — and the checklist.',
    category: 'Commercial',
    readTime: '5 min read',
    date: 'February 2025',
  },
]
