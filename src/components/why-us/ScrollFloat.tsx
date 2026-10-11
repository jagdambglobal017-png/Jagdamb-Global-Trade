import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  containerClassName?: string;
  textClassName?: string;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top bottom-=20%',
  scrollEnd = 'bottom center',
  stagger = 0.03,
  containerClassName = '',
  textClassName = '',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charEls = el.querySelectorAll('.scroll-float-char');
    if (!charEls.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charEls,
        {
          opacity: 0,
          y: 40,
          rotateX: -90,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: animationDuration,
          ease: ease,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  // Split string into characters preserving spaces
  const characters = children.split('');

  return (
    <h2
      ref={containerRef}
      className={`why-us-scroll text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-center ${containerClassName}`}
      style={{ perspective: '1000px' }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className={`scroll-float-char inline-block why-us-scroll-text ${textClassName}`}
          style={{ willChange: 'transform, opacity' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h2>
  );
};
