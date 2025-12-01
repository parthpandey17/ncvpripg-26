import React, { useEffect } from 'react';

function Workshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workshops = [
    {
      title: 'High-throughput Vision based Phenotyping (HTVP\'26)',
      link: 'https://sites.google.com/view/htvp-2026/home',
      description: 'Keynote lectures by Prof. Bettina Berger, Dr. Sudhir Kumar, and Dr. Madhurima Das on advanced phenotyping techniques using computer vision.',
      speakers: ['Prof. Bettina Berger - The Plant Accelerator', 'Dr. Sudhir Kumar - ICAR', 'Dr. Madhurima Das - ICAR']
    },
    {
      title: 'AI/ML-CV in Space Science and Technology',
      link: 'https://sites.google.com/view/ncvpripg24aimlcvisro/',
      description: 'Discover cutting-edge applications of artificial intelligence and computer vision in space exploration and satellite technology.',
      speakers: ['Sri. Suresh K - ISRO', 'Sri. Rashmit Singh Sukhmani - SatSure Analytics', 'Dr. P. Manjusree - ISRO']
    }
  ];

  return (
    <div className="page-container">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Workshops</h1>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {workshops.map((workshop, index) => (
                    <div key={index} className="workshop-card mb-5 p-4" style={{border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
                      <h5 className="mb-3" style={{color: '#70b60a'}}>{workshop.title}</h5>
                      <p className="mb-3" style={{lineHeight: '1.6'}}>{workshop.description}</p>
                      <div className="mb-3">
                        <strong>Keynote Speakers:</strong>
                        <ul style={{marginLeft: '20px', marginTop: '10px'}}>
                          {workshop.speakers.map((speaker, idx) => (
                            <li key={idx}>{speaker}</li>
                          ))}
                        </ul>
                      </div>
                      <a href={workshop.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                        Learn More
                      </a>
                      {index < workshops.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}

                  <div className="mt-5 pt-4 border-top text-center">
                    <p className="text-muted mb-3">For more information about workshops:</p>
                    <a href="mailto:ncvpripg2026@lnmiit.ac.in" className="btn btn-primary">
                      <i className="fas fa-envelope"></i> Contact Workshop Chairs
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
                      Workshop details will be updated here soon.
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

export default Workshops;
