import React, { useState } from 'react';

export const DragonBallComposeView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('docker compose up --build').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ide-border pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white font-mono">dragonball_compose.yml</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/60 text-amber-300">
              Docker Compose
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Arquitectura de contenedores FullStack: Python FastAPI (Backend) + Vue.js 3 Tailwind (Frontend)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/BryamDaniel/APP-DragonBall-API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 bg-purple-950 border border-purple-800 text-purple-300 rounded hover:bg-purple-900 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>GitHub Repo</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Execution Command Banner */}
      <div className="p-4 rounded-xl bg-ide-sidebar border border-ide-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-xs font-mono text-slate-400">Comando de orquestación y arranque:</div>
          <div className="flex items-center gap-2 font-mono text-sm text-lime-400 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
            <span className="text-slate-500">$</span>
            <span>docker compose up --build</span>
          </div>
        </div>
        <button
          onClick={copyCommand}
          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono transition-colors cursor-pointer self-start sm:self-center"
        >
          {copied ? '¡Copiado!' : 'Copiar Comando'}
        </button>
      </div>

      {/* 2-Column: Docker Compose Code & Project Tree */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Docker Compose YAML preview */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="text-amber-400">🐳</span>
            <span>docker-compose.yml</span>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-purple-900/50">
            <code>
              <span className="text-purple-400">services</span>:{'\n'}
              {'  '}<span className="text-cyan-400">backend</span>:{'\n'}
              {'    '}<span className="text-slate-500">build</span>: ./backend{'\n'}
              {'    '}<span className="text-slate-500">container_name</span>: dragonball-api-backend{'\n'}
              {'    '}<span className="text-slate-500">ports</span>:{'\n'}
              {'      '}- <span className="text-lime-400">"8000:8000"</span>{'\n'}
              {'    '}<span className="text-slate-500">environment</span>:{'\n'}
              {'      '}- PORT=<span className="text-lime-400">8000</span>{'\n'}
              {'    '}<span className="text-slate-500">restart</span>: always{'\n\n'}
              {'  '}<span className="text-cyan-400">frontend</span>:{'\n'}
              {'    '}<span className="text-slate-500">build</span>: ./frontend{'\n'}
              {'    '}<span className="text-slate-500">container_name</span>: dragonball-vue-client{'\n'}
              {'    '}<span className="text-slate-500">ports</span>:{'\n'}
              {'      '}- <span className="text-lime-400">"3000:3000"</span>{'\n'}
              {'    '}<span className="text-slate-500">depends_on</span>:{'\n'}
              {'      '}- backend{'\n'}
              {'    '}<span className="text-slate-500">restart</span>: always
            </code>
          </pre>
        </div>

        {/* Directory Structure Tree */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="text-cyan-400">📁</span>
            <span>Estructura de Directorios</span>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
            <code>
              <span className="text-yellow-400 font-bold">dragonball-project/</span>{'\n'}
              ├── <span className="text-purple-400 font-semibold">backend/</span>                <span className="text-slate-500"># FastAPI + httpx + uvicorn</span>{'\n'}
              │   ├── main.py            <span className="text-slate-500"># Endpoints &amp; CORS</span>{'\n'}
              │   ├── requirements.txt   <span className="text-slate-500"># Dependencias</span>{'\n'}
              │   └── Dockerfile         <span className="text-slate-500"># Imagen Python</span>{'\n'}
              │{'\n'}
              ├── <span className="text-cyan-400 font-semibold">frontend/</span>               <span className="text-slate-500"># Vue.js 3 + Tailwind</span>{'\n'}
              │   ├── src/{'\n'}
              │   │   ├── <span className="text-lime-400">components/</span>{'\n'}
              │   │   │   ├── Modal.vue  <span className="text-slate-500"># Detalle personaje</span>{'\n'}
              │   │   │   ├── Tabla.vue  <span className="text-slate-500"># Listado reactivo</span>{'\n'}
              │   │   │   └── Card.vue   <span className="text-slate-500"># Ficha técnica</span>{'\n'}
              │   │   ├── App.vue        <span className="text-slate-500"># Gestión de estado</span>{'\n'}
              │   │   └── main.js        <span className="text-slate-500"># Entrada Vue 3</span>{'\n'}
              │   ├── index.html{'\n'}
              │   ├── package.json{'\n'}
              │   ├── tailwind.config.js{'\n'}
              │   └── Dockerfile         <span className="text-slate-500"># Imagen Node/Nginx</span>{'\n'}
              │{'\n'}
              ├── .dockerignore{'\n'}
              └── <span className="text-amber-400 font-semibold">docker-compose.yml</span>     <span className="text-slate-500"># Orquestador</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
