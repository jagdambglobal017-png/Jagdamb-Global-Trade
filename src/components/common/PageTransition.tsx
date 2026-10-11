import React from 'react';
import { Anchor } from 'lucide-react';

interface PageTransitionProps {
  isLoading: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950 text-white transition-opacity duration-500 animate-fadeInUp">
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-forest-950 to-navy-900 opacity-90" />
      
      {/* LIGHT SWEEP ANIMATED LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-gold-400/20 to-transparent animate-light-sweep" />
      </div>

      {/* BRIEF LOGO BADGE */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center border-2 border-gold-400/40 shadow-gold-glow animate-pulse">
          <Anchor className="w-8 h-8" />
        </div>
        <span className="font-heading font-extrabold text-2xl tracking-wide text-white">
          Jagdamb <span className="text-gold-400">Global Trade</span>
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400/80">
          Connecting India With Global Markets
        </span>
      </div>
    </div>
  );
};
