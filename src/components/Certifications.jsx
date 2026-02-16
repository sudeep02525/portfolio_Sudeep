"use client";

import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Yuva AI For ALL - English",
      issuer: "AISECT LEARN (INDIAI)",
      year: "2026",
      image: "/yuvacertificate.jpeg",
      description: "Comprehensive AI fundamentals course covering machine learning, neural networks, and practical AI applications in English."
    },
    {
      title: "AI Aware Certificate",
      issuer: "AI Certification Program",
      year: "2026",
      image: "/Sudeep Das_AI_AWARE_CERTIFICATE.png",
      description: "Foundation level certification demonstrating understanding of AI concepts, ethics, and real-world implementations."
    },
    {
      title: "AI Appreciate Certificate",
      issuer: "AI Certification Program",
      year: "2026",
      image: "/Sudeep Das_AI_APPRECIATE_CERTIFICATE.png",
      description: "Advanced certification showcasing deep appreciation and practical knowledge of AI technologies and their impact."
    },
    {
      title: "Web Development Certificate",
      issuer: "Web Development Course",
      year: "2026",
      image: "/Webcertificate.png",
      description: "Full-stack web development certification covering HTML, CSS, JavaScript, React, and modern web technologies."
    }
  ];

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section className="certifications-section" id="certifications">
        <div className="certifications-container">
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          
          <div className="certifications-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-logo">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-year">{cert.year}</p>
                <p className="certificate-description">{cert.description}</p>
                <button 
                  className="certificate-btn"
                  onClick={() => handleViewCertificate(cert)}
                >
                  <span>View Certificate</span>
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="certificate-modal" onClick={handleCloseCertificate}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={handleCloseCertificate}>
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
