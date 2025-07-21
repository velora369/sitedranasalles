import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'specialties', label: 'Especialidades' },
    { id: 'congress', label: 'Congressos' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'glass-effect'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/design-sem-nome-6-1.webp" 
                alt="Logo Dra. Ana Carolina Salles" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gold-primary"
              />
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-montserrat font-medium text-primary-green hover:text-gold-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blog"
                className="font-montserrat font-medium text-primary-green hover:text-gold-primary transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-green hover:text-gold-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 font-montserrat font-medium text-primary-green hover:text-gold-primary"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              className="block px-3 py-2 font-montserrat font-medium text-primary-green hover:text-gold-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
