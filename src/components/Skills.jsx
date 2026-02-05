"use client";

import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [particleData, setParticleData] = useState([]);
  const [starData, setStarData] = useState([]);
  const [dustData, setDustData] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate random data on client side only
  useEffect(() => {
    if (!isClient) return;

    // Background particles data
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      duration: 8 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      top: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2
    }));
    
    // Stars data
    const stars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      size: 1 + Math.random() * 2
    }));
    
    // Cosmic dust data
    const dust = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 0.5 + Math.random() * 1.5
    }));
    
    setParticleData(particles);
    setStarData(stars);
    setDustData(dust);

    // Initialize visitor counter and start periodic updates
    initializeVisitorCounter();
    const cleanup = startPeriodicUpdate();
    
    return cleanup;
  }, [isClient]);

  const initializeVisitorCounter = async () => {
    // Check if running on localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' || 
                       window.location.hostname.includes('localhost');
    
    if (isLocalhost) {
      // On localhost, always show 0
      setVisitorCount(0);
      return;
    }
    
    try {
      // Check if this device/browser has already been counted
      const alreadyCounted = localStorage.getItem('visitor_counted') === 'true';
      
      if (alreadyCounted) {
        // Already counted - just fetch current count without incrementing
        const response = await fetch('/api/visitors/count');
        const data = await response.json();
        
        if (data.success) {
          setVisitorCount(data.totalVisitors);
        }
      } else {
        // First time visitor - call API to increment count
        const response = await fetch('/api/visitors');
        const data = await response.json();
        
        if (data.success) {
          setVisitorCount(data.totalVisitors);
          // Mark this device as counted
          localStorage.setItem('visitor_counted', 'true');
        }
      }
      
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  // Periodic update from server (every 30 seconds) - fetch only, no increment
  const startPeriodicUpdate = () => {
    const interval = setInterval(async () => {
      try {
        // Just fetch current count, don't increment
        const response = await fetch('/api/visitors/count');
        const data = await response.json();
        
        if (data.success) {
          setVisitorCount(data.totalVisitors);
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !isClient) return;

    const skillCards = document.querySelectorAll('.skill-roadmap-card');
    
    // Staggered entrance animation
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 150);
    });

    // Progress bar animation
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.setProperty('--progress-width', bar.dataset.progress);
      }, index * 150 + 500);
    });

    // Floating animation
    skillCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('floating');
    });

  }, [isVisible, isClient]);

  const skills = [
    { 
      name: 'HTML5', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
        </svg>
      ), 
      level: '95%', 
      color: '#E34F26',
      description: 'Semantic markup & accessibility'
    },
    { 
      name: 'CSS3', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
        </svg>
      ), 
      level: '92%', 
      color: '#1572B6',
      description: 'Modern layouts & animations'
    },
    { 
      name: 'JavaScript', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#F7DF1E"/>
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#000">JS</text>
        </svg>
      ), 
      level: '67%', 
      color: '#F7DF1E',
      description: 'ES6+ & DOM manipulation'
    },
    { 
      name: 'Figma', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" fill="#F24E1E"/>
          <path d="M8.148 8.981c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981H8.148z" fill="#FF7262"/>
          <path d="M8.148 17.962c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98H8.148z" fill="#A259FF"/>
          <path d="M8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539z" fill="#0ACF83"/>
          <circle cx="15.852" cy="13.472" r="4.49" fill="#1ABCFE"/>
        </svg>
      ), 
      level: '95%', 
      color: '#F24E1E',
      description: 'UI/UX design & prototyping'
    },
    { 
      name: 'React', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
        </svg>
      ), 
      level: '52%', 
      color: '#61DAFB',
      description: 'Components & state management'
    },
    { 
      name: 'Next.js', 
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#000000"/>
          <path d="M7.5 6v12h2V9.5L15 18h1.5V6H15v8.5L9.5 6H7.5z" fill="#ffffff"/>
        </svg>
      ), 
      level: '52%', 
      color: '#00D924',
      description: 'React framework & SSR'
    }
  ];

  // Don't render dynamic content on server
  if (!isClient) {
    return (
      <section className="skills" id="skills" ref={skillsRef}>
        <div className="skills-container">
          <div className="skills-header">
            <div className="skills-badge">
              <span className="badge-icon">🛠️</span>
              My Arsenal
            </div>
            <h2 className="section-heading">
              Technical <span className="heading-highlight">Expertise</span>
            </h2>
            <p className="skills-description">
              Crafting digital experiences with modern technologies and design principles.
            </p>
          </div>
          
          <div className="skills-roadmap-container">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-roadmap-card ${index % 2 === 0 ? 'roadmap-left' : 'roadmap-right'}`}
                style={{
                  '--skill-color': skill.color,
                  '--skill-color-rgb': skill.color === '#000000' ? '0, 0, 0' : 
                    skill.color === '#F7DF1E' ? '247, 223, 30' :
                    skill.color === '#E34F26' ? '227, 79, 38' :
                    skill.color === '#1572B6' ? '21, 114, 182' :
                    skill.color === '#61DAFB' ? '97, 218, 251' :
                    skill.color === '#00D924' ? '0, 217, 36' :
                    skill.color === '#F24E1E' ? '242, 78, 30' : '0, 212, 255'
                }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">{skill.icon}</div>
                </div>
                <div className="skill-content">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-level">{skill.level}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <div className="summary-icon">🏆</div>
              <div className="summary-content">
                <h3>Total Experience</h3>
                <p>6 Months in Web Development</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🚀</div>
              <div className="summary-content">
                <h3>Projects Completed</h3>
                <p>10+ Successful Projects</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="summary-content">
                <h3>Live Visitors</h3>
                <p className="live-counter">
                  <span className="visitor-count">0</span>
                  <span className="live-indicator">🔴 LIVE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      {/* Space Background Effects */}
      <div className="space-background">
        {/* Stars */}
        <div className="stars-layer">
          {starData.map((star) => (
            <div 
              key={star.id} 
              className="star"
              style={{
                '--x': `${star.x}%`,
                '--y': `${star.y}%`,
                '--delay': `${star.delay}s`,
                '--duration': `${star.duration}s`,
                '--size': `${star.size}px`
              }}
            ></div>
          ))}
        </div>
        
        {/* Nebula Effect */}
        <div className="nebula-effect"></div>
        
        {/* Cosmic Dust */}
        <div className="cosmic-dust">
          {dustData.map((dust) => (
            <div 
              key={dust.id} 
              className="dust-particle"
              style={{
                '--x': `${dust.x}%`,
                '--y': `${dust.y}%`,
                '--delay': `${dust.delay}s`,
                '--duration': `${dust.duration}s`,
                '--size': `${dust.size}px`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Background Flowing Particles */}
      <div className="skills-bg-particles">
        {particleData.map((particle) => (
          <div 
            key={particle.id} 
            className="bg-particle"
            style={{
              '--delay': `${particle.delay}s`,
              '--duration': `${particle.duration}s`,
              '--size': `${particle.size}px`,
              '--top': `${particle.top}%`,
              '--opacity': particle.opacity
            }}
          ></div>
        ))}
      </div>
      
      <div className="skills-container">
        {/* Enhanced Header */}
        <div className="skills-header">
          <div className="skills-badge">
            <span className="badge-icon">🛠️</span>
            My Arsenal
          </div>
          <h2 className="section-heading">
            Technical <span className="heading-highlight">Expertise</span>
          </h2>
          <p className="skills-description">
            Crafting digital experiences with modern technologies and design principles.
            <br />
  
          </p>
        </div>
        
        <div className="skills-roadmap-container">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`skill-roadmap-card ${index % 2 === 0 ? 'roadmap-left' : 'roadmap-right'}`}
              style={{
                '--skill-color': skill.color,
                '--skill-color-rgb': skill.color === '#000000' ? '0, 0, 0' : 
                  skill.color === '#F7DF1E' ? '247, 223, 30' :
                  skill.color === '#E34F26' ? '227, 79, 38' :
                  skill.color === '#1572B6' ? '21, 114, 182' :
                  skill.color === '#61DAFB' ? '97, 218, 251' :
                  skill.color === '#00D924' ? '0, 217, 36' :
                  skill.color === '#F24E1E' ? '242, 78, 30' : '0, 212, 255'
              }}
            >
              {/* Roadmap Connection Line */}
              {index < skills.length - 1 && (
                <div className={`roadmap-line ${index % 2 === 0 ? 'line-right' : 'line-left'}`}></div>
              )}

              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-glow"></div>
                
                {/* Rotating Ring */}
                <div className="skill-rotating-ring">
                  <div className="ring-segment"></div>
                  <div className="ring-segment"></div>
                  <div className="ring-segment"></div>
                </div>
              </div>

              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-level">{skill.level}</div>
                
                {/* Enhanced Progress Bar */}
                <div className="skill-progress-container">
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill"
                      data-progress={skill.level}
                      style={{ '--progress-width': '0%' }}
                    >
                      <div className="progress-shine"></div>
                      <div className="progress-pulse"></div>
                    </div>
                  </div>
                  <div className="progress-percentage">{skill.level}</div>
                </div>
              </div>

              {/* Particle Effects on Hover */}
              <div className="skill-hover-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`hover-particle particle-${i + 1}`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {/* Experience/Time Icon */}
                <circle cx="12" cy="12" r="10" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="1" fill="#4ECDC4"/>
                {/* Clock marks */}
                <circle cx="12" cy="4" r="0.5" fill="#4ECDC4"/>
                <circle cx="18" cy="12" r="0.5" fill="#4ECDC4"/>
                <circle cx="12" cy="20" r="0.5" fill="#4ECDC4"/>
                <circle cx="6" cy="12" r="0.5" fill="#4ECDC4"/>
                {/* Subtle glow */}
                <circle cx="12" cy="12" r="11" fill="none" stroke="#4ECDC4" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <div className="summary-content">
              <h3>Total Experience</h3>
              <p>6 Months in Web Development</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {/* Code/Project Icon */}
                <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="#4ECDC4" strokeWidth="2"/>
                <rect x="3" y="4" width="18" height="4" rx="2" fill="#4ECDC4" opacity="0.3"/>
                {/* Code lines */}
                <path d="M6 11h4M6 13h6M6 15h3" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Brackets */}
                <path d="M14 11l2 1-2 1M18 11l-2 1 2 1" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Window dots */}
                <circle cx="5" cy="6" r="0.5" fill="#FF6B6B"/>
                <circle cx="7" cy="6" r="0.5" fill="#FFA500"/>
                <circle cx="9" cy="6" r="0.5" fill="#4ECDC4"/>
                {/* Glow effect */}
                <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="#4ECDC4" strokeWidth="0.5" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite"/>
                </rect>
              </svg>
            </div>
            <div className="summary-content">
              <h3>Projects Completed</h3>
              <p>10+ Successful Projects</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {/* Simple Eye */}
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="none" stroke="#00D4FF" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="#00D4FF"/>
                <circle cx="12" cy="12" r="1.5" fill="#0066CC"/>
                <circle cx="12.5" cy="11.5" r="0.4" fill="#FFFFFF"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.5">
                  <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <div className="summary-content">
              <h3>Visitors</h3>
              <p className="live-counter">
                <span className="visitor-count">{visitorCount.toLocaleString()}</span>
                <span className="live-indicator">🔴 UPDATED LIVE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}