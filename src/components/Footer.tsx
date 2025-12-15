import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 border-t-4 border-primary-foreground/20 py-16">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">
                <img 
                  alt="Dr. Richard Rodrigues Logo" 
                  src="/lovable-uploads/be6657bf-e827-40f6-8ced-631094759584.png" 
                  className="h-8 w-8" 
                />
              </div>
              <div>
                <span className="text-lg font-bold text-primary-foreground">Dr. Richard</span>
                <p className="text-xs text-primary-foreground/70">Advocacia Especializada</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Especialista em Direito do Consumidor, Contratos e Ações Judiciais. Protegendo seus direitos há mais de 3 anos em Pernambuco.
            </p>
            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.instagram.com/richardrodrigues.adv" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/richard-rodrigues-6022a0269" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="font-bold text-primary-foreground mb-6 text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#inicio" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-bold text-primary-foreground mb-6 text-sm uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/direito-consumidor" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Direito Consumidor
                </a>
              </li>
              <li>
                <a 
                  href="/contratos-negociacoes" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Contratos
                </a>
              </li>
              <li>
                <a 
                  href="/acoes-judiciais" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Ações Judiciais
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  → Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="font-bold text-primary-foreground mb-6 text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MessageCircle className="h-5 w-5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                <a 
                  href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-all duration-300"
                >
                  (81) 99977-7157
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:contato@drrichardrodrigues.com.br"
                  className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-all duration-300 break-all"
                >
                  contato@drrichardrodrigues.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.+do+Imperador+Pedro+II,+346+-+Santo+Antônio,+Recife+-+PE,+50010-240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-all duration-300"
                >
                  Recife - PE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-12"></div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p className="text-sm text-primary-foreground/80">
            © 2024-2025 Dr. Richard Rodrigues Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60">
            OAB/PE • Advocacia Especializada em Direito do Consumidor, Contratos e Ações Judiciais
          </p>
          <div className="mt-4 flex justify-center gap-6 flex-wrap">
            <a 
              href="/sitemap.xml" 
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-all duration-300"
            >
              Sitemap
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-all duration-300"
            >
              Política de Privacidade
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-all duration-300"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
