"use client";

import Link from 'next/link';

export default function Hero() {
  const handleViewProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // You can replace this with actual CV download link
    window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="greeting">Hi, I'm</div>
          <h1>Sudeep Das</h1>
          <div className="subtitle">UI/UX Designer & Frontend Developer</div>
          <p>I design modern interfaces in Figma and build fully responsive websites using clean code. Passionate about creating beautiful, user-centric digital experiences.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleViewProjects}>View Projects</button>
            <button className="btn btn-secondary" onClick={handleDownloadCV}>Download CV</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="glow-ring"></div>
            <div className="profile-image">👨‍💻</div>
            <div className="floating-shapes">
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
