import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface InternalMobileNavProps {
  title: string;
  icon: React.ReactNode;
}

const InternalMobileNav = ({ title, icon }: InternalMobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { to: "/", label: "Página Inicial" },
    { to: "/direito-consumidor", label: "Direito do Consumidor" },
    { to: "/contratos-negociacoes", label: "Contratos & Negociações" },
    { to: "/acoes-judiciais", label: "Ações Judiciais" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-smooth">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="p-2"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </Button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-smooth">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-blue p-2 rounded-lg shadow-blue">
            {icon}
          </div>
          <div>
            <span className="text-xl font-bold text-primary">{title}</span>
            <p className="text-xs text-muted-foreground">Dr. Richard Rodrigues</p>
          </div>
        </div>
        <Button asChild variant="blue" size="sm">
          <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-background border-b border-primary/20 shadow-luxury">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-blue p-2 rounded-lg shadow-blue">
                      {icon}
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary">{title}</span>
                      <p className="text-xs text-muted-foreground">Dr. Richard Rodrigues</p>
                    </div>
                  </div>
                </div>
                {menuItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-lg hover:bg-primary/10 animate-slide-in-right block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-primary/20 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                  <Button asChild variant="blue" size="lg" className="w-full">
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default InternalMobileNav;
