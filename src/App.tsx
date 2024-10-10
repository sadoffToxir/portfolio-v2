import CoreNavbar from '@components/core/CoreNavbar/CoreNavbar'
import AboutSection from '@components/sections/about/AboutSection';
import ContactSection from '@components/sections/contact/ContactSection';
import ExperienceSection from '@components/sections/experience/ExperienceSection';
import HeroSection from '@components/sections/hero/HeroSection';
import SkillsSection from '@components/sections/skills/SkillsSection';
import StarsBackground from '@components/stars/StarsBackground';

function App() {

  return (
    <>
      <StarsBackground />
      <CoreNavbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default App
