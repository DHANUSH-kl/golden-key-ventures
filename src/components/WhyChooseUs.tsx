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
    role: "CEO, Urban Developments",
    image: "/client_portrait_john.png"
  },
  {
    title: "Impeccable Timing and Communication",
    text: "From blueprints to handover, their transparent pricing and impeccable timing stood out. They communicated with us every step of the way, making the entire building process stress-free.",
    author: "Vikram S.",
    role: "Business Owner",
    image: "/client_portrait_vikram.png"
  },
  {
    title: "Luxury Interior Transformations",
    text: "The interior finishings are exceptional. They turned our empty villa space into a luxurious, functional home that perfectly matches our lifestyle. Highly recommend their craftsmanship!",
    author: "Aditi P.",
    role: "Property Investor",
    image: "/client_portrait_aditi.png"
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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

          <div className="testimonial-slider-container slide-up delay-100">
            
            {/* Left Side: Active Testimonial Card */}
            <div className="testimonial-slide-card">
              <div className="testimonial-slide-content">
                <h3 className="testimonial-slide-title">
                  {testimonials[activeIndex].title}
                </h3>
                <p className="testimonial-slide-text">
                  “{testimonials[activeIndex].text}”
                </p>
              </div>
              
              <div className="testimonial-slide-footer">
                <div className="testimonial-slide-author">
                  <span className="author-name">{testimonials[activeIndex].author}</span>
                  <span className="author-role">{testimonials[activeIndex].role}</span>
                </div>
                
                <div className="testimonial-slide-nav">
                  <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Active Client Portrait */}
            <div className="testimonial-slide-image-wrapper">
              <div 
                className="testimonial-slide-image"
                key={activeIndex} /* Key forces browser re-mount for animation */
                style={{ backgroundImage: `url(${testimonials[activeIndex].image})` }}
              ></div>
              <div className="testimonial-slide-image-overlay"></div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
