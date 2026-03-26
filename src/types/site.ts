export type IconName =
  | 'building'
  | 'shield'
  | 'briefcase'
  | 'listing'
  | 'chat'
  | 'sparkles'
  | 'chart'
  | 'key'
  | 'wallet'
  | 'home'
  | 'check'
  | 'star'
  | 'mail'
  | 'phone'
  | 'map'

export interface NavLink {
  label: string
  href: `#${string}`
}

export interface HeroHighlight {
  label: string
  value: string
}

export interface TrustBadge {
  title: string
  description: string
  icon: IconName
}

export interface ChecklistItem {
  title: string
  description: string
  icon: IconName
}

export interface ServiceCard {
  title: string
  description: string
  icon: IconName
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: IconName
}

export interface BenefitCard {
  title: string
  description: string
  icon: IconName
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface ContactDetail {
  label: string
  value: string
  href?: string
  icon: IconName
}
