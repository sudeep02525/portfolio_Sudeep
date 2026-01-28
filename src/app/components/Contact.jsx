"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Let's Work Together</h2>
        <p className="contact-text">Have a project in mind or want to collaborate? I'm always open to exciting opportunities.</p>
        
        <div className="contact-icons">
          <a href="mailto:sudeepdas2525@zohomail.in" className="contact-icon" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/sudeep-das-77a3b3379" className="contact-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sudeep-das" className="contact-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/sudeep_das" className="contact-icon" title="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
