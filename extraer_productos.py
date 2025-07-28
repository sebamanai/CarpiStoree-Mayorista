import json
import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

URL = "https://home-point.com.ar/mayorista"
HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

# Obtener la cotización del dólar blue desde la API de DolarHoy
def obtener_dolar_blue():
    try:
        r = requests.get("https://api.bluelytics.com.ar/v2/latest")
        data = r.json()
        return float(data["blue"]["value_sell"])
    except Exception as e:
        print(f"[!] Error al obtener cotización del dólar: {e}")
        return 0

# Traductor de estados visuales
def interpretar_estado(texto_estado):
    texto = texto_estado.lower().strip()
    if "disponible" in texto:
        return "Disponible"
    elif "pocas unidades" in texto:
        return "Pocas Unidades"
    elif "sin stock" in texto:
        return "Sin Stock"
    return "Sin Estado"

# Configurar Selenium
chrome_options = Options()
chrome_options.add_argument("--headless=new")
driver = webdriver.Chrome(options=chrome_options)
driver.get(URL)
time.sleep(5)

# Obtener HTML
html = driver.page_source
driver.quit()

soup = BeautifulSoup(html, "html.parser")
productos_html = soup.select("div.card-product")

productos = []
dolar_blue = obtener_dolar_blue()
print(f"[i] Cotización dólar blue: {dolar_blue}")

for idx, prod in enumerate(productos_html):
    try:
        nombre = prod.select_one(".product-title").text.strip()
        codigo = prod.select_one(".product-code").text.strip().replace("Código: ", "")
        imagen = prod.select_one("img")["src"]
        estado_raw = prod.select_one(".product-availability").text.strip()
        estado = interpretar_estado(estado_raw)
        precio_dolar_raw = prod.select_one(".product-price").text.strip().replace("USD", "").replace(",", ".").strip()
        precio_dolar = float(precio_dolar_raw)

        # Aplicar el 20% extra al valor en dólares
        precio_dolar_con_incremento = round(precio_dolar * 1.20, 2)

        # Convertir a pesos con el valor del dólar blue
        precio_pesos = round(precio_dolar_con_incremento * dolar_blue)

        productos.append({
            "nombre": nombre,
            "codigo": codigo,
            "imagen": imagen,
            "estado": estado,
            "precio_dolar": precio_dolar_con_incremento,
            "precio_pesos": precio_pesos
        })

    except Exception as e:
        print(f"  [!] Error procesando un producto índice {idx}: {e}")

# Guardar en JSON
with open("productos.json", "w", encoding="utf-8") as f:
    json.dump(productos, f, ensure_ascii=False, indent=2)

print(f"[✓] Se guardaron {len(productos)} productos con el 20% agregado.")
