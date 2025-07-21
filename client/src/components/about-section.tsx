import { useState, useEffect } from "react";
import { GraduationCap, Stethoscope, Award, Dna, Building2, ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const doctorImages = [
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.47.18.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.44.57.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.46.39.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.45.56.webp"
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: "Graduação em Medicina",
      description: "Universidade Católica de Brasília (2002-2008)"
    },
    {
      icon: Stethoscope,
      title: "Residência em Clínica Médica",
      description: "(2009-2010)"
    },
    {
      icon: Award,
      title: "Oncologista Clínica",
      description: "Hospital de Base do Distrito Federal (2013)"
    },
    {
      icon: Dna,
      title: "Mestrado",
      description: "Ciências Genômicas e Biotecnologia - UCB (2013-2014)"
    },
    {
      icon: Building2,
      title: "Pós-Graduação",
      description: "Gestão em Saúde - Hospital Albert Einstein (2021)"
    }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % doctorImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [doctorImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? doctorImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % doctorImages.length
    );
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            Uma Trajetória de Dedicação e Excelência em Oncologia
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade">
            <div className="relative max-w-md mx-auto">
              {/* Image Carousel */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {doctorImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Dra. Ana Carolina Salles - Foto ${index + 1}`} 
                      className="w-full h-[400px] object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {doctorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-gold-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="section-fade">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A Dra. Ana Carolina Salles é uma oncologista clínica com uma paixão inabalável pela medicina e um compromisso profundo com seus pacientes. Sua jornada acadêmica e profissional é marcada pela busca contínua por conhecimento e aprimoramento:
            </p>
            
            <div className="space-y-4 mb-8">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-gold-primary p-2 rounded-lg mr-4 mt-1">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-primary-green">{credential.title}</h3>
                      <p className="text-gray-medium">{credential.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Como membro associada da SBOC, ASCO e ESMO, mantém-se atualizada com as inovações globais na oncologia. Realizou cursos observacionais em renomados centros como Gustave Roussy (Paris), Dana Farber (Boston) e Oklahoma Cancer Center, com foco em tumores femininos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
