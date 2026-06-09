'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import MapSection from '../components/MapSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleFormSubmitted = () => {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 7000); // Show for 7 seconds
      return () => clearTimeout(timer);
    };

    window.addEventListener('form-submitted', handleFormSubmitted);
    return () => window.removeEventListener('form-submitted', handleFormSubmitted);
  }, []);

  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="main-app">
      {showNotification && (
        <div className="submission-badge-floating">
          <div className="submission-badge-content">
            <span className="badge-icon">✓</span>
            <span className="badge-text">Your form has been submitted successfully!</span>
            <button className="badge-close" onClick={() => setShowNotification(false)} aria-label="Close message">×</button>
          </div>
        </div>
      )}
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Projects />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
