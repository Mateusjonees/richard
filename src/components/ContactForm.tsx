import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Format message for WhatsApp
      const whatsappMessage = `*Nova solicitação de contato*%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AAssunto: ${formData.subject}%0A%0AMensagem:%0A${formData.message}`;
      
      // Open WhatsApp with pre-filled message
      window.open(`https://api.whatsapp.com/send/?phone=5581999777157&text=${whatsappMessage}&type=phone_number&app_absent=0`, "_blank");
      
      toast.success("Mensagem enviada! Você será redirecionado para o WhatsApp");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card shadow-elegant border-primary/10 hover:shadow-blue transition-smooth animate-slide-in-right">
      <CardHeader>
        <CardTitle className="text-foreground">Formulário de Contato</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Envie suas dúvidas e em breve entraremos em contato
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Nome *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className="bg-background border-primary/20"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="bg-background border-primary/20"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Telefone *</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(81) 99999-9999"
                className="bg-background border-primary/20"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Assunto *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-background border border-primary/20 rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Selecione um assunto</option>
              <option value="Direito do Consumidor">Direito do Consumidor</option>
              <option value="Contratos e Negociações">Contratos e Negociações</option>
              <option value="Ações Judiciais">Ações Judiciais</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Mensagem *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva seu caso ou dúvida"
              className="bg-background border-primary/20 resize-none"
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="blue" 
            className="w-full hover:animate-bounce-subtle"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>Enviando...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar via WhatsApp
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            Seus dados serão utilizados apenas para contato sobre sua solicitação
          </div>
        </form>

        {/* Quick Contact Options */}
        <div className="mt-8 pt-8 border-t border-primary/10 space-y-3">
          <p className="text-sm font-medium text-foreground">Ou entre em contato direto:</p>
          <Button 
            asChild
            variant="outline" 
            className="w-full justify-start hover:bg-primary/5"
          >
            <a href="https://api.whatsapp.com/send/?phone=5581999777157&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
              (81) 99977-7157 - WhatsApp
            </a>
          </Button>

          <Button 
            asChild
            variant="outline" 
            className="w-full justify-start hover:bg-primary/5"
          >
            <a href="mailto:contato@drrichardrodrigues.com">
              <Mail className="mr-2 h-4 w-4 text-blue-600" />
              Email de Contato
            </a>
          </Button>

          <Button 
            asChild
            variant="outline" 
            className="w-full justify-start hover:bg-primary/5"
          >
            <a href="tel:+5581999777157">
              <Phone className="mr-2 h-4 w-4 text-primary" />
              Chamar agora
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
