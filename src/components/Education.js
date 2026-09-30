import RevealSection from './RevealSection';

export default function Education() {
  return (
    <RevealSection id="education">
      <div className="section__head">
        <span className="section__no">05</span>
        <h2>Education</h2>
      </div>

      <div className="ledger">
        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Jun 2025</span>
            <span className="entry__to">Present</span>
          </div>
          <div className="entry__body">
            <h3>
              Data Science Program{' '}
              <span className="entry__at">— Dibimbing</span>
            </h3>
            <p className="entry__note">
              Business problem framing, statistics &amp; data exploration,
              Python, SQL, data visualization (Tableau), spreadsheets, data
              communication.<br/>
              <em>Project: Applied coursework to a sample banking-complaint dashboard project.</em>
            </p>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Aug 2018</span>
            <span className="entry__to">Oct 2022</span>
          </div>
          <div className="entry__body">
            <h3>
              B.Agr., Agribusiness{' '}
              <span className="entry__at">— HKBP Nommensen University</span>
            </h3>
            <p className="entry__note">
              GPA 3.91 / 4.00 — graduated Cum Laude. BIDIKMISI National
              Scholarship recipient, 2018–2022.
            </p>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}
