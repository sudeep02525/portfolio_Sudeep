"use client";

import { useEffect, useRef } from 'react';

export default function LearningJourney() {
  const journeyRef = useRef(null);

  useEffect(() => {
    // Add entrance animations
    const journeySection = journeyRef.current;
    if (journeySection) {
      const elements = journeySection.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in-up');
      });
    }
  }, []);

  return (
    <section className="learning-journey-section" id="learning-journey" ref={journeyRef}>
      <div className="journey-container">
        <div className="journey-header animate-on-load">
          <h2 className="journey-title">My Learning Journey</h2>
          <div className="journey-subtitle">From foundations to expertise</div>
        </div>
        
        <div className="journey-grid">
          {/* Journey Card 1 - B.Voc */}
          <div className="journey-card card-education animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">🎓</div>
              <div className="card-year">2025</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">B.Voc in AI & ML</h3>
              <div className="card-institution">Nexcore Institute of Technology</div>
              <p className="card-description">
                Building strong foundations in artificial intelligence and machine learning, 
                exploring algorithms, data structures, and innovative AI solutions.
              </p>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{'--progress': '48%'}}></div>
              </div>
              <span className="progress-text">48% Complete</span>
            </div>
          </div>

          {/* Journey Card 2 - Frontend */}
          <div className="journey-card card-frontend animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">💻</div>
              <div className="card-year">2026</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Frontend Developer</h3>
              <div className="card-institution">Nexcore Institute of Technology</div>
              <p className="card-description">
                Mastering modern web technologies like React, Next.js, and creating 
                beautiful, responsive user interfaces with clean code.
              </p>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{'--progress': '72%'}}></div>
              </div>
              <span className="progress-text">72% Complete</span>
            </div>
          </div>

          {/* Journey Card 3 - Full Stack */}
          <div className="journey-card card-fullstack animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">🚀</div>
              <div className="card-year">2026</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Full Stack Developer</h3>
              <div className="card-institution">Nexcore Institute of Technology</div>
              <p className="card-description">
                Expanding to backend technologies, databases, and server-side development 
                for complete end-to-end application architecture.
              </p>
            </div>
            <div className="card-status">
              <div className="status-indicator upcoming"></div>
              <span className="status-text">Upcoming Goal</span>
            </div>
          </div>

          {/* Journey Card 4 - AI/ML */}
          <div className="journey-card card-aiml animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">🤖</div>
              <div className="card-year">2028</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">AI/ML Engineer</h3>
              <div className="card-institution">Nexcore Institute of Technology</div>
              <p className="card-description">
                Specializing in intelligent systems, machine learning models, 
                and innovative AI-powered solutions for real-world challenges.
              </p>
            </div>
            <div className="card-future">
              <div className="future-indicator">
                <div className="pulse-dot"></div>
                <span>Future Vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Path */}
        <div className="journey-path">
          <svg viewBox="0 0 800 200" className="path-svg">
            <path d="M50,100 Q200,50 350,100 T650,100" stroke="url(#gradient)" strokeWidth="3" fill="none" className="animated-path"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}