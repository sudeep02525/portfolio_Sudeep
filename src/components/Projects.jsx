"use client";

import { useState } from 'react';

export default function Projects() {
  const [previewImg, setPreviewImg] = useState(null);

  const handleGitHubClick = () => {
    window.open('https://github.com/sudeep02525', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image" onClick={() => setPreviewImg('/Student Attendance.png')} style={{cursor:'pointer'}}>
              <img src="/Student Attendance.png" alt="Student Attendance Preview" />
              <div className="project-image-overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="project-content">
              <div className="project-title">Student Attendance</div>
              <div className="project-description">A student attendance management system to track and manage daily attendance records efficiently. Features real-time updates, student management, and attendance reports.</div>
              <div className="project-tech-stack">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Express.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/sudeep02525/student_attendance" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" onClick={() => setPreviewImg('/ExpenseTracker.png')} style={{cursor:'pointer'}}>
              <img src="/ExpenseTracker.png" alt="Expense Tracker Preview" />
              <div className="project-image-overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="project-content">
              <div className="project-title">Expense Tracker</div>
              <div className="project-description">A clean and intuitive expense tracking app to manage daily finances. Features add/delete transactions, real-time balance calculation, and categorized expense overview.</div>
              <div className="project-tech-stack">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Express.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/sudeep02525/expense-tracker.git" className="project-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" onClick={() => setPreviewImg('/project3.png')} style={{cursor:'pointer'}}>
              <img src="/project3.png" alt="Portfolio Website Preview" />
              <div className="project-image-overlay"><i className="fas fa-expand"></i></div>
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

      {/* Image Preview Modal */}
      {previewImg && (
        <div className="project-preview-modal" onClick={() => setPreviewImg(null)}>
          <button className="project-preview-close" onClick={() => setPreviewImg(null)}>
            <i className="fas fa-times"></i>
          </button>
          <img src={previewImg} alt="Project Preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
