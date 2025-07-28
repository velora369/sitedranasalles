import { useState } from "react";
import { Microscope, Ribbon, User, Hand, UserCheck, Search, HeartPulse, X, ChevronRight } from "lucide-react";

export default function SpecialtiesSection() {
  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null);

  const expertise = [
    {
      icon: Microscope,
      title: "Oncologia Clínica Geral",
      description: "Tratamento abrangente de diversos tipos de câncer",
      detailedInfo: {
        title: "Oncologia Clínica Geral - Tratamento Integral do Câncer",
        content: "A Dra. Ana Carolina atua em todas as áreas da oncologia clínica, oferecendo tratamento sistêmico para diversos tipos de tumores malignos. Sua abordagem integra as mais modernas terapias disponíveis.\n\n**Tipos de Tratamento:**\n• Quimioterapia convencional e de última geração\n• Imunoterapia - aproveitando o sistema imunológico para combater o câncer\n• Terapia-alvo molecular - medicamentos específicos para cada tipo tumoral\n• Hormonioterapia para tumores hormônio-dependentes\n• Medicina de precisão baseada no perfil genético do tumor\n\n**Áreas de Atuação:**\n• Tumores sólidos em geral\n• Acompanhamento multidisciplinar\n• Cuidados paliativos quando necessário\n• Seguimento oncológico pós-tratamento\n\nCada tratamento é personalizado considerando o tipo de tumor, estadiamento, condições clínicas do paciente e suas preferências pessoais."
      }
    },
    {
      icon: Ribbon,
      title: "Tumores Femininos",
      description: "Câncer de mama e cânceres ginecológicos",
      detailedInfo: {
        title: "Tumores Femininos - Especialização em Câncer de Mama e Ginecológicos",
        content: "A Dra. Ana Carolina tem especialização específica no tratamento de tumores que afetam as mulheres, com foco principal em câncer de mama e tumores ginecológicos.\n\n**Câncer de Mama:**\n• Tratamento neoadjuvante (antes da cirurgia)\n• Quimioterapia adjuvante (após a cirurgia)\n• Hormonioterapia para tumores receptor-positivos\n• Terapias-alvo como Trastuzumab, Pertuzumab\n• Imunoterapia para tumores triplo-negativos\n• CDK 4/6 inibidores para casos metastáticos\n\n**Tumores Ginecológicos:**\n• Câncer de ovário\n• Câncer de endométrio (útero)\n• Câncer de colo do útero\n• Tumores de vulva e vagina\n• Sarcomas ginecológicos\n\nA doutora trabalha em estreita colaboração com mastologistas, ginecologistas oncológicos e cirurgiões especializados, garantindo um cuidado verdadeiramente multidisciplinar."
      }
    },
    {
      icon: User,
      title: "Cabeça e Pescoço",
      description: "Especialização em cânceres de cabeça e pescoço",
      detailedInfo: {
        title: "Tumores de Cabeça e Pescoço - Tratamento Especializado",
        content: "Os tumores de cabeça e pescoço apresentam desafios únicos que requerem experiência específica. A Dra. Ana Carolina oferece tratamento completo para estes tipos de câncer.\n\n**Localizações Tratadas:**\n• Cavidade oral (língua, gengiva, assoalho da boca)\n• Faringe (orofaringe, hipofaringe)\n• Laringe\n• Seios paranasais\n• Glândulas salivares\n• Tireoide\n• Tumores de origem desconhecida na região cervical\n\n**Abordagens Terapêuticas:**\n• Quimioterapia neoadjuvante\n• Quimiorradioterapia concomitante\n• Imunoterapia para tumores recidivados/metastáticos\n• Terapias-alvo (Cetuximab)\n• Cuidados de suporte especializados\n\n**Cuidado Multidisciplinar:**\nTrabalho conjunto com cirurgiões de cabeça e pescoço, radioterapeutos, fonoaudiólogos, nutricionistas e dentistas especializados em oncologia."
      }
    },
    {
      icon: Hand,
      title: "Tumores de Pele",
      description: "Tratamento especializado de tumores malignos de pele",
      detailedInfo: {
        title: "Tumores Malignos de Pele - Melanoma e Outros",
        content: "O tratamento dos tumores de pele, especialmente o melanoma, passou por uma revolução nas últimas décadas. A Dra. Ana Carolina oferece as mais modernas opções terapêuticas.\n\n**Tipos de Tumores Tratados:**\n• Melanoma (todos os estadios)\n• Carcinoma basocelular avançado\n• Carcinoma espinocelular metastático\n• Carcinoma de células de Merkel\n• Outros sarcomas de partes moles\n\n**Tratamentos Modernos:**\n• Imunoterapia - Anti-PD1, Anti-CTLA4\n• Terapias-alvo para melanoma (BRAF, MEK inibidores)\n• Quimioterapia quando indicada\n• Terapia adjuvante pós-cirúrgica\n• Tratamento de metástases cerebrais\n\n**Abordagem Personalizada:**\n• Análise molecular do tumor\n• Avaliação de mutações BRAF\n• Medicina de precisão\n• Acompanhamento dermatológico conjunto\n\nO melanoma tem excelentes taxas de resposta com os novos tratamentos, e mesmo casos avançados podem ter controle prolongado da doença."
      }
    }
  ];

  const services = [
    {
      icon: UserCheck,
      title: "Consulta Clínica Personalizada",
      description: "Atendimento individualizado onde cada caso é analisado com profundidade. As decisões de tratamento são pautadas nas mais recentes evidências científicas, com acesso a uma rede de apoio de profissionais especializados."
    },
    {
      icon: Search,
      title: "Orientação desde o Diagnóstico",
      description: "Diante de uma suspeita de tumor maligno, orientação completa sobre exames de imagem, biópsia, patologia e PET-CT. Se confirmado o diagnóstico, indicação do tratamento adequado baseado nas melhores práticas."
    },
    {
      icon: HeartPulse,
      title: "Acompanhamento Contínuo",
      description: "Cuidado de todo o tratamento sistêmico (quimioterapia, imunoterapia, hormonioterapia) e acompanhamento pós-tratamento. Referenciamento para cirurgiões capacitados quando necessário, assegurando continuidade do cuidado."
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
                <p className="text-gray-medium text-sm mb-4">{area.description}</p>
                <button
                  onClick={() => setSelectedExpertise(index)}
                  className="inline-flex items-center text-gold-primary hover:text-primary-green font-montserrat font-semibold transition-colors duration-300 text-sm"
                >
                  Saiba Mais
                  <ChevronRight className="w-3 h-3 ml-1" />
                </button>
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
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed information */}
        {selectedExpertise !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedExpertise(null)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="gold-gradient p-3 rounded-xl mr-4">
                      {(() => {
                        const Icon = expertise[selectedExpertise].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary-green">
                      {expertise[selectedExpertise].detailedInfo.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedExpertise(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="prose prose-gray max-w-none">
                  {expertise[selectedExpertise].detailedInfo.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={() => {
                      const specialtyTitle = expertise[selectedExpertise].title;
                      const message = `Olá! Gostaria de marcar uma consulta com a Dra. Ana Carolina Salles sobre ${specialtyTitle}.`;
                      const whatsappUrl = `https://wa.me/5561992947671?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                      setSelectedExpertise(null);
                    }}
                    className="px-6 py-3 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transition-colors duration-300"
                  >
                    Agendar Consulta
                  </button>
                  <button
                    onClick={() => setSelectedExpertise(null)}
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
