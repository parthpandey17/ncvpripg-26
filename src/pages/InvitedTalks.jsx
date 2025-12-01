import React, { useEffect } from 'react';

function InvitedTalks() {
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
                <h1 className="section-title">Invited Talks</h1>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="alert alert-info" role="alert">
                    <h5 className="alert-heading">Featured Talks</h5>
                    <p className="mb-0">
                      Join us for insightful presentations by industry leaders and renowned researchers in the fields of Computer Vision, Image Processing, Pattern Recognition, and Computer Graphics.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h5 className="mb-4">Conference Schedule</h5>
                    <p className="text-muted">
                      Invited talks will be held during the main conference sessions on July 22-24, 2026. Detailed schedule and speaker information will be available soon.
                    </p>

                    <div className="mt-4 p-4" style={{backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
                      <h6>How to Access Talks:</h6>
                      <ul style={{marginLeft: '20px'}}>
                        <li>Register for the conference</li>
                        <li>Download the event app/program</li>
                        <li>Check the schedule for session timings</li>
                        <li>Join the sessions at specified venues</li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-4 border-top text-center">
                      <a href="/registration" className="btn btn-primary">
                        Register Now to Attend
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

export default InvitedTalks;
