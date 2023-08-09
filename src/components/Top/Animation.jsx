import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Animation = props => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, { color: props.data.color, duration: 1.3 });

    return () => {
      gsap.killTweensOf(textElement);
    };
  }, [props.data.color]);

  return (
    <span
      ref={textRef}
      key={props.data.text}
    >
      {props.data.text}
    </span>
  );
};

export default Animation;
