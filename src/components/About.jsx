"use client";

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const aboutRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleData, setParticleData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate particle data on client side only
  useEffect(() => {
    if (!isClient) return;

    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      duration: 3 + Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    
    setParticleData(particles);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    // Add entrance animations
    const aboutSection = aboutRef.current;
    if (aboutSection) {
      const elements = aboutSection.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in-up');
      });
    }
  }, [isClient]);

  const handleMouseMove = (e) => {
    if (imageWrapperRef.current) {
      const rect = imageWrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      setMousePosition({ x: x * 20, y: y * 20 }); // Multiply for more movement
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Don't render particles on server
  if (!isClient) {
    return (
      <section className="about-hero" id="about" ref={aboutRef}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="about-badge animate-on-load">
              <span className="badge-icon">🎓</span>
              B.Voc AI & ML Student || Frontend Developer & UI/UX Designer
            </div>
            
            <h1 className="about-hero-title animate-on-load">
              Hello, I'm <span className="gradient-text">Sudeep Das</span>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
            </h1>
            
            <p className="about-hero-description animate-on-load">
              I am a B.Voc student in Artificial Intelligence and Machine Learning, currently building a strong foundation in web development and UI/UX design. I focus on creating clean, responsive, and user-friendly web interfaces, and I enjoy turning ideas into practical digital experiences.
            </p>

            <div className="about-social-links animate-on-load">
              <a href="https://www.linkedin.com/in/sudeep-das-77a3b3379" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="https://github.com/sudeep02525" className="social-link github" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
              <a href="https://x.com/Sudeepd44704922" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
            </div>

            <div className="about-cta animate-on-load">
              <a href="/contact" className="btn btn-primary contact-btn enhanced-btn">
                <span className="btn-text">Contact Me</span>
                <span className="btn-icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
                <div className="btn-shine"></div>
              </a>
            </div>
          </div>

          <div className="about-hero-image animate-on-load">
            <div 
              className="about-image-wrapper"
              ref={imageWrapperRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="about-glow-ring"></div>
              <div className="about-profile-image">
                <img 
                  src="/photo.png" 
                  alt="Sudeep Das" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '50%'
                  }}
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully');
                  }}
                />
              </div>
              
              <div className="profile-bubbles">
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-hero" id="about" ref={aboutRef}>
      {/* Hero-style Attractive Background */}
      <div className="about-hero-bg"></div>

      {/* Animated Particles */}
      <div className="about-particles">
        {particleData.map((particle) => (
          <div 
            key={particle.id} 
            className="about-particle"
            style={{
              '--delay': `${particle.delay}s`,
              '--duration': `${particle.duration}s`,
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`
            }}
          ></div>
        ))}
      </div>

      <div className="about-hero-container">
        {/* Mobile-only badge at top */}
        <div className="about-badge mobile-badge">
          <span className="badge-icon">🎓</span>
          B.Voc AI & ML Student || Frontend Developer & UI/UX Designer
        </div>

        <div className="about-hero-content">
          <div className="about-badge animate-on-load desktop-badge">
            <span className="badge-icon">🎓</span>
            B.Voc AI & ML Student || Frontend Developer & UI/UX Designer
          </div>
          
          <h1 className="about-hero-title animate-on-load">
            Hello, I'm <span className="gradient-text">Sudeep Das</span>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
            </div>
          </h1>
          
          <p className="about-hero-description animate-on-load">
            I am a B.Voc student in Artificial Intelligence and Machine Learning, currently building a strong foundation in web development and UI/UX design. I focus on creating clean, responsive, and user-friendly web interfaces, and I enjoy turning ideas into practical digital experiences.
          </p>

          {/* Social Links */}
          <div className="about-social-links animate-on-load">
            <a href="https://www.linkedin.com/in/sudeep-das-77a3b3379" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="https://github.com/sudeep02525" className="social-link github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://x.com/Sudeepd44704922" className="social-link twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span className="social-tooltip">Twitter</span>
            </a>
          </div>

          {/* Enhanced Contact Button */}
          <div className="about-cta animate-on-load">
            <a href="/contact" className="btn btn-primary contact-btn enhanced-btn">
              <span className="btn-text">Contact Me</span>
              <span className="btn-icon">
                <i className="fas fa-arrow-right"></i>
              </span>
              <div className="btn-shine"></div>
            </a>
          </div>
        </div>

        {/* Profile Image Section - keeping original */}
        <div className="about-hero-image animate-on-load">
          <div 
            className="about-image-wrapper"
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="about-glow-ring"></div>
            <div className="about-profile-image">
              <img 
                src="/photo.png" 
                alt="Sudeep Das" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '50%'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                }}
              />
            </div>
            
            {/* Two Simple Bubbles - keeping original */}
            <div className="profile-bubbles">
              <div 
                className="bubble bubble-1"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: mousePosition.x === 0 && mousePosition.y === 0 ? 'transform 0.5s ease-out' : 'none'
                }}
              ></div>
              <div 
                className="bubble bubble-2"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                  transition: mousePosition.x === 0 && mousePosition.y === 0 ? 'transform 0.5s ease-out' : 'none'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}