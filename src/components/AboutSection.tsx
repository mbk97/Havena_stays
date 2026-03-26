import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import type { ChecklistItem } from '../types/site'

interface AboutSectionProps {
  checklist: ChecklistItem[]
  serviceAreas: string[]
}

export function AboutSection({
  checklist,
  serviceAreas,
}: AboutSectionProps) {
  return (
    <section className="section section--muted" id="about">
      <div className="section-inner about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="About The Business"
            title="A trustworthy, hands-on management partner for UK property owners"
            description="Northbridge Stays is designed to help landlords unlock stronger short-stay performance without taking on the daily workload themselves."
          />

          <div className="about-copy__body">
            <p>
              This business is positioned as a professional, family-led Airbnb
              management company with a direct and personal service style.
              Rather than feeling faceless or overly corporate, it gives
              landlords the confidence that a real operator is overseeing the
              details properly.
            </p>
            <p>
              From listing quality and guest communication to cleaning
              coordination and reporting, the focus is simple: protect the
              property, reduce owner stress, and present a reliable service that
              feels credible at first glance.
            </p>
          </div>

          <ul className="check-list">
            {checklist.map((item) => (
              <li key={item.title}>
                <span className="icon-badge icon-badge--soft">
                  <Icon name={item.icon} className="icon" />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-side">
          <article className="about-card">
            <span className="about-card__avatar">NS</span>
            <p className="about-card__label">Founder & Operations Lead</p>
            <blockquote>
              “Landlords should feel confident that their property is being
              looked after properly, every single stay.”
            </blockquote>
            <cite>
              Use this space for your uncle&apos;s photo, name, and short founder
              story when you are ready to personalise the site.
            </cite>
          </article>

          <article className="service-areas">
            <h3>Service Areas</h3>
            <p>
              Presented as a UK-focused management business for city apartments,
              investor units, and owner-led short-stay properties.
            </p>
            <div className="service-areas__chips">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
