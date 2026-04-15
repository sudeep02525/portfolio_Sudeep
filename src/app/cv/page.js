"use client";

import { useEffect } from 'react';

export default function CVPage() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Button - hidden when printing */}
      <div className="cv-print-bar">
        <button onClick={handlePrint} className="cv-print-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Download / Print PDF
        </button>
        <span className="cv-print-hint">Press Ctrl+P → Save as PDF</span>
      </div>

      {/* CV Document */}
      <div className="cv-page">

        {/* Left Sidebar */}
        <div className="cv-sidebar">
          <div className="cv-avatar">
            <img src="/photo.png" alt="Sudeep Das" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center',borderRadius:'50%'}} />
          </div>
          <h1 className="cv-name">Sudeep Das</h1>
          <p className="cv-role">Frontend Developer<br/>& UI/UX Designer</p>

          <div className="cv-sidebar-section">
            <h3>Contact</h3>
            <div className="cv-contact-item">
              <span className="cv-contact-icon">✉</span>
              <span>sudeepdas2525@zohomail.in</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-icon">📞</span>
              <span>+91 7208138728</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-icon">💻</span>
              <span>github.com/sudeep02525</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-icon">🔗</span>
              <span>linkedin.com/in/sudeep-das-77a3b3379</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-icon">🐦</span>
              <span>x.com/Sudeepd44704922</span>
            </div>
          </div>

          <div className="cv-sidebar-section">
            <h3>Skills</h3>
            {[
              { name: 'HTML5', pct: 95 },
              { name: 'CSS3', pct: 92 },
              { name: 'Figma', pct: 95 },
              { name: 'JavaScript', pct: 67 },
              { name: 'React.js', pct: 52 },
              { name: 'Next.js', pct: 52 },
            ].map(s => (
              <div key={s.name} className="cv-skill-item">
                <div className="cv-skill-label">
                  <span>{s.name}</span>
                  <span>{s.pct}%</span>
                </div>
                <div className="cv-skill-bar">
                  <div className="cv-skill-fill" style={{ width: `${s.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-sidebar-section">
            <h3>Tools</h3>
            <div className="cv-tags">
              {['Git & GitHub', 'Express.js', 'MongoDB', 'VS Code', 'Tailwind CSS'].map(t => (
                <span key={t} className="cv-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="cv-sidebar-section">
            <h3>Education</h3>
            <p className="cv-edu-degree">B.Voc — AI & Data Science</p>
            <p className="cv-edu-school">National Institute of Technology</p>
            <p className="cv-edu-year">2025 – 2028</p>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="cv-main">

          {/* Summary */}
          <div className="cv-section">
            <h2 className="cv-section-title">Professional Summary</h2>
            <p className="cv-summary">
              Passionate Frontend Developer and B.Voc student in Artificial Intelligence & Data Science (2025–2028). Proficient in React.js, Next.js, and modern UI/UX design. Committed to writing clean, efficient code and delivering exceptional digital experiences while actively expanding expertise in AI & Data Science.
            </p>
          </div>

          {/* Projects */}
          <div className="cv-section">
            <h2 className="cv-section-title">Key Projects</h2>

            {[
              {
                name: 'Student Attendance Management System',
                tech: 'Next.js · Express.js · MongoDB',
                link: 'github.com/sudeep02525/student_attendance',
                points: [
                  'Full-stack attendance tracking with real-time updates and student management',
                  'Secure REST APIs with Express.js and persistent MongoDB storage',
                ]
              },
              {
                name: 'Expense Tracker Application',
                tech: 'Next.js · Express.js',
                link: 'github.com/sudeep02525/expense-tracker',
                points: [
                  'Finance management app with real-time balance calculation and transaction history',
                  'Clean, intuitive UI with add/delete functionality and categorized expense overview',
                ]
              },
              {
                name: 'Personal Portfolio Website',
                tech: 'Next.js · React.js · Tailwind CSS · MongoDB',
                link: 'github.com/sudeep02525/portfolio--sudeep00',
                points: [
                  'Fully responsive portfolio with smooth animations and modern dark UI',
                  'MongoDB-based live visitor counter, deployed with custom domain',
                ]
              },
            ].map((p, i) => (
              <div key={i} className="cv-project">
                <div className="cv-project-header">
                  <h3 className="cv-project-name">{p.name}</h3>
                  <span className="cv-project-link">{p.link}</span>
                </div>
                <p className="cv-project-tech">{p.tech}</p>
                <ul className="cv-list">
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="cv-section">
            <h2 className="cv-section-title">Certifications</h2>
            <div className="cv-certs-grid">
              {[
                { name: 'AI Aware Certificate', org: 'AI Certification Program', date: 'Jan 2026' },
                { name: 'AI Appreciate Certificate', org: 'AI Certification Program', date: 'Jan 2026' },
                { name: 'Yuva AI For ALL', org: 'AISECT LEARN (INDIAI)', date: 'Jan 2026' },
                { name: 'Web Development Certificate', org: 'Web Development Course', date: 'Jan 2026' },
                { name: 'AI Fluency Framework & Foundation', org: 'AI Certification Program', date: 'Mar 2026' },
                { name: 'Claude 101', org: 'Anthropic', date: 'Mar 2026' },
                { name: 'AI Fluency for Students', org: 'AI Certification Program', date: 'Mar 2026' },
                { name: 'AI Fluency for Educators', org: 'AI Certification Program', date: 'Mar 2026' },
                { name: 'Teaching the AI Fluency Framework', org: 'AI Certification Program', date: 'Mar 2026' },
                { name: 'AI Fluency for Nonprofits', org: 'AI Certification Program', date: 'Mar 2026' },
              ].map((c, i) => (
                <div key={i} className="cv-cert-item">
                  <span className="cv-cert-dot">▸</span>
                  <div>
                    <span className="cv-cert-name">{c.name}</span>
                    <span className="cv-cert-org"> — {c.org}</span>
                  </div>
                  <span className="cv-cert-date">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #f0f2f5; }

        .cv-print-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 32px;
          background: #1a1a2e;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .cv-print-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: #00c6ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s;
        }
        .cv-print-btn:hover { background: #0099cc; }
        .cv-print-hint { color: #aaa; font-size: 13px; font-family: 'Inter', sans-serif; }

        .cv-page {
          display: flex;
          width: 210mm;
          min-height: 297mm;
          margin: 24px auto;
          background: white;
          box-shadow: 0 4px 30px rgba(0,0,0,0.15);
          font-family: 'Inter', 'Arial', sans-serif;
        }

        /* Sidebar */
        .cv-sidebar {
          width: 72mm;
          min-height: 297mm;
          background: #1a1a2e;
          color: white;
          padding: 28px 18px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .cv-avatar {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #00c6ff, #7c3aed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          overflow: hidden;
          border: 3px solid rgba(0,198,255,0.5);
        }
        .cv-name {
          font-size: 20px;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .cv-role {
          font-size: 11px;
          color: #00c6ff;
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .cv-sidebar-section {
          margin-bottom: 22px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 14px;
        }
        .cv-sidebar-section h3 {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #00c6ff;
          margin-bottom: 10px;
        }
        .cv-contact-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          margin-bottom: 7px;
          font-size: 9.5px;
          color: #ccc;
          line-height: 1.4;
          word-break: break-all;
        }
        .cv-contact-icon { flex-shrink: 0; }

        .cv-skill-item { margin-bottom: 8px; }
        .cv-skill-label {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #ddd;
          margin-bottom: 3px;
        }
        .cv-skill-bar {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .cv-skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #00c6ff, #7c3aed);
          border-radius: 2px;
        }

        .cv-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .cv-tag {
          background: rgba(0,198,255,0.15);
          border: 1px solid rgba(0,198,255,0.3);
          color: #00c6ff;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 9px;
        }

        .cv-edu-degree { font-size: 10.5px; font-weight: 600; color: white; margin-bottom: 2px; }
        .cv-edu-school { font-size: 9.5px; color: #aaa; margin-bottom: 2px; }
        .cv-edu-year { font-size: 9px; color: #00c6ff; }
        /* Main */
        .cv-main {
          flex: 1;
          padding: 28px 24px;
          overflow: hidden;
        }
        .cv-section { margin-bottom: 16px; }
        .cv-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #1a1a2e;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid #00c6ff;
          padding-bottom: 5px;
          margin-bottom: 12px;
        }
        .cv-summary {
          font-size: 10.5px;
          color: #444;
          line-height: 1.7;
        }

        .cv-exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }
        .cv-exp-title { font-size: 12px; font-weight: 700; color: #1a1a2e; }
        .cv-exp-company { font-size: 10.5px; color: #00c6ff; font-weight: 600; margin-top: 2px; }
        .cv-exp-date {
          font-size: 10px;
          color: #666;
          white-space: nowrap;
          background: #f0f2f5;
          padding: 2px 8px;
          border-radius: 10px;
        }

        .cv-list {
          padding-left: 16px;
          color: #444;
          font-size: 10.5px;
          line-height: 1.7;
        }
        .cv-list li { margin-bottom: 2px; }

        .cv-project { margin-bottom: 14px; }
        .cv-project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }
        .cv-project-name { font-size: 11.5px; font-weight: 700; color: #1a1a2e; }
        .cv-project-link { font-size: 9px; color: #00c6ff; white-space: nowrap; }
        .cv-project-tech { font-size: 9.5px; color: #7c3aed; margin: 2px 0 5px 0; font-weight: 600; }

        .cv-certs-grid { display: flex; flex-direction: column; gap: 5px; }
        .cv-cert-item {
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-size: 10px;
          color: #333;
          padding: 3px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .cv-cert-dot { color: #00c6ff; flex-shrink: 0; }
        .cv-cert-name { font-weight: 600; color: #1a1a2e; }
        .cv-cert-org { color: #666; }
        .cv-cert-date { margin-left: auto; color: #7c3aed; font-size: 9.5px; white-space: nowrap; font-weight: 600; }

        @media print {
          .cv-print-bar { display: none !important; }
          body { background: white; margin: 0; padding: 0; }
          .cv-page {
            margin: 0;
            box-shadow: none;
            width: 100%;
            min-height: unset;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }

        /* Force normal cursor on CV page */
        *, *:hover {
          cursor: default !important;
        }
        button, a {
          cursor: pointer !important;
        }
      `}</style>
    </>
  );
}
