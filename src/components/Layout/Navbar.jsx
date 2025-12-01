import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDropdownClick = (dropdownName) => {
    // Clear any pending hover timeouts when clicking
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Toggle dropdown on click - if already open, close it; otherwise open it
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const handleDropdownHover = (dropdownName) => {
    // Clear any pending close timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // On hover, open the dropdown (only on desktop)
    if (window.innerWidth > 1134) {
      setOpenDropdown(dropdownName);
    }
  };

  const handleLinkClick = () => {
    // Close dropdown and menu when any link is clicked
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const handleDropdownLeave = () => {
    // Close dropdown when mouse leaves - with slight delay to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay to allow moving between dropdown items smoothly
  };

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header id="header-wrap" ref={navRef}>
      <div className="nav-container">
        <div className="brand">
          <Link className="navbar-brand" to="/">
            <img
              className="logos"
              style={{ width: '60px' }}
              src="/assets/img/ncvpripg_logo.png"
              alt="NCVPRIPG Logo"
            />
          </Link>
        </div>

        <nav>
          <div className="nav-mobile">
            <button
              id="navbar-toggle"
              onClick={toggleMenu}
              className={isOpen ? 'active' : ''}
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
          </div>

          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li className="clickable">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="clickable">
              <Link to="/speakers" onClick={handleLinkClick}>
                   Speakers
              </Link>
            </li>

            <li className="nav-dropdown-toggle"
                onMouseEnter={() => handleDropdownHover('program')}
                onMouseLeave={handleDropdownLeave}>
              <a href="#!" onClick={(e) => { e.preventDefault(); handleDropdownClick('program'); }}>Program</a>
              <ul className={`navbar-dropdown ${openDropdown === 'program' ? 'show' : ''}`}>
                <li className="clickable">
                  <Link to="/challenges" onClick={handleLinkClick}>
                    Challenges
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/tutorials" onClick={handleLinkClick}>
                    Tutorials
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/workshops" onClick={handleLinkClick}>
                    Workshops
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/srs" onClick={handleLinkClick}>
                    Student Research Symposium
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/program" onClick={handleLinkClick}>
                    Schedule
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/invited-talks" onClick={handleLinkClick}>
                    Invited Talks
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/industry" onClick={handleLinkClick}>
                    Industry Speakers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-dropdown-toggle"
                onMouseEnter={() => handleDropdownHover('calls')}
                onMouseLeave={handleDropdownLeave}>
              <a href="#!" onClick={(e) => { e.preventDefault(); handleDropdownClick('calls'); }}>Calls</a>
              <ul className={`navbar-dropdown ${openDropdown === 'calls' ? 'show' : ''}`}>
                <li className="clickable">
                  <a href="/CFP_NCVPRIPG2026.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                    CFP
                  </a>
                </li>
                <li className="clickable">
                  <Link to="/call-for-challenges" onClick={handleLinkClick}>
                    Call for Challenges
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/call-for-tutorials" onClick={handleLinkClick}>
                    Call for Tutorials
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/call-for-workshops" onClick={handleLinkClick}>
                    Call for Workshops
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/call-for-sponsorship" onClick={handleLinkClick}>
                    Call for Sponsorship
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/call-for-abstract" onClick={handleLinkClick}>
                    Call for Abstracts
                  </Link>
                </li>
              </ul>
            </li>

            <li className="clickable">
              <Link to="/committee" onClick={closeMenu}>
                Committee
              </Link>
            </li>

            <li className="nav-dropdown-toggle"
                onMouseEnter={() => handleDropdownHover('submissions')}
                onMouseLeave={handleDropdownLeave}>
              <a href="#!" onClick={(e) => { e.preventDefault(); handleDropdownClick('submissions'); }}>Submissions</a>
              <ul className={`navbar-dropdown ${openDropdown === 'submissions' ? 'show' : ''}`}>
                <li className="clickable">
                  <Link to="/author-guidelines" onClick={handleLinkClick}>
                    Author Guidelines
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/accepted-abstracts" onClick={handleLinkClick}>
                    Accepted Abstracts
                  </Link>
                </li>
              </ul>
            </li>

            <li className="clickable">
                  <Link to="/registration" onClick={handleLinkClick}>
                    Registration
                  </Link>
            </li>
            <li className="nav-dropdown-toggle"
                onMouseEnter={() => handleDropdownHover('information')}
                onMouseLeave={handleDropdownLeave}>
              <a href="#!" onClick={(e) => { e.preventDefault(); handleDropdownClick('information'); }}>Information</a>
              <ul className={`navbar-dropdown ${openDropdown === 'information' ? 'show' : ''}`}>
                
                <li className="clickable">
                  <Link to="/travel-info" onClick={handleLinkClick}>
                    Travel Information
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/accommodation" onClick={handleLinkClick}>
                    Accommodation
                  </Link>
                </li>
                <li className="clickable">
                  <Link to="/places-to-visit" onClick={handleLinkClick}>
                    Places To Visit
                  </Link>
                </li>
              </ul>
            </li>

            <li className="clickable">
              <Link to="/sponsors" onClick={closeMenu}>
                Sponsors
              </Link>
            </li>

            <li className="clickable">
              <Link to="/highlights" onClick={closeMenu}>
                Highlights
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
