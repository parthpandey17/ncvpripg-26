import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageCarousel from '../components/PageCarousel';

function Highlights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { title: '3 Days', desc: 'July 22-24, 2026', link: null },
    { title: 'Plenary Talks', desc: 'From renowned experts', link: '/speakers' },
    { title: 'Workshops', desc: 'Hands-on learning', link: '/call-for-workshops' },
    { title: 'Challenges', desc: 'Research competitions', link: '/call-for-challenges' },
    { title: 'Tutorials', desc: 'State-of-the-art topics', link: '/call-for-tutorials' },
    { title: 'Industry Sessions', desc: 'Professional networking', link: '/industry' }
  ];

  return (
    <div className="page-container">
      <PageCarousel />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center mb-5">
                <h1 className="section-title">Conference Highlights</h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 col-md-12">
              <div className="alert alert-success" role="alert">
                <strong>Welcome to NCVPRIPG-2026!</strong> This is India's premier national conference on Computer Vision, Pattern Recognition, Image Processing and Graphics.
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="row">
                {highlights.map((item, idx) => (
                  <div key={idx} className="col-lg-6 col-md-6 mb-4">
                    {item.link ? (
                      <Link to={item.link} style={{ textDecoration: 'none' }}>
                        <div className="card p-4" style={{
                          backgroundColor: '#f8f9fa', 
                          borderLeft: '4px solid #70b60a', 
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}>
                          <h5 style={{color: '#70b60a', marginBottom: '10px'}}>{item.title}</h5>
                          <p style={{marginBottom: '0', color: '#333'}}>{item.desc}</p>
                        </div>
                      </Link>
                    ) : (
                      <div className="card p-4" style={{backgroundColor: '#f8f9fa', borderLeft: '4px solid #70b60a', textAlign: 'center'}}>
                        <h5 style={{color: '#70b60a', marginBottom: '10px'}}>{item.title}</h5>
                        <p style={{marginBottom: '0'}}>{item.desc}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10 col-md-12">
              <p style={{textAlign: 'center', color: '#666'}}>
                Gallery and more highlights from the conference will be updated here soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Highlights;
