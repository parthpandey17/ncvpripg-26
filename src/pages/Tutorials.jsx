import React, { useEffect } from 'react';
import PageCarousel from '../components/PageCarousel';

function Tutorials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tutorials = [
    {
      title: 'Transforming Human Perception: A Tutorial from Transformer to LLM Architectures',
      description: 'A comprehensive tutorial on transformer architectures and their evolution to Large Language Models, covering key concepts and applications in computer vision and NLP.'
    },
    {
      title: 'Deep Learning Models for Land Cover Mapping from High Resolution Satellite Images',
      description: 'Learn state-of-the-art deep learning techniques for analyzing satellite imagery and performing land cover classification with high accuracy.'
    }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Tutorials</h1>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {tutorials.map((tutorial, index) => (
                    <div key={index} className="tutorial-card mb-5 p-4" style={{border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
                      <h5 className="mb-3" style={{color: '#70b60a'}}>{tutorial.title}</h5>
                      <p className="mb-3" style={{lineHeight: '1.6'}}>{tutorial.description}</p>
                      {index < tutorials.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}

                  <div className="mt-5 pt-4 border-top text-center">
                    <p className="text-muted mb-3">For more information about tutorials and registration:</p>
                    <a href="mailto:ncvpripg2026@lnmiit.ac.in" className="btn btn-primary">
                      <i className="fas fa-envelope"></i> Contact Tutorial Chairs
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
                      Tutorial details will be updated here soon.
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

export default Tutorials;
