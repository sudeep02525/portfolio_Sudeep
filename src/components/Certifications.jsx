"use client";

import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "AI Aware Certificate",
      issuer: "AI Certification Program",
      year: "06 Jan 2026",
      image: "/Sudeep Das_AI_AWARE_CERTIFICATE.png",
      description: "Foundation level certification demonstrating understanding of AI concepts, ethics, and real-world implementations."
    },
    {
      title: "AI Appreciate Certificate",
      issuer: "AI Certification Program",
      year: "06 Jan 2026",
      image: "/Sudeep Das_AI_APPRECIATE_CERTIFICATE.png",
      description: "Advanced certification showcasing deep appreciation and practical knowledge of AI technologies and their impact."
    },
    {
      title: "Yuva AI For ALL - English",
      issuer: "AISECT LEARN (INDIAI)",
      year: "21 Jan 2026",
      image: "/yuvacertificate.jpeg",
      description: "Comprehensive AI fundamentals course covering data science, neural networks, and practical AI applications in English."
    },
    {
      title: "Web Development Certificate",
      issuer: "Web Development Course",
      year: "26 Jan 2026",
      image: "/Webcertificate.png",
      description: "Full-stack web development certification covering HTML, CSS, JavaScript, React, and modern web technologies."
    },
    {
      title: "AI Fluency Framework & Foundation",
      issuer: "AI Certification Program",
      year: "20 Mar 2026",
      image: "/AI_Fluency_Framework_&_Foundation.png",
      description: "Certification demonstrating proficiency in AI fluency frameworks, foundational AI concepts, and practical application of AI tools."
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      year: "23 Mar 2026",
      image: "/Claude 101.png",
      description: "Certification covering the fundamentals of Claude AI, including prompt engineering, responsible usage, and practical AI interaction techniques."
    },
    {
      title: "AI Fluency for Students",
      issuer: "AI Certification Program",
      year: "25 Mar 2026",
      image: "/AI Fluency for students.png",
      description: "Student-focused AI fluency certification covering essential AI literacy, tools, and skills needed for the modern digital landscape."
    },
    {
      title: "AI Fluency for Educators",
      issuer: "AI Certification Program",
      year: "25 Mar 2026",
      image: "/AI Fluency for educators.png",
      description: "Educator-focused AI fluency certification covering AI integration in teaching, learning tools, and responsible AI use in education."
    },
    {
      title: "Teaching the AI Fluency Framework",
      issuer: "AI Certification Program",
      year: "25 Mar 2026",
      image: "/Teaching the AI Fluency Framework.png",
      description: "Certification focused on teaching methodologies for AI fluency, equipping educators with frameworks to effectively teach AI concepts."
    },
    {
      title: "AI Fluency for Nonprofits",
      issuer: "AI Certification Program",
      year: "25 Mar 2026",
      image: "/Ai Fluency for nonprofits.png",
      description: "Certification covering AI adoption strategies for nonprofit organizations, enabling impactful use of AI tools for social good."
    }
  ];

  const visibleCerts = showAll ? certificates : certificates.slice(0, 6);

  return (
    <>
      <section className="certifications-section" id="certifications">
        <div className="certifications-container">
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          
          <div className="certifications-grid">
            {visibleCerts.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-logo">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-year"><i className="fas fa-calendar-alt"></i> {cert.year}</p>
                <p className="certificate-description">{cert.description}</p>
                <button 
                  className="certificate-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  <span>View Certificate</span>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            ))}
          </div>

          {/* View All / Show Less Button */}
          {!showAll ? (
            <div className="cert-view-all-container">
              <button className="cert-view-all-btn" onClick={() => setShowAll(true)}>
                <span>View All Certificates</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          ) : (
            <div className="cert-view-all-container">
              <button className="cert-view-all-btn" onClick={() => setShowAll(false)}>
                <span>Show Less</span>
                <i className="fas fa-chevron-up"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={() => setSelectedCert(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title}
              className="certificate-modal-image"
            />
            <div className="certificate-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} • {selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
