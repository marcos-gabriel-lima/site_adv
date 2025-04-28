# Plano de Desenvolvimento: Site de Advocacia (React + Supabase)

Este documento descreve o plano para o desenvolvimento de um site completo para um advogado solo, utilizando React para o frontend e Supabase como backend (BaaS).

## 1. Visão Geral do Projeto

**Objetivo:** Criar um site profissional, moderno e funcional para um advogado solo, atendendo às tendências de 2025, com foco na captação de clientes e na disponibilização de informações relevantes.

**Público-Alvo:** Advogado solo.

**Áreas de Atuação Principais:**
*   Direito Trabalhista
*   Direito Criminal
*   Direito de Família
*   Direito Previdenciário

**Funcionalidades Essenciais:**
*   Páginas institucionais (Home, Sobre, Contato).
*   Páginas detalhadas para cada Área de Atuação.
*   Blog com artigos e categorias.
*   Formulário de Contato.
*   Sistema de Agendamento de Consultas.
*   Área de Cliente (escopo a ser detalhado).
*   Painel Administrativo (para gerenciar conteúdo e agendamentos).

## 2. Tecnologia Escolhida

*   **Frontend:** React.js
*   **Backend (BaaS):** Supabase (PostgreSQL DB, Auth, APIs, Storage, Edge Functions)
*   **Estilização:** CSS Modules / Styled Components / Tailwind CSS (a definir)
*   **Roteamento:** React Router
*   **Formulários:** Formik / React Hook Form + Yup
*   **Ambiente de Desenvolvimento:** Cursor IDE (Windows), Node.js, npm

## 3. Plano de Ação Detalhado (com Supabase)

1.  **Configuração Inicial do Projeto:**
    *   Criar a estrutura de pastas do projeto (`public`, `src`, `supabase` - para migrações/funções).
    *   Inicializar `npm` e instalar dependências: `react`, `react-dom`, `react-router-dom`, `@supabase/supabase-js`, `axios` (ou usar fetch), bibliotecas de formulário, estilização, etc.
    *   Configurar Webpack/Vite para o build do React.
    *   Criar arquivos de configuração: `.gitignore`, `.env.local` (para chaves Supabase).

2.  **Configuração do Supabase:**
    *   Criar um novo projeto no [Supabase](https://supabase.com/).
    *   Obter as credenciais da API (URL e Chave `anon`).
    *   Armazenar as credenciais de forma segura no `.env.local`.
    *   Configurar o cliente Supabase no projeto React (`src/lib/supabaseClient.js`).

3.  **Desenvolvimento do Banco de Dados (Supabase/PostgreSQL):**
    *   Adaptar o esquema SQL do `Tutorial de Banco de Dados MySQL...` para PostgreSQL.
    *   Criar as tabelas no Supabase usando o editor SQL do painel ou via Supabase Migrations (`supabase/migrations/`). Tabelas principais: `usuarios` (ou usar `auth.users` do Supabase), `categorias`, `artigos`, `contatos`, `areas_atuacao`, `depoimentos`, `agendamentos`, `faq`, `configuracoes`.
        *   **Nota:** A tabela `usuarios` pode ser substituída/integrada com o `auth.users` do Supabase para gerenciar tanto admins quanto clientes.
    *   Definir políticas de segurança RLS (Row Level Security) no Supabase para controlar o acesso aos dados.
    *   Popular o banco com dados iniciais (categorias, áreas, FAQ, etc.).

4.  **Desenvolvimento do Frontend (React):**
    *   Configurar o roteamento (`src/App.js`).
    *   Desenvolver componentes reutilizáveis (`src/components/`): Header, Footer, Formulários, Cards, Modal, etc.
    *   Criar componentes de página (`src/pages/`): Home, Sobre, AreasAtuacao (geral e detalhada), Blog (listagem e artigo), Contato, FAQ, Agendamento, Login, PainelAdmin, AreaCliente.
    *   Integrar componentes com o cliente Supabase para buscar e enviar dados (substitui a API Express dedicada).
    *   Implementar estilização seguindo o design minimalista/profissional.

5.  **Implementação da Autenticação (Supabase Auth):**
    *   Configurar provedores de autenticação no Supabase (Email/Senha, talvez Google/outros).
    *   Implementar fluxo de Login/Cadastro/Recuperação de Senha no frontend.
    *   Gerenciar sessões de usuário usando o cliente Supabase.
    *   Diferenciar usuários Administradores de Clientes (usando metadados do usuário ou tabela separada de perfis/roles).

6.  **Implementação das Funcionalidades:**
    *   **Formulário de Contato:** Salvar dados na tabela `contatos` via cliente Supabase. Opcionalmente, usar uma Edge Function para enviar notificação por email.
    *   **Agendamentos:** Criar interface para visualização de horários disponíveis e solicitação. Salvar na tabela `agendamentos`. Usar Edge Functions para lógica complexa (verificação de disponibilidade, confirmações por email).
    *   **Blog:** Buscar artigos/categorias do Supabase. Interface para visualização.
    *   **Áreas de Atuação:** Buscar dados da tabela `areas_atuacao`.
    *   **Painel Admin:** Criar interface (rotas protegidas) para CRUD de Artigos, Categorias, Depoimentos (aprovação), Agendamentos (visualização/status), Contatos (visualização/status), FAQ, Configurações.
    *   **Área Cliente:** (Escopo a definir) Implementar funcionalidades como visualização de agendamentos, perfil, etc., com base nos dados do usuário logado.

7.  **Testes:**
    *   Adicionar testes unitários para componentes e funções utilitárias.
    *   Considerar testes de integração para fluxos críticos (agendamento, contato, login).

8.  **Finalização e Documentação:**
    *   Revisão de código, linting, formatação.
    *   Atualizar `README.md` com instruções de setup e execução (incluindo configuração do Supabase).
    *   Otimização de performance (code splitting, lazy loading).
    *   Considerações sobre implantação (Vercel, Netlify, etc., que funcionam bem com React/Supabase).

## 4. Referências Principais

*   `Tendências para Sites de Advocacia em 2025.md`: Guia de design e features.
*   `Estrutura do Site de Advocacia para Advogado Solo.md`: Arquitetura geral das páginas e seções.
*   `Conteúdo para Áreas Específicas de Advocacia.md`: Textos base para as áreas de atuação, FAQ e exemplos.
*   `Tutorial de Banco de Dados MySQL para Site de Advocacia.md`: Base para o esquema de banco de dados (adaptar para PostgreSQL/Supabase).
*   `Tutorial de Desenvolvimento Frontend com JavaScript.md`: Orientações gerais de frontend (adaptar para Supabase).
*   `Guia de Configuração do Ambiente de Desenvolvimento.md`: Base para setup inicial (substituir MySQL por Supabase).

## 5. Próximos Passos Imediatos

1.  Responder às perguntas esclarecedoras pendentes (principalmente sobre a Área do Cliente).
2.  Iniciar a configuração do projeto Supabase.
3.  Começar a adaptação do esquema do banco de dados e criação das tabelas no Supabase.
4.  Configurar a estrutura inicial do projeto React. 