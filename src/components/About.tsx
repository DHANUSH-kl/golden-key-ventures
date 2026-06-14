'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './About.css';

export default function About() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle window resizing to toggle sticky behavior on desktop viewports
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll progress of the runway container (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!runwayRef.current) return;
      const rect = runwayRef.current.getBoundingClientRect();
      const runwayHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress between 0 and 1
      // starts when the top of the runway is at the top of the viewport (rect.top <= 0)
      // ends when the runway is fully scrolled (rect.bottom <= windowHeight)
      const totalScrollable = runwayHeight - windowHeight;
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  // Transform values for desktop sticky scroll interaction
  // Image starts centered (translateX: 46% of column width) and scaled up (1.55)
  // Maps to translateX: 0 and scale: 1 at progress: 1
  const imageTranslateX = (1 - scrollProgress) * 46; // shift in % of left column width
  const imageScale = 1 + (1 - scrollProgress) * 0.55; // scale from 1.55 down to 1
  
  // Text starts invisible and translateY(40px), then reveals after progress > 0.35
  const textProgress = scrollProgress < 0.35 ? 0 : Math.min((scrollProgress - 0.35) / 0.5, 1);
  const textTranslateY = (1 - textProgress) * 40;
  const textOpacity = textProgress;

  if (!isDesktop) {
    // Standard static layout for mobile/tablet
    return (
      <section id="about" className="about-section-new">
        <div className="container about-container-new">
          <div className="about-col-left">
            <div className="about-img-wrapper">
              <Image 
                src="/aboutus.webp" 
                alt="Building Schematic Blueprint Render" 
                className="about-blueprint-img" 
                width={600}
                height={450}
              />
            </div>
          </div>
          <div className="about-col-right">
            <span className="about-badge-new">Who We Are</span>
            <h2 className="about-title-new">About Golden Key Ventures</h2>
            <p className="about-desc-new">
              Premier construction &amp; design — rooted in Mysuru, built on precision. Every project reflects our dedication to exceptional design, quality craftsmanship, and lasting value. From concept to completion, we deliver spaces that endure.
            </p>
            <div className="about-focus-box">
              <span className="focus-label">Key Focus:</span>
              <span className="focus-text">Quality craftsmanship — On-time delivery — Precision design</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Sticky scroll-pinned runway layout for desktop
  return (
    <div className="about-runway" ref={runwayRef}>
      <section id="about" className="about-section-sticky">
        <div className="container about-container-new">
          
          {/* Left Column: Image (scrolls from center to left and scales down) */}
          <div 
            className="about-col-left"
            style={{
              transform: `translateX(${imageTranslateX}%) scale(${imageScale})`,
              transition: 'transform 0.1s cubic-bezier(0.1, 0.8, 0.2, 1)'
            }}
          >
            <div className="about-img-wrapper">
              <Image 
                src="/aboutus.webp" 
                alt="Building Schematic Blueprint Render" 
                className="about-blueprint-img" 
                width={600}
                height={450}
              />
            </div>
          </div>

          {/* Right Column: Text Content (fades/slides in once image shifts) */}
          <div 
            className="about-col-right"
            style={{
              transform: `translateY(${textTranslateY}px)`,
              opacity: textOpacity,
              transition: 'transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 0.15s ease-out'
            }}
          >
            <span className="about-badge-new">Who We Are</span>
            <h2 className="about-title-new">About Golden Key Ventures</h2>
            <p className="about-desc-new">
              Premier construction &amp; design — rooted in Mysuru, built on precision. Every project reflects our dedication to exceptional design, quality craftsmanship, and lasting value. From concept to completion, we deliver spaces that endure.
            </p>
            
            <div className="about-focus-box">
              <span className="focus-label">Key Focus:</span>
              <span className="focus-text">Quality craftsmanship — On-time delivery — Precision design</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
