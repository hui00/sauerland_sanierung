# Sauerland Sanierung

Statische Website (Vite + React + Tailwind CSS) für **Sauerland Sanierung** aus Iserlohn –
Komplettlösungen aus einer Hand. Gebaut nach dem Vorbild des `surf`-Projekts und für das Hosting
auf **GitHub Pages** vorbereitet.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann unter der angezeigten URL (Standard: http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Der Production-Build landet im Ordner `dist/`.

## Kostenloses Hosting mit GitHub Pages

Dieses Repository enthält einen GitHub-Actions-Workflow unter
`.github/workflows/deploy-pages.yml`.

So aktivieren Sie das Hosting:

1. Repository auf GitHub pushen (Branch `main`).
2. In den Repository-Einstellungen auf **Pages** gehen.
3. Unter **Build and deployment** die Quelle auf **GitHub Actions** stellen.
4. Push auf `main` → die Seite wird automatisch gebaut und veröffentlicht.

Da `vite.config.js` `base: './'` verwendet, funktioniert die Seite sowohl unter
`https://nutzername.github.io/` als auch unter `https://nutzername.github.io/repo-name/`.

## Inhalte anpassen

- **Kontaktdaten** (Telefon, E-Mail, Adresse, Social-Media-Links): zentral in
  [`src/lib/contact.js`](src/lib/contact.js).
- **Leistungen**: in [`src/components/sections/ServicesSection.jsx`](src/components/sections/ServicesSection.jsx).
- **Texte** der Abschnitte: in den jeweiligen Dateien unter `src/components/sections/`.
- **Impressum & Datenschutz**: in `src/components/pages/`. ⚠️ Die mit `[...]` markierten Felder
  müssen rechtlich ergänzt und geprüft werden (Inhaber, USt-IdNr. usw.).

## Bilder ersetzen

Hero, „Über uns" und die Referenzen-Galerie nutzen aktuell Platzhalterfotos von Unsplash.
Eigene Bilder einfach in den Ordner `public/img/` legen und im Code als `img/dateiname.jpg`
referenzieren (z. B. in `ReferencesSection.jsx`, `Hero.jsx`, `AboutSection.jsx`).
# sauerland_sanierung
