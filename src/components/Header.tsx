import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';

interface HeaderProps {
  onNavigate?: (id: string) => void;
  onViewChange?: (view: 'home' | 'details') => void;
  isSimple?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onViewChange, isSimple = false }) => {
  const { header } = CONTENT;

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass px-6 md:px-8 py-3.5 rounded-full flex gap-6 md:gap-12 items-center w-full max-w-fit justify-between md:justify-center"
      >
        <div className="text-sm font-bold tracking-widest text-teal-400 cursor-pointer" onClick={() => onViewChange?.('home')}>
          {header.logo}<span className="text-white">{header.logoSuffix}</span>
        </div>

        {!isSimple && (
          <>
            <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 items-center">
              {header.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.id);
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => onViewChange?.('details')}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-colors ml-auto md:ml-0"
            >
              {header.projects}
            </button>
          </>
        )}

        {/* <div className="flex gap-4">
          <Magnetic><Globe size={16} className="text-zinc-500 hover:text-white" /></Magnetic>
          <Magnetic><Terminal size={16} className="text-zinc-500 hover:text-white" /></Magnetic>
        </div> */}
      </motion.div>
    </nav>
  );
};
