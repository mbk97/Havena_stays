import type { HeroHighlight } from '../types/site'

interface HeroSectionProps {
  highlights: HeroHighlight[]
}

export function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section className="section hero-section" id="home">
      <div className="section-inner hero-grid">
        <div>
          <span className="eyebrow">UK Airbnb Management</span>
          <h1 className="hero-title">
            Maximise Your Rental Income with Hassle-Free Airbnb Management
          </h1>
          <p className="hero-copy">
            We manage your property end-to-end so you can earn more without the
            stress.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Get Started
            </a>
            <a className="button button--secondary" href="#process">
              See How It Works
            </a>
          </div>

          <div className="hero-highlights">
            {highlights.map((highlight) => (
              <article className="hero-highlight" key={highlight.label}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </article>
            ))}
          </div>

          <p className="hero-note">
            <span className="hero-note__dot" aria-hidden="true"></span>
            Built for UK landlords, property owners, and real estate investors
            who want a reliable management partner.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__panel">
            <div className="hero-visual__frame">
              <div className="hero-visual__scene">
                <img
                  src="/property-scene.svg"
                  alt="Illustrated modern UK apartment interior"
                  width="720"
                  height="540"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <div className="hero-visual__content">
              <span className="hero-visual__label">Sample Managed Home</span>
              <h3>Modern city apartment with hotel-grade presentation</h3>
              <p>
                Clean operations, prompt communication, and a guest experience
                that reflects well on your property.
              </p>

              <div className="hero-visual__chips">
                <span className="hero-visual__chip">Dynamic pricing</span>
                <span className="hero-visual__chip">Guest messaging</span>
                <span className="hero-visual__chip">Turnover coordination</span>
              </div>
            </div>
          </div>

          <div className="hero-visual__floating hero-visual__floating--top">
            <span>Owner experience</span>
            <strong>One direct point of contact and clear monthly updates</strong>
          </div>

          <div className="hero-visual__floating hero-visual__floating--bottom">
            <span>Property standard</span>
            <strong>Professional presentation with reliable guest-ready care</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
