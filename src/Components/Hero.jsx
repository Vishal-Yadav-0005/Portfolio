import profile from "../assets/Profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg-circle"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hello-badge">
            👋 Hello, I'm
          </div>

          <h1>
            Vishal Yadav
          </h1>

          <h2>
            FullStack <span>Developer</span>
          </h2>

          <p>
            I build modern, responsive and user-friendly websites
            using React.js and modern web technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
              <span>→</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
              <span>✉</span>
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#">
              Twitter
            </a>

            <a href="#">
              Instagram
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-glow"></div>

          <div className="profile-circle">
            <img
              src={profile}
              alt="Vishal Yadav"
            />
          </div>

          {/* <div className="floating-card card-one">
            <span>⚛️</span>
            React.js
          </div> */}

          <div className="floating-card card-two">
            <span>💻</span>
            Developer
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;