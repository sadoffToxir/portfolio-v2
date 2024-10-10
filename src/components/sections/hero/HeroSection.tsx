import BaseButton from '@components/base/button/BaseButton';
import GreetingAstronaut from '@components/greetingAstronaut/GreetingAstronaut';
import { content } from '@constants/content';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './HeroSection.scss';
const HeroSection = () => {
  const { title, subtitle, description, cta } = content.hero;

  return (
    <section id='home' className="container heroSection">
      <div className='heroSection__textBlock'>
        <h1>{title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subtitle }} />
        <h3>{description}</h3>
        <div>
          <button className='button button-primary'>{cta}</button>
        </div>
      </div>
      <div className='heroSection__mediaBlock'>
        <Canvas shadows className='z-[1]'>
          <Environment preset="city" />
          <GreetingAstronaut />
        </Canvas>
      </div>
    </section>
  );
}

export default HeroSection;
