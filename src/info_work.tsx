import React, { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
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

// --- Animation Variants ---

const heroVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const heroItemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const sidebarVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

const projectCardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.1,
        },
    }),
};

const techBadgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3 + i * 0.05,
        },
    }),
};

const dividerVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
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

                    {/* Back Button */}
                    <motion.button
                        onClick={onBack}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {infoWork.backButton}
                    </motion.button>

                    {/* Hero Header */}
                    <motion.header
                        className="mb-20"
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            variants={heroItemVariants}
                            className="text-3xl sm:text-4xl md:text-6xl tracking-tight uppercase mb-6"
                        >
                            {infoWork.hero.title} <br />
                            <span className="text-accent-gradient italic">{infoWork.hero.highlight}</span>
                        </motion.h1>
                        <motion.p
                            variants={heroItemVariants}
                            className="text-lg text-zinc-400 max-w-3xl leading-relaxed"
                        >
                            {infoWork.hero.description}
                        </motion.p>
                        <motion.div
                            variants={heroItemVariants}
                            className="mt-8 h-px w-full bg-gradient-to-r from-teal-500/40 via-indigo-500/20 to-transparent"
                        />
                    </motion.header>

                    {/* Experience Timeline */}
                    <div className="grid gap-32 relative">
                        {/* Vertical timeline line */}
                        <motion.div
                            className="absolute left-6 md:left-[calc(33.333%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/30 via-indigo-500/20 to-transparent hidden md:block"
                            initial={{ scaleY: 0, originY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        />

                        {infoWork.experience.map((exp, expIndex) => (
                            <motion.div
                                key={exp.id}
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Section divider (between sections) */}
                                {expIndex > 0 && (
                                    <motion.div
                                        variants={dividerVariants}
                                        className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32 origin-left"
                                    />
                                )}

                                <div className="grid md:grid-cols-12 gap-12 items-start relative">
                                    {/* Timeline dot */}
                                    <motion.div
                                        className="hidden md:block absolute left-[calc(33.333%-6px)] top-3 w-3 h-3 rounded-full border-2 border-teal-500/50 bg-[#050505] z-10"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 300 }}
                                    >
                                        <motion.div
                                            className="absolute inset-1 rounded-full bg-teal-500/60"
                                            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </motion.div>

                                    {/* Sidebar Info */}
                                    <motion.div
                                        variants={sidebarVariants}
                                        className="md:col-span-4 md:sticky md:top-32 relative"
                                    >
                                        <motion.div
                                            className={`w-12 h-12 bg-${exp.color}-500/10 rounded-2xl flex items-center justify-center text-${exp.color}-${exp.color === 'indigo' ? '400' : '500'} mb-6`}
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ repeat: Infinity, duration: 4 + (expIndex % 2), ease: "easeInOut" }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            {iconMap[exp.type]}
                                        </motion.div>
                                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">{exp.title} <br /><span className="text-zinc-600 italic">{exp.highlight}</span></h2>
                                        <div className={`text-xs font-bold text-${exp.color}-${exp.color === 'indigo' ? '400' : '500'} uppercase tracking-widest mb-4`}>{exp.location}</div>

                                        {/* Step indicator */}
                                        <motion.div
                                            className="flex items-center gap-2 mt-4"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                                Etapa {expIndex + 1} / {infoWork.experience.length}
                                            </span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Main Content Card */}
                                    <motion.div
                                        variants={cardVariants}
                                        className="md:col-span-8 space-y-12"
                                    >
                                        <div className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] hover:border-white/15 transition-colors duration-500">
                                            {/* Description */}
                                            {exp.description && (
                                                <motion.div
                                                    className="mb-12 space-y-4"
                                                    variants={sectionVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                >
                                                    {exp.description.map((p, i) => (
                                                        <motion.p
                                                            key={i}
                                                            variants={heroItemVariants}
                                                            className="text-zinc-300 leading-relaxed text-lg"
                                                            dangerouslySetInnerHTML={{ __html: p.replace(/Telefónica \(Movistar\)/g, '<strong class="text-white">Telefónica (Movistar)</strong>').replace(/Infraestructura Interna/g, '<strong class="text-white">Infraestructura Interna</strong>') }}
                                                        />
                                                    ))}
                                                </motion.div>
                                            )}

                                            {/* Projects */}
                                            {exp.projects && (
                                                <div className="space-y-8">
                                                    {exp.projects.map((project, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            custom={idx}
                                                            variants={projectCardVariants}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                                            className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                                                        >
                                                            <h3 className="text-sm font-bold mb-2 text-white uppercase tracking-widest">{project.title}</h3>
                                                            <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.desc}</p>
                                                            {('details' in project) && (project as any).details && (
                                                                <ul className="space-y-3 mb-4 text-sm text-zinc-400">
                                                                    {(project as any).details.map((detail: any, dIdx: number) => (
                                                                        <motion.li
                                                                            key={dIdx}
                                                                            className="flex gap-2 items-start"
                                                                            initial={{ opacity: 0, x: 10 }}
                                                                            whileInView={{ opacity: 1, x: 0 }}
                                                                            viewport={{ once: true }}
                                                                            transition={{ delay: 0.1 * dIdx }}
                                                                        >
                                                                            <span className={`text-${exp.color}-400 font-bold mt-0.5`}>•</span>
                                                                            <span><strong className="text-white">{detail.label}</strong> {detail.text}</span>
                                                                        </motion.li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tech.map((tech, tIdx) => (
                                                                    <motion.span
                                                                        key={tech}
                                                                        custom={tIdx}
                                                                        variants={techBadgeVariants}
                                                                        initial="hidden"
                                                                        whileInView="visible"
                                                                        viewport={{ once: true }}
                                                                        whileHover={{ scale: 1.08, y: -1 }}
                                                                        className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                                                                    >
                                                                        {tech}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Problem / Solution */}
                                            {exp.problem && exp.solution && (
                                                <>
                                                    <motion.div
                                                        className="mb-12"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <h3 className="text-lg font-bold mb-4 text-red-400 uppercase tracking-wide flex items-center gap-2">
                                                            <motion.span
                                                                className="inline-block w-2 h-2 rounded-full bg-red-400"
                                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            />
                                                            {exp.problem.title}
                                                        </h3>
                                                        <p className="text-zinc-400 leading-relaxed">{exp.problem.text}</p>
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: 0.15 }}
                                                    >
                                                        <h3 className="text-lg font-bold mb-4 text-teal-400 uppercase tracking-wide flex items-center gap-2">
                                                            <motion.span
                                                                className="inline-block w-2 h-2 rounded-full bg-teal-400"
                                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            />
                                                            {exp.solution.title}
                                                        </h3>
                                                        <p className="text-zinc-300 leading-relaxed mb-8">{exp.solution.text}</p>
                                                        <div className="space-y-6">
                                                            {exp.solution.items.map((item, iIdx) => (
                                                                <motion.div
                                                                    key={iIdx}
                                                                    custom={iIdx}
                                                                    variants={projectCardVariants}
                                                                    initial="hidden"
                                                                    whileInView="visible"
                                                                    viewport={{ once: true }}
                                                                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                                                    className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-teal-500/20 hover:bg-white/[0.04] transition-all duration-300"
                                                                >
                                                                    <div className="font-bold mb-2 text-white uppercase text-sm tracking-widest">{item.title}</div>
                                                                    <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                </>
                                            )}

                                            {/* Items (no solution) */}
                                            {exp.items && !exp.solution && (
                                                <div className="space-y-6">
                                                    {exp.items.map((item, iIdx) => (
                                                        <motion.div
                                                            key={iIdx}
                                                            custom={iIdx}
                                                            variants={projectCardVariants}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                                            className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                                                        >
                                                            <div className="font-bold mb-2 text-white uppercase text-sm tracking-widest">{item.title}</div>
                                                            <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </motion.div>
    );
};

export default InfoWork;
