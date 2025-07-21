import { Quote, Heart } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Este espaço será dedicado a compartilhar as experiências e o feedback de pacientes que foram cuidados pela Dra. Ana Carolina Salles, reforçando a confiança e a qualidade do atendimento.
          </p>
        </div>
        
        <div className="bg-gray-light p-12 rounded-2xl text-center section-fade">
          <div className="max-w-2xl mx-auto">
            <Quote className="w-12 h-12 text-gold-primary mx-auto mb-6" />
            <p className="text-lg text-gray-700 italic mb-6">
              "Em breve, este espaço será preenchido com depoimentos reais de pacientes que vivenciaram o cuidado humanizado e a excelência profissional da Dra. Ana Carolina Salles."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-primary-green">Depoimentos em Breve</p>
                <p className="text-gray-medium text-sm">Experiências reais de cuidado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
