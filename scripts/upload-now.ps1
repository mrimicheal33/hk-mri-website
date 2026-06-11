# Run after completing GitHub login at https://github.com/login/device
$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$website = Split-Path $PSScriptRoot -Parent
Set-Location $website

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please login first: gh auth login -h github.com -p https -w"
    exit 1
}

$repoName = if ($args[0]) { $args[0] } else { "hk-mri-website" }

git add -A
$status = git status --porcelain
if ($status) {
    git -c user.name="HK MRI Instrument" -c user.email="noreply@users.noreply.github.com" commit -m "Add GitHub upload scripts"
}

git branch -M main

if (git remote get-url origin 2>$null) {
    git push -u origin main
} else {
    gh repo create $repoName --private --source=. --remote=origin --push
}

Write-Host ""
Write-Host "Uploaded successfully!"
gh repo view --json url -q .url
