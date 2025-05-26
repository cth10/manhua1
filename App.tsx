import React from 'react';
import { HeroSection } from './components/HeroSection.js';
import { DefinitionSection } from './components/DefinitionSection.js';
import { CharacteristicsSection } from './components/CharacteristicsSection.js';
import { GenresSection } from './components/GenresSection.js';
import { ComparisonSection } from './components/ComparisonSection.js';
import { WhereToReadSection } from './components/WhereToReadSection.js';
import { Footer } from './components/Footer.js';
import { ArrowUpCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '#definicao', label: 'Definição' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#generos', label: 'Gêneros' },
  { href: '#comparacao', label: 'Comparações' },
  { href: '#onde-ler', label: 'Onde Ler' },
];

const App = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const headerRef = React.useRef(null);

  const getHeaderHeight = () => {
    return headerRef.current ? headerRef.current.offsetHeight : 64;
  };

  React.useEffect(() => {
    const checkScroll = () => {
      const headerOffset = getHeaderHeight();
      const scrollPosition = window.pageYOffset + headerOffset + 20; // Added a small buffer

      // ScrollTop button visibility
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }

      // Active section highlighting
      let currentSection = '';
      navLinks.forEach(link => {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = link.href;
          }
        }
      });
       // Fallback for the first section or if no section is perfectly matched
      if (!currentSection && navLinks.length > 0) {
        const firstElement = document.getElementById(navLinks[0].href.substring(1));
        if (firstElement && window.pageYOffset < firstElement.offsetTop + firstElement.offsetHeight - headerOffset) {
             // If near the top or before the first section fully passes
            if (window.pageYOffset < firstElement.offsetTop - headerOffset + 200) {
                 currentSection = navLinks[0].href;
            }
        }
      }
      // if at the bottom of the page, last link active
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) { // 2px buffer
          currentSection = navLinks[navLinks.length - 1].href;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // Initial check
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScrollTop]);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetId = href || event.currentTarget.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    const id = targetId.substring(1);
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = getHeaderHeight();
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavLinks = (isMobile = false) => (
    navLinks.map(link => (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => handleSmoothScroll(e, link.href)}
        className={`
          transition-colors duration-200
          ${isMobile ? 'block py-3 text-2xl text-center' : 'mx-2 my-1 sm:my-0'}
          ${activeSection === link.href ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}
        `}
      >
        {link.label}
      </a>
    ))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light via-pink-50 to-blue-50 text-brand-dark">
      <header ref={headerRef} id="app-header" className="bg-brand-dark text-brand-light p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold playfair-display tracking-tight">Universo Manhua</h1>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center">
            {renderNavLinks()}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 rounded-md text-brand-light hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary z-[60] relative"
            >
              {isMobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-[55] bg-brand-dark bg-opacity-95 backdrop-blur-sm text-brand-light
          transform transition-transform duration-300 ease-in-out md:hidden
          flex flex-col items-center justify-center space-y-6
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col items-center justify-center">
           {renderNavLinks(true)}
        </nav>
      </div>

      <main className="flex-grow">
        <HeroSection />
        <DefinitionSection />
        <CharacteristicsSection />
        <GenresSection />
        <ComparisonSection />
        <WhereToReadSection />
      </main>

      <Footer />

      <button
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        className={`
          fixed bottom-8 right-8 bg-brand-primary hover:bg-pink-700 text-white p-3 rounded-full shadow-lg 
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
          transition-all duration-300 ease-in-out transform hover:scale-110
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <ArrowUpCircleIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default App;