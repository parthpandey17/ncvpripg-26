import React, { useEffect } from 'react';

function Accommodation() {
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
                <h1 className="section-title">Accommodation</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-info" role="alert">
                <strong>Note:</strong> Accommodation is available on <strong>payment basis</strong> at LNMIIT Jaipur and nearby places.
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '16px'}}>
                Information regarding accommodation options and booking procedures will be provided closer to the conference date. 
              </p>
              {/* <p style={{textAlign: 'center', marginBottom: '30px', fontSize: '16px'}}>
                For accommodation inquiries, please contact us at <a href="mailto:ncvpripgiist@gmail.com">ncvpripgiist@gmail.com</a>
              </p> */}
            </div>
          </div>

          {/* <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="card p-4" style={{backgroundColor: '#f8f9fa', borderLeft: '4px solid #70b60a'}}>
                <h5 style={{color: '#70b60a', marginBottom: '15px'}}>
                  <strong>Accommodation Information</strong>
                </h5>
                <p style={{marginBottom: '10px'}}>
                  LNMIIT Jaipur and its surrounding area have various accommodation options ranging from budget to premium hotels and guest houses.
                </p>
                <p style={{marginBottom: '10px'}}>
                  Attendees are requested to make their own arrangements for accommodation or wait for specific recommendations from the organizing committee.
                </p>
                <p>
                  For group bookings or special requests, kindly reach out to the organizing team for assistance.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Accommodation;
