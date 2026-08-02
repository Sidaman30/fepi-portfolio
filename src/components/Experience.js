import RevealSection from './RevealSection';

export default function Experience() {
  return (
    <RevealSection id="experience">
      <div className="section__head">
        <span className="section__no">02</span>
        <h2>Experience</h2>
      </div>
      <p className="section__sub">
        A running ledger of roles and results, most recent first.
      </p>

      <div className="ledger">
        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Jun 2023</span>
            <span className="entry__to">Present</span>
          </div>
          <div className="entry__body">
            <h3>
              Teller{' '}
              <span className="entry__at">
                — PT Bank Victoria Internasional Tbk, West Jakarta
              </span>
            </h3>
            <ul>
              <li>
                Process 20+ daily banking transactions — payments, deposits,
                withdrawals, transfers — each in under 2 minutes with zero cash
                discrepancies
              </li>
              <li>
                Resolve 20+ customer questions and complaints per day under time
                pressure, without a drop in service quality
              </li>
              <li>
                Managed daily cash inventory with zero discrepancies, ensuring accurate fund availability for branch operations
              </li>
              <li>
                Compiled and analyzed daily customer complaint reports, identifying recurring service issues used by the business team to drive process improvements
              </li>
            </ul>
          </div>
          <div className="entry__stamp" aria-hidden="true">
            <svg viewBox="0 0 90 90" className="stamp stamp--mini">
              <circle cx="45" cy="45" r="40" className="stamp__ring-outer" />
              <text x="45" y="41" className="stamp__mini-text">
                CURRENT
              </text>
              <text x="45" y="55" className="stamp__mini-text">
                ROLE
              </text>
            </svg>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Mar 2023</span>
            <span className="entry__to">May 2023</span>
          </div>
          <div className="entry__body">
            <h3>
              Purchasing Staff{' '}
              <span className="entry__at">
                — PT. Petra Abadi Integrasi, North Jakarta
              </span>
            </h3>
            <ul>
              <li>
                Sourced and purchased items to internal requirements, managing
                end-to-end procurement
              </li>
              <li>
                Negotiated pricing terms with suppliers to optimize cost
                efficiency
              </li>

              <li>
                Prepared invoices, purchase orders, and goods-receipt
                documentation
              </li>
            </ul>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Oct 2022</span>
            <span className="entry__to">Jan 2023</span>
          </div>
          <div className="entry__body">
            <h3>
              Assistant Lecturer{' '}
              <span className="entry__at">
                — HKBP Nommensen University
              </span>
            </h3>
            <ul>
              <li>
                Assessed assignments and delivered feedback to ~40 students
                across Community Empowerment and Research Methodology
              </li>
              <li>
                Prepared accountability reports on practicum activities for
                supervising lecturers
              </li>
            </ul>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Jul 2021</span>
            <span className="entry__to">Aug 2021</span>
          </div>
          <div className="entry__body">
            <h3>
              Intern{' '}
              <span className="entry__at">
                — PT. Sinar Gunung Sawit Raya, North Sumatra
              </span>
            </h3>
            <ul>
              <li>
                Supported production management, processing through marketing,
                for Crude Palm Oil (CPO)
              </li>
              <li>
                Assisted in preparing sales reports for CPO and Palm Kernel Oil
                (PKO)
              </li>
            </ul>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}
