import { Images, GraduationCap, Globe } from "lucide-react";

export default function CongressSection() {
  const congressCards = [
    {
      icon: Images,
      title: "Congressos Internacionais",
      description: "Participação em eventos científicos de oncologia",
      subtitle: "Fotos dos congressos serão adicionadas em breve"
    },
    {
      icon: GraduationCap,
      title: "Atividades Acadêmicas",
      description: "Coordenação e participação em eventos científicos",
      subtitle: "Atividades acadêmicas"
    },
    {
      icon: Globe,
      title: "Centros Internacionais",
      description: "Gustave Roussy, Dana Farber, Oklahoma Cancer Center",
      subtitle: "Experiência internacional"
    }
  ];

  return (
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {congressCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover-lift section-fade">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-montserrat text-sm px-4">{card.subtitle}</p>
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-primary-green mb-2">{card.title}</h3>
                <p className="text-gray-medium text-sm">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
