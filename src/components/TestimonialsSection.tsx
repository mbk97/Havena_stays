import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import type { Testimonial } from '../types/site'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section section--muted" id="testimonials">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clean social proof for landlords who want reassurance"
          description="These reviews are written as polished placeholders so the page feels complete while you gather real client feedback."
          align="center"
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.author}>
              <div className="rating" aria-label="5 star review">
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={`${testimonial.author}-${index}`}
                    name="star"
                    className="rating__star"
                  />
                ))}
              </div>
              <p>{testimonial.quote}</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
