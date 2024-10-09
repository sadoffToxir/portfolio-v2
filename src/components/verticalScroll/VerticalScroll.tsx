import { useEffect, useRef, useState } from 'react';

import './VerticalScroll.scss';

const VerticalScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollY + viewportHeight / 2 < sectionTop) {
          setScrollProgress(0);
        } else if (scrollY + viewportHeight / 2 > sectionTop + sectionHeight) {
          setScrollProgress(100);
        } else if (
          scrollY + viewportHeight / 2 >= sectionTop &&
          scrollY + viewportHeight / 2 <= sectionTop + sectionHeight
        ) {
          const progress = 100 - 100 * (1 - (scrollY + viewportHeight / 2 - sectionTop) / sectionHeight);
          setScrollProgress(progress > 100 ? 100 : progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="scroll-section">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VerticalScroll;
