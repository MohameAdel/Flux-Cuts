import { logoUrl } from "../content";

export function Header() {
  const links = [
    { label: "GALLERY", href: "#gallery" },
    { label: "STATEMENT", href: "#statement" },
    { label: "COMPARE", href: "#compare" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "WHO IT'S FOR", href: "#who-its-for" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="nav-inner">
        <button className="hamburger" type="button" aria-label="Open menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        <a className="brand" href="#" aria-label="Flux Cuts home">
          <img src={logoUrl} alt="Flux Cuts" />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn-get-started header-cta" href="https://wa.me/966554085657" aria-label="Get Started">
          GET STARTED
        </a>
      </div>
    </header>
  );
}
