import React, { useState, useCallback, useLayoutEffect, useRef } from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Impressum from '@/components/pages/Impressum';
import Datenschutz from '@/components/pages/Datenschutz';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

function App() {
  const [page, setPage] = useState('home');
  const pendingAnchor = useRef(null);

  // Single navigation entry point used by navbar, footer and in-page buttons.
  // From a legal page we first swap back to home, then scroll to the section
  // once it has actually rendered (handled in the layout effect below).
  const navigate = useCallback(
    (target, anchor = null) => {
      pendingAnchor.current = anchor;
      if (target !== page) {
        setPage(target);
      } else if (anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        pendingAnchor.current = null;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [page]
  );

  useLayoutEffect(() => {
    if (page === 'home' && pendingAnchor.current) {
      const el = document.getElementById(pendingAnchor.current);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    pendingAnchor.current = null;
  }, [page]);

  const isLegal = page === 'impressum' || page === 'datenschutz';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onNavigate={navigate} />

      <main className="flex-grow">
        {page === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <ServicesSection />
            <AboutSection onNavigate={navigate} />
            <ReferencesSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}

        {isLegal && (
          <div className="bg-background pb-20 pt-28 md:pt-32">
            <div className="container-custom">
              <button
                onClick={() => navigate('home')}
                className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </button>
              {page === 'impressum' ? <Impressum /> : <Datenschutz />}
            </div>
          </div>
        )}
      </main>

      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Anrufen: ${PHONE_DISPLAY}`}
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-4 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20" />
        <Phone className="relative h-6 w-6" />
      </a>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
