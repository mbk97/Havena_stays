import { Icon } from './Icon'
import { LeadForm } from './LeadForm'
import { SectionHeading } from './SectionHeading'
import type { ContactDetail } from '../types/site'

interface ContactSectionProps {
  contactDetails: ContactDetail[]
}

export function ContactSection({ contactDetails }: ContactSectionProps) {
  return (
    <section className="section" id="contact">
      <div className="section-inner contact-layout">
        <div className="contact-card contact-card--accent">
          <SectionHeading
            eyebrow="Contact"
            title="Book a free consultation about your property"
            description="Speak with Havena Stays about your property, your rental goals, and the best next steps for short-stay management."
          />

          <address className="contact-points">
            {contactDetails.map((detail) => (
              <div className="contact-point" key={detail.label}>
                <span className="icon-badge icon-badge--inverted">
                  <Icon name={detail.icon} className="icon" />
                </span>
                <div>
                  <strong>{detail.label}</strong>
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </div>
              </div>
            ))}
          </address>

          <div className="contact-expectations">
            <h3>What owners can expect</h3>
            <p>
              A short discovery call, an honest fit assessment, and a practical
              conversation about income potential, setup, and next steps.
            </p>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}
