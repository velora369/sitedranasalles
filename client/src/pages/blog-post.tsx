import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getPostBySlug } from "@/data/blog-posts";

export default function BlogPost() {
  const { slug } = useParams();
  
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
          <Link href="/blog" className="text-primary-green hover:text-secondary-green font-semibold">
            ← Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  // Function to render markdown-style content as HTML
  const renderMarkdownContent = (content: string) => {
    // Helper function to parse bold text within a line
    const parseBoldText = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-playfair font-bold text-primary-green mb-6 mt-8">{parseBoldText(line.substring(2))}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-playfair font-bold text-primary-green mb-4 mt-6">{parseBoldText(line.substring(3))}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-montserrat font-semibold text-primary-green mb-3 mt-5">{parseBoldText(line.substring(4))}</h3>;
        }
        if (line.startsWith('• ')) {
          return <p key={index} className="text-gray-700 mb-2 ml-4">{parseBoldText(line)}</p>;
        }
        if (line.startsWith('* ')) {
          return <p key={index} className="text-gray-700 mb-2 ml-4">{parseBoldText(line)}</p>;
        }
        if (line.trim() === '') {
          return <div key={index} className="mb-4"></div>;
        }
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{parseBoldText(line)}</p>;
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-green text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-gold-primary hover:text-gold-light mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao blog
          </Link>
          
          <div className="flex items-center text-sm mb-4 opacity-90">
            <User className="w-4 h-4 mr-2" />
            <span className="mr-6">{post.author}</span>
            <Calendar className="w-4 h-4 mr-2" />
            <span className="mr-6">{format(new Date(post.publishedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readingTime} min de leitura</span>
          </div>
          
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl opacity-90 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Image placeholder */}
      {post.imageUrl && (
        <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {!post.imageUrl && (
        <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-lg">Imagem do artigo será adicionada em breve</p>
          </div>
        </div>
      )}

      {/* Article Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="blog-content">
              {renderMarkdownContent(post.content)}
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">Dra. Ana Carolina Salles</h3>
          <p className="text-gray-300 mb-6">Oncologista Clínica - Cuidado Humanizado e Evidência Científica</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center bg-gold-primary text-primary-green px-6 py-3 rounded-xl font-montserrat font-semibold hover:bg-gold-light transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao blog
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center bg-transparent border border-gold-primary text-gold-primary px-6 py-3 rounded-xl font-montserrat font-semibold hover:bg-gold-primary hover:text-primary-green transition-colors"
            >
              Voltar ao site principal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}