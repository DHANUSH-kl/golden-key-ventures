import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-stripes"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <div className="hero-badge">⭐⭐⭐⭐⭐ Premium Construction</div>
          <h1 className="hero-title">
            Building Your Vision <br />
            Into Reality
          </h1>
          <p className="hero-description">
            From concept to completion, Golden Key Ventures delivers high-quality construction, design, and renovation solutions you can trust.
          </p>
          
          <div className="hero-actions">
            <Link href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View Our Projects
            </Link>
          </div>
        </div>

        <div className="hero-image-gallery slide-up delay-200">
          <div className="gallery-card card-1">
            <img src="/residential_villa_1775046517512.png" alt="Residential Villa Construction" />
          </div>
          <div className="gallery-card card-2">
            <img src="/luxury_interior_design_1775046387018.png" alt="Luxury Interior" />
          </div>
          <div className="gallery-card card-3 center-card">
            <img src="/commercial_building_1775046491084.png" alt="Commercial Building" />
          </div>
          <div className="gallery-card card-4">
            <img src="/modern_construction_site_1775046369628.png" alt="Modern Construction Site" />
          </div>
          <div className="gallery-card card-5">
            <img src="/architectural_blueprint_1775046419292.png" alt="Architectural Blueprint" />
          </div>
        </div>
      </div>
    </section>
  );
}
