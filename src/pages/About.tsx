import { motion } from 'motion/react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl">
        <section className="mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 leading-none mb-12"
          >
            VISÃO <span className="text-[var(--accent)]">PROFISSIONAL.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-16 rounded-2xl relative overflow-hidden group border-white/5"
          >
            <p className="text-fluid-body text-[var(--text-dim)] font-light leading-relaxed">
              Atuando na vanguarda do desenvolvimento web e mobile, meu compromisso é com a 
              <span className="text-white font-black italic"> excelência técnica</span> e a 
              <span className="text-white font-black italic"> simplicidade elegante</span>. 
              Em um mundo saturado de ruído digital, acredito que o software deve ser invisível, eficiente e centrado no humano.
            </p>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm font-black text-[var(--accent)] uppercase tracking-[0.4em]">Objetivos Atuais</h3>
            <div className="h-[1px] w-full bg-[var(--border)]" />
            <p className="text-[var(--text-dim)] leading-loose">
              Expansão do ecossistema <span className="text-white font-bold">MindCare</span>, integrando IA generativa para automação de triagem clínica e análise preditiva de dados.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-black text-[var(--accent)] uppercase tracking-[0.4em]">Foco Estratégico</h3>
            <div className="h-[1px] w-full bg-[var(--border)]" />
            <p className="text-[var(--text-dim)] leading-loose">
              Criação de uma <span className="text-white font-bold">consultoria de alto impacto</span> focada em modernização de stacks tecnológicas e arquiteturas de alta disponibilidade.
            </p>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
