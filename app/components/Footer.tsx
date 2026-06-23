import { logoUrl } from "../content";

export function Footer() {
  const links = [
    { label: "GALLERY", href: "#gallery" },
    { label: "STATEMENT", href: "#statement" },
    { label: "COMPARE", href: "#compare" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "WHO IT'S FOR", href: "#who-its-for" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logoUrl} alt="Flux" />
        </div>
        
        <nav className="footer-nav">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-cta">
          <a href="https://wa.me/966554085657" className="btn-get-started">GET STARTED</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Flux. All rights reserved.</span>
        <span>AI-powered ads for brands that move fast.</span>
      </div>
    </footer>
  );
}
