@echo off
echo ========================================
echo GitHub Setup and Push Script
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please run install-git.bat first
    echo.
    pause
    exit /b 1
)

echo Git is installed! Version:
git --version
echo.

REM Get user input
set /p USERNAME="Enter your GitHub username: "
set /p EMAIL="Enter your GitHub email: "
set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "

echo.
echo ========================================
echo Configuring Git...
echo ========================================

REM Configure Git
git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

echo Git configured successfully!
echo Username: %USERNAME%
echo Email: %EMAIL%
echo.

echo ========================================
echo Initializing Repository...
echo ========================================

REM Initialize Git repository if not already initialized
if not exist .git (
    git init
    echo Repository initialized!
) else (
    echo Repository already initialized!
)

echo.
echo ========================================
echo Adding files...
echo ========================================

REM Add all files
git add .
echo All files added!

echo.
echo ========================================
echo Committing changes...
echo ========================================

REM Commit with detailed message
git commit -m "feat: implement scroll-linked animations for all sections" -m "- Added scroll-linked animations to Hero, About, Projects, Typography, Contact, and Footer" -m "- Implemented smooth playback animations (forward/reverse on scroll)" -m "- Separated scroll and hover animations to prevent conflicts" -m "- Updated Navbar with smooth scroll (no routing)" -m "- Applied pure black and white theme across all components" -m "- Fixed scroll indicator positioning in Hero" -m "- Created documentation for scroll-linked animations"

echo Changes committed!

echo.
echo ========================================
echo Adding remote repository...
echo ========================================

REM Remove existing remote if any
git remote remove origin >nul 2>&1

REM Add remote
git remote add origin %REPO_URL%
echo Remote repository added!

echo.
echo ========================================
echo Pushing to GitHub...
echo ========================================

REM Get current branch name
for /f "tokens=*" %%i in ('git branch --show-current') do set BRANCH=%%i

REM If no branch, create main
if "%BRANCH%"=="" (
    git branch -M main
    set BRANCH=main
)

echo Current branch: %BRANCH%
echo.

REM Push to GitHub
echo Pushing to GitHub...
echo You may need to enter your GitHub credentials or token
echo.

git push -u origin %BRANCH%

if errorlevel 1 (
    echo.
    echo ========================================
    echo PUSH FAILED!
    echo ========================================
    echo.
    echo Possible reasons:
    echo 1. Wrong repository URL
    echo 2. No permission to push
    echo 3. Need to authenticate with GitHub
    echo.
    echo For authentication, you may need to:
    echo - Use GitHub Personal Access Token instead of password
    echo - Or use SSH key
    echo.
    echo To create a Personal Access Token:
    echo 1. Go to GitHub.com
    echo 2. Settings ^> Developer settings ^> Personal access tokens ^> Tokens (classic)
    echo 3. Generate new token with 'repo' scope
    echo 4. Use token as password when prompted
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS!
echo ========================================
echo.
echo Your code has been pushed to GitHub!
echo Repository: %REPO_URL%
echo Branch: %BRANCH%
echo.
pause
