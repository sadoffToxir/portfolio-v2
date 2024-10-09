import React from 'react';
import { Link } from "react-router-dom";

import { content } from '@constants/content'

import './AboutSection.scss'

const AboutSection = () => {
  const { about } = content

  const socialLinks = [ 
    about.socialLinks.slice(0, Math.floor(about.socialLinks.length / 2)), 
    about.socialLinks.slice(Math.floor(about.socialLinks.length / 2), 6)]

  return (
    <section id="about" className="aboutSection">
      <div className='container aboutSection__content'>

        <div className="aboutSection__leftContent">
          <img
            src={'/images/userPhoto.jpg'}
            alt="Profile"
            className="aboutSection__profileImage"
          />
        </div>
        <div className='aboutSection__rightContent'>
          <h2 className='text-emphasis-text'>About me</h2>

          <div>
            {
              about.description.map((paragraph, index) => 
                <React.Fragment key={`about-p-${index}`}>
                  <p>{paragraph}</p>
                  <br />
                </React.Fragment>)
            }              
          </div>

          <div className='flex gap-20'>
            {
              socialLinks.map((linksCol, index) => 
                <div key={`linksCol-${index}`} className='aboutSection__socialLinks'>
                  {
                    linksCol.map((link, index) => 
                      
                      <Link
                        rel="noreferrer"
                        to={link.url} 
                        target="_blank" 
                        className='aboutSection__socialLink'
                        key={`link.title-${index}`} 
                      >
                        <div className='aboutSection__socialIcon'>{link.icon}</div>
                        <div className='flex flex-col '>
                          <span className='font-bold'>{link.title}</span>
                          <div>
                            <span>{link.text}</span>
                          </div>
                        </div>
                      </Link>
                      
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;