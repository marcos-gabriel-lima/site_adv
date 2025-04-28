import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// TODO: Adicionar ícones Font Awesome (se ainda não estiverem no projeto)
// Você pode adicionar via CDN no public/index.html ou instalar como dependência

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // TODO: Substituir links e informações de contato pelos dados reais
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'fab fa-linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/', icon: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://facebook.com/', icon: 'fab fa-facebook' },
  ];

  const quickLinks = [
    { path: '/', text: 'Início' },
    { path: '/sobre', text: 'Sobre' },
    { path: '/areas-atuacao', text: 'Áreas de Atuação' },
    { path: '/blog', text: 'Blog' },
    { path: '/faq', text: 'Perguntas Frequentes' },
    { path: '/contato', text: 'Contato' },
  ];

  // TODO: Listar as áreas de atuação reais
  const areas = [
    { path: '/areas-atuacao/direito-civil', text: 'Direito Civil' },
    { path: '/areas-atuacao/direito-trabalhista', text: 'Direito Trabalhista' },
    { path: '/areas-atuacao/direito-empresarial', text: 'Direito Empresarial' },
    { path: '/areas-atuacao/direito-digital', text: 'Direito Digital' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Nome do Advogado</h3>
            <p>Advocacia especializada com foco em resultados e atendimento personalizado.</p>
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
              {areas.map(area => (
                <li key={area.path}><Link to={area.path}>{area.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contato</h4>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> Rua Exemplo, 123 - Bairro</p>
              <p>Cidade - Estado, CEP 00000-000</p>
              <p><i className="fas fa-phone"></i> (00) 00000-0000</p>
              <p><i className="fas fa-envelope"></i> contato@advogado.com.br</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nome do Advogado. Todos os direitos reservados.</p>
          <div className="footer-legal">
            {/* TODO: Criar páginas de Política de Privacidade e Termos de Uso */} 
            <Link to="/politica-privacidade">Política de Privacidade</Link>
            <Link to="/termos-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 