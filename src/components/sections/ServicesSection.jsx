import React from 'react';
import { motion } from 'framer-motion';
import { Home, Droplets, Building2, Check } from 'lucide-react';

const serviceGroups = [
  {
    icon: Home,
    title: 'Wohnungssanierung',
    description: 'Vom Abriss bis zur Abnahme – wir bringen Ihre Wohnung komplett auf den neuesten Stand.',
    items: [
      'Abrissarbeiten',
      'Verlegung von Bodenbelägen',
      'Streicharbeiten',
      'Spachtel- und Tapetenarbeiten',
      'Fliesenarbeiten',
      'Erneuerung der Elektroleitungen',
      'Austausch der Wasserleitungen',
      'Fenstereinbau',
      'Austausch von Türen und Zargen',
      'Einbau neuer Steckdosen und TV-Dosen',
      'Baustellenabnahme',
    ],
  },
  {
    icon: Droplets,
    title: 'Wiederherstellung nach Wasserschaden',
    description: 'Schnelle, fachgerechte Hilfe nach Wasserschäden – inklusive Abstimmung mit Ihrer Versicherung.',
    items: ['Bautrocknung', 'Wasserschadensanierung', 'Rücksprachen mit der Versicherung'],
  },
  {
    icon: Building2,
    title: 'Rund ums Haus',
    description: 'Pflege, Werterhalt und Modernisierung – außen wie innen, vom Keller bis zur Fassade.',
    items: [
      'Fassade streichen',
      'Hausflur streichen',
      'Streicharbeiten an Fenstern',
      'Handläufe erneuern oder streichen',
      'Baugerüst',
      'Fenstereinbau',
      'Kellersanierung',
      'Abdichtungsarbeiten',
      'GaLaBau',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Leistungen</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Alles für Ihre <span className="text-gradient">Sanierung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Drei Bereiche, ein Ansprechpartner. Wir koordinieren alle Gewerke, damit Sie sich um nichts
            kümmern müssen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map(({ icon: Icon, title, description, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover flex flex-col rounded-3xl border border-border/60 bg-white p-7 shadow-sm"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mb-2 font-display text-xl font-bold">{title}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{description}</p>
              <ul className="mt-auto space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
