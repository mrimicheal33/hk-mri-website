# Refresh PATH so gh/git work in new terminals, then start GitHub login.
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI not found. Install with: winget install GitHub.cli"
    exit 1
}

Write-Host "Opening GitHub device login..."
Write-Host "Copy the code shown below into: https://github.com/login/device"
Write-Host ""
gh auth login -h github.com -p https -w

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Login OK. Run upload:"
    Write-Host "  .\scripts\upload-now.ps1"
}
