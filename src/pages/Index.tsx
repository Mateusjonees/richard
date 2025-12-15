import { Users, FileText, Phone, MapPin, GraduationCap, Calendar, Shield, Award, Star, Instagram, MessageCircle, ExternalLink, Linkedin, Mail, Facebook, Scale, Gavel } from "lucide-react";
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
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Advocacia Especializada em Recife
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary-foreground">Inteligência jurídica</span>{" "}
                <span className="text-primary-foreground/80">para proteger o que mais importa:</span>{" "}
                <span className="bg-gradient-to-r from-primary-foreground to-blue-200 bg-clip-text text-transparent">seus direitos</span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl leading-relaxed max-w-2xl text-primary-foreground/85">
              Advogado especialista em{" "}
              <strong className="text-primary-foreground">Direito do Consumidor, contratos e ações judiciais</strong>,
              oferecendo soluções jurídicas personalizadas com foco na{" "}
              <strong className="text-primary-foreground">proteção dos seus direitos</strong>, e na busca pelos melhores
              resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-7 bg-white text-primary hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg" 
                onClick={() => {
                  document.getElementById("servicos")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }}
              >
                CONHEÇA NOSSAS SOLUÇÕES
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-7 border-2 border-white text-white hover:bg-white/20 font-bold rounded-lg transition-all duration-300 backdrop-blur"
              >
                <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  CHAMAR WHATSAPP
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                <span className="text-sm text-primary-foreground/90">✓ OAB/PE Ativo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                <span className="text-sm text-primary-foreground/90">✓ +150 clientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                <span className="text-sm text-primary-foreground/90">✓ 90% de sucesso</span>
              </div>
            </div>
          </div>

          {/* Professional Consumer Law Layout */}
          <div className="hidden lg:block relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6 h-[500px]">
              {/* Left Column - Main Office */}
              <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative hover:shadow-blue transition-all duration-300 hover:scale-105 group">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{
                backgroundImage: `url(${consumerLawOffice})`
              }}>
                  <div className="absolute inset-0 bg-primary/75 group-hover:bg-primary/65 transition-colors duration-300 flex items-end p-6">
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white mb-2">Escritório Especializado</h3>
                      <p className="text-sm text-white/90 font-medium">Direito do Consumidor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Split into two */}
              <div className="space-y-6">
                {/* Consumer Rights */}
                <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative h-[235px] hover:shadow-blue transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{
                  backgroundImage: `url(${consumerRights})`
                }}>
                    <div className="absolute inset-0 bg-primary/75 group-hover:bg-primary/65 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-white mx-auto mb-2 group-hover:scale-125 transition-transform" />
                        <p className="text-sm font-bold text-white">Proteção ao Consumidor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contract Law */}
                <div className="bg-card/20 backdrop-blur rounded-xl shadow-luxury overflow-hidden relative h-[235px] hover:shadow-blue transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{
                  backgroundImage: `url(${contractLaw})`
                }}>
                    <div className="absolute inset-0 bg-primary/75 group-hover:bg-primary/65 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-white mx-auto mb-2 group-hover:scale-125 transition-transform" />
                        <p className="text-sm font-bold text-white">Contratos & Negociações</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Credentials Below */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 shadow-elegant border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">OAB/PE</p>
                    <p className="text-xs text-white/80">Registro Ativo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 shadow-elegant border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Especialista</p>
                    <p className="text-xs text-white/80">Direito Civil</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 shadow-elegant border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Consultoria</p>
                    <p className="text-xs text-white/80">Personalizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-background via-blue-50/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 border border-blue-100/50 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Users className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <p className="text-lg font-semibold text-foreground">Clientes Atendidos</p>
                <p className="text-sm text-muted-foreground mt-2">Pessoas que confiaram no nosso trabalho</p>
              </div>

              <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 border border-blue-100/50 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Calendar className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">3+</div>
                <p className="text-lg font-semibold text-foreground">Anos de Experiência</p>
                <p className="text-sm text-muted-foreground mt-2">Especialização em Direito do Consumidor</p>
              </div>

              <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 border border-blue-100/50 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Award className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">90%</div>
                <p className="text-lg font-semibold text-foreground">de Êxito</p>
                <p className="text-sm text-muted-foreground mt-2">Acordos ou decisões favoráveis</p>
              </div>

              <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 border border-blue-100/50 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Shield className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg font-semibold text-foreground">Transparência</p>
                <p className="text-sm text-muted-foreground mt-2">Cada etapa explicada com clareza</p>
              </div>
            </div>

            <div className="text-center mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                ADVOGADO ESPECIALISTA EM <span className="text-primary">PERNAMBUCO</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Com mais de 3 anos de experiência, o Dr. Richard Rodrigues é referência em{" "}
                <strong className="text-primary">Direito do Consumidor, Direito Civil e Contratos</strong>, além de
                forte atuação em <strong className="text-primary">Direito Administrativo</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa expertise é focada em{" "}
                <strong className="text-primary">
                  defesa do consumidor, contratos, indenizações, licitações públicas e questões administrativas
                </strong>
                , entregando segurança jurídica, proteção do patrimônio e soluções estratégicas para nossos clientes em
                Recife e em diversas cidades de Pernambuco.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl">
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
      <section id="sobre" className="py-20 bg-gradient-to-br from-accent via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre o Profissional</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Conheça o <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Dr. Richard Rodrigues</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Advogado especialista com 3+ anos de experiência dedicados à excelência jurídica, proteção de direitos e 
                conquista de resultados transformadores para seus clientes em Pernambuco.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Professional Photo */}
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary/10 to-blue-600/10 p-2 rounded-3xl border border-primary/20">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src={drRichardImage} alt="Dr. Richard Rodrigues - Advogado Especialista em Direito do Consumidor" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 shadow-2xl border border-white/20 animate-scale-in hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-md">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">OAB/PE</p>
                        <p className="text-white/80 text-sm">Ativo e Especializado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="order-1 lg:order-2 space-y-10 animate-slide-in-right">
                <div className="animate-fade-in-up">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    <span className="text-primary">Expertise</span> Jurídica Reconhecida
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Com mais de 3 anos de prática intensiva, o Dr. Richard Rodrigues consolidou-se como referência em 
                    Direito do Consumidor, Contratos e Ações Judiciais em Pernambuco.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sua abordagem estratégica, combinada com dedição aos clientes e profundo conhecimento jurídico, 
                    resultou em uma taxa de sucesso superior a 90%, transformando vidas e protegendo patrimônios.
                  </p>
                </div>

                {/* Timeline/Expertise Cards */}
                <div className="space-y-4 animate-scale-in">
                  {/* Card 1 */}
                  <div className="group bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1 text-lg">Formação Sólida</h4>
                        <p className="text-muted-foreground text-sm">Curso de Direito com especialização em Direito Civil e Consumidor. Formação contínua em tendências jurídicas.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1 text-lg">Defesa do Consumidor</h4>
                        <p className="text-muted-foreground text-sm">Especialista em proteger direitos de consumidores contra práticas abusivas e cobranças indevidas.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1 text-lg">Consultoria Contratual</h4>
                        <p className="text-muted-foreground text-sm">Revisão, elaboração e negociação de contratos com segurança jurídica e proteção de interesses.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="group bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Gavel className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1 text-lg">Representação Judicial</h4>
                        <p className="text-muted-foreground text-sm">Ações indenizatórias, danos morais e defesa em processos com estratégia vencedora.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto group hover:gap-3">
                    <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Consulte o Especialista
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Nossas Especialidades</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Soluções Jurídicas</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Para Seus Problemas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Com expertise em múltiplas áreas do direito, oferecemos soluções estratégicas para resolver seus conflitos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Link to="/direito-consumidor">
                <div className="group relative h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl w-16 h-16 mb-6 shadow-lg shadow-primary/30">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Direito do Consumidor</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Produtos e serviços defeituosos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Cobranças indevidas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Indenizações por danos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Direitos do consumidor</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg group-hover:translate-x-1 transition-transform duration-300">
                        Saiba Mais →
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/contratos-negociacoes">
                <div className="group relative h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl w-16 h-16 mb-6 shadow-lg shadow-primary/30">
                        <Scale className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Contratos & Negociações</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Revisão de contratos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Negociação de débitos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Elaboração de acordos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Proteção de direitos</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg group-hover:translate-x-1 transition-transform duration-300">
                        Saiba Mais →
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/acoes-judiciais">
                <div className="group relative h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl w-16 h-16 mb-6 shadow-lg shadow-primary/30">
                        <Gavel className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Ações Judiciais</h3>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Ações indenizatórias</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Danos morais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Execução de títulos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3 font-bold">✓</span>
                          <span className="text-muted-foreground">Defesa em ações</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg group-hover:translate-x-1 transition-transform duration-300">
                        Saiba Mais →
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20 text-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Não encontrou sua necessidade?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Além das áreas principais, também atuamos em Direito Administrativo, Licitações Públicas e outras questões jurídicas específicas
              </p>
              <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6">
                <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  CONSULTE AGORA
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Fale Conosco</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Entre em <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Contato</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Agende sua consulta e tire todas as suas dúvidas. Estamos aqui para defender seus direitos com excelência
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Methods */}
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground mb-2">WhatsApp</h3>
                      <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors block mb-2">
                        (81) 99977-7157
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Segunda a sexta, 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground mb-2">Email</h3>
                      <a href="mailto:contato@drrichardrodrigues.com.br" className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors block mb-2">
                        contato@drrichardrodrigues.com.br
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Responderemos em até 2h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-105 border border-blue-100/50 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground mb-2">Localização</h3>
                      <a href="https://www.google.com/maps/search/?api=1&query=R.+do+Imperador+Pedro+II,+346+-+Santo+Antônio,+Recife+-+PE,+50010-240" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary/80 transition-colors block mb-2">
                        R. do Imperador Pedro II, 346<br />
                        Santo Antônio, Recife - PE
                      </a>
                      <p className="text-sm text-muted-foreground">
                        CEP: 50010-240 | Atendimento online e presencial
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/richardrodrigues.adv" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 group">
                      <Instagram className="h-6 w-6 text-primary group-hover:text-primary/80" />
                    </a>
                    <a href="https://www.linkedin.com/in/richard-rodrigues-6022a0269" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 group">
                      <Linkedin className="h-6 w-6 text-primary group-hover:text-primary/80" />
                    </a>
                    <a href="https://www.facebook.com/richardrodriguesadv" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-elegant hover:shadow-blue transition-all duration-300 hover:scale-110 group">
                      <Facebook className="h-6 w-6 text-primary group-hover:text-primary/80" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-in-right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Nossa <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Localização</span>
              </h2>
              <p className="text-lg text-muted-foreground">Encontre nosso escritório no coração de Recife</p>
            </div>

            <div className="bg-card rounded-2xl shadow-elegant border border-primary/10 overflow-hidden hover:shadow-blue transition-all duration-300">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2588419999147!2d-34.87694892404031!3d-8.063439391949359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a1c6b3b3d7%3A0x1e0b0a0a0a0a0a0a!2sR.%20do%20Imperador%20Pedro%20II%2C%20346%20-%20Santo%20Ant%C3%B4nio%2C%20Recife%20-%20PE%2C%2050010-240!5e0!3m2!1spt-BR!2sbr!4v1703875200000!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Escritório Dr. Richard Rodrigues" className="w-full" />
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="blue" size="lg" className="text-lg px-8 py-6">
                <a href="https://www.google.com/maps/search/?api=1&query=R.+do+Imperador+Pedro+II,+346+-+Santo+Antônio,+Recife+-+PE,+50010-240" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Abrir no Google Maps
                </a>
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