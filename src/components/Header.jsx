// src/components/Header.jsx
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    // Header fijo con fondo oscuro y borde sutil
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-border-color z-50"> 
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo/Nombre con acento */}
        <h1 className="text-xl font-bold font-serif text-accent cursor-pointer">Kevin Bedon</h1> 
        <nav className="flex items-center gap-6 text-sm">
          {/* Enlaces con estilo del ejemplo */}
          <a href="#projects" className="text-text-secondary hover:text-text-light transition-colors duration-300">
            <span className="text-accent">//</span> 01 <span className="font-semibold text-text-light">Projects</span>
          </a>
          <a href="#experience" className="text-text-secondary hover:text-text-light transition-colors duration-300">
            <span className="text-accent">//</span> 02 <span className="font-semibold text-text-light">Experience</span>
          </a>
          <a href="#contact" className="text-text-secondary hover:text-text-light transition-colors duration-300">
            <span className="text-accent">//</span> 03 <span className="font-semibold text-text-light">Contact</span>
          </a>
          <div className="border-l border-border-color h-6 mx-2"></div> {/* Separador */}
          <LanguageSwitcher /> 
        </nav>
      </div>
    </header>
  );
}

export default Header;