'use client';
import { useRef, useEffect } from 'react';
import './Services.css';

const services = [
  { id: '1', title: 'Material Supply', desc: 'Premium quality materials sourced for durability and aesthetic excellence.' },
  { id: '2', title: 'Architecture Designing', desc: 'Innovative architectural concepts that blend form, function, and style.' },
  { id: '3', title: 'Residential Construction', desc: 'Custom home building tailored to your lifestyle and personal vision.' },
  { id: '4', title: 'Commercial Construction', desc: 'State-of-the-art commercial spaces designed for business growth.' },
  { id: '5', title: 'Interior Works', desc: 'Luxurious and functional interior finishing that transforms spaces.' },
  { id: '6', title: 'Pre Construction Planning', desc: 'Detailed planning and feasibility studies for seamless execution.' },
  { id: '7', title: 'Renovation Services', desc: 'Expert remodeling to breathe new life into existing structures.' },
  { id: '8', title: 'Layout Development', desc: 'Strategic space planning and landscape integration.' },
  { id: '9', title: 'Industrial Construction', desc: 'Robust industrial facilities built for heavy-duty operations.' },
  { id: '10', title: 'Structural Design', desc: 'Engineering safe, resilient, and enduring structural frameworks.' },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header fade-in">
          <div className="services-badge">
            <span className="shield-icon">⛨</span> Professional Services
          </div>
          <h2 className="section-title light">Our Services & Expertise</h2>
          <p className="services-subtitle">
            Comprehensive construction and design solutions tailored to meet your unique needs and aspirations.
          </p>
        </div>
      </div>

      <div className="services-slider-container slide-up delay-200">
        <div className="services-slider" ref={scrollRef}>
          {services.map((svc) => (
            <div className="service-card" key={svc.id}>
              {/* Using a background image similar to reference design */}
              <div 
                className="service-card-bg"
                style={{ 
                  backgroundImage: `url(${parseInt(svc.id) % 2 === 0 ? '/commercial_building_1775046491084.png' : '/modern_construction_site_1775046369628.png'})` 
                }}
              ></div>
              <div className="service-card-overlay"></div>
              
              <div className="service-number">{svc.id}</div>
              
              <div className="service-content">
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="services-controls fade-in delay-300">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn prev-btn" onClick={scrollLeft} aria-label="Previous">❮</button>
            <button className="nav-btn next-btn" onClick={scrollRight} aria-label="Next">❯</button>
          </div>
        </div>
      </div>
    </section>
  );
}
