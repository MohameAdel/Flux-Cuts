import { audienceCards } from "../content";
import { AudienceIcon } from "./AudienceIcon";

export function WhoItsForSection() {
  return (
    <section className="who-section" aria-labelledby="who-title">
      <div className="who-inner">
        <div className="who-header">
          <h2 id="who-title">Who It's For</h2>
          <p>
            Built for brands that run paid Meta ads and need more creative
            without the overhead of shoots, studios, or agencies charging 10x
            more.
          </p>
        </div>

        <div className="who-grid">
          {audienceCards.map((card) => (
            <article className="who-card" key={card.title}>
              <div className="who-card-icon">
                <AudienceIcon icon={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              {card.link ? <a href="#products">{card.link}</a> : null}
            </article>
          ))}
        </div>

        <a className="section-button" href="#pricing">
          View pricing
        </a>
      </div>
    </section>
  );
}
