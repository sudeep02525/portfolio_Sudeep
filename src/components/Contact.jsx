"use client";

import { useEffect, useRef } from 'react';

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    // Add entrance animations
    const contactSection = contactRef.current;
    if (contactSection) {
      const elements = contactSection.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('fade-in-up');
      });
    }
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="2" fill="white" stroke="#FF6B6B" strokeWidth="2"/>
          <path d="M2 6l10 7 10-7" stroke="#FF6B6B" strokeWidth="2" fill="none"/>
          <path d="M2 18l7-5M22 18l-7-5" stroke="#FF6B6B" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      label: 'Email',
      value: 'sudeepdas2525@zohomail.in',
      link: 'mailto:sudeepdas2525@zohomail.in',
      color: '#FF6B6B',
      description: 'Drop me a line anytime'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#4ECDC4"/>
          <circle cx="9" cy="9" r="1" fill="white"/>
          <circle cx="15" cy="15" r="1" fill="white"/>
        </svg>
      ),
      label: 'Phone',
      value: '+91 7208138728',
      link: 'tel:+917208138728',
      color: '#4ECDC4',
      description: 'Let\'s have a conversation'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#45B7D1"/>
          <circle cx="12" cy="10" r="3" fill="white"/>
          <circle cx="12" cy="10" r="1" fill="#45B7D1"/>
        </svg>
      ),
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
      color: '#45B7D1',
      description: 'Where I\'m based'
    },
 
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" fill="#25D366"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: '+91 7208138728',
      link: 'https://wa.me/917208138728',
      color: '#25D366',
      description: 'Quick chat on WhatsApp'
    },

    {
      icon: (
        <img 
          src="/Arattai.svg" 
          alt="Arattai" 
          width="24" 
          height="24" 
          style={{ borderRadius: '4px' }}
        />
      ),
      label: 'Arattai',
      value: '@sudeepdas',
      link: 'arattai://user/@sudeepdas',
      color: '#FFD700',
      description: 'Message me on Arattai'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', color: '#0077B5', link: 'https://www.linkedin.com/in/sudeep-das-77a3b3379' },
    { icon: 'fab fa-github', color: '#333', link: 'https://github.com/sudeep02525' },
    { icon: 'fab fa-instagram', color: '#E4405F', link: 'https://www.instagram.com/sudeep______das/' },
    { icon: 'fab fa-twitter', color: '#1DA1F2', link: 'https://x.com/Sudeepd44704922' }
  ];

  const handleArattaiClick = (e) => {
    e.preventDefault();
    
    // Try to open Arattai app first
    const appUrl = 'arattai://user/@sudeepdas';
    const webUrl = 'https://aratt.ai/user/@sudeepdas';
    
    // Create a hidden iframe to try app deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appUrl;
    document.body.appendChild(iframe);
    
    // Fallback to web version after a short delay
    setTimeout(() => {
      document.body.removeChild(iframe);
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      {/* Light Background */}
      <div className="contact-bg">
        <div className="contact-bg-gradient"></div>
        <div className="contact-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header animate-on-load">
          <div className="contact-badge">
            <span className="badge-icon">✨</span>
            Let's Connect
          </div>
          <h1 className="contact-title">
            Ready to <span className="title-highlight">Collaborate?</span>
          </h1>
          <p className="contact-subtitle">
            I'm always excited to work on new projects and connect with fellow developers. 
            Let's build something amazing together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="contact-grid">
          {/* Contact Methods */}
          <div className="contact-methods animate-on-load">
            <h2 className="section-title">Get In Touch</h2>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.label === 'Arattai' ? '#' : method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-method-card"
                  style={{ '--method-color': method.color }}
                  onClick={method.label === 'Arattai' ? handleArattaiClick : undefined}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <div className="method-label">{method.label}</div>
                    <div className="method-value">{method.value}</div>
                    <div className="method-description">{method.description}</div>
                  </div>
                  <div className="method-arrow">→</div>
                  <div className="method-glow"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Illustration */}
          <div className="contact-illustration animate-on-load">
            <div className="illustration-container">
              <div className="floating-elements">
                <div className="float-element element-1">💼</div>
                <div className="float-element element-2">🚀</div>
                <div className="float-element element-3">⚡</div>
                <div className="float-element element-4">🎯</div>
                <div className="float-element element-5">💡</div>
                <div className="float-element element-6">🔥</div>
              </div>
              
              <div className="central-avatar">
                <div className="avatar-ring ring-1"></div>
                <div className="avatar-ring ring-2"></div>
                <div className="avatar-ring ring-3"></div>
                <div className="avatar-image">👨‍💻</div>
                <div className="avatar-status">
                  <div className="status-dot"></div>
                  <span>Available</span>
                </div>
              </div>

              <div className="connection-lines">
                <svg viewBox="0 0 400 400" className="lines-svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M200,200 L100,100" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line line-1" />
                  <path d="M200,200 L300,100" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line line-2" />
                  <path d="M200,200 L100,300" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line line-3" />
                  <path d="M200,200 L300,300" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line line-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="contact-social animate-on-load">
          <h3 className="social-title">Follow My Journey</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
              >
                <i className={social.icon}></i>
                <div className="social-ripple"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta animate-on-load">
          <div className="cta-content">
            <h3>Ready to Start Something Great?</h3>
            <p>Whether it's a project, collaboration, or just a friendly chat about tech!</p>
            <div className="cta-buttons">
              <a href="mailto:sudeepdas2525@zohomail.in" className="cta-btn primary">
                <span>Send Email</span>
                <i className="fas fa-paper-plane"></i>
              </a>
              <a href="https://wa.me/917208138728" className="cta-btn secondary">
                <span>WhatsApp</span>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer animate-on-load">
          <div className="footer-content">
            <p>© 2026 Sudeep Das</p>
          </div>
        </div>
      </div>
    </section>
  );
}