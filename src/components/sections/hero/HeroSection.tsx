import BaseButton from '@components/base/button/BaseButton';
import GreetingAstronaut from '@components/greetingAstronaut/GreetingAstronaut';
import StarsBackground from '@components/stars/StarsBackground';
import { content } from '@constants/content';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './HeroSection.scss';
const HeroSection = () => {
  const { title, subtitle, description, cta } = content.hero;

  return (
    <section className="container heroSection">
      <div className='heroSection__textBlock'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <div>
          <BaseButton>{cta}</BaseButton>
        </div>
      </div>
      <div className='heroSection__mediaBlock'>
        <Canvas shadows className='z-[1]'>
          <Environment preset="city" />
          <GreetingAstronaut />
        </Canvas>
      </div>
      {/* <StarsBackground /> */}
    </section>
  );
}

export default HeroSection;
