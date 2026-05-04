function Hero({
  credibilityPoints,
  hasCustomProfilePhoto,
  isAdmin,
  onClearProfilePhoto,
  onProfileUpload,
  profileMessage,
  profilePhoto,
}) {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          IT Support Specialist | Web Developer | Documentation & Report Expert
        </p>
        <h1>I build useful web systems and help people solve technical problems clearly.</h1>
        <p className="hero-summary">
          I work across support, development, and documentation, which means I can understand the
          issue, build the tool, and explain the solution in plain language.
        </p>

        <div className="credibility-list" aria-label="Portfolio strengths">
          {credibilityPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>

        <div className="proof-strip" aria-label="Professional strengths">
          <div>
            <strong>Support</strong>
            <span>real users and real pressure</span>
          </div>
          <div>
            <strong>Builds</strong>
            <span>React and Node workflows</span>
          </div>
          <div>
            <strong>Writing</strong>
            <span>reports, guides, handovers</span>
          </div>
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Start a Conversation
          </a>
        </div>
      </div>

      <aside className="profile-panel" aria-label="Morgan Muraya professional profile">
        <div className="profile-card-top">
          <span>Profile</span>
          <span>Available for work</span>
        </div>

        <div className="portrait-frame">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Morgan Muraya profile" />
          ) : (
            <div className="portrait-mark">
              <span>MM</span>
              <small>Profile photo space</small>
            </div>
          )}
        </div>

        {isAdmin && (
          <div className="profile-photo-manager">
            <div>
              <strong>
                {hasCustomProfilePhoto ? "Custom profile photo added" : "Replace default profile photo"}
              </strong>
              <p>Choose a clear portrait. It saves in this browser after upload.</p>
            </div>
            <input
              className="profile-file-input"
              type="file"
              accept="image/*"
              onChange={onProfileUpload}
            />
            {hasCustomProfilePhoto && (
              <button className="text-button" type="button" onClick={onClearProfilePhoto}>
                Remove photo
              </button>
            )}
            {profileMessage && <p className="profile-message">{profileMessage}</p>}
          </div>
        )}

        <div>
          <p className="panel-label">Morgan Muraya</p>
          <h2>Support-minded developer with a bias for clean work and clear communication.</h2>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
