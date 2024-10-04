import React from 'react';
import { Link } from "react-router-dom";

import VerticalStroke from '@components/verticalScroll/VerticalScroll'
import { content } from '@constants/content'

import { Experience } from '../../../types/Experience';

import './ExperienceSection.scss'

const ExperienceSection = () => {
  const { experience } = content


  const CompanyExperience = (props: {companyExperience: Experience}) => {
    const { companyExperience } = props
    return (
      <div className="companyExperience">
        <div className='flex gap-2'> 
          <img className='companyExperience__logo' src={companyExperience.logo} alt={companyExperience.company} />
          <div>
            <h3>{companyExperience.company}</h3>
            <p className='font-bold	'>{companyExperience.role}</p>
            <p>{companyExperience.period}</p>
          </div>
        </div>
        <div>
          <h6 className='mt-4 font-bold'>Achievements: </h6>
          <ul className='companyExperience__achievements'>
            {companyExperience.achievements.map((achievement, index) => 
              <li key={index}>- {achievement}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <section id="about" className="experienceSection">
      <div className='experienceSection__content container'>
        <div className='experienceSection__progress'>
          <VerticalStroke />
        </div>
        <div className='experienceSection__companies'>
          {
            Object.keys(experience).map((key, index) => 
              <CompanyExperience companyExperience={experience[key as keyof typeof experience]} key={index} />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;