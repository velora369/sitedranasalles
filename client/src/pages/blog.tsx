import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-green text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-gold-primary hover:text-gold-light mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para o site
          </Link>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Blog da Dra. Ana Carolina Salles
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Informações importantes, direitos dos pacientes e orientações especializadas em oncologia
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Article */}
          <article className="bg-gray-light rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center text-gray-medium text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Em breve</span>
              <User className="w-4 h-4 ml-6 mr-2" />
              <span>Dra. Ana Carolina Salles</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>Leitura de 5 min</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
              Informações Importantes a Todo Paciente Oncológico
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Este espaço será dedicado a fornecer informações essenciais que todo paciente oncológico deve conhecer sobre seus direitos, opções de tratamento, cuidados durante a terapia e recursos disponíveis. O conteúdo será desenvolvido com base na experiência clínica da Dra. Ana Carolina Salles e nas mais recentes evidências científicas.
            </p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-gold-primary">
              <p className="text-gray-600 italic">
                "Nosso objetivo é empoderar cada paciente com conhecimento, garantindo que eles se sintam seguros e informados em cada etapa de sua jornada oncológica."
              </p>
              <p className="text-primary-green font-semibold mt-2">- Dra. Ana Carolina Salles</p>
            </div>
          </article>

          {/* Secondary Article */}
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 hover-lift">
            <div className="flex items-center text-gray-medium text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Em breve</span>
              <User className="w-4 h-4 ml-6 mr-2" />
              <span>Dra. Ana Carolina Salles</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>Leitura de 8 min</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
              Direitos dos Pacientes Oncológicos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Um guia completo sobre os direitos legais e sociais dos pacientes oncológicos no Brasil. Este artigo abordará desde os direitos básicos de atendimento até benefícios especiais, auxílios governamentais, direitos trabalhistas e como acessar tratamentos no SUS e na rede privada.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-light p-6 rounded-xl">
                <h3 className="font-montserrat font-semibold text-primary-green mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  Direitos no SUS
                </h3>
                <p className="text-gray-600">Acesso garantido a tratamentos, exames e cirurgias oncológicas</p>
              </div>
              <div className="bg-gray-light p-6 rounded-xl">
                <h3 className="font-montserrat font-semibold text-primary-green mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  Direitos Trabalhistas
                </h3>
                <p className="text-gray-600">Licenças, auxílios e estabilidade no emprego</p>
              </div>
              <div className="bg-gray-light p-6 rounded-xl">
                <h3 className="font-montserrat font-semibold text-primary-green mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  Benefícios Sociais
                </h3>
                <p className="text-gray-600">INSS, BPC e outros auxílios disponíveis</p>
              </div>
              <div className="bg-gray-light p-6 rounded-xl">
                <h3 className="font-montserrat font-semibold text-primary-green mb-3 flex items-center">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  Segunda Opinião
                </h3>
                <p className="text-gray-600">Como e quando buscar uma segunda opinião médica</p>
              </div>
            </div>
          </article>

          {/* Coming Soon Section */}
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-primary-green mb-6">
                Mais Conteúdo em Breve
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                A Dra. Ana Carolina Salles está preparando mais artigos valiosos sobre prevenção, tratamentos inovadores, cuidados paliativos e muito mais.
              </p>
              <div className="bg-gold-light p-8 rounded-2xl">
                <h3 className="font-montserrat font-semibold text-primary-green mb-4">Próximos Tópicos:</h3>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
                  <li>• Imunoterapia: O futuro do tratamento oncológico</li>
                  <li>• Cuidados nutricionais durante a quimioterapia</li>
                  <li>• Importância do suporte psicológico</li>
                  <li>• Tratamentos personalizados e medicina de precisão</li>
                  <li>• Prevenção e detecção precoce do câncer</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">Dra. Ana Carolina Salles</h3>
          <p className="text-gray-300 mb-6">Oncologista Clínica - Cuidado Humanizado e Evidência Científica</p>
          <Link 
            href="/" 
            className="inline-flex items-center bg-gold-primary text-primary-green px-6 py-3 rounded-xl font-montserrat font-semibold hover:bg-gold-light transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para o site principal
          </Link>
        </div>
      </footer>
    </div>
  );
}
