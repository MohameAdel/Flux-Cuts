import { compareRows } from "../content";

export function CompareSection() {
  return (
    <section id="compare" className="compare-section" aria-labelledby="compare-title">
      <div className="compare-block">
        <h2 id="compare-title">How We Compare</h2>

        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Cost per video</th>
                <th>Monthly total</th>
                <th>Videos per month</th>
                <th>You save</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr
                  className={row.highlight ? "highlight" : undefined}
                  key={row.company}
                >
                  <td>
                    {row.highlight ? (
                      <span className="checkmark" aria-hidden="true">
                        &#10003;
                      </span>
                    ) : null}
                    {row.company}
                  </td>
                  <td>{row.cost}</td>
                  <td>{row.monthly}</td>
                  <td>{row.videos}</td>
                  <td>{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compare-cards">
          {compareRows.map((row) => (
            <article
              className={`compare-card${row.highlight ? " highlight" : ""}`}
              key={row.company}
            >
              <h3>
                {row.highlight ? (
                  <span className="checkmark" aria-hidden="true">
                    &#10003;
                  </span>
                ) : null}
                {row.company}
              </h3>
              <p>
                <span>Cost per video</span>
                <strong>{row.cost}</strong>
              </p>
              <p>
                <span>Monthly total</span>
                <strong>{row.monthly}</strong>
              </p>
              <p>
                <span>Videos per month</span>
                <strong>{row.videos}</strong>
              </p>
              <p>
                <span>You save</span>
                <strong>{row.savings}</strong>
              </p>
            </article>
          ))}
        </div>

        <p className="disclaimer">
          Prices based on publicly available information. Competitor pricing may
          vary by plan or volume.
        </p>
      </div>
    </section>
  );
}
