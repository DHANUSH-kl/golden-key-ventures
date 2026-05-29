'use client';
import { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const stats = [
  {
    type: 'stat',
    target: 350,
    suffix: '+',
    title: 'Projects Completed',
    desc: 'Successfully delivered diverse residential, commercial, and industrial projects.',
  },
  {
    type: 'image',
    image: '/media__1775044940985.png',
    alt: 'Client Trust shaking hands',
  },
  {
    type: 'stat',
    target: 20,
    suffix: '+',
    title: 'Years of Experience',
    desc: 'Decades of expertise in the construction and engineering industry.',
  },
  {
    type: 'image',
    image: '/media__1775044970285.png',
    alt: 'Team Collaboration blueprints',
  },
  {
    type: 'stat',
    target: 100,
    suffix: '%',
    title: 'Safety Record',
    desc: 'Commitment to uncompromising safety standards across all construction sites.',
  },
  {
    type: 'image',
    image: '/media__1775044900579.png',
    alt: 'Engineering 3D conveyor model layout',
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const end = target;
          if (start === end) return;

          // Calculate a duration based on target value, but keep it around 1.5s max
          const totalDuration = 1500;
          const stepTime = Math.max(Math.floor(totalDuration / end), 12);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / (totalDuration / stepTime));
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
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
      <section className="achievements section-padding">
        <div className="container">
          
          <div className="achievements-header fade-in">
            <div className="achievements-badge">
              Proven Success
            </div>
            <h2 className="section-title light">Our Impact and Achievements</h2>
            <p className="achievements-subtitle">
              Golden Key Ventures consistently delivers outstanding results, reflected in our growing client satisfaction and successful project completions.
            </p>
          </div>

          <div className="achievements-grid slide-up delay-100">
            {stats.map((item, index) => {
              if (item.type === 'stat') {
                return (
                  <div className="achievement-card stat-card" key={index}>
                    <div className="achievement-stat-number">
                      <AnimatedCounter target={item.target!} suffix={item.suffix!} />
                    </div>
                    <div className="achievement-divider"></div>
                    <h3 className="achievement-stat-title">{item.title}</h3>
                    <p className="achievement-stat-desc">{item.desc}</p>
                  </div>
                );
              } else {
                return (
                  <div className="achievement-card image-card" key={index}>
                    <div 
                      className="achievement-card-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="achievement-image-overlay"></div>
                  </div>
                );
              }
            })}
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
