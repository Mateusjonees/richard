import { ArrowLeft, Gavel, FileText, CheckCircle, MessageCircle, Shield, AlertTriangle } from "lucide-react";
import logoImage from "@/assets/logo-dr-richard.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import officeJustice from "@/assets/office-justice.jpg";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InternalMobileNav from "@/components/InternalMobileNav";

const AcoesJudiciais = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-primary/10 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <nav>
            <InternalMobileNav 
              title="Ações Judiciais"
              icon={<img src={logoImage} alt="Dr. Richard Rodrigues Logo" className="h-6 w-6" />}
            />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${officeJustice})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Ações Judiciais
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Representação judicial especializada em ações indenizatórias, danos morais e materiais. 
              Defendemos seus direitos com competência e dedicação.
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                CONSULTA GRATUITA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <img src={logoImage} alt="Dr. Richard Rodrigues Logo" className="h-10 w-10" />
                  <CardTitle className="text-foreground">Ações Indenizatórias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Busca por reparação de danos através de ações judiciais especializadas.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Danos por acidentes
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Responsabilidade civil
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Indenizações trabalhistas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <AlertTriangle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Danos Morais e Materiais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Reparação por danos morais e materiais decorrentes de atos ilícitos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Danos à honra
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Prejuízos financeiros
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Sofrimento psíquico
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Execução de Títulos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cobrança judicial de dívidas através de títulos executivos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Títulos extrajudiciais
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contratos inadimplidos
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Penhora de bens
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Gavel className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Recursos e Apelações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interposição de recursos para reverter decisões desfavoráveis.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Apelação cível
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Recursos especiais
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Embargos de declaração
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Defesa em Ações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Representação na defesa de ações judiciais movidas contra você.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contestação
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Exceções processuais
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Impugnação ao valor
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Ações de Cobrança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cobrança judicial de valores devidos através de procedimento monitório.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Ação monitória
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Cobrança de honorários
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Dívidas em geral
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Como <span className="text-primary">Funciona</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Avaliação</h3>
                <p className="text-muted-foreground text-sm">
                  Análise do caso e viabilidade da ação judicial.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Preparação</h3>
                <p className="text-muted-foreground text-sm">
                  Coleta de documentos e preparação da petição inicial.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Ajuizamento</h3>
                <p className="text-muted-foreground text-sm">
                  Protocolo da ação e acompanhamento processual.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Resultado</h3>
                <p className="text-muted-foreground text-sm">
                  Obtenção de sentença favorável e execução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Por que Escolher <span className="text-primary">Nossos Serviços</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-blue p-3 rounded-lg shadow-blue">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Experiência Comprovada</h3>
                  <p className="text-muted-foreground">
                    Mais de 3 anos de atuação com resultados positivos em ações judiciais.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-blue p-3 rounded-lg shadow-blue">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Acompanhamento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Atendimento dedicado com informações claras sobre cada etapa do processo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-blue p-3 rounded-lg shadow-blue">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Estratégia Eficiente</h3>
                  <p className="text-muted-foreground">
                    Desenvolvemos as melhores estratégias para maximizar suas chances de sucesso.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-blue p-3 rounded-lg shadow-blue">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Transparência Total</h3>
                  <p className="text-muted-foreground">
                    Honorários claros e informações transparentes sobre custos e prazos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Precisa de <span className="text-primary">Representação Judicial</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco para avaliação do seu caso e orientação jurídica especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6">
                <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WHATSAPP
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  VOLTAR AO INÍCIO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FloatingWhatsApp />
    </div>
  );
};

export default AcoesJudiciais;
