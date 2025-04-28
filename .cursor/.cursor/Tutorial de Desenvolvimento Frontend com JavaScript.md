# Tutorial de Desenvolvimento Frontend com JavaScript

Este tutorial guiará você no desenvolvimento do frontend do site de advocacia usando JavaScript moderno e React. Seguiremos as tendências de design para 2025 e implementaremos as melhores práticas para criar um site profissional, responsivo e otimizado.

## Índice

1. [Configuração Inicial do Projeto React](#1-configuração-inicial-do-projeto-react)
2. [Estrutura de Arquivos e Componentes](#2-estrutura-de-arquivos-e-componentes)
3. [Desenvolvimento dos Componentes Principais](#3-desenvolvimento-dos-componentes-principais)
4. [Implementação das Páginas](#4-implementação-das-páginas)
5. [Estilização e Responsividade](#5-estilização-e-responsividade)
6. [Implementação de Funcionalidades Interativas](#6-implementação-de-funcionalidades-interativas)
7. [Otimização e Performance](#7-otimização-e-performance)
8. [Testes e Depuração](#8-testes-e-depuração)

## 1. Configuração Inicial do Projeto React

Vamos começar configurando o projeto React para o site de advocacia.

### Criação do Projeto

Abra o Cursor IDE e, no terminal integrado, navegue até a pasta do seu projeto. Em seguida, execute os seguintes comandos:

```bash
# Crie o arquivo HTML base
mkdir -p public
touch public/index.html
```

Agora, vamos criar o arquivo HTML base. Abra o arquivo `public/index.html` e adicione o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Site de advocacia especializado em [área de atuação]">
  <title>Nome do Advogado | Advocacia Especializada</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### Configuração dos Arquivos Principais

Agora, vamos criar os arquivos principais do React:

```bash
# Crie os arquivos principais
mkdir -p src
touch src/index.js
touch src/App.js
touch src/index.css
```

Abra o arquivo `src/index.js` e adicione:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Abra o arquivo `src/App.js` e adicione:

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação de componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importação de páginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import AreasAtuacao from './pages/AreasAtuacao/AreasAtuacao';
import AreaDetalhe from './pages/AreasAtuacao/AreaDetalhe';
import Blog from './pages/Blog/Blog';
import ArtigoDetalhe from './pages/Blog/ArtigoDetalhe';
import Contato from './pages/Contato/Contato';
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/areas-atuacao" element={<AreasAtuacao />} />
            <Route path="/areas-atuacao/:area" element={<AreaDetalhe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArtigoDetalhe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

Abra o arquivo `src/index.css` e adicione estilos globais:

```css
/* Reset e estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Variáveis de cores - personalize conforme sua identidade visual */
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --text-color: #333;
  --light-text: #f8f9fa;
  --background-color: #ffffff;
  --light-background: #f8f9fa;
  --border-color: #e0e0e0;
  
  /* Variáveis de tipografia */
  --heading-font: 'Playfair Display', serif;
  --body-font: 'Raleway', sans-serif;
  
  /* Variáveis de espaçamento */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 5rem;
  
  /* Variáveis de sombras */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  /* Variáveis de transições */
  --transition-fast: 0.3s ease;
  --transition-normal: 0.5s ease;
}

body {
  font-family: var(--body-font);
  color: var(--text-color);
  line-height: 1.6;
  background-color: var(--background-color);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading-font);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--secondary-color);
}

button, .button {
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: var(--light-text);
  font-family: var(--body-font);
  font-weight: 600;
  transition: background-color var(--transition-fast);
}

button:hover, .button:hover {
  background-color: var(--secondary-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

.main-content {
  min-height: 70vh;
}

/* Utilitários */
.text-center {
  text-align: center;
}

.mb-1 {
  margin-bottom: var(--spacing-xs);
}

.mb-2 {
  margin-bottom: var(--spacing-sm);
}

.mb-3 {
  margin-bottom: var(--spacing-md);
}

.mb-4 {
  margin-bottom: var(--spacing-lg);
}

.mb-5 {
  margin-bottom: var(--spacing-xl);
}

/* Responsividade base */
@media (max-width: 768px) {
  :root {
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
}
```

## 2. Estrutura de Arquivos e Componentes

Vamos criar a estrutura de pastas e arquivos para os componentes e páginas:

```bash
# Estrutura de componentes
mkdir -p src/components/Header
mkdir -p src/components/Footer
mkdir -p src/components/Hero
mkdir -p src/components/AreasCard
mkdir -p src/components/Depoimentos
mkdir -p src/components/FormContato
mkdir -p src/components/BlogCard
mkdir -p src/components/Chatbot
mkdir -p src/components/UI

# Estrutura de páginas
mkdir -p src/pages/Home
mkdir -p src/pages/Sobre
mkdir -p src/pages/AreasAtuacao
mkdir -p src/pages/Blog
mkdir -p src/pages/Contato
mkdir -p src/pages/FAQ

# Estrutura de serviços e utilitários
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/assets/images
```

## 3. Desenvolvimento dos Componentes Principais

Vamos desenvolver os componentes principais do site.

### Header (Cabeçalho)

Crie o arquivo `src/components/Header/Header.js`:

```javascript
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detecta o scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando mudar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Nome do Advogado</h1>
          </Link>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
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
              <Link to="/areas-atuacao" className={location.pathname.includes('/areas-atuacao') ? 'active' : ''}>
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link to="/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contato" className="contact-button">
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
```

Crie o arquivo `src/components/Header/Header.css`:

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal);
  padding: 1rem 0;
}

.header.scrolled {
  background-color: var(--background-color);
  box-shadow: var(--shadow-md);
  padding: 0.5rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--primary-color);
  transition: color var(--transition-fast);
}

.logo a:hover h1 {
  color: var(--secondary-color);
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.main-nav a {
  font-weight: 500;
  position: relative;
}

.main-nav a.active {
  color: var(--secondary-color);
}

.main-nav a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--secondary-color);
}

.contact-button {
  background-color: var(--primary-color);
  color: var(--light-text) !important;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  transition: background-color var(--transition-fast);
}

.contact-button:hover {
  background-color: var(--secondary-color);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .main-nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--background-color);
    box-shadow: var(--shadow-md);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-normal);
  }
  
  .main-nav.open {
    max-height: 500px;
  }
  
  .main-nav ul {
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
  }
  
  .main-nav a.active::after {
    display: none;
  }
}
```

### Footer (Rodapé)

Crie o arquivo `src/components/Footer/Footer.js`:

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Nome do Advogado</h3>
            <p>Advocacia especializada com foco em resultados e atendimento personalizado.</p>
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/areas-atuacao">Áreas de Atuação</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">Perguntas Frequentes</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-areas">
            <h4>Áreas de Atuação</h4>
            <ul>
              <li><Link to="/areas-atuacao/direito-civil">Direito Civil</Link></li>
              <li><Link to="/areas-atuacao/direito-trabalhista">Direito Trabalhista</Link></li>
              <li><Link to="/areas-atuacao/direito-empresarial">Direito Empresarial</Link></li>
              <li><Link to="/areas-atuacao/direito-digital">Direito Digital</Link></li>
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
            <Link to="/politica-privacidade">Política de Privacidade</Link>
            <Link to="/termos-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

Crie o arquivo `src/components/Footer/Footer.css`:

```css
.footer {
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: var(--spacing-lg) 0 var(--spacing-sm);
  margin-top: var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.footer h3, .footer h4 {
  color: var(--light-text);
  margin-bottom: var(--spacing-sm);
  position: relative;
}

.footer h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-color);
}

.footer-info p {
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--light-text);
  transition: background-color var(--transition-fast);
}

.social-links a:hover {
  background-color: var(--secondary-color);
}

.footer-links ul, .footer-areas ul {
  list-style: none;
}

.footer-links li, .footer-areas li {
  margin-bottom: 0.5rem;
}

.footer-links a, .footer-areas a {
  color: var(--light-text);
  opacity: 0.8;
  transition: opacity var(--transition-fast);
}

.footer-links a:hover, .footer-areas a:hover {
  opacity: 1;
  color: var(--secondary-color);
}

.footer-contact address {
  font-style: normal;
  line-height: 1.8;
}

.footer-contact i {
  margin-right: 0.5rem;
  color: var(--secondary-color);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.footer-legal {
  display: flex;
  gap: var(--spacing-md);
}

.footer-legal a {
  color: var(--light-text);
  opacity: 0.8;
  font-size: 0.9rem;
}

.footer-legal a:hover {
  opacity: 1;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-legal {
    justify-content: center;
  }
}
```

### Hero Section

Crie o arquivo `src/components/Hero/Hero.js`:

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, buttonText, buttonLink, backgroundImage, overlay = true }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle}>
      {overlay && <div className="hero-overlay"></div>}
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="hero-button">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
```

Crie o arquivo `src/components/Hero/Hero.css`:

```css
.hero {
  height: 80vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--light-text);
  margin-bottom: var(--spacing-xl);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-sm);
  line-height: 1.2;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
  max-width: 600px;
}

.hero-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: var(--light-text);
  border-radius: 4px;
  font-weight: 600;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.hero-button:hover {
  background-color: var(--primary-color);
  color: var(--light-text);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .hero-button {
    padding: 0.75rem 1.5rem;
  }
}
```

### Formulário de Contato

Crie o arquivo `src/components/FormContato/FormContato.js`:

```javascript
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormContato.css';

const FormContato = ({ className }) => {
  const [submitStatus, setSubmitStatus] = useState(null);

  // Schema de validação com Yup
  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, 'Nome deve ter pelo menos 3 caracteres')
      .required('Nome é obrigatório'),
    email: Yup.string()
      .email('Email inválido')
      .required('Email é obrigatório'),
    telefone: Yup.string()
      .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato: (00) 00000-0000')
      .required('Telefone é obrigatório'),
    assunto: Yup.string()
      .required('Assunto é obrigatório'),
    mensagem: Yup.string()
      .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
      .required('Mensagem é obrigatória'),
    politicaPrivacidade: Yup.boolean()
      .oneOf([true], 'Você deve concordar com a política de privacidade')
  });

  // Configuração do Formik
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
      politicaPrivacidade: false
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Simulação de envio para API
        console.log('Dados do formulário:', values);
        
        // Em um cenário real, você faria uma chamada para sua API:
        // const response = await fetch('/api/contato', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(values)
        // });
        
        // Simulando resposta bem-sucedida
        setSubmitStatus('success');
        resetForm();
        
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        setSubmitStatus('error');
      }
    }
  });

  // Função para formatar o telefone
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d)(\d{4})$/, '$1-$2');
      formik.setFieldValue('telefone', value);
    }
  };

  return (
    <div className={`form-contato ${className || ''}`}>
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo para agendar uma consulta ou tirar suas dúvidas.</p>
      
      {submitStatus === 'success' && (
        <div className="form-status success">
          <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="form-status error">
          <p>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</p>
        </div>
      )}
      
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome completo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div className="error-message">{formik.errors.nome}</div>
          )}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu.email@exemplo.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="telefone">Telefone*</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              onChange={handlePhoneChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefone}
            />
            {formik.touched.telefone && formik.errors.telefone && (
              <div className="error-message">{formik.errors.telefone}</div>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="assunto">Assunto*</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            placeholder="Assunto da mensagem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.assunto}
          />
          {formik.touched.assunto && formik.errors.assunto && (
            <div className="error-message">{formik.errors.assunto}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem*</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Descreva sua situação ou dúvida"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensagem}
          ></textarea>
          {formik.touched.mensagem && formik.errors.mensagem && (
            <div className="error-message">{formik.errors.mensagem}</div>
          )}
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="politicaPrivacidade"
            name="politicaPrivacidade"
            onChange={formik.handleChange}
            checked={formik.values.politicaPrivacidade}
          />
          <label htmlFor="politicaPrivacidade">
            Concordo com a <a href="/politica-privacidade" target="_blank">Política de Privacidade</a>*
          </label>
          {formik.touched.politicaPrivacidade && formik.errors.politicaPrivacidade && (
            <div className="error-message">{formik.errors.politicaPrivacidade}</div>
          )}
        </div>
        
        <button type="submit" className="submit-button" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
};

export default FormContato;
```

Crie o arquivo `src/components/FormContato/FormContato.css`:

```css
.form-contato {
  background-color: var(--light-background);
  padding: var(--spacing-lg);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}

.form-contato h2 {
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.form-contato p {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}

.form-status {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: var(--spacing-md);
}

.form-status.success {
  background-color: rgba(40, 167, 69, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.2);
  color: #28a745;
}

.form-status.error {
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.2);
  color: #dc3545;
}

.form-group {
  margin-bottom: var(--spacing-sm);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: var(--body-font);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

.form-group.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: auto;
  margin-top: 0.25rem;
}

.form-group.checkbox label {
  margin-bottom: 0;
  font-weight: normal;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-button {
  background-color: var(--primary-color);
  color: var(--light-text);
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  width: 100%;
  margin-top: var(--spacing-sm);
}

.submit-button:hover {
  background-color: var(--secondary-color);
}

.submit-button:disabled {
  background-color: var(--border-color);
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

## 4. Implementação das Páginas

Vamos implementar as páginas principais do site.

### Página Inicial (Home)

Crie o arquivo `src/pages/Home/Home.js`:

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import FormContato from '../../components/FormContato/FormContato';
import './Home.css';

// Importe uma imagem de fundo para o hero
import heroBackground from '../../assets/images/hero-background.jpg';

const Home = () => {
  // Dados simulados para áreas de atuação
  const areasAtuacao = [
    {
      id: 'direito-civil',
      titulo: 'Direito Civil',
      descricao: 'Assessoria jurídica em questões contratuais, responsabilidade civil, direito de família e sucessões.',
      icone: 'fas fa-balance-scale'
    },
    {
      id: 'direito-trabalhista',
      titulo: 'Direito Trabalhista',
      descricao: 'Representação em processos trabalhistas, consultoria preventiva e negociações coletivas.',
      icone: 'fas fa-briefcase'
    },
    {
      id: 'direito-empresarial',
      titulo: 'Direito Empresarial',
      descricao: 'Suporte jurídico para empresas, contratos comerciais, fusões e aquisições, compliance.',
      icone: 'fas fa-building'
    },
    {
      id: 'direito-digital',
      titulo: 'Direito Digital',
      descricao: 'Proteção de dados, LGPD, crimes cibernéticos, contratos digitais e propriedade intelectual.',
      icone: 'fas fa-laptop-code'
    }
  ];

  // Dados simulados para depoimentos
  const depoimentos = [
    {
      id: 1,
      nome: 'João Silva',
      texto: 'Excelente profissional. Resolveu meu caso com agilidade e eficiência. Recomendo fortemente.',
      avaliacao: 5
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      texto: 'Atendimento personalizado e humanizado. Sempre disponível para esclarecer dúvidas e muito competente.',
      avaliacao: 5
    },
    {
      id: 3,
      nome: 'Carlos Santos',
      texto: 'Profissional extremamente dedicado e conhecedor da área. Conseguiu resultados além das minhas expectativas.',
      avaliacao: 5
    }
  ];

  // Renderiza estrelas de avaliação
  const renderEstrelas = (quantidade) => {
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <i 
          key={i} 
          className={i < quantidade ? 'fas fa-star' : 'far fa-star'}
        ></i>
      );
    }
    return estrelas;
  };

  return (
    <div className="home-page">
      <Hero 
        title="Advocacia Especializada com Foco em Resultados"
        subtitle="Soluções jurídicas personalizadas para proteger seus direitos e interesses com excelência e dedicação."
        buttonText="Agende uma Consulta"
        buttonLink="/contato"
        backgroundImage={heroBackground}
      />

      {/* Seção Sobre */}
      <section className="section sobre-section">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <h2>Sobre o Advogado</h2>
              <p className="destaque">
                Com mais de 10 anos de experiência, oferecemos assessoria jurídica de excelência para pessoas físicas e jurídicas.
              </p>
              <p>
                Nossa missão é proporcionar soluções jurídicas eficientes e personalizadas, sempre com foco na proteção dos interesses de nossos clientes. Trabalhamos com ética, transparência e dedicação para alcançar os melhores resultados.
              </p>
              <p>
                Acreditamos que cada caso é único e merece atenção individualizada. Por isso, desenvolvemos estratégias específicas para cada situação, garantindo um atendimento humanizado e resultados efetivos.
              </p>
              <Link to="/sobre" className="button">Conheça Nossa História</Link>
            </div>
            <div className="sobre-image">
              {/* Aqui você colocaria uma imagem do advogado */}
              <div className="image-placeholder">
                <i className="fas fa-user-tie"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Áreas de Atuação */}
      <section className="section areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Áreas de Atuação</h2>
            <p>Oferecemos serviços jurídicos especializados nas seguintes áreas:</p>
          </div>
          
          <div className="areas-grid">
            {areasAtuacao.map(area => (
              <div className="area-card" key={area.id}>
                <div className="area-icon">
                  <i className={area.icone}></i>
                </div>
                <h3>{area.titulo}</h3>
                <p>{area.descricao}</p>
                <Link to={`/areas-atuacao/${area.id}`} className="area-link">
                  Saiba mais <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/areas-atuacao" className="button">Ver Todas as Áreas</Link>
          </div>
        </div>
      </section>

      {/* Seção Por Que Nos Escolher */}
      <section className="section diferenciais-section">
        <div className="container">
          <div className="section-header">
            <h2>Por Que Nos Escolher</h2>
            <p>Conheça os diferenciais que fazem nossa advocacia se destacar:</p>
          </div>
          
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Atendimento Personalizado</h3>
              <p>Cada cliente recebe atenção individualizada, com estratégias específicas para seu caso.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Expertise Jurídica</h3>
              <p>Profissionais altamente qualificados e constantemente atualizados com as mudanças legislativas.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Comunicação Clara</h3>
              <p>Mantemos você informado sobre cada etapa do processo com linguagem acessível.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Resultados Comprovados</h3>
              <p>Histórico de sucesso em casos complexos e alta taxa de satisfação dos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="section depoimentos-section">
        <div className="container">
          <div className="section-header">
            <h2>O Que Dizem Nossos Clientes</h2>
            <p>Conheça a experiência de quem já utilizou nossos serviços:</p>
          </div>
          
          <div className="depoimentos-grid">
            {depoimentos.map(depoimento => (
              <div className="depoimento-card" key={depoimento.id}>
                <div className="depoimento-rating">
                  {renderEstrelas(depoimento.avaliacao)}
                </div>
                <p className="depoimento-texto">"{depoimento.texto}"</p>
                <p className="depoimento-autor">- {depoimento.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section className="section contato-section">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-info">
              <h2>Vamos Conversar?</h2>
              <p>Estamos prontos para ajudar você a resolver suas questões jurídicas. Entre em contato para agendar uma consulta.</p>
              
              <div className="contato-metodos">
                <div className="contato-metodo">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Telefone</h3>
                    <p>(00) 00000-0000</p>
                  </div>
                </div>
                
                <div className="contato-metodo">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>contato@advogado.com.br</p>
                  </div>
                </div>
                
                <div className="contato-metodo">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Endereço</h3>
                    <p>Rua Exemplo, 123 - Bairro</p>
                    <p>Cidade - Estado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <FormContato className="home-form" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
```

Crie o arquivo `src/pages/Home/Home.css`:

```css
/* Estilos gerais para seções */
.section {
  padding: var(--spacing-xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.section-header h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
}

.section-footer {
  text-align: center;
  margin-top: var(--spacing-lg);
}

/* Seção Sobre */
.sobre-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.sobre-text h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.sobre-text p {
  margin-bottom: var(--spacing-sm);
}

.sobre-text p.destaque {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--secondary-color);
}

.sobre-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background-color: var(--light-background);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}

.image-placeholder i {
  font-size: 5rem;
  color: var(--primary-color);
}

/* Seção Áreas de Atuação */
.areas-section {
  background-color: var(--light-background);
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

.area-card {
  background-color: var(--background-color);
  padding: var(--spacing-md);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.area-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.area-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.area-icon i {
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.area-card h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.area-card p {
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
}

.area-link {
  display: inline-flex;
  align-items: center;
  color: var(--secondary-color);
  font-weight: 600;
}

.area-link i {
  margin-left: 0.5rem;
  transition: transform var(--transition-fast);
}

.area-link:hover i {
  transform: translateX(3px);
}

/* Seção Diferenciais */
.diferenciais-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

.diferencial-item {
  text-align: center;
  padding: var(--spacing-md);
}

.diferencial-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-sm);
}

.diferencial-icon i {
  font-size: 2rem;
  color: var(--secondary-color);
}

.diferencial-item h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

/* Seção Depoimentos */
.depoimentos-section {
  background-color: var(--light-background);
}

.depoimentos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.depoimento-card {
  background-color: var(--background-color);
  padding: var(--spacing-md);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.depoimento-card::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 4rem;
  color: rgba(52, 152, 219, 0.1);
  font-family: var(--heading-font);
  line-height: 1;
}

.depoimento-rating {
  margin-bottom: var(--spacing-sm);
}

.depoimento-rating i {
  color: #ffc107;
  margin-right: 2px;
}

.depoimento-texto {
  font-style: italic;
  margin-bottom: var(--spacing-sm);
}

.depoimento-autor {
  font-weight: 600;
  text-align: right;
}

/* Seção Contato */
.contato-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.contato-info h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.contato-info > p {
  margin-bottom: var(--spacing-md);
}

.contato-metodos {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contato-metodo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.contato-metodo i {
  width: 50px;
  height: 50px;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--secondary-color);
}

.contato-metodo h3 {
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.contato-metodo p {
  margin: 0;
}

/* Responsividade */
@media (max-width: 992px) {
  .areas-grid,
  .diferenciais-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .sobre-content,
  .contato-grid {
    grid-template-columns: 1fr;
  }
  
  .depoimentos-grid {
    grid-template-columns: 1fr;
  }
  
  .sobre-image {
    order: -1;
    margin-bottom: var(--spacing-md);
  }
  
  .image-placeholder {
    height: 300px;
  }
}

@media (max-width: 576px) {
  .areas-grid,
  .diferenciais-grid {
    grid-template-columns: 1fr;
  }
}
```

## 5. Estilização e Responsividade

Já incluímos estilos responsivos em cada componente. Para garantir que o site seja totalmente responsivo, vamos adicionar algumas regras adicionais no arquivo `src/index.css`:

```css
/* Adicione ao final do arquivo index.css */

/* Media Queries para Responsividade */
@media (max-width: 1200px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 720px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 540px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .section {
    padding: var(--spacing-lg) 0;
  }
}

@media (max-width: 576px) {
  .container {
    width: 100%;
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .button, button {
    width: 100%;
    text-align: center;
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 6. Implementação de Funcionalidades Interativas

Vamos adicionar algumas funcionalidades interativas ao site, como um chatbot simples.

Crie o arquivo `src/components/Chatbot/Chatbot.js`:

```javascript
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Olá! Sou o assistente virtual do escritório. Como posso ajudar você hoje?");
      addBotMessage("Você pode perguntar sobre nossas áreas de atuação, agendar uma consulta ou tirar dúvidas gerais.");
    }
  }, [isOpen, messages.length]);

  // Rola para a última mensagem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { type: 'bot', text }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Adiciona mensagem do usuário
    addUserMessage(inputValue);
    setInputValue('');
    
    // Simula o bot digitando
    setIsTyping(true);
    
    // Simula resposta do bot após um pequeno delay
    setTimeout(() => {
      setIsTyping(false);
      respondToUser(inputValue);
    }, 1000);
  };

  const respondToUser = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Respostas simples baseadas em palavras-chave
    if (lowerMessage.includes('consulta') || lowerMessage.includes('agendar') || lowerMessage.includes('marcar')) {
      addBotMessage("Para agendar uma consulta, você pode preencher o formulário na página de contato ou ligar para (00) 00000-0000.");
    } 
    else if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo') || lowerMessage.includes('honorários')) {
      addBotMessage("Nossos honorários variam de acordo com a complexidade do caso. Oferecemos uma primeira consulta para avaliar sua situação e apresentar uma proposta personalizada.");
    }
    else if (lowerMessage.includes('área') || lowerMessage.includes('atuação') || lowerMessage.includes('especialidade')) {
      addBotMessage("Atuamos principalmente nas áreas de Direito Civil, Trabalhista, Empresarial e Digital. Você pode encontrar mais detalhes na seção 'Áreas de Atuação' do nosso site.");
    }
    else if (lowerMessage.includes('endereço') || lowerMessage.includes('localização') || lowerMessage.includes('onde fica')) {
      addBotMessage("Nosso escritório está localizado na Rua Exemplo, 123 - Bairro, Cidade - Estado. Atendemos também de forma online para sua comodidade.");
    }
    else if (lowerMessage.includes('horário') || lowerMessage.includes('atendimento') || lowerMessage.includes('expediente')) {
      addBotMessage("Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Agendamentos podem ser feitos pelo telefone ou formulário de contato.");
    }
    else {
      addBotMessage("Não consegui entender completamente sua pergunta. Você pode reformular ou entrar em contato diretamente pelo telefone (00) 00000-0000 ou pelo formulário de contato.");
    }
  };

  return (
    <div className="chatbot-container">
      {/* Botão para abrir/fechar o chatbot */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat com assistente virtual"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment"></i>
        )}
      </button>
      
      {/* Janela do chatbot */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Assistente Virtual</h3>
          <button 
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar chat"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.type}`}
            >
              {message.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua mensagem..."
            aria-label="Mensagem para o assistente virtual"
          />
          <button type="submit" aria-label="Enviar mensagem">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
```

Crie o arquivo `src/components/Chatbot/Chatbot.css`:

```css
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chatbot-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
  transition: background-color 0.3s, transform 0.3s;
}

.chatbot-toggle:hover {
  background-color: var(--primary-color);
  transform: scale(1.05);
}

.chatbot-toggle i {
  font-size: 1.5rem;
}

.chatbot-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 0.3s;
  opacity: 0;
}

.chatbot-window.open {
  transform: scale(1);
  opacity: 1;
}

.chatbot-header {
  background-color: var(--primary-color);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
}

.chatbot-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 18px;
  line-height: 1.4;
  word-wrap: break-word;
}

.message.bot {
  background-color: #f1f0f0;
  color: #333;
  align-self: flex-start;
  border-bottom-left-radius: 5px;
}

.message.user {
  background-color: var(--secondary-color);
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 5px;
}

.message.typing {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #999;
  border-radius: 50%;
  animation: bounce 1.5s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

.chatbot-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
}

.chatbot-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
}

.chatbot-input button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatbot-input button:hover {
  background-color: var(--primary-color);
}

@media (max-width: 576px) {
  .chatbot-window {
    width: 300px;
    height: 400px;
    bottom: 70px;
    right: 0;
  }
  
  .chatbot-toggle {
    width: 50px;
    height: 50px;
  }
}
```

Agora, adicione o componente Chatbot ao App.js:

```javascript
// Em src/App.js, adicione o import:
import Chatbot from './components/Chatbot/Chatbot';

// E adicione o componente dentro da função App, antes do fechamento da div com className="app":
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            {/* ... rotas existentes ... */}
          </Routes>
        </main>
        <Footer />
        <Chatbot /> {/* Adicione esta linha */}
      </div>
    </Router>
  );
}
```

## 7. Otimização e Performance

Para otimizar a performance do site, vamos adicionar algumas técnicas:

### Lazy Loading de Componentes

Modifique o arquivo `src/App.js` para usar lazy loading:

```javascript
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes carregados imediatamente
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

// Lazy loading para páginas
const Home = lazy(() => import('./pages/Home/Home'));
const Sobre = lazy(() => import('./pages/Sobre/Sobre'));
const AreasAtuacao = lazy(() => import('./pages/AreasAtuacao/AreasAtuacao'));
const AreaDetalhe = lazy(() => import('./pages/AreasAtuacao/AreaDetalhe'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const ArtigoDetalhe = lazy(() => import('./pages/Blog/ArtigoDetalhe'));
const Contato = lazy(() => import('./pages/Contato/Contato'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));

// Componente de loading
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
    <p>Carregando...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/areas-atuacao" element={<AreasAtuacao />} />
              <Route path="/areas-atuacao/:area" element={<AreaDetalhe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<ArtigoDetalhe />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
```

Adicione os estilos para o componente de loading no arquivo `src/index.css`:

```css
/* Adicione ao final do arquivo index.css */

/* Loading Fallback */
.loading-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(52, 152, 219, 0.2);
  border-radius: 50%;
  border-top-color: var(--secondary-color);
  animation: spin 1s ease-in-out infinite;
  margin-bottom: var(--spacing-sm);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### Otimização de Imagens

Crie um componente para carregar imagens de forma otimizada:

```bash
mkdir -p src/components/UI
touch src/components/UI/OptimizedImage.js
```

Adicione o seguinte código ao arquivo `src/components/UI/OptimizedImage.js`:

```javascript
import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = 'lazy',
  placeholderColor = '#f0f0f0'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const placeholderStyle = {
    backgroundColor: placeholderColor,
    width: width || '100%',
    height: height || '100%',
    display: isLoaded ? 'none' : 'block'
  };

  return (
    <div className={`optimized-image-container ${className || ''}`} style={{ position: 'relative' }}>
      {!isLoaded && !error && (
        <div className="image-placeholder" style={placeholderStyle}></div>
      )}
      
      {error ? (
        <div className="image-error" style={{ 
          width: width || '100%', 
          height: height || '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '1rem'
        }}>
          <span>Imagem não disponível</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            display: isLoaded ? 'block' : 'none',
            width: width || '100%',
            height: height || 'auto',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
```

## 8. Testes e Depuração

Para facilitar a depuração, vamos criar um componente de erro:

```bash
touch src/components/UI/ErrorBoundary.js
```

Adicione o seguinte código ao arquivo `src/components/UI/ErrorBoundary.js`:

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização mostre a UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatório de erros
    console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return (
        <div className="error-boundary">
          <h2>Algo deu errado.</h2>
          <p>Ocorreu um erro ao carregar este componente. Por favor, tente novamente mais tarde.</p>
          {this.props.showDetails && this.state.error && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>Detalhes do erro</summary>
              {this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )}
          <button 
            onClick={() => window.location.reload()}
            className="error-reload-button"
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Adicione os estilos para o ErrorBoundary no arquivo `src/index.css`:

```css
/* Adicione ao final do arquivo index.css */

/* Error Boundary */
.error-boundary {
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) auto;
  max-width: 800px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
  text-align: center;
}

.error-boundary h2 {
  color: #721c24;
  margin-bottom: var(--spacing-sm);
}

.error-boundary details {
  margin: var(--spacing-md) 0;
  text-align: left;
  background-color: #fff;
  padding: var(--spacing-sm);
  border-radius: 4px;
}

.error-boundary summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.error-reload-button {
  background-color: #721c24;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-top: var(--spacing-sm);
}

.error-reload-button:hover {
  background-color: #5a171d;
}
```

Agora, envolva o App com o ErrorBoundary no arquivo `src/index.js`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/UI/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

## Conclusão

Neste tutorial, desenvolvemos o frontend de um site de advocacia moderno e responsivo usando JavaScript e React. Implementamos os principais componentes, páginas e funcionalidades interativas seguindo as tendências de design para 2025.

Os próximos passos incluem:

1. Desenvolvimento do backend com Node.js
2. Configuração do banco de dados MySQL
3. Integração entre frontend e backend
4. Implementação de funcionalidades específicas para sites de advocacia

No próximo tutorial, vamos abordar a configuração do banco de dados MySQL e o desenvolvimento do backend para o site de advocacia.
