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
      description: "Participação no maior evento científico de mastologia do Brasil, reunindo os principais especialistas do país para discutir as mais recentes inovações em diagnóstico e tratamento do câncer de mama. A Dra. Ana Carolina acompanha as últimas tendências em terapias personalizadas e cirurgias reconstrutivas."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.49.39.webp",
      title: "ASCO 2025 - Congresso Americano de Oncologia",
      description: "Presença no mais prestigioso congresso mundial de oncologia, realizado anualmente nos Estados Unidos. O ASCO reúne mais de 40.000 especialistas globalmente e apresenta os avanços mais revolucionários em tratamentos oncológicos. A participação da Dra. Ana Carolina garante acesso às terapias mais inovadoras para seus pacientes."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.50.38.webp",
      title: "Palestra Educativa para Pacientes - Mastologia",
      description: "Atividade de educação médica voltada para pacientes e familiares durante o Congresso Brasileiro de Mastologia. A Dra. Ana Carolina participou ativamente na conscientização sobre prevenção, diagnóstico precoce e opções de tratamento, demonstrando seu compromisso com o cuidado humanizado e educativo."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.51.46.webp",
      title: "Equipe Rede D'Or no ASCO 2025",
      description: "Representação da excelência médica brasileira no maior congresso mundial de oncologia. A participação em grupo da equipe Rede D'Or demonstra o compromisso institucional com a atualização científica contínua e o intercâmbio de conhecimentos com especialistas internacionais de renome."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.53.45.webp",
      title: "SABCS 2024 - San Antonio, EUA",
      description: "Participação no San Antonio Breast Cancer Symposium, considerado o congresso mais importante do mundo exclusivamente dedicado ao câncer de mama. Realizado no Texas, o SABCS apresenta anualmente os estudos mais revolucionários que definem os protocolos globais de tratamento. A presença da Dra. Ana Carolina assegura tratamentos de padrão internacional."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.55.40.webp",
      title: "Corrida Outubro Rosa Rede D'Or 2024",
      description: "Participação ativa na campanha de conscientização sobre o câncer de mama promovida pela Rede D'Or. Este evento esportivo e educativo mobilizou centenas de pessoas em prol da prevenção e diagnóstico precoce, demonstrando o engajamento da Dra. Ana Carolina com ações comunitárias de saúde pública."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.56.33.webp",
      title: "Palestra Outubro Rosa para Pacientes",
      description: "Atividade educativa especializada durante a campanha Outubro Rosa, focada em esclarecer dúvidas sobre prevenção, autoexame e tratamentos disponíveis. A Dra. Ana Carolina conduziu sessões informativas que beneficiaram dezenas de mulheres, reforçando a importância da medicina preventiva e do acompanhamento médico regular."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.57.38.webp",
      title: "Reunião Científica de Tumores Ginecológicos",
      description: "Participação em encontro científico multidisciplinar focado em cânceres ginecológicos. Estas reuniões especializadas reúnem oncologistas, ginecologistas e cirurgiões para discussão de casos complexos e protocolos de tratamento. A presença da Dra. Ana Carolina reflete sua expertise em tumores femininos e abordagem multidisciplinar."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-18.58.48.webp",
      title: "Mama Star - Evento Científico DF Star",
      description: "Participação no simpósio científico sobre câncer de mama realizado no Hospital DF Star, reunindo especialistas regionais e nacionais. Este evento de alto nível técnico promove a troca de experiências entre profissionais e a discussão de casos clínicos complexos, fortalecendo a rede de cuidados oncológicos em Brasília."
    },
    {
      url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.09.05.webp",
      title: "Equipe Rede D'Or no ASCO 2024",
      description: "Representação da medicina brasileira no ASCO 2024, demonstrando o compromisso contínuo com a excelência científica. A participação anual no maior congresso mundial de oncologia garante que os pacientes da Dra. Ana Carolina tenham acesso aos protocolos mais atualizados e às terapias mais promissoras disponíveis globalmente."
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
          
          {/* Grid principal responsivo e moderno */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {congressImages.slice(0, 6).map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold-primary/20 section-fade cursor-pointer overflow-hidden group transition-all duration-500"
                onClick={() => openModal(image, index)}
              >
                {/* Imagem com overlay gradiente para melhor legibilidade */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-contain bg-gray-50 group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Título sobreposto na imagem ao hover */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-montserrat font-bold text-white text-sm md:text-base line-clamp-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
                
                {/* Conteúdo com melhor espaçamento */}
                <div className="p-5 md:p-6">
                  <h3 className="font-montserrat font-semibold text-primary-green mb-3 text-sm md:text-base line-clamp-2 group-hover:text-gold-primary transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-5">
                    {image.description}
                  </p>
                  
                  {/* Indicador de mais informações */}
                  <div className="mt-4 flex items-center text-gold-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Clique para ver mais</span>
                    <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid secundário moderno para as demais imagens */}
          {congressImages.length > 6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              {congressImages.slice(6).map((image, index) => (
                <div 
                  key={index + 6} 
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold-primary/20 section-fade cursor-pointer overflow-hidden group transition-all duration-400"
                  onClick={() => openModal(image, index + 6)}
                >
                  {/* Imagem com melhor proporção */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-contain bg-gray-50 group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Conteúdo compacto mas legível */}
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-primary-green mb-2 text-xs md:text-sm line-clamp-2 group-hover:text-gold-primary transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
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
            
            <div className="flex justify-center px-4">
              <div 
                className="bg-white rounded-2xl shadow-lg hover-lift cursor-pointer overflow-hidden group w-full max-w-sm sm:max-w-md lg:max-w-lg"
                onClick={() => openModal({
                  url: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.02.00.webp",
                  title: "Equipe da Dra. Ana - Felissa e Marcos",
                  description: "Nossa equipe querida de trabalho no dia a dia"
                }, congressImages.length)}
              >
                <div className="relative">
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-20-at-19.02.00.webp" 
                    alt="Equipe da Dra. Ana - Felissa e Marcos"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-montserrat font-semibold text-primary-green mb-2 text-center">
                    Felissa e Marcos
                  </h4>
                  <p className="text-gray-medium text-sm text-center">
                    Nossa equipe querida de trabalho no dia a dia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Moderno para visualização das imagens com descrição */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl h-[95vh] sm:max-h-[95vh] bg-white rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com controles */}
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/20 to-transparent">
              <div className="text-white text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                {selectedImage.index + 1} de {congressImages.length + 1}
              </div>
              <button 
                onClick={closeModal}
                className="text-white hover:text-gold-primary transition-colors bg-black/40 rounded-full p-2 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Layout responsivo para desktop e mobile */}
            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
              {/* Container da imagem - otimizado para mobile */}
              <div className="relative flex-shrink-0 lg:flex-1 lg:w-3/5 bg-gray-50 flex items-center justify-center h-[35vh] sm:h-[40vh] lg:h-full">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navegação da imagem */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-primary transition-all duration-300 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-primary transition-all duration-300 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 backdrop-blur-sm"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Painel de informações - garantindo espaço adequado no mobile */}
              <div className="flex-1 lg:w-2/5 bg-white flex flex-col min-h-0 overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">
                  {/* Título */}
                  <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-primary-green mb-3 sm:mb-4 leading-tight">
                    {selectedImage.title}
                  </h3>
                  
                  {/* Divisor decorativo */}
                  <div className="w-8 sm:w-12 h-1 bg-gold-primary rounded-full mb-4 sm:mb-6"></div>
                  
                  {/* Descrição com scroll suave */}
                  <div className="prose prose-sm lg:prose-base max-w-none">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
