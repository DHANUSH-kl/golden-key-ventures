import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer fade-in">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              Golden Key <span className="logo-accent">Ventures</span>
            </Link>
            <p className="footer-desc">
              Building visions, shaping skylines. Mysore&apos;s premier construction and design company delivering excellence from concept to completion.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📱</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Our Services</Link></li>
              <li><Link href="#projects">Portfolio</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="#services">Residential Construction</Link></li>
              <li><Link href="#services">Commercial building</Link></li>
              <li><Link href="#services">Interior Works</Link></li>
              <li><Link href="#services">Architecture Design</Link></li>
              <li><Link href="#services">Renovation</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Golden Key Ventures. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
