import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação de componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importação de páginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import AreasAtuacao from './pages/AreasAtuacao/AreasAtuacao';
import Contato from './pages/Contato/Contato';
import Faq from './pages/Faq/Faq';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Rota principal para a Home */}
            <Route path="/" element={<Home />} /> 
            
            {/* Outras rotas virão aqui */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/areas-atuacao" element={<AreasAtuacao />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />

            {/* Rota de fallback (404) - pode ser criada depois */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 