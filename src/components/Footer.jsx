export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-name">Sudeep Das</div>
            <div className="footer-tagline">Frontend Developer & UI/UX Designer</div>
            <div className="footer-description">
              Creating beautiful digital experiences while building expertise in web technologies and preparing for the future of AI & Machine Learning.
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li>Figma Prototyping</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-social">
                <a href="mailto:sudeepdas2525@zohomail.in" title="Email" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/sudeep-das-77a3b3379" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/sudeep02525" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/Sudeepd44704922" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="footer-contact-info">
                <p><i className="fas fa-envelope"></i> sudeepdas2525@zohomail.in</p>
                <p><i className="fas fa-map-marker-alt"></i> India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Sudeep Das. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
}