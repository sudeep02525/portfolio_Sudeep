"use client";

export default function Projects() {
  const handleGitHubClick = () => {
    window.open('https://github.com/sudeep02525', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/image.png" alt="Swiggy Clone Preview" />
            </div>
            <div className="project-content">
              <div className="project-title">Swiggy Clone</div>
              <div className="project-description">A modern food order app with responsive design, featuring restaurant listings, menu browsing, and seamless ordering experience built with modern web technologies.</div>
              <div className="project-tech-stack">
                <span className="tech-tag">Figma</span>
              </div>
              <div className="project-links">
                <a href="https://www.figma.com/design/BzpWftEMSrGCd1UnI9tu6M/Legend-Works?node-id=249-591&t=zEFLieLmR9swCj47-1" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma"></i> Figma
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Colorgenerator.png" alt="Color Generator Preview" />
            </div>
            <div className="project-content">
              <div className="project-title">Color Generator</div>
              <div className="project-description">A dynamic color generator tool that creates random RGB colors with a clean interface. Features instant color generation and RGB value display for designers and developers.</div>
              <div className="project-tech-stack">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/sudeep02525/ColorGenerater.git" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/project3.png" alt="Portfolio Website Preview" />
            </div>
            <div className="project-content">
              <div className="project-title">Portfolio Website</div>
              <div className="project-description">A personal portfolio website showcasing design and development skills with smooth animations and modern UI patterns. Built with Next.js and featuring interactive elements.</div>
              <div className="project-tech-stack">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/sudeep02525/portfolio--sudeep00.git" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Explore More GitHub Section */}
        <div className="explore-more-container">
          <div className="explore-more-card" onClick={handleGitHubClick}>
            <div className="explore-more-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="explore-more-content">
              <span className="explore-more-text">
                Explore more projects on <span className="github-link">GitHub</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}