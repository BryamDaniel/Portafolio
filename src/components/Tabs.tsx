import React from 'react';
import type { FileId } from '../types/portfolio';

interface TabsProps {
  openTabs: FileId[];
  activeFile: FileId;
  onOpenFile: (file: FileId) => void;
  onCloseTab: (file: FileId) => void;
}

const getFileIcon = (fileName: string) => {
  if (fileName.endsWith('.md')) return '📄';
  if (fileName.endsWith('.json')) return '{ }';
  if (fileName.endsWith('.tsx') || fileName.endsWith('.ts')) return '⚛';
  if (fileName.endsWith('.yml') || fileName.endsWith('.yaml')) return '🐳';
  if (fileName.endsWith('.py')) return '🐍';
  if (fileName.endsWith('.env')) return '⚙';
  return '📁';
};

export const Tabs: React.FC<TabsProps> = ({
  openTabs,
  activeFile,
  onOpenFile,
  onCloseTab,
}) => {
  return (
    <div className="h-9 bg-ide-bg border-b border-ide-border flex items-center px-1 overflow-x-auto shrink-0 select-none no-scrollbar">
      {openTabs.map((tab) => {
        const isActive = activeFile === tab;
        return (
          <div
            key={tab}
            onClick={() => onOpenFile(tab)}
            className={`h-full px-3 text-xs font-mono flex items-center gap-2 border-r border-ide-border cursor-pointer transition-colors whitespace-nowrap ${
              isActive
                ? 'bg-ide-panel text-purple-300 border-t-2 border-purple-500'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/40'
            }`}
          >
            <span>{getFileIcon(tab)}</span>
            <span>{tab}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tab);
              }}
              className="hover:text-red-400 rounded p-0.5 text-[10px] ml-1 transition-colors cursor-pointer"
              title="Cerrar pestaña"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
};
