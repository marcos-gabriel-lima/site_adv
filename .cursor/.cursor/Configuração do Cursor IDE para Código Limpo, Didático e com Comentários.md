# Configuração do Cursor IDE para Código Limpo, Didático e com Comentários

Este guia complementar apresenta configurações e práticas para garantir que seu código JavaScript no Cursor IDE seja limpo, didático e com comentários adequados, além de configurar a análise automática de código.

## 1. Configuração de Regras para Código Limpo

### Arquivo .cursorrules para Código Limpo

Crie um arquivo `.cursorrules` na raiz do seu projeto com as seguintes configurações para garantir código limpo e didático:

```
# Regras para Código Limpo e Didático no JavaScript

## Estilo de Código
- Use nomes de variáveis descritivos e significativos
- Prefira const sobre let quando o valor não for alterado
- Evite variáveis globais
- Limite o tamanho das funções a no máximo 20 linhas
- Use camelCase para variáveis e funções
- Use PascalCase para classes e componentes
- Use UPPER_SNAKE_CASE para constantes

## Comentários e Documentação
- Adicione comentários explicativos para lógica complexa
- Use JSDoc para documentar funções e classes
- Evite comentários óbvios que apenas repetem o código
- Mantenha comentários atualizados com o código
- Use comentários de bloco para documentação de funções
- Adicione comentários de TODO para melhorias futuras

## Organização do Código
- Agrupe código relacionado em módulos
- Organize imports em ordem alfabética
- Separe o código em funções pequenas e específicas
- Use espaçamento consistente para melhorar a legibilidade

## Boas Práticas
- Evite aninhamento excessivo (máximo 3 níveis)
- Use destructuring para extrair propriedades de objetos
- Prefira métodos de array (map, filter, reduce) sobre loops
- Trate erros adequadamente com try/catch
- Use async/await para código assíncrono
- Evite duplicação de código (princípio DRY)
```

## 2. Configuração de Extensões para Análise de Código

Instale e configure as seguintes extensões no Cursor IDE para análise automática de código:

### ESLint

1. Instale a extensão ESLint no Cursor IDE
2. Crie um arquivo `.eslintrc.js` na raiz do projeto:

```javascript
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // Regras para garantir código limpo
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-alert": "warn",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-const": "warn",
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs"],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "eol-last": ["warn", "always"],
    "func-call-spacing": ["warn", "never"],
    "indent": ["warn", 2],
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["warn", { "before": true, "after": true }],
    "max-len": ["warn", { "code": 100 }],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
    "object-curly-spacing": ["warn", "always"],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    
    // Regras para comentários
    "spaced-comment": ["warn", "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
      }
    }],
    "capitalized-comments": ["warn", "always", {
      "ignoreConsecutiveComments": true
    }]
  }
}
```

### Prettier

1. Instale a extensão Prettier no Cursor IDE
2. Crie um arquivo `.prettierrc` na raiz do projeto:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```

3. Configure o Cursor IDE para formatar o código automaticamente ao salvar

## 3. Padrões de Comentários para Código Didático

### Comentários de Função com JSDoc

Use JSDoc para documentar funções de forma clara e didática:

```javascript
/**
 * Calcula o total de uma compra com desconto aplicado.
 *
 * @param {number} valorTotal - O valor total da compra
 * @param {number} percentualDesconto - O percentual de desconto (0-100)
 * @returns {number} O valor final após aplicação do desconto
 * 
 * @example
 * // Retorna 90
 * calcularDesconto(100, 10);
 */
function calcularDesconto(valorTotal, percentualDesconto) {
  // Validação de entrada
  if (valorTotal < 0 || percentualDesconto < 0 || percentualDesconto > 100) {
    throw new Error('Valores inválidos');
  }
  
  // Cálculo do desconto
  const valorDesconto = valorTotal * (percentualDesconto / 100);
  
  // Retorna o valor com desconto aplicado
  return valorTotal - valorDesconto;
}
```

### Comentários de Bloco para Seções de Código

Use comentários de bloco para separar seções lógicas do código:

```javascript
// ===================================
// CONFIGURAÇÃO INICIAL DA APLICAÇÃO
// ===================================
const config = {
  apiUrl: 'https://api.exemplo.com',
  timeout: 5000,
  retries: 3,
};

// ===================================
// FUNÇÕES DE MANIPULAÇÃO DE DADOS
// ===================================
function processarDados(dados) {
  // Implementação...
}
```

### Comentários Inline para Explicações Pontuais

Use comentários inline para explicar partes específicas do código:

```javascript
function calcularMedia(notas) {
  // Filtra valores inválidos (null, undefined, NaN)
  const notasValidas = notas.filter(nota => nota !== null && nota !== undefined && !isNaN(nota));
  
  // Verifica se há notas válidas para evitar divisão por zero
  if (notasValidas.length === 0) return 0;
  
  // Soma todas as notas usando reduce
  const soma = notasValidas.reduce((acumulador, nota) => acumulador + nota, 0);
  
  // Calcula a média dividindo a soma pelo número de notas
  return soma / notasValidas.length;
}
```

## 4. Configuração do Cursor IDE para Análise Automática

### Configuração para Análise Automática de Código

1. Abra as configurações do Cursor IDE (Ctrl+,)
2. Ative a opção "Iterate on Lints" para correção automática de erros de lint
3. Configure o Cursor para analisar o código automaticamente:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.run": "onSave",
  "editor.suggestSelection": "first",
  "editor.snippetSuggestions": "top"
}
```

## 5. Regras Específicas para o Cursor AI

Adicione estas regras ao seu arquivo `.cursorrules` para instruir o Cursor AI a gerar código limpo e bem comentado:

```
## Regras para Geração de Código com Cursor AI

- Sempre adicione comentários JSDoc para funções
- Explique a lógica complexa com comentários inline
- Divida funções grandes em funções menores e mais específicas
- Use nomes descritivos para variáveis e funções
- Prefira const sobre let quando o valor não for alterado
- Use destructuring para extrair propriedades de objetos
- Prefira métodos de array (map, filter, reduce) sobre loops
- Use async/await para código assíncrono
- Trate erros adequadamente com try/catch
- Evite aninhamento excessivo (máximo 3 níveis)
- Evite duplicação de código (princípio DRY)
- Adicione exemplos de uso em comentários para funções complexas
- Organize imports em ordem alfabética
- Use espaçamento consistente para melhorar a legibilidade
```

## 6. Exemplos de Código Limpo e Didático

### Exemplo 1: Função com Comentários Adequados

```javascript
/**
 * Filtra uma lista de usuários com base em critérios específicos.
 *
 * @param {Array} usuarios - Lista de objetos de usuário
 * @param {Object} filtros - Critérios de filtro
 * @param {number} [filtros.idadeMinima] - Idade mínima para filtro
 * @param {string} [filtros.cidade] - Cidade para filtro
 * @param {boolean} [filtros.ativo] - Status de atividade para filtro
 * @returns {Array} Lista de usuários filtrados
 * 
 * @example
 * const usuarios = [
 *   { nome: 'João', idade: 25, cidade: 'São Paulo', ativo: true },
 *   { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro', ativo: false }
 * ];
 * 
 * // Retorna apenas usuários de São Paulo com mais de 20 anos
 * filtrarUsuarios(usuarios, { idadeMinima: 20, cidade: 'São Paulo' });
 */
function filtrarUsuarios(usuarios, filtros = {}) {
  // Extrai os filtros usando destructuring com valores padrão
  const { idadeMinima = 0, cidade = null, ativo = null } = filtros;
  
  // Aplica os filtros usando o método filter
  return usuarios.filter(usuario => {
    // Verifica idade mínima
    const passouIdade = usuario.idade >= idadeMinima;
    
    // Verifica cidade (se especificada)
    const passouCidade = cidade === null || usuario.cidade === cidade;
    
    // Verifica status de atividade (se especificado)
    const passouAtivo = ativo === null || usuario.ativo === ativo;
    
    // Retorna true apenas se passou em todos os filtros
    return passouIdade && passouCidade && passouAtivo;
  });
}
```

### Exemplo 2: Código Assíncrono Limpo

```javascript
/**
 * Busca dados de usuários da API e processa os resultados.
 *
 * @param {string} endpoint - Endpoint da API para buscar os dados
 * @param {Object} [opcoes] - Opções adicionais para a requisição
 * @returns {Promise<Array>} Lista de usuários processados
 * @throws {Error} Se a requisição falhar
 */
async function buscarEProcessarUsuarios(endpoint, opcoes = {}) {
  try {
    // Configura os parâmetros da requisição
    const params = new URLSearchParams(opcoes.params || {});
    const url = `${endpoint}?${params}`;
    
    // Realiza a requisição à API
    const resposta = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...opcoes.headers,
      },
    });
    
    // Verifica se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
    }
    
    // Converte a resposta para JSON
    const dados = await resposta.json();
    
    // Processa os dados recebidos
    return processarDadosUsuarios(dados);
  } catch (erro) {
    console.error('Erro ao buscar usuários:', erro);
    throw erro;
  }
}

/**
 * Processa os dados brutos de usuários da API.
 *
 * @param {Object} dadosBrutos - Dados brutos da API
 * @returns {Array} Lista de usuários processados
 * @private
 */
function processarDadosUsuarios(dadosBrutos) {
  // Verifica se os dados contêm a propriedade esperada
  if (!dadosBrutos.usuarios || !Array.isArray(dadosBrutos.usuarios)) {
    return [];
  }
  
  // Mapeia e transforma os dados para o formato desejado
  return dadosBrutos.usuarios.map(usuario => ({
    id: usuario.id,
    nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
    email: usuario.email.toLowerCase(),
    idade: calcularIdade(usuario.dataNascimento),
    ativo: usuario.status === 'ativo',
  }));
}

/**
 * Calcula a idade com base na data de nascimento.
 *
 * @param {string} dataNascimento - Data de nascimento no formato YYYY-MM-DD
 * @returns {number} Idade calculada
 * @private
 */
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  
  // Ajusta a idade se ainda não fez aniversário no ano corrente
  if (mesNascimento > mesAtual || 
      (mesNascimento === mesAtual && nascimento.getDate() > hoje.getDate())) {
    idade--;
  }
  
  return idade;
}
```

## 7. Dicas para Manter Código Limpo no Dia a Dia

1. **Revise seu código regularmente**: Dedique tempo para revisar e refatorar seu código
2. **Use formatação automática**: Configure o Cursor IDE para formatar o código automaticamente ao salvar
3. **Execute o linter frequentemente**: Verifique e corrija problemas de lint regularmente
4. **Refatore gradualmente**: Melhore o código aos poucos, não tente refatorar tudo de uma vez
5. **Mantenha funções pequenas**: Divida funções grandes em funções menores e mais específicas
6. **Evite comentários óbvios**: Comentários devem explicar o "porquê", não o "o quê"
7. **Atualize comentários**: Mantenha os comentários atualizados quando o código mudar
8. **Use nomes descritivos**: Escolha nomes que expliquem o propósito da variável ou função
9. **Siga um estilo consistente**: Mantenha o mesmo estilo de código em todo o projeto
10. **Teste seu código**: Escreva testes para garantir que o código funcione como esperado

Seguindo estas configurações e práticas, você garantirá que seu código JavaScript no Cursor IDE seja limpo, didático, bem comentado e fácil de manter.
