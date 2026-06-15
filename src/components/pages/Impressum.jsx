import React from 'react';
import { COMPANY_NAME, ADDRESS_STREET, ADDRESS_CITY, PHONE_DISPLAY, EMAIL } from '@/lib/contact';

// HINWEIS: Bitte die mit [...] markierten Angaben rechtlich prüfen und ergänzen.
const Impressum = () => {
  return (
    <article className="prose-sm mx-auto max-w-3xl space-y-8">
      <header>
        <h1 className="font-display text-3xl font-bold md:text-4xl">Impressum</h1>
        <p className="mt-2 text-muted-foreground">Angaben gemäß § 5 DDG (ehemals § 5 TMG)</p>
      </header>

      <section className="space-y-1">
        <h2 className="font-display text-xl font-semibold">Anbieter</h2>
        <p>{COMPANY_NAME}</p>
        <p>[Inhaber: Vor- und Nachname]</p>
        <p>{ADDRESS_STREET}</p>
        <p>{ADDRESS_CITY}</p>
      </section>

      <section className="space-y-1">
        <h2 className="font-display text-xl font-semibold">Kontakt</h2>
        <p>Telefon: {PHONE_DISPLAY}</p>
        <p>E-Mail: {EMAIL}</p>
      </section>

      <section className="space-y-1">
        <h2 className="font-display text-xl font-semibold">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          [USt-IdNr. eintragen, falls vorhanden]
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-display text-xl font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>[Vor- und Nachname]</p>
        <p>{ADDRESS_STREET}, {ADDRESS_CITY}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">EU-Streitschlichtung</h2>
        <p className="text-muted-foreground">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a className="text-primary hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
        Hinweis: Dieser Text ist ein Muster. Bitte lassen Sie die Angaben vor der Veröffentlichung
        rechtlich prüfen und ergänzen Sie die mit [...] markierten Felder.
      </p>
    </article>
  );
};

export default Impressum;
