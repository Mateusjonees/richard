import { Star, Users, Quote, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Consumidor",
      testimonial: "O Dr. Richard me ajudou a recuperar o valor de um produto defeituoso. Profissional, atencioso e muito competente!",
      rating: 5,
      initials: "JS",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Maria Santos",
      role: "Pequena Empresária",
      testimonial: "Confiavam em um contrato mal elaborado até encontrar o Dr. Richard. Agora todos os meus contratos são feitos com segurança jurídica.",
      rating: 5,
      initials: "MS",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Carlos Oliveira",
      role: "Empresário",
      testimonial: "Excelente estratégia jurídica na minha ação judicial. O Dr. Richard entende profundamente das questões comerciais e legais.",
      rating: 5,
      initials: "CO",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Ana Costa",
      role: "Profissional Liberal",
      testimonial: "Consultoria precisa e objetiva. Dr. Richard explicou todos os detalhes do meu caso de forma clara e acessível.",
      rating: 5,
      initials: "AC",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos de Clientes</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Veja o que <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">nossos clientes</span> falam
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de clientes que tiveram seus direitos protegidos e seus objetivos alcançados através de nossa assessoria jurídica especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
            >
              {/* Card com gradiente de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Card className="relative bg-white/80 backdrop-blur-md shadow-elegant hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30 group-hover:scale-105 overflow-hidden">
                {/* Top accent */}
                <div className={`h-1 bg-gradient-to-r ${testimonial.color}`}></div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-br ${testimonial.color} p-3 rounded-xl text-white font-bold text-sm shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                  
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed italic text-justify">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section - Premium */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="group relative bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-center">
              <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">+150</div>
              <p className="text-foreground font-semibold mb-1">Clientes Satisfeitos</p>
              <p className="text-sm text-muted-foreground">Confiança e resultados comprovados</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">4.9/5</div>
              <p className="text-foreground font-semibold mb-1">Avaliação Média</p>
              <p className="text-sm text-muted-foreground">Baseada em feedback de clientes reais</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-primary/10 to-green-600/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/50 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative text-center">
              <div className="bg-gradient-to-br from-primary to-green-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg shadow-green-600/30 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">+90%</div>
              <p className="text-foreground font-semibold mb-1">Taxa de Sucesso</p>
              <p className="text-sm text-muted-foreground">Resultados favoráveis comprovados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
