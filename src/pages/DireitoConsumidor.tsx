import { ArrowLeft, Users, Shield, FileText, AlertTriangle, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import consumerRights from "@/assets/consumer-rights.jpg";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InternalMobileNav from "@/components/InternalMobileNav";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Footer from "@/components/Footer";

const DireitoConsumidor = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-primary/10 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <nav>
            <InternalMobileNav 
              title="Direito do Consumidor"
              icon={<Users className="h-6 w-6 text-primary-foreground" />}
            />
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <PageBreadcrumb 
        items={[
          { label: "Direito do Consumidor" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${consumerRights})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Direito do Consumidor
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Proteção completa dos seus direitos como consumidor. Defendemos seus interesses 
              contra práticas abusivas e garantimos que seus direitos sejam respeitados.
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
                    <AlertTriangle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Produtos Defeituosos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ações contra produtos com defeitos de fabricação, design ou informação inadequada.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Vícios de qualidade
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Produtos impróprios
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Falta de informações
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Serviços Inadequados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Defesa contra prestação de serviços defeituosos ou não realizados conforme contratado.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Serviços mal executados
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Descumprimento de prazo
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Problemas técnicos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 hover:scale-105">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">Cobranças Indevidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Contestação de cobranças abusivas, taxas indevidas e práticas comerciais irregulares.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Taxas abusivas
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Juros excessivos
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Negativação indevida
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
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Consulta Inicial</h3>
                <p className="text-muted-foreground">
                  Análise gratuita do seu caso e orientação sobre seus direitos como consumidor.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Estratégia Jurídica</h3>
                <p className="text-muted-foreground">
                  Desenvolvimento de estratégia personalizada para resolução do seu problema.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-blue flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Resolução</h3>
                <p className="text-muted-foreground">
                  Busca por acordo extrajudicial ou representação judicial especializada.
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
              Entre em contato conosco e tenha seus direitos como consumidor devidamente protegidos.
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
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DireitoConsumidor;
