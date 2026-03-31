import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
const ParticleText = lazy(() => import('./ParticleText'));

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center py-20 px-8 pt-32 overflow-hidden">
      <div className="container mx-auto">
        {/* Small intro label */}
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">
          {t('hero.intro')}
        </p>

        {/* Particle canvas - particles assemble into "KEVIN" */}
        <div className="w-full h-36 md:h-52 -ml-2">
          <Suspense fallback={null}>
            <ParticleText />
          </Suspense>
        </div>

        {/* Last name + title */}
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-secondary mt-2 mb-4">
          Bedon Granizo — Software Developer
        </h2>

        <p className="text-base md:text-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
          {t('hero.tagline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105 shadow-lg"
          >
            {t('hero.cta')}
          </a>
          <a
            href="/CV_Kevin_Bedon.pdf"
            download="CV_Kevin_Bedon.pdf"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-accent font-bold py-3 px-8 border-2 border-accent rounded-md transition duration-300 hover:bg-accent/10 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('hero.downloadCV')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/50 text-xs font-mono tracking-widest uppercase">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-secondary/50 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
