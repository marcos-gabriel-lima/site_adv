import React from 'react';
import './Sobre.css'; // Estilos específicos para a página Sobre

const Sobre = () => {
  return (
    <div className="sobre-page container">
      <section className="section sobre-section">
        <div className="section-header text-center">
          <h2>Sobre Mim</h2>
        </div>
        <div className="sobre-content">
          <div className="sobre-text">
            <p>
              Sou advogado com sólida experiência na área de contencioso jurídico, 
              adquirida ao longo dos últimos anos em instituições como a Caixa Econômica Federal 
              e o Banco do Nordeste, onde atuei com elaboração de peças processuais, recursos, 
              acompanhamento de processos judiciais e atividades em sistemas como PJe. 
            </p>
            <p>
              Também tenho passagem por escritório de advocacia, com foco em direito civil e 
              trabalhista. 
            </p>
            <p>
              Além dessas experiências institucionais, atuo de forma autônoma em causas 
              particulares, prestando assessoria jurídica e conduzindo processos com 
              responsabilidade e comprometimento.
            </p>
            {/* 
              TODO: Adicionar espaço para foto, se desejado, e pensar em como
              integrá-la com o texto. Pode ser ao lado, acima, etc. 
              Considerar um componente de imagem reutilizável ou um estilo específico aqui.
            */}
          </div>
          {/* 
            Se houver uma imagem para Oziel, ela poderia ir aqui. Exemplo:
            <div className="sobre-image">
              <img src="/path/to/oziel-foto.jpg" alt="Oziel Henrique Da Silva" />
            </div> 
          */}
        </div>
      </section>
    </div>
  );
};

export default Sobre; 