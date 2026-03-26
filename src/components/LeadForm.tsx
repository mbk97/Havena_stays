import type { FormEvent } from 'react'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function LeadForm() {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
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
            placeholder="London, Manchester, Birmingham..."
            required
          />
        </div>
      </div>

      <button className="button button--primary button--full" type="submit">
        Get a Free Consultation
      </button>

      <p className="contact-form__footnote">
        Use this form layout now, then connect it later to your email provider,
        CRM, or booking workflow.
      </p>
    </form>
  )
}
