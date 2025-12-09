import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function Speakers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const speakers = [
    {
      id: 'sanghamitra',
      name: 'Sanghamitra Bandyopadhyay',
      title: 'Director and Professor, ISI Kolkata',
      image: '/assets/img/speaker/sanghamitra.jpeg',
      talkTitle: 'Algorithms for Single Cell Data Analysis',
      abstract: 'With advances in technology, it has become possible to extract valuable biological information at the granularity of single cells. Single cell data for up to a million observations and with thousands of measurements per cell are now available. Single cell data sets are inherently noisy and have significantly high missing values, thus challenging algorithm designers and data analysts.',
      bio: 'Sanghamitra Bandyopadhyay joined the Machine Intelligence Unit of the Indian Statistical Institute as a faculty member in 1999. She was the Director of the Institute from August 2015 to July 2020, and is currently on her second tenure as Director from September 2020 onwards.'
    },
    {
      id: 'sknayar',
      name: 'Shree K Nayar',
      title: 'Professor, Columbia University',
      image: '/assets/img/speaker/Shree_K._Nayar.jpg',
      talkTitle: 'Future Cameras',
      abstract: 'Computational imaging uses new optics to capture a coded image, and an appropriate algorithm to decode the captured image. This approach has enabled mobile devices to produce images that are rich, immersive and interactive.',
      bio: 'Shree K. Nayar is the T. C. Chang Professor of Computer Science at Columbia University. He heads the Columbia Vision Laboratory (CAVE), which develops computational imaging and computer vision systems.'
    },
    {
      id: 'balaji',
      name: 'Balaji Vasan Srinivasan',
      title: 'Principal Scientist, Adobe',
      image: '/assets/img/speaker/balaji.jpeg',
      talkTitle: 'Controlling Diffusion Model Generation',
      abstract: 'Recent advancements in text-guided image synthesis have revolutionized creative workflows. In this talk, I will cover practical scenarios and present explorations that tailor diffusion models.',
      bio: 'Balaji Vasan Srinivasan is a principal scientist in Adobe Research focused on next generation technologies for content creation workflows.'
    }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1 className="section-title">Plenary Speakers</h1>
              </div>
              {/* <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {speakers.map((speaker, index) => (
                    <div key={speaker.id}>
                      <div className="row justify-content-center mb-5">
                        <div className="col-lg-4 col-md-6 text-center">
                          <img className="image" src={speaker.image} alt={speaker.name} style={{width: '200px', height: '150px', objectFit: 'cover'}} />
                          <br />
                          <strong className="text">{speaker.name}</strong>
                          <p className="text">{speaker.title}</p>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <p style={{textAlign: 'justify'}}>
                            <br />
                            <strong>Title of the Talk:</strong> {speaker.talkTitle}
                            <br />
                            <br />
                            <strong>Abstract:</strong> {speaker.abstract}
                            <br />
                            <br />
                            <strong>About the Speaker:</strong> {speaker.bio}
                          </p>
                        </div>
                      </div>
                      {index < speakers.length - 1 && <hr className="author-separator" />}
                    </div>
                  ))}
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
                      Speaker information will be updated here soon.
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

export default Speakers;
