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
          {/* TODO: Adicionar informações de contato (telefone, email, endereço) aqui, talvez reutilizando a lógica da Home */}
          <div className="contato-info-placeholder">
             <h2>Informações de Contato</h2>
             <p>(Telefone, Email, Endereço serão adicionados aqui)</p>
          </div>

          <FormContato />
        </div>

      </div>
    </div>
  );
};

export default Contato; 