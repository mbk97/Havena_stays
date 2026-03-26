import './App.css'
import { AboutSection } from './components/AboutSection'
import { BenefitsSection } from './components/BenefitsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProcessSection } from './components/ProcessSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrustStrip } from './components/TrustStrip'
import {
  aboutChecklist,
  benefits,
  companyName,
  companyTagline,
  contactDetails,
  heroHighlights,
  navLinks,
  processSteps,
  serviceAreas,
  services,
  testimonials,
  trustBadges,
} from './data/siteContent'

function App() {
  return (
    <div className="site-shell">
      <Header
        companyName={companyName}
        tagline={companyTagline}
        navLinks={navLinks}
      />
      <main>
        <HeroSection highlights={heroHighlights} />
        <TrustStrip items={trustBadges} />
        <AboutSection checklist={aboutChecklist} serviceAreas={serviceAreas} />
        <ServicesSection services={services} />
        <ProcessSection steps={processSteps} />
        <BenefitsSection benefits={benefits} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contactDetails={contactDetails} />
      </main>
      <Footer
        companyName={companyName}
        tagline={companyTagline}
        navLinks={navLinks}
        contactDetails={contactDetails}
      />
    </div>
  )
}

export default App
