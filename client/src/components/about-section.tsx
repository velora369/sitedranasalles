import { GraduationCap, Stethoscope, Award, Dna, Building2 } from "lucide-react";

export default function AboutSection() {
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
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Dra. Ana Carolina Salles - Retrato profissional" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
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
