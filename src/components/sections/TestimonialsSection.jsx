import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import googleReviewData from '@/data/google-reviews.json';

const Stars = ({ className = 'h-4 w-4' }) => (
  <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} className={`${className} fill-current`} />
    ))}
  </span>
);

const TestimonialsSection = () => {
  const googleReviewsUrl = googleReviewData.googleMapsUri;
  const reviews = googleReviewData.reviews || [];
  const rating = Number(googleReviewData.rating).toFixed(1);
  const count = googleReviewData.reviewCount;
  const reviewCountLabel = `${count} ${count === 1 ? 'Rezension' : 'Rezensionen'}`;

  return (
    <section id="bewertungen" className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow mb-4">Bewertungen</span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Bewertet mit Bestnote auf Google – überzeugen Sie sich selbst.
          </motion.p>
        </div>

        {/* Google rating summary banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:flex-row sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-xl font-bold shadow-sm">
              G
            </span>
            <div>
              <p className="font-semibold">Google Bewertungen</p>
              <p className="text-sm text-muted-foreground">Bewertungen von Google Maps</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-extrabold">{rating}</span>
            <div>
              <Stars className="h-5 w-5" />
              <p className="mt-1 text-sm text-muted-foreground">{reviewCountLabel}</p>
            </div>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Auf Google lesen
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Individual reviews — only rendered once review texts are available
            (the GitHub Action fills them in via the Google Places API). */}
        {reviews.length > 0 && (
          <div className="mx-auto max-w-6xl gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.author}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.04 }}
                className="mb-6 break-inside-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-sm"
              >
                <Stars />
                <p className="mt-3 whitespace-pre-line leading-relaxed text-foreground/80">{review.text}</p>
                <div className="mt-5 border-t border-border/60 pt-4">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
