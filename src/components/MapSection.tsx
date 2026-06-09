'use client';
import './MapSection.css';

export default function MapSection() {
  const addressQuery = encodeURIComponent("GOLDEN KEY VENTURES 42#, H.S.COMPLEX, 80 FEET ROAD, 1ST FLOOR, MANASI NAGAR, NEAR BANNUR RING ROAD, MYSORE-570019");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section id="location" className="map-section section-padding">
      <div className="container">
        <div className="map-grid">
          {/* Location Details Card */}
          <div className="map-info-card fade-in">
            <div className="map-badge">📍 Location</div>
            <h2 className="map-title">Visit Our Headquarters</h2>
            <p className="map-description">
              Drop by our office to discuss your construction, renovation, or architectural design projects. Our team is ready to welcome you.
            </p>
            
            <div className="map-address-box">
              <div className="office-name">Golden Key Ventures</div>
              <p className="office-address">
                42#, H.S. Complex, 80 Feet Road,<br />
                1st Floor, Manasi Nagar,<br />
                Near Bannur Ring Road, Mysore - 570019
              </p>
            </div>

            <div className="map-cta-container">
              <a 
                href={externalMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-btn"
              >
                <span>Open in Google Maps</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="map-frame-wrapper slide-up delay-100">
            <div className="map-frame-border">
              <iframe 
                title="Golden Key Ventures Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
