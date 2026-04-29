function Header({
  adminPanelOpen,
  isAdmin,
  onAdminLock,
  onAdminPanelToggle,
  onThemeToggle,
  theme,
}) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Morgan Muraya home">
        MM
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="owner-controls">
        <button
          className="theme-toggle"
          type="button"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "bright" : "dark"} mode`}
        >
          <span className={`theme-icon ${theme}`} aria-hidden="true" />
        </button>

        {isAdmin ? (
          <>
            <span className="owner-badge">Owner mode</span>
            <button className="owner-button" type="button" onClick={onAdminLock}>
              Lock
            </button>
          </>
        ) : (
          <button className="owner-button" type="button" onClick={onAdminPanelToggle}>
            {adminPanelOpen ? "Close" : "Owner"}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
