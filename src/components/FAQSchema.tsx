import React from 'react';

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual é a especialização do Dr. Richard Rodrigues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Richard Rodrigues é especializado em Direito do Consumidor, Contratos, Negociações e Ações Judiciais, oferecendo consultoria jurídica personalizada em Pernambuco."
        }
      },
      {
        "@type": "Question",
        "name": "Como posso entrar em contato com o Dr. Richard Rodrigues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode entrar em contato através do WhatsApp (81) 99977-7157, Instagram @richardrodrigues.adv, ou LinkedIn. Também estamos localizados em Recife-PE."
        }
      },
      {
        "@type": "Question",
        "name": "Atende casos de Direito do Consumidor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, atendemos casos relacionados a produtos defeituosos, serviços inadequados, cobranças indevidas, publicidade enganosa e outras violações de direitos do consumidor."
        }
      },
      {
        "@type": "Question",
        "name": "Fazem revisão de contratos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, realizamos análise detalhada de contratos comerciais, contratos de prestação de serviços e termos e condições para identificar cláusulas abusivas e riscos jurídicos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a taxa de sucesso em ações judiciais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temos uma taxa de sucesso superior a 90% em casos com acordos ou decisões favoráveis aos nossos clientes."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default FAQSchema;
