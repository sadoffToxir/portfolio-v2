import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MenuBar from '@assets/icons/menuBar.svg?react';
import useWindowDimensions from '@hooks/useWindowDimensions';

import { content } from './content';

import './CoreNavbar.scss';

const CoreNavbar = () => {
  const { hash } = useLocation();
  const windowDimensions = useWindowDimensions();
  const mobileMenu = windowDimensions.width <= 768;
  console.log('windowDimensions', windowDimensions);
  console.log('mobileMenu', mobileMenu);
  // State to handle mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logo, links } = content;

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="coreNavbar__wrapper">
      <div className="coreNavbar container">
        <div className='coreNavbar__leftContent'>
          <div className='coreNavbar__logo'>
            <h2>{logo.title}</h2>
          </div>
        </div>

        <div className='coreNavbar__rightContent'>
          {mobileMenu ? 
            <>
              <div className="coreNavbar__hamburger" onClick={() => setIsMenuOpen(true)}><MenuBar /></div>

              {isMenuOpen && 
                <div className="coreNavbar__overlay">
                  <div className="coreNavbar__close" onClick={() => setIsMenuOpen(false)}>
                    &times;
                  </div>
                  <ul className='coreNavbar__mobileNavList'>
                    {Object.values(links).map((link) => 
                      <li key={link.id} className='coreNavbar__mobileNavItem'>
                        <Link to={link.link} onClick={() => setIsMenuOpen(false)}>
                          {link.title}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              }
            </>
            : 
            <ul className='coreNavbar__navList'>
              {Object.values(links).map((link) => 
                <li key={link.id} className='coreNavbar__navItem'>
                  <Link to={link.link}>{link.title}</Link>
                </li>
              )}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default CoreNavbar;
