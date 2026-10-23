import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText('brayanamaya406@gmail.com').catch(() => {
      // Fallback
      const temp = document.createElement('input');
      temp.value = 'brayanamaya406@gmail.com';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    });

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setFormSent(false);
    }, 4000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
      <div className="border-b border-ide-border pb-3">
        <h2 className="text-xl font-bold text-white font-mono">contacto.env</h2>
        <p className="text-xs text-slate-400">Variables de entorno y canales directos</p>
      </div>

      <div className="p-6 rounded-2xl bg-ide-sidebar border border-ide-border space-y-6 font-mono text-xs">
        <div className="space-y-3">
          <div className="text-slate-500"># Canales y perfiles de contacto</div>

          <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="truncate mr-2 text-slate-300">GITHUB_URL="https://github.com/BryamDaniel"</span>
            <a
              href="https://github.com/BryamDaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 rounded hover:bg-purple-900 transition-colors shrink-0 flex items-center gap-1"
            >
              <span>Abrir</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="truncate mr-2 text-slate-300">LINKEDIN_URL="https://www.linkedin.com/in/bryam-amaya-3ba7941b8"</span>
            <a
              href="https://www.linkedin.com/in/bryam-amaya-3ba7941b8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-cyan-950 border border-cyan-800 text-cyan-300 rounded hover:bg-cyan-900 transition-colors shrink-0 flex items-center gap-1"
            >
              <span>Abrir</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="truncate mr-2 text-slate-300">EMAIL_CONTACTO="brayanamaya406@gmail.com"</span>
            <button
              onClick={copyEmail}
              className="px-2.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 rounded hover:bg-purple-900 transition-colors cursor-pointer shrink-0"
            >
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs pt-2">
          <div className="space-y-1">
            <label className="font-mono text-slate-400 text-[11px]">NOMBRE</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre o empresa"
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-slate-400 text-[11px]">EMAIL</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-slate-400 text-[11px]">MENSAJE</label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Propuesta de proyecto, sinergia técnica o consulta..."
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-mono font-semibold transition-colors cursor-pointer active:scale-[0.99]"
          >
            ENVIAR MENSAJE &rarr;
          </button>
        </form>

        {formSent && (
          <div className="p-3 bg-lime-950/80 border border-lime-800 text-lime-300 text-center rounded font-mono animate-fadeIn">
            ✓ Mensaje enviado correctamente.
          </div>
        )}
      </div>
    </div>
  );
};
