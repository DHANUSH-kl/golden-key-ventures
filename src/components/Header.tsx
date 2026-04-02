'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Page blur overlay */}
      <div
        className={`header-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">

          {/* Navbar Pill */}
          <div className="navbar-pill">
            <Link href="/" className="logo">
              Golden Key <span className="logo-accent">Ventures</span>
            </Link>
            <button
              className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
            </button>
          </div>

          {/* Dropdown Menu Card */}
          <div className={`menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
            {/* Card Header */}
            <div className="dropdown-header">
              <span className="dropdown-title">Golden Key Ventures</span>
            </div>

            {/* Links */}
            <nav className="dropdown-nav">
              {menuLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="dropdown-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="link-arrow">↗</span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="dropdown-footer">
              <a href="#contact" className="schedule-btn" onClick={() => setIsMenuOpen(false)}>
                Get a Free Consultation
              </a>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
