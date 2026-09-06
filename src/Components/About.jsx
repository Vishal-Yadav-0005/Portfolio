function About() {
  return (
    <section id="about" className="section">

      <div className="section-container">

        <div className="section-heading">
          <span>ABOUT ME</span>
          <h2>Turning ideas into <strong>digital experiences</strong></h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm Vishal Yadav, a passionate Frontend Developer
              interested in creating modern and responsive websites.
            </p>

            <p>
              I have been learning React.js, JavaScript, HTML and CSS
              and enjoy building projects to improve my development skills.
            </p>

            <p>
              I'm currently focused on becoming a strong React Developer
              and My goal is to write clean code and continuously improve
              my development skills by building real-world projects.
            </p>

            <a href="#contact" className="primary-btn">
              Let's Work Together →
            </a>

          </div>

          <div className="about-cards">

            <div className="info-card">
              <div className="info-icon">⚛️</div>
              <h3>React Developer</h3>
              <p>
                Building reusable and scalable React components.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🎨</div>
              <h3>UI Focused</h3>
              <p>
                Creating clean and attractive user interfaces.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Responsive</h3>
              <p>
                Websites that work perfectly on every device.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h3>Performance</h3>
              <p>
                Fast and optimized web experiences.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;