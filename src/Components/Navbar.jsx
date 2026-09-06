import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          <span>VY</span>
          Vishal Yadav
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="cv-btn">
            Download CV
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;