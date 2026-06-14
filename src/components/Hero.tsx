'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const exteriorImages = [
  '/exterior/Enscape_2023-12-02-12-32-02.webp',
  '/exterior/Enscape_2023-12-02-12-33-07.webp',
  '/exterior/Enscape_2023-12-02-12-37-39.webp'
];

const interiorImages = [
  '/interior/1st-F-Interior/1st F Interior_page-0001.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0002.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0003.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0007.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0010.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0011.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0013.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0014.webp',
  '/interior/1st-F-Interior/1st F Interior_page-0016.webp',
  '/interior/G-F-Interior/G F Interior_page-0001.webp',
  '/interior/G-F-Interior/G F Interior_page-0002.webp',
  '/interior/G-F-Interior/G F Interior_page-0004.webp',
  '/interior/G-F-Interior/G F Interior_page-0005.webp',
  '/interior/G-F-Interior/G F Interior_page-0007.webp',
  '/interior/G-F-Interior/G F Interior_page-0008.webp',
  '/interior/G-F-Interior/G F Interior_page-0009.webp',
  '/interior/G-F-Interior/G F Interior_page-0010.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0002.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0004.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0005.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0006.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0007.webp',
  '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0008.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0001.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0003.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0006.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0008.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0010.webp',
  '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0012.webp'
];

export default function Hero() {
  const [images, setImages] = useState<string[]>([
    '/exterior/Enscape_2023-12-02-12-32-02.webp',
    '/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-0004.webp',
    '/exterior/Enscape_2023-12-02-12-37-39.webp',
    '/interior/G-F-Interior/G F Interior_page-0008.webp',
    '/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-0006.webp'
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
            <Image 
              src={images[0]} 
              alt="Residential Villa Construction" 
              fill
              sizes="(max-width: 640px) 130px, 280px"
              style={{ objectFit: 'cover' }}
              preload={true}
            />
          </div>
          <div className="gallery-card card-2">
            <Image 
              src={images[1]} 
              alt="Luxury Interior" 
              fill
              sizes="(max-width: 640px) 130px, 280px"
              style={{ objectFit: 'cover' }}
              preload={true}
            />
          </div>
          <div className="gallery-card card-3 center-card">
            <Image 
              src={images[2]} 
              alt="Commercial Building" 
              fill
              sizes="(max-width: 640px) 150px, 320px"
              style={{ objectFit: 'cover' }}
              preload={true}
            />
          </div>
          <div className="gallery-card card-4">
            <Image 
              src={images[3]} 
              alt="Modern Construction Site" 
              fill
              sizes="(max-width: 640px) 130px, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-card card-5">
            <Image 
              src={images[4]} 
              alt="Architectural Design" 
              fill
              sizes="(max-width: 640px) 130px, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
