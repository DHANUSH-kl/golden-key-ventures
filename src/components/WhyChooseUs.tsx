import './WhyChooseUs.css';

const points = [
  'High Quality Materials',
  'Experienced Professionals',
  'On-Time Project Delivery',
  'Transparent Pricing',
  'End-to-End Solutions',
  'Customer-Centric Approach'
];

const testimonials = [
  {
    text: "Golden Key Ventures delivered beyond expectations. Professional and reliable team.",
    author: "Rahul M.",
    role: "Homeowner"
  },
  {
    text: "From blueprints to handover, their transparent pricing and impeccable timing stood out.",
    author: "Vikram S.",
    role: "Business Owner"
  },
  {
    text: "The interior finishings are exceptional. Highly recommend for luxury construction.",
    author: "Aditi P.",
    role: "Property Investor"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose section-padding">
      <div className="container">
        
        {/* Why Choose Us */}
        <div className="why-header fade-in">
          <h2 className="section-title">Why Golden Key Ventures?</h2>
          <p className="why-subtitle">We build with purpose, integrity, and absolute dedication.</p>
        </div>

        <div className="why-grid slide-up delay-100">
          {points.map((point, i) => (
            <div className="why-card" key={i}>
              <div className="check-icon">✓</div>
              <h3 className="why-title">{point}</h3>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-wrap slide-up delay-300">
          <div className="testimonials-header" id="testimonials">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="quote-icon">“</div>
                <p className="test-text">{t.text}</p>
                <div className="test-author">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
