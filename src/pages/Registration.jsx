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
                <div className="col-lg-10 col-md-12 text-center">
                  <div style={{ padding: '60px 20px', background: '#f8f9fa', borderRadius: '8px', marginTop: '40px' }}>
                    <i className="lni lni-construction" style={{ fontSize: '64px', color: '#70b60a', marginBottom: '20px', display: 'block' }}></i>
                    <h2 style={{ color: '#333', marginBottom: '20px' }}>Under Construction</h2>
                    <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                      Registration details will be available soon.
                    </p>
                    <p style={{ marginTop: '30px', color: '#666' }}>
                      For any queries, please contact: <a href="mailto:ncvpripg2026@lnmiit.ac.in">ncvpripg2026@lnmiit.ac.in</a>
                    </p>
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
