import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-surface/20 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="relative z-50 flex flex-col" onClick={() => setMobileMenuOpen(false)}>
          <span className="font-fraunces text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">
            HENRI CLAS
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-brand-muted">
            Integrated Farms
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 relative group ${
                  isActive ? 'text-brand-accent font-bold' : 'text-brand-primary hover:text-brand-accent'
                }`}
              >
                {link.name}
                {/* Active/Hover Indicator */}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-brand-accent transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          
          <Link 
            to="/contact" 
            className="ml-4 border border-brand-primary text-brand-primary font-mono text-xs uppercase tracking-widest py-2.5 px-6 hover:bg-brand-primary hover:text-white transition-colors duration-300"
          >
            Partner Portal
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-brand-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-[2px] bg-current w-full transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`h-[2px] bg-current w-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] bg-current w-full transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav*/}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-bg z-40 flex flex-col justify-center px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-fraunces text-4xl text-brand-primary border-b border-brand-surface/20 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}