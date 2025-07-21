import { Calendar, UserCheck } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green mb-6 leading-tight">
              Dra. Ana Carolina Salles
            </h1>
            <h2 className="font-montserrat text-xl md:text-2xl text-gold-primary font-semibold mb-8">
              Oncologista Clínica | Cuidado Incansável, Respeito e Paixão pela Vida
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Bem-vindo(a) ao espaço digital da Dra. Ana Carolina Salles, uma oncologista clínica dedicada e apaixonada por sua missão. Com uma trajetória sólida e um compromisso inabalável com a ciência e o cuidado humanizado, oferece um atendimento personalizado, pautado nas mais recentes evidências científicas e no profundo respeito por cada paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Agende sua Consulta
              </button>
              <button 
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-primary text-gold-primary font-montserrat font-semibold rounded-xl hover:bg-gold-primary hover:text-white transition-all duration-300"
              >
                <UserCheck className="w-5 h-5 mr-3" />
                Conheça a Doutora
              </button>
            </div>
          </div>
          <div className="section-fade lg:text-right">
          </div>
        </div>
      </div>
    </section>
  );
}
