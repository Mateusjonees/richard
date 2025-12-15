import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <Button
        asChild
        variant="blue"
        size="lg"
        className="rounded-full h-16 w-16 shadow-blue hover:shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <a
          href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar em contato via WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
