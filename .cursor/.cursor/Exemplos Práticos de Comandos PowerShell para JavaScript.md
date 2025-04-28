# Exemplos Práticos de Comandos PowerShell para JavaScript

Este documento complementa o guia principal de configuração do Cursor IDE, fornecendo exemplos práticos de comandos PowerShell para desenvolvimento JavaScript.

## Comandos Básicos para Projetos JavaScript

### Iniciar um Novo Projeto

```powershell
# Em vez de:
mkdir meu-projeto && cd meu-projeto && npm init -y

# Use:
New-Item -ItemType Directory -Path meu-projeto; Set-Location meu-projeto; npm init -y
```

### Instalar Dependências

```powershell
# Em vez de:
npm install express && npm install dotenv --save-dev

# Use:
npm install express; npm install dotenv --save-dev

# Ou melhor ainda:
npm install express dotenv --save-dev
```

### Executar Scripts

```powershell
# Em vez de:
npm run build && npm run start

# Use:
npm run build; npm run start

# Ou para execução condicional (apenas inicia se a build for bem-sucedida):
npm run build; if ($LASTEXITCODE -eq 0) { npm run start }
```

## Comandos para Gerenciamento de Arquivos

### Criar Estrutura de Diretórios

```powershell
# Em vez de:
mkdir src && mkdir src/components && mkdir src/pages

# Use:
New-Item -ItemType Directory -Path src, src/components, src/pages -Force
```

### Copiar Arquivos

```powershell
# Em vez de:
cp -r template/* . && rm -rf template

# Use:
Copy-Item -Path template/* -Destination . -Recurse; Remove-Item -Path template -Recurse -Force
```

### Buscar em Arquivos

```powershell
# Em vez de:
grep "console.log" src/*.js

# Use:
Select-String -Pattern "console.log" -Path src/*.js
```

## Comandos para Git

### Commit e Push

```powershell
# Em vez de:
git add . && git commit -m "Mensagem" && git push

# Use:
git add .; git commit -m "Mensagem"; git push
```

### Criar e Mudar para Nova Branch

```powershell
# Em vez de:
git checkout -b feature/nova-funcionalidade && git push -u origin feature/nova-funcionalidade

# Use:
git checkout -b feature/nova-funcionalidade; git push -u origin feature/nova-funcionalidade
```

## Comandos para Ambiente de Desenvolvimento

### Iniciar Servidor de Desenvolvimento

```powershell
# Em vez de:
npm run build && npm run dev

# Use:
npm run build; if ($LASTEXITCODE -eq 0) { npm run dev }
```

### Limpar e Reinstalar Dependências

```powershell
# Em vez de:
rm -rf node_modules && rm package-lock.json && npm install

# Use:
Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue; 
Remove-Item -Path package-lock.json -Force -ErrorAction SilentlyContinue; 
npm install
```

## Funções PowerShell Úteis para Desenvolvimento JavaScript

### Função para Criar Componente React

```powershell
function New-ReactComponent {
    param (
        [Parameter(Mandatory=$true)]
        [string]$ComponentName,
        
        [Parameter(Mandatory=$false)]
        [string]$Directory = "src/components"
    )
    
    $componentPath = Join-Path -Path $Directory -ChildPath $ComponentName
    
    # Criar diretório do componente
    New-Item -ItemType Directory -Path $componentPath -Force | Out-Null
    
    # Criar arquivo do componente
    $componentContent = @"
import React from 'react';
import './$ComponentName.css';

const $ComponentName = (props) => {
    return (
        <div className="$ComponentName.toLowerCase()">
            <h1>$ComponentName Component</h1>
        </div>
    );
};

export default $ComponentName;
"@
    
    # Criar arquivo CSS
    $cssContent = @"
.$($ComponentName.ToLower()) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
"@
    
    # Criar arquivo index para exportação
    $indexContent = @"
export { default } from './$ComponentName';
"@
    
    # Escrever arquivos
    Set-Content -Path "$componentPath/$ComponentName.jsx" -Value $componentContent
    Set-Content -Path "$componentPath/$ComponentName.css" -Value $cssContent
    Set-Content -Path "$componentPath/index.js" -Value $indexContent
    
    Write-Output "Componente $ComponentName criado com sucesso em $componentPath"
}

# Uso:
# New-ReactComponent -ComponentName "Button"
```

### Função para Executar Comandos em Sequência

```powershell
function Invoke-CommandSequence {
    param (
        [Parameter(Mandatory=$true)]
        [scriptblock[]]$Commands
    )
    
    $success = $true
    
    foreach ($cmd in $Commands) {
        Write-Host "Executando: $cmd" -ForegroundColor Cyan
        
        try {
            & $cmd
            if ($LASTEXITCODE -ne 0) {
                Write-Host "Comando falhou com código de saída $LASTEXITCODE" -ForegroundColor Red
                $success = $false
                break
            }
        }
        catch {
            Write-Host "Erro ao executar comando: $_" -ForegroundColor Red
            $success = $false
            break
        }
    }
    
    if ($success) {
        Write-Host "Todos os comandos foram executados com sucesso!" -ForegroundColor Green
    }
    else {
        Write-Host "Sequência de comandos interrompida devido a erro." -ForegroundColor Red
    }
    
    return $success
}

# Uso:
# Invoke-CommandSequence { npm run lint }, { npm run test }, { npm run build }
```

Estas funções podem ser adicionadas ao seu perfil do PowerShell para estarem sempre disponíveis. Para editar seu perfil, execute:

```powershell
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
notepad $PROFILE
```

Adicione as funções ao arquivo e salve. Da próxima vez que abrir o PowerShell, as funções estarão disponíveis.
