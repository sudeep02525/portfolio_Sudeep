"use client";

export default function CVTemplate() {
  return (
    <div className="cv-container" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '20mm',
      margin: '0 auto',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '1.4'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #0066cc', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '28px', margin: '0', color: '#0066cc', fontWeight: 'bold' }}>
          SUDEEP DAS
        </h1>
        <p style={{ fontSize: '16px', margin: '5px 0', color: '#666' }}>
          Frontend Developer & UI/UX Designer
        </p>
        <p style={{ fontSize: '14px', margin: '5px 0', color: '#666' }}>
          B.Voc AI & ML Student
        </p>
      </div>

      {/* Contact Information */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          CONTACT INFORMATION
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div>
            <p><strong>Email:</strong> sudeep.das@example.com</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
          </div>
          <div>
            <p><strong>LinkedIn:</strong> linkedin.com/in/sudeep-das-77a3b3379</p>
            <p><strong>GitHub:</strong> github.com/sudeep02525</p>
            <p><strong>Twitter:</strong> x.com/Sudeepd44704922</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          EDUCATION
        </h2>
        <div>
          <h3 style={{ fontSize: '14px', margin: '0', fontWeight: 'bold' }}>
            Bachelor of Vocation in Artificial Intelligence & Machine Learning
          </h3>
          <p style={{ margin: '5px 0', color: '#666' }}>Currently Pursuing | 2023 - Present</p>
          <p>Building strong foundation in AI/ML concepts while developing practical web development skills.</p>
        </div>
      </div>

      {/* Technical Skills */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          TECHNICAL SKILLS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Frontend Development</h3>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li>HTML5 - Advanced (95%)</li>
              <li>CSS3 - Advanced (92%)</li>
              <li>JavaScript - Intermediate (67%)</li>
              <li>React - Intermediate (52%)</li>
              <li>Next.js - Intermediate (52%)</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Design & Tools</h3>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li>Figma - Advanced (95%)</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          EXPERIENCE
        </h2>
        <div>
          <h3 style={{ fontSize: '14px', margin: '0', fontWeight: 'bold' }}>
            Frontend Developer | 6 Months
          </h3>
          <p style={{ margin: '5px 0', color: '#666' }}>Self-taught & Project-based Learning</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Developed responsive web interfaces using modern HTML, CSS, and JavaScript</li>
            <li>Created user-friendly digital experiences with focus on clean design</li>
            <li>Built interactive components using React and Next.js framework</li>
            <li>Designed UI/UX mockups and prototypes using Figma</li>
            <li>Implemented modern web development best practices</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          KEY PROJECTS
        </h2>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '14px', margin: '0', fontWeight: 'bold' }}>
            1. Swiggy Clone - Food Delivery Application
          </h3>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>Built responsive food delivery app interface using React</li>
            <li>Implemented modern UI/UX design principles</li>
            <li>Features: Restaurant listings, menu display, cart functionality</li>
            <li>Technologies: React, CSS3, JavaScript, Figma</li>
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '14px', margin: '0', fontWeight: 'bold' }}>
            2. Personal Portfolio Website
          </h3>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>Developed using Next.js with advanced animations</li>
            <li>Responsive design with modern UI components</li>
            <li>Features: Project showcase, skills section, contact form</li>
            <li>Technologies: Next.js, React, CSS3, JavaScript</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '14px', margin: '0', fontWeight: 'bold' }}>
            3. Additional Projects (10+)
          </h3>
          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
            <li>Various web development projects focusing on different technologies</li>
            <li>Practice projects for skill development and learning</li>
          </ul>
        </div>
      </div>

      {/* Achievements */}
      <div style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', color: '#0066cc', borderBottom: '1px solid #0066cc', paddingBottom: '5px', marginBottom: '15px' }}>
          ACHIEVEMENTS & HIGHLIGHTS
        </h2>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Successfully completed 10+ web development projects</li>
          <li>Self-taught frontend development in 6 months</li>
          <li>Strong foundation in both technical development and design</li>
          <li>Passionate about creating clean, user-friendly interfaces</li>
          <li>Continuously learning and adapting to new technologies</li>
        </ul>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ccc', color: '#666' }}>
        <p style={{ margin: '0', fontSize: '10px' }}>
          This CV was generated from my portfolio website. Visit my portfolio for interactive experience and latest updates.
        </p>
      </div>
    </div>
  );
}