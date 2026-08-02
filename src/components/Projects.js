import RevealSection from './RevealSection';

export default function Projects() {
  return (
    <RevealSection id="projects">
      <div className="section__head">
        <span className="section__no">03</span>
        <h2>Projects</h2>
      </div>
      <p className="section__sub">
        Applying data analysis to operational problems and public datasets.
      </p>

      <div className="ledger">
        <article className="entry">
          <div className="entry__body">
            <h3>
              Banking Complaint-Report Dashboard
              <span className="entry__at"> — Python, Tableau</span>
            </h3>
            <p className="entry__note">
              <strong>Problem:</strong> Needed a clear way to categorize and visualize recurring customer service issues from daily logs.<br/>
              <strong>Approach:</strong> Modeled on real daily complaint reports, cleaned and categorized sample data using Python (Pandas), and built an interactive dashboard in Tableau.<br/>
              <strong>Insight:</strong> Identified peak times for specific transaction failures, allowing for targeted process improvements.
            </p>
            <a href="#" className="entry__link">View Dashboard on Tableau Public →</a>
          </div>
        </article>

        <article className="entry">
          <div className="entry__body">
            <h3>
              Retail Banking Customer Segmentation
              <span className="entry__at"> — Python, scikit-learn, Seaborn</span>
            </h3>
            <p className="entry__note">
              <strong>Problem:</strong> Understanding distinct customer behaviors to better target banking products.<br/>
              <strong>Approach:</strong> Performed Exploratory Data Analysis (EDA) and K-Means clustering on a public banking dataset.<br/>
              <strong>Insight:</strong> Segmented customers into three distinct groups, highlighting a high-frequency, low-value transactor segment.
            </p>
            <a href="#" className="entry__link">View Repository on GitHub →</a>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}
