import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HardHat, Users, ThumbsUp, Phone } from 'lucide-react';
import { PHONE_TEL } from '@/lib/contact';

const features = [
  { icon: HardHat, title: 'Aus einer Hand', description: 'Alle Gewerke koordiniert – ein Vertrag, ein Verantwortlicher.' },
  { icon: Users, title: 'Eingespieltes Team', description: 'Erfahrene Handwerker für sauberes, termintreues Arbeiten.' },
  { icon: ThumbsUp, title: 'Faire Beratung', description: 'Ehrliche Einschätzung, transparente Angebote, keine Überraschungen.' },
];

const AboutSection = ({ onNavigate }) => {
  return (
    <section id="ueber-uns" className="section-padding overflow-hidden bg-muted/40">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Über uns</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Ihr Partner für die <span className="text-gradient">Sanierung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Wir sind Ihr regionaler Sanierungsbetrieb aus Iserlohn und begleiten Sie von der ersten
            Idee bis zur fertigen Übergabe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                alt="Handwerker mit Werkzeug auf der Baustelle"
                className="h-full w-full object-cover"
                src="img/ueber-uns-handwerker.jpg"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-white shadow-lg sm:-right-5"
            >
              <HardHat className="h-6 w-6" />
              <p className="text-lg font-bold">Komplett aus einer Hand</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Planung, Bewertung & Sanierung</h3>
            <p className="mb-6 text-lg font-medium text-foreground">
              Sie haben eine Immobilie gefunden und benötigen professionelle Unterstützung bei Planung,
              Bewertung oder Sanierung?
            </p>
            <p className="mb-8 text-muted-foreground">
              Dann sind Sie bei uns richtig. Wir schauen uns das Objekt an, beraten Sie ehrlich zum
              Aufwand und setzen die Maßnahmen anschließend zuverlässig um – koordiniert über alle
              Gewerke hinweg.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border/60 bg-white p-5 text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h4 className="mb-1 font-semibold">{title}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-brand text-white hover:opacity-90">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('home', 'kontakt')}>
                Kontakt aufnehmen
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
