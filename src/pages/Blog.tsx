import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: "direitos-consumidor",
    title: "10 Direitos do Consumidor que Você Não Conhece",
    excerpt: "Conheça os principais direitos que a legislação garante a você como consumidor e como defendê-los adequadamente.",
    date: "15 de dezembro de 2025",
    author: "Dr. Richard Rodrigues",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    slug: "direitos-consumidor",
  },
  {
    id: "cobranca-indevida",
    title: "Como Identificar e Contestar uma Cobrança Indevida",
    excerpt: "Guia completo sobre como reconhecer cobranças abusivas e quais são seus direitos para contestá-las.",
    date: "14 de dezembro de 2025",
    author: "Dr. Richard Rodrigues",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1554224311-beee415c201?w=500&h=300&fit=crop",
    slug: "cobranca-indevida",
  },
  {
    id: "danos-morais",
    title: "Danos Morais: Como Calcular e Cobrar Indenização",
    excerpt: "Tudo que você precisa saber sobre danos morais, como quantificá-los e recuperar o valor devido.",
    date: "13 de dezembro de 2025",
    author: "Dr. Richard Rodrigues",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1589829085787-f7ae81b78db7?w=500&h=300&fit=crop",
    slug: "danos-morais",
  },
  {
    id: "passo-acao-judicial",
    title: "Passo a Passo: Como Funciona uma Ação Judicial",
    excerpt: "Entenda todos os estágios de uma ação judicial, desde o protocolo até a sentença final.",
    date: "12 de dezembro de 2025",
    author: "Dr. Richard Rodrigues",
    category: "Ações Judiciais",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    slug: "passo-acao-judicial",
  },
];

export function BlogPage() {
  // Update meta tags using document API
  React.useEffect(() => {
    document.title = "Blog - Direito do Consumidor e Ações Judiciais | Dr. Richard Rodrigues";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Artigos educativos sobre direito do consumidor, contratos, ações judiciais e seus direitos legais."
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Blog de Direito
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Artigos educativos e guias práticos sobre direito do consumidor, contratos e ações judiciais
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Categorias
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="space-y-3 mb-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                    >
                      Ler Artigo
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More / Pagination */}
            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Carregar Mais Artigos
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-gray-200">
          <div className="container px-4 md:px-6 max-w-2xl">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Receba Dicas Jurídicas Semanais
              </h2>
              <p className="text-gray-600">
                Inscreva-se na nossa newsletter e fique atualizado com as melhores dicas e novidades do direito
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Inscrever
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
