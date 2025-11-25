@echo off
echo ========================================
echo EASY GITHUB PUSH - Interactive Setup
echo ========================================
echo.

REM Check Git
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git not installed!
    echo Please run install-git.bat first
    pause
    exit /b 1
)

echo Step 1: Configure Git
echo ========================================
echo.

set /p USERNAME="Your GitHub username: "
set /p EMAIL="Your GitHub email: "

git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

echo.
echo Git configured!
echo.

echo Step 2: Repository Information
echo ========================================
echo.
echo Please provide your repository URL
echo Example: https://github.com/username/repo.git
echo.

set /p REPO_URL="Repository URL: "

echo.
echo Step 3: Initialize and Commit
echo ========================================
echo.

REM Initialize if needed
if not exist .git (
    git init
    echo Repository initialized
)

REM Add all files
git add .
echo Files added

REM Commit
git commit -m "feat: portfolio with scroll-linked animations" -m "Complete portfolio website with modern animations"
echo Changes committed

echo.
echo Step 4: Connect to GitHub
echo ========================================
echo.

REM Remove old remote
git remote remove origin >nul 2>&1

REM Add new remote
git remote add origin %REPO_URL%
echo Remote added

REM Get branch
for /f "tokens=*" %%i in ('git branch --show-current') do set BRANCH=%%i
if "%BRANCH%"=="" (
    git branch -M main
    set BRANCH=main
)

echo.
echo Step 5: Push to GitHub
echo ========================================
echo.
echo IMPORTANT: You will need to authenticate
echo.
echo Choose authentication method:
echo 1. Personal Access Token (Recommended)
echo 2. GitHub Account (Browser)
echo.

set /p AUTH_METHOD="Enter 1 or 2: "

if "%AUTH_METHOD%"=="2" (
    echo.
    echo Opening browser for authentication...
    echo Please login to GitHub in the browser
    echo.
    
    REM Try GitHub CLI auth
    gh auth login
    
    if errorlevel 1 (
        echo.
        echo GitHub CLI not available
        echo Please use Personal Access Token instead
        echo.
        goto TOKEN_AUTH
    )
    
    echo.
    echo Pushing with GitHub CLI...
    gh repo set-default %REPO_URL%
    git push -u origin %BRANCH%
    
) else (
    :TOKEN_AUTH
    echo.
    echo ========================================
    echo Personal Access Token Setup
    echo ========================================
    echo.
    echo 1. Go to: https://github.com/settings/tokens
    echo 2. Click "Generate new token" (classic)
    echo 3. Select scope: repo (all checkboxes under repo)
    echo 4. Click "Generate token"
    echo 5. COPY the token
    echo.
    echo Press any key when you have your token ready...
    pause >nul
    
    echo.
    echo Now pushing to GitHub...
    echo When prompted for password, PASTE YOUR TOKEN
    echo.
    
    git push -u origin %BRANCH%
)

if errorlevel 1 (
    echo.
    echo ========================================
    echo PUSH FAILED
    echo ========================================
    echo.
    echo Troubleshooting:
    echo - Check repository URL
    echo - Verify token has correct permissions
    echo - Make sure repository exists on GitHub
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! 🎉
echo ========================================
echo.
echo Your code is now on GitHub!
echo Repository: %REPO_URL%
echo.
echo Next steps:
echo 1. Visit your repository on GitHub
echo 2. Deploy to Vercel or Netlify
echo 3. Share your portfolio!
echo.
pause
