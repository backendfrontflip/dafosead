// src/components/ScrollRevealWrapper.jsx
import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealWrapper = ({ children, delay = 0 }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        delay: delay * 1000, // convert seconds to ms
        distance: '50px',
        origin: 'bottom',
        duration: 800,
        opacity: 0,
        easing: 'ease',
        reset: false,
        cleanup: true,
      });
    }
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollRevealWrapper;
