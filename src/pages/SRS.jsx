import React, { useEffect } from 'react';

function SRS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Student Research Symposium</h1>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div style={{lineHeight: '1.8', textAlign: 'justify'}}>
                    <h5 className="mb-4">About the Student Research Symposium</h5>
                    <p className="mb-4">
                      The Student Research Symposium (SRS) is a flagship initiative of NCVPRIPG 2026 dedicated to showcase cutting-edge research works by students in the fields of Computer Vision, Image Processing, Pattern Recognition, and Computer Graphics.
                    </p>

                    <h5 className="mt-5 mb-4">Eligibility Criteria</h5>
                    <ul style={{marginLeft: '20px', lineHeight: '2'}}>
                      <li>Bachelor's degree students actively working on research</li>
                      <li>Master's degree students with published or under-review research</li>
                      <li>Ph.D. students with significant research contributions</li>
                      <li>Research must be in CV, IP, PR, or Computer Graphics domains</li>
                    </ul>

                    <h5 className="mt-5 mb-4">Submission Guidelines</h5>
                    <ol style={{marginLeft: '20px', lineHeight: '2'}}>
                      <li>Submit abstracts of not more than 1500 characters</li>
                      <li>Include title, authors, affiliations, and key findings</li>
                      <li>Focus on novel contributions and methodology</li>
                      <li>Selected candidates will present their work during the symposium</li>
                    </ol>

                    <h5 className="mt-5 mb-4">Key Dates</h5>
                    <ul style={{marginLeft: '20px', lineHeight: '2'}}>
                      <li>Abstract Submission Deadline: June 14, 2026</li>
                      <li>Notification of Acceptance: June 30, 2026</li>
                      <li>Symposium Event: July 22-24, 2026</li>
                    </ul>

                    <h5 className="mt-5 mb-4">Awards & Recognition</h5>
                    <p className="mb-3">
                      Outstanding presentations will be recognized with awards and potential internship opportunities in leading academic institutions and industry partners.
                    </p>

                    <div className="mt-5 pt-4 border-top text-center">
                      <a href="/call-for-abstract" className="btn btn-primary btn-lg">
                        <i className="fas fa-pencil-alt"></i> Submit Your Abstract
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SRS;
