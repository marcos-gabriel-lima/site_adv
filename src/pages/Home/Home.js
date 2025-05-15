import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import FormContato from '../../components/FormContato/FormContato';
import AreasCard from '../../components/AreasCard/AreasCard';
import DiferencialItem from '../../components/DiferencialItem/DiferencialItem';
import './Home.css';

// TODO: Substituir pela imagem real ou importar de forma otimizada
const heroBackground = '/images/hero-background-placeholder.jpg'; // Caminho de placeholder

const Home = () => {
  // Dados simulados para áreas de atuação
  // TODO: Buscar esses dados da API posteriormente
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
  // TODO: Buscar esses dados da API posteriormente
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

  // Dados para os diferenciais
  const diferenciais = [
    {
      icon: 'fas fa-user-tie',
      title: 'Atendimento Personalizado',
      text: 'Cada cliente recebe atenção individualizada, com estratégias específicas para seu caso.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Expertise Jurídica',
      text: 'Profissionais altamente qualificados e constantemente atualizados com as mudanças legislativas.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Comunicação Clara',
      text: 'Mantemos você informado sobre cada etapa do processo com linguagem acessível.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Resultados Comprovados',
      text: 'Histórico de sucesso em casos complexos e alta taxa de satisfação dos clientes.'
    }
  ];

  // Renderiza estrelas de avaliação
  const RenderEstrelas = ({ quantidade }) => {
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <i 
          key={i} 
          className={i < quantidade ? 'fas fa-star' : 'far fa-star'} // Usa ícones preenchidos ou vazios
          aria-hidden="true" // Esconde de leitores de tela (informação visual)
        ></i>
      );
    }
    // Adiciona texto alternativo para leitores de tela
    return <span role="img" aria-label={`Avaliação: ${quantidade} de 5 estrelas`}>{estrelas}</span>;
  };

  return (
    <div className="home-page">
      <Hero 
        title="Advocacia Especializada com Foco em Resultados"
        subtitle="Soluções jurídicas personalizadas para proteger seus direitos e interesses com excelência e dedicação."
        buttonText="Agende uma Consulta"
        buttonLink="/contato"
        backgroundImage={heroBackground} // Passa a imagem de fundo
      />

      {/* Seção Sobre */}
      <section className="section sobre-section">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              {/* Usar h2 para títulos de seção */}
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
              {/* TODO: Usar componente OptimizedImage com imagem real do advogado */}
              <div className="image-placeholder" aria-label="Espaço reservado para imagem do advogado">
                <i className="fas fa-user-tie" aria-hidden="true"></i> 
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
            {/* Mapeia os dados e renderiza o componente AreasCard */}
            {areasAtuacao.map(area => (
              <AreasCard 
                key={area.id} 
                id={area.id} 
                titulo={area.titulo} 
                descricao={area.descricao} 
                icone={area.icone} 
              />
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
            {/* Mapeia os dados e renderiza o componente DiferencialItem */}
            {diferenciais.map((item, index) => (
              <DiferencialItem 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                text={item.text} 
              />
            ))}
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
              // Idealmente, este card seria um componente reutilizável (ex: DepoimentoCard)
              <div className="depoimento-card" key={depoimento.id}> 
                <div className="depoimento-rating">
                  <RenderEstrelas quantidade={depoimento.avaliacao} />
                </div>
                <blockquote className="depoimento-texto"> {/* Usar blockquote para citações */} 
                  <p>"{depoimento.texto}"</p>
                </blockquote>
                <footer className="depoimento-autor"> {/* Usar footer para a fonte da citação */} 
                  <cite>- {depoimento.nome}</cite>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 