import React from 'react';

function SponsorsSection() {
  const sponsors = [
    { name: 'LNMIIT Jaipur', url: 'https://lnmiit.ac.in/', logo: 'assets/img/lnm_logo.png', width: '80px' },
    { name: 'MNIT', url: 'https://www.mnit.ac.in/', logo: 'assets/img/mnit_logo.png', width: '80px' },
    
    { name: 'IUPRAI', url: 'https://www.isical.ac.in/~iuprai/?q=node/17', logo: 'assets/img/logo.png', width: '80px' }
  ];

  return (
    <section id="sponsor_ribbon" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center mb-5">
              <h1 className="section-title">MEET OUR SPONSORS</h1>
            </div>
            <div className="sponsor-container text-center">
              {sponsors.map((sponsor, idx) => (
                <a key={idx} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="sponsor-logo" 
                    style={{ width: sponsor.width }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
