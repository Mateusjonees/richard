import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <img 
                alt="Dr. Richard Rodrigues Logo" 
                src="/lovable-uploads/e9345ea2-93f4-4b6c-9039-8136ffb8861b.png" 
                className="h-10 w-10" 
              />
              <div>
                <span className="text-xl font-bold text-primary">Dr. Richard Rodrigues</span>
                <p className="text-xs text-muted-foreground">Advocacia Especializada</p>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center container mx-auto px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center h-24 w-24 bg-gradient-blue rounded-full mx-auto shadow-blue">
              <AlertTriangle className="h-12 w-12 text-primary-foreground" />
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl font-bold text-primary">404</h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Página não encontrada
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desculpe! Parece que a página que você está procurando não existe mais ou foi movida. 
                Isso pode ter acontecido porque você clicou em um link antigo.
              </p>
            </div>

            {/* Suggestions */}
            <Card className="bg-card/50 border border-primary/20 backdrop-blur">
              <CardContent className="pt-6">
                <p className="text-foreground font-semibold mb-4">O que você pode fazer:</p>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Voltar para a página inicial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Verificar se digitou a URL corretamente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Entrar em contato conosco para ajuda</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="blue" 
                size="lg" 
                className="hover:animate-bounce-subtle"
              >
                <a href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Voltar para Início
                </a>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="hover:animate-bounce-subtle"
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Entre em Contato
                </a>
              </Button>
            </div>

            {/* Quick Navigation */}
            <div className="pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground mb-6">Navegação rápida:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a 
                  href="/" 
                  className="p-3 bg-card rounded-lg border border-primary/20 hover:border-primary hover:shadow-blue transition-smooth text-sm font-medium text-foreground hover:text-primary"
                >
                  Home
                </a>
                <a 
                  href="/#sobre" 
                  className="p-3 bg-card rounded-lg border border-primary/20 hover:border-primary hover:shadow-blue transition-smooth text-sm font-medium text-foreground hover:text-primary"
                >
                  Sobre
                </a>
                <a 
                  href="/#servicos" 
                  className="p-3 bg-card rounded-lg border border-primary/20 hover:border-primary hover:shadow-blue transition-smooth text-sm font-medium text-foreground hover:text-primary"
                >
                  Serviços
                </a>
                <a 
                  href="/#contato" 
                  className="p-3 bg-card rounded-lg border border-primary/20 hover:border-primary hover:shadow-blue transition-smooth text-sm font-medium text-foreground hover:text-primary"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
