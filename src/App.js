import './App.css';
import HeroHeader from './components/HeroHeader/HeroHeader';
import HeroCollage from './components/HeroCollage/HeroCollage';
import HeroPhoneBlock from './components/HeroPhoneBlock/HeroPhoneBlock';
import HeroUsedBy from './components/HeroUsedBy/HeroUsedBy';
import HeroFooter from './components/HeroFooter/HeroFooter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='App'>
      <HeroHeader />
      <div className='hero-media'>
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}

export default App;
