import { useState } from 'react';
import type { FileId } from './types/portfolio';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Tabs } from './components/Tabs';
import { Footer } from './components/Footer';
import { ReadmeView } from './components/views/ReadmeView';
import { ExperienceView } from './components/views/ExperienceView';
import { ProjectsView } from './components/views/ProjectsView';
import { CodePreviewView } from './components/views/CodePreviewView';
import { DragonBallComposeView } from './components/views/DragonBallComposeView';
import { AiAssistantView } from './components/views/AiAssistantView';
import { ContactView } from './components/views/ContactView';

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFile, setActiveFile] = useState<FileId>('README.md');
  const [openTabs, setOpenTabs] = useState<FileId[]>([
    'README.md',
    'experiencia.json',
    'proyectos/destacados.tsx',
    'ai_assistant.py',
  ]);
  const [cvAlert, setCvAlert] = useState(false);

  const openFile = (fileName: FileId) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs((prev) => [...prev, fileName]);
    }
    setActiveFile(fileName);
  };

  const closeTab = (fileName: FileId) => {
    const updatedTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(updatedTabs);

    if (activeFile === fileName) {
      if (updatedTabs.length > 0) {
        setActiveFile(updatedTabs[updatedTabs.length - 1]);
      } else {
        // If all closed, reopen README
        setActiveFile('README.md');
        setOpenTabs(['README.md']);
      }
    }
  };

  const handleDownloadCv = () => {
    setCvAlert(true);
    setTimeout(() => {
      setCvAlert(false);
    }, 3500);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between overflow-hidden bg-ide-bg text-slate-200 font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">
      {/* Toast Alert for CV */}
      {cvAlert && (
        <div className="fixed top-12 right-4 z-50 bg-ide-sidebar border border-ide-neon text-lime-300 px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 font-mono text-xs animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-ide-neon animate-ping"></span>
          <span>Iniciando descarga de CV en formato PDF...</span>
        </div>
      )}

      {/* Top Menu / Window Control Bar */}
      <Header
        activeFile={activeFile}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        onOpenFile={openFile}
        onDownloadCv={handleDownloadCv}
      />

      {/* Main IDE Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar / File Explorer */}
        <Sidebar
          activeFile={activeFile}
          sidebarOpen={sidebarOpen}
          onOpenFile={openFile}
          onCloseMobileSidebar={() => setSidebarOpen(false)}
        />

        {/* Main Workspace Editor Panel */}
        <main className="flex-1 flex flex-col bg-ide-panel overflow-hidden">
          {/* Open Tabs Header */}
          <Tabs
            openTabs={openTabs}
            activeFile={activeFile}
            onOpenFile={openFile}
            onCloseTab={closeTab}
          />

          {/* Active Content Display Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
            {activeFile === 'README.md' && <ReadmeView onOpenFile={openFile} />}
            {activeFile === 'experiencia.json' && <ExperienceView />}
            {activeFile === 'proyectos/destacados.tsx' && <ProjectsView onOpenFile={openFile} />}
            {activeFile === 'proyectos/vector_migration_cli.ts' && <CodePreviewView />}
            {activeFile === 'proyectos/dragonball_compose.yml' && <DragonBallComposeView />}
            {activeFile === 'ai_assistant.py' && <AiAssistantView />}
            {activeFile === 'contacto.env' && <ContactView />}
          </div>

          {/* Footer / Status Bar */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
