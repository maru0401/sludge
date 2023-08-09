import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children, start, end }) => {
  let elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: `top ${start || '80%'} center`,
          end: `bottom ${end || '50%'}`,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [start, end]);

  return (
    <div ref={elementRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeIn;
