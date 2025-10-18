// src/components/Contact.jsx
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    // Fondo oscuro principal
    <section id="contact" className="py-24 px-8 bg-background"> 
      <div className="container mx-auto text-center max-w-3xl">
        {/* Título claro, usa font-sans */}
        <h2 className="font-sans text-4xl font-bold mb-6 text-text-light">{t('contact.title')}</h2> 
        {/* Texto secundario */}
        <p className="text-lg text-text-secondary mx-auto mb-8"> 
          {t('contact.prompt')}
        </p>
        {/* Botón con estilo púrpura */}
        <a 
          href="mailto:kevito418@gmail.com" 
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105"
        >
          {t('contact.cta')}
        </a>
      </div>
    </section>
  );
}

export default Contact;