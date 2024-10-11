import { Link } from 'react-router-dom';

import GreetingAstronaut from '@components/greetingAstronaut/GreetingAstronaut';
import { content } from '@constants/content';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './HeroSection.scss';
const HeroSection = () => {
  const { title, cta, cv } = content.hero;

  return (
    <section id='home' className="container heroSection">
      <div className='heroSection__textBlock'>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <div className='flex gap-5'>
          <Link to={cta.url}><button className='button button-primary'>{cta.text}</button></Link>
          <Link target="_blank" to={cv.url}><button className='button button-secondary'>{cv.text}</button></Link>
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
