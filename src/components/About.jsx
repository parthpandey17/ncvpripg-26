import React from 'react';
import '../styles/components/about.scss';

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-body">
          <h2 className="section-title section-title-left">About NCVPRIPG</h2>
          <div className="about-text">
            <p>
              The Eleventh National Conference on Computer Vision, Pattern Recognition, Image Processing, and Graphics (NCVPRIPG 2026) will be held at The LNM Institute of
Information Technology, Jaipur, India (jointly organized with
MNIT Jaipur) from July 22 -24, 2026.
. NCVPRIPG aims to bring together researchers and practitioners from the allied areas of computer vision, graphics, image processing, and pattern recognition, in order to promote community-wide discussions of ideas that will influence and foster continued research in the field.
            </p>

            <p>
              Over the years, the conference has grown into a vibrant national event with participation from students and researchers across the country. The conference covers topics including Image-Based Rendering, Real Time Vision, Industrial Vision Systems, Motion and Video Analysis, Image and Video Retrieval, Medical Image Analysis, Aerial and Satellite Image Analysis, and Deep Learning.
            </p>

            <p>
              For more details about past editions and the program, please explore the Program and Highlights pages.
            </p>
          </div>
          <div className="about-aside">
            <img src="/assets/img/logo.png" alt="NCVPRIPG logo" className="about-logo" />
            <img src="/assets/img/lnm_logo.png" alt="LNMIIT logo" className="about-logo" />
            <img src="/assets/img/mnit_logo.png" alt="MNIT logo" className="about-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
