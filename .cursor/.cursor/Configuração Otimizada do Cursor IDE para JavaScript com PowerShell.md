# Configuração Otimizada do Cursor IDE para JavaScript com PowerShell

Este guia apresenta uma configuração otimizada do Cursor IDE para desenvolvimento JavaScript no Windows, com foco especial na resolução de problemas de compatibilidade com o PowerShell, como o operador `&&` que não funciona corretamente.

## 1. Configuração Básica do Cursor IDE

### Extensões Essenciais para JavaScript

Para otimizar o desenvolvimento JavaScript no Cursor IDE, instale as seguintes extensões:

- **ESLint** - Necessário para as capacidades de correção de lint com IA do Cursor
- **JavaScript and TypeScript Language Features** - Suporte aprimorado de linguagem e IntelliSense
- **Path Intellisense** - Autocompletar inteligente para caminhos de arquivos

### Configurações Recomendadas

Ajuste as seguintes configurações para melhorar sua experiência:

1. Abra as configurações do Cursor IDE (Ctrl+,)
2. Ative a opção "Iterate on Lints" para correção automática de erros de lint
3. Configure o formatador de código para JavaScript (Prettier é recomendado)
4. Ative o salvamento automático para evitar perda de código

## 2. Resolução do Problema com Operador && no PowerShell

O problema principal relatado é que o PowerShell não aceita o operador `&&` para encadear comandos, o que causa erros frequentes quando o Cursor IDE gera comandos para o terminal.

### Solução: Arquivo de Regras do Projeto

Crie um arquivo de regras do projeto para instruir o Cursor IDE a usar a sintaxe correta do PowerShell:

1. Crie um arquivo chamado `.cursorrules` na raiz do seu projeto
2. Adicione as seguintes regras:

```
# Windows PowerShell Command Rules
# Este arquivo garante que todos os comandos shell sejam compatíveis com o Windows PowerShell

## Substituições de Comandos
Ao sugerir comandos shell, use estes equivalentes do PowerShell:
- Use ponto e vírgula (;) em vez de && para encadear comandos
- Use -and em vez de && para operações lógicas
- Use -or em vez de || para operações lógicas

## Convenções de Caminho
- Use separadores de caminho no estilo Windows (barras invertidas)
- Converta barras para barras invertidas em caminhos
- Use ponto e vírgula (;) para separadores de caminho em variáveis de ambiente

## Variáveis de Ambiente
- Sempre use o prefixo $env: para variáveis de ambiente
- Exemplo: $env:PATH, não $PATH

## Operações de Arquivo
- Use caminhos no estilo Windows
- Use os cmdlets apropriados do PowerShell para operações de arquivo
- Garanta o tratamento adequado de erros com blocos try/catch do PowerShell

## Execução de Script
- Use npm run para scripts npm
- Use yarn para comandos yarn
- Use pnpm para comandos pnpm

## Aplica-se a
*.ps1
*.psm1
*.psd1
infra/**/*
scripts/**/*
```

### Configuração do Terminal no Cursor IDE

Para melhorar a compatibilidade com o PowerShell:

1. Abra as configurações do Cursor IDE
2. Navegue até Terminal > Integrated > Shell: Windows
3. Defina como `powershell.exe` ou `pwsh.exe` (PowerShell Core)
4. Adicione a seguinte configuração para melhorar a experiência do terminal:

```json
"terminal.integrated.profiles.windows": {
  "PowerShell": {
    "source": "PowerShell",
    "icon": "terminal-powershell",
    "args": ["-NoLogo", "-NoExit"]
  }
},
"terminal.integrated.defaultProfile.windows": "PowerShell"
```

## 3. Comandos Alternativos para PowerShell

Quando precisar encadear comandos no PowerShell através do Cursor IDE, use estas alternativas ao operador `&&`:

### Método 1: Usar ponto e vírgula (;)

```powershell
# Em vez de:
comando1 && comando2

# Use:
comando1; comando2
```

### Método 2: Usar operador -and com blocos de script

```powershell
# Para execução condicional (equivalente a &&):
if ((comando1) -and (comando2)) { Write-Output "Ambos os comandos foram bem-sucedidos" }
```

### Método 3: Função personalizada para execução sequencial

Adicione esta função ao seu perfil do PowerShell para simular o comportamento do `&&`:

```powershell
function Invoke-CommandSequence {
    param (
        [scriptblock[]]$Commands
    )
    
    foreach ($cmd in $Commands) {
        $prevErr = $Error.Count
        & $cmd
        if ($Error.Count -gt $prevErr) {
            Write-Error "Comando falhou, interrompendo sequência."
            return $false
        }
    }
    return $true
}

# Uso:
Invoke-CommandSequence { comando1 }, { comando2 }
```

## 4. Configurações Adicionais para JavaScript

Para otimizar ainda mais o desenvolvimento JavaScript:

### Recursos do Cursor para JavaScript

- **Tab Completions**: Completar código com consciência de contexto
- **Automatic Imports**: Tab pode importar bibliotecas automaticamente
- **Inline Editing**: Use CMD+K (ou Ctrl+K) em qualquer linha para editar com sintaxe perfeita
- **Composer Guidance**: Planeje e edite seu código em vários arquivos com o Composer

### Suporte a Frameworks

O Cursor IDE funciona perfeitamente com todos os principais frameworks JavaScript:

- **React & Next.js**: Suporte completo a JSX/TSX
- **Vue.js**: Suporte à sintaxe de template
- **Angular**: Validação de template e suporte a decoradores TypeScript
- **Svelte**: Destaque de sintaxe de componentes e completions inteligentes

### Configuração de @Docs para Documentação Personalizada

Para melhorar as sugestões de código, adicione fontes de documentação personalizadas:

1. Abra o painel de comandos (Ctrl+Shift+P)
2. Digite "@docs" e selecione "Add Documentation Source"
3. Adicione documentação do MDN, Node.js ou seu framework favorito
