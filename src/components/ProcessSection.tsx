import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import type { ProcessStep } from '../types/site'

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="section section--muted" id="process">
      <div className="section-inner">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple process that keeps ownership easy and organised"
          description="Clear onboarding, clear operations, and clear reporting so you always know how the property is being handled."
          align="center"
        />

        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <div className="process-card__top">
                <span className="process-card__step">{step.step}</span>
                <span className="icon-badge icon-badge--soft">
                  <Icon name={step.icon} className="icon" />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 ? (
                <span className="process-card__connector" aria-hidden="true" />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
