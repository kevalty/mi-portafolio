// src/components/Education.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// Data remains the same
const educationHistory = [
  { key: 'espoch' }
];

// Corrected Timeline Item Component
const TimelineItem = ({ itemKey }) => { // Removed isLast as it's not needed for the line
  const { t } = useTranslation();

  const duration = t(`education.${itemKey}_duration`, t('education.duration'));
  const degree = t(`education.${itemKey}_degree`, t('education.degree'));
  const university = t(`education.${itemKey}_university`, t('education.university'));
  const location = t(`education.${itemKey}_location`, t('education.location'));
  const details = t(`education.${itemKey}_details`, t('education.details'));

  return (
    // List item with relative positioning
    <li className="mb-10 ms-10"> {/* Use margin-start (ms-10) to create space for the line/dot */}
      {/* Dot positioned absolutely on the line */}
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-primary border-2 border-accent"> {/* Use -start-3 for positioning */}
        <span className="w-3 h-3 bg-accent rounded-full"></span>
      </span>
      {/* Content block */}
      <div>
        {/* Date badge */}
        <time className="mb-1 text-xs font-normal leading-none text-text-secondary bg-background px-2 py-0.5 rounded-md inline-block">{duration}</time>
        {/* Degree Title */}
        <h3 className="text-lg font-semibold text-text-light mt-1">{degree}</h3>
        {/* University and Location */}
        <p className="text-base font-normal text-text-secondary">{university}</p>
        <p className="text-sm font-normal text-text-secondary/80 mb-2">{location}</p>
        {/* Details */}
        <p className="text-sm font-normal text-text-secondary">{details}</p>
      </div>
    </li>
  );
};


const Education = () => {
  const { t } = useTranslation();

  return (
    // Section uses the primary dark background
    <section id="education" className="py-24 px-8 bg-primary">
      <div className="container mx-auto max-w-2xl"> {/* Centered content */}
        {/* Light title */}
        <h2 className="font-sans text-4xl font-bold mb-16 text-center text-text-light">{t('education.title')}</h2>

        {/* Vertical Timeline Structure using an ordered list */}
        {/* The line is now created by the border on the OL */}
        <ol className="relative border-s border-border-color"> {/* Use border-start (border-s) */}
          {educationHistory.map((item, index) => (
            <TimelineItem
              key={index}
              itemKey={item.key}
            />
          ))}
        </ol>

      </div>
    </section>
  );
};

export default Education;