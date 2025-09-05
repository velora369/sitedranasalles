import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary-green text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/design-sem-nome-6-1.webp" 
                alt="Logo Dra. Ana Carolina Salles" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gold-primary"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Oncologista Clínica dedicada ao cuidado humanizado e à excelência no tratamento oncológico.
            </p>
            <div className="flex space-x-4">
              <a 
                href="instagram://user?username=anacarolinasallesoncologia" 
                onClick={(e) => {
                  // Para dispositivos móveis, tenta abrir o app primeiro
                  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // Se o app não abrir em 2.5s, redireciona para o site
                    setTimeout(() => {
                      window.location.href = "https://www.instagram.com/anacarolinasallesoncologia?igsh=MTk3NWJ5bjY3MGRnOQ==";
                    }, 2500);
                  } else {
                    // Para desktop, vai direto para o site
                    e.preventDefault();
                    window.open("https://www.instagram.com/anacarolinasallesoncologia?igsh=MTk3NWJ5bjY3MGRnOQ==", "_blank");
                  }
                }}
                className="text-gold-primary hover:text-gold-light transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/5561992947671" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold-primary hover:text-gold-light transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300 text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300 text-left"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('specialties')} 
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300 text-left"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300 text-left"
                >
                  Contato
                </button>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-gold-primary transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                (61) 99294-7671
              </p>
              <p>@anacarolinasallesoncologia</p>
              <p>
                Hospital DF Star, Brasília - DF
              </p>
              <p>
                OHB - Oncologia D'or
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-green mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Dra. Ana Carolina Salles. Todos os direitos reservados.</p>
          <p className="text-gray-400 opacity-60 mt-2">
            <a 
              href="https://medgrowthmkt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-primary transition-colors duration-300"
            >
              Desenvolvido por MedGrowth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
