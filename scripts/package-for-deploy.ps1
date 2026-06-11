# Creates a zip archive ready to upload to GitHub (excludes heavy/generated folders).
$ErrorActionPreference = "Stop"

$website = Split-Path $PSScriptRoot -Parent
$outDir = Join-Path $website "dist"
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$zipPath = Join-Path $outDir "hk-mri-website-$stamp.zip"

New-Item -ItemType Directory -Path $outDir -Force | Out-Null

$excludeDirs = @("node_modules", ".next", ".vercel", "dist", ".git")
$temp = Join-Path $env:TEMP "hk-mri-website-pack-$stamp"
if (Test-Path $temp) { Remove-Item $temp -Recurse -Force }
New-Item -ItemType Directory -Path $temp | Out-Null

Get-ChildItem -Path $website -Force | Where-Object { $_.Name -notin $excludeDirs } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination (Join-Path $temp $_.Name) -Recurse -Force
}

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $temp "*") -DestinationPath $zipPath -CompressionLevel Optimal
Remove-Item $temp -Recurse -Force

$sizeMb = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host ""
Write-Host "Deploy package created:"
Write-Host "  $zipPath"
Write-Host "  Size: ${sizeMb} MB"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Create a new GitHub repository"
Write-Host "  2. Unzip and push contents to the repo root"
Write-Host "  3. Import the repo at https://vercel.com/new"
