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
          <div className="entry__date">
            <span className="entry__from">Portfolio</span>
            <span className="entry__to">Project</span>
          </div>
          <div className="entry__body">
            <h3>
              Bee Cycle Sales Dashboard
              <span className="entry__at"> — Python, Streamlit, Plotly</span>
            </h3>
            <p className="entry__note">
              <strong>Problem:</strong> Needed to analyze and visualize sales data, customer demographics, and regional performance to identify growth opportunities.<br/>
              <strong>Approach:</strong> Built an interactive dashboard using Streamlit and Plotly to explore sales trends across time, age, gender, and geography.<br/>
              <strong>Insight:</strong> Uncovered key demographic and regional drivers of sales performance.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a href="https://github.com/Sidaman30/Project-Dashboard-Penjualan-Bee-Cycle" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '8px 16px', fontSize: '12px' }}>View Repository on GitHub →</a>
            </div>
          </div>
        </article>

        <article className="entry">
          <div className="entry__date">
            <span className="entry__from">Portfolio</span>
            <span className="entry__to">Project</span>
          </div>
          <div className="entry__body">
            <h3>
              Telco Customer Churn Analytics
              <span className="entry__at"> — Python, Pandas, Matplotlib</span>
            </h3>
            <p className="entry__note">
              <strong>Problem:</strong> Needed to understand data structure, identify quality issues, and uncover the key drivers of customer churn.<br/>
              <strong>Approach:</strong> Performed a comprehensive Exploratory Data Analysis (EDA) on the Telco Customer Churn dataset, exploring relationships between variables.<br/>
              <strong>Insight:</strong> Identified critical variables and patterns that strongly correlate with customer attrition.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a href="https://github.com/Sidaman30/Telco-Customer-Churn-Pro-Analytics" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '8px 16px', fontSize: '12px' }}>View Repository on GitHub →</a>
            </div>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}
