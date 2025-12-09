import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function PlacesToVisit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const attractions = [
    { name: 'Ponmudi Hills', link: 'https://www.keralatourism.org/destination/ponmudi-hills/243', image: '/assets/img/gallery/Ponmudi.jpg' },
    { name: 'Sree Padmanabhaswamy Temple', link: 'https://spst.in/', image: '/assets/img/gallery/padmanabhaswamy.jpeg' },
    { name: 'Kovalam Beach', link: 'https://www.keralatourism.org/destination/kovalam-beach/236', image: '/assets/img/gallery/kovalam.jpg' },
    { name: 'Sri Chitra Art Gallery', link: 'https://www.keralatourism.org/destination/sree-chithra-art-galler-trivandrum/225', image: '/assets/img/gallery/art_gallery.jpg' },
    { name: 'Vizhinjam Lighthouse', link: 'https://www.keralatourism.org/destination/lighthouse-beach-kovalam/432', image: '/assets/img/gallery/vizhinjam_lighthouse.jpg' },
    { name: 'Shangumugham Beach', link: 'https://keralatourism.travel/shanghumukham-beach-trivandrum', image: '/assets/img/gallery/shangumukham.jpg' },
    { name: 'Agasthyamalai', link: 'https://www.keralatourism.org/destination/agasthyakoodam-western-ghats/245', image: '/assets/img/gallery/agastyamalai.jpg' },
    { name: 'Napier Museum', link: 'https://www.napiermuseum.org/', image: '/assets/img/gallery/napier_museum.jpg' },
    { name: 'Koyikkal Palace', link: 'https://www.keralatourism.org/destination/koyikkal-palaceenedumangad/238', image: '/assets/img/gallery/Koyikkal.jpg' },
    { name: 'Zoo', link: 'https://www.museumandzoo.kerala.gov.in/', image: '/assets/img/gallery/Zoo.jpg' },
    { name: 'Kanakakkunnu Palace', link: 'https://www.keralatourism.org/destination/kanakakkunnu-palace-thiruvananthapuram/226', image: '/assets/img/gallery/kanakakunnu.jpg' },
    { name: 'Kuthira Malika', link: 'http://en.wikipedia.org/wiki/Kuthira_Malika', image: '/assets/img/gallery/kuthiramalika.jpg' },
    { name: 'Veli Tourist Village', link: 'https://www.keralatourism.org/destination/veli-tourist-village/232', image: '/assets/img/gallery/veli.jpg' },
    { name: 'Attukal Bhagavathy Temple', link: 'http://www.attukal.org/', image: '/assets/img/gallery/Attukal_Bhagavathy_Temple.jpg' },
    { name: 'Jatayu Earth Center', link: 'https://www.keralatourism.org/destination/jatayupara-chadayamangalam/262', image: '/assets/img/gallery/JatayuEarthCenter.jpeg' }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="section-title-header text-center mb-5">
            <h1 className="section-title">Places to Visit</h1>
          </div>

          {/* <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                {attractions.map((attraction, idx) => (
                  <div key={idx} className="col-lg-6 col-md-6 mb-4">
                    <a href={attraction.link} target="_blank" rel="noopener noreferrer">
                      <div style={{overflow: 'hidden', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <img 
                          src={attraction.image} 
                          alt={attraction.name}
                          style={{width: '100%', height: '300px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                          onError={(e) => {e.target.src = '/assets/img/placeholder.jpg'}}
                        />
                      </div>
                      <p style={{marginTop: '10px', color: '#70b60a', fontWeight: 'bold', textAlign: 'center'}}>
                        {attraction.name}
                      </p>
                    </a>
                  </div>
                ))}
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
                  Information about places to visit will be updated here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlacesToVisit;
