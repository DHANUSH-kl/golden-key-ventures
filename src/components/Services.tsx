'use client';
import { useRef, useState, useEffect } from 'react';
import './Services.css';

// SVG Verified Badge Component
const VerifiedBadge = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="verified-badge"
    width="16" 
    height="16"
    style={{ flexShrink: 0 }}
  >
    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const services = [
  { 
    id: '1', 
    title: 'Material Supply', 
    desc: 'Premium quality materials sourced for durability and aesthetic excellence.',
    actionText: 'View Details',
    image: '/modern_construction_site_1775046369628.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1"/>
        <rect x="2" y="10" width="9" height="5" rx="1"/>
        <rect x="13" y="10" width="9" height="5" rx="1"/>
        <rect x="2" y="17" width="20" height="5" rx="1"/>
      </svg>
    )
  },
  { 
    id: '2', 
    title: 'Architecture Designing', 
    desc: 'Innovative architectural concepts that blend form, function, and style.',
    actionText: 'View Designs',
    image: '/architectural_blueprint_1775046419292.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 16-6-6M9 10 3 16M12 2v4M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        <path d="M7 14h10"/>
      </svg>
    )
  },
  { 
    id: '3', 
    title: 'Residential Construction', 
    desc: 'Custom home building tailored to your lifestyle and personal vision.',
    actionText: 'See Projects',
    image: '/residential_villa_1775046517512.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  { 
    id: '4', 
    title: 'Commercial Construction', 
    desc: 'State-of-the-art commercial spaces designed for business growth.',
    actionText: 'Explore Builds',
    image: '/commercial_building_1775046491084.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <line x1="9" y1="22" x2="9" y2="16"/>
        <line x1="15" y1="22" x2="15" y2="16"/>
        <line x1="9" y1="16" x2="15" y2="16"/>
        <path d="M8 6h2M8 10h2M14 6h2M14 10h2"/>
      </svg>
    )
  },
  { 
    id: '5', 
    title: 'Interior Works', 
    desc: 'Luxurious and functional interior finishing that transforms spaces.',
    actionText: 'See Interiors',
    image: '/luxury_interior_design_1775046387018.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8M6 10h12M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M8 21v-4h8v4"/>
      </svg>
    )
  },
  { 
    id: '6', 
    title: 'Pre Construction Planning', 
    desc: 'Detailed planning and feasibility studies for seamless execution.',
    actionText: 'View Plans',
    image: '/architectural_blueprint_1775046419292.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    )
  },
  { 
    id: '7', 
    title: 'Renovation Services', 
    desc: 'Expert remodeling to breathe new life into existing structures.',
    actionText: 'See Projects',
    image: '/residential_villa_1775046517512.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18.42 9.42-8 8a2.12 2.12 0 1 1-3-3l8-8M15 5l4 4M9 21h3M14 3l7 7M3 14l7 7"/>
      </svg>
    )
  },
  { 
    id: '8', 
    title: 'Layout Development', 
    desc: 'Strategic space planning and landscape integration.',
    actionText: 'View Details',
    image: '/modern_construction_site_1775046369628.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polygon points="2 17 12 22 22 17"/>
        <polygon points="2 12 12 17 22 12"/>
      </svg>
    )
  },
  { 
    id: '9', 
    title: 'Industrial Construction', 
    desc: 'Robust industrial facilities built for heavy-duty operations.',
    actionText: 'See Projects',
    image: '/commercial_building_1775046491084.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 21H2V3l7 4 7-4 6 4v14zM14 17h4v-4h-4v4zM7 17h4v-4H7v4z"/>
      </svg>
    )
  },
  { 
    id: '10', 
    title: 'Structural Design', 
    desc: 'Engineering safe, resilient, and enduring structural frameworks.',
    actionText: 'View Details',
    image: '/architectural_blueprint_1775046419292.png',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
      </svg>
    )
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      // Initialize progress
      handleScroll();
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
            Integrated Solutions
          </div>
          <h2 className="section-title light">Our Comprehensive Construction Services</h2>
          <p className="services-subtitle">
            Golden Key Ventures offers a full range of integrated construction services, ensuring every aspect of your project is handled with expertise and precision, from concept to completion.
          </p>
        </div>
      </div>

      <div className="services-slider-container slide-up delay-200">
        <div className="services-slider" ref={scrollRef}>
          {services.map((svc) => (
            <div className="service-card" key={svc.id}>
              {/* Background Zooming Image */}
              <div 
                className="service-card-bg"
                style={{ backgroundImage: `url(${svc.image})` }}
              ></div>
              <div className="service-card-overlay"></div>
              
              {/* Top Action Pill */}
              <div className="service-action-pill">
                {svc.actionText}
              </div>
              
              {/* Bottom Info Bubble (Beige Card) */}
              <div className="service-info-bubble">
                <div className="service-info-header">
                  <div className="service-icon-wrapper">
                    {svc.icon}
                  </div>
                  <div className="service-title-container">
                    <h3 className="service-title">{svc.title}</h3>
                    <VerifiedBadge />
                  </div>
                </div>
                <div className="service-desc-container">
                  <p className="service-desc">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="services-controls fade-in delay-300">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                left: `${scrollProgress * 0.75}%`,
                width: '25%' 
              }}
            ></div>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn prev-btn" onClick={scrollLeft} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="nav-btn next-btn" onClick={scrollRight} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
