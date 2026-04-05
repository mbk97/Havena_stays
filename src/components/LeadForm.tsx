import type { FormEvent } from 'react'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function LeadForm() {
  return (
    <form
      className="contact-form"
      aria-label="Property consultation form"
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+44 20 1234 5678"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="location">Property Location</label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="London, Manchester, Birmingham..."
            required
          />
        </div>
      </div>

      <button className="button button--primary button--full" type="submit">
        Get a Free Consultation
      </button>

      <p className="contact-form__footnote">
        Share a few details and we will follow up to discuss your property, fit,
        and the next steps.
      </p>
    </form>
  )
}
