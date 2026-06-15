import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Printer, ExternalLink, Facebook } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  FAX_DISPLAY,
  EMAIL,
  ADDRESS_FULL,
  SOCIAL,
  MAP_EMBED_URL,
  MAP_LINK_URL,
  mailtoUrl,
} from '@/lib/contact';

const ContactSection = () => {
  const contactItems = [
    { icon: Phone, label: 'Telefon', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: Printer, label: 'Telefax', value: FAX_DISPLAY, href: null },
    { icon: Mail, label: 'E-Mail', value: EMAIL, href: mailtoUrl() },
    { icon: MapPin, label: 'Adresse', value: ADDRESS_FULL, href: MAP_LINK_URL },
  ];

  return (
    <section id="kontakt" className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4">Kontakt</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Lassen Sie uns über Ihr <span className="text-gradient">Projekt</span> sprechen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Rufen Sie an oder schreiben Sie uns – wir melden uns kurzfristig mit einem unverbindlichen Angebot.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-3xl bg-gradient-to-br from-secondary to-[#3a2418] p-8 text-white md:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Schnellster Weg</p>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Direkt anrufen</h3>
            <p className="mb-6 text-white/90">
              Telefonisch erreichen Sie uns am schnellsten. Gerne vereinbaren wir einen Termin vor Ort.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-brand text-white hover:opacity-90">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-secondary"
              >
                <a href={mailtoUrl()}>
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail schreiben
                </a>
              </Button>
            </div>

            <div className="mt-8 space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href, className: 'flex items-start gap-4 transition-opacity hover:opacity-80' } : { className: 'flex items-start gap-4' })}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{label}</p>
                      <p className="text-sm text-white/85">{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 font-semibold">Folgen Sie uns</p>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm"
          >
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">So finden Sie uns</p>
              <h3 className="mt-2 text-2xl font-bold">{ADDRESS_FULL}</h3>
              <p className="mt-3 text-muted-foreground">Sauerland Sanierung · Iserlohn und Umgebung</p>
            </div>
            <iframe
              src={MAP_EMBED_URL}
              title="Standort auf Google Maps"
              className="min-h-[320px] w-full flex-grow border-0"
              style={{ display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-border/60 p-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  In Google Maps öffnen
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
