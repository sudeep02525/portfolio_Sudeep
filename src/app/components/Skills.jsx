export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-heading">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>🎨 Design Skills</h3>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Figma</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '95%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>UI/UX Design</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Wireframing</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Prototyping</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '88%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Design Systems</span>
                <span>82%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '82%'}}></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h3>💻 Coding Skills</h3>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>HTML5</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '95%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>CSS3</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>JavaScript</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '88%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Responsive Design</span>
                <span>93%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '93%'}}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-item-name">
                <span>Git & GitHub</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
