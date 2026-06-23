import { modelUrl } from "../content";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <h1 id="hero-title">
          We produce high-converting
          <br />
          AI ad creatives.
          <br />
          No creators. No shoots.
        </h1>

        <img
          className="hero-model"
          src={modelUrl}
          alt="Woman in pink dress in meditation pose"
        />

        <p className="tagline">AI ads that don't look like AI</p>

        <a className="cta-button" href="https://wa.me/966554085657">
          Get your free ad
        </a>

        <p
          className="proof"
          aria-label="Five stars. Built for brands scaling with AI ads."
        >
          <span className="stars" aria-hidden="true">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span>Built for brands scaling with AI ads</span>
        </p>
      </div>
    </section>
  );
}
