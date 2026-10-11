import React, { useEffect, useRef, useState } from 'react';

export type ScrollRevealAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'slide-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: ScrollRevealAnimation;
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'scale-up':
          return 'opacity-0 scale-95 translate-y-6';
        case 'slide-in':
          return 'opacity-0 -translate-x-8';
        case 'fade-down':
          return 'opacity-0 -translate-y-8';
        case 'fade-left':
          return 'opacity-0 translate-x-8';
        case 'fade-right':
          return 'opacity-0 -translate-x-8';
        case 'fade-up':
        default:
          return 'opacity-0 translate-y-8';
      }
    }
    return 'opacity-100 scale-100 translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) ${getAnimationStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
