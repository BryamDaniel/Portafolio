import React, { useState } from 'react';

export const AiAssistantView: React.FC = () => {
  const [aiInput, setAiInput] = useState('');
  const [aiOutput, setAiOutput] = useState(
    'Sistema listo. Haz clic en una sugerencia o consulta sobre Telefónica, AppSmith, Chrome Automation, Python Bots o mis repositorios en GitHub.'
  );
  const [aiLoading, setAiLoading] = useState(false);
  const [aiLatency, setAiLatency] = useState(38);
  const [customQuery, setCustomQuery] = useState('');

  const runAiQuery = (type: string, customText?: string) => {
    setAiLoading(true);
    const latency = Math.floor(Math.random() * 25) + 30;
    setAiLatency(latency);

    if (type === 'resumen') {
      setAiInput('python ai_assistant.py --query="resumen"');
      setTimeout(() => {
        setAiOutput(
          '✓ RESUMEN PROFESIONAL:\nDesarrollador de Software con +4 años de experiencia. Trayectoria desde la base operativa (Técnico de Redes Nivel 1 tras cursar SMR) hasta el desarrollo de aplicaciones de alta complejidad y automatizaciones empresariales (Grado Superior DAM).\n\nExperiencia in-house en Telefónica (Gran Vía) liderando la modernización de sistemas legacy a React y Firebase. Especialista en herramientas operativas (AppSmith) para MásMóvil, AENA y Madrid Digital, así como desarrollo de extensiones de Chrome y bots en Python para automatización masiva.'
        );
        setAiLoading(false);
      }, 500);
    } else if (type === 'telefonica') {
      setAiInput('python ai_assistant.py --query="telefonica"');
      setTimeout(() => {
        setAiOutput(
          '✓ TELEFÓNICA (SEDE GRAN VÍA - IN-HOUSE):\n- Fase 1 (Legacy): Soporte y gestión de sistemas internos en producción con PHP, SQL y JS.\n- Fase 2 (Modernización): Propuesta y desarrollo de arquitectura moderna con React, TypeScript, Vite y Tailwind CSS, coordinando viabilidad con Ciberseguridad.\n- Fase 3 (Migración Cloud): Transición completa a Firebase (Firestore NoSQL, Auth MFA, reCAPTCHA y Cloud Storage).'
        );
        setAiLoading(false);
      }, 550);
    } else if (type === 'stack') {
      setAiInput('python ai_assistant.py --query="stack"');
      setTimeout(() => {
        setAiOutput(
          '✓ TECH STACK CATEGORIZADO:\n- Languages & Core: TypeScript, JavaScript, Java, Python, SQL, PHP.\n- Frameworks & UI: React, Next.js, Node.js, Vue.js 3, Tailwind CSS, Vite.\n- Cloud & Systems: Firebase (Firestore, Auth MFA), Docker, AppSmith, Git, Linux.\n- Automation & RPA: Python Automation (2FA, Web Scraping), Chrome Automation Engine, Power Automate, Automate Enterprise.'
        );
        setAiLoading(false);
      }, 550);
    } else if (type === 'automation') {
      setAiInput('python ai_assistant.py --query="automation"');
      setTimeout(() => {
        setAiOutput(
          '✓ MOTORES DE AUTOMATIZACIÓN & RPA:\n1. Chrome Automation Engine: Extensión de navegador con inyección en el DOM, peticiones HTTP asíncronas masivas y motor de pruebas autónomo.\n2. Python Bots: Automatizaciones híbridas (GUI + API), gestión de 2FA y validación/carga masiva de registros.\n3. RPA Enterprise: Desde Automate Enterprise hasta migración a Microsoft Power Automate.'
        );
        setAiLoading(false);
      }, 500);
    } else {
      const q = (customText || 'consulta').toLowerCase();
      setAiInput(`python ai_assistant.py --prompt="${customText}"`);
      setTimeout(() => {
        let answer = `✓ RESPUESTA:\nSobre "${customText}": Cuento con +03 años de experiencia uniendo desarrollo full stack y automatización en clientes como Telefónica, MásMóvil, AENA y Madrid Digital.`;

        if (q.includes('telefonica') || q.includes('movistar') || q.includes('gran via')) {
          answer = `✓ TELEFÓNICA (GRAN VÍA):\nFui el perfil técnico in-house responsable de herramientas internas: modernicé el stack legacy PHP a React + TypeScript y migré las bases de datos a Firebase Firestore con autenticación MFA.`;
        } else if (q.includes('appsmith') || q.includes('masmovil') || q.includes('aena') || q.includes('madrid digital')) {
          answer = `✓ INFRAESTRUCTURA INTERNA (MÉNDEZ ÁLVARO):\nDesarrollo rápido de aplicaciones complejas con AppSmith: integración de APIs REST seguras (OAuth) para MásMóvil, generador de plantillas de incidencias para Madrid Digital y dashboards visuales para AENA.`;
        } else if (q.includes('linkedin') || q.includes('contacto') || q.includes('redes')) {
          answer = `✓ ENLACES DE CONTACTO:\n- LinkedIn: https://www.linkedin.com/in/bryam-amaya-3ba7941b8\n- GitHub: https://github.com/BryamDaniel\n- Pestaña: Puedes abrir 'contacto.env' para formulario directo.`;
        } else if (q.includes('github') || q.includes('proyecto') || q.includes('dragon') || q.includes('vector')) {
          answer = `✓ REPOSITORIOS GITHUB:\n1. vector-migration-cli: CLI para migración de colecciones entre bases de datos vectoriales (github.com/BryamDaniel/vector-migration-cli).\n2. APP-DragonBall-API: App reactiva para filtrado y consumo de la API de Dragon Ball (github.com/BryamDaniel/APP-DragonBall-API).`;
        } else if (q.includes('chrome') || q.includes('extension')) {
          answer = `✓ CHROME AUTOMATION ENGINE:\nExtensión propia desarrollada para eliminar tareas manuales repetitivas mediante inyección de controles en el DOM, peticiones HTTP en segundo plano y testing automático.`;
        } else if (q.includes('dam') || q.includes('smr') || q.includes('estudio') || q.includes('formacion')) {
          answer = `✓ FORMACIÓN TÉCNICA:\n- Grado Superior DAM (Desarrollo de Aplicaciones Multiplataforma).\n- Grado Medio SMR (Sistemas Microinformáticos y Redes).\nBase operativa sólida en hardware/redes y especialización en desarrollo de software.`;
        }

        setAiOutput(answer);
        setAiLoading(false);
      }, 550);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    runAiQuery('custom', customQuery.trim());
    setCustomQuery('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      <div className="p-6 rounded-2xl bg-ide-sidebar border border-purple-800/40 glow-accent space-y-4">
        <div className="flex items-center gap-2 text-purple-300 font-mono text-sm font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping"></span>
          AI Assistant Simulator (RAG Demo)
        </div>
        <p className="text-xs text-slate-300">
          Interactúa en tiempo real con el asistente inteligente. Consulta sobre Telefónica Gran Vía, AppSmith, Chrome Automation, Python o los repositorios de GitHub.
        </p>

        {/* Quick Prompts Bar */}
        <div className="flex flex-wrap gap-2 text-xs font-mono pt-2">
          <button
            onClick={() => runAiQuery('resumen')}
            disabled={aiLoading}
            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
          >
            💡 Resumir Perfil
          </button>
          <button
            onClick={() => runAiQuery('telefonica')}
            disabled={aiLoading}
            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
          >
            📞 Telefónica Gran Vía
          </button>
          <button
            onClick={() => runAiQuery('stack')}
            disabled={aiLoading}
            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
          >
            ⚡ Tech Stack Completo
          </button>
          <button
            onClick={() => runAiQuery('automation')}
            disabled={aiLoading}
            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-lime-300 border border-slate-700 transition-colors cursor-pointer active:scale-95 disabled:opacity-50"
          >
            🤖 Motores de Automatización
          </button>
        </div>

        {/* Custom Query Input */}
        <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-1">
          <input
            type="text"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder="Pregunta sobre Telefónica, AppSmith, Chrome Automation, Python o GitHub..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            disabled={aiLoading || !customQuery.trim()}
            className="px-4 py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium transition-colors cursor-pointer disabled:opacity-40"
          >
            Consultar
          </button>
        </form>

        {/* Interactive Terminal Window */}
        <div className="p-4 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs space-y-3 min-h-[160px] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-slate-500 border-b border-slate-900 pb-2 flex items-center justify-between">
              <span>Terminal Output</span>
              <span className="text-[10px] text-purple-400">Interactive Execution</span>
            </div>
            <div className="text-slate-300 flex items-center gap-2">
              <span className="text-purple-400">&gt;</span>
              <span>{aiInput || 'Esperando comando...'}</span>
            </div>
            {aiLoading && (
              <div className="text-amber-400 animate-pulse">
                ⏳ Recuperando contexto técnico de la base de conocimiento...
              </div>
            )}
            {!aiLoading && aiOutput && (
              <div className="text-slate-200 whitespace-pre-line bg-slate-900/60 p-3 rounded border border-slate-800">
                {aiOutput}
              </div>
            )}
          </div>
          <div className="text-[10px] text-slate-600 text-right">
            Execution time: <span>{aiLatency}</span>ms
          </div>
        </div>
      </div>
    </div>
  );
};
