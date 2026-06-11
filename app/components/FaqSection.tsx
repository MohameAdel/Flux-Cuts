import { faqItems } from "../content";

export function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <h2 id="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
