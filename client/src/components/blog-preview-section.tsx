import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function BlogPreviewSection() {
  // Posts estáticos para simulação do blog
  const posts = [
    {
      id: 1,
      title: "Informações Importantes para Todo Paciente Oncológico",
      slug: "informacoes-importantes-paciente-oncologico",
      excerpt: "O diagnóstico de câncer gera muitas dúvidas e incertezas. Conhecer a doença, suas implicações e opções de tratamento oferece as ferramentas necessárias para que o paciente assuma um papel ativo em sua jornada.",
      author: "Dra. Ana Carolina Salles",
      readingTime: 8,
      publishedAt: new Date("2025-07-22T10:00:00Z"),
      imageUrl: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/medica-centro-de-recuperacao-covid-segurando-as-maos-de-um-paciente-idoso.webp",
      isPublished: true,
    },
    {
      id: 2,
      title: "Direitos dos Pacientes Oncológicos: Conheça e Exija!",
      slug: "direitos-pacientes-oncologicos",
      excerpt: "Para pacientes oncológicos, conhecer seus direitos é tão fundamental quanto o tratamento médico. A informação confiável é uma ferramenta poderosa para garantir acesso a todos os benefícios que a lei oferece.",
      author: "Dra. Ana Carolina Salles",
      readingTime: 6,
      publishedAt: new Date("2025-07-20T14:30:00Z"),
      imageUrl: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/mao-com-pena-preencher-um-documento.webp",
      isPublished: true,
    },
    {
      id: 3,
      title: "Nutrição Durante o Tratamento Oncológico",
      slug: "nutricao-tratamento-oncologico",
      excerpt: "A alimentação adequada durante o tratamento oncológico é fundamental para manter a força, reduzir efeitos colaterais e acelerar a recuperação.",
      author: "Dra. Ana Carolina Salles",
      readingTime: 5,
      publishedAt: new Date("2025-07-18T09:15:00Z"),
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center",
      isPublished: true,
    }
  ];

  // Mostra os primeiros 3 posts
  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-green mb-6">
            Blog da Dra. Ana Carolina Salles
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um portal dedicado a artigos, notícias e informações relevantes sobre oncologia, tratamento, prevenção e bem-estar para pacientes e seus familiares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Posts do blog */}
          {displayPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift section-fade transition-all duration-300 h-full">
                  {/* Post Cover Image */}
                  {post.imageUrl ? (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-3xl mb-2">📄</div>
                        <p className="text-sm">Imagem em breve</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{format(new Date(post.publishedAt), "dd 'de' MMM", { locale: ptBR })}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readingTime} min</span>
                    </div>
                    
                    <h3 className="font-montserrat font-bold text-xl text-primary-green mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="text-primary-green font-montserrat font-semibold text-sm hover:text-secondary-green transition-colors">
                        Ler artigo completo →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
        
        <div className="text-center section-fade">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowRight className="w-5 h-5 mr-3" />
            {posts.length > 3 ? 'Ver Todos os Artigos' : 'Visitar o Blog'}
          </Link>
        </div>
      </div>
    </section>
  );
}
