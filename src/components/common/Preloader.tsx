import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // 2.8s loading time for the animation to play
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-forest-950 to-navy-900 opacity-90" />
      
      {/* Animated Light Sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-[200%] h-full bg-gradient-to-r from-transparent via-gold-400/10 to-transparent -rotate-45"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <motion.div
          className="w-24 h-24 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center border-2 border-gold-400/40 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Anchor className="w-12 h-12 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="font-heading font-extrabold text-4xl md:text-5xl tracking-wide text-white">
            Jagdamb <span className="text-gold-400">Global Trade</span>
          </span>
          <span className="text-xs md:text-sm uppercase font-bold tracking-widest text-gold-400/80">
            Connecting India With Global Markets
          </span>
        </motion.div>

        <motion.div
          className="w-64 h-[2px] bg-white/10 rounded-full mt-10 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,1)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
