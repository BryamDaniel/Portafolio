import React from 'react';
import type { FileId } from '../types/portfolio';

interface HeaderProps {
  activeFile: FileId;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onOpenFile: (file: FileId) => void;
  onDownloadCv: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeFile,
  sidebarOpen,
  onToggleSidebar,
  onOpenFile,
  onDownloadCv,
}) => {
  return (
    <header className="h-10 bg-ide-sidebar border-b border-ide-border flex items-center justify-between px-4 select-none shrink-0 z-30">
      <div className="flex items-center gap-3">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block hover:opacity-100 transition-opacity cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block hover:opacity-100 transition-opacity cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block hover:opacity-100 transition-opacity cursor-pointer"></span>
        </div>
        <div className="h-4 w-px bg-ide-border mx-1"></div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="text-purple-400">dev-workspace</span>
          <span>/</span>
          <span className="text-slate-200 font-medium">{activeFile}</span>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
        {/* Social Links */}
        <div className="hidden sm:flex items-center gap-1 border-r border-ide-border pr-2 mr-0.5">
          <a
            href="https://github.com/BryamDaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="GitHub - BryamDaniel"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/bryam-amaya-3ba7941b8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors cursor-pointer"
            title="LinkedIn - Bryam Amaya"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.09v8.37h2.74z" />
            </svg>
          </a>
        </div>

        {/* Sidebar Toggle on Mobile */}
        <button
          onClick={onToggleSidebar}
          className={`md:hidden px-2.5 py-1 rounded border transition-colors flex items-center gap-1 cursor-pointer ${
            sidebarOpen
              ? 'bg-purple-950 border-purple-700 text-purple-200'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          aria-label="Toggle explorer"
        >
          <span>📂</span>
          <span className="hidden xs:inline">Explorer</span>
        </button>

        <button
          onClick={() => onOpenFile('ai_assistant.py')}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/80 border border-purple-800/80 text-purple-300 hover:bg-purple-900/50 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span>AI Assistant</span>
        </button>

        <button
          onClick={onDownloadCv}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-ide-neon text-slate-950 font-semibold hover:bg-lime-400 transition-colors cursor-pointer shadow-sm active:scale-95"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="hidden xs:inline">Descargar CV</span>
          <span className="xs:hidden">CV</span>
        </button>
      </div>
    </header>
  );
};
