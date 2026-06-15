import React from 'react';
import { COMPANY_NAME, ADDRESS_FULL, PHONE_DISPLAY, EMAIL } from '@/lib/contact';

// HINWEIS: Muster-Datenschutzerklärung. Bitte vor Veröffentlichung rechtlich prüfen lassen.
const Datenschutz = () => {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <h1 className="font-display text-3xl font-bold md:text-4xl">Datenschutzerklärung</h1>
        <p className="mt-2 text-muted-foreground">Informationen gemäß Art. 13 DSGVO</p>
      </header>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">1. Verantwortlicher</h2>
        <p className="text-muted-foreground">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>{COMPANY_NAME}</p>
        <p>{ADDRESS_FULL}</p>
        <p>Telefon: {PHONE_DISPLAY}</p>
        <p>E-Mail: {EMAIL}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">2. Hosting (GitHub Pages)</h2>
        <p className="text-muted-foreground">
          Diese Website wird bei GitHub Pages (GitHub Inc.) gehostet. Beim Aufruf der Seite werden
          technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, abgerufene
          Datei, Browsertyp) in Server-Logfiles verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">3. Kontaktaufnahme</h2>
        <p className="text-muted-foreground">
          Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der
          Anfrage verarbeitet (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Die Daten werden gelöscht, sobald
          sie für den Zweck der Verarbeitung nicht mehr erforderlich sind.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">4. Google Maps</h2>
        <p className="text-muted-foreground">
          Auf der Kontaktseite binden wir eine Karte von Google Maps (Google Ireland Ltd.) ein. Beim
          Laden der Karte wird Ihre IP-Adresse an Google übertragen. Weitere Informationen finden Sie
          in der Datenschutzerklärung von Google:{' '}
          <a className="text-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">5. Externe Schriftarten / Bilder</h2>
        <p className="text-muted-foreground">
          Diese Website nutzt ggf. Google Fonts und extern eingebundene Bilder. Dabei kann Ihre
          IP-Adresse an die jeweiligen Anbieter übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold">6. Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie ein Widerspruchsrecht. Zudem steht Ihnen ein Beschwerderecht bei
          einer Datenschutz-Aufsichtsbehörde zu.
        </p>
      </section>

      <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
        Hinweis: Diese Datenschutzerklärung ist ein Muster und ersetzt keine Rechtsberatung. Bitte vor
        der Veröffentlichung an Ihre tatsächlichen Verarbeitungen anpassen und prüfen lassen.
      </p>
    </article>
  );
};

export default Datenschutz;
