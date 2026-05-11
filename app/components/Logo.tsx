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
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top facet (crown) */}
          <polygon
            points="20,4 32,14 8,14"
            fill="#C17B2F"
          />
          {/* Left upper facet */}
          <polygon
            points="8,14 20,4 20,36"
            fill="#1B3A2D"
            opacity="0.9"
          />
          {/* Right upper facet */}
          <polygon
            points="32,14 20,4 20,36"
            fill="#1B3A2D"
            opacity="0.7"
          />
          {/* Left lower facet */}
          <polygon
            points="8,14 20,36 4,18"
            fill="#1B3A2D"
            opacity="0.6"
          />
          {/* Right lower facet */}
          <polygon
            points="32,14 20,36 36,18"
            fill="#1B3A2D"
            opacity="0.5"
          />
          {/* Bottom point left */}
          <polygon
            points="4,18 20,36 8,14"
            fill="#C17B2F"
            opacity="0.6"
          />
          {/* Bottom point right */}
          <polygon
            points="36,18 20,36 32,14"
            fill="#C17B2F"
            opacity="0.4"
          />
          {/* Thin outline for definition */}
          <polygon
            points="20,4 32,14 36,18 20,36 4,18 8,14"
            fill="none"
            stroke="#C17B2F"
            strokeWidth="0.75"
            opacity="0.6"
          />
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
