@echo off
setlocal

echo ======================================
echo INICIO DE ACTUALIZACION DE CATALOGO
echo ======================================
echo.

echo [1/6] Ejecutando script de extraccion...
python extraer_productos.py
if errorlevel 1 (
    echo ERROR: Fallo la extraccion de productos.
    pause
    exit /b 1
)

echo.
echo [2/6] Generando archivo productos.js...
python generar_productos.py
if errorlevel 1 (
    echo ERROR: Fallo la generacion de productos.js.
    pause
    exit /b 1
)

echo.
echo [3/6] Asegurando CNAME en el commit (si existe localmente)...
if exist CNAME (
    git add CNAME
)

echo.
echo [4/6] Preparando el resto de los archivos para git...
git add .

echo.
echo [5/6] Haciendo commit con mensaje con fecha...
set "FECHA=%date:~6,4%-%date:~3,2%-%date:~0,2%_%time:~0,2%-%time:~3,2%-%time:~6,2%"
git -c user.name="Sebastian" -c user.email="manai_sebastian@hotmail.com" commit -m "Actualizacion diaria automatica %FECHA%" 2>nul

echo.
echo [6/6] Subiendo a GitHub (force push si es necesario)...
git push -f origin main
if errorlevel 1 (
    echo ERROR: Fallo el push a GitHub.
    pause
    exit /b 1
)

echo.
echo ======================================
echo ACTUALIZACION FINALIZADA CON EXITO!
echo ======================================
pause
endlocal







