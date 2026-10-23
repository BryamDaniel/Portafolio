import React, { useState } from 'react';
import type { FileId, ProjectFilter } from '../../types/portfolio';

interface Project {
  id: string;
  category: 'fullstack' | 'automation' | 'cli-data';
  badge: string;
  badgeStyle: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  fileLink?: FileId;
  fileLinkText?: string;
  command?: string;
}

interface ProjectsViewProps {
  onOpenFile?: (file: FileId) => void;
}

const projects: Project[] = [
  {
    id: 'vector-migration-cli',
    category: 'cli-data',
    badge: 'CLI & AI Data Pipeline',
    badgeStyle: 'text-purple-400 bg-purple-950/80 border-purple-800/50',
    title: 'Vector Migration CLI',
    subtitle: 'ETL Pipeline de embeddings locales sin coste de API hacia Qdrant',
    description:
      'Herramienta de línea de comandos en TypeScript / Node.js diseñada para ejecutar canalizaciones ETL de datos empresariales desde APIs/BBDD tradicionales hacia el motor vectorial NoSQL Qdrant, generando embeddings semánticos en local.',
    highlights: [
      'Multihilo Real (Worker Threads): Aislamiento de inferencia de IA (@xenova/transformers) manteniendo el Event Loop 100% fluido.',
      'Caché LRU con SHA-256: Sincronización delta que reduce re-inferencias a < 1 segundo.',
      'Tolerancia a Fallos & DLQ: Aislamiento automático de anomalías en dlq-report.json sin interrumpir el flujo.',
      'CLI Interactiva con Commander: Búsquedas semánticas en lenguaje natural con soporte de flags (--limit, -l).'
    ],
    tags: ['TypeScript', 'Node.js', 'Qdrant', 'Docker', 'Zod', '@xenova/transformers', 'Commander'],
    githubUrl: 'https://github.com/BryamDaniel/vector-migration-cli',
    fileLink: 'proyectos/vector_migration_cli.ts',
    fileLinkText: 'Ver Código & Flujo ETL'
  },
  {
    id: 'app-dragonball-api',
    category: 'fullstack',
    badge: 'FullStack Containerized App',
    badgeStyle: 'text-cyan-400 bg-cyan-950/80 border-cyan-800/50',
    title: 'Dragon Ball API FullStack',
    subtitle: 'FastAPI (Python) + Vue.js 3 + Docker Compose',
    description:
      'Aplicación FullStack contenerizada que consume la API de Dragon Ball mostrando una tabla reactiva de personajes y vistas de detalles individuales mediante componentes modulares.',
    highlights: [
      'Backend Python + FastAPI: Endpoints asíncronos de alto rendimiento con CORS, httpx y uvicorn.',
      'Frontend Vue.js 3 + Tailwind CSS: Arquitectura basada en componentes (Modal.vue, Tabla.vue, Card.vue).',
      'Orquestación Docker Compose: Despliegue reproducible y aislado con un único comando.',
      'Gestión de Estado Reactiva: Paginación fluida, filtrado dinámico y renderizado condicional.'
    ],
    tags: ['Python', 'FastAPI', 'Vue.js 3', 'Tailwind CSS', 'Docker Compose', 'httpx', 'uvicorn'],
    githubUrl: 'https://github.com/BryamDaniel/APP-DragonBall-API',
    fileLink: 'proyectos/dragonball_compose.yml',
    fileLinkText: 'Ver Dockerfile & Estructura',
    command: 'docker compose up --build'
  },
  {
    id: 'chrome-automation-engine',
    category: 'automation',
    badge: 'Enterprise Browser Automation',
    badgeStyle: 'text-lime-400 bg-lime-950/80 border-lime-800/50',
    title: 'Chrome Automation Engine',
    subtitle: 'Extensión a medida para equipos de soporte y operaciones técnicas',
    description:
      'Solución desarrollada para resolver tareas operativas manuales y repetitivas de gran volumen en portales web de terceros.',
    highlights: [
      'Inyección y Modificación del DOM: Inserción de controles y botones personalizados en portales externos para acelerar el flujo del técnico.',
      'Automatización de Requests Asíncronas: Ejecución paralela de peticiones HTTP en segundo plano para extracción masiva de datos.',
      'Motor de Pruebas Autónomo: Flujo de validación técnica que ejecuta suites de tests y audita resultados inmediatamente.'
    ],
    tags: ['JavaScript', 'Chrome Extension API', 'DOM Injection', 'Async Requests', 'Testing Engine']
  },
  {
    id: 'enterprise-ops-hub',
    category: 'fullstack',
    badge: 'Cloud & Enterprise Systems',
    badgeStyle: 'text-amber-400 bg-amber-950/80 border-amber-800/50',
    title: 'Telefónica & Sector Público Ops Hub',
    subtitle: 'Modernización in-house en Gran Vía y paneles AppSmith en Méndez Álvaro',
    description:
      'Modernización integral de herramientas internas en Telefónica (migrando de PHP/MySQL legacy a React + Firebase Cloud Serverless) y desarrollo de herramientas operativas en AppSmith para MásMóvil, AENA y Madrid Digital.',
    highlights: [
      'Telefónica Gran Vía: Migración completa a React, TypeScript, Vite, Tailwind y Firebase (Firestore, Auth MFA).',
      'MásMóvil: Integración y consumo seguro de múltiples endpoints REST con autenticación OAuth en AppSmith.',
      'Madrid Digital & AENA: Interfaces de gestión de incidencias, generadores de plantillas y dashboards visuales.'
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'AppSmith', 'REST APIs', 'OAuth', 'PHP', 'Tailwind CSS']
  }
];

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenFile }) => {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ide-border pb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Proyectos &amp; Soluciones Técnicas</h2>
          <p className="text-xs text-slate-400 font-mono">
            Arquitecturas contenerizadas, pipelines ETL de IA y automatización empresarial
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Todos ({projects.length})
          </button>
          <button
            onClick={() => setFilter('cli-data')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filter === 'cli-data' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            CLI &amp; AI Data
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filter === 'fullstack' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Full-Stack &amp; Docker
          </button>
          <button
            onClick={() => setFilter('automation')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              filter === 'automation' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Automatización &amp; RPA
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-ide-sidebar border border-ide-border space-y-4 hover:border-purple-500/50 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${project.badgeStyle}`}>
                  {project.badge}
                </span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>GitHub</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-purple-400 font-mono mt-0.5">
                  {project.subtitle}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Technical Highlights list */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 text-xs">
                <div className="text-[11px] font-mono font-semibold text-slate-400">
                  🚀 Highlights de Arquitectura:
                </div>
                <ul className="space-y-1 text-slate-300 font-sans text-[11px]">
                  {project.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-lime-400 shrink-0 mt-0.5">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution Command preview if applicable */}
              {project.command && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs">
                  <span className="text-slate-500">Ejecución:</span>
                  <span className="text-lime-400 font-semibold">{project.command}</span>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                {project.fileLink && onOpenFile && (
                  <button
                    onClick={() => onOpenFile(project.fileLink!)}
                    className="py-2 px-3 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-800/80 text-purple-200 text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>📄</span>
                    <span>{project.fileLinkText || 'Ver Archivo'}</span>
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-center transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                      !project.fileLink ? 'col-span-2' : ''
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
