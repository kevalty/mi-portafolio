// src/components/Projects.jsx
import { useTranslation } from 'react-i18next';
import AnimatedSection from './ui/AnimatedSection';

// Define the keys for iteration, adding the new project at the end
const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7', 'project8', 'project9']; 

// Define the data that doesn't need translation
const projectDetails = {
  project1: { // Web Metadata Extractor
    tech: ["Python", "FastAPI", "React", "Web Scraping"],
    link: "https://extractor-metdata.netlify.app",
    repoLink: "https://github.com/kevalty/metadata-extractor-demo-frontend"
  },
  project2: { // Sentiment Analyzer
    tech: ["Python", "Flask", "React", "AI"],
    link: "https://sentiment-analyzer-demo-frontend.netlify.app",
    repoLink: "https://github.com/kevalty/sentiment-analyzer-demo"
  },
  project3: { // Interactive Architecture Diagram
    tech: ["React", "Tailwind CSS", "SVG"],
    link: "https://interactive-architecture-diagram.netlify.app",
    repoLink: "https://github.com/kevalty/Interactive-Architecture-Diagram"
  },
  project4: { // CI/CD Pipeline Visualizer
    tech: ["React", "Tailwind CSS", "SVG"],
    link: "https://pipelineview.netlify.app",
    repoLink: "https://github.com/kevalty/Pipeline-Visualizer"
  },
  project5: { // Live API Playground
    tech: ["React", "Node.js", "Express"],
    link: "https://apilivedemo.netlify.app",
    repoLink: "https://github.com/kevalty/api-playground-frontend"
  },
  project6: { // Real-Time Form Validation
    tech: ["React", "React Hook Form"],
    link: "https://formvaldation.netlify.app",
    repoLink: "https://github.com/kevalty/Form_validations"
  },
  project7: { // Interactive Data Dashboard
    tech: ["React", "Chart.js"],
    link: "https://68f063c7c733ad9d84cf37b9--funny-caramel-13388b.netlify.app",
    repoLink: "https://github.com/kevalty/charts-frontend_keval"
  },
  project8: { // JWT Authentication
    tech: ["React", "Node.js"],
    link: "https://jwt-demo-frontend.netlify.app",
    repoLink: "https://github.com/kevalty/jwt-demo-backend"
  },
  // --- NEW PROJECT ADDED AT THE END ---
  project9: { // QR Code Generator 
    tech: ["Python", "Flask", "React", "qrcode"],
    link: "https://qr-generator-front.netlify.app",
    repoLink: "https://github.com/kevalty/qr-generator-demo-frontend"
  }
};

const ProjectCard = ({ projectKey }) => {
  const { t } = useTranslation();
  // Attempt to get details; provide default empty object if key is missing
  const details = projectDetails[projectKey] || { tech: [], link: '#', repoLink: '#' }; 

  return (
    <div className="bg-primary/50 p-8 rounded-2xl text-text-dark text-left flex flex-col justify-between hover:bg-primary/70 transition-colors h-full shadow-lg border border-transparent hover:border-accent">
      <div>
        <h3 className="font-sans text-xl font-bold mb-2 text-text-light">{t(`projects.${projectKey}_title`)}</h3>
        <p className="mb-6 text-sm text-text-secondary">{t(`projects.${projectKey}_desc`)}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {/* Ensure details.tech exists before mapping */}
          {details.tech?.map((techName) => ( 
            <span key={techName} className="bg-border-color text-xs font-mono px-3 py-1 rounded-full text-text-secondary">{techName}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-4">
        <a href={details.repoLink} target="_blank" rel="noopener noreferrer" title={t('projects.viewCode')} className="text-text-secondary hover:text-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a
          href={details.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white text-sm font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105"
        >
          {t('projects.viewDemo')}
        </a>
      </div>
    </div>
  );
};

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl font-bold mb-4 text-text-light">{t('projects.title')}</h2>

        <p className="text-base text-text-secondary max-w-3xl mx-auto mb-12">
          {t('projects.backendNote')}
        </p>

        {/* Adjusted grid for up to 9 items (3x3 layout on lg screens) */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectKeys.map((key) => (
              <ProjectCard key={key} projectKey={key} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Projects;