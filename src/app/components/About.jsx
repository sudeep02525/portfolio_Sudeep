export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-wrapper">
            <div className="about-image-inner">🎨</div>
          </div>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>I'm Sudeep Das, a passionate UI/UX Designer and Frontend Developer. I specialize in designing clean, user-friendly interfaces in Figma and converting them into responsive, high-quality websites with modern web technologies.</p>
          <p>With a keen eye for design details and strong coding fundamentals, I create digital products that are both beautiful and functional. My approach combines user-centered design thinking with practical development skills.</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-item-year">2025</div>
              <div className="timeline-item-title">Started Design Journey</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-year">2026</div>
              <div className="timeline-item-title">Mastered Figma & UI/UX</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-year">2023</div>
              <div className="timeline-item-title">Frontend Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
