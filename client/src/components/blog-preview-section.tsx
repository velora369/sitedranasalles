import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function BlogPreviewSection() {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Informações Importantes a Todo Paciente Oncológico",
      description: "Conteúdo essencial sobre cuidados, direitos e orientações fundamentais para pacientes em tratamento oncológico.",
      status: "Em breve"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Direitos dos Pacientes Oncológicos",
      description: "Guia completo sobre os direitos legais e sociais dos pacientes oncológicos no Brasil.",
      status: "Em breve"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Prevenção e Cuidados",
      description: "Dicas importantes sobre prevenção, detecção precoce e cuidados durante o tratamento.",
      status: "Em breve"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            Blog: Informações Importantes para Todo Paciente Oncológico
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um espaço dedicado a artigos, notícias e informações relevantes sobre oncologia, tratamento, prevenção e bem-estar para pacientes e seus familiares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift section-fade">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-primary-green mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {article.description}
                </p>
                <span className="text-gold-primary font-montserrat font-semibold text-sm">{article.status}</span>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center section-fade">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowRight className="w-5 h-5 mr-3" />
            Ver Mais Artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
