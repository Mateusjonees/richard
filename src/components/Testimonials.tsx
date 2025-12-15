import { Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Consumidor",
      testimonial: "O Dr. Richard me ajudou a recuperar o valor de um produto defeituoso. Profissional, atencioso e muito competente!",
      rating: 5,
      initials: "JS"
    },
    {
      name: "Maria Santos",
      role: "Pequena Empresária",
      testimonial: "Confiaram em um contrato mal elaborado até encontrar o Dr. Richard. Agora todos os meus contratos são feitos com segurança jurídica.",
      rating: 5,
      initials: "MS"
    },
    {
      name: "Carlos Oliveira",
      role: "Empresário",
      testimonial: "Excelente estratégia jurídica na minha ação judicial. O Dr. Richard entende profundamente das questões comerciais e legais.",
      rating: 5,
      initials: "CO"
    },
    {
      name: "Ana Costa",
      role: "Profissional Liberal",
      testimonial: "Consultoria precisa e objetiva. Dr. Richard explicou todos os detalhes do meu caso de forma clara e acessível.",
      rating: 5,
      initials: "AC"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            O que nossos <span className="text-primary">Clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Satisfação e resultados são nossa prioridade. Conheça os depoimentos de clientes que confiaram em nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105 animate-fade-in-up group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="bg-gradient-blue p-3 rounded-lg w-fit text-primary-foreground font-semibold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
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
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-card rounded-xl p-8 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">+150</div>
            <p className="text-foreground font-medium">Clientes Satisfeitos</p>
            <p className="text-sm text-muted-foreground mt-2">Confiança construída ao longo dos anos</p>
          </div>

          <div className="text-center bg-card rounded-xl p-8 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth">
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-foreground font-medium">Avaliação Média</p>
            <p className="text-sm text-muted-foreground mt-2">Baseada em feedback de clientes</p>
          </div>

          <div className="text-center bg-card rounded-xl p-8 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth">
            <div className="text-3xl font-bold text-primary mx-auto mb-4">+90%</div>
            <p className="text-foreground font-medium">Taxa de Sucesso</p>
            <p className="text-sm text-muted-foreground mt-2">Casos com resultados favoráveis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
