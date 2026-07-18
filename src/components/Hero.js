export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__seal" aria-hidden="true">
        <svg viewBox="0 0 160 160" className="stamp stamp--hero">
          <circle cx="80" cy="80" r="72" className="stamp__ring-outer" />
          <circle cx="80" cy="80" r="60" className="stamp__ring-inner" />
          <path
            id="stampCirclePath"
            d="M 80,20 A 60,60 0 1 1 79.9,20"
            fill="none"
          />
          <text className="stamp__arctext">
            <textPath href="#stampCirclePath" startOffset="2%">
              VERIFIED · RECORD ON FILE · JAKARTA ·
            </textPath>
          </text>
          <text x="80" y="72" className="stamp__initials">
            F·E·P·S
          </text>
          <text x="80" y="96" className="stamp__role">
            TELLER
          </text>
        </svg>
      </div>

      <p className="eyebrow">Statement of Professional Record</p>
      <h1 className="hero__name">
        Fepi Efta Pioni
        <br />
        Sidabalok
      </h1>
      <p className="hero__title">Finance &amp; Operations Associate</p>
      <p className="hero__desc">
        Three years of banking operations behind every number on this page —
        cash handled to the rupiah, complaints resolved same-day, reports filed
        on time. Currently building a second set of skills in data analysis to
        bring more precision to operational reporting.
      </p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#contact">
          Get in touch
        </a>
        <a
          className="btn btn--ghost"
          href="/assets/Fepi_Sidabalok_CV.pdf"
          download
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="ledger-stats" role="list">
        <div className="ledger-stat" role="listitem">
          <span className="ledger-stat__num">3+</span>
          <span className="ledger-stat__unit">yrs</span>
          <span className="ledger-stat__label">Banking operations</span>
        </div>
        <div className="ledger-stat" role="listitem">
          <span className="ledger-stat__num">20+</span>
          <span className="ledger-stat__unit">/day</span>
          <span className="ledger-stat__label">Customer issues resolved</span>
        </div>
        <div className="ledger-stat" role="listitem">
          <span className="ledger-stat__num">&lt;2</span>
          <span className="ledger-stat__unit">min</span>
          <span className="ledger-stat__label">Per transaction</span>
        </div>
        <div className="ledger-stat" role="listitem">
          <span className="ledger-stat__num">3.91</span>
          <span className="ledger-stat__unit">/4.00</span>
          <span className="ledger-stat__label">GPA, cum laude</span>
        </div>
      </div>
    </section>
  );
}
