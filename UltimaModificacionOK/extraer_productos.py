import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Ruta local al chromedriver (ajustala a tu path)
chrome_driver_path = 'C:/Users/smanai/catalogo-mayorista/chromedriver.exe'

options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")

service = Service(executable_path=chrome_driver_path)
driver = webdriver.Chrome(service=service, options=options)

url_base = 'https://home-point.com.ar/mayorista'
driver.get(url_base)

todos_los_productos = []
pagina_actual = 1

def esperar_estado_valido(producto):
    def estado_valido(driver):
        try:
            estado_span = producto.find_element(By.CSS_SELECTOR, 'div.stock-info span')
            texto = estado_span.text.strip()
            if texto != '' and texto != '⚠':
                return estado_span
            return False
        except:
            return False
    return WebDriverWait(driver, 10).until(estado_valido)

while True:
    print(f"Procesando página {pagina_actual}...")

    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, 'card'))
        )
        productos = driver.find_elements(By.CLASS_NAME, 'card')

        print(f"  → Productos encontrados en esta página: {len(productos)}")

        for i in range(len(productos)):
            try:
                productos = driver.find_elements(By.CLASS_NAME, 'card')
                producto = productos[i]

                codigo = producto.find_element(By.CSS_SELECTOR, 'input[type="hidden"]').get_attribute('value').strip()
                nombre = producto.find_element(By.TAG_NAME, 'h3').text.strip()
                imagen_url = producto.find_element(By.TAG_NAME, 'img').get_attribute('src').strip()

                estado_span = esperar_estado_valido(producto)
                estado_texto = estado_span.text.strip().lower()

                if "sin stock" in estado_texto or "✗" in estado_texto:
                    estado = "Sin Stock"
                elif "pocas unidades" in estado_texto or "⚠ pocas unidades" in estado_texto:
                    estado = "Pocas Unidades"
                elif "disponible" in estado_texto or "✓" in estado_texto:
                    estado = "Disponible"
                else:
                    estado = "Desconocido"

                print(f"Estado raw detectado: '{estado_texto}' → Interpretado como: '{estado}'")

                p_tags = producto.find_elements(By.TAG_NAME, 'p')
                precio_usd = None
                precio_ars = None
                for p in p_tags:
                    strong_text = p.find_element(By.TAG_NAME, 'strong').text.strip()
                    if 'Valor $' in strong_text:
                        precio_ars_raw = p.text.replace('Valor $', '').strip()
                        # Convertir a float sin recargo
                        precio_ars_num = float(precio_ars_raw.replace('$', '').replace('.', '').replace(',', '.'))
                        # Formatear con símbolo $ y coma decimal sin modificar valor
                        precio_ars = f"${precio_ars_num:,.2f}".replace(',', 'X').replace('.', ',').replace('X', '.')
                        # Guardar solo precio_ars, sin precio_usd ni recargo


                todos_los_productos.append({
                    'codigo': codigo,
                    'nombre': nombre,
                    'imagen_url': imagen_url,
                    'estado': estado,
                    'precio_usd': precio_usd,
                    'precio_ars': precio_ars,
                })

            except Exception as e:
                print(f"  [!] Error procesando un producto índice {i}: {e}")
                continue

        boton_siguiente = driver.find_elements(By.XPATH, '//button[text()="Siguiente"]')
        if boton_siguiente:
            driver.execute_script("arguments[0].click();", boton_siguiente[0])
            time.sleep(3)
            pagina_actual += 1
        else:
            print("No hay más páginas.")
            break

    except Exception as e:
        print(f"[!] Error procesando la página {pagina_actual}: {e}")
        break

driver.quit()

with open("productos.json", "w", encoding="utf-8") as archivo_json:
    json.dump(todos_los_productos, archivo_json, indent=4, ensure_ascii=False)

print(f"\n✅ Total productos extraídos: {len(todos_los_productos)}")
