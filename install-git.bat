@echo off
echo ========================================
echo Installing Git for Windows
echo ========================================
echo.

echo Downloading Git installer...
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe' -OutFile '%TEMP%\GitInstaller.exe'"

echo.
echo Starting Git installation...
echo Please follow the installer prompts (use default settings)
echo.

start /wait %TEMP%\GitInstaller.exe

echo.
echo Git installation complete!
echo Please close this window and open a NEW command prompt to use Git.
echo.
pause
