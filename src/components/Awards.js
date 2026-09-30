import RevealSection from './RevealSection';

export default function Awards() {
  const awards = [
    {
      title: 'Winner — Student-Level Palm Oil Research Competition Grant',
      meta: 'BPDPKS (Indonesian Government Palm Oil Fund Agency), Ministry of Finance of the Republic of Indonesia · Apr 2022',
    },
    {
      title: 'Chemistry Olympiad Award — Regional Level',
      meta: 'Ministry of Education and Culture · Jul 2021',
    },
    {
      title:
        'Selected Opinion Writer — 40th Anniversary, National Library of Indonesia',
      meta: 'Perpusnas Press · Jul 2020',
    },
    {
      title: 'Biology Olympiad Award — Regional Level',
      meta: 'Ministry of Education and Culture · Aug 2020',
    },
    {
      title: 'English Conversation Certificate',
      meta: 'Language and Cultural Exchange · Dec 2022',
    },
  ];

  return (
    <RevealSection id="awards">
      <div className="section__head">
        <span className="section__no">07</span>
        <h2>Awards &amp; Certificates</h2>
      </div>

      <div className="awards__grid">
        {awards.map((award, i) => (
          <div className="award-card" key={i}>
            <svg
              viewBox="0 0 60 60"
              className="stamp stamp--tiny"
              aria-hidden="true"
            >
              <circle cx="30" cy="30" r="26" className="stamp__ring-outer" />
            </svg>
            <div>
              <p className="award-card__title">{award.title}</p>
              <p className="award-card__meta">{award.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
