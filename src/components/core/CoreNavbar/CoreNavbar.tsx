import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { content } from './content';

import './CoreNavbar.scss';

const CoreNavbar = () => {
  const { hash } = useLocation();

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
          <ul className='coreNavbar__navList'>
            {Object.values(links).map((link) => {
              return <li 
                key={link.id} 
                className='coreNavbar__navItem'
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}	

export default CoreNavbar;