import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Contato', path: '/contatos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'glass py-4 px-6 md:px-12 border-[var(--border)]' 
            : 'bg-transparent py-8 px-6 md:px-12 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="logo font-black text-xl tracking-tighter z-50">
            EDGAR<span className="text-[var(--accent)]">ALEXANDRE</span>
          </Link>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-center items-center p-8 md:hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] blur-[150px] rounded-full" />
            </div>

            <ul className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li 
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-4xl font-black tracking-tighter ${
                        isActive ? 'text-[var(--accent)]' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 text-[var(--text-dim)] font-mono text-xs uppercase tracking-widest"
            >
              alexandreedgar77@gmail.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
