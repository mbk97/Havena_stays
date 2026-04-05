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
          title="What landlords say about working with Havena Stays"
          description="Feedback from owners who wanted more reliable Airbnb management, better guest communication, and less day-to-day stress."
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
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
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
