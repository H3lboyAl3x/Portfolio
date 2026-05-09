import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'E-mail', value: 'alexandreedgar77@gmail.com', href: 'mailto:alexandreedgar77@gmail.com', icon: <Mail size={22} /> },
  { name: 'LinkedIn', value: 'edgar-alexandre-0aab0539b', href: 'https://linkedin.com/in/edgar-alexandre-0aab0539b', icon: <Linkedin size={22} /> },
  { name: 'GitHub', value: 'H3lboyAl3x', href: 'https://github.com/H3lboyAl3x', icon: <Github size={22} /> },
  { name: 'Telefone', value: '+244 975 696 347', href: 'tel:+244975696347', icon: <Phone size={22} /> },
];

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <header className="mb-24 md:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 leading-[0.85] mb-8"
          >
            VAMOS <span className="text-[var(--accent)]">CONVERSAR.</span>
          </motion.h1>
          <p className="text-fluid-body text-[var(--text-dim)] max-w-2xl font-light">
            Sempre em busca de projetos desafiadores e parcerias técnicas que quebrem paradigmas. 
            Me conte sobre sua ideia e vamos construir algo extraordinário.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-10 rounded-xl flex flex-col justify-between h-64 border-white/5 transition-all duration-500 hover:border-[var(--accent)] hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-[var(--accent)] transition-colors">
                  {link.icon}
                </div>
                <ArrowUpRight size={20} className="text-[var(--text-dim)] group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-2 opacity-70">
                  {link.name}
                </p>
                <p className="text-xl md:text-2xl font-bold text-white break-words">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-32 pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[10px] uppercase tracking-widest leading-loose text-center md:text-left">
            © {new Date().getFullYear()} Edgar Alexandre <br/>
            Engineered with passion in Luanda, Angola.
          </p>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest font-black">
             <span className="text-[var(--accent)]">Available for projects</span>
             <span>2024 Edition</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
