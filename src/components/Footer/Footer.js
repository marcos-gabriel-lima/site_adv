import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// TODO: Adicionar ícones Font Awesome (se ainda não estiverem no projeto)
// Você pode adicionar via CDN no public/index.html ou instalar como dependência

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/oziel-da-silva-a48a13128', icon: 'fab fa-linkedin' },
    // Adicione outros links de redes sociais aqui se necessário
  ];

  const quickLinks = [
    { path: '/', text: 'Início' },
    { path: '/sobre', text: 'Sobre' },
    { path: '/areas-atuacao', text: 'Áreas de Atuação' },
    // { path: '/blog', text: 'Blog' }, // Blog não desejado
    { path: '/faq', text: 'Perguntas Frequentes' }, // Manter FAQ para o futuro
    { path: '/contato', text: 'Contato' },
  ];

  // Áreas de atuação principais (links para a página geral)
  const areasPrincipais = [
    { path: '/areas-atuacao', text: 'Contencioso Cível' },
    { path: '/areas-atuacao', text: 'Direito do Trabalho' },
    { path: '/areas-atuacao', text: 'Direito Bancário e Institucional' },
    { path: '/areas-atuacao', text: 'Advocacia Autônoma' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Oziel Silva Advocacia</h3>
            <p>Oziel Silva Advocacia, consultoria Jurídica.</p>
            <div className="social-links">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.path}><Link to={link.path}>{link.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-areas">
            <h4>Áreas de Atuação</h4>
            <ul>
              {areasPrincipais.map(area => (
                // Usando o texto como chave, pois todos os paths são iguais por enquanto
                <li key={area.text}><Link to={area.path}>{area.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contato</h4>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> Rua Malva Rosa, 220 - Jardim Muribeca</p>
              {/* <p>Cidade - Estado, CEP 00000-000</p> */}{/* CEP não fornecido, pode ser adicionado depois */}
              <p><i className="fas fa-phone"></i> (81) 99339-1492</p>
              <p><i className="fas fa-envelope"></i> Ozielhenrique.adv@outlook.com</p>
              <p><i className="fas fa-clock"></i> Atendimento 24h</p> {/* Adicionando horário de atendimento */}
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Oziel Silva Advocacia. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <Link to="/politica-privacidade">Política de Privacidade</Link>
            <Link to="/termos-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 