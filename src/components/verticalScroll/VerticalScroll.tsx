import React, { useEffect, useRef,useState } from 'react';

import './VerticalScroll.scss';

const VerticalScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.offsetTop; // Section top position
        const sectionHeight = section.offsetHeight; // Section height
        const scrollY = window.scrollY; // Current top scroll position 
        const viewportHeight = window.innerHeight; // Viewport height
        console.table({ sectionTop, sectionHeight, scrollY, viewportHeight })
        // Check if the scroll is within the section
        if(scrollY + viewportHeight / 2 < sectionTop) {
          setScrollProgress(0);
        } else if(scrollY + viewportHeight / 2 > sectionTop + sectionHeight) {
          setScrollProgress(100);
        } else if(scrollY + viewportHeight / 2 >= sectionTop && scrollY + viewportHeight / 2 <= sectionTop + sectionHeight) {

          // if (scrollY + viewportHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          // ((current bottom scroll) - (start of the section)) / (section height + viewport height) * 100
          // 2624 - 1728 / 1792 = 0.5 * 100 = 50%
          const progress = 100 - 100 * (1 - (scrollY + viewportHeight / 2 - sectionTop) / sectionHeight)

          
          // const progress =
          //   ((scrollY + viewportHeight - sectionTop) / (sectionHeight + viewportHeight)) * 100; // percentage of the scroll within the section
          console.log(progress)
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
      {/* Your section content goes here */}
    </div>
  )
};

export default VerticalScroll;
