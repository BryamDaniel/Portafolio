import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from 'framer-motion';
import {
  Cloud,
  Code2,
  Zap,
  ShieldCheck,
  ArrowRight,
  Bot,
  Terminal
} from 'lucide-react';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Magnetic } from './components/Magnetic';
import { TiltCard } from './components/TiltCard';
import InfoWork from './info_work';
import { CONTENT } from './constants/content';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'details'>('home');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const { hero, marquee, about, experience, stack } = CONTENT;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-teal-500/30 selection:text-teal-200">
      <div className="noise" />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-20" />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <Header onNavigate={handleNavigate} onViewChange={setView} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center section-padding overflow-hidden">
              <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl w-full text-center md:text-left"
              >
                <motion.div variants={itemVariants} className="inline-block text-xs font-bold tracking-[0.4em] text-teal-500/60 uppercase mb-8">
                  {hero.tagline}
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl mb-6 text-gradient leading-[1.1] tracking-tight">
                  {hero.title.main} <br />
                  <span className="text-accent-gradient italic">{hero.title.highlight}</span>
                </motion.h1>

                <div className="flex flex-col md:flex-row items-end gap-12">
                  <motion.p variants={itemVariants} className="text-lg text-zinc-500 max-w-xl leading-relaxed font-medium">
                    {hero.description.main}
                    <span className="text-zinc-300">{hero.description.highlight1}</span>
                    {hero.description.connector}
                    <span className="text-zinc-300">{hero.description.highlight2}</span>
                    {hero.description.suffix}
                  </motion.p>

                  <motion.div variants={itemVariants} className="flex gap-4">
                    <Magnetic>
                      <button onClick={() => setView('details')} className="btn-premium group flex items-center gap-4">
                        {hero.button} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Magnetic>
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 text-[12vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">{hero.backgroundText}</div>
            </section>

            {/* Scrolling Marquee */}
            <div className="py-12 border-y border-white/5 bg-zinc-950/30 overflow-hidden flex">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex gap-20 whitespace-nowrap text-xl font-bold text-zinc-800 uppercase tracking-wide italic"
              >
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    {marquee[0]} <Code2 className="text-teal-500" size={24} />
                    {marquee[1]} <Cloud className="text-indigo-500" size={24} />
                    {marquee[2]} <Zap className="text-teal-500" size={24} />
                    {marquee[3]} <ShieldCheck className="text-indigo-500" size={24} />
                  </span>
                ))}
              </motion.div>
            </div>

            {/* About Section */}
            <section id="sobre-mí" className="section-padding">
              <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-start">
                <div className="md:col-span-7">
                  <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-3xl md:text-5xl mb-10 tracking-tight uppercase">
                    {about.title.main} <br /> <span className="text-zinc-700 italic">{about.title.highlight}</span>
                  </motion.h2>

                  <div className="space-y-6 text-zinc-400 leading-relaxed max-w-2xl mb-12 text-base md:text-lg font-light">
                    {about.paragraphs.map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/ Zelenza /g, ' <strong class="text-white">Zelenza</strong> ') }} />
                    ))}
                  </div>

                  <div className="flex gap-16 border-t border-white/5 pt-8">
                    {about.stats.map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className={`text-[10px] uppercase tracking-widest font-bold ${i === 0 ? 'text-teal-500' : 'text-zinc-500'}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 pt-10 md:pt-0">
                  <TiltCard className="aspect-[4/5] glass rounded-[2rem] relative overflow-hidden flex items-center justify-center p-12 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Code2 size={160} strokeWidth={0.5} className="text-zinc-800 group-hover:text-teal-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-10 left-10">
                      <div className="text-xs font-bold text-teal-500 mb-2 tracking-widest uppercase">{about.card.badge}</div>
                      <div className="text-xl font-bold tracking-tight">{about.card.role} <br />{about.card.company}</div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </section>

            {/* Experience Summary Section */}
            <section id="experiencia" className="section-padding bg-[#080808]">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-4">
                  <h2 className="text-3xl sm:text-4xl tracking-tight uppercase">{experience.title.main} <br /><span className="text-zinc-700">{experience.title.highlight}</span></h2>
                  <button onClick={() => setView('details')} className="btn-premium-outline w-full md:w-auto text-center">{experience.button}</button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {experience.items.map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl glass hover:bg-white/[0.02] transition-colors group">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8">
                        {i === 0 ? <Code2 /> : i === 1 ? <Cloud /> : <Zap />}
                      </div>
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{item.title}</h3>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stack Section - Bento Design Refined */}
            <section id="stack" className="section-padding bg-[#050505] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
              
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-4xl md:text-6xl tracking-tighter uppercase font-black leading-none">
                      Technical <br /><span className="text-accent-gradient italic font-light">Ecosystem</span>
                    </h2>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-zinc-500 max-w-xs text-sm uppercase tracking-widest leading-relaxed font-bold"
                  >
                    Estructura técnica optimizada <br />
                    por especialización y dominio.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Category 1: Languages (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 p-10 glass rounded-[3rem] border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                      <Terminal size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                            <Code2 size={18} />
                         </div>
                         <h3 className="text-xl font-bold uppercase tracking-tight">{stack.categories[0].name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {stack.categories[0].skills.map(skill => (
                          <span key={skill} className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/10 transition-all cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Category 2: Frameworks (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 p-10 glass rounded-[3rem] border border-white/5 relative overflow-hidden group"
                  >
                     <div className="absolute -left-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                      <Zap size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Zap size={18} />
                         </div>
                         <h3 className="text-xl font-bold uppercase tracking-tight">{stack.categories[1].name}</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {stack.categories[1].skills.map(skill => (
                          <div key={skill} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[10px] font-bold text-center uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 transition-colors">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Category 3: Cloud (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 p-10 glass rounded-[3rem] border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                              <Cloud size={18} />
                          </div>
                          <h3 className="text-xl font-bold uppercase tracking-tight">{stack.categories[2].name}</h3>
                        </div>
                        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Scalability</div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {stack.categories[2].skills.map(skill => (
                          <div key={skill} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Category 4: Automation (Col span 2) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-2 p-10 bg-gradient-to-br from-teal-500/5 to-transparent rounded-[3rem] border border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                            <Bot size={18} />
                         </div>
                         <h3 className="text-xl font-bold uppercase tracking-tight">{stack.categories[3].name}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {stack.categories[3].skills.map(skill => (
                          <div key={skill} className="p-6 rounded-3xl glass border border-white/5 text-center group-hover:border-teal-500/30 transition-all duration-500">
                             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-teal-400 transition-colors">
                                {skill}
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <Footer />
          </motion.div>
        ) : (
          <InfoWork key="details" onBack={() => setView('home')} />
        )}
      </AnimatePresence>
    </div>
  );
};


export default App;