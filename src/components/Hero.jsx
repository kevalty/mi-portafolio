// src/components/Hero.jsx
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    // Añade padding top para que el contenido no quede debajo del header fijo
    <section id="hero" className="py-20 px-8 pt-32 min-h-screen flex items-center"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          {/* Texto grande y audaz */}
          <h2 className="font-sans text-6xl md:text-8xl font-bold leading-tight text-text-light uppercase">
            {t('hero.greeting')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t('hero.tagline')}
          </p>
          {/* Botón con estilo púrpura */}
          <a 
            href="#contact" 
            className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://i.postimg.cc/BnL6q42J/unnamed.jpg" 
            alt="Professional headshot of Kevin Bedon" 
            // Borde sutil y sombra para la imagen
            className="rounded-lg w-full h-auto shadow-xl border border-border-color" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;