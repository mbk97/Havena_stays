import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import type { ServiceCard } from '../types/site'

interface ServicesSectionProps {
  services: ServiceCard[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end support that keeps your property performing"
          description="Everything a landlord needs to hand over the day-to-day running of a short-term rental with confidence."
          align="center"
        />

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="icon-badge">
                <Icon name={service.icon} className="icon" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
