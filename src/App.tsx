import CoreNavbar from "@components/core/CoreNavbar/CoreNavbar"
import AboutSection from '@components/sections/about/AboutSection';
import ExperienceSection from '@components/sections/experience/ExperienceSection';
import HeroSection from '@components/sections/hero/HeroSection';
import StarsBackground from '@components/stars/StarsBackground';

function App() {

  return (
    <>
      <CoreNavbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StarsBackground />
    </>
  )
}

export default App
