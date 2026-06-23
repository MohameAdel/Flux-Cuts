import { howSteps } from "../content";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section" aria-labelledby="how-title">
      <div className="how-inner">
        <h2 id="how-title">How It Works</h2>

        <div className="how-grid">
          {howSteps.map((step) => (
            <article className="how-step" key={step.number}>
              <span className="step-num" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>

        <a className="section-button" href="https://wa.me/966554085657">
          Book a discovery call
        </a>
      </div>
    </section>
  );
}
