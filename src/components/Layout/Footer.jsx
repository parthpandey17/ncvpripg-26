import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.scss';

function Footer() {
  return (
    <footer id="contact" className="footer-area section-padding">
      <div className="container">

        {/* Logo Row */}
        <div className="row footer-top-row">
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="footer-logo-section">
              <div className="footer-logos-container">
              <a href="https://www.lnmiit.ac.in/" target="_blank" rel="noopener noreferrer">
                  <img className="footer-logo" src="/assets/img/ncvpripg_logo.png" alt="NCVPRIPG Logo" />
                </a>
                <a href="https://www.lnmiit.ac.in/" target="_blank" rel="noopener noreferrer">
                  <img className="footer-logo-side" src="/assets/img/lnm_logo.png" alt="LNMIIT Logo" />
                </a>
                <a href="https://www.mnit.ac.in/" target="_blank" rel="noopener noreferrer">
                  <img className="footer-logo-side" src="/assets/img/mnit_logo.png" alt="MNIT Logo" />
                </a>
              </div>
              <p className="footer-description">
                National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics
              </p>
            </div>
          </div>
        </div>

        {/* Footer Columns Row */}
        <div className="row footer-main-row">

          {/* Information */}
          <div className="col-lg-3 col-md-6 footer-col wow fadeInUp" data-wow-delay="0.3s">
            <h3 className="footer-title">Information</h3>
            <ul className="footer-links">
              <li><Link to="/travel-info">Travel Info</Link></li>
              <li><Link to="/accommodation">Accommodation</Link></li>
              <li><Link to="/places-to-visit">Places to Visit</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 footer-col wow fadeInUp" data-wow-delay="0.4s">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/program">Schedule</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/committee">Committee</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 footer-col wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="footer-title">Contact Us</h3>
            <p className="contact-item">
              <i className="lni-envelope"></i>
              <a href="mailto:ncvpripg@iiita.ac.in"> ncvpripg@iiita.ac.in</a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="col-lg-3 col-md-6 footer-col wow fadeInUp" data-wow-delay="0.6s">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-social">
              <li><a className="facebook" href="https://www.facebook.com/profile.php?id=61557293334290" target="_blank"><i className="lni-facebook-filled"></i></a></li>
              <li><a className="twitter" href="https://twitter.com/ncvpripg2026" target="_blank"><i className="lni-twitter-filled"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/company/100902431" target="_blank"><i className="lni-linkedin-filled"></i></a></li>
              <li><a className="instagram" href="https://www.instagram.com/ncvpripg_2026" target="_blank"><i className="lni-instagram-filled"></i></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-bottom">
              <p className="footer-text">
                &copy; 2026 NCVPRIPG. All rights reserved.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
