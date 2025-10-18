// src/components/Hero.jsx (in mi-portafolio)
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    // Add pt-32 for padding below fixed header
    <section id="hero" className="py-20 px-8 pt-32 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-sans text-6xl md:text-8xl font-bold leading-tight text-text-light uppercase">
            {t('hero.greeting')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t('hero.tagline')}
          </p>

          {/* Container for the two buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Work with me button */}
            <a
              href="#contact"
              className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105 shadow-lg" // Added shadow-lg
            >
              {t('hero.cta')}
            </a>

            {/* --- THIS IS THE MISSING DOWNLOAD CV BUTTON --- */}
            <a
              href="/CV_Kevin_Bedon.pdf" // Path relative to public folder
              download="CV_Kevin_Bedon.pdf" // Suggested download filename
              // Button with outline style using accent color
              className="inline-flex items-center justify-center gap-2 bg-transparent text-accent font-bold py-3 px-8 border-2 border-accent rounded-md transition duration-300 hover:bg-accent/10 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
              {t('hero.downloadCV')} {/* Translation key needed */}
            </a>
             {/* --- END OF MISSING BUTTON --- */}

          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.postimg.cc/BnL6q42J/unnamed.jpg" // Your profile picture
            alt="Professional headshot of Kevin Bedon"
            className="rounded-lg w-full h-auto shadow-xl border border-border-color"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;