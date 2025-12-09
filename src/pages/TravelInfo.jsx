import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function TravelInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const travelDetails = [
    { label: 'Nearest Railway Station', value: 'Thiruvananthapuram Central Railway Station (about 25 kms)' },
    { label: 'Nearest Airport', value: 'Thiruvananthapuram International Airport (about 30 kms)' },
    { label: 'Nearest Town', value: 'Nedumangadu (about 8 kms)' },
    { label: 'Nearest Bus Stop', value: '16th Mile Stone / ISRO Junction / Pathinaaram Kallu Stop (about 1.5 kms)' }
  ];

  const directions = [
    'From the Central Bus Station, Thampanoor (in front of Thiruvananthapuram Railway Station) take a bus to Vithura or Valiamala. Alight at 16th Mile Stone / ISRO Junction / Pathinaaram Kallu Stop. Follow sign boards to reach LNMIIT campus. Last bus to Vithura from the Central Bus Station is around 9:30 p.m.',
    'Alternatively, board a bus from Thampanoor or East Fort Bus Station (around 1 km from Thampanoor) to Nedumangadu. From Nedumangadu, frequent buses are available for ISRO junction. Auto rickshaws are also available from Nedumangadu to LNMIIT (this would cost anywhere between Rs. 150 – 200).',
    'It may take a little more than an hour to reach LNMIIT from Thiruvananthapuram city under normal traffic conditions.',
    'Bus fare would be approximately Rs. 40 per person from Thampanoor to IIST.',
    'Prepaid autos and taxis are available from the Central Railway Station (approx Rs. 700 for an auto and Rs. 1000 for a taxi).',
    'Route to be followed: Thampanoor/Central Railway station or East Fort – Kowdiar – Peroorkada – Nedumangad – Karipoor - ISRO Junction – IIST.',
    'From the Airport it would be advisable to reach East Fort or Thampanoor and then follow the information given above for buses.',
    'Prepaid Taxis are available at the Airport and can be availed. The cost would be anywhere between Rs. 1100 – Rs. 1400.'
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">How to Reach LNMIIT Jaipur</h1>
              </div>
            </div>
          </div>

          {/* <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'justify', marginBottom: '20px'}}>
                The LNM Institute Of Information Technology
 is located in Valiamala, Thiruvananthapuram on the way to the famous Ponmudi Hills. LNMIIT campus is adjacent to the Liquid Propulsion Systems Centre (LPSC) of ISRO.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              {travelDetails.map((item, idx) => (
                <div key={idx} className="mb-3">
                  <p>
                    <strong style={{color: '#70b60a'}}>{item.label}:</strong> {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <h5 style={{color: '#70b60a', marginBottom: '20px'}}>
                <strong>Directions</strong>
              </h5>
              <ul style={{marginLeft: '20px'}}>
                {directions.map((dir, idx) => (
                  <li key={idx} style={{marginBottom: '12px'}}>{dir}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div style={{width: '100%', marginTop: '30px'}}>
                <iframe 
                  title="LNMIIT Location Map"
                  style={{width: '100%', height: '450px', border: '0'}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6822924719445!2d77.02915867231178!3d8.626467976220164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c83d525af4a7%3A0x4f7e76bcf98cd5e1!2sIndian%20Institute%20of%20Space%20Science%20and%20Technology%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1710056621723!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div> */}

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
                  Travel information will be updated here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelInfo;
