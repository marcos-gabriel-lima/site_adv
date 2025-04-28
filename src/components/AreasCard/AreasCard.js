import React from 'react';
import { Link } from 'react-router-dom';
import './AreasCard.css';

const AreasCard = ({ id, titulo, descricao, icone }) => {
  // Constrói o link para a página de detalhe da área
  const linkTo = `/areas-atuacao/${id}`;

  return (
    <div className="area-card">
      <div className="area-icon" aria-hidden="true">
        {/* Renderiza o ícone usando a classe passada */} 
        <i className={icone}></i>
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Link to={linkTo} className="area-link">
        Saiba mais <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default AreasCard; 