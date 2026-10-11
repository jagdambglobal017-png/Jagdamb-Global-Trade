import React, { useRef, useState } from 'react';

interface ReflectiveCardProps {
  overlayColor?: string;
  blurStrength?: number;
  metalness?: number;
  roughness?: number;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  grayscale?: number;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  overlayColor = 'rgba(0, 0, 0, 0.18)',
  blurStrength = 8,
  metalness = 0.65,
  roughness = 0.35,
  color = '#ffffff',
  className = '',
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotY = ((x - centerX) / centerX) * 8; // degrees Y rotation
    const rotX = -((y - centerY) / centerY) * 8; // degrees X rotation

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden transition-transform duration-200 ease-out glass-card border border-white/80 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        willChange: 'transform',
      }}
    >
      {/* REFLECTIVE GLARE LAYER */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(212, 175, 55, 0.15) 30%, transparent 70%)`,
        }}
      />

      {/* METALLIC / GLASS OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundColor: color,
          background: overlayColor,
          opacity: 0.3 * metalness + 0.1 * roughness,
          backdropFilter: `blur(${blurStrength}px)`,
        }}
      />

      {/* CARD CONTENT CONTAINER */}
      <div className="relative z-20 h-full flex flex-col">{children}</div>
    </div>
  );
};
