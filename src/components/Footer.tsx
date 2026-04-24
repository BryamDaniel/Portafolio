import React from 'react';
import { CONTENT } from '../constants/content';

export const Footer: React.FC = () => {
  const { footer } = CONTENT;

  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-2xl font-bold tracking-tighter mb-8">
          {footer.logo}<span className="text-teal-400">{footer.logoSuffix}</span>
        </div>
        <div className="flex justify-center gap-12 text-sm text-zinc-500 uppercase tracking-widest">
          {footer.links.map((link) => (
            <a key={link.label} href={link.url} className="hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>
        <p className="mt-8 text-zinc-600 text-xs uppercase tracking-widest">{footer.copy}</p>
      </div>
    </footer>
  );
};
