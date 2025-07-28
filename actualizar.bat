@echo off
echo ======================================
echo INICIO DE ACTUALIZACION DE CATALOGO
echo ======================================
echo.

echo Ejecutando script de extraccion...
python extraer_productos.py
if errorlevel 1 (
    echo ERROR: Fallo la extraccion de productos.
    pause
    exit /b 1
)

echo.
echo Generando archivo productos.js...
python generar_productos.py
if errorlevel 1 (
    echo ERROR: Fallo la generacion de productos.js.
    pause
    exit /b 1
)

echo.
echo Preparando archivos para git...
git add .

echo.
echo Haciendo commit...
git commit -m "Actualizacion diaria automatica"

echo.
echo Subiendo a GitHub...
git push

echo.
echo ======================================
echo ACTUALIZACION FINALIZADA CON EXITO!
echo ======================================
pause
