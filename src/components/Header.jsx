// src/components/Header.jsx
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    // Header fixed with dark background and border
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-border-color z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-8"> {/* Adjusted padding */}
        {/* Logo/Name */}
        <h1 className="text-xl font-bold font-display text-accent cursor-pointer">Kevin Bedon</h1>

        {/* Navigation and Language Switcher Container */}
        <div className="flex items-center gap-4"> {/* Use gap-4 */}
          {/* Main Navigation (Hidden on smaller screens if needed, add 'hidden md:flex' if you want) */}
          <nav className="hidden sm:flex items-center gap-6 text-sm"> {/* Hide nav links on extra small screens */}
            <a href="#projects" className="text-text-secondary hover:text-text-light transition-colors duration-300">
              <span className="text-accent">//</span> 01 <span className="font-semibold text-text-light">{t('header.navProjects')}</span>
            </a>
            <a href="#experience" className="text-text-secondary hover:text-text-light transition-colors duration-300">
              <span className="text-accent">//</span> 02 <span className="font-semibold text-text-light">{t('header.navExperience')}</span>
            </a>
            <a href="#contact" className="text-text-secondary hover:text-text-light transition-colors duration-300">
              <span className="text-accent">//</span> 03 <span className="font-semibold text-text-light">{t('header.navContact')}</span>
            </a>
             {/* Removed hire me button from here if space is tight, keep it if you prefer */}
          </nav>

          {/* Separator (visible when nav is visible) */}
          <div className="hidden sm:block border-l border-border-color h-6"></div>

          {/* Language Switcher (Always Visible) */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;