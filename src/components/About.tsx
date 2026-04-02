import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Excellence in Every Project</h2>
            <p className="about-description">
              <span className="about-highlight">Golden Key Ventures</span> is a full-service construction and design company committed to delivering excellence in every project. 
            </p>
            <p className="about-description">
              With expertise in residential, commercial, and industrial construction, we combine innovation, precision, and quality materials to create structures that last.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper slide-up">
            <div className="about-image">
               <img src="/residential_villa_1775046517512.png" alt="Golden Key Ventures Construction" />
               <div className="about-accent-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
