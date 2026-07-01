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
      </nav>
      <p>(c) 2026 Morgan Muraya. IT Support Specialist | Full-Stack Developer | Technical Writer</p>
    </footer>
  );
}

export default Footer;
