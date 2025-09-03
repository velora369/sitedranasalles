import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  // URLs dos depoimentos reais fornecidos
  const testimonialImages = [
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/whatsapp-image-2025-09-02-at-15.50.15.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/whatsapp-image-2025-09-02-at-15.50.14-_2_.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/whatsapp-image-2025-09-02-at-15.50.14.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/whatsapp-image-2025-09-02-at-15.50.14-3.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/whatsapp-image-2025-09-02-at-15.50.14-2.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/4.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/3.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/2.webp",
    "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/1.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  // Rolagem automática de 3 em 3 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Reativa o autoplay após 5 segundos de inatividade
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonialImages.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonialImages.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const openPopup = (imageUrl: string) => {
    setPopupImage(imageUrl);
    setShowPopup(true);
    setIsAutoPlaying(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupImage("");
    setIsAutoPlaying(true);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          
          {/* Navigation arrows below the golden line */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={goToPrevious}
                className="group bg-white hover:bg-primary-green border-2 border-primary-green text-primary-green hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                data-testid="button-prev-top"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              
              <div className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  {currentIndex + 1} de {testimonialImages.length}
                </span>
              </div>
              
              <button
                onClick={goToNext}
                className="group bg-white hover:bg-primary-green border-2 border-primary-green text-primary-green hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                data-testid="button-next-top"
              >
                <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
            
            {/* Progress Indicators - modernized */}
            <div className="flex gap-3">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-primary-green' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="section-fade">
          <div className="relative max-w-2xl mx-auto">
            
            

            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-50">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialImages.map((imageUrl, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/2] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden cursor-pointer group">
                      <img
                        src={imageUrl}
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-full object-contain hover:scale-105 transition-all duration-300 group-hover:opacity-95"
                        loading="lazy"
                        onClick={() => openPopup(imageUrl)}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Overlay sutil para melhor interação */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              {/* Auto-play Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`} />
              </div>
            </div>

            {/* Carousel Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Depoimento {currentIndex + 1} de {testimonialImages.length}
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-flex">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Depoimentos reais verificados</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                {isAutoPlaying ? 'Troca automática a cada 3 segundos' : 'Navegação manual ativa'} • 
                Use as setas ou clique nos pontos para navegar
              </p>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200"
                data-testid="button-close-popup"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="p-4">
                <img
                  src={popupImage}
                  alt="Depoimento expandido"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ maxHeight: '80vh' }}
                />
              </div>
              
              <div className="p-4 bg-gray-50 text-center">
                <p className="text-sm text-gray-600 mb-2">Clique fora da imagem ou no X para fechar</p>
                <div className="flex items-center justify-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-flex">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Depoimento real verificado</span>
                </div>
              </div>
            </div>
            
            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={closePopup}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}
