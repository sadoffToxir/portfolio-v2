import React from 'react';
import { Link } from 'react-router-dom';

import { content } from '@constants/content'

import './AboutSection.scss'

const AboutSection = () => {
  const { about } = content

  return (
    <section id="about" className="aboutSection">
      <div className='container'>
        <div className="aboutSection__content">
          <div className="aboutSection__leftContent">
            <h2 className='text-emphasis-text mb-5'>About me</h2>
            <div>
              {
                about.description.map((paragraph, index) => 
                  <React.Fragment key={`about-p-${index}`}>
                    <p dangerouslySetInnerHTML={{ __html: paragraph }} />
                    <br />
                  </React.Fragment>)
              }              
            </div>
            <div className='flex gap-12'>
              {
                about.socialLinks.map((link, index) => 
                  <Link
                    rel="noreferrer"
                    to={link.url} 
                    target="_blank" 
                    className='aboutSection__socialLink'
                    key={`link.title-${index}`} 
                  >
                    <div className='aboutSection__socialIcon'>{link.icon}</div>
                  </Link>
                )
              }
            </div>
          </div>
          <div className='aboutSection__rightContent'>
            <img
              src={'/images/userPhoto.jpg'}
              alt="Profile"
              className="aboutSection__profileImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;