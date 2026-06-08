'use client';

import { useState } from 'react';
import './Projects.css';

// Helper to generate sequential interior images
const generateInteriorImages = () => {
  const list = [];
  
  // 1st-F-Interior (16 images)
  for (let i = 1; i <= 16; i++) {
    const num = String(i).padStart(4, '0');
    list.push({
      id: `int-1st-${i}`,
      image: `/interior/1st-F-Interior/1st F Interior_page-${num}.jpg`,
      category: 'Interior'
    });
  }
  
  // G-F-Interior (14 images)
  for (let i = 1; i <= 14; i++) {
    const num = String(i).padStart(4, '0');
    list.push({
      id: `int-gf-${i}`,
      image: `/interior/G-F-Interior/G F Interior_page-${num}.jpg`,
      category: 'Interior'
    });
  }
  
  // KTICHEN-1_merged (14 images)
  for (let i = 1; i <= 14; i++) {
    const num = String(i).padStart(4, '0');
    list.push({
      id: `int-kt-${i}`,
      image: `/interior/KTICHEN-1_merged/KTICHEN 1_merged_page-${num}.jpg`,
      category: 'Interior'
    });
  }
  
  // SUDIKSHA-INTERIOR (8 images)
  for (let i = 1; i <= 8; i++) {
    const num = String(i).padStart(4, '0');
    list.push({
      id: `int-su-${i}`,
      image: `/interior/SUDIKSHA-INTERIOR/SUDIKSHA INTERIOR_page-${num}.jpg`,
      category: 'Interior'
    });
  }
  
  return list;
};

const projects = [
  // Commercial
  {
    id: 'comm-1',
    image: '/commercial_building_1775046491084.png',
    category: 'Commercial',
  },
  {
    id: 'comm-2',
    image: '/modern_construction_site_1775046369628.png',
    category: 'Commercial',
  },
  // Exterior (new ones)
  {
    id: 'ext-new-1',
    image: '/exterior/Enscape_2023-12-02-12-32-02.png',
    category: 'Exterior',
  },
  {
    id: 'ext-new-2',
    image: '/exterior/Enscape_2023-12-02-12-33-07.png',
    category: 'Exterior',
  },
  {
    id: 'ext-new-3',
    image: '/exterior/Enscape_2023-12-02-12-37-39.png',
    category: 'Exterior',
  },
  // Interior
  ...generateInteriorImages()
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Interior' | 'Exterior' | 'Commercial'>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (filter: 'All' | 'Interior' | 'Exterior' | 'Commercial') => {
    setActiveFilter(filter);
    setIsExpanded(false);
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = isExpanded 
    ? filteredProjects 
    : filteredProjects.slice(0, 12);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="projects-header">
          <div className="projects-badge slide-up">
            <span className="home-icon">⌂</span> Gallery
          </div>
          <h2 className="section-title slide-up delay-100">Our Recent Projects</h2>
          
          {/* Breadcrumb style navigation filter */}
          <div className="gallery-breadcrumbs slide-up delay-200">
            <span className="breadcrumb-root">Portfolio</span>
            <span className="breadcrumb-separator">/</span>
            <button 
              className={`breadcrumb-item ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterChange('All')}
            >
              All Projects
            </button>
            <span className="breadcrumb-separator">/</span>
            <button 
              className={`breadcrumb-item ${activeFilter === 'Interior' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Interior')}
            >
              Interior
            </button>
            <span className="breadcrumb-separator">/</span>
            <button 
              className={`breadcrumb-item ${activeFilter === 'Exterior' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Exterior')}
            >
              Exterior
            </button>
            <span className="breadcrumb-separator">/</span>
            <button 
              className={`breadcrumb-item ${activeFilter === 'Commercial' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Commercial')}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="gallery-masonry slide-up delay-300">
          {displayedProjects.map((project) => (
            <div 
              className="gallery-item" 
              key={project.id}
              onClick={() => setLightboxImage(project.image)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`Project ${project.id}`} 
                  className="gallery-image" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-category">{project.category}</span>
                    <span className="gallery-zoom-icon">🔍</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 12 && (
          <div className="show-more-container">
            <button className="btn-show-more" onClick={() => setIsExpanded(prev => !prev)}>
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Enlarged Project View" className="lightbox-image" />
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

