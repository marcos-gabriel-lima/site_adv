import React, { useState } from 'react';
import './FaqItem.css';

const FaqItem = ({ pergunta, resposta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-pergunta" onClick={toggleOpen} aria-expanded={isOpen}>
        <span>{pergunta}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq-resposta">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem; 