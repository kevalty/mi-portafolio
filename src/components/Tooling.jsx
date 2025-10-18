// src/components/Tooling.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaAngular, FaNodeJs, FaFigma, FaSass, FaPython } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript, SiSolidity, SiDocker } from 'react-icons/si';

const technologies = [
  { name: 'React', IconComponent: FaReact },
  { name: 'Angular', IconComponent: FaAngular },
  { name: 'Node.js', IconComponent: FaNodeJs },
  { name: 'MongoDB', IconComponent: SiMongodb },
  { name: 'JavaScript', IconComponent: SiJavascript },
  { name: 'Figma', IconComponent: FaFigma },
  { name: 'Sass', IconComponent: FaSass },
  { name: 'TypeScript', IconComponent: SiTypescript },
  { name: 'Python', IconComponent: FaPython },
  { name: 'Docker', IconComponent: SiDocker },
];

const Tooling = () => {
  const { t } = useTranslation();

  return (
    // Fondo oscuro principal
    <section id="tooling" className="py-24 px-8 bg-background text-text-light"> 
      <div className="container mx-auto text-center">
        {/* Título claro, usa font-sans */}
        <h2 className="font-sans text-4xl font-bold mb-12 text-text-light">{t('tooling.title')}</h2> 
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map(({ name, IconComponent }, index) => (
            <div 
              key={index} 
              // Tarjetas con fondo oscuro secundario y borde sutil
              className="bg-primary border border-border-color rounded-lg p-4 flex flex-col items-center justify-center space-y-3 
                         hover:border-accent transition-all duration-300 transform hover:-translate-y-1 shadow-md"
            >
              {/* Icono con color de acento */}
              <IconComponent className="h-10 w-10 text-accent" /> 
              {/* Texto claro */}
              <span className="text-lg font-medium text-text-light">{name}</span> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tooling;