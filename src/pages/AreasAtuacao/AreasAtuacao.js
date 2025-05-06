import React from 'react';
import AreasCard from '../../components/AreasCard/AreasCard';
import './AreasAtuacao.css'; // Estilos para a página de Áreas de Atuação

const areasDeAtuacaoData = [
  {
    id: 'contencioso-civel',
    titulo: 'Contencioso Cível',
    descricao: 'Atuação com ênfase em processos de conhecimento, execuções e recursos, tanto em primeira quanto em segunda instância. Experiência na elaboração de petições iniciais, contestações, recursos e manifestações diversas. Vivência no acompanhamento processual em plataformas como PJe e em tribunais de justiça, com controle e atualização sistemática de processos.',
    icone: 'fas fa-gavel' // Exemplo de ícone
  },
  {
    id: 'direito-do-trabalho',
    titulo: 'Direito do Trabalho',
    descricao: 'Elaboração de peças processuais em reclamatórias trabalhistas, defesas e recursos. Participação em audiências e acompanhamento de prazos e diligências. Experiência adquirida principalmente em escritório de advocacia e em particular com foco em demandas de empregados e empregadores.',
    icone: 'fas fa-briefcase' // Exemplo de ícone
  },
  {
    id: 'direito-bancario-institucional',
    titulo: 'Direito Bancário e Institucional',
    descricao: 'Atuação no contencioso jurídico da Caixa Econômica Federal e do Banco do Nordeste, com foco em ações de natureza bancária e defesa de instituições financeiras. Experiência em processos relacionados a contratos bancários, execuções e cobranças, além de demandas envolvendo o SFH e demais normativas do setor.',
    icone: 'fas fa-university' // Exemplo de ícone
  },
  {
    id: 'advocacia-autonoma',
    titulo: 'Advocacia Autônoma (Causas Particulares)',
    descricao: 'Atuação independente em causas cíveis e trabalhistas, prestando assessoria jurídica, elaborando peças processuais, realizando audiências e acompanhando casos do início ao fim. Foco no atendimento direto ao cliente e na condução estratégica dos processos.',
    icone: 'fas fa-user-shield' // Exemplo de ícone
  }
];

const AreasAtuacao = () => {
  return (
    <div className="areas-atuacao-page container">
      <section className="section">
        <div className="section-header text-center">
          <h2>Áreas de Atuação</h2>
          <p>Conheça as principais áreas em que ofereço meus serviços jurídicos.</p>
        </div>
        <div className="areas-grid">
          {areasDeAtuacaoData.map(area => (
            <AreasCard 
              key={area.id}
              id={area.id}
              titulo={area.titulo}
              descricao={area.descricao.substring(0, 150) + '...'} // Mostra uma breve descrição
              icone={area.icone}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AreasAtuacao; 