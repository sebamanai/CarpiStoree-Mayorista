         // Función para parsear precio correcto desde JSON
        function parsearPrecioAR(p) {
        // Quitar signo $ y espacios
        let raw = p.precio_ars.toString().replace("$", "").trim();
        // Reemplazar coma decimal por punto
        raw = raw.replace(",", ".");
        // Convertir a float
        let precioBase = parseFloat(raw);
        // Multiplicar por 1000 para pasar a entero pesos
        precioBase = precioBase * 1000;
        if (isNaN(precioBase)) {
            console.warn(`Precio inválido: ${p.precio_ars}`);
        return NaN;
        }
        return precioBase;
}


        // Función que calcula el precio final con incremento según rangos
        function calcularPrecioFinalDesdeP(p) {
          let precioBase = parsearPrecioAR(p);

          if (isNaN(precioBase)) {
            return {
              precioFinal: "Error",
              precioFinalEntero: "Error",
            };
          }

          let incremento;

          if (precioBase <= 10000) {
            incremento = 3000;
          } else if (precioBase <= 20000) {
            incremento = 4000;
          } else if (precioBase <= 30000) {
            incremento = 5000;
          } else if (precioBase <= 45000) {
            incremento = 7000;
          } else if (precioBase <= 100000) {
            incremento = 10000;
          } else if (precioBase <= 150000) {
            incremento = 20000;
          } else if (precioBase <= 250000) {
            incremento = 25000;
          } else if (precioBase <= 300000) {
            incremento = 30000;
          } else if (precioBase <= 350000) {
            incremento = 35000;
          } else if (precioBase <= 400000) {
            return {
              precioFinal: "Consultar",
              precioFinalEntero: "Consultar",
            };
          } else {
            incremento = 0;
          }

          const precioFinal = precioBase + incremento;
          const precioFinalEntero = Math.round(precioFinal);

          return {
            precioFinal,
            precioFinalEntero,
          };
        }

        const productosPorPagina = 30;
        let productosFiltrados = [...productos];
        let paginaActual = 1;

        const grid = document.getElementById('productos');
        const paginacion = document.getElementById('paginacion');
        const buscador = document.getElementById('buscador');

        // Carrito y botón
        const botonCarrito = document.getElementById('boton-carrito');
        const carrito = document.getElementById('carrito');
        const itemsCarrito = document.getElementById('items-carrito');
        const totalCarrito = document.getElementById('total-carrito');
        const enviarPedidoBtn = document.getElementById('enviar-pedido');

        // Inputs datos usuario
        const inputNombre = document.getElementById('nombre');
        const inputApellido = document.getElementById('apellido');
        const inputDNI = document.getElementById('dni');

        // Carrito: estructura { codigo: { producto, cantidad } }
        const carritoCompras = {};

        // Mostrar productos con selección por clic
        function mostrarProductos(pagina = 1) {
            grid.innerHTML = "";

            const inicio = (pagina - 1) * productosPorPagina;
            const fin = inicio + productosPorPagina;
            const productosAMostrar = productosFiltrados.slice(inicio, fin);

            productosAMostrar.forEach((p) => {
                const div = document.createElement("div");
                div.className = "producto";
                div.style.setProperty("--color", p.color);

                const resultado = calcularPrecioFinalDesdeP(p);

                let textoPrecio;

                if (resultado.precioFinal === "Consultar" || resultado.precioFinal === "Error") {
                  textoPrecio = resultado.precioFinal;
                } else {
                  textoPrecio = "$" + resultado.precioFinalEntero.toLocaleString("es-AR");
                }

                div.innerHTML = `
                    <div class="etiqueta-estado">${p.etiqueta}</div>
                    <img src="${p.imagen}" alt="${p.nombre}" />
                    <h2>${p.nombre}</h2>
                    <p><strong>Código:</strong> ${p.codigo}</p>
                    <p><strong>Precio ARS:</strong> ${textoPrecio}</p>
                `;

                // Aquí agregamos el evento solo a la imagen:
                const imgProducto = div.querySelector('img');
                imgProducto.addEventListener('click', (e) => {
                e.stopPropagation(); // Para que el click no afecte al div padre
                abrirImagen(p.imagen, p.nombre); // Abrir imagen en overlay
                });


                div.addEventListener("click", () => {
                    if (carritoCompras[p.codigo]) {
                        delete carritoCompras[p.codigo];
                        div.classList.remove("seleccionado");
                    } else {
                        carritoCompras[p.codigo] = { producto: { ...p, precio_ars: resultado.precioFinalEntero }, cantidad: 1 };
                        div.classList.add("seleccionado");
                    }
                    actualizarCarrito();
                });

                if (carritoCompras[p.codigo]) {
                    div.classList.add("seleccionado");
                }

                grid.appendChild(div);
            });

            paginaActual = pagina;
            actualizarPaginacion();
        }

        // Actualizar paginación
        function actualizarPaginacion() {
            paginacion.innerHTML = "";

            const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

            const btnAnterior = document.createElement("button");
            btnAnterior.textContent = "Anterior";
            btnAnterior.disabled = paginaActual === 1;
            btnAnterior.onclick = () => mostrarProductos(paginaActual - 1);
            paginacion.appendChild(btnAnterior);

            for (let i = 1; i <= totalPaginas; i++) {
                const btn = document.createElement("button");
                btn.textContent = i;
                if (i === paginaActual) {
                    btn.classList.add("activo");
                    btn.disabled = true;
                }
                btn.onclick = () => mostrarProductos(i);
                paginacion.appendChild(btn);
            }

            const btnSiguiente = document.createElement("button");
            btnSiguiente.textContent = "Siguiente";
            btnSiguiente.disabled = paginaActual === totalPaginas;
            btnSiguiente.onclick = () => mostrarProductos(paginaActual + 1);
            paginacion.appendChild(btnSiguiente);
        }

        // Filtrado productos
        buscador.addEventListener("input", () => {
            const termino = buscador.value.trim().toLowerCase();

            productosFiltrados = productos.filter(
                (p) =>
                    p.nombre.toLowerCase().includes(termino) ||
                    p.codigo.toLowerCase().includes(termino)
            );

            mostrarProductos(1);
        });

        // Actualizar carrito y mostrar
        function actualizarCarrito() {
            itemsCarrito.innerHTML = "";

            let total = 0;
            Object.values(carritoCompras).forEach(({ producto, cantidad }) => {
                const div = document.createElement("div");
                div.className = "item";

                const subtotal = producto.precio_ars * cantidad;
                total += subtotal;

                div.innerHTML = `
                    <span>${producto.nombre} (${producto.codigo})</span>
                    <input type="number" min="1" value="${cantidad}" />
                    <span>$${Math.round(subtotal).toLocaleString("es-AR")}</span>
                    <button title="Eliminar">✕</button>
                `;

                // Cambiar cantidad
                const inputCant = div.querySelector("input");
                inputCant.addEventListener("change", (e) => {
                    let val = parseInt(e.target.value);
                    if (isNaN(val) || val < 1) {
                        val = 1;
                        e.target.value = 1;
                    }
                    carritoCompras[producto.codigo].cantidad = val;
                    actualizarCarrito();
                });

                // Botón eliminar
                const btnEliminar = div.querySelector("button");
                btnEliminar.addEventListener("click", () => {
                    delete carritoCompras[producto.codigo];
                    const prodDiv = [...grid.children].find(
                        (child) => child.querySelector("p strong").textContent.includes(producto.codigo)
                    );
                    if (prodDiv) prodDiv.classList.remove("seleccionado");
                    actualizarCarrito();
                });

                itemsCarrito.appendChild(div);
            });

            totalCarrito.textContent = total.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }

        // Enviar pedido por WhatsApp
        enviarPedidoBtn.addEventListener("click", () => {
            const nombre = inputNombre.value.trim();
            const apellido = inputApellido.value.trim();
            const dni = inputDNI.value.trim();

            if (!nombre || !apellido || !dni) {
                alert("Por favor, complete todos los datos personales.");
                return;
            }

            if (Object.keys(carritoCompras).length === 0) {
                alert("Agregue al menos un producto al carrito.");
                return;
            }

            let mensaje = `Hola, soy ${nombre} ${apellido} (DNI: ${dni}).\nQuiero hacer el siguiente pedido:\n\n`;

            Object.values(carritoCompras).forEach(({ producto, cantidad }) => {
                mensaje += `- ${producto.nombre} (Código: ${producto.codigo}) x ${cantidad} - $${(
                    producto.precio_ars * cantidad
                ).toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}\n`;
            });

            mensaje += `\nTotal: $${totalCarrito.textContent}`;

            const url = `https://wa.me/5491161478127?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        });

        // Toggle carrito
        botonCarrito.addEventListener("click", () => {
            carrito.style.display = carrito.style.display === "flex" ? "none" : "flex";
        });

        // Mostrar inicialmente todos los productos
        mostrarProductos();

        // Marquee animación (reinicio infinito para que se vea bien)
        const marquee = document.getElementById("marquee-text");
        marquee.addEventListener("animationiteration", () => {
            marquee.style.animation = "none";
            marquee.offsetHeight; // force reflow
            marquee.style.animation = null;
        });

        // Obtener elementos overlay
        const overlay = document.getElementById('overlay-img');
        const imgAmpliada = document.getElementById('img-ampliada');

        // Función para abrir imagen ampliada
        function abrirImagen(src, alt) {
        imgAmpliada.src = src;
        imgAmpliada.alt = alt;
        overlay.style.display = 'flex';
        }

        // Función para cerrar imagen ampliada
        function cerrarImagen() {
        overlay.style.display = 'none';
        imgAmpliada.src = '';
        imgAmpliada.alt = '';
        }

        // Evento click en overlay para cerrar si clickeas fuera de la imagen
        overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
        cerrarImagen();
        }
        });
