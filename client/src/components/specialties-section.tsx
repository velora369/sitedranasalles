import { useState } from "react";
import { Microscope, Heart, User, Hand, UserCheck, Search, HeartPulse, X, ChevronRight } from "lucide-react";

export default function SpecialtiesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const expertise = [
    {
      icon: Microscope,
      title: "Oncologia Clínica Geral",
      description: "Tratamento abrangente de diversos tipos de câncer"
    },
    {
      icon: Heart,
      title: "Tumores Femininos",
      description: "Câncer de mama e cânceres ginecológicos"
    },
    {
      icon: User,
      title: "Cabeça e Pescoço",
      description: "Especialização em cânceres de cabeça e pescoço"
    },
    {
      icon: Hand,
      title: "Tumores de Pele",
      description: "Tratamento especializado de tumores malignos de pele"
    }
  ];

  const services = [
    {
      icon: UserCheck,
      title: "Consulta Clínica Personalizada",
      description: "Atendimento individualizado onde cada caso é analisado com profundidade. As decisões de tratamento são pautadas nas mais recentes evidências científicas, com acesso a uma rede de apoio de profissionais especializados.",
      detailedInfo: {
        title: "Consulta Clínica Personalizada e Baseada em Evidências",
        content: "A Dra. Ana Carolina oferece um atendimento verdadeiramente individualizado, onde cada paciente é único e merece cuidado personalizado. Durante a consulta, ela dedica tempo necessário para entender não apenas os sintomas físicos, mas também as preocupações emocionais e familiares do paciente.\n\nO diferencial está na abordagem multidisciplinar: a Dra. Ana Carolina trabalha com uma rede sólida de profissionais especializados, incluindo cirurgiões oncológicos, radioterapeuas, psico-oncologistas e nutricionistas, garantindo que o paciente tenha acesso ao melhor cuidado possível.\n\nTodas as decisões de tratamento são baseadas nas mais recentes evidências científicas internacionais, levando em conta as diretrizes da ASCO, ESMO e SBOC, sempre adaptadas às necessidades específicas de cada paciente."
      }
    },
    {
      icon: Search,
      title: "Orientação desde o Diagnóstico",
      description: "Diante de uma suspeita de tumor maligno, orientação completa sobre exames de imagem, biópsia, patologia e PET-CT. Se confirmado o diagnóstico, indicação do tratamento adequado baseado nas melhores práticas.",
      detailedInfo: {
        title: "Orientação Completa desde o Primeiro Momento",
        content: "Quando há suspeita de câncer, a Dra. Ana Carolina guia o paciente através de cada etapa do processo diagnóstico de forma clara e tranquilizadora.\n\n• **Exames de Imagem**: Orientação sobre tomografias, ressonâncias e outros exames necessários\n• **Biópsia**: Explicação detalhada do procedimento e acompanhamento dos resultados\n• **Análise Patológica**: Interpretação dos resultados de patologia de forma compreensível\n• **PET-CT**: Quando necessário, orientação sobre este exame mais específico\n• **Estadiamento**: Determinação precisa do estágio da doença\n\nApós a confirmação do diagnóstico, a doutora elabora um plano de tratamento personalizado, explicando todas as opções disponíveis e os prós e contras de cada abordagem, sempre respeitando as preferências e condições do paciente."
      }
    },
    {
      icon: HeartPulse,
      title: "Acompanhamento Contínuo",
      description: "Cuidado de todo o tratamento sistêmico (quimioterapia, imunoterapia, hormonioterapia) e acompanhamento pós-tratamento. Referenciamento para cirurgiões capacitados quando necessário, assegurando continuidade do cuidado.",
      detailedInfo: {
        title: "Cuidado Integral Durante Todo o Tratamento",
        content: "O acompanhamento não termina com o diagnóstico - é um processo contínuo que vai desde o início do tratamento até o seguimento a longo prazo.\n\n**Durante o Tratamento Ativo:**\n• Quimioterapia moderna com protocolos atualizados\n• Imunoterapia quando indicada\n• Hormonioterapia para tumores hormônio-dependentes\n• Gerenciamento de efeitos colaterais\n• Ajustes de medicação conforme necessário\n\n**Coordenação Multidisciplinar:**\nQuando necessário cirurgia ou radioterapia, a Dra. Ana Carolina referencia para profissionais altamente qualificados de sua confiança, mantendo sempre a coordenação do cuidado.\n\n**Seguimento Pós-Tratamento:**\nApós o término do tratamento ativo, o acompanhamento continua com consultas regulares para detectar precocemente qualquer recidiva e oferecer suporte contínuo ao paciente e família."
      }
    }
  ];

  return (
    <section id="specialties" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            Cuidado Especializado em Oncologia Clínica
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A Dra. Ana Carolina Salles é especializada no tratamento de diversos tipos de câncer, oferecendo um cuidado integrado e humanizado.
          </p>
        </div>
        
        {/* Areas of Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertise.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="text-center section-fade">
                <div className="gold-gradient p-6 rounded-2xl mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white icon-bounce" />
                </div>
                <h3 className="font-montserrat font-semibold text-primary-green mb-2">{area.title}</h3>
                <p className="text-gray-medium text-sm">{area.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-light p-8 rounded-2xl card-hover-rounded section-fade">
                <div className="bg-primary-green p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-primary-green mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(index)}
                  className="inline-flex items-center text-gold-primary hover:text-primary-green font-montserrat font-semibold transition-colors duration-300"
                >
                  Saiba Mais
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed information */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="bg-primary-green p-3 rounded-xl mr-4">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary-green">
                      {services[selectedService].detailedInfo.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="prose prose-gray max-w-none">
                  {services[selectedService].detailedInfo.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-3 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transition-colors duration-300"
                  >
                    Agendar Consulta
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-montserrat font-semibold rounded-xl hover:border-gold-primary hover:text-gold-primary transition-colors duration-300"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
