import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Counter from '../components/Counter';
import ScrollingTextSection from '../components/ScrollingTextSection';
import ScrollingImagesSection from '../components/ScrollingImagesSection';
import UpdatesSection from '../components/UpdatesSection';
import ImportantDatesSection from '../components/ImportantDatesSection';
import SponsorsSection from '../components/SponsorsSection';
import '../styles/pages/home.scss';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Carousel />
      {/* <ScrollingTextSection />
      <ScrollingImagesSection /> */}
      <About />
      {/* <Counter /> */}
      {/* <UpdatesSection /> */}
      <ImportantDatesSection />
      {/* <SponsorsSection />  */}
      <section className="contact-section">
        <div className="container">
          <p className="contact-email">
            For inquiries, please contact us at: <a href="mailto:ncvpripg2026@lnmiit.ac.in">ncvpripg2026@lnmiit.ac.in</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
