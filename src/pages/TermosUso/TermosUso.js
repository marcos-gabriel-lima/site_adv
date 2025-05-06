import React from 'react';
import '../PoliticaPrivacidade/PoliticaPrivacidade.css'; // Reutilizando o CSS da página legal

const TermosUso = () => {
  return (
    <div className="legal-page termos-uso-page container">
      <section className="section">
        <div className="section-header text-center">
          <h2>Termos de Uso</h2>
        </div>
        <div className="legal-content">
          <p>
            <strong>Última atualização:</strong> [Data da Última Atualização]
          </p>

          <p>
            Por favor, leia estes Termos de Uso ("Termos", "Termos de Uso") cuidadosamente 
            antes de usar o website Oziel Silva Advocacia (o "Serviço") operado por 
            Oziel Henrique Da Silva ("nós", "nos", ou "nosso").
          </p>

          <p>
            Seu acesso e uso do Serviço estão condicionados à sua aceitação e conformidade 
            com estes Termos. Estes Termos aplicam-se a todos os visitantes, usuários e outros 
            que acessam ou usam o Serviço.
          </p>

          <p>
            <em>
              [Conteúdo completo dos Termos de Uso a ser inserido aqui. 
              Recomenda-se a validação jurídica deste texto.]
            </em>
          </p>

          <h3>1. Contas</h3>
          <p>
            <em>[Se aplicável, detalhar termos sobre criação de contas.]</em>
          </p>

          <h3>2. Propriedade Intelectual</h3>
          <p>
            <em>[Detalhar os direitos sobre o conteúdo do site.]</em>
          </p>

          <h3>3. Links Para Outros Websites</h3>
          <p>
            <em>[Cláusula sobre links de terceiros.]</em>
          </p>

          <h3>4. Limitação de Responsabilidade</h3>
          <p>
            <em>[Cláusula de limitação de responsabilidade.]</em>
          </p>
          
          <h3>5. Alterações</h3>
          <p>
            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir 
            estes Termos a qualquer momento. 
          </p>

          <h3>6. Contato</h3>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco:
          </p>
          <ul>
            <li>Por e-mail: Ozielhenrique.adv@outlook.com</li>
            <li>Por telefone: (81) 99339-1492</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TermosUso; 