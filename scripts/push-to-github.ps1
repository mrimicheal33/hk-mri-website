# One-time setup: run `gh auth login` first, then run this script.
$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$website = Split-Path $PSScriptRoot -Parent
Set-Location $website

$repoName = if ($args[0]) { $args[0] } else { "hk-mri-website" }
$visibility = if ($args[1] -eq "public") { "--public" } else { "--private" }

gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in to GitHub. Run this first:"
    Write-Host "  gh auth login"
    exit 1
}

if (-not (Test-Path ".git")) {
    git init
    git add .
    git commit -m "Initial commit: HK MRI Instrument website"
}

$hasRemote = git remote get-url origin 2>$null
if (-not $hasRemote) {
    gh repo create $repoName $visibility --source=. --remote=origin --push
} else {
    git branch -M main 2>$null
    git push -u origin main
}

Write-Host ""
Write-Host "Done. Repository:"
gh repo view --web 2>$null
