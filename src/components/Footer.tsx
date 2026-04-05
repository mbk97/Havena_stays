import type { ContactDetail, NavLink } from '../types/site'

interface FooterProps {
  companyName: string
  tagline: string
  navLinks: NavLink[]
  contactDetails: ContactDetail[]
}

export function Footer({
  companyName,
  tagline,
  navLinks,
  contactDetails,
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong className="site-footer__brand">{companyName}</strong>
          <p className="site-footer__copy">
            {tagline}. Clean systems, reliable communication, and a calm,
            professional experience for landlords.
          </p>
          <p className="site-footer__meta">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <address className="footer-contact">
          {contactDetails.map((detail) =>
            detail.href ? (
              <a key={detail.label} href={detail.href}>
                {detail.value}
              </a>
            ) : (
              <span key={detail.label}>{detail.value}</span>
            ),
          )}
        </address>
      </div>
    </footer>
  )
}
