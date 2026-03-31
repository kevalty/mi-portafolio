// src/components/About.jsx
import { useTranslation } from 'react-i18next';
import AnimatedSection from './ui/AnimatedSection';

function About() {
  const { t } = useTranslation();

  return (
    // Section uses the secondary dark background (primary)
    <section id="about" className="py-24 px-8 bg-primary text-text-light">
      <div className="container mx-auto">
        {/* Section Title with Accent Line */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-3 text-text-light">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div> {/* Accent line */}
        </div>

        {/* Content Area with Split Layout */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Image Side */}
            <div className="md:w-1/2 lg:w-5/12">
              <img
                src="https://images.stockcake.com/public/a/c/9/ac9e6304-045f-4624-bc19-96cd8002f141_large/minimalist-office-desk-stockcake.jpg"
                alt="A modern, minimalist workspace"
                // Slightly rounded corners, border matching the dark theme
                className="rounded-lg w-full h-auto shadow-xl border border-border-color"
              />
            </div>
            {/* Text Side */}
            <div className="md:w-1/2 lg:w-7/12">
              {/* Using text-secondary for paragraphs */}
              <p className="leading-relaxed text-text-secondary text-lg mb-6">
                {t('about.paragraph1')}
              </p>
              <p className="leading-relaxed text-text-secondary text-lg">
                {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default About;