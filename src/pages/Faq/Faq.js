import React from 'react';
import FaqItem from './FaqItem';
import './Faq.css';

const faqData = [
  { 
    id: 1, 
    pergunta: 'Como faço para cobrar uma dívida de alguém judicialmente?', 
    resposta: 'Resposta concisa para: Como faço para cobrar uma dívida de alguém judicialmente?' 
  },
  { 
    id: 2, 
    pergunta: 'Posso pedir indenização por danos morais e materiais?', 
    resposta: 'Resposta concisa para: Posso pedir indenização por danos morais e materiais?' 
  },
  { 
    id: 3, 
    pergunta: 'Tenho um contrato e a outra parte não cumpriu. O que posso fazer?', 
    resposta: 'Resposta concisa para: Tenho um contrato e a outra parte não cumpriu. O que posso fazer?' 
  },
  { 
    id: 4, 
    pergunta: 'Fui demitido sem justa causa. Quais são os meus direitos?', 
    resposta: 'Resposta concisa para: Fui demitido sem justa causa. Quais são os meus direitos?' 
  },
  { 
    id: 5, 
    pergunta: 'Trabalhei sem carteira assinada. Ainda assim posso processar a empresa?', 
    resposta: 'Resposta concisa para: Trabalhei sem carteira assinada. Ainda assim posso processar a empresa?' 
  },
  { 
    id: 6, 
    pergunta: 'A empresa não me pagou corretamente as horas extras. Como posso comprovar isso?', 
    resposta: 'Resposta concisa para: A empresa não me pagou corretamente as horas extras. Como posso comprovar isso?' 
  },
  { 
    id: 7, 
    pergunta: 'O banco descontou um valor indevido da minha conta. Posso recuperar?', 
    resposta: 'Resposta concisa para: O banco descontou um valor indevido da minha conta. Posso recuperar?' 
  },
  { 
    id: 8, 
    pergunta: 'Tenho um financiamento habitacional em atraso. Posso perder meu imóvel?', 
    resposta: 'Resposta concisa para: Tenho um financiamento habitacional em atraso. Posso perder meu imóvel?' 
  },
  { 
    id: 9, 
    pergunta: 'Posso entrar com ação para revisar juros abusivos no meu contrato com o banco?', 
    resposta: 'Resposta concisa para: Posso entrar com ação para revisar juros abusivos no meu contrato com o banco?' 
  },
  { 
    id: 10, 
    pergunta: 'Quanto custa para entrar com uma ação?', 
    resposta: 'Resposta concisa para: Quanto custa para entrar com uma ação?' 
  },
  { 
    id: 11, 
    pergunta: 'Você consegue resolver meu caso mais rápido ou fazer acordo direto?', 
    resposta: 'Resposta concisa para: Você consegue resolver meu caso mais rápido ou fazer acordo direto?' 
  },
  { 
    id: 12, 
    pergunta: 'Quais documentos preciso levar para iniciar o processo?', 
    resposta: 'Resposta concisa para: Quais documentos preciso levar para iniciar o processo?' 
  },
];

const Faq = () => {
  return (
    <div className="faq-page container">
      <section className="section">
        <div className="section-header text-center">
          <h2>Perguntas Frequentes (FAQ)</h2>
          <p>Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos jurídicos.</p>
        </div>
        <div className="faq-list">
          {faqData.map(item => (
            <FaqItem key={item.id} pergunta={item.pergunta} resposta={item.resposta} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq; 