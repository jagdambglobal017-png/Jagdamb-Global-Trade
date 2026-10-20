import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919403340502"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Jagdamb Global Trade on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white shadow-2xl hover:shadow-slate-800/40 border border-slate-600/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      <div className="relative flex items-center justify-center">
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
      </div>
      <span className="text-xs font-extrabold tracking-wide hidden sm:inline-block">
        WhatsApp Helpline
      </span>
    </a>
  );
};
