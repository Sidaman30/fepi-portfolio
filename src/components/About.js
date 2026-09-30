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
          Finance and operations professional with three-plus years of hands-on
          banking experience — cash handling, transaction processing, and
          customer service at PT Bank Victoria International, Tbk.
        </p>
        <div className="about__body">
          <p>
            Every working day runs on the same discipline: transactions closed
            in under two minutes, cash accounted for to the last rupiah, and
            more than twenty customer questions resolved without letting service
            quality slip. That discipline was built early — a Cum Laude degree
            in Agribusiness, a national scholarship, and a habit of being the
            one teams put in charge of the details.
          </p>
          <p>
            Alongside the day job, I&apos;m adding a second skill set in data
            analysis and reporting — SQL, Python, and dashboarding tools — to
            bring sharper, evidence-based reporting to operations work.
            Comfortable coordinating across teams and with international
            stakeholders in English (B2).
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
