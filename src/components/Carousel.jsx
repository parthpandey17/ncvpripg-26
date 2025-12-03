import React, { useState, useEffect } from 'react';
import '../styles/components/carousel.scss';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/assets/img/background/LNMIIT_Jaipur5.jpg',
      description: 'The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics',
      title: 'NCVPRIPG 2026',
      dates: "22-24 July, 2026",
      location: 'The LNM Institute Of Information Technology, Jaipur',
      location2:'(Jointly organized with MNIT Jaipur)'
    },
    {
      image: '/assets/img/background/LNMIIT_Jaipur4.jpg',
      description: 'The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics',
      title: 'NCVPRIPG 2026',
      dates: "22-24 July, 2026",
      location: 'The LNM Institute Of Information Technology, Jaipur',
      location2:'(Jointly organized with MNIT Jaipur)'
    },
    {
      image: '/assets/img/background/LNMIIT_Jaipur6.jpg',
      description: 'The 11th National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics',
      title: 'NCVPRIPG 2026',
      dates: "22-24 July, 2026",
      location: 'The LNM Institute Of Information Technology, Jaipur',
      location2:'(Jointly organized with MNIT Jaipur)'
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
    <div id="conferenceCarousel" className="carousel-container">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-caption">
            <p className="carousel-description animate__animated animate__fadeInDown">
 The 11<sup>th</sup> National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics
</p>
              <h1 className="carousel-title animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
              <p className="carousel-dates animate__animated animate__fadeInDown">
  22<sup>nd</sup> – 24<sup>th</sup> July, 2026
</p>

              <p className="carousel-location animate__animated animate__fadeInDown">
                {slide.location}
              </p>
              <p className="carousel-location animate__animated animate__fadeInDown">
                {slide.location2}
              </p>
              
              <div className="carousel-divider" aria-hidden="true" />
              <div className="carousel-logos">
                {[
                  'logo.png',
                  'lnm_logo.png',
                  'mnit_logo.png'
                ].map((logo, idx) => (
                  <img
                    key={idx}
                    src={`/assets/img/${logo}`}
                    alt={`Logo ${idx + 1}`}
                    className="carousel-logo"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={handlePrevious}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
