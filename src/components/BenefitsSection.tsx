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
            description="The page is intentionally built to feel credible, calm, and professional rather than flashy or over-sold."
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
                <strong>Trust-led positioning</strong>
                <p>
                  Every section is written to reassure landlords that the
                  business is legitimate and serious.
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
