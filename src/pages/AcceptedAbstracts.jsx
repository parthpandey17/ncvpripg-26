import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function AcceptedAbstracts() {
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
                <h1 className="section-title">ACCEPTED ABSTRACTS</h1>
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
                  The list of accepted abstracts will be updated here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AcceptedAbstracts;
