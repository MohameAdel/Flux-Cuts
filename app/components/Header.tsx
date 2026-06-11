import { logoUrl, navItems } from "../content";

export function Header() {
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
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}

          <a className="account-link" href="#" aria-label="Sign in">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
