import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import type { BenefitCard } from '../types/site'

interface BenefitsSectionProps {
  benefits: BenefitCard[]
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="section" id="benefits">
      <div className="section-inner benefits-layout">
        <div className="benefits-summary">
          <SectionHeading
            eyebrow="Why Landlords Choose Us"
            title="Designed to deliver peace of mind as well as stronger returns"
            description="A reliable Airbnb management service should protect your property, improve the guest experience, and help you earn more with less day-to-day effort."
          />

          <ul className="benefits-summary__list">
            <li>
              <span className="icon-badge icon-badge--soft">
                <Icon name="check" className="icon" />
              </span>
              <div>
                <strong>Clear communication</strong>
                <p>
                  Owners want fast answers and dependable updates, not vague
                  promises.
                </p>
              </div>
            </li>
            <li>
              <span className="icon-badge icon-badge--soft">
                <Icon name="shield" className="icon" />
              </span>
              <div>
                <strong>Trusted property care</strong>
                <p>
                  Each stay is handled with clear processes, accountable
                  oversight, and standards that protect your asset.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="icon-badge">
                <Icon name={benefit.icon} className="icon" />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
