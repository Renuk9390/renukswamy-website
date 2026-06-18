type IconProps = {
  className?: string
}

const badgeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/* Circular "seal" badges — used for profile / connect links */

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} {...badgeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="8.5"
        stroke="none"
        fill="currentColor"
      >
        in
      </text>
    </svg>
  )
}

export function ScholarIcon({ className }: IconProps) {
  return (
    <svg className={className} {...badgeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <path d="M7.5 11 12 8.5l4.5 2.5-4.5 2.5z" />
      <path d="M9 12.4v2c0 .75 1.34 1.35 3 1.35s3-.6 3-1.35v-2" />
    </svg>
  )
}

export function OrcidIcon({ className }: IconProps) {
  return (
    <svg className={className} {...badgeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="8.5"
        stroke="none"
        fill="currentColor"
      >
        iD
      </text>
    </svg>
  )
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} {...badgeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <path d="M9.5 8.5 7 12l2.5 3.5" />
      <path d="M14.5 8.5 17 12l-2.5 3.5" />
    </svg>
  )
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg className={className} {...badgeProps} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <rect x="6.5" y="8.75" width="11" height="7.5" rx="1" />
      <path d="M6.75 9.25 12 13l5.25-3.75" />
    </svg>
  )
}

/* Utility icons */

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v11m0 0-4-4m4 4 4-4" />
      <path d="M5 19h14" />
    </svg>
  )
}
