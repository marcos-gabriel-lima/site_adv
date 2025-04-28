# Perfil PowerShell para Desenvolvimento JavaScript

# Configuração de ambiente
$env:NODE_ENV = "development"

# Aliases úteis para desenvolvimento JavaScript
Set-Alias -Name npi -Value "npm install"
Set-Alias -Name npid -Value "npm install --save-dev"
Set-Alias -Name npr -Value "npm run"
Set-Alias -Name nps -Value "npm start"
Set-Alias -Name npb -Value "npm run build"
Set-Alias -Name npt -Value "npm test"

# Função para criar um novo projeto JavaScript
function New-JSProject {
    param (
        [Parameter(Mandatory=$true)]
        [string]$ProjectName,
        
        [Parameter(Mandatory=$false)]
        [ValidateSet("vanilla", "react", "vue", "next")]
        [string]$Template = "vanilla"
    )
    
    switch ($Template) {
        "vanilla" {
            New-Item -ItemType Directory -Path $ProjectName -Force
            Set-Location $ProjectName
            npm init -y
            npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
            Write-Output "Projeto JavaScript vanilla criado com sucesso!"
        }
        "react" {
            npx create-react-app $ProjectName
            Set-Location $ProjectName
            Write-Output "Projeto React criado com sucesso!"
        }
        "vue" {
            npx @vue/cli create $ProjectName
            Set-Location $ProjectName
            Write-Output "Projeto Vue criado com sucesso!"
        }
        "next" {
            npx create-next-app $ProjectName
            Set-Location $ProjectName
            Write-Output "Projeto Next.js criado com sucesso!"
        }
    }
}

# Função para executar comandos em sequência (alternativa ao &&)
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

# Função para limpar e reinstalar node_modules
function Reset-NodeModules {
    Write-Host "Removendo node_modules e package-lock.json..." -ForegroundColor Yellow
    Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path package-lock.json -Force -ErrorAction SilentlyContinue
    
    Write-Host "Reinstalando dependências..." -ForegroundColor Yellow
    npm install
    
    Write-Host "Dependências reinstaladas com sucesso!" -ForegroundColor Green
}

# Função para iniciar servidor de desenvolvimento
function Start-DevServer {
    param (
        [Parameter(Mandatory=$false)]
        [string]$Script = "start"
    )
    
    if (Test-Path -Path "package.json") {
        npm run $Script
    }
    else {
        Write-Error "Arquivo package.json não encontrado no diretório atual."
    }
}

# Mensagem de boas-vindas
Write-Host "Perfil PowerShell para desenvolvimento JavaScript carregado!" -ForegroundColor Green
Write-Host "Comandos disponíveis: New-JSProject, Invoke-CommandSequence, Reset-NodeModules, Start-DevServer" -ForegroundColor Cyan
Write-Host "Aliases: npi (npm install), npid (npm install --save-dev), npr (npm run), nps (npm start), npb (npm run build), npt (npm test)" -ForegroundColor Cyan

# Exportar funções
Export-ModuleMember -Function New-JSProject, Invoke-CommandSequence, Reset-NodeModules, Start-DevServer -Alias npi, npid, npr, nps, npb, npt
