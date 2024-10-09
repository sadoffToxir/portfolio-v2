import { content } from '@constants/content'

import './SkillsSection.scss'

const SkillsSection = () => {
  const { skills } = content

  return (
    <section id="skills" className="skillsSection">
      <div className='container'>
        <h2 className='text-emphasis-text mb-5'>Skills</h2>
        <div className='skillsSection__content'>
          <div className='skillsSection__leftContent'>
            <div>
              <h3>Languages</h3>
              <div className='skillsSection__iconItemsList'>
                {
                  skills.languages.map((language, index) => 
                    <div key={index} className='skillsSection__iconItem'>
                      <img src={language.icon} alt={language.name} />
                      <p>{language.name}</p>
                    </div>
                  )
                }
              </div>
            </div>
            <div>
              <h3>Frameworks</h3>
              <div className='skillsSection__iconItemsList'>
                {
                  skills.frameworks.map((framework, index) => 
                    <div key={index} className='skillsSection__iconItem'>
                      <img src={framework.icon} alt={framework.name} />
                      <p>{framework.name}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>

          <div className='skillsSection__rightContent'>
            <h3>Tools</h3>
            <div className='skillsSection__textItemsList'>
              {
                skills.tools.map((tool, index) => 
                  <div key={index} className='skillsSection__textItem'>
                    <p>{tool}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;