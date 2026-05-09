import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'MindCare',
    tagline: 'Healthcare ecosystem',
    description: 'Solução robusta de saúde digital focada em telepsicologia. Arquitetura altamente escalável para gestão de dados sensíveis e sessões em tempo real.',
    tech: ['Node.js', 'React Native', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
    links: { github: 'https://github.com/H3lboyAl3x' }
  },
  {
    id: '02',
    title: 'Encontra Angola',
    tagline: 'Cultural Tourism',
    description: 'Gamificação aplicada ao turismo cultural. Plataforma inovadora para exploração de pontos históricos baseada em geolocalização.',
    tech: ['TypeScript', 'Geolocation', 'Gaming SDK'],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000',
    links: { github: 'https://github.com/H3lboyAl3x' }
  },
  {
    id: '03',
    title: 'Hábito App',
    tagline: 'Personal Productivity',
    description: 'Gestor de performance pessoal com privacidade total. Local-first architecture para máxima rapidez e segurança do usuário.',
    tech: ['SQLite', 'React', 'Animation Engine'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000',
    links: { github: 'https://github.com/H3lboyAl3x' }
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="mb-24 md:mb-32">
        <h2 className="text-fluid-h2 mb-4">
          PORTEFÓLIO <span className="text-[var(--accent)]">SELECIONADO.</span>
        </h2>
        <p className="text-[var(--text-dim)] uppercase tracking-[0.3em] text-[10px] md:text-sm font-black">// TRANSFORMANDO CÓDIGO EM VALOR</p>
      </div>

      <div className="space-y-40 md:space-y-64">
        {projects.map((project, index) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
          >
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[var(--accent)] font-bold text-lg">{project.id}</span>
                <div className="h-[1px] w-12 bg-[var(--border)]" />
                <span className="text-[var(--text-dim)] text-[10px] uppercase tracking-widest font-black">{project.tagline}</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black leading-none">{project.title}</h3>
              
              <p className="text-[var(--text-dim)] text-fluid-body leading-relaxed max-w-xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black py-2 px-5 bg-[var(--accent-dim)] border border-[var(--border)] text-[var(--accent)] rounded-sm uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-8">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-black text-xs uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
                >
                  VER REPOSITÓRIO <Github size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative overflow-hidden rounded-xl bg-neutral-900 border border-white/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent opacity-40" />
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </Layout>
  );
}
