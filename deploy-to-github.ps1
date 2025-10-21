# GitHub Portfolio Deployment Script
# Run this script after you create your GitHub repository

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio GitHub Deployment Helper" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Username cannot be empty!" -ForegroundColor Red
    exit 1
}

# Get repository name (with default)
Write-Host ""
$repoName = Read-Host "Enter repository name (press Enter for 'portfolio')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio"
}

Write-Host ""
Write-Host "Configuration:" -ForegroundColor Yellow
Write-Host "  Username: $username" -ForegroundColor White
Write-Host "  Repository: $repoName" -ForegroundColor White
Write-Host "  Remote URL: https://github.com/$username/$repoName.git" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Is this correct? (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Setup cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Step 1: Checking git repository..." -ForegroundColor Cyan

# Check if we're in a git repository
$gitCheck = git rev-parse --git-dir 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Git repository found" -ForegroundColor Green

Write-Host ""
Write-Host "Step 2: Removing old remote (if exists)..." -ForegroundColor Cyan
git remote remove origin 2>$null
Write-Host "✓ Ready to add new remote" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Adding GitHub remote..." -ForegroundColor Cyan
git remote add origin "https://github.com/$username/$repoName.git"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote added successfully" -ForegroundColor Green
} else {
    Write-Host "Error: Failed to add remote" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 4: Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "You may be prompted to sign in to GitHub..." -ForegroundColor Yellow
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ SUCCESS! Code pushed to GitHub" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/$username/$repoName" -ForegroundColor White
    Write-Host "2. Click 'Settings' tab" -ForegroundColor White
    Write-Host "3. Click 'Pages' in left sidebar" -ForegroundColor White
    Write-Host "4. Under 'Build and deployment':" -ForegroundColor White
    Write-Host "   - Source: 'Deploy from a branch'" -ForegroundColor White
    Write-Host "   - Branch: 'main' and '/ (root)'" -ForegroundColor White
    Write-Host "   - Click 'Save'" -ForegroundColor White
    Write-Host "5. Wait 1-2 minutes for deployment" -ForegroundColor White
    Write-Host ""
    Write-Host "Your site will be live at:" -ForegroundColor Cyan
    Write-Host "https://$username.github.io/$repoName/" -ForegroundColor Green -BackgroundColor Black
    Write-Host ""
    
    # Open URLs
    $openGitHub = Read-Host "Open GitHub repository in browser? (y/n)"
    if ($openGitHub -eq "y" -or $openGitHub -eq "Y") {
        Start-Process "https://github.com/$username/$repoName"
    }
    
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Push failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "1. Repository doesn't exist yet - Create it at:" -ForegroundColor White
    Write-Host "   https://github.com/new" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "2. Authentication failed - You may need a Personal Access Token:" -ForegroundColor White
    Write-Host "   https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "3. Wrong username/repository - Run this script again" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
