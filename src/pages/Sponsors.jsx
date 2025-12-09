import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function Sponsors() {
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
                <h1 className="section-title">Our Sponsors</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-info" role="alert">
                <p style={{marginBottom: '0'}}>
                  <strong>Thank you to all our sponsors and supporters!</strong> Their generous contributions help make NCVPRIPG-2026 a success. 
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '20px', textAlign: 'center'}}>
                <strong>Interested in Sponsoring?</strong>
              </h5>
              <p style={{textAlign: 'center', marginBottom: '20px'}}>
                We welcome sponsorships from organizations and companies interested in supporting the computer vision and pattern recognition research community.
              </p>
              <div style={{textAlign: 'center'}}>
                <button style={{
                  backgroundColor: '#70b60a',
                  color: 'white',
                  border: 'none',
                  padding: '10px 30px',
                  borderRadius: '4px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}>
                  <a href="/call-for-sponsorship" style={{color: 'white', textDecoration: 'none'}}>
                    View Sponsorship Opportunities
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
