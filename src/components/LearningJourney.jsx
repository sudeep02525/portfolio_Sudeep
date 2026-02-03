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
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  {/* Graduation Cap */}
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" fill="#00D4FF"/>
                  <path d="M5 11.18v6L12 21l7-3.82v-6" fill="#0099CC" opacity="0.8"/>
                  
                  {/* Cap Top */}
                  <ellipse cx="12" cy="9" rx="11" ry="3" fill="#00D4FF"/>
                  <ellipse cx="12" cy="8.5" rx="11" ry="3" fill="#33E0FF"/>
                  
                  {/* Tassel */}
                  <circle cx="18" cy="8" r="0.5" fill="#FFD700"/>
                  <path d="M18 8.5v3" stroke="#FFD700" strokeWidth="0.8"/>
                  <circle cx="18" cy="11.5" r="0.8" fill="#FFD700"/>
                  
                  {/* AI/ML Elements */}
                  <circle cx="8" cy="6" r="0.8" fill="#FFFFFF" opacity="0.9"/>
                  <circle cx="12" cy="5.5" r="0.8" fill="#FFFFFF" opacity="0.9"/>
                  <circle cx="16" cy="6" r="0.8" fill="#FFFFFF" opacity="0.9"/>
                  
                  {/* Connection lines */}
                  <path d="M8 6L12 5.5M12 5.5L16 6" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.7"/>
                  
                  {/* Glow effect */}
                  <ellipse cx="12" cy="8.5" rx="11" ry="3" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                  </ellipse>
                </svg>
              </div>
              <div className="card-year">2025</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">B.Voc in AI & ML</h3>
              <div className="card-institution">
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start'}}>
                  <div style={{
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#ffffff', 
                    flexShrink: 0,
                    border: '2px solid #00D4FF',
                    boxShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)',
                    position: 'relative'
                  }}>
                    <img src="/NIT.jpeg" alt="NIT" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      animation: 'shine 2s infinite'
                    }}></div>
                  </div>
                  <span style={{fontSize: '14px', lineHeight: '1.2', color: 'inherit'}}>Nexcore Institute of Technology</span>
                </div>
              </div>
              <p className="card-description">
                Building strong foundations in artificial intelligence and machine learning, 
                exploring algorithms, data structures, and innovative AI solutions.
              </p>
              <div className="card-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{'--progress': '48%'}}></div>
                </div>
                <span className="progress-text">48% Complete</span>
              </div>
            </div>
          </div>

          {/* Journey Card 2 - Frontend */}
          <div className="journey-card card-frontend animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  {/* Laptop Base - Ultra Bright Purple */}
                  <path d="M3 18h18l-1-12H4l-1 12z" fill="#9333EA"/>
                  <rect x="4" y="6" width="16" height="11" rx="1" fill="#7C3AED"/>
                  
                  {/* Screen Border */}
                  <rect x="5" y="7" width="14" height="9" rx="0.5" fill="#1E1B4B"/>
                  <rect x="5.5" y="7.5" width="13" height="8" rx="0.3" fill="#0F0F23"/>
                  
                  {/* Browser Window */}
                  <rect x="6" y="8" width="12" height="1" rx="0.2" fill="#9333EA"/>
                  <circle cx="6.8" cy="8.5" r="0.2" fill="#EF4444"/>
                  <circle cx="7.4" cy="8.5" r="0.2" fill="#F59E0B"/>
                  <circle cx="8" cy="8.5" r="0.2" fill="#10B981"/>
                  
                  {/* Code Lines - Ultra Bright Purple Theme */}
                  <rect x="6.5" y="9.5" width="2.5" height="0.3" rx="0.15" fill="#D946EF"/>
                  <rect x="9.2" y="9.5" width="1.8" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  <rect x="11.2" y="9.5" width="3" height="0.3" rx="0.15" fill="#FBBF24"/>
                  <rect x="14.5" y="9.5" width="2.5" height="0.3" rx="0.15" fill="#C084FC"/>
                  
                  <rect x="6.5" y="10.2" width="1.5" height="0.3" rx="0.15" fill="#9333EA"/>
                  <rect x="8.2" y="10.2" width="4" height="0.3" rx="0.15" fill="#A855F7"/>
                  <rect x="12.5" y="10.2" width="2" height="0.3" rx="0.15" fill="#D946EF"/>
                  <rect x="14.8" y="10.2" width="2" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  
                  <rect x="6.5" y="10.9" width="3" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  <rect x="9.8" y="10.9" width="2.5" height="0.3" rx="0.15" fill="#D946EF"/>
                  <rect x="12.5" y="10.9" width="1.8" height="0.3" rx="0.15" fill="#FBBF24"/>
                  <rect x="14.5" y="10.9" width="2.5" height="0.3" rx="0.15" fill="#C084FC"/>
                  
                  <rect x="6.5" y="11.6" width="4.5" height="0.3" rx="0.15" fill="#A855F7"/>
                  <rect x="11.2" y="11.6" width="1.5" height="0.3" rx="0.15" fill="#9333EA"/>
                  <rect x="13" y="11.6" width="3.5" height="0.3" rx="0.15" fill="#D946EF"/>
                  
                  <rect x="6.5" y="12.3" width="2" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  <rect x="8.8" y="12.3" width="3.5" height="0.3" rx="0.15" fill="#C084FC"/>
                  <rect x="12.5" y="12.3" width="2.2" height="0.3" rx="0.15" fill="#FBBF24"/>
                  <rect x="15" y="12.3" width="2" height="0.3" rx="0.15" fill="#A855F7"/>
                  
                  <rect x="6.5" y="13" width="2.8" height="0.3" rx="0.15" fill="#D946EF"/>
                  <rect x="9.5" y="13" width="3.2" height="0.3" rx="0.15" fill="#9333EA"/>
                  <rect x="13" y="13" width="2.5" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  <rect x="15.8" y="13" width="1.2" height="0.3" rx="0.15" fill="#C084FC"/>
                  
                  <rect x="6.5" y="13.7" width="3.5" height="0.3" rx="0.15" fill="#A855F7"/>
                  <rect x="10.2" y="13.7" width="2.8" height="0.3" rx="0.15" fill="#D946EF"/>
                  <rect x="13.2" y="13.7" width="3.5" height="0.3" rx="0.15" fill="#F0ABFC"/>
                  
                  {/* Laptop Keyboard - Ultra Bright */}
                  <rect x="4.5" y="17.2" width="15" height="0.8" rx="0.4" fill="#9333EA"/>
                  
                  {/* Keyboard Keys - Ultra Bright Purple */}
                  <rect x="5" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="5.8" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="6.6" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="7.4" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="8.2" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="9" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="9.8" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="10.6" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="11.4" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="12.2" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="13" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="13.8" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="14.6" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="15.4" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="16.2" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="17" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="17.8" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  <rect x="18.6" y="17.4" width="0.6" height="0.4" rx="0.05" fill="#D946EF"/>
                  
                  {/* Trackpad - Ultra Bright */}
                  <rect x="10.5" y="18.5" width="3" height="1.5" rx="0.2" fill="#7C3AED"/>
                  
                  {/* Laptop Stand - Ultra Bright */}
                  <path d="M2 19h20v0.8H2z" fill="#9333EA"/>
                  
                  {/* Screen Glow - Enhanced */}
                  <rect x="5" y="7" width="14" height="9" rx="0.5" fill="none" stroke="#D946EF" strokeWidth="1.2" opacity="0.9">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Laptop Body Glow - Enhanced */}
                  <rect x="4" y="6" width="16" height="11" rx="1" fill="none" stroke="#C084FC" strokeWidth="0.8" opacity="0.8">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Additional Glow Effect */}
                  <rect x="3.5" y="5.5" width="17" height="12" rx="1.5" fill="none" stroke="#F0ABFC" strokeWidth="0.3" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
                  </rect>
                </svg>
              </div>
              <div className="card-year">2026</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Frontend Developer</h3>
              <div className="card-institution">
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start'}}>
                  <div style={{
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#ffffff', 
                    flexShrink: 0,
                    border: '2px solid #7C3AED',
                    boxShadow: '0 0 10px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
                    position: 'relative'
                  }}>
                    <img src="/NIT.jpeg" alt="NIT" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      animation: 'shine 2s infinite'
                    }}></div>
                  </div>
                  <span style={{fontSize: '14px', lineHeight: '1.2', color: 'inherit'}}>Nexcore Institute of Technology</span>
                </div>
              </div>
              <p className="card-description">
                Mastering modern web technologies like React, Next.js, and creating 
                beautiful, responsive user interfaces with clean code.
              </p>
              <div className="card-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{'--progress': '72%'}}></div>
                </div>
                <span className="progress-text">72% Complete</span>
              </div>
            </div>
          </div>

          {/* Journey Card 3 - Full Stack */}
          <div className="journey-card card-fullstack animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF1493"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF1493" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="#E91E63"/>
                  <path d="M12 9v6M9 12h6" stroke="#FFFFFF" strokeWidth="1"/>
                  <circle cx="6" cy="8" r="1" fill="#FF69B4" opacity="0.8"/>
                  <circle cx="18" cy="8" r="1" fill="#FF69B4" opacity="0.8"/>
                  <circle cx="6" cy="16" r="1" fill="#FF69B4" opacity="0.8"/>
                  <circle cx="18" cy="16" r="1" fill="#FF69B4" opacity="0.8"/>
                </svg>
              </div>
              <div className="card-year">2026</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Full Stack Developer</h3>
              <div className="card-institution">
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start'}}>
                  <div style={{
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#ffffff', 
                    flexShrink: 0,
                    border: '2px solid #FF1493',
                    boxShadow: '0 0 10px rgba(255, 20, 147, 0.5), 0 0 20px rgba(255, 20, 147, 0.3)',
                    position: 'relative'
                  }}>
                    <img src="/NIT.jpeg" alt="NIT" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      animation: 'shine 2s infinite'
                    }}></div>
                  </div>
                  <span style={{fontSize: '14px', lineHeight: '1.2', color: 'inherit'}}>Nexcore Institute of Technology</span>
                </div>
              </div>
              <p className="card-description">
                Expanding to backend technologies, databases, and server-side development 
                for complete end-to-end application architecture.
              </p>
              <div className="card-status">
                <div className="status-indicator upcoming"></div>
                <span className="status-text">Upcoming Goal</span>
              </div>
            </div>
          </div>

          {/* Journey Card 4 - AI/ML */}
          <div className="journey-card card-aiml animate-on-load">
            <div className="card-glow"></div>
            <div className="card-header">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  {/* AI Brain/Processor Core */}
                  <circle cx="12" cy="12" r="6" fill="#00FF88" opacity="0.9"/>
                  <circle cx="12" cy="12" r="4.5" fill="#00D4AA"/>
                  <circle cx="12" cy="12" r="3" fill="#1A365D"/>
                  
                  {/* Central AI Chip */}
                  <rect x="10" y="10" width="4" height="4" rx="0.5" fill="#00FF88"/>
                  <rect x="10.5" y="10.5" width="3" height="3" rx="0.3" fill="#0A0A0A"/>
                  <circle cx="12" cy="12" r="0.8" fill="#00FF88"/>
                  
                  {/* Neural Network Connections - 8 directions */}
                  {/* Top connections */}
                  <line x1="12" y1="6" x2="12" y2="2" stroke="#00FF88" strokeWidth="2"/>
                  <line x1="15" y1="7.5" x2="18" y2="4.5" stroke="#00FF88" strokeWidth="2"/>
                  <line x1="9" y1="7.5" x2="6" y2="4.5" stroke="#00FF88" strokeWidth="2"/>
                  
                  {/* Side connections */}
                  <line x1="18" y1="12" x2="22" y2="12" stroke="#00FF88" strokeWidth="2"/>
                  <line x1="6" y1="12" x2="2" y2="12" stroke="#00FF88" strokeWidth="2"/>
                  
                  {/* Bottom connections */}
                  <line x1="12" y1="18" x2="12" y2="22" stroke="#00FF88" strokeWidth="2"/>
                  <line x1="15" y1="16.5" x2="18" y2="19.5" stroke="#00FF88" strokeWidth="2"/>
                  <line x1="9" y1="16.5" x2="6" y2="19.5" stroke="#00FF88" strokeWidth="2"/>
                  
                  {/* Neural Nodes */}
                  <circle cx="12" cy="2" r="1.5" fill="#00FF88"/>
                  <circle cx="18" cy="4.5" r="1.5" fill="#00FF88"/>
                  <circle cx="6" cy="4.5" r="1.5" fill="#00FF88"/>
                  <circle cx="22" cy="12" r="1.5" fill="#00FF88"/>
                  <circle cx="2" cy="12" r="1.5" fill="#00FF88"/>
                  <circle cx="12" cy="22" r="1.5" fill="#00FF88"/>
                  <circle cx="18" cy="19.5" r="1.5" fill="#00FF88"/>
                  <circle cx="6" cy="19.5" r="1.5" fill="#00FF88"/>
                  
                  {/* Inner circuit pattern */}
                  <path d="M10 11h4M11 10v4M13 10v4" stroke="#00FF88" strokeWidth="0.5" opacity="0.8"/>
                  
                  {/* Pulsing glow effect */}
                  <circle cx="12" cy="12" r="7" fill="none" stroke="#00FF88" strokeWidth="0.5" opacity="0.4">
                    <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Data flow animation */}
                  <circle cx="12" cy="8" r="0.5" fill="#FFFFFF">
                    <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="16" cy="12" r="0.5" fill="#FFFFFF">
                    <animateTransform attributeName="transform" type="rotate" values="90 12 12;450 12 12" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="12" cy="16" r="0.5" fill="#FFFFFF">
                    <animateTransform attributeName="transform" type="rotate" values="180 12 12;540 12 12" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="8" cy="12" r="0.5" fill="#FFFFFF">
                    <animateTransform attributeName="transform" type="rotate" values="270 12 12;630 12 12" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="card-year">2028</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">AI & ML Engineer</h3>
              <div className="card-institution">
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start'}}>
                  <div style={{
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: '#ffffff', 
                    flexShrink: 0,
                    border: '2px solid #00FF88',
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.3)',
                    position: 'relative'
                  }}>
                    <img src="/NIT.jpeg" alt="NIT" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                      animation: 'shine 2s infinite'
                    }}></div>
                  </div>
                  <span style={{fontSize: '14px', lineHeight: '1.2', color: 'inherit'}}>Nexcore Institute of Technology</span>
                </div>
              </div>
              <p className="card-description">
                Specializing in intelligent systems, machine learning models, 
                and innovative AI-powered solutions for real-world challenges.
              </p>
              <div className="card-future">
                <div className="future-indicator">
                  <div className="pulse-dot"></div>
                  <span>Future Vision</span>
                </div>
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