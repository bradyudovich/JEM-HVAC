export default function Logo({
  size = 'md',
  light = false,
}: {
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
}) {
  const sizes = {
    sm: { badge: 'w-8 h-8', name: 'text-sm', sub: 'text-[10px]' },
    md: { badge: 'w-10 h-10', name: 'text-base', sub: 'text-xs' },
    lg: { badge: 'w-14 h-14', name: 'text-xl', sub: 'text-sm' },
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.badge} relative flex-shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M20 2L4 8V22C4 31 12 37 20 39C28 37 36 31 36 22V8L20 2Z" fill="#1B3A2D" />
          <path d="M20 2L4 8V11L20 5L36 11V8L20 2Z" fill="#C17B2F" />
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="700"
            fontFamily="Georgia, serif"
            letterSpacing="1"
          >
            JEM
          </text>
        </svg>
      </div>
      <div className="leading-none">
        <span
          className={`${s.name} block font-display font-semibold leading-tight ${light ? 'text-white' : 'text-primary'}`}
        >
          JEM
        </span>
        <span className={`${s.sub} block leading-tight ${light ? 'text-white/60' : 'text-muted'}`}>
          Heating & Air Conditioning
        </span>
      </div>
    </div>
  )
}
