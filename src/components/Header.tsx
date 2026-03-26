import type { NavLink } from '../types/site'

interface HeaderProps {
  companyName: string
  tagline: string
  navLinks: NavLink[]
}

export function Header({ companyName, tagline, navLinks }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${companyName} home`}>
        <span className="brand__mark">NS</span>
        <span className="brand__text">
          <strong>{companyName}</strong>
          <small>{tagline}</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="button button--primary button--small" href="#contact">
        Book a Consultation
      </a>
    </header>
  )
}
