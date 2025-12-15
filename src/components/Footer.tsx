import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                alt="Dr. Richard Rodrigues Logo" 
                src="/lovable-uploads/be6657bf-e827-40f6-8ced-631094759584.png" 
                className="h-12 w-12" 
              />
              <div>
                <span className="text-lg font-bold text-primary-foreground">Dr. Richard</span>
                <p className="text-xs text-primary-foreground/70">Advocacia Especializada</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Especialista em Direito do Consumidor, Contratos e Ações Judiciais em Pernambuco.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/direito-consumidor" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Direito do Consumidor
                </a>
              </li>
              <li>
                <a 
                  href="/contratos-negociacoes" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Contratos & Negociações
                </a>
              </li>
              <li>
                <a 
                  href="/acoes-judiciais" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  Ações Judiciais
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/70 mt-1 flex-shrink-0" />
                <a 
                  href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  (81) 99977-7157
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/70 mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  R. do Imperador Pedro II, 346<br />
                  Santo Antônio, Recife - PE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://www.instagram.com/richardrodrigues.adv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/richard-rodrigues-6022a0269" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2024 Dr. Richard Rodrigues. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-2">
            OAB/PE • Advocacia Especializada em Direito do Consumidor
          </p>
          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <a 
              href="/sitemap.xml" 
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-smooth"
            >
              Sitemap
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-smooth"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
