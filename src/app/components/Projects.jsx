export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">🎨</div>
            <div className="project-content">
              <div className="project-title">E-Commerce Platform</div>
              <div className="project-description">A modern e-commerce design with Figma, featuring responsive layouts and interactive prototypes for seamless shopping experience.</div>
              <div className="project-links">
                <a href="https://www.figma.com/design/your-project" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma"></i> Figma
                </a>
                <a href="https://your-project-demo.com" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">🚀</div>
            <div className="project-content">
              <div className="project-title">SaaS Dashboard</div>
              <div className="project-description">A comprehensive SaaS dashboard designed in Figma and developed with React, featuring data visualization and user analytics.</div>
              <div className="project-links">
                <a href="https://www.figma.com/design/your-saas-project" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma"></i> Figma
                </a>
                <a href="https://github.com/sudeep-das/saas-dashboard" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">✨</div>
            <div className="project-content">
              <div className="project-title">Portfolio Website</div>
              <div className="project-description">A personal portfolio website showcasing design and development skills with smooth animations and modern UI patterns.</div>
              <div className="project-links">
                <a href="https://www.figma.com/design/your-portfolio-project" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma"></i> Figma
                </a>
                <a href="https://your-portfolio.com" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
