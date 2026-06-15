import React from 'react';
import { MapPin, Phone, Printer, Mail, Facebook } from 'lucide-react';
import BrandMark from '@/components/ui/BrandMark';
import {
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  FAX_DISPLAY,
  EMAIL,
  ADDRESS_FULL,
  SOCIAL,
  mailtoUrl,
} from '@/lib/contact';

const quickLinks = [
  { name: 'Start', id: 'start' },
  { name: 'Leistungen', id: 'leistungen' },
  { name: 'Referenzen', id: 'referenzen' },
  { name: 'Bewertungen', id: 'bewertungen' },
  { name: 'Über uns', id: 'ueber-uns' },
  { name: 'Kontakt', id: 'kontakt' },
];

const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <BrandMark className="h-12 w-12" />
              <span className="font-display text-xl font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="mb-5 max-w-xs text-sm text-slate-400">
              Komplettlösungen aus einer Hand – Wohnungssanierung, Wasserschadensanierung und Renovierung
              rund ums Haus.
            </p>
            <div className="flex gap-3">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-600">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-lg font-semibold text-white">Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('home', link.id);
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={() => onNavigate('impressum')} className="text-sm text-slate-400 transition-colors hover:text-white">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('datenschutz')} className="text-sm text-slate-400 transition-colors hover:text-white">
                  Datenschutzerklärung
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-lg font-semibold text-white">Kontakt</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-slate-400">{ADDRESS_FULL}</span>
              </div>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
              <p className="flex items-center gap-3 text-sm text-slate-400">
                <Printer className="h-5 w-5 shrink-0 text-primary" />
                Fax: {FAX_DISPLAY}
              </p>
              <a href={mailtoUrl()} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-sm text-slate-500 sm:flex-row">
          <p>© {year} {COMPANY_NAME}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('impressum')} className="transition-colors hover:text-white">
              Impressum
            </button>
            <button onClick={() => onNavigate('datenschutz')} className="transition-colors hover:text-white">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
