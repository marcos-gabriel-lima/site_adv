# Guia de Configuração do Ambiente de Desenvolvimento

Este guia fornece instruções passo a passo para configurar o ambiente de desenvolvimento necessário para criar um site de advocacia moderno usando JavaScript e MySQL no Cursor IDE no Windows.

## Requisitos do Sistema

Antes de começar, certifique-se de que seu sistema atende aos seguintes requisitos:

- Windows 10 ou 11 (64 bits)
- Mínimo de 8GB de RAM (16GB recomendado)
- Pelo menos 10GB de espaço livre em disco
- Conexão com a internet

## 1. Instalação do Cursor IDE

O Cursor IDE é uma ferramenta moderna baseada no VS Code com recursos avançados de IA que facilitam o desenvolvimento.

### Passo a Passo para Instalação

1. **Baixe o Cursor IDE**:
   - Acesse o site oficial: [https://cursor.sh/](https://cursor.sh/)
   - Clique no botão "Download" para Windows
   - Aguarde o download do arquivo de instalação

2. **Instale o Cursor IDE**:
   - Execute o arquivo baixado (geralmente `CursorSetup-x.x.x.exe`)
   - Siga as instruções do instalador
   - Mantenha as opções padrão recomendadas
   - Conclua a instalação e inicie o Cursor IDE

3. **Configuração Inicial**:
   - Na primeira execução, você pode ser solicitado a fazer login ou criar uma conta
   - Siga as instruções na tela para configuração inicial
   - Familiarize-se com a interface, que é semelhante ao VS Code

## 2. Instalação do Node.js e npm

Node.js é necessário para executar JavaScript no servidor e o npm (Node Package Manager) para gerenciar as dependências do projeto.

### Passo a Passo para Instalação

1. **Baixe o Node.js**:
   - Acesse [https://nodejs.org/](https://nodejs.org/)
   - Baixe a versão LTS (Long Term Support) recomendada para Windows
   - A versão LTS é mais estável para desenvolvimento de aplicações

2. **Instale o Node.js**:
   - Execute o arquivo baixado (ex: `node-v18.x.x-x64.msi`)
   - Siga as instruções do instalador
   - Marque a opção para instalar as ferramentas necessárias automaticamente
   - Conclua a instalação

3. **Verifique a Instalação**:
   - Abra o Prompt de Comando (CMD) ou PowerShell
   - Digite os seguintes comandos para verificar se a instalação foi bem-sucedida:
     ```
     node --version
     npm --version
     ```
   - Você deverá ver as versões instaladas exibidas no terminal

## 3. Instalação do MySQL

MySQL é o sistema de gerenciamento de banco de dados que usaremos para armazenar informações do site.

### Passo a Passo para Instalação

1. **Baixe o MySQL Installer**:
   - Acesse [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
   - Baixe o "MySQL Installer for Windows"
   - Escolha a versão completa para ter acesso a todas as ferramentas

2. **Execute o Instalador**:
   - Inicie o arquivo baixado
   - Escolha a opção "Custom" para personalizar a instalação
   - Selecione os seguintes componentes:
     - MySQL Server
     - MySQL Workbench
     - MySQL Shell
     - Conectores (ODBC, J, .NET)
   - Clique em "Next" para prosseguir

3. **Configure o MySQL Server**:
   - Mantenha as configurações padrão para o servidor
   - Defina uma senha forte para o usuário root e anote-a
   - Configure o MySQL como um serviço do Windows
   - Conclua a instalação

4. **Verifique a Instalação**:
   - Abra o MySQL Workbench
   - Conecte-se à instância local usando as credenciais configuradas
   - Se a conexão for bem-sucedida, o MySQL está instalado corretamente

## 4. Configuração do Projeto no Cursor IDE

Agora vamos configurar o ambiente de projeto no Cursor IDE.

### Passo a Passo para Configuração

1. **Crie uma Pasta para o Projeto**:
   - Escolha um local em seu computador para o projeto
   - Crie uma pasta com um nome descritivo (ex: `site-advocacia`)

2. **Abra o Projeto no Cursor IDE**:
   - Abra o Cursor IDE
   - Selecione "File" > "Open Folder"
   - Navegue até a pasta criada e selecione-a
   - O Cursor IDE abrirá a pasta como um projeto

3. **Inicialize o Projeto Node.js**:
   - Abra o terminal integrado no Cursor IDE (Menu: Terminal > New Terminal)
   - Execute o comando:
     ```
     npm init -y
     ```
   - Isso criará um arquivo `package.json` básico para o projeto

4. **Estrutura de Pastas Inicial**:
   - No terminal, crie a estrutura básica de pastas com os seguintes comandos:
     ```
     mkdir public
     mkdir public/css
     mkdir public/js
     mkdir public/images
     mkdir src
     mkdir src/components
     mkdir src/pages
     mkdir src/services
     mkdir server
     mkdir database
     ```

## 5. Instalação de Dependências Essenciais

Vamos instalar as principais bibliotecas e frameworks necessários para o desenvolvimento.

### Frontend (React)

```bash
npm install react react-dom react-router-dom
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin
npm install css-loader style-loader file-loader
npm install --save-dev eslint eslint-plugin-react
```

### Backend (Express.js)

```bash
npm install express cors body-parser mysql2 dotenv
npm install --save-dev nodemon
```

### Utilitários

```bash
npm install axios formik yup
npm install gsap # Para animações
npm install bcrypt jsonwebtoken # Para autenticação
```

## 6. Configuração do Banco de Dados

Vamos configurar o banco de dados MySQL para o projeto.

### Passo a Passo para Configuração

1. **Abra o MySQL Workbench**:
   - Conecte-se à instância local do MySQL

2. **Crie um Novo Banco de Dados**:
   - Execute o seguinte comando SQL:
     ```sql
     CREATE DATABASE site_advocacia;
     USE site_advocacia;
     ```

3. **Crie um Usuário para a Aplicação**:
   - Execute os seguintes comandos SQL:
     ```sql
     CREATE USER 'adv_user'@'localhost' IDENTIFIED BY 'senha_segura';
     GRANT ALL PRIVILEGES ON site_advocacia.* TO 'adv_user'@'localhost';
     FLUSH PRIVILEGES;
     ```
   - Substitua 'senha_segura' por uma senha forte

4. **Crie as Tabelas Iniciais**:
   - Execute os seguintes comandos SQL:
     ```sql
     -- Tabela de contatos
     CREATE TABLE contatos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       telefone VARCHAR(20),
       mensagem TEXT NOT NULL,
       data_contato TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     -- Tabela de artigos do blog
     CREATE TABLE artigos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       titulo VARCHAR(200) NOT NULL,
       conteudo TEXT NOT NULL,
       resumo VARCHAR(500),
       imagem_capa VARCHAR(255),
       data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       categoria VARCHAR(50)
     );

     -- Tabela de depoimentos
     CREATE TABLE depoimentos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome_cliente VARCHAR(100) NOT NULL,
       depoimento TEXT NOT NULL,
       avaliacao INT,
       aprovado BOOLEAN DEFAULT FALSE,
       data_depoimento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     -- Tabela de agendamentos
     CREATE TABLE agendamentos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome_cliente VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       telefone VARCHAR(20) NOT NULL,
       data_hora DATETIME NOT NULL,
       assunto VARCHAR(200),
       observacoes TEXT,
       status VARCHAR(20) DEFAULT 'pendente',
       data_solicitacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     -- Tabela de usuários (admin)
     CREATE TABLE usuarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL UNIQUE,
       senha VARCHAR(255) NOT NULL,
       cargo VARCHAR(50),
       data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

## 7. Configuração de Arquivos Iniciais

Vamos criar alguns arquivos de configuração essenciais para o projeto.

### Arquivo .env

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
# Configurações do Servidor
PORT=3000
NODE_ENV=development

# Configurações do Banco de Dados
DB_HOST=localhost
DB_USER=adv_user
DB_PASS=senha_segura
DB_NAME=site_advocacia

# Configurações de JWT (para autenticação)
JWT_SECRET=sua_chave_secreta_muito_segura
JWT_EXPIRES_IN=7d
```

### Arquivo .gitignore

Crie um arquivo `.gitignore` na raiz do projeto:

```
# Dependências
node_modules/
npm-debug.log
yarn-error.log
yarn-debug.log

# Ambiente
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Produção
/build
/dist

# Diversos
.DS_Store
.idea/
.vscode/
*.log
logs/
coverage/
```

### Arquivo webpack.config.js

Crie um arquivo `webpack.config.js` na raiz do projeto:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true
  }
};
```

## 8. Configuração de Scripts no package.json

Atualize o arquivo `package.json` para incluir scripts úteis:

```json
"scripts": {
  "start": "node server/index.js",
  "server": "nodemon server/index.js",
  "client": "webpack serve --mode development --open",
  "build": "webpack --mode production",
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

## 9. Instalação de Ferramentas Adicionais

### Extensões Recomendadas para o Cursor IDE

Instale as seguintes extensões no Cursor IDE para melhorar sua produtividade:

1. **ESLint**: Para linting de código JavaScript
2. **Prettier**: Para formatação de código
3. **JavaScript (ES6) code snippets**: Para snippets de código
4. **MySQL**: Para suporte ao MySQL
5. **React Developer Tools**: Para depuração de componentes React
6. **Live Server**: Para visualização em tempo real de alterações HTML/CSS

Para instalar extensões no Cursor IDE:
- Clique no ícone de extensões na barra lateral (ou pressione Ctrl+Shift+X)
- Pesquise pelo nome da extensão
- Clique em "Install"

## 10. Verificação Final do Ambiente

Para garantir que tudo está configurado corretamente:

1. **Teste o Node.js e npm**:
   ```bash
   node --version
   npm --version
   ```

2. **Teste a Conexão com o Banco de Dados**:
   Crie um arquivo `test-db.js` na raiz do projeto:
   ```javascript
   const mysql = require('mysql2/promise');
   require('dotenv').config();

   async function testConnection() {
     try {
       const connection = await mysql.createConnection({
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: process.env.DB_NAME
       });
       
       console.log('Conexão com o banco de dados estabelecida com sucesso!');
       await connection.end();
     } catch (error) {
       console.error('Erro ao conectar ao banco de dados:', error);
     }
   }

   testConnection();
   ```

   Execute o teste com:
   ```bash
   node test-db.js
   ```

3. **Teste o Ambiente de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Isso deve iniciar tanto o servidor backend quanto o frontend em modo de desenvolvimento.

## Próximos Passos

Com o ambiente configurado, você está pronto para começar o desenvolvimento do site de advocacia. Os próximos tutoriais abordarão:

1. Desenvolvimento do Frontend com JavaScript/React
2. Configuração do Banco de Dados MySQL
3. Integração entre Frontend e Backend
4. Implementação de funcionalidades específicas para sites de advocacia

Siga para o próximo tutorial para começar a desenvolver o frontend do seu site de advocacia.
