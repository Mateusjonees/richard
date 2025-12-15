import React from "react";
import { Award, GraduationCap, Briefcase, Target, Scale, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import drRichardImage from "@/assets/dr-richard-rodrigues.jpg";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export function SobreRichardPage() {
  React.useEffect(() => {
    document.title = "Sobre Dr. Richard Rodrigues - Advogado Especialista";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Conheça Dr. Richard Rodrigues
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advogado especialista dedicado à excelência jurídica e proteção de direitos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Foto */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 p-2 rounded-3xl border border-blue-200">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={drRichardImage}
                      alt="Dr. Richard Rodrigues"
                      className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300">
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

            {/* Informações */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-600">Expertise</span> Jurídica Reconhecida
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Com mais de 3 anos de prática intensiva em Direito do Consumidor, Contratos e Ações Judiciais, o Dr. Richard Rodrigues consolidou-se como referência em Pernambuco.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sua abordagem estratégica, combinada com dedicação aos clientes e profundo conhecimento jurídico, resultou em uma taxa de sucesso superior a 90%, transformando vidas e protegendo patrimônios.
                </p>
              </div>

              {/* Diferenciais */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Formação Sólida</h4>
                    <p className="text-sm text-gray-600">Especialização em Direito Civil e Consumidor com formação contínua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experiência Prática</h4>
                    <p className="text-sm text-gray-600">3+ anos de atuação em casos complexos com resultados comprovados</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Foco no Cliente</h4>
                    <p className="text-sm text-gray-600">Estratégias personalizadas e atenção dedicada a cada caso</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Taxa de Sucesso</h4>
                    <p className="text-sm text-gray-600">Acima de 90% em resolução de casos representados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Especialização */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas de <span className="text-blue-600">Especialização</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise profunda em três pilares do direito que protegem seus interesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Consumidor */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direito do Consumidor</h3>
              <p className="text-gray-600 mb-4">
                Proteção contra abuso, cobranças indevidas, produtos defeituosos e garantia de direitos do consumidor.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Cobranças indevidas</li>
                <li>✓ Danos morais</li>
                <li>✓ Produtos e serviços defeituosos</li>
                <li>✓ Direitos do consumidor</li>
              </ul>
            </div>

            {/* Contratos */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contratos & Negociações</h3>
              <p className="text-gray-600 mb-4">
                Elaboração, análise e negociação de contratos com segurança jurídica total.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Revisão de contratos</li>
                <li>✓ Elaboração de documentos</li>
                <li>✓ Negociações profissionais</li>
                <li>✓ Proteção de interesses</li>
              </ul>
            </div>

            {/* Ações Judiciais */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ações Judiciais</h3>
              <p className="text-gray-600 mb-4">
                Representação estratégica em processos judiciais com foco em resultados.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Ações indenizatórias</li>
                <li>✓ Defesa em processos</li>
                <li>✓ Estratégia vencedora</li>
                <li>✓ Acompanhamento completo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">3+</h3>
              <p className="text-blue-100">Anos de Experiência</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-blue-100">Clientes Atendidos</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">90%</h3>
              <p className="text-blue-100">Taxa de Sucesso</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-blue-100">Dedicação ao Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para Falar Comigo?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entre em contato para uma consulta gratuita e descubra como posso ajudar a proteger seus direitos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">(81) 99977-7157</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <a href="https://wa.me/558133333333" target="_blank" rel="noopener noreferrer">
                  Enviar Mensagem
                </a>
              </Button>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-blue-50 rounded-lg border border-blue-200">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">contato@drrichardrodrigues.com.br</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <a href="mailto:contato@drrichardrodrigues.com.br">
                  Enviar Email
                </a>
              </Button>
            </div>

            {/* Telefone */}
            <div className="text-center p-8 bg-purple-50 rounded-lg border border-purple-200">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">(81) 3333-3333</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <a href="tel:+5581333333">
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>

          {/* Endereço */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <MapPin className="h-5 w-5 text-blue-600" />
              <p>R. do Imperador Pedro II, 346 - Santo Antônio, Recife - PE</p>
            </div>
            <p className="text-sm text-gray-500">Segunda a sexta, 9h às 18h</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
