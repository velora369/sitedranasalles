import { Microscope, Heart, User, Hand, UserCheck, Search, HeartPulse } from "lucide-react";

export default function SpecialtiesSection() {
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
              <div key={index} className="text-center section-fade hover-lift">
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
              <div key={index} className="bg-gray-light p-8 rounded-2xl hover-lift section-fade">
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
      </div>
    </section>
  );
}
