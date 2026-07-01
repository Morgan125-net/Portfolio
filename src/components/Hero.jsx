function Hero({ credibilityPoints, profilePhoto }) {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I'm</p>
        <h1>Morgan Muraya</h1>
        <p className="hero-role">Full-Stack Developer</p>
        <p className="hero-summary">
          I build full-stack web applications with React and Node.js — backed by hands-on IT support
          experience in a live hospital environment and a habit of documenting things clearly along the way.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Info
          </a>
        </div>

        <div className="credibility-list" aria-label="Portfolio strengths">
          {credibilityPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>

        <div className="proof-strip" aria-label="Professional strengths">
          <div>
            <strong>IT Support</strong>
            <span>Real users, high-stakes environments</span>
          </div>
          <div>
            <strong>Development</strong>
            <span>React, Node.js, full-stack solutions</span>
          </div>
          <div>
            <strong>Documentation</strong>
            <span>Reports, guides, knowledge transfer</span>
          </div>
        </div>
      </div>

      <aside className="profile-panel" aria-label="Morgan Muraya professional profile">
        <div className="portrait-frame">
          <img src={profilePhoto} alt="Morgan Muraya profile" />
        </div>
      </aside>
    </section>
  );
}

export default Hero;
