export const layoutClasses = {
  container: 'max-w-7xl mx-auto px-4 md:px-8',
  editorial: 'max-w-3xl mx-auto px-4 md:px-6',
  homepageSection: 'py-14 md:py-16',
  innerSection: 'py-12 md:py-14',
  pageHero: 'py-14 md:py-20',
  cta: 'py-12 md:py-14',
  emergency: 'py-8 md:py-10',
  trustBar: 'py-4 md:py-5',
  footer: 'py-10 md:py-12',
  announcement: 'py-1.5',
} as const

export const buttonStyles = {
  primary:
    'inline-flex items-center justify-center gap-2 bg-accent text-white rounded-md px-6 py-2.5 text-sm font-semibold hover:bg-amber-700 active:scale-95 transition-all duration-150',
  secondary:
    'inline-flex items-center justify-center gap-2 bg-primary text-white rounded-md px-6 py-2.5 text-sm font-semibold hover:bg-green-900 active:scale-95 transition-all duration-150',
  outline:
    'inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white rounded-md px-6 py-2.5 text-sm font-semibold hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-150',
} as const

export const cardStyles = {
  standard:
    'bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 border border-gray-100/80',
  surface: 'bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8',
  iconContainer:
    'w-10 h-10 bg-green-light rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300',
} as const
