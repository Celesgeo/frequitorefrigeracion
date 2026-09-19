import { tickerPhrases } from "@/data/content";

export function TickerBar() {
  return (
    <section className="ticker" aria-label="Criterios de Fresquito">
      <p className="sr-only">{tickerPhrases.join(". ")}.</p>
      <div className="ticker-viewport" aria-hidden="true">
        <div className="ticker-track">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>
    </section>
  );
}

function TickerGroup() {
  return (
    <ul className="ticker-group">
      {tickerPhrases.map((phrase) => (
        <li key={phrase} className="ticker-item">
          <span className="ticker-mark" />
          {phrase}
        </li>
      ))}
    </ul>
  );
}
