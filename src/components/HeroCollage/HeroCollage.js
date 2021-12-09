import React, { useEffect } from 'react';
import './HeroCollage.css';
import { gsap } from 'gsap';
import { photos, videos } from '../../data';

function VideoElement({ src }) {
  return (
    <div className='hero-element'>
      <video
        className='collage-element'
        playsinline=''
        autoPlay
        webkit-playsinline=''
        loop
        muted
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className='hero-element'>
      <img src={src} alt='' className='collage-element' />
    </div>
  );
}

function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.hero-element',
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.1 * index;
        },
      }
    );
  }, []);

  return (
    <div className='hero-collage'>
      <div className='left-column'>
        {leftImages.map(src => {
          return <ImageElement src={src} />;
        })}
        <VideoElement src={leftVideo} />
      </div>
      <div className='right-column'>
        {rightImages.map(src => {
          return <ImageElement src={src} />;
        })}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
}

export default HeroCollage;
