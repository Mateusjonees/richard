import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question: "Como é o processo de atendimento?",
    answer: "O atendimento começa com uma consulta inicial onde discutimos seu caso em detalhes. Após análise, preparamos uma estratégia jurídica personalizada e mantenho você atualizado sobre todo o andamento do processo.",
  },
  {
    id: "2",
    question: "Qual é o custo da consultoria?",
    answer: "Os honorários variam conforme a complexidade do caso. Oferecemos consultas iniciais com valores acessíveis e possibilidade de honorários contingentes em ações de maior valor. Solicite um orçamento personalizado.",
  },
  {
    id: "3",
    question: "Vocês fazem atendimento online?",
    answer: "Sim! Oferecemos atendimento completamente online por videoconferência, WhatsApp ou chat. Você pode agendar uma consulta conforme sua conveniência, sem necessidade de deslocamento.",
  },
  {
    id: "4",
    question: "Quanto tempo leva um processo judicial?",
    answer: "O tempo varia bastante conforme o tipo de ação. Causas simples podem levar 1-2 anos, enquanto casos mais complexos podem levar 3-5 anos. Foquei em estratégias para agilizar seu processo.",
  },
  {
    id: "5",
    question: "Preciso ir presencialmente para tudo?",
    answer: "Não! A maioria das comunicações e orientações podem ser feitas online. Apenas em alguns momentos (assinatura de documentos específicos) pode ser necessário presencialmente, mas sempre buscamos alternativas digitais.",
  },
  {
    id: "6",
    question: "Vocês trabalham com honorários contingentes?",
    answer: "Sim, em casos de direito do consumidor e ações de maior valor, trabalhamos com honorários contingentes (você só paga se ganhar). Isso facilita o acesso à justiça e alinha nossos interesses aos seus.",
  },
  {
    id: "7",
    question: "Qual é o primeiro passo para processar uma empresa?",
    answer: "O primeiro passo é agendar uma consulta para análise do seu caso. Traremos todos os documentos relacionados ao problema. Depois, avaliaremos se há base legal para ação e definiremos a melhor estratégia.",
  },
  {
    id: "8",
    question: "Quanto posso receber em danos morais?",
    answer: "Não há um valor fixo para danos morais. O juiz considera a gravidade do dano, sua renda, se é pessoa jurídica, entre outros fatores. Em geral, varia de R$ 1.000 a R$ 50.000+, dependendo do caso.",
  },
  {
    id: "9",
    question: "Como funciona uma ação de cobrança?",
    answer: "Uma ação de cobrança busca recuperar valores devidos. Iniciamos com uma petição inicial, o réu é notificado e pode contestar. Se não pagarem, buscamos penhora de bens. O processo é simples em valores pequenos (até R$ 20 mil).",
  },
  {
    id: "10",
    question: "Preciso de advogado para tudo?",
    answer: "Para ações judiciais, você é obrigado a ter advogado em praticamente todos os casos. Para reclamações administrativas, às vezes não, mas ter um advogado aumenta muito suas chances de sucesso.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-4xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos serviços, processos jurídicos e como podemos ajudá-lo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-4">
            Entre em contato conosco via WhatsApp ou agende uma consulta gratuita
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/558733333333"
              className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              💬 WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              📧 Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
