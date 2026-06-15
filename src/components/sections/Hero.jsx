import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, Mail, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, mailtoUrl } from '@/lib/contact';

const heroStats = [
  { icon: <ShieldCheck className="h-4 w-4 text-primary" />, label: 'Eine Hand, ein Ansprechpartner' },
  { icon: <MapPin className="h-4 w-4 text-primary" />, label: 'Iserlohn & Sauerland' },
  { icon: <Wrench className="h-4 w-4 text-primary" />, label: 'Sanierung & Renovierung' },
];

const Hero = ({ onNavigate }) => {
  return (
    <section id="start" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Bauplanung für eine Sanierung"
          className="h-full w-full object-cover"
          src="img/hero-planung.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/55 to-slate-900/80" />
      </div>

      <div className="container-custom relative z-10 px-4 pb-24 pt-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <MapPin className="h-4 w-4" />
            Sauerland Sanierung · Iserlohn
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Komplettlösungen <span className="text-gradient">aus einer Hand</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-100/90 md:text-xl">
            Wohnungssanierung, Wiederherstellung nach Wasserschaden und Renovierung rund ums Haus –
            professionell geplant und sauber umgesetzt.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand px-8 py-6 text-lg text-white shadow-lg shadow-primary/30 hover:opacity-90"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="mr-2 h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white hover:text-secondary"
              onClick={() => onNavigate('home', 'leistungen')}
            >
              Leistungen ansehen
            </Button>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-sm"
              >
                {stat.icon}
                {stat.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => onNavigate('home', 'leistungen')}
        aria-label="Nach unten scrollen"
        className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>

      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
