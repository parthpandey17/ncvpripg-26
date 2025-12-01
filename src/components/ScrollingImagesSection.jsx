import React from 'react';

function ScrollingImagesSection() {
  const images = [
    'assets/img/Inauguration/DSC02461.JPG',
    'assets/img/Inauguration/DSC03530.JPG',
    'assets/img/Inauguration/DSC02552.JPG',
    'assets/img/Inauguration/DSC03659.JPG',
    'assets/img/Inauguration/exhibition_booth.JPG',
    'assets/img/Day2/DSC04432.JPG',
    'assets/img/Day2/DSC04072.JPG',
    'assets/img/Inauguration/DSC03960.JPG',
    'assets/img/Inauguration/DSC04121.JPG',
    'assets/img/Day3/DSC04710.JPG',
  ];

  return (
    <section className="scrolling-images-section">
      <div className="scrolling-images-container">
        <div className="scrolling-images">
          {/* Original Set of Images */}
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Image ${idx + 1}`} className="scrolling-image" />
          ))}
          {/* Duplicate Set of Images */}
          {images.map((img, idx) => (
            <img key={`dup-${idx}`} src={img} alt={`Image ${idx + 1}`} className="scrolling-image" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollingImagesSection;
