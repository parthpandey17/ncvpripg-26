import React from 'react';

function SponsorsSection() {
  const sponsors = [
    { name: 'LNMIIT Jaipur', url: 'https://lnmiit.ac.in/', logo: 'assets/img/lnm_logo.png', width: '80px' },
    { name: 'MNIT', url: 'https://www.mnit.ac.in/', logo: 'assets/img/mnit_logo.png', width: '80px' },
    { name: 'SERB', url: 'https://serb.gov.in/', logo: 'assets/img/sponsors/SERB-500x500.png', width: '100px' },
    { name: 'DRDO', url: 'https://drdo.gov.in/drdo/', logo: 'assets/img/sponsors/DRDO Logo.jpg', width: '80px' },
    { name: 'iHub Drishti', url: 'https://ihub-drishti.ai/', logo: 'assets/img/sponsors/hib_logo_jpg.jpg', width: '80px' },
    { name: 'Innovative Instruments', url: 'http://innovativeinc.in/', logo: 'assets/img/sponsors/Inno logo.jpg', width: '70px' },
    { name: 'Techsol', url: 'https://techsolengineers.com/', logo: 'assets/img/sponsors/Techsol.jpg', width: '80px' },
    { name: 'iHub-Data', url: 'https://ihub-data.ai', logo: 'assets/img/sponsors/ihub_logo.png', width: '80px' },
    { name: 'Nugenix', url: 'http://www.nugenix.co.in/', logo: 'assets/img/sponsors/Nugenix logo.jpg', width: '80px' },
    { name: 'Vehant', url: 'https://www.vehant.com/', logo: 'assets/img/sponsors/Vehant Logo 1200x1200 - Vehant Technologies.png', width: '80px' },
    { name: 'ASP', url: 'http://www.alliedscientific.net/', logo: 'assets/img/sponsors/asp.png', width: '80px' },
    { name: 'GRSS', url: 'https://www.grss-ieee.org/', logo: 'assets/img/sponsors/grss.png', width: '80px' },
    { name: 'Federal Bank', url: 'http://www.federalbank.co.in/', logo: 'assets/img/sponsors/Federal Bank Logo.png', width: '80px' },
    { name: 'VSSC', url: 'https://www.vssc.gov.in/', logo: 'assets/img/vssc_logo.png', width: '80px' },
    { name: 'LPSC', url: 'https://www.lpsc.gov.in/', logo: 'assets/img/lpsc_logo.png', width: '80px' },
    { name: 'IPRC', url: 'https://www.iprc.gov.in/', logo: 'assets/img/iprc_logo.png', width: '80px' },
    { name: 'IISU', url: 'https://www.iisu.gov.in/', logo: 'assets/img/iisu_logo.jpeg', width: '80px' },
    { name: 'IUPRAI', url: 'https://www.isical.ac.in/~iuprai/?q=node/17', logo: 'assets/img/logo.png', width: '80px' },
    { name: 'DUK', url: 'https://duk.ac.in/', logo: 'assets/img/duk_logo.png', width: '80px' },
    { name: 'IISER', url: 'https://www.iisertvm.ac.in/', logo: 'assets/img/iiser_logo.png', width: '80px' },
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
