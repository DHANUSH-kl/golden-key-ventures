'use client';
import { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const stats = [
  {
    target: 2020,
    suffix: '',
    title: 'Year of establishment',
    desc: 'Six years of commercial excellence',
  },
  {
    target: 25,
    suffix: '+',
    title: 'Projects delivered',
    desc: 'Trusted by leading organizations',
  },
  {
    target: 20,
    suffix: '+',
    title: 'Active sites',
    desc: 'Transforming spaces daily',
  },
  {
    target: 19,
    suffix: 'L+',
    title: 'Sq.Ft. Constructed',
    desc: 'Across commercial sectors',
  }
];



const testimonials = [
  {
    title: "Exceptional Quality and Service",
    text: "Golden Key Ventures exceeded our expectations on our commercial project. Their attention to detail and commitment to deadlines were outstanding. We highly recommend them for any large-scale construction needs.",
    author: "John D.",
    role: "CEO, Urban Developments"
  },
  {
    title: "Impeccable Timing and Communication",
    text: "From blueprints to handover, their transparent pricing and impeccable timing stood out. They communicated with us every step of the way, making the entire building process stress-free.",
    author: "Vikram S.",
    role: "Business Owner"
  },
  {
    title: "Luxury Interior Transformations",
    text: "The interior finishings are exceptional. They turned our empty villa space into a luxurious, functional home that perfectly matches our lifestyle. Highly recommend their craftsmanship!",
    author: "Aditi P.",
    role: "Property Investor"
  }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const duration = 2000; // 2 seconds for a premium, ultra-smooth count-up

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function: Cubic Ease Out (starts fast, slows down smoothly)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentCount = Math.floor(easeProgress * target);
            setCount(currentCount);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}


export default function WhyChooseUs() {
  return (
    <>
      {/* Achievements Section */}
      <section className="achievements-new section-padding">
        <div className="container">
          
          <div className="achievements-header-new fade-in">
            <h2 className="achievements-title-new">
              Every project reflects our dedication to exceptional design, quality craftsmanship, and lasting value. The results speak through the spaces we create and the trust we build.
            </h2>
          </div>

          <div className="achievements-grid-new slide-up delay-100">
            {stats.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div className={`achievement-col-new ${isEven ? 'col-even' : 'col-odd'}`} key={index}>
                  {/* Vertical blueprint divider line on the right of the column */}
                  <div className="blueprint-line-v"></div>
                  
                  <div className="achievement-content-box">
                    <div className="achievement-stat-number">
                      <AnimatedCounter target={item.target} suffix={item.suffix} />
                    </div>
                    <h3 className="achievement-stat-title">{item.title}</h3>
                    <p className="achievement-stat-desc">{item.desc}</p>
                  </div>

                  {/* Even columns have bottom horizontal line and crosshairs */}
                  {isEven && (
                    <>
                      <div className="blueprint-line-h-bottom"></div>
                      <div className="crosshair-marker crosshair-left-bottom"></div>
                      <div className="crosshair-marker crosshair-right-bottom"></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="achievements-cta-new slide-up delay-200">
            <a href="#contact" className="schedule-consultation-btn">
              <span>Schedule Consultation</span>
              <span className="arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="testimonials-header fade-in">
            <div className="testimonials-badge">
              Trusted By Many
            </div>
            <h2 className="section-title dark">What Our Clients Say</h2>
            <p className="testimonials-subtitle">
              Hear directly from clients who have experienced the Golden Key Ventures difference.
            </p>
          </div>
        </div>

        {/* Infinite edge-to-edge marquee container */}
        <div className="testimonials-marquee-container slide-up delay-200">
          <div className="testimonials-marquee-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div className="testimonial-card-new" key={index}>
                <div className="testimonial-card-top">
                  <div className="testimonial-stars-new">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="star-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <div className="testimonial-quote-wrapper">
                    <svg className="quote-icon-new" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="testimonial-title-new">{t.title}</h3>
                <p className="testimonial-text-new">“{t.text}”</p>
                
                <div className="testimonial-footer-new">
                  <div className="testimonial-line-new"></div>
                  <div className="author-name-new">{t.author}</div>
                  <div className="author-role-new">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
