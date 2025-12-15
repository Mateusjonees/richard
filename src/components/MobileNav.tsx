import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  logoContent: React.ReactNode;
}

const MobileNav = ({ logoContent }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Áreas de Atuação" },
    { href: "#contato", label: "Contato" },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between w-full">
        {logoContent}
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
                {menuItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-lg hover:bg-primary/10 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
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

export default MobileNav;
