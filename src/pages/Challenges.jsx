import React, { useEffect } from 'react';

function Challenges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      title: 'Automatic Assessment of True/False Questions in Handwritten Answer Sheet',
      link: 'https://vl2g.github.io/challenges/AutoEval2026/',
      description: 'An exciting challenge to develop methods for automatic evaluation of handwritten answers.'
    },
    {
      title: 'Smart City Surveillance: Unveiling Indian Person Attributes in Real Time',
      link: 'http://phantom.vehant.in:5000/',
      description: 'A cutting-edge challenge in real-time person attribute recognition for surveillance systems.'
    }
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Challenges</h1>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="challenge-card mb-5 p-4" style={{border: '1px solid #ddd', borderRadius: '8px'}}>
                      <h4 className="mb-3">{challenge.title}</h4>
                      <p className="mb-3">{challenge.description}</p>
                      <a href={challenge.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Challenge Details
                      </a>
                      {index < challenges.length - 1 && <hr className="my-5" />}
                    </div>
                  ))}

                  <div className="mt-5 pt-4 border-top text-center">
                    <p className="text-muted">For more information about challenges, please contact us:</p>
                    <a href="mailto:ncvpripg2026@lnmiit.ac.in" className="btn btn-outline-primary">
                      <i className="fas fa-envelope"></i> Contact Challenge Chairs
                    </a>
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
                      Challenges will be updated here soon.
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

export default Challenges;
