function Footer() {
  const footerLinks = ["About", "Experience", "Projects", "Contact"];

  return (
    <footer className="site-footer">
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a href={`#${link.toLowerCase()}`} key={link}>
            {link}
          </a>
        ))}
        <a href="https://github.com/Morgan125-net" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {/* TODO: add LinkedIn once you share the URL — <a href="...">LinkedIn</a> */}
      </nav>
      <p>(c) 2026 Morgan Muraya. Full-Stack Developer | IT Support Specialist | Technical Writer</p>
    </footer>
  );
}

export default Footer;
