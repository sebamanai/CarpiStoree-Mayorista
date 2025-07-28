import json

# Cargar productos desde productos.json
with open("productos.json", "r", encoding="utf-8") as archivo:
    productos = json.load(archivo)

# Generar JavaScript con los productos
with open("productos.js", "w", encoding="utf-8") as archivo_js:
    archivo_js.write("const productos = [\n")
    for producto in productos:
        nombre = producto.get("nombre", "NOMBRE NO DISPONIBLE")
        codigo = producto.get("codigo", "CODIGO NO DISPONIBLE")
        imagen = producto.get("imagen_url", "")  # aquí es imagen_url
        estado = producto.get("estado", "Desconocido")
        precio_usd = producto.get("precio_usd", "0")
        precio_ars = producto.get("precio_ars", "0")

        # Asignar color y etiqueta según estado
        estado_lower = estado.lower()
        if "poca" in estado_lower:
            color = "#ffeb3b"  # amarillo
            label = "⚠ Pocas unidades"
        elif "sin" in estado_lower:
            color = "#f44336"  # rojo
            label = "❌ Sin stock"
        else:
            color = "#4caf50"  # verde
            label = "✔ Disponible"

        archivo_js.write("  {\n")
        archivo_js.write(f"    nombre: `{nombre}`,\n")
        archivo_js.write(f"    codigo: `{codigo}`,\n")
        archivo_js.write(f"    imagen: `{imagen}`,\n")
        archivo_js.write(f"    estado: `{estado}`,\n")
        archivo_js.write(f"    color: `{color}`,\n")
        archivo_js.write(f"    etiqueta: `{label}`,\n")
        archivo_js.write(f"    precio_usd: `{precio_usd}`,\n")
        archivo_js.write(f"    precio_ars: `{precio_ars}`\n")
        archivo_js.write("  },\n")
    archivo_js.write("];\n")
