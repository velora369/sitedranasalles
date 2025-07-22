import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { BlogPost } from "@shared/schema";

export default function BlogPreviewSection() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  // Show first 3 posts or fallback to placeholders if no posts
  const displayPosts = posts?.slice(0, 3) || [];
  
  console.log('Blog Preview Debug:', {
    posts,
    isLoading,
    error,
    displayPosts,
    displayPostsLength: displayPosts.length
  });
  
  const placeholderArticles = [
    {
      title: "Prevenção e Detecção Precoce",
      description: "Dicas importantes sobre prevenção, detecção precoce e cuidados durante o tratamento.",
      isPlaceholder: true
    }
  ];

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
        
        {isLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-green mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando artigos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Debug info */}
            <div className="col-span-full text-center p-4 bg-yellow-100 border border-yellow-300 rounded">
              <p>Debug: Posts count: {displayPosts.length}</p>
              <p>Posts: {displayPosts.map(p => p.title).join(', ')}</p>
            </div>
            
            {/* Real blog posts */}
            {displayPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift section-fade transition-all duration-300 h-full">
                  {/* Image */}
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
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
                      <span>
                        {(() => {
                          try {
                            return format(new Date(post.publishedAt), "dd 'de' MMM", { locale: ptBR });
                          } catch (error) {
                            console.error('Date formatting error:', error, 'for date:', post.publishedAt);
                            return new Date(post.publishedAt).toLocaleDateString('pt-BR');
                          }
                        })()}
                      </span>
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
            
            {/* Placeholder articles if we have less than 3 posts */}
            {displayPosts.length < 3 && placeholderArticles.slice(0, 3 - displayPosts.length).map((article, index) => (
              <article key={`placeholder-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden section-fade opacity-75">
                <div className="w-full h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-3xl mb-2">📝</div>
                    <p className="text-sm">Em breve</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary-green mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.description}
                  </p>
                  <span className="text-gold-primary font-montserrat font-semibold text-sm">Em desenvolvimento</span>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="text-center section-fade">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-montserrat font-semibold rounded-xl hover:bg-secondary-green transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowRight className="w-5 h-5 mr-3" />
            {posts && posts.length > 3 ? 'Ver Todos os Artigos' : 'Visitar o Blog'}
          </Link>
        </div>
      </div>
    </section>
  );
}
