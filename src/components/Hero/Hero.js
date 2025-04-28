import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// TODO: Considerar usar o componente OptimizedImage para a imagem de fundo
// import OptimizedImage from '../UI/OptimizedImage';

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage, 
  overlay = true 
}) => {
  const heroStyle = {
    // Se usar OptimizedImage, a lógica de background seria diferente
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', 
  };

  return (
    <section className="hero" style={heroStyle}>
      {overlay && <div className="hero-overlay"></div>}
      <div className="container hero-content">
        {/* Usar h1 para o título principal da página (geralmente no Hero) */} 
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="button hero-button">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero; 