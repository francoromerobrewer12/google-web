import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import { photos } from '../../data';
import './HeroUsedBy.css';

function HeroUsedBy() {
  return (
    <div className='hero-usedBy'>
      <div className='hero-usedBy-copy'>
        <img src={photos[0]} alt='' />
        <p>See what happens when Google brings stories to the open web.</p>
      </div>
      <div className='hero-usedBy-logos'>
        <img src={photos[3]} alt='' />
        <p>Let's do whatever for our Nature!</p>
      </div>
    </div>
  );
}

export default HeroUsedBy;
