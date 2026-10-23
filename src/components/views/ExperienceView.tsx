import React, { useState } from 'react';

interface Stage {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  colorClass: string;
  borderClass: string;
  tagColor: string;
  client?: string;
  location?: string;
  phases?: {
    name: string;
    description: string;
    tags: string[];
  }[];
  subsections?: {
    title: string;
    items: string[];
    tags: string[];
  }[];
  details?: {
    title: string;
    description: string;
  }[];
}

const stages: Stage[] = [
  {
    number: 'Etapa 5 / 5',
    badge: 'Infraestructura Interna',
    title: 'Herramientas Operativas & Grandes Cuentas',
    subtitle: 'Sede Central, Méndez Álvaro',
    colorClass: 'text-purple-400',
    borderClass: 'border-purple-500/50',
    tagColor: 'text-purple-300 bg-purple-950/80 border-purple-800/60',
    client: 'MásMóvil, AENA & Madrid Digital',
    location: 'Sede Central Méndez Álvaro',
    subsections: [
      {
        title: '1. Integración de Datos y Operaciones (MásMóvil)',
        items: [
          'Desarrollo de paneles y herramientas de gestión técnica de alta complejidad mediante AppSmith, integradas directamente con la infraestructura operativa del cliente.',
          'Consumo y orquestación de múltiples APIs corporativas implementando flujos de autenticación segura mediante tokens OAuth.',
          'Modelado de datos y filtros avanzados en JavaScript para procesar y estructurar volúmenes complejos de información operativa.'
        ],
        tags: ['AppSmith', 'APIs REST', 'JavaScript', 'OAuth', 'Data Modeling']
      },
      {
        title: '2. Herramientas Operativas del Sector Público (AENA & Madrid Digital)',
        items: [
          'Madrid Digital: Creación de interfaces para gestión de incidencias y desarrollo de generadores de plantillas automáticas para acelerar y unificar los protocolos de soporte.',
          'AENA: Estructuración y despliegue de cuadros de mando (dashboards) visuales interactivos para la monitorización de datos e infraestructuras críticas.'
        ],
        tags: ['AppSmith', 'Dashboards', 'Incident Management', 'JavaScript', 'Public Sector']
      }
    ]
  },
  {
    number: 'Etapa 4 / 5',
    badge: 'Desarrollo Full Stack In-House',
    title: 'Modernización & Migración Cloud en Telefónica',
    subtitle: 'Sede Gran Vía, Madrid (Movistar)',
    colorClass: 'text-cyan-400',
    borderClass: 'border-cyan-500/50',
    tagColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-800/60',
    client: 'Telefónica (Movistar)',
    location: 'Sede Gran Vía, Madrid',
    phases: [
      {
        name: 'Fase 1: Mantenimiento y Soporte Legacy',
        description:
          'Autogestión técnica y soporte en producción de aplicaciones internas alojadas en servidores tradicionales (OVH, Hostinger), garantizando alta disponibilidad y resolución ágil de incidencias.',
        tags: ['PHP', 'SQL', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        name: 'Fase 2: Modernización del Stack Tecnológico',
        description:
          'Diseño y ejecución del cambio de arquitectura hacia un frontend moderno desacoplado basado en componentes. Coordinación directa con el departamento de Ciberseguridad para garantizar la viabilidad y cumplimiento de normativas.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js']
      },
      {
        name: 'Fase 3: Migración e Integración Cloud Serverless',
        description:
          'Migración íntegra del ecosistema local a Firebase Cloud: transición de bases de datos relacionales a Firestore NoSQL, implementación de autenticación robusta (MFA, reCAPTCHA) y configuración de Cloud Storage.',
        tags: ['Firebase', 'Firestore', 'Auth MFA', 'reCAPTCHA', 'Cloud Storage']
      }
    ]
  },
  {
    number: 'Etapa 3 / 5',
    badge: 'Chrome Automation Engine',
    title: 'Extensión a Medida para Operaciones y Pruebas',
    subtitle: 'Navegación & Intervención en Tiempo Real',
    colorClass: 'text-lime-400',
    borderClass: 'border-lime-500/50',
    tagColor: 'text-lime-300 bg-lime-950/80 border-lime-800/60',
    details: [
      {
        title: 'El Problema Operativo',
        description:
          'El equipo técnico realizaba tareas manuales repetitivas de gran volumen: navegación exhaustiva por portales externos, recolección de datos registro a registro y ejecución manual de tests técnicos individuales con alto consumo de tiempo y riesgo de error.'
      },
      {
        title: 'La Solución: Asistente Automatizado en Navegador',
        description:
          'Diseño y desarrollo de una extensión de Chrome a medida que actúa en el navegador bajo tres ejes fundamentales:\n• Inyección y Modificación del DOM: Inserción de controles y botones personalizados en interfaces de terceros para acelerar el flujo del técnico.\n• Automatización de Requests Asíncronas: Ejecución paralela de peticiones HTTP para la extracción masiva de datos sin bloqueos.\n• Motor de Pruebas Autónomo: Flujo inteligente que ejecuta suites de tests técnicos en webs externas y valida resultados al instante.'
      }
    ]
  },
  {
    number: 'Etapa 2 / 5',
    badge: 'Automatización Avanzada',
    title: 'Desarrollo de Bots y Pipelines con Python',
    subtitle: 'Data & Processing de Alta Precisión',
    colorClass: 'text-yellow-400',
    borderClass: 'border-yellow-500/50',
    tagColor: 'text-yellow-300 bg-yellow-950/80 border-yellow-800/60',
    details: [
      {
        title: 'Automatización Híbrida (GUI & API)',
        description:
          'Creación de scripts avanzados que combinan la simulación de interacción visual en pantalla para sistemas legacy sin endpoint con peticiones HTTP directas al backend para maximizar velocidad.'
      },
      {
        title: 'Gestión de Casos Complejos y Seguridad 2FA',
        description:
          'Resolución de flujos con autenticación de doble factor (2FA/MFA), integrando lógica segura para posibilitar ejecuciones desatendidas sin comprometer la seguridad.'
      },
      {
        title: 'Ciclo Integral de Datos & Operativa Masiva',
        description:
          'Extracción mediante Web Scraping, normalización y carga masiva en bases de datos con validación rigurosa de integridad para registros críticos de clientes.'
      }
    ]
  },
  {
    number: 'Etapa 1 / 5',
    badge: 'RPA Enterprise',
    title: 'Evolución de Tecnologías de Automatización',
    subtitle: 'Robotic Process Automation',
    colorClass: 'text-orange-400',
    borderClass: 'border-orange-500/50',
    tagColor: 'text-orange-300 bg-orange-950/80 border-orange-800/60',
    details: [
      {
        title: 'Automate Enterprise (Origen)',
        description:
          'Punto de partida en la automatización de tareas técnicas, diseñando flujos de trabajo iniciales, validaciones automáticas de datos y mitigación de cuellos de botella operativos.'
      },
      {
        title: 'Power Automate (Ecosistema Microsoft Cloud)',
        description:
          'Migración estratégica de soluciones hacia Microsoft Power Automate, logrando una mayor integración con servicios corporativos en la nube y facilitando un mantenimiento continuo más ágil.'
      }
    ]
  }
];

export const ExperienceView: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | 'all'>('all');

  const filteredStages =
    activeStage === 'all' ? stages : [stages[activeStage]];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ide-border pb-4">
        <div>
          <h2 className="text-xl font-bold text-white font-mono">{'{ "experiencia_laboral": [...] }'}</h2>
          <p className="text-xs text-slate-400">
            Desarrollo de Software &amp; Eficiencia Operativa (5 Etapas de Crecimiento)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-ide-neon bg-lime-950/60 border border-lime-800/60 px-2.5 py-1 rounded">
            +03 Años Exp
          </span>
          <span className="text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-800/60 px-2.5 py-1 rounded">
            Zelenza &amp; Clientes Enterprise
          </span>
        </div>
      </div>

      {/* Stage Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs select-none">
        <button
          onClick={() => setActiveStage('all')}
          className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
            activeStage === 'all'
              ? 'bg-purple-600 border-purple-500 text-white shadow-sm'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Todas las Etapas (1 - 5)
        </button>
        {stages.map((stage, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeStage === idx
                ? 'bg-purple-600 border-purple-500 text-white shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {stage.number}
          </button>
        ))}
      </div>

      {/* Stages List */}
      <div className="space-y-6">
        {filteredStages.map((stage, sIdx) => (
          <div
            key={sIdx}
            className="p-6 rounded-2xl bg-ide-sidebar border border-ide-border space-y-5 hover:border-slate-700 transition-colors"
          >
            {/* Top Stage Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-slate-500 font-bold">{stage.number}</span>
                  <span className={`px-2 py-0.5 rounded border text-[11px] ${stage.tagColor}`}>
                    {stage.badge}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                  {stage.title}
                </h3>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                <div className="text-slate-200">{stage.subtitle}</div>
                {stage.client && <div className="text-purple-300 font-semibold">{stage.client}</div>}
              </div>
            </div>

            {/* Phases (Telefónica) */}
            {stage.phases && (
              <div className="space-y-4 pt-1">
                {stage.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                    <div className="text-cyan-300 font-mono text-xs font-bold">{phase.name}</div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{phase.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                      {phase.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-slate-900 text-cyan-200 border border-slate-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Subsections (Infraestructura Interna / AppSmith) */}
            {stage.subsections && (
              <div className="space-y-4 pt-1">
                {stage.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2.5">
                    <div className="text-purple-300 font-mono text-xs font-bold">{sub.title}</div>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {sub.items.map((it, itIdx) => (
                        <li key={itIdx} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                      {sub.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-slate-900 text-purple-200 border border-slate-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Generic Details (Chrome Engine, Python, RPA) */}
            {stage.details && (
              <div className="space-y-3.5 pt-1">
                {stage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                    <div className="text-lime-300 font-mono text-xs font-bold">{detail.title}</div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed whitespace-pre-line">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Academic and Foundations Base */}
      <div className="p-6 rounded-2xl bg-ide-sidebar border border-ide-border space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white font-mono">// Base Operativa &amp; Formación Académica</h3>
          <span className="text-[11px] font-mono text-slate-400">SMR + DAM</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-purple-300 font-bold">Grado Superior en DAM</div>
            <div className="text-slate-400 text-[11px]">Desarrollo de Aplicaciones Multiplataforma</div>
            <p className="text-slate-300 font-sans text-xs pt-1">
              Prácticas en sede central Méndez Álvaro compaginando desarrollo y redes, culminando en la contratación como desarrollador oficial.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-lime-300 font-bold">Grado Medio en SMR + Técnico Redes N1</div>
            <div className="text-slate-400 text-[11px]">Sistemas Microinformáticos y Redes · Zelenza</div>
            <p className="text-slate-300 font-sans text-xs pt-1">
              Resolución y gestión de incidencias críticas de infraestructura y conectividad, aportando una visión profunda de hardware y red.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
