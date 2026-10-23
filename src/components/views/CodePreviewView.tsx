import React, { useState } from 'react';

export const CodePreviewView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'architecture' | 'etl-diagram'>('code');

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ide-border pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white font-mono">vector_migration_cli.ts</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
              TypeScript / Node.js
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300">
              Qdrant NoSQL
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Pipeline ETL de datos empresariales hacia motor vectorial con generación de embeddings en local
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/BryamDaniel/vector-migration-cli"
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

      {/* Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
        <div className="p-3 rounded-xl bg-ide-sidebar border border-ide-border space-y-1">
          <div className="text-cyan-400 font-bold">Multihilo Real</div>
          <p className="text-[11px] text-slate-400 font-sans">
            Worker Threads para inferencia con @xenova/transformers sin bloquear el Event Loop.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-ide-sidebar border border-ide-border space-y-1">
          <div className="text-lime-400 font-bold">Caché SHA-256</div>
          <p className="text-[11px] text-slate-400 font-sans">
            Sincronización delta LRU en disco que reduce re-inferencias a &lt;1 segundo.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-ide-sidebar border border-ide-border space-y-1">
          <div className="text-amber-400 font-bold">Tolerancia &amp; DLQ</div>
          <p className="text-[11px] text-slate-400 font-sans">
            Dead Letter Queue (dlq-report.json) aislando anomalías sin detener el ETL.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-ide-sidebar border border-ide-border space-y-1">
          <div className="text-purple-400 font-bold">Local Embeddings</div>
          <p className="text-[11px] text-slate-400 font-sans">
            Vectorización con MiniLM-L6-v2 a coste cero de APIs de terceros.
          </p>
        </div>
      </div>

      {/* View Switcher */}
      <div className="flex gap-2 border-b border-ide-border pb-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab('code')}
          className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
            activeTab === 'code' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          TypeScript Code (Worker + Qdrant)
        </button>
        <button
          onClick={() => setActiveTab('etl-diagram')}
          className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
            activeTab === 'etl-diagram' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Flujo ETL (4 Fases)
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
            activeTab === 'architecture' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Árbol de Arquitectura
        </button>
      </div>

      {/* Tab 1: TypeScript Implementation */}
      {activeTab === 'code' && (
        <pre className="p-4 md:p-6 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-purple-900/50">
          <code>
            <span className="text-purple-400">import</span> {'{'} Worker {'}'} <span className="text-purple-400">from</span> <span className="text-lime-300">'worker_threads'</span>;{'\n'}
            <span className="text-purple-400">import</span> {'{'} z {'}'} <span className="text-purple-400">from</span> <span className="text-lime-300">'zod'</span>;{'\n'}
            <span className="text-purple-400">import</span> {'{'} QdrantClient {'}'} <span className="text-purple-400">from</span> <span className="text-lime-300">'@qdrant/js-client-rest'</span>;{'\n'}
            <span className="text-purple-400">import</span> {'{'} withExponentialBackoff {'}'} <span className="text-purple-400">from</span> <span className="text-lime-300">'./utils/backoff'</span>;{'\n'}
            <span className="text-purple-400">import</span> {'{'} ProductSchema, type Product {'}'} <span className="text-purple-400">from</span> <span className="text-lime-300">'./schemas/product.schema'</span>;{'\n\n'}
            <span className="text-slate-500">// Vector Migration CLI - High-Resilience Local Embeddings Pipeline</span>{'\n'}
            <span className="text-purple-400">export class</span> <span className="text-yellow-300">VectorStoreService</span> {'{'}{'\n'}
            {'  '}<span className="text-purple-400">private</span> client: QdrantClient;{'\n'}
            {'  '}<span className="text-purple-400">private</span> worker: Worker;{'\n\n'}
            {'  '}<span className="text-purple-400">constructor</span>(url: string = <span className="text-lime-300">'http://localhost:6333'</span>) {'{'}{'\n'}
            {'    '}<span className="text-purple-400">this</span>.client = <span className="text-purple-400">new</span> QdrantClient({'{'} url {'}'});{'\n'}
            {'    '}<span className="text-slate-500">// Aislamiento en Worker Thread para mantener Event Loop sin bloqueos</span>{'\n'}
            {'    '}<span className="text-purple-400">this</span>.worker = <span className="text-purple-400">new</span> Worker(<span className="text-lime-300">'./dist/services/embedder.worker.js'</span>);{'\n'}
            {'  '}{'}'}{'\n\n'}
            {'  '}<span className="text-purple-400">async</span> <span className="text-blue-400">batchUpsertWithResilience</span>(collection: string, products: Product[]) {'{'}{'\n'}
            {'    '}<span className="text-slate-500">// 1. Validación en runtime con Zod</span>{'\n'}
            {'    '}<span className="text-purple-400">const</span> validated = z.array(ProductSchema).safeParse(products);{'\n'}
            {'    '}<span className="text-purple-400">if</span> (!validated.success) {'{'}{'\n'}
            {'      '}<span className="text-purple-400">this</span>.recordDLQ(validated.error.issues);{'\n'}
            {'      '}<span className="text-purple-400">return</span>;{'\n'}
            {'    '}{'}'}{'\n\n'}
            {'    '}<span className="text-slate-500">// 2. Inferencia vectorial en local (MiniLM-L6-v2) con Worker Thread</span>{'\n'}
            {'    '}<span className="text-purple-400">const</span> points = <span className="text-purple-400">await this</span>.computeEmbeddingsInWorker(validated.data);{'\n\n'}
            {'    '}<span className="text-slate-500">// 3. Inserción por lotes en Qdrant con Exponential Backoff</span>{'\n'}
            {'    '}<span className="text-purple-400">await</span> withExponentialBackoff(<span className="text-purple-400">async</span> () =&gt; {'{'}{'\n'}
            {'      '}<span className="text-purple-400">await this</span>.client.upsert(collection, {'{'}{'\n'}
            {'        '}wait: <span className="text-lime-400">true</span>,{'\n'}
            {'        '}points: points.map(p =&gt; ({'{'} id: p.id, vector: p.embedding, payload: p.metadata {'}'})){'\n'}
            {'      '}{'}'});{'\n'}
            {'    '}{'}'}, {'{'} maxRetries: <span className="text-lime-400">5</span>, initialDelayMs: <span className="text-lime-400">200</span> {'}'});{'\n'}
            {'  '}{'}'}{'\n'}
            {'}'}
          </code>
        </pre>
      )}

      {/* Tab 2: ETL Pipeline Diagram */}
      {activeTab === 'etl-diagram' && (
        <pre className="p-4 md:p-6 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
          <code>
            <span className="text-purple-400">[ Inicio CLI ]</span>{'\n'}
            {'       '}│{'\n'}
            {'       '}▼{'\n'}
            <span className="text-cyan-300">1. EXTRACT (Extractor)</span>{'\n'}
            {'   '}└── Consulta paginada a API REST (DummyJSON){'\n'}
            {'   '}└── Manejo de paginación por lotes (batching: limit, skip){'\n'}
            {'       '}│{'\n'}
            {'       '}▼{'\n'}
            <span className="text-yellow-300">2. VALIDATE &amp; PARSE (Zod Schema)</span>{'\n'}
            {'   '}└── Validación runtime del contrato de datos JSON{'\n'}
            {'   '}└── Separación de registros válidos y captura de anomalías en DLQ{'\n'}
            {'       '}│{'\n'}
            {'       '}▼{'\n'}
            <span className="text-lime-300">3. TRANSFORM &amp; EMBED (Transformers.js)</span>{'\n'}
            {'   '}└── Concatenación de texto relevante (Título + Descripción + Categoría){'\n'}
            {'   '}└── Generación de embeddings vectoriales (MiniLM-L6-v2) en local sin coste{'\n'}
            {'   '}└── Caché LRU persistente con hash SHA-256{'\n'}
            {'       '}│{'\n'}
            {'       '}▼{'\n'}
            <span className="text-purple-300">4. LOAD &amp; RESILIENCE (Qdrant Sink)</span>{'\n'}
            {'   '}└── Creación/Verificación de Colección e Índices en Qdrant NoSQL{'\n'}
            {'   '}└── Inserción masiva por lotes (upsert batch) con reintentos (Exponential Backoff){'\n'}
            {'       '}│{'\n'}
            {'       '}▼{'\n'}
            {' [ Fin de Lote ] ────► ¿Quedan registros? ──(SÍ)──► Siguiente Lote'}{'\n'}
            {'       '}│{'\n'}
            {'     '}(NO){'\n'}
            {'       '}▼{'\n'}
            <span className="text-lime-400">[ Notificación de Éxito &amp; Cierre ]</span>
          </code>
        </pre>
      )}

      {/* Tab 3: Architecture Tree */}
      {activeTab === 'architecture' && (
        <pre className="p-4 md:p-6 rounded-xl bg-slate-950 border border-ide-border font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
          <code>
            <span className="text-yellow-400 font-bold">vector-migration-cli/</span>{'\n'}
            ├── docker-compose.yml     <span className="text-slate-500"># Qdrant Container config</span>{'\n'}
            ├── Dockerfile             <span className="text-slate-500"># Node.js Alpine builder</span>{'\n'}
            ├── package.json           <span className="text-slate-500"># @xenova/transformers, zod, @qdrant/js-client-rest</span>{'\n'}
            ├── tsconfig.json          <span className="text-slate-500"># Configuración TypeScript estricta</span>{'\n'}
            └── <span className="text-cyan-400 font-semibold">src/</span>{'\n'}
            {'    '}├── <span className="text-purple-400 font-semibold">config/</span>{'\n'}
            {'    '}│   └── env.ts            <span className="text-slate-500"># Variables de entorno validadas con Zod</span>{'\n'}
            {'    '}├── <span className="text-purple-400 font-semibold">schemas/</span>{'\n'}
            {'    '}│   └── product.schema.ts <span className="text-slate-500"># Validación y tipado Zod (DummyJSON -&gt; Qdrant Payload)</span>{'\n'}
            {'    '}├── <span className="text-purple-400 font-semibold">services/</span>{'\n'}
            {'    '}│   ├── extractor.ts      <span className="text-slate-500"># Ingesta paginada con reintentos desde DummyJSON</span>{'\n'}
            {'    '}│   ├── embedder.ts       <span className="text-slate-500"># Vectorizador local (@xenova/transformers en Worker)</span>{'\n'}
            {'    '}│   └── vectorStore.ts    <span className="text-slate-500"># Cliente de Qdrant (creación de colección e inserción)</span>{'\n'}
            {'    '}├── <span className="text-purple-400 font-semibold">utils/</span>{'\n'}
            {'    '}│   └── backoff.ts        <span className="text-slate-500"># Exponential Backoff &amp; Resiliencia</span>{'\n'}
            {'    '}└── index.ts              <span className="text-slate-500"># Punto de entrada CLI interactiva con Commander</span>
          </code>
        </pre>
      )}
    </div>
  );
};
