import React, { useState } from 'react';
import type { FileId } from '../types/portfolio';

interface SidebarProps {
  activeFile: FileId;
  sidebarOpen: boolean;
  onOpenFile: (file: FileId) => void;
  onCloseMobileSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeFile,
  sidebarOpen,
  onOpenFile,
  onCloseMobileSidebar,
}) => {
  const [foldersOpen, setFoldersOpen] = useState<{ [key: string]: boolean }>({
    proyectos: true,
  });

  const toggleFolder = (folderName: string) => {
    setFoldersOpen((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const handleSelectFile = (file: FileId) => {
    onOpenFile(file);
    onCloseMobileSidebar();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={onCloseMobileSidebar}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-20 md:hidden"
        />
      )}

      <aside
        className={`fixed md:relative z-20 w-64 h-[calc(100vh-2.5rem)] md:h-full bg-ide-sidebar border-r border-ide-border flex flex-col transition-transform duration-200 ease-in-out shrink-0 top-10 md:top-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Section Title */}
        <div className="p-3 text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase border-b border-ide-border flex items-center justify-between select-none">
          <span>EXPLORADOR</span>
          <span className="text-[10px] text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/50">
            v2.6
          </span>
        </div>

        {/* Tree View */}
        <div className="flex-1 overflow-y-auto p-2 font-mono text-xs space-y-1 select-none">
          <div className="text-slate-500 px-2 py-1 flex items-center gap-1 font-semibold">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span>Portafolio-ROOT</span>
          </div>

          <div className="pl-3 space-y-0.5">
            {/* File: README.md */}
            <button
              onClick={() => handleSelectFile('README.md')}
              className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                activeFile === 'README.md'
                  ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span className="text-cyan-400 font-bold">📄</span>
              <span>README.md</span>
            </button>

            {/* File: experiencia.json */}
            <button
              onClick={() => handleSelectFile('experiencia.json')}
              className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                activeFile === 'experiencia.json'
                  ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span className="text-yellow-400 font-bold">{'{ }'}</span>
              <span>experiencia.json</span>
            </button>

            {/* Folder: proyectos */}
            <div>
              <div
                onClick={() => toggleFolder('proyectos')}
                className="px-2 py-1.5 text-slate-300 hover:bg-slate-800/40 rounded flex items-center gap-2 cursor-pointer"
              >
                <span className="text-amber-400">
                  {foldersOpen.proyectos ? '📂' : '📁'}
                </span>
                <span className="font-semibold">proyectos/</span>
              </div>

              {foldersOpen.proyectos && (
                <div className="pl-4 space-y-0.5 border-l border-ide-border ml-3 mt-0.5">
                  <button
                    onClick={() => handleSelectFile('proyectos/destacados.tsx')}
                    className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                      activeFile === 'proyectos/destacados.tsx'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-blue-400 font-bold">⚛</span>
                    <span>destacados.tsx</span>
                  </button>
                  <button
                    onClick={() => handleSelectFile('proyectos/vector_migration_cli.ts')}
                    className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                      activeFile === 'proyectos/vector_migration_cli.ts'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-cyan-400 font-bold">TS</span>
                    <span>vector_migration_cli.ts</span>
                  </button>
                  <button
                    onClick={() => handleSelectFile('proyectos/dragonball_compose.yml')}
                    className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                      activeFile === 'proyectos/dragonball_compose.yml'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-amber-400 font-bold">🐳</span>
                    <span>dragonball_compose.yml</span>
                  </button>
                </div>
              )}
            </div>

            {/* File: ai_assistant.py */}
            <button
              onClick={() => handleSelectFile('ai_assistant.py')}
              className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                activeFile === 'ai_assistant.py'
                  ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span className="text-purple-400 font-bold">🤖</span>
              <span>ai_assistant.py</span>
            </button>

            {/* File: contacto.env */}
            <button
              onClick={() => handleSelectFile('contacto.env')}
              className={`w-full text-left px-2 py-1.5 rounded flex items-center gap-2 transition-colors cursor-pointer ${
                activeFile === 'contacto.env'
                  ? 'bg-purple-950/60 text-purple-300 border border-purple-800/60'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <span className="text-ide-neon font-bold">⚙</span>
              <span>contacto.env</span>
            </button>
          </div>
        </div>

        {/* Bottom Sidebar Mini Stats */}
        <div className="p-3 border-t border-ide-border bg-slate-950/50 text-[11px] font-mono text-slate-400 space-y-1 select-none">
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <span className="text-ide-neon flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-ide-neon animate-pulse"></span> Zelenza Dev
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Perfil:</span>
            <span className="text-slate-300 font-medium">Sistemas &amp; Dev (+4A)</span>
          </div>
        </div>
      </aside>
    </>
  );
};
