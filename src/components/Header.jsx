function Header({ onThemeToggle, theme }) {
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

      <button
        className="theme-toggle"
        type="button"
        onClick={onThemeToggle}
        aria-label={`Switch to ${theme === "dark" ? "bright" : "dark"} mode`}
      >
        <span
          className={`theme-symbol ${theme === "dark" ? "gear" : "moon"}`}
          aria-hidden="true"
        >
          {theme === "dark" ? "⚙" : "☾"}
        </span>
      </button>
    </header>
  );
}

export default Header;
