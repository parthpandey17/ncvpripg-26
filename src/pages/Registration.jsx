import React, { useEffect } from 'react';

function Registration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 className="section-title">Registration</h1>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="registration-info">
                    <p style={{textAlign: 'justify', lineHeight: '1.8'}}>
                      The Online Registration has been closed. For the onsite registration rates and link, please drop an email to 
                      <strong> ncvpripgiist@gmail.com</strong>
                      <br />
                      <br />
                      Due to multiple student requests, we have extended the Early Bird deadline to <strong>July 7, 2026</strong>.
                      <br />
                      <br />
                      <strong>
                        The registration includes entry to all Technical Sessions, a Conference Kit, refreshments and Gala Dinner served during the conference days.
                      </strong>
                      <br />
                      <br />
                      An invoice for the registration fee payment will be generated for every registration.
                      <br />
                      <br />
                      Certificates will be provided to all registered participants.
                      <br />
                      <br />
                      For onsite registration and rates, as well as additional information and inquiries, please send an email to 
                      <strong> ncvpripgiist@gmail.com</strong>.
                    </p>

                    <div className="mt-5 pt-5 border-top">
                      <h3 className="mb-4">Registration Instructions:</h3>
                      <ol style={{lineHeight: '2'}}>
                        <li>Click on the "Register Now" button to access the online registration portal.</li>
                        <li>Fill out the registration form with accurate details.</li>
                        <li>Choose the appropriate registration type based on your affiliation and status.</li>
                        <li>Upload proof of registration type (Scanned copy of your student/employee ID card)</li>
                        <li>After filling all the mandatory fields, click 'Register' to generate your Registration ID and Password. These details will be emailed to your registered email ID.</li>
                        <li>To complete the registration process, proceed to Pay Registration Fee link after obtaining your Registration ID and Password.</li>
                        <li>The fee details will be displayed based on the registration type. Complete the online payment.</li>
                      </ol>
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-muted mb-3">For more information and support:</p>
                      <h5>
                        <a href="mailto:ncvpripgiist@gmail.com" className="btn btn-primary">
                          <i className="fas fa-envelope"></i> Contact Registration Support
                        </a>
                      </h5>
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

export default Registration;
