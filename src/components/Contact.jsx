// src/components/Contact.jsx
import React, { useState } from 'react'; // Import useState
import { useTranslation } from 'react-i18next';
import AnimatedSection from './ui/AnimatedSection';

function Contact() {
  const { t } = useTranslation();
  const [buttonText, setButtonText] = useState(t('contact.cta')); // Initial button text
  const emailAddress = 'kevito418@gmail.com'; // Your email address

  const handleContactClick = () => {
    // Attempt to copy email to clipboard
    navigator.clipboard.writeText(emailAddress).then(() => {
      // Success: Change button text temporarily
      setButtonText('Email Copied!');
      setTimeout(() => {
        setButtonText(t('contact.cta')); // Revert after 2 seconds
      }, 2000);
    }).catch(err => {
      // Error (clipboard access denied or failed)
      console.error('Failed to copy email: ', err);
      // Optional: Fallback to mailto if copy fails, though it might still do nothing
      window.location.href = `mailto:${emailAddress}`;
    });
  };

  return (
    <section id="contact" className="py-24 px-8 bg-background">
      <div className="container mx-auto text-center max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-4xl font-bold mb-6 text-text-light">{t('contact.title')}</h2>
          <p className="text-lg text-text-secondary mx-auto mb-8">
            {t('contact.prompt')}
          </p>
          {/* Changed <a> to <button> and added onClick */}
          <button
            onClick={handleContactClick}
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105 shadow-lg w-full sm:w-auto" // Added width constraint
          >
            {buttonText} {/* Display dynamic button text */}
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;