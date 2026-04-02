import './Projects.css';

const projects = [
  {
    id: 1,
    image: '/residential_villa_1775046517512.png',
    title: 'Luxury Villa, Vijayanagar',
    category: 'Residential',
    details: '4 BHK Premium Villa | Mysore',
    tag: 'Residential'
  },
  {
    id: 2,
    image: '/luxury_interior_design_1775046387018.png',
    title: 'Modern Interior, Kuvempunagar',
    category: 'Interior',
    details: 'Full Interior Renovation | Mysore',
    tag: 'Interior'
  },
  {
    id: 3,
    image: '/commercial_building_1775046491084.png',
    title: 'Commercial Complex, Bannur Road',
    category: 'Commercial',
    details: 'G+4 Commercial Building | Mysore',
    tag: 'Commercial'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="projects-header fade-in">
          <div className="projects-badge">
            <span className="home-icon">⌂</span> Exclusive Portfolio
          </div>
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="projects-subtitle">
            Handpicked construction projects showcasing the finest structural achievements in Mysore&apos;s most prestigious locations.
          </p>
          <button className="btn btn-dark view-all-btn">See all projects</button>
        </div>

        <div className="projects-grid slide-up delay-200">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="view-details-text">View Details</span>
                </div>
                <div className="project-arrow-icon">↗</div>
              </div>
              <div className="project-info">
                <div className="project-info-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-price">{project.tag}</span>
                </div>
                <p className="project-details">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
