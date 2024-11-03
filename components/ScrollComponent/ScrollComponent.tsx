"use client";

import React from 'react';
import { useScroll } from './useScroll';

const ScrollComponent: React.FC = () => {
  const [ref, scrollToTop] = useScroll();

  return (
    <div className='md:px-7 px-2 md:pt-7 pt-2' ref={ref}>
      <img src="/images/img_profile.jpg" alt="Scroll to top" className="fixed md:w-16 w-10 md:h-16 h-10 rounded-full border border-black" onClick={scrollToTop}/>
    </div>
  );
};

export default ScrollComponent;