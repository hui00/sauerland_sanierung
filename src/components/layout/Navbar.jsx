import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandMark from '@/components/ui/BrandMark';
import { cn } from '@/lib/utils';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

const navLinks = [
  { name: 'Start', id: 'start' },
  { name: 'Leistungen', id: 'leistungen' },
  { name: 'Referenzen', id: 'referenzen' },
  { name: 'Bewertungen', id: 'bewertungen' },
  { name: 'Über uns', id: 'ueber-uns' },
  { name: 'Kontakt', id: 'kontakt' },
];

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('home', id);
  };

  // Light text over the dark hero, dark text once the solid bar appears.
  const onLight = isScrolled || mobileMenuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        onLight ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#start" onClick={(e) => handleClick(e, 'start')} className="flex items-center gap-2.5">
          <BrandMark className="h-10 w-10" />
          <span className="font-display text-lg font-bold tracking-tight transition-colors">
            {onLight ? (
              <>
                <span className="text-primary">Sauerland</span>{' '}
                <span className="text-secondary">Sanierung</span>
              </>
            ) : (
              <span className="text-white drop-shadow">Sauerland Sanierung</span>
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={cn(
                'nav-link',
                onLight ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-gradient-brand shadow-md shadow-primary/30 hover:opacity-90">
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="mr-2 h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={onLight ? '' : 'text-white hover:bg-white/20 hover:text-white'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="container-custom flex flex-col space-y-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className="rounded-lg px-3 py-2.5 font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-2 w-full bg-gradient-brand">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
