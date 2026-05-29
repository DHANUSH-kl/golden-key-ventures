'use client';

import { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Trigger visibility when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Scroll-driven parallax for the headline
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Progress: 0 when section enters viewport bottom, 1 when section top reaches viewport top
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = ['About', 'Golden', 'Key', 'Ventures'];

  // Parallax values driven by scroll
  const headlineY = (1 - scrollProgress) * 60; // starts 60px down, scrolls to 0
  const headlineScale = 0.92 + scrollProgress * 0.08; // scales from 0.92 to 1

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Background image with parallax */}
      <div
        className="about-bg"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 30}px) scale(${1 + scrollProgress * 0.05})`,
        }}
      ></div>
      <div className="about-bg-overlay"></div>

      {/* Content */}
      <div className="about-content container">
        {/* Badge */}
        <div className={`about-badge ${isVisible ? 'about-badge--visible' : ''}`}>
          Our Commitment to Excellence
        </div>

        {/* Animated headline - each word reveals with stagger */}
        <h2
          className="about-headline"
          ref={headlineRef}
          style={{
            transform: `translateY(${headlineY}px) scale(${headlineScale})`,
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`about-word ${isVisible ? 'about-word--visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <p className={`about-subtitle ${isVisible ? 'about-subtitle--visible' : ''}`}>
          Premier construction &amp; design — rooted in Mysuru, built on precision. From concept to completion, we deliver spaces that endure.
        </p>

        {/* CTA */}
        <div className={`about-cta ${isVisible ? 'about-cta--visible' : ''}`}>
          <a href="#services" className="about-btn">
            Learn More
          </a>
          <a href="#services" className="about-btn-arrow" aria-label="Go to services">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
