import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CongressImage {
  url: string;
  title: string;
  description: string;
}

interface SelectedImage extends CongressImage {
  index: number;
}

export default function CongressSection() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const congressImages = [
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.48.54.webp",
      title: "Congresso Brasileiro de Mastologia - 2025",
      description: "Participação no principal evento brasileiro de mastologia"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.49.39.webp",
      title: "Congresso Americano de Oncologia Clínica 2025",
      description: "ASCO 2025 - O mais importante congresso mundial de oncologia"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.50.38.webp",
      title: "Evento no Congresso Brasileiro de Mastologia para pacientes",
      description: "Atividades de educação e conscientização para pacientes"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.51.46.webp",
      title: "Oncologistas da Rede D'or de todo o Brasil",
      description: "Equipe da Rede D'or no Congresso Americano de Oncologia, ASCO 2025"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.53.45.webp",
      title: "SABCS 2024 - San Antonio, EUA",
      description: "Participação no Principal Congresso de Câncer de Mama no mundo"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.55.40.webp",
      title: "Corrida do Outubro Rosa Rede D'or 2024",
      description: "Evento de conscientização sobre o câncer de mama"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.56.33.webp",
      title: "Palestra para Pacientes Outubro Rosa",
      description: "Atividade educativa durante a campanha Outubro Rosa"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.57.38.webp",
      title: "Reunião Científica de Tumores Ginecológicos",
      description: "Discussão de casos e atualizações científicas"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.58.48.webp",
      title: "Mama Star - DF Star",
      description: "Evento científico realizado no DF Star, com excelentes especialistas"
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.09.05.webp",
      title: "Equipe de Oncologia Rede D'Or no ASCO 2024",
      description: "Congresso Americano de Oncologia em 2024"
    }
  ];

  const openModal = (image: CongressImage, index: number) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === congressImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? congressImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...congressImages[newIndex], index: newIndex });
  };

  return (
    <>
      <section id="congress" className="py-20 px-4 bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 section-fade">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
              Participações em Congressos e Atividades Científicas
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A Dra. Ana Carolina mantém-se sempre atualizada através da participação ativa em eventos científicos e congressos internacionais de oncologia.
            </p>
          </div>
          
          {/* Grid principal 2x2 para os 4 congressos mais importantes */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12">
            {congressImages.slice(0, 4).map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover-lift section-fade cursor-pointer overflow-hidden group"
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-square md:aspect-video overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="font-montserrat font-semibold text-primary-green mb-2 text-sm md:text-lg line-clamp-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-medium text-xs md:text-sm line-clamp-2 md:line-clamp-3">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid secundário para as demais imagens (se houver) */}
          {congressImages.length > 4 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {congressImages.slice(4).map((image, index) => (
                <div 
                  key={index + 4} 
                  className="bg-white rounded-xl shadow-md hover-lift section-fade cursor-pointer overflow-hidden group"
                  onClick={() => openModal(image, index + 4)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-montserrat font-semibold text-primary-green mb-1 text-xs line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-medium text-xs line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Seção da Equipe */}
          <div className="mt-20 text-center section-fade">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary-green mb-6">
              Nossa Equipe Especial
            </h3>
            <div className="w-16 h-1 bg-gold-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Uma parte especial da equipe querida de trabalho no dia a dia: Felissa e Marcos
            </p>
            
            <div className="flex justify-center">
              <div 
                className="bg-white rounded-2xl shadow-lg hover-lift cursor-pointer overflow-hidden group max-w-md"
                onClick={() => openModal({
                  url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.02.00.webp",
                  title: "Equipe da Dra. Ana - Felissa e Marcos",
                  description: "Nossa equipe querida de trabalho no dia a dia"
                }, congressImages.length)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.02.00.webp" 
                    alt="Equipe da Dra. Ana - Felissa e Marcos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-montserrat font-semibold text-primary-green mb-2">
                    Felissa e Marcos
                  </h4>
                  <p className="text-gray-medium text-sm">
                    Nossa equipe querida de trabalho no dia a dia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para visualização das imagens */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gold-primary transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-primary transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-primary transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden flex flex-col max-h-full">
              <div className="relative flex items-center justify-center bg-gray-50 min-h-[60vh] max-h-[70vh]">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain cursor-pointer"
                  onClick={closeModal}
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  Clique para fechar
                </div>
              </div>
              <div className="p-4 flex-shrink-0 max-h-[20vh] overflow-y-auto">
                <h3 className="font-montserrat font-semibold text-primary-green mb-2 text-base">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
