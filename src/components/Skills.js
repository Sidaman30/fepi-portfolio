import RevealSection from './RevealSection';

export default function Skills() {
  return (
    <RevealSection id="skills">
      <div className="section__head">
        <span className="section__no">03</span>
        <h2>Skills</h2>
      </div>

      <div className="skills__grid">
        <div className="skill-cat">
          <h3>Banking &amp; Financial Operations</h3>
          <ul className="tags">
            <li>Cash management</li>
            <li>Transaction processing</li>
            <li>Reconciliation</li>
            <li>Cash accountability</li>
          </ul>
        </div>
        <div className="skill-cat">
          <h3>Operations &amp; Reporting</h3>
          <ul className="tags">
            <li>Daily reporting</li>
            <li>Invoicing</li>
            <li>Purchase orders</li>
            <li>Vendor coordination</li>
          </ul>
        </div>
        <div className="skill-cat">
          <h3>Client &amp; Stakeholder Communication</h3>
          <ul className="tags">
            <li>Customer service</li>
            <li>Complaint resolution</li>
            <li>Cross-team coordination</li>
            <li>English (B2)</li>
          </ul>
        </div>
        <div className="skill-cat">
          <h3>Tools &amp; Software</h3>
          <ul className="tags">
            <li>Excel (formulas, pivots)</li>
            <li>Google Sheets</li>
            <li>Tableau</li>
            <li>Google Data Studio</li>
            <li>SQL</li>
            <li>Python (pandas, numpy)</li>
          </ul>
        </div>
        <div className="skill-cat">
          <h3>Leadership &amp; Soft Skills</h3>
          <ul className="tags">
            <li>Team leadership</li>
            <li>Time management</li>
            <li>Problem-solving</li>
            <li>Adaptability</li>
            <li>Integrity</li>
          </ul>
        </div>
        <div className="skill-cat">
          <h3>Languages</h3>
          <ul className="tags">
            <li>Indonesian — native</li>
            <li>English — B2</li>
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
