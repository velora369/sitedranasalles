import { Star, User } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      age: 58,
      rating: 5,
      monthsAgo: 2,
      text: "Profissional extremamente competente e atenciosa. Me senti segura durante todo o procedimento. A Dra. Ana Carolina tem um olhar técnico único e conseguiu entender exatamente o que eu precisava. O resultado ficou natural e harmonioso. Super recomendo!"
    },
    {
      name: "José Roberto Silva",
      age: 67,
      rating: 5,
      monthsAgo: 4,
      text: "Excelente médica! Muito profissional e cuidadosa. Explicou todo o tratamento com detalhes e me deixou muito tranquilo. O acompanhamento foi impecável e os resultados superaram minhas expectativas. Recomendo de olhos fechados."
    },
    {
      name: "Ana Paula Rodrigues",
      age: 43,
      rating: 5,
      monthsAgo: 1,
      text: "Dra. Ana Carolina é uma profissional excepcional. Muito técnica, cuidadosa e humana. Me senti acolhida desde a primeira consulta. O tratamento foi um sucesso e ela acompanhou cada etapa com muito carinho. Gratidão eterna!"
    },
    {
      name: "Carlos Eduardo Lima",
      age: 52,
      rating: 5,
      monthsAgo: 6,
      text: "Médica de excelência! Atendimento humanizado e muito profissional. Tirou todas as minhas dúvidas e me tranquilizou durante todo o processo. O resultado foi incrível e exatamente o que esperava. Recomendo sem hesitação."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
        </div>

        {/* Google Reviews Style Container */}
        <div className="section-fade">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            
            {/* Header with Google branding */}
            <div className="mb-8">
              <h3 className="text-2xl font-montserrat font-semibold text-gray-700 mb-4">
                Avaliação no Google
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-700">Avaliação Google</p>
                    <div className="flex items-center gap-1 flex-wrap">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      ))}
                      <span className="ml-2 text-gray-600 text-sm md:text-base">5.0 (127 avaliações)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500 text-center md:text-right md:ml-auto">
                  Baseado nas experiências de pacientes reais
                </p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-semibold text-primary-green">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">
                          {testimonial.monthsAgo} {testimonial.monthsAgo === 1 ? 'mês atrás' : 'meses atrás'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Footer verification */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">127 avaliações verificadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
