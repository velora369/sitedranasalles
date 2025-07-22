import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });
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
          
          {/* Welcome Quote */}
          <div className="bg-gold-light p-8 rounded-2xl mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 leading-relaxed italic mb-4">
                "Nosso objetivo é empoderar cada paciente com conhecimento, garantindo que eles se sintam seguros e informados em cada etapa de sua jornada oncológica."
              </p>
              <p className="text-primary-green font-playfair font-semibold text-lg">- Dra. Ana Carolina Salles</p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-green mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando artigos...</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {posts && posts.length > 0 && (
            <div className="grid gap-8 mb-12">
              {posts.map((post, index) => (
                <article 
                  key={post.id} 
                  className={`${index === 0 ? 'bg-gray-light' : 'bg-white shadow-lg'} rounded-2xl p-8 md:p-12 hover-lift transition-all duration-300`}
                >
                  <div className="flex items-center text-gray-medium text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{format(new Date(post.publishedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
                    <User className="w-4 h-4 ml-6 mr-2" />
                    <span>{post.author}</span>
                    <Clock className="w-4 h-4 ml-6 mr-2" />
                    <span>{post.readingTime} min de leitura</span>
                  </div>
                  
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary-green mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Image */}
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 md:h-64 object-cover rounded-xl mb-6"
                    />
                  ) : (
                    <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-sm">Imagem será adicionada em breve</p>
                      </div>
                    </div>
                  )}
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center bg-primary-green text-white px-6 py-3 rounded-xl font-montserrat font-semibold hover:bg-secondary-green transition-colors"
                  >
                    Ler artigo completo
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* No posts state */}
          {posts && posts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="font-playfair text-3xl font-bold text-primary-green mb-6">
                Em breve, novos artigos
              </h2>
              <p className="text-lg text-gray-700">
                A Dra. Ana Carolina Salles está preparando conteúdo valioso para você.
              </p>
            </div>
          )}



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
