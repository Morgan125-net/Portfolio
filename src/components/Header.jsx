function Header() {
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
    </header>
  );
}

export default Header;
