import React from 'react';
import FormContato from '../../components/FormContato/FormContato'; // Ajuste o caminho se necessário
import './Contato.css'; // Criaremos este arquivo em seguida

const Contato = () => {
  return (
    <div className="contato-page">
      <div className="container">
        <div className="section-header">
          <h1>Entre em Contato</h1>
          <p>Preencha o formulário abaixo ou utilize um dos nossos canais de atendimento.</p>
        </div>

        <div className="contato-content">
          <div className="contato-detalhes">
            <h2>Nossos Canais de Atendimento</h2>
            <div className="detalhe-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Local de Atendimento:</strong>
                <p>Atendo em domicílio, no escritório da OAB ou em local de preferência do cliente. Para reuniões presenciais, utilizo as salas da OAB, garantindo conforto e privacidade.</p>
              </div>
            </div>
            <div className="detalhe-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Telefone:</strong>
                <p><a href="tel:81993391492">(81) 99339-1492</a></p>
              </div>
            </div>
            <div className="detalhe-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>E-mail:</strong>
                <p><a href="mailto:Ozielhenrique.adv@outlook.com">Ozielhenrique.adv@outlook.com</a></p>
              </div>
            </div>
            <div className="detalhe-item">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Horário de Atendimento:</strong>
                <p>24h</p>
              </div>
            </div>
            <div className="detalhe-item social-link-item">
              <i className="fab fa-linkedin"></i>
              <div>
                <strong>LinkedIn:</strong>
                <p><a href="https://www.linkedin.com/in/oziel-da-silva-a48a13128" target="_blank" rel="noopener noreferrer">Oziel Da Silva</a></p>
              </div>
            </div>
            <div className="detalhe-item social-link-item">
              <i className="fab fa-instagram"></i>
              <div>
                <strong>Instagram:</strong>
                <p><a href="https://www.instagram.com/ozielsilvaa_adv/" target="_blank" rel="noopener noreferrer">@ozielsilvaa_adv</a></p>
              </div>
            </div>
          </div>

          <FormContato />
        </div>

      </div>
    </div>
  );
};

export default Contato; 