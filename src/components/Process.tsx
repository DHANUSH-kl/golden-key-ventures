'use client';

import { useState, useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  {
    id: '01',
    phase: 'PHASE 01',
    title: 'Consultation & Requirement Gathering',
    desc: 'We start by understanding your vision, budget, and timeline. Our process is collaborative, ensuring every detail is captured before any blueprints are drafted.',
    image: '/media__1775044940985.png',
    deliverables: ['Client Vision Briefing', 'On-Site Feasibility Assessment', 'Initial Budget Projections', 'Project Timeline Roadmap']
  },
  {
    id: '02',
    phase: 'PHASE 02',
    title: 'Planning & Design',
    desc: 'Our architecture team drafts detailed blueprints, structural plans, and realistic 3D models. We turn abstract ideas into fully realized spatial concepts.',
    image: '/architectural_blueprint_1775046419292.png',
    deliverables: ['Architectural 3D Visualizations', 'Detailed Structural Blueprints', 'Floor Plan Engineering', 'Regulatory Approvals']
  },
  {
    id: '03',
    phase: 'PHASE 03',
    title: 'Material Selection & Approval',
    desc: 'Collaborative selection of premium materials, structural fixtures, and finishes. We balance high-end aesthetics with structural longevity and budget accuracy.',
    image: '/luxury_interior_design_1775046387018.png',
    deliverables: ['Custom Finishes Palette', 'Premium Material Sourcing', 'Subcontractor Procurement', 'Guaranteed Maximum Price (GMP)']
  },
  {
    id: '04',
    phase: 'PHASE 04',
    title: 'Construction Execution',
    desc: 'Our skilled professionals, engineers, and project managers bring the approved design to life with strict adherence to safety, quality, and timelines.',
    image: '/modern_construction_site_1775046369628.png',
    deliverables: ['General Civil Works', 'On-Site Safety Oversight', 'Weekly Progress Reporting', 'Structural Quality Audits']
  },
  {
    id: '05',
    phase: 'PHASE 05',
    title: 'Quality Check & Delivery',
    desc: 'Rigorous engineering inspections and details checklist verification. We guarantee an immaculate handover, leaving you with a structure built to endure.',
    image: '/residential_villa_1775046517512.png',
    deliverables: ['Detailed Snag List Clearance', 'Independent Inspections', 'Client Walkthrough Audit', 'Final Handover & Keys Ceremony']
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      // If we are currently scrolling due to a click, bypass the observer auto-update
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    stepsRef.current.forEach((stepEl) => {
      if (stepEl) observer.observe(stepEl);
    });

    return () => {
      observer.disconnect();
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    isClickScrolling.current = true;

    // Clear any previous timeout
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    const targetElement = stepsRef.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Release scroll lock after animation completes (roughly 1100ms)
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1100);
  };

  return (
    <section className="process-redesign section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header">
          <span className="process-badge slide-up">Our Process</span>
          <h2 className="section-title light slide-up delay-100">How We Work</h2>
          <p className="process-subtitle slide-up delay-200">
            From the initial handshake to the final key handover, our structured workflow ensures quality, transparency, and timely delivery at every phase.
          </p>
        </div>

        {/* Split Container */}
        <div className="process-split-container">
          
          {/* Left Panel: Sticky Image Showcase */}
          <div className="process-visualizer-sticky">
            <div className="process-visualizer-frame">
              {/* Technical Drawing Background Texture */}
              <div className="visualizer-grid-bg"></div>
              
              {/* Image Stack */}
              <div className="visualizer-image-stack">
                {steps.map((step, idx) => (
                  <div 
                    key={step.id} 
                    className={`visualizer-img-wrapper ${idx === activeIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${step.image})` }}
                  >
                    <div className="visualizer-img-overlay"></div>
                  </div>
                ))}
              </div>

              {/* Floating Phase Badge */}
              <div className="visualizer-phase-tag">
                <span className="phase-indicator-dot"></span>
                <span className="phase-text">{steps[activeIndex].phase} // {steps[activeIndex].title.split(' & ')[0].toUpperCase()}</span>
              </div>

              {/* Tech Spec Box */}
              <div className="visualizer-tech-specs">
                <div className="spec-item">
                  <span className="spec-label">SYSTEM</span>
                  <span className="spec-value">GKV-FLOW v2.1</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">STATUS</span>
                  <span className="spec-value highlight">ACTIVE</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">PROGRESS</span>
                  <span className="spec-value">{((activeIndex + 1) / steps.length * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Step List */}
          <div className="process-steps-list">
            
            {/* Timeline Track Node */}
            <div className="process-steps-list-track"></div>

            {/* Step Cards */}
            {steps.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[idx] = el; }}
                data-index={idx}
                className={`process-step-card ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleStepClick(idx)}
              >
                <div className="step-card-header">
                  <span className="step-card-phase">{step.phase}</span>
                  <h3 className="step-card-title">{step.title}</h3>
                </div>

                <p className="step-card-desc">{step.desc}</p>

                {/* Mobile-only Image (Hidden on Desktop) */}
                <div className="step-card-mobile-image" style={{ backgroundImage: `url(${step.image})` }}>
                  <div className="visualizer-img-overlay"></div>
                </div>

                {/* Deliverables checklist */}
                <div className="step-card-deliverables">
                  <h4 className="deliverables-title">Key Deliverables:</h4>
                  <div className="deliverables-grid">
                    {step.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="deliverable-tag">
                        <svg className="deliverable-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
