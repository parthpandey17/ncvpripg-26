import React, { useEffect } from 'react';

function Industry() {
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
                <h1 className="section-title">Industry Speakers</h1>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="alert alert-success" role="alert">
                    <h5 className="alert-heading">Industry Insights</h5>
                    <p className="mb-0">
                      Learn from industry professionals and explore real-world applications of Computer Vision, Image Processing, and Pattern Recognition in cutting-edge products and services.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h5 className="mb-4">Industry Track Program</h5>
                    <p className="mb-3">
                      Our industry speakers bring decades of combined experience from leading tech companies, startups, and research organizations. They will share insights on:
                    </p>
                    <ul style={{marginLeft: '20px', lineHeight: '2'}}>
                      <li>Current trends and challenges in industry applications</li>
                      <li>Deployment of AI/ML and Computer Vision solutions</li>
                      <li>Career opportunities and internship programs</li>
                      <li>Innovation and R&D practices</li>
                      <li>Best practices for scaling vision systems</li>
                    </ul>

                    <div className="mt-5 p-4" style={{backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
                      <h6>Benefits of Attending Industry Sessions:</h6>
                      <ul style={{marginLeft: '20px'}}>
                        <li>Network with industry professionals</li>
                        <li>Explore job and internship opportunities</li>
                        <li>Learn about industry best practices</li>
                        <li>Understand market demands and trends</li>
                      </ul>
                    </div>

                    <div className="mt-5 pt-4 border-top text-center">
                      <p className="mb-3">For more details, check the conference schedule</p>
                      <a href="/program" className="btn btn-primary">
                        View Conference Schedule
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

export default Industry;
