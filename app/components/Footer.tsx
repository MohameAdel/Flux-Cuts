import { footerGroups, logoUrl } from "../content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logoUrl} alt="Flux Cuts" />
          <p>
            AI-powered ad creative production. No shoots. No studios. No
            compromise.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-links" key={group.heading}>
            <h2>{group.heading}</h2>
            {group.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Flux Cuts. All rights reserved.</span>
        <span>Built for creators, brands, and agencies.</span>
      </div>
    </footer>
  );
}
