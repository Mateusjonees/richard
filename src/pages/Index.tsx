import { Users, FileText, Phone, MapPin, GraduationCap, Calendar, Shield, Award, Star, Instagram, MessageCircle, ExternalLink, Linkedin } from "lucide-react";
import logoImage from "@/assets/logo-dr-richard.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import luxuryHeroImage from "@/assets/luxury-law-hero.jpg";
import consumerLawOffice from "@/assets/consumer-law-office.jpg";
import consumerRights from "@/assets/consumer-rights.jpg";
import contractLaw from "@/assets/contract-law.jpg";
import drRichardImage from "@/assets/dr-richard-rodrigues.jpg";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileNav from "@/components/MobileNav";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 animate-fade-in shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center space-x-3 animate-slide-in-left">
                <img alt="Dr. Richard Rodrigues Logo" className="h-12 w-12" src="/lovable-uploads/e9345ea2-93f4-4b6c-9039-8136ffb8861b.png" />
                <div>
                  <span className="text-2xl font-bold text-primary">Dr. Richard Rodrigues</span>
                  <p className="text-xs text-muted-foreground">Advocacia Especializada</p>
                </div>
              </div>
              <div className="flex items-center space-x-8 animate-fade-in">
                <a href="#inicio" className="text-foreground hover:text-primary transition-smooth hover:scale-105">
                  Início
                </a>
                <a href="#sobre" className="text-foreground hover:text-primary transition-smooth hover:scale-105">
                  Sobre
                </a>
                <a href="#servicos" className="text-foreground hover:text-primary transition-smooth hover:scale-105">
                  Áreas de Atuação
                </a>
                <a href="#contato" className="text-foreground hover:text-primary transition-smooth hover:scale-105">
                  Contato
                </a>
              </div>
              <Button asChild variant="blue" size="sm" className="animate-slide-in-right hover:animate-bounce-subtle">
                <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav logoContent={<div className="flex items-center space-x-3 animate-slide-in-left">
                  <img src={logoImage} alt="Dr. Richard Rodrigues Logo" className="h-8 w-8" />
                  <div>
                    <span className="text-xl font-bold text-primary">Dr. Richard Rodrigues</span>
                    <p className="text-xs text-muted-foreground">Advocacia Especializada</p>
                  </div>
                </div>} />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{
        backgroundImage: `url(${luxuryHeroImage})`
      }}></div>
        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary-foreground">Inteligência jurídica</span>{" "}
              <span className="text-primary-foreground/80">para proteger o que mais importa:</span>{" "}
              <span className="text-primary-foreground">seus direitos</span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-2xl text-primary-foreground/80">
              Advogado especialista em{" "}
              <strong className="text-primary-foreground">Direito do Consumidor, contratos e ações judiciais</strong>,
              oferecendo soluções jurídicas personalizadas com foco na{" "}
              <strong className="text-primary-foreground">proteção dos seus direitos</strong>, e na busca pelos melhores
              resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => {
              document.getElementById("servicos")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}>
                CONHEÇA NOSSAS SOLUÇÕES
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WHATSAPP
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Consumer Law Layout */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-6 h-[500px]">
              {/* Left Column - Main Office */}
              <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: `url(${consumerLawOffice})`
              }}>
                  <div className="absolute inset-0 bg-primary/80 flex items-end p-6">
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-primary-foreground mb-2">Escritório Especializado</h3>
                      <p className="text-sm text-primary-foreground/90 font-medium">Direito do Consumidor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Split into two */}
              <div className="space-y-6">
                {/* Consumer Rights */}
                <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative h-[235px]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: `url(${consumerRights})`
                }}>
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-10 w-10 text-primary-foreground mx-auto mb-2" />
                        <p className="text-sm font-bold text-primary-foreground">Proteção ao Consumidor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contract Law */}
                <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative h-[235px]">
                  <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: `url(${contractLaw})`
                }}>
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="h-10 w-10 text-primary-foreground mx-auto mb-2" />
                        <p className="text-sm font-bold text-primary-foreground">Contratos & Negociações</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credentials Below */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant border border-primary/20 hover:shadow-blue transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-blue p-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">OAB/PE</p>
                    <p className="text-xs text-muted-foreground">Registro Ativo</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant border border-primary/20 hover:shadow-blue transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-blue p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Especialista</p>
                    <p className="text-xs text-muted-foreground">Direito Civil</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant border border-primary/20 hover:shadow-blue transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-blue p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Consultoria</p>
                    <p className="text-xs text-muted-foreground">Personalizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-card rounded-xl p-8 shadow-elegant hover:shadow-blue transition-smooth hover:scale-105 border border-primary/10">
                <div className="bg-gradient-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-blue">
                  <Users className="h-8 w-8 text-primary-foreground mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+150</div>
                <p className="text-foreground font-medium">Clientes atendidos</p>
                <p className="text-xs text-muted-foreground mt-1">Pessoas que confiaram no nosso trabalho</p>
              </div>

              <div className="text-center bg-card rounded-xl p-8 shadow-elegant hover:shadow-blue transition-smooth hover:scale-105 border border-primary/10">
                <div className="bg-gradient-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-blue">
                  <GraduationCap className="h-8 w-8 text-primary-foreground mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+3 anos</div>
                <p className="text-foreground font-medium">De atuação jurídica</p>
                <p className="text-xs text-muted-foreground mt-1">Experiência em Direito do Consumidor</p>
              </div>

              <div className="text-center bg-card rounded-xl p-8 shadow-elegant hover:shadow-blue transition-smooth hover:scale-105 border border-primary/10">
                <div className="bg-gradient-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-blue">
                  <Award className="h-8 w-8 text-primary-foreground mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">+90%</div>
                <p className="text-foreground font-medium">De êxito</p>
                <p className="text-xs text-muted-foreground mt-1">Casos com acordos ou decisões favoráveis</p>
              </div>

              <div className="text-center bg-card rounded-xl p-8 shadow-elegant hover:shadow-blue transition-smooth hover:scale-105 border border-primary/10">
                <div className="bg-gradient-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-blue">
                  <Shield className="h-8 w-8 text-primary-foreground mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-medium">Transparência</p>
                <p className="text-xs text-muted-foreground mt-1">Cada etapa explicada de forma clara</p>
              </div>
            </div>

            <div className="text-center mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                ADVOGADO ESPECIALISTA EM <span className="text-primary">PERNAMBUCO</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Com mais de 3 anos de experiência, o Dr. Richard Rodrigues é referência em{" "}
                <strong className="text-primary">Direito do Consumidor, Direito Civil e Contratos</strong>, além de
                forte atuação em <strong className="text-primary">Direito Administrativo</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa expertise é focada em{" "}
                <strong className="text-primary">
                  defesa do consumidor, contratos, indenizações, licitações públicas e questões administrativas
                </strong>
                , entregando segurança jurídica, proteção do patrimônio e soluções estratégicas para nossos clientes em
                Recife e em diversas cidades de Pernambuco.
              </p>
              <div className="mt-8 text-center">
                <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6">
                  <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    FALE CONOSCO AGORA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Sobre o <span className="text-primary">Advogado</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Dr. Richard Rodrigues, com sólida experiência em Direito do Consumidor e formação especializada, oferece
                assessoria jurídica personalizada com dedicação exclusiva a cada cliente.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Professional Photo */}
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <div className="relative">
                  <div className="bg-gradient-blue p-1 rounded-2xl shadow-blue hover:animate-glow transition-smooth">
                    <img src={drRichardImage} alt="Dr. Richard Rodrigues - Advogado Especialista em Direito do Consumidor" className="w-full h-[500px] object-cover rounded-xl hover:scale-105 transition-smooth" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-elegant border border-primary/20 animate-scale-in hover:scale-110 transition-smooth">
                    <div className="flex items-center space-x-3">
                      <img alt="Dr. Richard Rodrigues Logo" src="/lovable-uploads/2077a1fe-0f0f-4fa2-aa85-56ae20fec203.png" className="h-10 w-10 animate-bounce-subtle" />
                      <div>
                        <p className="text-sm font-semibold text-primary">OAB/PE</p>
                        <p className="text-xs text-muted-foreground">Registro Ativo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold text-primary mb-4">Dr. Richard Rodrigues</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Advogado especialista com ampla experiência em Direito do Consumidor, Direito Contratual e Ações
                    Judiciais. Comprometido em oferecer soluções jurídicas eficazes e personalizadas para cada cliente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Com uma abordagem consultiva e estratégica, trabalha incansavelmente na proteção dos direitos dos
                    seus clientes, buscando sempre os melhores resultados através de negociações inteligentes e
                    representação judicial competente.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
                  <div className="bg-card rounded-lg p-4 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-blue p-2 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary-foreground animate-float" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Formação</p>
                        <p className="text-xs text-muted-foreground">Direito Civil</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-blue p-2 rounded-lg">
                        <Star className="h-5 w-5 text-primary-foreground animate-float" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Especialização</p>
                        <p className="text-xs text-muted-foreground">Direito Consumidor</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-blue p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary-foreground animate-float" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Experiência</p>
                        <p className="text-xs text-muted-foreground">Consultoria Jurídica</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 shadow-elegant border border-primary/10 hover:shadow-blue transition-smooth hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-blue p-2 rounded-lg">
                        <Award className="h-5 w-5 text-primary-foreground animate-float" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Reconhecimento</p>
                        <p className="text-xs text-muted-foreground">Resultados Eficazes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções jurídicas completas e especializadas, sempre priorizando seus direitos e interesses
              patrimoniais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/direito-consumidor" className="block">
              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 group animate-fade-in hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-smooth animate-float">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                    Direito do Consumidor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Proteção completa dos seus direitos como consumidor:</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Produtos defeituosos
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Serviços inadequados
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Cobranças indevidas
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Publicidade enganosa
                    </li>
                  </ul>
                  <div className="mt-4 text-primary text-sm font-medium group-hover:text-secondary transition-smooth">
                    Clique para saber mais →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contratos-negociacoes" className="block">
              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 group animate-fade-in-up hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="bg-gradient-blue p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-smooth animate-float">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                    Contratos & Negociações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Análise e elaboração de contratos empresariais:</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Revisão de contratos
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Negociação de dívidas
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Acordo extrajudicial
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Assessoria preventiva
                    </li>
                  </ul>
                  <div className="mt-4 text-primary text-sm font-medium group-hover:text-secondary transition-smooth">
                    Clique para saber mais →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/acoes-judiciais" className="block">
              <Card className="bg-card shadow-elegant hover:shadow-blue transition-smooth border-primary/10 group animate-scale-in hover:scale-105 cursor-pointer">
                <CardHeader>
                  <img src={logoImage} alt="Dr. Richard Rodrigues Logo" className="h-10 w-10 group-hover:scale-110 transition-smooth animate-float" />
                  <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                    Ações Judiciais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Representação judicial especializada:</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Ações indenizatórias
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Danos morais e materiais
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Execução de títulos
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <span className="text-primary mr-2 font-bold">•</span>Recursos e apelações
                    </li>
                  </ul>
                  <div className="mt-4 text-primary text-sm font-medium group-hover:text-secondary transition-smooth">
                    Clique para saber mais →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agende sua consulta e tire todas as suas dúvidas. Estamos aqui para defender seus direitos com excelência.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slide-in-left">
                <div className="flex items-start space-x-4 hover:scale-105 transition-smooth">
                  <div className="bg-gradient-blue p-3 rounded-lg shadow-blue animate-float">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                    <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105 block">
                      (81) 99977-7157
                    </a>
                    <p className="text-sm text-muted-foreground opacity-75">
                      Atendimento de segunda a sexta, 9h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:scale-105 transition-smooth">
                  <div className="bg-gradient-blue p-3 rounded-lg shadow-blue animate-float">
                    <Instagram className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                    <a href="https://www.instagram.com/richardrodrigues.adv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105 block">
                      @richardrodrigues.adv
                    </a>
                    <p className="text-sm text-muted-foreground opacity-75">Siga para dicas jurídicas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:scale-105 transition-smooth">
                  <div className="bg-gradient-blue p-3 rounded-lg shadow-blue animate-float">
                    <Linkedin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/richard-rodrigues-6022a0269" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105 block">
                      Dr. Richard Rodrigues
                    </a>
                    <p className="text-sm text-muted-foreground opacity-75">Conecte-se profissionalmente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:scale-105 transition-smooth">
                  <div className="bg-gradient-blue p-3 rounded-lg shadow-blue animate-float">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Localização</h3>
                    <a href="https://www.google.com/maps/search/?api=1&query=R.+do+Imperador+Pedro+II,+346+-+Santo+Antônio,+Recife+-+PE,+50010-240" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth block hover:scale-105">
                      R. do Imperador Pedro II, 346
                      <br />
                      Santo Antônio, Recife - PE
                      <br />
                      CEP: 50010-240
                    </a>
                    <p className="text-sm text-muted-foreground opacity-75 mt-2">Atendimento presencial e online</p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa <span className="text-primary">Localização</span>
              </h3>
              <p className="text-muted-foreground">Encontre nosso escritório no coração do Recife</p>
            </div>

            <div className="bg-card rounded-xl shadow-elegant border border-primary/10 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2588419999147!2d-34.87694892404031!3d-8.063439391949359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a1c6b3b3d7%3A0x1e0b0a0a0a0a0a0a!2sR.%20do%20Imperador%20Pedro%20II%2C%20346%20-%20Santo%20Ant%C3%B4nio%2C%20Recife%20-%20PE%2C%2050010-240!5e0!3m2!1spt-BR!2sbr!4v1703875200000!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Escritório Dr. Richard Rodrigues" className="w-full" />
            </div>

            <div className="mt-6 text-center">
              <Button variant="blue" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=R.+do+Imperador+Pedro+II,+346+-+Santo+Antônio,+Recife+-+PE,+50010-240", "_blank")}>
                <MapPin className="mr-2 h-5 w-5" />
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />

      <FloatingWhatsApp />
    </div>;
};
export default Index;