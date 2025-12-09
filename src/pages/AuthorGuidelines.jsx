import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function AuthorGuidelines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">AUTHOR GUIDELINES</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="alert alert-info text-center" role="alert" style={{
                backgroundColor: '#f8f9fa',
                border: '2px solid #70b60a',
                borderRadius: '8px',
                padding: '40px 20px',
                fontSize: '20px',
                color: '#333'
              }}>
                <i className="lni-construction" style={{fontSize: '48px', color: '#70b60a', display: 'block', marginBottom: '20px'}}></i>
                <strong>Under Construction</strong>
                <p style={{marginTop: '15px', fontSize: '16px', marginBottom: '0'}}>
                  Author guidelines will be updated here soon.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12" style={{display: 'none'}}>
              
              {/* Instructions for Preparing Manuscripts */}
              <div className="content-section mb-5">
                <h2 className="section-heading">Instructions for Preparing Manuscripts</h2>
                <p>
                  Prospective authors are invited to submit full-length original research papers. In submitting a manuscript to NCVPRIPG 2025, authors acknowledge that no paper substantially similar in content has been or will be submitted to another journal, conference or workshop during the review period. In such a case, the paper will be rejected without review.
                </p>
                <p>
                  Papers must be electronically submitted to the Microsoft CMT paper submission portal before the deadline expires without exception.
                </p>
                <p>
                  Authors should prepare their manuscripts of 10-15 pages (including all text, figures, and references). The manuscript must be submitted in pdf format only and the file size of your manuscript should not exceed 10 MB as per guidelines of Springer-CCIS Series (<a href="https://www.springer.com/gp/computer-science/lncs" target="_blank" rel="noopener noreferrer">Click</a>). If the final manuscript in Springer format exceeds 15 pages, there will be some additional charges for each extra page.
                </p>
                <p>
                  Use a proper tool to convert the resulting source into a pdf document that has only scalable fonts with all fonts embedded.
                </p>
                <p>
                  The images embedded in the paper must not contain transparent pixels (i.e., an alpha-channel of a transparent color) since this could lead to problems when displaying or printing the pdf.
                </p>
                <p>
                  The pdf manuscript must not have Adobe Document Protection or Document Security enabled.
                </p>
              </div>

              {/* Proceedings */}
              <div className="content-section mb-5">
                <h2 className="section-heading">Proceedings</h2>
                <p>
                  The proceedings of the conference will be published by Scopus Indexed – Springer in <a href="https://www.springer.com/series/7899" target="_blank" rel="noopener noreferrer">Communications in Computer and Information Science series (CCIS)</a>.
                </p>
                <p>
                  As is the policy of the conference will be published in Communications in Computer and Information Science (CCIS) series from Springer CCIS also accepts previously peer-reviewed and published papers. Select papers that have been submitted for inclusion in ISI Proceedings.
                </p>
              </div>

              {/* Preparing Your Paper */}
              <div className="content-section mb-5">
                <h2 className="section-heading">Preparing Your Paper</h2>
                <p>
                  For your convenience, we have summarized in the "Author Guidelines" document how a proceedings paper should be structured, how elements (headings, figures, references) should be formatted using our predefined styles, etc. We also give some insight on how your paper will be typeset at NCVPRIPG. The PDF of the Authors Guidelines can be downloaded here: <a href="/assets/docs/proceedings-guidelines.pdf" target="_blank" rel="noopener noreferrer">Proceedings Guidelines for Authors</a>.
                </p>
                <p>
                  Authors must use the manuscript template specified here. The LaTeX and Word templates can be downloaded from the following links:
                </p>
                <ul className="list-styled">
                  <li><a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener noreferrer">Latex Template</a></li>
                  <li><a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener noreferrer">Word Template</a></li>
                </ul>
                <p>
                  Authors can use the Proceedings Templates available in the scientific authoring platform Overleaf (<a href="https://www.overleaf.com/latex/templates" target="_blank" rel="noopener noreferrer">Template</a>).
                </p>
              </div>

              {/* Instruction for Manuscript Submission
              <div className="content-section mb-5">
                <h2 className="section-heading">Instruction for Manuscript Submission</h2>
                <p>
                  The manuscript has to be uploaded online at the NCVPRIPG 2025 Microsoft Research paper submission portal at the following link:
                </p>
                <p className="text-center my-4">
                  <a href="https://cmt3.research.microsoft.com/NCVPRIPG2025/Submission/Index" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    https://cmt3.research.microsoft.com/NCVPRIPG2025/Submission/Index
                  </a>
                </p>
                <p>
                  Acknowledgement: The Microsoft CMT service is used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                </p>
              </div> */}

              {/* Important Dates */}
              <div className="content-section">
                <h2 className="section-heading">Important Dates:</h2>
                <ul className="list-styled">
                  <li>Submissions Starts: March 15, 2026</li>
                  <li>Submission Ends: April 15, 2026 <span style={{color: '#b60a35', fontWeight: 'bold'}}>May 22, 2025 ("Hard Deadline")</span></li>
                  <li>Review Results: June 15, 2026</li>
                  <li>Final Camera Ready Paper Submission Ends: July 05, 2025</li>
                  <li>Registration Ends: July 05, 2025</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthorGuidelines;
