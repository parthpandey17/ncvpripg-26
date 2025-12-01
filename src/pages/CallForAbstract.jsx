import React, { useEffect } from 'react';

function CallForAbstract() {
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
                <h1 className="section-title">Call for Abstracts</h1>
                <p className="section-subtitle">
                  <strong>(under Student Research Symposium)</strong>
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div style={{textAlign: 'justify', lineHeight: '1.8'}}>
                    <p>
                      We invite abstracts from students for the first student research symposium at NCVPRIPG 2026. Students can submit abstracts on their research works in the field of computer vision, image processing, pattern recognition, and computer graphics. The abstract should not exceed 1500 characters. Abstracts will be selected for presentation at NCVPRIPG 2026 by a review committee. Best presentations will be awarded. The winners may also get internship opportunities in academia or industries.
                    </p>
                    <br />
                    <p>
                      <strong>Eligibility:</strong> Students pursuing bachelor's, master's, or Ph.D. degrees in engineering and science and working on problems related to computer vision, image processing, pattern recognition, and computer graphics can submit the abstracts.
                    </p>
                    <br />
                    <p>
                      Please submit your abstract <a href="https://forms.gle/meAieSBBzp5NyBzd6" target="_blank" rel="noopener noreferrer">here</a>. Please note that any other mode of submission (e.g., via emails to organizers) would not be considered.
                    </p>
                    <p style={{fontWeight: 'bold', marginTop: '20px'}}>Important Dates:</p>
                    <ul style={{marginLeft: '20px'}}>
                      <li>Abstract submission: <s>May 30, 2026</s> June 14, 2026</li>
                      <li>Notification to selected candidates: <s>June 15, 2026</s> June 30, 2026</li>
                      <li>Actual Event: July 22-24, 2026</li>
                    </ul>
                    <br />
                    <p>
                      In case of any queries please contact us at the following email id: <strong>ncvpripg2026@lnmiit.ac.in</strong>. Please include the Student Research Symposium in the subject of your email.
                    </p>

                    <div className="mt-5 pt-4 border-top">
                      <h5>Submit Your Abstract:</h5>
                      <a href="https://forms.gle/meAieSBBzp5NyBzd6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-3">
                        <i className="fas fa-external-link-alt"></i> Open Submission Form
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

export default CallForAbstract;
