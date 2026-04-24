import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    ChevronLeft,
    DatabaseZap,
    Bot,
    Code2,
    Server
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CONTENT } from './constants/content';

interface InfoWorkProps {
    onBack: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
    Server: <Server size={24} />,
    Code2: <Code2 size={24} />,
    Globe: <Globe size={24} />,
    DatabaseZap: <DatabaseZap size={24} />,
    Bot: <Bot size={24} />
};

const InfoWork: React.FC<InfoWorkProps> = ({ onBack }) => {
    const { infoWork } = CONTENT;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-[#050505] text-white selection:bg-teal-500/30"
        >
            <Header isSimple onViewChange={() => onBack()} />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {infoWork.backButton}
                    </button>

                    <header className="mb-20">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight uppercase mb-6">
                            {infoWork.hero.title} <br />
                            <span className="text-accent-gradient italic">{infoWork.hero.highlight}</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
                            {infoWork.hero.description}
                        </p>
                    </header>

                    <div className="grid gap-32">
                        {infoWork.experience.map((exp) => (
                            <div key={exp.id} className="grid md:grid-cols-12 gap-12 items-start">
                                <div className="md:col-span-4 md:sticky md:top-32 relative">
                                    <div className={`w-12 h-12 bg-${exp.color}-500/10 rounded-2xl flex items-center justify-center text-${exp.color}-${exp.color === 'indigo' ? '400' : '500'} mb-6`}>
                                        {iconMap[exp.type]}
                                    </div>
                                    <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">{exp.title} <br /><span className="text-zinc-600 italic">{exp.highlight}</span></h2>
                                    <div className={`text-xs font-bold text-${exp.color}-${exp.color === 'indigo' ? '400' : '500'} uppercase tracking-widest mb-8`}>{exp.location}</div>
                                </div>
                                <div className="md:col-span-8 space-y-12">
                                    <div className="glass p-6 sm:p-8 md:p-12 rounded-[2rem]">
                                        {exp.description && (
                                            <div className="mb-12 space-y-4">
                                                {exp.description.map((p, i) => (
                                                    <p key={i} className="text-zinc-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: p.replace(/Telefónica \(Movistar\)/g, '<strong class="text-white">Telefónica (Movistar)</strong>').replace(/Infraestructura Interna/g, '<strong class="text-white">Infraestructura Interna</strong>') }} />
                                                ))}
                                            </div>
                                        )}

                                        {exp.projects && (
                                            <div className="space-y-8">
                                                {exp.projects.map((project, idx) => (
                                                    <div key={idx} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                                        <h3 className="text-sm font-bold mb-2 text-white uppercase tracking-widest">{project.title}</h3>
                                                        <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.desc}</p>
                                                        {('details' in project) && (project as any).details && (
                                                            <ul className="space-y-3 mb-4 text-sm text-zinc-400">
                                                                {(project as any).details.map((detail: any, dIdx: number) => (
                                                                    <li key={dIdx} className="flex gap-2 items-start">
                                                                        <span className={`text-${exp.color}-400 font-bold mt-0.5`}>•</span>
                                                                        <span><strong className="text-white">{detail.label}</strong> {detail.text}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map(tech => (
                                                                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-zinc-400">{tech}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {exp.problem && exp.solution && (
                                            <>
                                                <div className="mb-12">
                                                    <h3 className="text-lg font-bold mb-4 text-red-400 uppercase tracking-wide">{exp.problem.title}</h3>
                                                    <p className="text-zinc-400 leading-relaxed">{exp.problem.text}</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold mb-4 text-teal-400 uppercase tracking-wide">{exp.solution.title}</h3>
                                                    <p className="text-zinc-300 leading-relaxed mb-8">{exp.solution.text}</p>
                                                    <div className="space-y-6">
                                                        {exp.solution.items.map((item, iIdx) => (
                                                            <div key={iIdx} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                                                <div className="font-bold mb-2 text-white uppercase text-sm tracking-widest">{item.title}</div>
                                                                <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {exp.items && !exp.solution && (
                                            <>
                                                <div className="space-y-6">
                                                    {exp.items.map((item, iIdx) => (
                                                        <div key={iIdx} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                                            <div className="font-bold mb-2 text-white uppercase text-sm tracking-widest">{item.title}</div>
                                                            <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </motion.div>
    );
};

export default InfoWork;
