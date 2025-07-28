import json
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from datetime import datetime

URL = 'https://home-point.com.ar/mayorista'
RECARGO_USD = 1.20  # 20% de recargo

# Configurar Selenium
options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options=options)
driver.get(URL)

# Esperar a que se cargue el contenido
time.sleep(10)

soup = BeautifulSoup(driver.page_source, 'html.parser')
driver.quit()

productos = []
cotizacion_dolar = 0

# Obtener cotización del dólar
for strong in soup.find_all("strong"):
    if "Dólar" in strong.text:
        try:
            cotizacion_dolar = float(strong.text.split("$")[1].replace(",", ".").strip())
        except:
            cotizacion_dolar = 0
        break

# Extraer productos
for card in soup.select('.card-product'):
    nombre = card.select_one('.card-title')
    codigo = card.select_one('.product-code')
    imagen = card.select_one('img')
    estado = card.select_one('.stock-label')
    precio_dolar = card.select_one('.price')

    if not all([nombre, codigo, imagen, estado, precio_dolar]):
        continue

    try:
        precio_usd = float(precio_dolar.text.replace("USD", "").strip().replace(",", "."))
        precio_usd *= RECARGO_USD  # Aplicar recargo del 20%
        precio_ars = round(precio_usd * cotizacion_dolar, 2)
    except:
        continue

    estado_texto = estado.text.strip()
    if "Disponible" in estado_texto:
        estado_icono = "🟢"
    elif "Pocas Unidades" in estado_texto:
        estado_icono = "🟡"
    else:
        estado_icono = "🔴"

    productos.append({
        'nombre': nombre.text.strip(),
        'codigo': codigo.text.strip(),
        'imagen': imagen['src'],
        'estado': estado_icono,
        'precio_usd': round(precio_usd, 2),
        'precio_ars': precio_ars
    })

# Guardar archivo productos.json
with open('productos.json', 'w', encoding='utf-8') as f:
    json.dump(productos, f, ensure_ascii=False, indent=4)

print(f"Se guardaron {len(productos)} productos con recargo del 20%.")
