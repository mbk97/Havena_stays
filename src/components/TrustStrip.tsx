import { Icon } from './Icon'
import type { TrustBadge } from '../types/site'

interface TrustStripProps {
  items: TrustBadge[]
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="section section--tight" aria-label="Trust and credibility">
      <div className="section-inner trust-strip">
        {items.map((item) => (
          <article className="trust-card" key={item.title}>
            <span className="icon-badge">
              <Icon name={item.icon} className="icon" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
