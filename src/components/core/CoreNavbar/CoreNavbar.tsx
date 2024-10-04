import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { content } from './content';

import './CoreNavbar.scss';

const CoreNavbar = () => {
  const { logo, links } = content;

  const [ active, setActive ] = useState("");
  const [ toggle, setToggle ] = useState(false);
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="coreNavbar__wrapper">
      <div className="coreNavbar container">
        <div className='coreNavbar__leftHalf'>
          <div className='coreNavbar__logo'>
            <h2>{logo.title}</h2>
          </div>
        </div>
        <div className='coreNavbar__rightHalf'>
          <ul className='coreNavbar__navList'>
            {Object.values(links).map((link) => {
              return <li 
                key={link.id} 
                className={`${active && 'coreNavbar__navItem--active'} coreNavbar__navItem`}
                onClick={() => setActive(link.title)}
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