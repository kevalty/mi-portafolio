// src/components/Experience.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const experienceKeys = ['job1', 'job2', 'job3', 'job4', 'job5']; 

const ExperienceCard = ({ experienceKey, isOpen, toggleOpen }) => {
  const { t } = useTranslation();
  const experience = {
    title: t(`experience.${experienceKey}_title`),
    company: t(`experience.${experienceKey}_company`),
    duration: t(`experience.${experienceKey}_duration`),
    location: t(`experience.${experienceKey}_location`),
    description: t(`experience.${experienceKey}_desc`),
    skills: { job1: ["AI Model Training", "Code Analysis", "Debugging", "Python", "JavaScript", "Java", "C#"], job2: ["React", "Node.js", "Responsive Design", "Client Collaboration", "GitHub", "CI/CD"], job3: ["Web Development", "UX/UI Focus", "Performance Optimization", "Responsive Design"], job4: ["Teaching Support", "Programming Concepts", "Web Development", "Lab Assistance"], job5: ["English Fluency (C1)", "Interpersonal Skills", "Adaptability", "Cross-Cultural Communication"] }[experienceKey] || [] 
  };
  
  return (
    // Fondo oscuro para la tarjeta base
    <div className="bg-primary rounded-lg shadow-md overflow-hidden mb-4 border border-border-color"> 
      <button
        // Botón con acento púrpura y hover
        className={`w-full flex justify-between items-center p-6 text-left font-semibold text-lg transition-colors duration-300 space-x-4 ${isOpen ? 'bg-accent text-white' : 'bg-primary text-text-light hover:bg-accent/20'}`} 
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`experience-details-${experienceKey}`}
      >
        <span className="flex-grow">{experience.title}</span> 
        <span className={`${isOpen ? 'text-white/80' : 'text-text-secondary'} text-sm ml-4 hidden md:inline-block text-right whitespace-nowrap`}>{experience.duration}</span> 
        <span className={`${isOpen ? 'text-white' : 'text-accent'} text-2xl flex-shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}> {isOpen ? '−' : '+'} </span> 
      </button>
      {isOpen && (
        // Detalles con fondo oscuro primario
        <div id={`experience-details-${experienceKey}`} className="p-6 border-t border-border-color animate-fadeDown bg-primary"> 
          <div className="flex flex-col md:flex-row md:items-center justify-between text-text-secondary mb-4">
            <p className="text-sm md:text-base mb-2 md:mb-0">📍 {experience.location}</p>
            {experience.company && (
              <p className="text-sm md:text-base font-medium">{experience.company}</p>
            )}
          </div>
          <p className="text-text-secondary mb-6 leading-relaxed">{experience.description}</p> 
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              // Etiquetas de skills con estilo sutil
              <span key={idx} className="bg-border-color text-sm font-medium px-3 py-1 rounded-full text-text-secondary"> 
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const [openCardId, setOpenCardId] = useState(experienceKeys[0]);

  const toggleOpen = (key) => {
    setOpenCardId(openCardId === key ? null : key);
  };

  return (
    // Sección con fondo oscuro principal
    <section id="experience" className="py-24 px-8 bg-background text-text-light"> 
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="font-sans text-4xl font-bold mb-12 text-text-light">{t('experience.title')}</h2> 

        {experienceKeys.map((key) => (
          <ExperienceCard
            key={key}
            experienceKey={key}
            isOpen={openCardId === key}
            toggleOpen={() => toggleOpen(key)}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;