# Publication du dépôt sur GitHub + GitHub Pages (dossier site/)
# Prérequis : GitHub CLI — gh auth login

$ErrorActionPreference = "Stop"
$RepoRoot = $PSScriptRoot
Set-Location $RepoRoot

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI (gh) introuvable. Installez-le : winget install GitHub.cli"
}

$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Connexion GitHub requise. Suivez les instructions :"
    gh auth login -h github.com -p https -w
}

$defaultName = "azur-elec-depannage"
$repoName = Read-Host "Nom du dépôt GitHub [$defaultName]"
if ([string]::IsNullOrWhiteSpace($repoName)) { $repoName = $defaultName }

$public = Read-Host "Dépôt public ? (O/n) [O]"
$isPublic = ($public -eq "" -or $public -match "^[oOyY]")

$visibility = if ($isPublic) { "--public" } else { "--private" }

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "Création du dépôt GitHub et liaison..."
    gh repo create $repoName $visibility --source=. --remote=origin --push
} else {
    Write-Host "Remote origin déjà configuré : $remote"
    git push -u origin main
}

Write-Host ""
Write-Host "Étapes sur github.com :"
Write-Host "  1. Ouvrir le dépôt → Settings → Pages"
Write-Host "  2. Source : GitHub Actions (le workflow .github/workflows/pages.yml déploie site/)"
Write-Host "  3. Après le premier workflow réussi, l'URL sera affichée dans Settings → Pages"
Write-Host ""
Write-Host "Terminé."
