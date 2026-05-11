export default function SectionDivider({
  fromColor = '#F7F3ED',
  toColor = '#FFFFFF',
  flip = false,
}: {
  fromColor?: string
  toColor?: string
  flip?: boolean
}) {
  return (
    <div className="relative -mb-px" style={{ backgroundColor: fromColor }}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className={`block h-8 w-full md:h-10 ${flip ? 'rotate-180' : ''}`}
        style={{ display: 'block' }}
      >
        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill={toColor} />
      </svg>
    </div>
  )
}
