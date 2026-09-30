import RevealSection from './RevealSection';

export default function Leadership() {
  return (
    <RevealSection id="leadership">
      <div className="section__head">
        <span className="section__no">05</span>
        <h2>Leadership</h2>
      </div>

      <div className="ledger">
        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Jan 2022</span>
            <span className="entry__to">Jan 2023</span>
          </div>
          <div className="entry__body">
            <h3>
              Team Leader{' '}
              <span className="entry__at">
                — Student Research and Discussion Group (KERIS)
              </span>
            </h3>
            <p className="entry__note">
              Led a 4-person team through research projects; managed
              documentation and faculty coordination.
            </p>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Sep 2019</span>
            <span className="entry__to">Feb 2021</span>
          </div>
          <div className="entry__body">
            <h3>
              Team Leader{' '}
              <span className="entry__at">
                — Student Creativity Program (PKM)
              </span>
            </h3>
            <p className="entry__note">
              Directed a 4-person research team from idea to execution.
              University award for outstanding participation.
            </p>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Mar 2019</span>
            <span className="entry__to">Dec 2019</span>
          </div>
          <div className="entry__body">
            <h3>
              Member{' '}
              <span className="entry__at">
                — Entrepreneurship Student Activity Unit (UKMK)
              </span>
            </h3>
            <p className="entry__note">
              Helped develop and run programs for the university&apos;s 65th
              Anniversary celebrations.
            </p>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}
