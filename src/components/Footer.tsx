import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="h-6 bg-ide-bg border-t border-ide-border flex items-center justify-between px-3 text-[11px] font-mono text-slate-500 shrink-0 select-none z-10">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 text-purple-400">
          <span>●</span> UTF-8
        </span>
        <span className="hidden sm:inline">Sistemas &amp; Desarrollo · Zelenza (+03 Años)</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Ln 42, Col 12</span>
        <span className="text-ide-neon font-medium">Ready</span>
      </div>
    </footer>
  );
};
