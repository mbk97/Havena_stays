import type {
  BenefitCard,
  ChecklistItem,
  ContactDetail,
  HeroHighlight,
  NavLink,
  ProcessStep,
  ServiceCard,
  Testimonial,
  TrustBadge,
} from '../types/site'

export const companyName = 'Northbridge Stays'
export const companyTagline = 'Professional Airbnb management for UK landlords'

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const heroHighlights: HeroHighlight[] = [
  { label: 'Setup', value: 'Listing launch and onboarding handled for you' },
  { label: 'Operations', value: 'Guest care, cleaning, and check-ins covered' },
  { label: 'Pricing', value: 'Revenue-led rates tuned to local demand' },
]

export const trustBadges: TrustBadge[] = [
  {
    title: 'UK Registered Business',
    description:
      'A professional, accountable setup built to give landlords confidence from day one.',
    icon: 'building',
  },
  {
    title: 'Fully Compliant',
    description:
      'A management approach shaped around standards, communication, and responsible hosting.',
    icon: 'shield',
  },
  {
    title: 'Professional Property Management',
    description:
      'Structured systems, responsive support, and a service-led experience for owners and guests.',
    icon: 'briefcase',
  },
]

export const aboutChecklist: ChecklistItem[] = [
  {
    title: 'Direct landlord communication',
    description:
      'You work with a real operator who values clarity, responsiveness, and honest updates.',
    icon: 'check',
  },
  {
    title: 'Standards that protect your asset',
    description:
      'From guest screening to turnover quality, every stay is managed with your property in mind.',
    icon: 'home',
  },
  {
    title: 'Positioned for a credible, modern launch',
    description:
      'Ideal for a new management business that needs to look polished, reliable, and trustworthy.',
    icon: 'wallet',
  },
]

export const services: ServiceCard[] = [
  {
    title: 'Listing Creation & Optimisation',
    description:
      'Compelling copy, stronger positioning, and a guest-ready presentation that helps your property stand out.',
    icon: 'listing',
  },
  {
    title: 'Guest Communication',
    description:
      'Fast replies, organised guest support, and a professional tone before, during, and after each stay.',
    icon: 'chat',
  },
  {
    title: 'Cleaning & Maintenance',
    description:
      'Reliable turnover coordination and prompt attention to the day-to-day issues owners do not want to chase.',
    icon: 'sparkles',
  },
  {
    title: 'Pricing & Revenue Management',
    description:
      'Rates reviewed against seasonality, local demand, and events to help protect occupancy and earnings.',
    icon: 'chart',
  },
  {
    title: 'Check-in / Check-out Coordination',
    description:
      'Smooth arrivals, clear access instructions, and organised departures that keep the operation running properly.',
    icon: 'key',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Property Assessment',
    description:
      'We review your property, location, and rental goals to see how it fits the short-stay market.',
    icon: 'home',
  },
  {
    step: '02',
    title: 'Setup & Listing',
    description:
      'Your property is prepared, positioned, and launched with a polished listing and clear operating plan.',
    icon: 'listing',
  },
  {
    step: '03',
    title: 'Guest Management',
    description:
      'We handle enquiries, guest support, check-ins, cleaning coordination, and day-to-day oversight.',
    icon: 'chat',
  },
  {
    step: '04',
    title: 'Monthly Earnings',
    description:
      'You receive the income, reporting, and confidence that your property is being managed professionally.',
    icon: 'wallet',
  },
]

export const benefits: BenefitCard[] = [
  {
    title: 'Higher rental income',
    description:
      'A stronger listing, smarter pricing, and consistent standards can support better short-stay performance.',
    icon: 'chart',
  },
  {
    title: 'No-stress management',
    description:
      'No late-night guest messages, cleaning calls, or arrival coordination landing on your phone.',
    icon: 'check',
  },
  {
    title: 'Professional handling',
    description:
      'Your property is managed with structure, responsiveness, and a level of care that protects your reputation.',
    icon: 'briefcase',
  },
  {
    title: 'Reliable service',
    description:
      'Clear processes and dependable communication help landlords feel informed instead of second-guessing.',
    icon: 'shield',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'The communication has been excellent from the start. Our flat feels properly looked after and we are no longer chasing guest issues ourselves.',
    author: 'James R.',
    role: 'Landlord, Manchester',
  },
  {
    quote:
      'The setup was smooth, the listing looked far more professional, and the whole process felt organised and trustworthy.',
    author: 'Priya S.',
    role: 'Property Owner, Birmingham',
  },
  {
    quote:
      'What stood out most was the professionalism. Clear updates, good presentation, and a genuinely hands-off experience for us.',
    author: 'Daniel W.',
    role: 'Real Estate Investor, London',
  },
]

export const serviceAreas = [
  'London',
  'Manchester',
  'Birmingham',
  'Liverpool',
  'Leeds',
]

export const contactDetails: ContactDetail[] = [
  {
    label: 'Email',
    value: 'hello@northbridgestays.co.uk',
    href: 'mailto:hello@northbridgestays.co.uk',
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: '+44 20 1234 5678',
    href: 'tel:+442012345678',
    icon: 'phone',
  },
  {
    label: 'Location',
    value: 'London, United Kingdom',
    icon: 'map',
  },
]
