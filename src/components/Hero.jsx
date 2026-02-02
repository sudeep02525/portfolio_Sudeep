"use client";

import AnimatedBackground from './AnimatedBackground';
import { useEffect } from 'react';

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadCV = () => {
    // Create CV download link
    const link = document.createElement('a');
    link.href = '/Sudeep_Das_CV.pdf';
    link.download = 'Sudeep_Das_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Smooth text animation like About section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const elements = heroContent.querySelectorAll('.hero-text-element');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in-up');
      });
    }

    // Typing animation for roles - start after text animations
    const roles = ['Frontend Developer', 'Web Developer', 'UI/UX Designer'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const animatedRoleElement = document.querySelector('.animated-role');

    const typeRole = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        // Deleting characters
        animatedRoleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(typeRole, 500); // Pause before typing next role
          return;
        }
        setTimeout(typeRole, 50); // Faster deletion
      } else {
        // Typing characters
        animatedRoleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
            typeRole();
          }, 2000); // Pause before deleting
          return;
        }
        setTimeout(typeRole, 100); // Typing speed
      }
    };

    // Start typing animation after text slides in (0.8s + 0.6s delay for last element)
    setTimeout(typeRole, 1400);
  }, []);

  return (
    <section className="hero" id="home">
      <AnimatedBackground />
      
      {/* Simple Clean Background */}
      <div className="hero-clean-bg"></div>
      
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="greeting hero-text-element">Hi, I'm</div>
          <h2 className="hero-text-element">Sudeep Das <span className="and-im-text">And I'm a <span className="animated-role"></span></span></h2>
          <p className="hero-text-element">I am pursuing B.Voc in Artificial Intelligence & Machine Learning, while building a strong foundation in web development and UI/UX design. I create clean, responsive interfaces and enjoy turning ideas into practical digital experiences.</p>
          <div className="hero-buttons hero-text-element">
            <button className="btn btn-primary" onClick={handleViewProjects}>View Projects</button>
            <button className="btn btn-secondary" onClick={handleDownloadCV}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}