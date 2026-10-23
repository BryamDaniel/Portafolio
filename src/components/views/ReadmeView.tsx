import React from 'react';
import type { FileId } from '../../types/portfolio';

interface ReadmeViewProps {
  onOpenFile: (file: FileId) => void;
}

const techCategories = [
  {
    name: 'Languages & Core',
    color: 'border-purple-800/60 text-purple-300 bg-purple-950/30',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'PHP']
  },
  {
    name: 'Frameworks & UI',
    color: 'border-cyan-800/60 text-cyan-300 bg-cyan-950/30',
    skills: ['React', 'Next.js', 'Node.js', 'Vue.js 3', 'Tailwind CSS', 'Vite']
  },
  {
    name: 'Cloud & Systems Scalability',
    color: 'border-lime-800/60 text-lime-300 bg-lime-950/30',
    skills: ['Firebase', 'Firestore', 'Docker', 'AppSmith', 'Git', 'Linux']
  },
  {
    name: 'Automation & RPA',
    color: 'border-amber-800/60 text-amber-300 bg-amber-950/30',
    skills: ['Python Automation', 'Power Automate', 'Automate Enterprise', 'Web Scraping', 'Chrome Extensions']
  }
];

export const ReadmeView: React.FC<ReadmeViewProps> = ({ onOpenFile }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 border border-purple-800/30 glow-accent space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            Desarrollo &amp; Eficiencia Operativa
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-950/80 border border-lime-800/60 text-lime-300 text-xs font-mono">
            <span>+03 Años de experiencia</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <span>Telecomunicaciones &amp; Sector Público</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          De la infraestructura al software: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-lime-400">
            automatizaciones de alta precisión y desarrollo moderno
          </span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
          Especializado en la evolución técnica de herramientas internas y la construcción de automatizaciones a medida. Desde el soporte in-house en la sede de <strong>Telefónica (Gran Vía)</strong> modernizando arquitecturas hacia React y Firebase, hasta el desarrollo de paneles operativos de alta complejidad para <strong>MásMóvil, AENA y Madrid Digital</strong>.
        </p>

        {/* Quick Highlights Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-2xl font-bold text-lime-400">+03</div>
            <div className="text-[11px] text-slate-400">Años de experiencia</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xl font-bold text-cyan-300">Telefónica</div>
            <div className="text-[11px] text-slate-400">Gran Vía · Full Stack</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xl font-bold text-purple-300">Zelenza</div>
            <div className="text-[11px] text-slate-400">Infraestructura Interna</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xl font-bold text-amber-300">RPA &amp; Python</div>
            <div className="text-[11px] text-slate-400">Chrome &amp; APIs Engine</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
          <button
            onClick={() => onOpenFile('experiencia.json')}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors cursor-pointer shadow-lg shadow-purple-600/20 active:scale-95"
          >
            Ver Trayectoria (5 Etapas) 💼
          </button>
          <button
            onClick={() => onOpenFile('proyectos/destacados.tsx')}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors cursor-pointer active:scale-95"
          >
            Proyectos en GitHub 🚀
          </button>
          <a
            href="https://github.com/BryamDaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-purple-900/60 text-purple-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>GitHub</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/bryam-amaya-3ba7941b8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-900/60 text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>LinkedIn</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Tech Stack Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-ide-border pb-2">
          <h2 className="text-base font-bold text-white font-mono">// Stack Tecnológico</h2>
          <span className="text-xs font-mono text-slate-500">Categorías &amp; Herramientas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl bg-ide-sidebar border ${cat.color.split(' ')[0]} space-y-3`}
            >
              <div className="font-mono text-xs font-bold text-white flex items-center justify-between">
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded border ${cat.color}`}>
                  Core
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-950/80 border border-slate-800 text-slate-200 px-2.5 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy / Value Drivers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-ide-sidebar border border-ide-border space-y-2 hover:border-purple-500/30 transition-colors">
          <div className="text-purple-400 font-mono text-sm font-semibold">01. Visión Integral</div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Base en redes y sistemas (SMR) combinada con desarrollo multiplataforma (DAM). Dominio desde la infraestructura física hasta la capa de interfaz.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-ide-sidebar border border-ide-border space-y-2 hover:border-lime-500/30 transition-colors">
          <div className="text-lime-400 font-mono text-sm font-semibold">02. Automatización Total</div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Evolución desde RPA Enterprise y Power Automate hasta extensiones de Chrome personalizadas y bots híbridos en Python con 2FA.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-ide-sidebar border border-ide-border space-y-2 hover:border-cyan-500/30 transition-colors">
          <div className="text-cyan-400 font-mono text-sm font-semibold">03. Modernización Cloud</div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Transición contrastada de sistemas heredados (PHP/SQL en OVH/Hostinger) hacia arquitecturas Cloud con React, TypeScript y Firebase Serverless.
          </p>
        </div>
      </div>
    </div>
  );
};
