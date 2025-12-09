import React, { useState, useEffect } from 'react';
import '../styles/components/page-carousel.scss';

function PageCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/assets/img/background/LNMIIT_Jaipur5.jpg',
      description: 'The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics',
      title: 'NCVPRIPG 2026',
      dates: "22-24 July, 2026",
      organised:'Organized by',
      location: 'The LNM Institute Of Information Technology, Jaipur',
      location2:'Jointly with MNIT Jaipur',
      association:'In association with Indian Unit for Pattern Recognition and Artificial Intelligence (IUPRAI)'
    },
    {
      image: '/assets/img/background/LNMIIT_Jaipur6.jpg',
      description: 'The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics',
      title: 'NCVPRIPG 2026',
      dates: "22-24 July, 2026",
      organised:'Organized by',
      location: 'The LNM Institute Of Information Technology, Jaipur',
      location2:'Jointly with MNIT Jaipur',
      association:'In association with Indian Unit for Pattern Recognition and Artificial Intelligence (IUPRAI)'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="page-carousel-container">
      <div className="page-carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`page-carousel-item ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="page-carousel-caption">
              <p className="page-carousel-description animate__animated animate__fadeInDown">
                The 11<sup>th</sup> National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics
              </p>
              <h1 className="page-carousel-title animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
              <p className="page-carousel-dates animate__animated animate__fadeInDown">
                22<sup>nd</sup> – 24<sup>th</sup> July, 2026
              </p>
              <p className="page-carousel-location animate__animated animate__fadeInDown">
                {slide.organised}
              </p>
              <p className="page-carousel-location animate__animated animate__fadeInDown">
                {slide.location}
              </p>
              <p className="page-carousel-location animate__animated animate__fadeInDown">
                {slide.location2}
              </p>
              <p className="page-carousel-location animate__animated animate__fadeInDown">
                {slide.association}
              </p>
              
              <div className="page-carousel-divider" aria-hidden="true" />
              <div className="page-carousel-logos">
                {[
                  'logo.png',
                  'lnm_logo.png',
                  'mnit_logo.png'
                ].map((logo, idx) => (
                  <img
                    key={idx}
                    src={`/assets/img/${logo}`}
                    alt={`Logo ${idx + 1}`}
                    className="page-carousel-logo"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="page-carousel-control prev" onClick={handlePrevious}>
        &#10094;
      </button>
      <button className="page-carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default PageCarousel;
