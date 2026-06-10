'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './Hero.css';

const exteriorImages = [
  '/exterior/Enscape_2023-12-02-12-32-02.png',
  '/exterior/Enscape_2023-12-02-12-33-07.png',
  '/exterior/Enscape_2023-12-02-12-37-39.png'
];

const interiorImages = [
  '/interior/1st-F-Interior/1st F Interior_page-0001.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0002.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0003.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0007.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0010.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0011.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0013.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0014.jpg',
  '/interior/1st-F-Interior/1st F Interior_page-0016.jpg',
  '/interior/G-F-Interior/G F Interior_page-0001.jpg',
  '/interior/G-F-Interior/G F Interior_page-0002.jpg',
  '/interior/G-F-Interior/G F Interior_page-0004.jpg',
  '/interior/G-F-Interior/G F Interior_page-0005.jpg',
  '/interior/G-F-Interior/G F Interior_page-0007.jpg',
  '/interior/G-F-Interior/G F Interior_page-0008.jpg',
  '/interior/G-F-Interior/G F Interior_page-0009.jpg',
  '/interior/G-F-Interior/G F Interior_page-0010.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0002.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0004.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0005.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0006.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0007.jpg',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0008.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0001.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0003.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0006.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0008.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0010.jpg',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0012.jpg'
];

export default function Hero() {
  const [images, setImages] = useState<string[]>([
    '/exterior/Enscape_2023-12-02-12-32-02.png',
    '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0004.jpg',
    '/exterior/Enscape_2023-12-02-12-37-39.png',
    '/interior/G-F-Interior/G F Interior_page-0008.jpg',
    '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0006.jpg'
  ]);

  useEffect(() => {
    // Shuffle and pick distinct random images
    const randomExteriors = [...exteriorImages].sort(() => 0.5 - Math.random()).slice(0, 2);
    const randomInteriors = [...interiorImages].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    if (randomExteriors.length >= 2 && randomInteriors.length >= 3) {
      setImages([
        randomExteriors[0],
        randomInteriors[0],
        randomExteriors[1],
        randomInteriors[1],
        randomInteriors[2]
      ]);
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-stripes"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <div className="hero-badge">⭐⭐⭐⭐⭐ Premium Construction</div>
          <h1 className="hero-title">
            Building Your Vision <br />
            Into Reality
          </h1>
          <p className="hero-description">
            From concept to completion, Golden Key Ventures delivers high-quality construction, design, and renovation solutions you can trust.
          </p>
          
          <div className="hero-actions">
            <Link href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View Our Projects
            </Link>
          </div>
        </div>

        <div className="hero-image-gallery slide-up delay-200">
          <div className="gallery-card card-1">
            <img src={images[0]} alt="Residential Villa Construction" />
          </div>
          <div className="gallery-card card-2">
            <img src={images[1]} alt="Luxury Interior" />
          </div>
          <div className="gallery-card card-3 center-card">
            <img src={images[2]} alt="Commercial Building" />
          </div>
          <div className="gallery-card card-4">
            <img src={images[3]} alt="Modern Construction Site" />
          </div>
          <div className="gallery-card card-5">
            <img src={images[4]} alt="Architectural Design" />
          </div>
        </div>
      </div>
    </section>
  );
}
