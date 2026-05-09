import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[85vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-dim)] border border-[var(--accent-dim)] rounded-full w-fit mb-8">
              <Terminal size={14} className="text-[var(--accent)]" />
              <span className="font-mono text-[10px] text-[var(--accent)] tracking-[0.2em] font-bold uppercase">
                Software Engineer // Full-Stack
              </span>
            </div>
            
            <h1 className="text-fluid-h1 leading-[0.85] mb-10">
              CRIANDO O <br />
              <span className="text-[var(--accent)] relative inline-block">
                AMANHÃ.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-4 left-0 h-[8px] bg-[var(--accent)] opacity-20 -z-10"
                />
              </span>
            </h1>

            <p className="text-fluid-body text-[var(--text-dim)] max-w-xl mb-12 leading-relaxed">
              Especialista em arquiteturas escaláveis com <span className="text-white font-medium italic">Node.js</span> e <span className="text-white font-medium italic">React Native</span>. 
              Transformando desafios complexos em produtos digitais de impacto global.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link
                to="/projetos"
                className="group relative inline-flex items-center gap-3 bg-white text-black font-black text-sm py-5 px-10 rounded-sm overflow-hidden"
              >
                <span className="relative z-10 uppercase">Explorar Projetos</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/sobre"
                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-1"
              >
                Minha Trajetória
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
              <div className="glass h-full w-full rounded-3xl p-10 flex flex-col justify-between border-white/5">
                <div className="space-y-4">
                   <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center text-black">
                     <Terminal size={24} />
                   </div>
                   <h3 className="text-2xl font-black">Expertise em <br/> Performance</h3>
                </div>
                <div className="space-y-2">
                   <p className="text-[var(--text-dim)] text-sm font-mono tracking-tighter">// SKILLS LOADED</p>
                   <p className="text-[var(--text-dim)] text-sm">Microservices • Cloud Architecture • Real-time Data • Clean Code</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 md:mt-32 pt-12 border-t border-[var(--border)] flex flex-wrap gap-8 items-center justify-center md:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {['Node.js', 'TypeScript', 'React Native', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
            <span key={tech} className="font-mono text-xs font-bold tracking-[0.2em] uppercase">{tech}</span>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}
