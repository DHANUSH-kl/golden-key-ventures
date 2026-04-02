import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        
        <div className="contact-header fade-in">
          <span className="section-subtitle">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your next big project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info slide-up">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div className="info-text">
                  <span className="info-label">Address</span>
                  <p>Near Bannur Area, Mysore, Karnataka</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <p>info@goldenkeyventures.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper slide-up delay-200">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 90000 00000" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your project..." required></textarea>
              </div>

              <button className="btn btn-primary form-submit">Request a Callback</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
