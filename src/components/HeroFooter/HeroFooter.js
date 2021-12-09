import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import './HeroFooter.css';

function HeroFooter() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#footer',
        start: 'top center',
        end: '+=200',
        scrub: true,
      },
    });
    tl.to('.App', { backgroundColor: 'white', duration: 0.25 });
  }, []);

  return (
    <div className='hero-text-section' id='footer'>
      <h1 id='hero-text'>
        Visual stories that look like yours, because they are.
      </h1>
    </div>
  );
}

export default HeroFooter;
