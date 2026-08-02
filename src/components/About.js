import RevealSection from './RevealSection';

export default function About() {
  return (
    <RevealSection id="about">
      <div className="section__head">
        <span className="section__no">01</span>
        <h2>About</h2>
      </div>
      <div className="about__grid">
        <p className="about__lede">
          Operations and reporting professional with 3+ years of hands-on banking experience — cash handling, transaction processing, and customer service at PT Bank Victoria International, Tbk — combined with a growing skill set in data analysis (SQL, Python, Tableau) through an ongoing Data Science program.
        </p>
        <div className="about__body">
          <p>
            Academic foundation built on rigor: Cum Laude Agribusiness degree (GPA 3.91/4.00) and a national scholarship (BIDIKMISI). Comfortable leading teams, coordinating cross-functionally, and communicating with international stakeholders in English (B2).
          </p>
          <p>
            Currently applying data analysis skills to operational and financial reporting problems.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
