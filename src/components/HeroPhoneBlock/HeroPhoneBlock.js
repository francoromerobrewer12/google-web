import React, { useEffect } from 'react';
import './HeroPhoneBlock.css';
import imgSrc from '../../assets/hero-phone-frame-v2.png';
import { gsap } from 'gsap';

const videoUrl =
  'https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0';

function HeroPhoneBlock() {
  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();
      tl.fromTo('.hero-phone-black', { y: 300 }, { y: 0, duration: 1 });
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: '.hero-phone-black',
          start: 'top top',
          end: '+=1000',
          pin: true,
          scrub: true,
        },
      });
      tl.to('.hero-phone-black', { scale: 1.2, duration: 2 }, '+=1');
      tl.to('.App', { backgroundColor: 'black', duration: 1 }, '-=1');
      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className='hero-phone-black'>
      <div
        className='hero-phone-template'
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsinline=''
          webkit-playsinline=''
          className='collage-element'
        ></video>
      </div>
    </div>
  );
}

export default HeroPhoneBlock;
