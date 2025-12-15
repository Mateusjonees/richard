import { ArrowLeft, FileText, Handshake, Shield, CheckCircle, MessageCircle, Users } from "lucide-react";
import logoImage from "@/assets/logo-dr-richard.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import contractLaw from "@/assets/contract-law.jpg";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InternalMobileNav from "@/components/InternalMobileNav";

const ContratosNegociacoes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-primary/10 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <nav>
            <InternalMobileNav 
              title="Contratos & Negociações"
              icon={<FileText className="h-6 w-6 text-primary-foreground" />}
            />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${contractLaw})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Contratos & Negociações
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Análise e elaboração de contratos empresariais com segurança jurídica. 
              Negociação de dívidas e acordo extrajudicial para proteger seus interesses.
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
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Revisão de Contratos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Análise detalhada de contratos para identificar cláusulas abusivas e riscos jurídicos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contratos comerciais
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contratos de prestação
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Termos e condições
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Handshake className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Negociação de Dívidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Representação em negociações para quitação de débitos com condições favoráveis.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Renegociação de valores
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Parcelamento
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Desconto para quitação
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <img src={logoImage} alt="Dr. Richard Rodrigues Logo" className="h-10 w-10" />
                  <CardTitle className="text-foreground">Acordo Extrajudicial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Resolução de conflitos fora do âmbito judicial com economia de tempo e recursos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Mediação de conflitos
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Termos de acordo
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Formalização jurídica
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Assessoria Preventiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Consultoria jurídica para prevenir problemas e reduzir riscos contratuais.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Análise de riscos
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Orientação jurídica
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Compliance contratual
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Contratos Empresariais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Elaboração e revisão de contratos para proteção dos interesses empresariais.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contratos de fornecimento
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Parcerias comerciais
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contratos de trabalho
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Distrato e Rescisão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Assessoria para rescisão contratual com minimização de perdas e prejuízos.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Análise de multas
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Negociação de saída
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Formalização legal
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
                <h3 className="text-lg font-bold text-primary mb-4">Análise</h3>
                <p className="text-muted-foreground text-sm">
                  Avaliação detalhada do contrato ou situação jurídica.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Estratégia</h3>
                <p className="text-muted-foreground text-sm">
                  Desenvolvimento de estratégia personalizada para o caso.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Negociação</h3>
                <p className="text-muted-foreground text-sm">
                  Representação nas negociações para melhores resultados.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">Formalização</h3>
                <p className="text-muted-foreground text-sm">
                  Documentação e formalização jurídica do acordo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Precisa de <span className="text-primary">Ajuda</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco para análise do seu contrato ou negociação.
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

export default ContratosNegociacoes;
