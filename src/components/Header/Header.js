import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determina se o header deve ter fundo sólido
  // Condição: scroll > 50px OU não está na página Home
  const shouldBeSolid = isScrolled || location.pathname !== '/';

  // Detecta o scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);
    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Array vazio garante que o efeito rode apenas na montagem/desmontagem

  // Fecha o menu mobile quando mudar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]); // Depende da localização para fechar ao navegar

  return (
    // Usa a variável shouldBeSolid para aplicar a classe 'scrolled'
    <header className={`header ${shouldBeSolid ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            {/* TODO: Adicionar logo real ou texto */}
            <h1>Nome do Advogado</h1>
          </Link>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          {/* Spans para o ícone hamburguer */}
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navegação principal */}
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>
                Sobre
              </Link>
            </li>
            <li>
              {/* Verifica se o pathname começa com /areas-atuacao para ativar o link */}
              <Link to="/areas-atuacao" className={location.pathname.startsWith('/areas-atuacao') ? 'active' : ''}>
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>
                FAQ
              </Link>
            </li>
            <li>
              {/* Botão de contato com classe especial */}
              <Link to="/contato" className={`contact-button ${location.pathname === '/contato' ? 'active-button' : ''}`}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 