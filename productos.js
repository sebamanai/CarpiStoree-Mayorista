const productos = [
  {
    nombre: `SET BOUTIQUE TOKYO CON MARTILLO Y CIERRA`,
    codigo: `10928`,
    imagen: `https://homepoint.site/img/10928.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$94,40`
  },
  {
    nombre: `TENSIOMETRO DE BRAZO DSH397`,
    codigo: `11029`,
    imagen: `https://homepoint.site/img/11029.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,18`
  },
  {
    nombre: `NEBULIZADOR`,
    codigo: `11114`,
    imagen: `https://homepoint.site/img/11114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,63`
  },
  {
    nombre: `CARGADOR 3 EN 1 CELULAR-RELOJ-AURICULAR`,
    codigo: `11209`,
    imagen: `https://homepoint.site/img/11209.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,75`
  },
  {
    nombre: `CEPILLO MASAJEADOR CON VAPOR`,
    codigo: `11210`,
    imagen: `https://homepoint.site/img/11210.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,70`
  },
  {
    nombre: `PARLANTE G 3 EN 1 MEDIANO`,
    codigo: `11211`,
    imagen: `https://homepoint.site/img/11211.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,55`
  },
  {
    nombre: `CEPILLO DE LIMPIEZA ELECTRICO DOBLE BATERIA`,
    codigo: `11212`,
    imagen: `https://homepoint.site/img/11212.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$67,85`
  },
  {
    nombre: `CEPILLO DE BAÑO DESCARTABLE`,
    codigo: `11213`,
    imagen: `https://homepoint.site/img/11213.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,82`
  },
  {
    nombre: `LAVADORA PORTATIL 4.5 LTS`,
    codigo: `11214`,
    imagen: `https://homepoint.site/img/11214.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$27,29`
  },
  {
    nombre: `BOLA DE CRISTAL COLORES CON BASE`,
    codigo: `11215`,
    imagen: `https://homepoint.site/img/11215.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,75`
  },
  {
    nombre: `VENTILADOR DE PIE`,
    codigo: `10288`,
    imagen: `https://homepoint.site/img/10288.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$35,40`
  },
  {
    nombre: `VENTILADOR TURBO 14`,
    codigo: `11194`,
    imagen: `https://homepoint.site/img/11194.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,76`
  },
  {
    nombre: `FREIDORA DE AIRE 4.5 LTS CON VISOR NOVOHOME`,
    codigo: `11195`,
    imagen: `https://homepoint.site/img/11195.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$57,52`
  },
  {
    nombre: `ANAFE ELECTRICO DOBLE NOVOHOME`,
    codigo: `11196`,
    imagen: `https://homepoint.site/img/11196.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,07`
  },
  {
    nombre: `PARRILLA GRILL TAPA PRENSA NOVOHOME`,
    codigo: `11197`,
    imagen: `https://homepoint.site/img/11197.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$38,35`
  },
  {
    nombre: `OLLA ELECTRICA NOVOHOME`,
    codigo: `11198`,
    imagen: `https://homepoint.site/img/11198.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$32,45`
  },
  {
    nombre: `CREPERA C/ACCESORIOS NOVOHOME`,
    codigo: `11199`,
    imagen: `https://homepoint.site/img/11199.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,07`
  },
  {
    nombre: `GRILL 2000 W NOVOHOME`,
    codigo: `11200`,
    imagen: `https://homepoint.site/img/11200.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,77`
  },
  {
    nombre: `JUGUERA 25 W 1,2 LTS NOVOHOME`,
    codigo: `11201`,
    imagen: `https://homepoint.site/img/11201.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,70`
  },
  {
    nombre: `FREIDORA DE ACEITE 2000W 3 LTS NOVOHOME`,
    codigo: `11202`,
    imagen: `https://homepoint.site/img/11202.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,58`
  },
  {
    nombre: `SANDWICHERA 3 EN 1 NOVOHOME`,
    codigo: `11203`,
    imagen: `https://homepoint.site/img/11203.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,40`
  },
  {
    nombre: `SANDWICHERA NOVOHOME`,
    codigo: `11204`,
    imagen: `https://homepoint.site/img/11204.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,70`
  },
  {
    nombre: `VASO VIDRIO DOBLE TERMICO 150 ML (CHICO)`,
    codigo: `11205`,
    imagen: `https://homepoint.site/img/11205.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,10`
  },
  {
    nombre: `VASO VIDRIO DOBLE TERMICO 250 ML (GRANDE)`,
    codigo: `11206`,
    imagen: `https://homepoint.site/img/11206.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,39`
  },
  {
    nombre: `JARRO VIDRIO DOBLE TERMICO 350 ML`,
    codigo: `11207`,
    imagen: `https://homepoint.site/img/11207.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `ESCOBILLA P/ BAÑO DE ACERO INOXIDABLE`,
    codigo: `11208`,
    imagen: `https://homepoint.site/img/11208.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,49`
  },
  {
    nombre: `ESTANTE PARA MICRO REGULABLE 225`,
    codigo: `11181`,
    imagen: `https://homepoint.site/img/11181.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,12`
  },
  {
    nombre: `ESQUINERO CUADRADO 3 CANASTO 222`,
    codigo: `11182`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,52`
  },
  {
    nombre: `ORGANIZADOR C/RUEDAS 4 CANASTOS 231`,
    codigo: `11185`,
    imagen: `https://homepoint.site/img/11185.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,71`
  },
  {
    nombre: `ORGANIZADOR C/RUEDAS 5 CANASTOS 232`,
    codigo: `11186`,
    imagen: `https://homepoint.site/img/11186.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,40`
  },
  {
    nombre: `ORGANIZADOR C/RUEDAS 3 CANASTOS 230`,
    codigo: `11187`,
    imagen: `https://homepoint.site/img/11187.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,80`
  },
  {
    nombre: `ORGANIZADOR DE COCINA C/PUERTAS 2 ESTANTES 234`,
    codigo: `11189`,
    imagen: `https://homepoint.site/img/11189.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$53,10`
  },
  {
    nombre: `ESTANTE PARA MICRO REGULABLE ACCESORIOS 238`,
    codigo: `11190`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,02`
  },
  {
    nombre: `PERCHERO CON 3 ESTANTES 226`,
    codigo: `11192`,
    imagen: `https://homepoint.site/img/11192.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$63,42`
  },
  {
    nombre: `ESQUINERO 4 ESTANTES 228`,
    codigo: `11193`,
    imagen: `https://homepoint.site/img/11193.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$51,62`
  },
  {
    nombre: `BALANZA COCINA 10 KG`,
    codigo: `10055`,
    imagen: `https://homepoint.site/img/10055.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,72`
  },
  {
    nombre: `PLANCHA A VAPOR ROPA 1172F`,
    codigo: `10185`,
    imagen: `https://homepoint.site/img/10185.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,65`
  },
  {
    nombre: `HIDROLAVADORA PORTATIL`,
    codigo: `10202`,
    imagen: `https://homepoint.site/img/10202.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$46,91`
  },
  {
    nombre: `SECAPLATO ESCURRIDOR`,
    codigo: `10266`,
    imagen: `https://homepoint.site/img/10266.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,39`
  },
  {
    nombre: `AURICULAR DEPORTIVO MANOS LIBRES`,
    codigo: `10367`,
    imagen: `https://homepoint.site/img/10367.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,38`
  },
  {
    nombre: `SET CUCHILLOS X 6`,
    codigo: `10730`,
    imagen: `https://homepoint.site/img/10730.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,93`
  },
  {
    nombre: `RELOJ DESPERTADOR ESPEJO`,
    codigo: `10775`,
    imagen: `https://homepoint.site/img/10775.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,38`
  },
  {
    nombre: `MICROFONO WI-FI`,
    codigo: `10802`,
    imagen: `https://homepoint.site/img/10802.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,82`
  },
  {
    nombre: `DISPENSER DE HUEVOS`,
    codigo: `10851`,
    imagen: `https://homepoint.site/img/10851.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,85`
  },
  {
    nombre: `LINTERNA PICANA 1101AR2786`,
    codigo: `10955`,
    imagen: `https://homepoint.site/img/10955.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,29`
  },
  {
    nombre: `POWER BANK PORTATIL 20000 MAH`,
    codigo: `10961`,
    imagen: `https://homepoint.site/img/10961.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,96`
  },
  {
    nombre: `DESPOLVILLADOR`,
    codigo: `11162`,
    imagen: `https://homepoint.site/img/11162.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,83`
  },
  {
    nombre: `SOPORTE DE CELULAR ELECTRICO`,
    codigo: `11163`,
    imagen: `https://homepoint.site/img/11163.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,64`
  },
  {
    nombre: `PICANA ELECTRICA AZUL`,
    codigo: `11177`,
    imagen: `https://homepoint.site/img/11177.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,10`
  },
  {
    nombre: `LIMPIADOR FACIAL`,
    codigo: `11178`,
    imagen: `https://homepoint.site/img/11178.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,67`
  },
  {
    nombre: `SET HERRAMIENTAS CON CUTTER Y ALLEN`,
    codigo: `11179`,
    imagen: `https://homepoint.site/img/11179.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,46`
  },
  {
    nombre: `PARASOL DE AUTO CON FUNDA`,
    codigo: `11180`,
    imagen: `https://homepoint.site/img/11180.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,96`
  },
  {
    nombre: `CAMARA 360 SMART IP66 INT/EXT`,
    codigo: `10114`,
    imagen: `https://homepoint.site/img/10114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,07`
  },
  {
    nombre: `BALANZA PERSONAL 180 KG`,
    codigo: `10206`,
    imagen: `https://homepoint.site/img/10206.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,59`
  },
  {
    nombre: `LAMPARA LED SOLAR BK-100`,
    codigo: `10292`,
    imagen: `https://homepoint.site/img/10292.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,42`
  },
  {
    nombre: `ASTRONAUTA CHICO SIN PARLANTE`,
    codigo: `10532`,
    imagen: `https://homepoint.site/img/10532.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,10`
  },
  {
    nombre: `SOPORTE CELULAR VIDEO MAKER`,
    codigo: `11033`,
    imagen: `https://homepoint.site/img/11033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,52`
  },
  {
    nombre: `SOPORTE DE CELULAR VIDRIO SOPAPA BA139`,
    codigo: `11168`,
    imagen: `https://homepoint.site/img/11168.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `SOPORTE DE CELULAR AUTO REJILLA BA140`,
    codigo: `11169`,
    imagen: `https://homepoint.site/img/11169.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,39`
  },
  {
    nombre: `MOCHILLA CARGA USB ANTIRROBO IMPERMEABLE`,
    codigo: `11170`,
    imagen: `https://homepoint.site/img/11170.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,67`
  },
  {
    nombre: `MOCHILA DEPORTIVA IMPERMEABLE`,
    codigo: `11171`,
    imagen: `https://homepoint.site/img/11171.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CEJAS Y BOZO 2 EN 1`,
    codigo: `11172`,
    imagen: `https://homepoint.site/img/11172.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,98`
  },
  {
    nombre: `AFILADOR DE CUCHILLO`,
    codigo: `11173`,
    imagen: `https://homepoint.site/img/11173.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,92`
  },
  {
    nombre: `PERCHERO PARA REPASADOR / TOALLA ADHESIVO`,
    codigo: `11174`,
    imagen: `https://homepoint.site/img/11174.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,65`
  },
  {
    nombre: `LINGA COMBINADA 1.2 X 80 CM`,
    codigo: `11175`,
    imagen: `https://homepoint.site/img/11175.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,98`
  },
  {
    nombre: `RAQUETA MOSQUITO PLEGABLE`,
    codigo: `11176`,
    imagen: `https://homepoint.site/img/11176.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,00`
  },
  {
    nombre: `XIAOMI POCO C75 8RAM/256GB`,
    codigo: `10834`,
    imagen: `https://homepoint.site/img/10834.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$221,25`
  },
  {
    nombre: `ESCURRIDOR ADAPTABLE PVC`,
    codigo: `10321`,
    imagen: `https://homepoint.site/img/10321.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,93`
  },
  {
    nombre: `BORDEADORA DESMALEZADORA`,
    codigo: `10335`,
    imagen: `https://homepoint.site/img/10335.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$115,05`
  },
  {
    nombre: `KIT UTENSILLOS COCINA`,
    codigo: `10372`,
    imagen: `https://homepoint.site/img/10372.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,46`
  },
  {
    nombre: `TRABA DISCO CON ALARMA`,
    codigo: `10544`,
    imagen: `https://homepoint.site/img/10544.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,13`
  },
  {
    nombre: `PARLANTE KARAOKE K12`,
    codigo: `10585`,
    imagen: `https://homepoint.site/img/10585.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,34`
  },
  {
    nombre: `CANDADO PLATEADO 50 mm`,
    codigo: `10971`,
    imagen: `https://homepoint.site/img/10971.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `SET DE BAÑO BAMBU`,
    codigo: `10989`,
    imagen: `https://homepoint.site/img/10989.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,01`
  },
  {
    nombre: `TUPPER MAGICLICK X 5 PCS`,
    codigo: `11143`,
    imagen: `https://homepoint.site/img/11143.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,75`
  },
  {
    nombre: `DEPILADORA 4 EN 1 LADY SHAVER SN8866`,
    codigo: `11151`,
    imagen: `https://homepoint.site/img/11151.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,08`
  },
  {
    nombre: `DUCHA FLEX 1.5 MTS`,
    codigo: `11164`,
    imagen: `https://homepoint.site/img/11164.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,31`
  },
  {
    nombre: `SET DE CUBIERTOS 25 PCS CON BANDEJA`,
    codigo: `11165`,
    imagen: `https://homepoint.site/img/11165.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,98`
  },
  {
    nombre: `MEDIDOR DE GLUCOSA`,
    codigo: `11166`,
    imagen: `https://homepoint.site/img/11166.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,60`
  },
  {
    nombre: `KIT MATERO FESTIVO`,
    codigo: `11167`,
    imagen: `https://homepoint.site/img/11167.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,93`
  },
  {
    nombre: `SECADOR PELO PRO GM101`,
    codigo: `10186`,
    imagen: `https://homepoint.site/img/10186.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,54`
  },
  {
    nombre: `OLLA ELECTRICA`,
    codigo: `10322`,
    imagen: `https://homepoint.site/img/10322.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,78`
  },
  {
    nombre: `CORTADORA MANDOLINA GRANDE`,
    codigo: `10364`,
    imagen: `https://homepoint.site/img/10364.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `SECADOR Y PLANCHA DE PELO COMBO`,
    codigo: `10488`,
    imagen: `https://homepoint.site/img/10488.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$27,14`
  },
  {
    nombre: `AUTO PARLANTE`,
    codigo: `10489`,
    imagen: `https://homepoint.site/img/10489.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$27,88`
  },
  {
    nombre: `ANAFE VITROCERAMICO`,
    codigo: `10668`,
    imagen: `https://homepoint.site/img/10668.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$43,95`
  },
  {
    nombre: `AUTO ESTEREO DESMONTABLE`,
    codigo: `10675`,
    imagen: `https://homepoint.site/img/10675.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,48`
  },
  {
    nombre: `LINTERNA MILITAR TACTICA P50KA`,
    codigo: `10740`,
    imagen: `https://homepoint.site/img/10740.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,54`
  },
  {
    nombre: `INFLADOR AUTOMATICO 4 EN 1`,
    codigo: `10746`,
    imagen: `https://homepoint.site/img/10746.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$32,45`
  },
  {
    nombre: `SELLADOR AL VACIO COMIDA`,
    codigo: `10763`,
    imagen: `https://homepoint.site/img/10763.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,55`
  },
  {
    nombre: `TIRA LED RGB TV LEED MOOD LIGHTS`,
    codigo: `10902`,
    imagen: `https://homepoint.site/img/10902.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,38`
  },
  {
    nombre: `TIRA NEON RGB MULTICOLOR`,
    codigo: `11158`,
    imagen: `https://homepoint.site/img/11158.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,32`
  },
  {
    nombre: `GAS PIMIENTA 110 ML`,
    codigo: `11159`,
    imagen: `https://homepoint.site/img/11159.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `ALARGUE RUEDA UNIVERSAL`,
    codigo: `11160`,
    imagen: `https://homepoint.site/img/11160.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,08`
  },
  {
    nombre: `PAVA ELECTRICA CON CORTE`,
    codigo: `10152`,
    imagen: `https://homepoint.site/img/10152.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,41`
  },
  {
    nombre: `SOPLADORA CON 2 BATERIAS`,
    codigo: `10340`,
    imagen: `https://homepoint.site/img/10340.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$56,05`
  },
  {
    nombre: `CAMARA DOMO DOBLE V380`,
    codigo: `10670`,
    imagen: `https://homepoint.site/img/10670.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,86`
  },
  {
    nombre: `PAVA ELECTRICA AUTO 500 ML`,
    codigo: `10904`,
    imagen: `https://homepoint.site/img/10904.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,57`
  },
  {
    nombre: `ESPEJO MAQUILLADOR PLEGABLE 3 VIDRIOS`,
    codigo: `10948`,
    imagen: `https://homepoint.site/img/10948.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,00`
  },
  {
    nombre: `TV BOX BLANCO MXPRO`,
    codigo: `11147`,
    imagen: `https://homepoint.site/img/11147.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$31,57`
  },
  {
    nombre: `PAVA ELECTRICA CON TERMOMETRO`,
    codigo: `11156`,
    imagen: `https://homepoint.site/img/11156.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$24,93`
  },
  {
    nombre: `TRIPODE ALTO`,
    codigo: `11003`,
    imagen: `https://homepoint.site/img/11003.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,20`
  },
  {
    nombre: `SET 5 RECIPIENTE / TUPPER`,
    codigo: `11133`,
    imagen: `https://homepoint.site/img/11133.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,91`
  },
  {
    nombre: `REFLECTOR LED 100W`,
    codigo: `10008`,
    imagen: `https://homepoint.site/img/10008.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,11`
  },
  {
    nombre: `REFLECTOR LED 150W`,
    codigo: `10009`,
    imagen: `https://homepoint.site/img/10009.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,80`
  },
  {
    nombre: `VENTILADOR DE TECHO RETRACTIL`,
    codigo: `10339`,
    imagen: `https://homepoint.site/img/10339.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$95,88`
  },
  {
    nombre: `LAMPARA SOLAR 2 LED`,
    codigo: `10516`,
    imagen: `https://homepoint.site/img/10516.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `FREIDORA DE AIRE 3.5 L HYTOSHY`,
    codigo: `10735`,
    imagen: `https://homepoint.site/img/10735.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$61,95`
  },
  {
    nombre: `PILA RECARGABLES AA USB`,
    codigo: `10777`,
    imagen: `https://homepoint.site/img/10777.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,31`
  },
  {
    nombre: `LLAVE TUBO 121 PCS`,
    codigo: `10868`,
    imagen: `https://homepoint.site/img/10868.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$98,83`
  },
  {
    nombre: `AURICULAR INPODS 12 COLORES`,
    codigo: `11080`,
    imagen: `https://homepoint.site/img/11080.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,42`
  },
  {
    nombre: `CAMARA CON IMPRESORA INFANTIL`,
    codigo: `11109`,
    imagen: `https://homepoint.site/img/11109.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,55`
  },
  {
    nombre: `POWER BANK 25 MAH TECH`,
    codigo: `11149`,
    imagen: `https://homepoint.site/img/11149.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,13`
  },
  {
    nombre: `MOLINILLO ELECTRICO`,
    codigo: `11150`,
    imagen: `https://homepoint.site/img/11150.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,62`
  },
  {
    nombre: `PINZA X 3 PCS VERDES`,
    codigo: `11153`,
    imagen: `https://homepoint.site/img/11153.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,28`
  },
  {
    nombre: `LUZ LINTERNA CAMPING EXT / INT`,
    codigo: `11155`,
    imagen: `https://homepoint.site/img/11155.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,20`
  },
  {
    nombre: `INFLADOR INALAMBRICO 3 EN 1`,
    codigo: `10349`,
    imagen: `https://homepoint.site/img/10349.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,02`
  },
  {
    nombre: `TV STICK`,
    codigo: `10373`,
    imagen: `https://homepoint.site/img/10373.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$35,40`
  },
  {
    nombre: `PROYECTOR ANDROID 4K`,
    codigo: `10405`,
    imagen: `https://homepoint.site/img/10405.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$67,85`
  },
  {
    nombre: `LATTAFA BADEE AL OUD SUBLIME 100 ML`,
    codigo: `10650`,
    imagen: `https://homepoint.site/img/10650.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$51,62`
  },
  {
    nombre: `DRONE PLEGABLE`,
    codigo: `10977`,
    imagen: `https://homepoint.site/img/10977.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$31,42`
  },
  {
    nombre: `CONSOLA RETRO GAME STICK BLANCA`,
    codigo: `11112`,
    imagen: `https://homepoint.site/img/11112.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,30`
  },
  {
    nombre: `LUZ LED EMERGENCIA`,
    codigo: `10057`,
    imagen: `https://homepoint.site/img/10057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,18`
  },
  {
    nombre: `DISPENSER PORTA ESPONJA`,
    codigo: `10970`,
    imagen: `https://homepoint.site/img/10970.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,38`
  },
  {
    nombre: `CANDADO PLATEADO 30 mm`,
    codigo: `10972`,
    imagen: `https://homepoint.site/img/10972.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$1,62`
  },
  {
    nombre: `PIZARRA GRANDE CAPIBARA / LABUBU`,
    codigo: `11097`,
    imagen: `https://homepoint.site/img/11097.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,38`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 10 PCS`,
    codigo: `10050`,
    imagen: `https://homepoint.site/img/10050.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,49`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 46 PCS`,
    codigo: `10112`,
    imagen: `https://homepoint.site/img/10112.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,51`
  },
  {
    nombre: `TV BOX`,
    codigo: `10519`,
    imagen: `https://homepoint.site/img/10519.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,92`
  },
  {
    nombre: `HUMIDIFICADOR XM-006`,
    codigo: `10741`,
    imagen: `https://homepoint.site/img/10741.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,64`
  },
  {
    nombre: `LICUADORA JARRA VIDRIO`,
    codigo: `10762`,
    imagen: `https://homepoint.site/img/10762.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,20`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS FULL`,
    codigo: `10877`,
    imagen: `https://homepoint.site/img/10877.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,01`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS KING`,
    codigo: `10879`,
    imagen: `https://homepoint.site/img/10879.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$27,88`
  },
  {
    nombre: `TOALLON PESADO PREMIUN`,
    codigo: `11144`,
    imagen: `https://homepoint.site/img/11144.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,82`
  },
  {
    nombre: `TOALLON SECADO RAPIDO`,
    codigo: `11145`,
    imagen: `https://homepoint.site/img/11145.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,16`
  },
  {
    nombre: `ANAFE ELECTRICO 1 ORNALLA 1000w`,
    codigo: `10010`,
    imagen: `https://homepoint.site/img/10010.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,01`
  },
  {
    nombre: `BOTELLA DEPORTIVA 750 ML`,
    codigo: `10024`,
    imagen: `https://homepoint.site/img/10024.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,03`
  },
  {
    nombre: `ANAFE ELECTRICO 2 ORNALLAS 2000w`,
    codigo: `10115`,
    imagen: `https://homepoint.site/img/10115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,81`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 53 PCS`,
    codigo: `10195`,
    imagen: `https://homepoint.site/img/10195.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,23`
  },
  {
    nombre: `CONSOLA PORTATIL GAME BOX`,
    codigo: `10245`,
    imagen: `https://homepoint.site/img/10245.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,62`
  },
  {
    nombre: `SANDWICHERA 3 EN 1 HITOSHY`,
    codigo: `10622`,
    imagen: `https://homepoint.site/img/10622.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,04`
  },
  {
    nombre: `LAPIZ 3D`,
    codigo: `10907`,
    imagen: `https://homepoint.site/img/10907.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,83`
  },
  {
    nombre: `CAFETERA EXPRESO DOBLE TAZA OM`,
    codigo: `10939`,
    imagen: `https://homepoint.site/img/10939.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$125,38`
  },
  {
    nombre: `FOUNTAIN CHOCOLATE`,
    codigo: `11096`,
    imagen: `https://homepoint.site/img/11096.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$36,73`
  },
  {
    nombre: `LUZ VINCHA MINERA`,
    codigo: `11104`,
    imagen: `https://homepoint.site/img/11104.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,91`
  },
  {
    nombre: `CARTEL ABIERTO/KIOSCO`,
    codigo: `11110`,
    imagen: `https://homepoint.site/img/11110.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,24`
  },
  {
    nombre: `KIT DE LIMPIEZA PARA AUTO`,
    codigo: `11142`,
    imagen: `https://homepoint.site/img/11142.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$20,21`
  },
  {
    nombre: `BOTELLA TERMICA ROMANIA 660 ML`,
    codigo: `10764`,
    imagen: `https://homepoint.site/img/10764.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,32`
  },
  {
    nombre: `PAVA ELECTRICA`,
    codigo: `10028`,
    imagen: `https://homepoint.site/img/10028.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,10`
  },
  {
    nombre: `SANDWICHERA ELECTRICA ACERO HYTOSHY`,
    codigo: `10773`,
    imagen: `https://homepoint.site/img/10773.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,91`
  },
  {
    nombre: `LINGA BICICLETA`,
    codigo: `10103`,
    imagen: `https://homepoint.site/img/10103.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,21`
  },
  {
    nombre: `PICADORA MINI USB`,
    codigo: `10359`,
    imagen: `https://homepoint.site/img/10359.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `CONTADORA DE BILLETES`,
    codigo: `10538`,
    imagen: `https://homepoint.site/img/10538.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$72,28`
  },
  {
    nombre: `CEPILLO MOLDEADOR PELO 5 EN 1`,
    codigo: `10781`,
    imagen: `https://homepoint.site/img/10781.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,18`
  },
  {
    nombre: `CHISPERO`,
    codigo: `11130`,
    imagen: `https://homepoint.site/img/11130.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,98`
  },
  {
    nombre: `MINI BATIDOR Y PROCESADOR`,
    codigo: `11131`,
    imagen: `https://homepoint.site/img/11131.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,10`
  },
  {
    nombre: `PROYECTOR CARRUSEL / PATO`,
    codigo: `11132`,
    imagen: `https://homepoint.site/img/11132.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,24`
  },
  {
    nombre: `LIMPIAVIDRIOS CHICO`,
    codigo: `11134`,
    imagen: `https://homepoint.site/img/11134.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,36`
  },
  {
    nombre: `KIT TALADRO Y AMOLADORA`,
    codigo: `11135`,
    imagen: `https://homepoint.site/img/11135.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$110,62`
  },
  {
    nombre: `PARLANTE 8 X 2 MS2052BT`,
    codigo: `11137`,
    imagen: `https://homepoint.site/img/11137.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,30`
  },
  {
    nombre: `PARLANTE 4 X 2 MS3627BT`,
    codigo: `11138`,
    imagen: `https://homepoint.site/img/11138.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,57`
  },
  {
    nombre: `PARLANTE 8 MS2067BT`,
    codigo: `11139`,
    imagen: `https://homepoint.site/img/11139.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,50`
  },
  {
    nombre: `PARLANTE 6,5 X 2 MS1953BT`,
    codigo: `11140`,
    imagen: `https://homepoint.site/img/11140.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$35,25`
  },
  {
    nombre: `CAFETERA ELECTRICA JARRA`,
    codigo: `10520`,
    imagen: `https://homepoint.site/img/10520.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,07`
  },
  {
    nombre: `AUTO ESTEREO FIJO`,
    codigo: `10576`,
    imagen: `https://homepoint.site/img/10576.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,96`
  },
  {
    nombre: `ARO DE LED RGB`,
    codigo: `10687`,
    imagen: `https://homepoint.site/img/10687.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,88`
  },
  {
    nombre: `RASURADORA / AFEITADORA`,
    codigo: `10857`,
    imagen: `https://homepoint.site/img/10857.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,59`
  },
  {
    nombre: `BASE HUB USB CARGA RAPIDA 66W`,
    codigo: `10910`,
    imagen: `https://homepoint.site/img/10910.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,49`
  },
  {
    nombre: `HORNO CAFETERO DESAYUNADOR`,
    codigo: `10994`,
    imagen: `https://homepoint.site/img/10994.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$84,08`
  },
  {
    nombre: `PANEL SOLAR BK10`,
    codigo: `11123`,
    imagen: `https://homepoint.site/img/11123.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,62`
  },
  {
    nombre: `RELOJ SMART DOBLE JUEGO AURICULAR`,
    codigo: `11124`,
    imagen: `https://homepoint.site/img/11124.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,40`
  },
  {
    nombre: `MASAJEADOR DE CUELLO`,
    codigo: `11125`,
    imagen: `https://homepoint.site/img/11125.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,07`
  },
  {
    nombre: `QUENCHER VIDRIO Y SORBETE`,
    codigo: `11126`,
    imagen: `https://homepoint.site/img/11126.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,29`
  },
  {
    nombre: `MORTERO MADERA BAMBU`,
    codigo: `11129`,
    imagen: `https://homepoint.site/img/11129.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,55`
  },
  {
    nombre: `LATTAFA KHAMRAH QAHWA 100 ML`,
    codigo: `10653`,
    imagen: `https://homepoint.site/img/10653.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$53,10`
  },
  {
    nombre: `AFNAM 9 AM DIVE 100 ML`,
    codigo: `10805`,
    imagen: `https://homepoint.site/img/10805.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$56,05`
  },
  {
    nombre: `CLUB DE NUIT WOMAN`,
    codigo: `10964`,
    imagen: `https://homepoint.site/img/10964.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$53,10`
  },
  {
    nombre: `CLUB DE NUIT MILESTONE`,
    codigo: `11117`,
    imagen: `https://homepoint.site/img/11117.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$57,52`
  },
  {
    nombre: `LATTAFA OUD MOOD`,
    codigo: `11120`,
    imagen: `https://homepoint.site/img/11120.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$45,73`
  },
  {
    nombre: `ASAD ZANZIBAR`,
    codigo: `11122`,
    imagen: `https://homepoint.site/img/11122.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$36,88`
  },
  {
    nombre: `BHARARA KING 150 ML`,
    codigo: `10652`,
    imagen: `https://homepoint.site/img/10652.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$92,92`
  },
  {
    nombre: `AL HAR AMBER OUD GOLD 120 ML`,
    codigo: `10659`,
    imagen: `https://homepoint.site/img/10659.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$94,40`
  },
  {
    nombre: `LATTAFA YARA CANDY`,
    codigo: `10665`,
    imagen: `https://homepoint.site/img/10665.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,20`
  },
  {
    nombre: `CANDADO CON ALARMA`,
    codigo: `11032`,
    imagen: `https://homepoint.site/img/11032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,67`
  },
  {
    nombre: `LATTAFA PRIDE FAKHAR FEMENINO 100 ML`,
    codigo: `11121`,
    imagen: `https://homepoint.site/img/11121.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,58`
  },
  {
    nombre: `LINGA MOTO 22mm`,
    codigo: `10119`,
    imagen: `https://homepoint.site/img/10119.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,59`
  },
  {
    nombre: `MAQUINA DONAS`,
    codigo: `10140`,
    imagen: `https://homepoint.site/img/10140.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$36,51`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 48u.`,
    codigo: `10517`,
    imagen: `https://homepoint.site/img/10517.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,18`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 60u.`,
    codigo: `10518`,
    imagen: `https://homepoint.site/img/10518.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,98`
  },
  {
    nombre: `PECHERA ANTIROBO`,
    codigo: `10536`,
    imagen: `https://homepoint.site/img/10536.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,54`
  },
  {
    nombre: `LLAVE KIT 216 PCS`,
    codigo: `11115`,
    imagen: `https://homepoint.site/img/11115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$140,12`
  },
  {
    nombre: `PISTOLA DE HIDROGEL`,
    codigo: `10594`,
    imagen: `https://homepoint.site/img/10594.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,73`
  },
  {
    nombre: `PROYECTOR 4K CON VIDEOJUEGOS`,
    codigo: `10679`,
    imagen: `https://homepoint.site/img/10679.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$88,50`
  },
  {
    nombre: `PILA AA`,
    codigo: `10554`,
    imagen: `https://homepoint.site/img/10554.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$266,00`
  },
  {
    nombre: `VALIJA DE PINTURA 42 PCS`,
    codigo: `11018`,
    imagen: `https://homepoint.site/img/11018.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,54`
  },
  {
    nombre: `CEPILLO ELECTRICO DE DUCHA`,
    codigo: `11102`,
    imagen: `https://homepoint.site/img/11102.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,95`
  },
  {
    nombre: `ALARGUE TORRE`,
    codigo: `11103`,
    imagen: `https://homepoint.site/img/11103.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,67`
  },
  {
    nombre: `SET TUPPER COLORES X 4 UNIDADES`,
    codigo: `11108`,
    imagen: `https://homepoint.site/img/11108.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,28`
  },
  {
    nombre: `AUTO CONTROL REMOTO CYBERTRUCK`,
    codigo: `11111`,
    imagen: `https://homepoint.site/img/11111.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,95`
  },
  {
    nombre: `TIMBRE CON CAMARA`,
    codigo: `10824`,
    imagen: `https://homepoint.site/img/10824.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,98`
  },
  {
    nombre: `LUNCHERA ELECTRICA`,
    codigo: `10696`,
    imagen: `https://homepoint.site/img/10696.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,20`
  },
  {
    nombre: `CEPILLO ALISADOR`,
    codigo: `10182`,
    imagen: `https://homepoint.site/img/10182.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,46`
  },
  {
    nombre: `SARTEN MULTIFUNCION 3 EN 1`,
    codigo: `10360`,
    imagen: `https://homepoint.site/img/10360.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,13`
  },
  {
    nombre: `PLANCHA ELECTRICA CON GRILL PA2208`,
    codigo: `10389`,
    imagen: `https://homepoint.site/img/10389.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,25`
  },
  {
    nombre: `FOCO DE LUZ CON CONTROL REMOTO`,
    codigo: `10714`,
    imagen: `https://homepoint.site/img/10714.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `TOSTADORA ACERO`,
    codigo: `10734`,
    imagen: `https://homepoint.site/img/10734.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$24,78`
  },
  {
    nombre: `UTENSILLOS KIT 19 PCS`,
    codigo: `10801`,
    imagen: `https://homepoint.site/img/10801.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$28,02`
  },
  {
    nombre: `VINCHA DEPORTIVA CON BLUETOOTH`,
    codigo: `11021`,
    imagen: `https://homepoint.site/img/11021.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,11`
  },
  {
    nombre: `POWER BANK 20.000 HYTOSHY DOBLE CABLE`,
    codigo: `11099`,
    imagen: `https://homepoint.site/img/11099.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,08`
  },
  {
    nombre: `LICUADORA GRANDE JARRA SVD-703`,
    codigo: `11100`,
    imagen: `https://homepoint.site/img/11100.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$39,83`
  },
  {
    nombre: `HUMIDIFICADOR TEMPLO`,
    codigo: `11101`,
    imagen: `https://homepoint.site/img/11101.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,18`
  },
  {
    nombre: `SOPORTE FIJO TV-14-42`,
    codigo: `10043`,
    imagen: `https://homepoint.site/img/10043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,95`
  },
  {
    nombre: `SOPORTE MOVIL TV-117-2`,
    codigo: `10045`,
    imagen: `https://homepoint.site/img/10045.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,55`
  },
  {
    nombre: `ROLLO LED RGB 5M`,
    codigo: `10085`,
    imagen: `https://homepoint.site/img/10085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,05`
  },
  {
    nombre: `ASPIRADORA DE MANO CHICA`,
    codigo: `10275`,
    imagen: `https://homepoint.site/img/10275.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,61`
  },
  {
    nombre: `MASAJEADOR CERVICAL`,
    codigo: `10296`,
    imagen: `https://homepoint.site/img/10296.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,11`
  },
  {
    nombre: `RELOJ APPLE WATCH`,
    codigo: `10685`,
    imagen: `https://homepoint.site/img/10685.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$36,88`
  },
  {
    nombre: `PARLANTE JBL FLIP 6`,
    codigo: `10703`,
    imagen: `https://homepoint.site/img/10703.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,12`
  },
  {
    nombre: `AURICULAR AIRPODS PRO 2`,
    codigo: `10716`,
    imagen: `https://homepoint.site/img/10716.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,70`
  },
  {
    nombre: `LIFTING MASAJEADOR`,
    codigo: `10992`,
    imagen: `https://homepoint.site/img/10992.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,69`
  },
  {
    nombre: `PARLANTE BOOMBOX 3`,
    codigo: `11083`,
    imagen: `https://homepoint.site/img/11083.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$39,83`
  },
  {
    nombre: `PARLANTE BOOMBOX 2 RGB`,
    codigo: `11084`,
    imagen: `https://homepoint.site/img/11084.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$38,35`
  },
  {
    nombre: `MOPA C/BALDE SEPARADORA DE AGUA`,
    codigo: `11085`,
    imagen: `https://homepoint.site/img/11085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,01`
  },
  {
    nombre: `HUMIDIFICADOR ENCASTRE LEGO`,
    codigo: `11086`,
    imagen: `https://homepoint.site/img/11086.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,49`
  },
  {
    nombre: `LUZ DE RELLENO GRANDE`,
    codigo: `11087`,
    imagen: `https://homepoint.site/img/11087.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,50`
  },
  {
    nombre: `PARÑANTE 4 X 2 RGB ZQS4210S`,
    codigo: `11088`,
    imagen: `https://homepoint.site/img/11088.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,55`
  },
  {
    nombre: `SECARROPA ELECTRICO`,
    codigo: `11089`,
    imagen: `https://homepoint.site/img/11089.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,19`
  },
  {
    nombre: `MAQUINA DE COSER SM505A`,
    codigo: `11090`,
    imagen: `https://homepoint.site/img/11090.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,25`
  },
  {
    nombre: `AURICULAR VINCHA JBL J127`,
    codigo: `11091`,
    imagen: `https://homepoint.site/img/11091.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,49`
  },
  {
    nombre: `AURICULAR JBL TUNE K63`,
    codigo: `11092`,
    imagen: `https://homepoint.site/img/11092.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `AURICULAR SAMSUNG GALAXY BUDS 3 PRO`,
    codigo: `11093`,
    imagen: `https://homepoint.site/img/11093.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,18`
  },
  {
    nombre: `CADENA MOTO ANCHI`,
    codigo: `10066`,
    imagen: `https://homepoint.site/img/10066.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,00`
  },
  {
    nombre: `MATE LISTO 750 ML`,
    codigo: `10124`,
    imagen: `https://homepoint.site/img/10124.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,16`
  },
  {
    nombre: `TV STICK GAME RETRO`,
    codigo: `10491`,
    imagen: `https://homepoint.site/img/10491.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$47,94`
  },
  {
    nombre: `AURICULAR ULTRAPODS`,
    codigo: `10556`,
    imagen: `https://homepoint.site/img/10556.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `MOCHILA MATERNAL CUNA CAMBIADOR`,
    codigo: `11081`,
    imagen: `https://homepoint.site/img/11081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,02`
  },
  {
    nombre: `PAVA ELECTRICA PLEGABLE`,
    codigo: `11082`,
    imagen: `https://homepoint.site/img/11082.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,46`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CARA / BOZO`,
    codigo: `11008`,
    imagen: `https://homepoint.site/img/11008.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,28`
  },
  {
    nombre: `CAJA REGISTRADORA GRANDE`,
    codigo: `11051`,
    imagen: `https://homepoint.site/img/11051.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,93`
  },
  {
    nombre: `PELUCHE COLAPINTO GRANDE`,
    codigo: `11052`,
    imagen: `https://homepoint.site/img/11052.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$73,75`
  },
  {
    nombre: `PELUCHE CAPIBARA XXL 90 CM`,
    codigo: `11053`,
    imagen: `https://homepoint.site/img/11053.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$73,75`
  },
  {
    nombre: `GUANTE TOUCH`,
    codigo: `11055`,
    imagen: `https://homepoint.site/img/11055.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,26`
  },
  {
    nombre: `CARRITO BEBE`,
    codigo: `11056`,
    imagen: `https://homepoint.site/img/11056.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,28`
  },
  {
    nombre: `HAMBURGUESA BLISTER`,
    codigo: `11057`,
    imagen: `https://homepoint.site/img/11057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `SLIME BOTELLA`,
    codigo: `11060`,
    imagen: `https://homepoint.site/img/11060.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,28`
  },
  {
    nombre: `CALCULADORA DM-1200V`,
    codigo: `11061`,
    imagen: `https://homepoint.site/img/11061.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,38`
  },
  {
    nombre: `GUITARRA MUSICAL`,
    codigo: `11063`,
    imagen: `https://homepoint.site/img/11063.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,59`
  },
  {
    nombre: `MAQUILLAJE VALIJA TINY`,
    codigo: `11068`,
    imagen: `https://homepoint.site/img/11068.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,40`
  },
  {
    nombre: `MAQUILLAJE CARRUAJE`,
    codigo: `11071`,
    imagen: `https://homepoint.site/img/11071.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,96`
  },
  {
    nombre: `MAQUILLAJE MARIPOSA`,
    codigo: `11074`,
    imagen: `https://homepoint.site/img/11074.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,18`
  },
  {
    nombre: `LIBRETA ANIMADA`,
    codigo: `11076`,
    imagen: `https://homepoint.site/img/11076.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,65`
  },
  {
    nombre: `CARTERA MAQUILLAJE TINY`,
    codigo: `11078`,
    imagen: `https://homepoint.site/img/11078.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,70`
  },
  {
    nombre: `RODILLERA DE COMPRESION`,
    codigo: `11043`,
    imagen: `https://homepoint.site/img/11043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,83`
  },
  {
    nombre: `CINTA NEUROMUSCULAR KINESIOLOGICA`,
    codigo: `11044`,
    imagen: `https://homepoint.site/img/11044.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `CINTA LEVANTA BUSTO`,
    codigo: `11079`,
    imagen: `https://homepoint.site/img/11079.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,65`
  },
  {
    nombre: `GRIFERIA RORY COCINA LARGA`,
    codigo: `10051`,
    imagen: `https://homepoint.site/img/10051.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,31`
  },
  {
    nombre: `MONOCOMANDO GRIFERIA BANO CORTA RORY`,
    codigo: `10174`,
    imagen: `https://homepoint.site/img/10174.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,01`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA X 24 PCS`,
    codigo: `10979`,
    imagen: `https://homepoint.site/img/10979.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,90`
  },
  {
    nombre: `LUZ DE EMERGENCIA SOLAR`,
    codigo: `11045`,
    imagen: `https://homepoint.site/img/11045.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,72`
  },
  {
    nombre: `JUEGO DE OLLAS CON PLANCHA TOKIO 8`,
    codigo: `11046`,
    imagen: `https://homepoint.site/img/11046.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$72,28`
  },
  {
    nombre: `HUMIDIFICADOR JSQ07`,
    codigo: `10605`,
    imagen: `https://homepoint.site/img/10605.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,20`
  },
  {
    nombre: `LATTAFA ASAD 100 ML`,
    codigo: `10654`,
    imagen: `https://homepoint.site/img/10654.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,20`
  },
  {
    nombre: `MASAJEADOR PISTOLA MANO`,
    codigo: `10729`,
    imagen: `https://homepoint.site/img/10729.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `PARLANTE BLUETOOTH PORTATIL LED`,
    codigo: `10794`,
    imagen: `https://homepoint.site/img/10794.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `LENTES INTELIGENTES CON AUDIO M8PRO`,
    codigo: `10799`,
    imagen: `https://homepoint.site/img/10799.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,75`
  },
  {
    nombre: `CAJA SORPRESA LABUBU`,
    codigo: `10886`,
    imagen: `https://homepoint.site/img/10886.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `TV STICK BLANCO X10`,
    codigo: `10946`,
    imagen: `https://homepoint.site/img/10946.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$42,77`
  },
  {
    nombre: `ASPIRADORA MOPA`,
    codigo: `10996`,
    imagen: `https://homepoint.site/img/10996.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,60`
  },
  {
    nombre: `RELOJ SMART T900`,
    codigo: `11037`,
    imagen: `https://homepoint.site/img/11037.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,67`
  },
  {
    nombre: `MAQUINA AFEITADORA FLIPULPS`,
    codigo: `11038`,
    imagen: `https://homepoint.site/img/11038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,18`
  },
  {
    nombre: `LICUADORA DE MANO 6 CUCHILLAS`,
    codigo: `11040`,
    imagen: `https://homepoint.site/img/11040.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,88`
  },
  {
    nombre: `ASPIRADORA INALAMBRICA GRANDE`,
    codigo: `11041`,
    imagen: `https://homepoint.site/img/11041.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,55`
  },
  {
    nombre: `JUEGO DE OLLAS CON M. DESMONTABLE Y SARTENES`,
    codigo: `11042`,
    imagen: `https://homepoint.site/img/11042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$64,75`
  },
  {
    nombre: `FOCO PARLANTE`,
    codigo: `10214`,
    imagen: `https://homepoint.site/img/10214.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,49`
  },
  {
    nombre: `PLANCHA DE PELO Y CEPILLO SECADOR COMBO`,
    codigo: `10487`,
    imagen: `https://homepoint.site/img/10487.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,25`
  },
  {
    nombre: `CARGADOR CELULAR 3.1 TIPO C`,
    codigo: `10555`,
    imagen: `https://homepoint.site/img/10555.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,43`
  },
  {
    nombre: `BALANZA PERSONAL DIGITAL`,
    codigo: `10731`,
    imagen: `https://homepoint.site/img/10731.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,39`
  },
  {
    nombre: `MINI CAMARA INFANTIL`,
    codigo: `10846`,
    imagen: `https://homepoint.site/img/10846.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,46`
  },
  {
    nombre: `CHALECO FLUOR REFLEX`,
    codigo: `11022`,
    imagen: `https://homepoint.site/img/11022.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,92`
  },
  {
    nombre: `CARGADOR CELULAR 25W CON CABLE USB-C`,
    codigo: `11026`,
    imagen: `https://homepoint.site/img/11026.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,28`
  },
  {
    nombre: `PISTA DE AUTOS LABUBU PARKING LOT`,
    codigo: `11027`,
    imagen: `https://homepoint.site/img/11027.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,73`
  },
  {
    nombre: `BASE CARGADOR DOBLE JOYSTICK PS5`,
    codigo: `11031`,
    imagen: `https://homepoint.site/img/11031.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,14`
  },
  {
    nombre: `LUZ DE LED PARA BOTELLA`,
    codigo: `11034`,
    imagen: `https://homepoint.site/img/11034.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,73`
  },
  {
    nombre: `AURICULAR CON PANTALLA BLANCO`,
    codigo: `10366`,
    imagen: `https://homepoint.site/img/10366.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,23`
  },
  {
    nombre: `PILA AAA`,
    codigo: `10042`,
    imagen: `https://homepoint.site/img/10042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$251,00`
  },
  {
    nombre: `CARGADOR-PARLANTE 3-1 G`,
    codigo: `10113`,
    imagen: `https://homepoint.site/img/10113.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,52`
  },
  {
    nombre: `PARLANTE RUEDA TOKIO X-507`,
    codigo: `10635`,
    imagen: `https://homepoint.site/img/10635.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,59`
  },
  {
    nombre: `VELADOR LUNA LUZ LED`,
    codigo: `10686`,
    imagen: `https://homepoint.site/img/10686.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,98`
  },
  {
    nombre: `LAMPARA PORTALAPICERA`,
    codigo: `10690`,
    imagen: `https://homepoint.site/img/10690.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,51`
  },
  {
    nombre: `CARGADOR DE AUTO CARG7`,
    codigo: `10893`,
    imagen: `https://homepoint.site/img/10893.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,98`
  },
  {
    nombre: `VELADOR CAPIBARA HONGO 339/340H`,
    codigo: `10950`,
    imagen: `https://homepoint.site/img/10950.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,03`
  },
  {
    nombre: `BALANZA COMERCIAL 40 KG`,
    codigo: `10058`,
    imagen: `https://homepoint.site/img/10058.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$36,88`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 108 PCS`,
    codigo: `10143`,
    imagen: `https://homepoint.site/img/10143.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$62,69`
  },
  {
    nombre: `MATE LISTO 500 ML ROLAN`,
    codigo: `11015`,
    imagen: `https://homepoint.site/img/11015.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,55`
  },
  {
    nombre: `MATE LISTO 750 ML ROLAN`,
    codigo: `11016`,
    imagen: `https://homepoint.site/img/11016.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,88`
  },
  {
    nombre: `JOYSTICK PS4`,
    codigo: `10038`,
    imagen: `https://homepoint.site/img/10038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,47`
  },
  {
    nombre: `POWER BANK CHICO`,
    codigo: `10596`,
    imagen: `https://homepoint.site/img/10596.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,08`
  },
  {
    nombre: `FREIDORA DE AIRE OM 3,5 LITROS`,
    codigo: `10957`,
    imagen: `https://homepoint.site/img/10957.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$63,42`
  },
  {
    nombre: `MINI PIMER SOKANY`,
    codigo: `11005`,
    imagen: `https://homepoint.site/img/11005.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,18`
  },
  {
    nombre: `PINZA 8 PULGADAS`,
    codigo: `11006`,
    imagen: `https://homepoint.site/img/11006.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,20`
  },
  {
    nombre: `CABLE CARGADOR 4 EN 1 SPRING`,
    codigo: `11009`,
    imagen: `https://homepoint.site/img/11009.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,95`
  },
  {
    nombre: `CUTTER 188 MM BLISTER X 12`,
    codigo: `11011`,
    imagen: `https://homepoint.site/img/11011.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,72`
  },
  {
    nombre: `CINTA METRICA CON LASER Y NIVEL`,
    codigo: `11012`,
    imagen: `https://homepoint.site/img/11012.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,51`
  },
  {
    nombre: `WAFLERA SK -114`,
    codigo: `10004`,
    imagen: `https://homepoint.site/img/10004.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,91`
  },
  {
    nombre: `ORYX SANDWICHERA OR-1800`,
    codigo: `10005`,
    imagen: `https://homepoint.site/img/10005.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,18`
  },
  {
    nombre: `DISPENSER AUTOMATICO`,
    codigo: `10020`,
    imagen: `https://homepoint.site/img/10020.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,90`
  },
  {
    nombre: `POPIT ELECTRONICO`,
    codigo: `10032`,
    imagen: `https://homepoint.site/img/10032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,57`
  },
  {
    nombre: `FOCO CAMARA`,
    codigo: `10033`,
    imagen: `https://homepoint.site/img/10033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,08`
  },
  {
    nombre: `PARLANTE 3 Pulgadas`,
    codigo: `10040`,
    imagen: `https://homepoint.site/img/10040.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,90`
  },
  {
    nombre: `JOYSTICK PS3`,
    codigo: `10047`,
    imagen: `https://homepoint.site/img/10047.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,51`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 40 PCS`,
    codigo: `10048`,
    imagen: `https://homepoint.site/img/10048.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,20`
  },
  {
    nombre: `AURICULAR P47`,
    codigo: `10081`,
    imagen: `https://homepoint.site/img/10081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,09`
  },
  {
    nombre: `INFLADOR ALUMINIO BICI`,
    codigo: `10105`,
    imagen: `https://homepoint.site/img/10105.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,69`
  },
  {
    nombre: `PIZARRA DIBUJO 8,5`,
    codigo: `10118`,
    imagen: `https://homepoint.site/img/10118.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `PLANCHA PELO SZPL047`,
    codigo: `10147`,
    imagen: `https://homepoint.site/img/10147.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,73`
  },
  {
    nombre: `PATILLERA RETRO`,
    codigo: `10170`,
    imagen: `https://homepoint.site/img/10170.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,13`
  },
  {
    nombre: `ESPEJO LED`,
    codigo: `10187`,
    imagen: `https://homepoint.site/img/10187.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,55`
  },
  {
    nombre: `ESTUFA DOS VELAS HORIZONTAL CUARZO`,
    codigo: `10188`,
    imagen: `https://homepoint.site/img/10188.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,68`
  },
  {
    nombre: `VASO CAFETERO`,
    codigo: `10192`,
    imagen: `https://homepoint.site/img/10192.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,18`
  },
  {
    nombre: `CORTADORA PELO TRANSPARENTE`,
    codigo: `10199`,
    imagen: `https://homepoint.site/img/10199.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,64`
  },
  {
    nombre: `CACTUS BAILARIN SIN ROPA`,
    codigo: `10215`,
    imagen: `https://homepoint.site/img/10215.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,11`
  },
  {
    nombre: `CONTROL REMOTO UNIVERSAL`,
    codigo: `10223`,
    imagen: `https://homepoint.site/img/10223.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,69`
  },
  {
    nombre: `VASO CAFETERO PUSH`,
    codigo: `10226`,
    imagen: `https://homepoint.site/img/10226.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,73`
  },
  {
    nombre: `CORTINA BLACK OUT TEXTIL LINO`,
    codigo: `10241`,
    imagen: `https://homepoint.site/img/10241.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$31,71`
  },
  {
    nombre: `BRAZO DUCHA`,
    codigo: `10265`,
    imagen: `https://homepoint.site/img/10265.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,95`
  },
  {
    nombre: `LAMPARA MATA MOSQUITOS`,
    codigo: `10289`,
    imagen: `https://homepoint.site/img/10289.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,08`
  },
  {
    nombre: `SANDWICHERA PANINI ORYX OR-1700`,
    codigo: `10290`,
    imagen: `https://homepoint.site/img/10290.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$27,88`
  },
  {
    nombre: `BOTELLA INFANTIL 500 ML YQ`,
    codigo: `10303`,
    imagen: `https://homepoint.site/img/10303.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,87`
  },
  {
    nombre: `AURICULAR M10`,
    codigo: `10319`,
    imagen: `https://homepoint.site/img/10319.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,75`
  },
  {
    nombre: `SACACORCHO PARA VINO USB`,
    codigo: `10320`,
    imagen: `https://homepoint.site/img/10320.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,85`
  },
  {
    nombre: `PICADORA MANUAL PARA VERDURAS`,
    codigo: `10328`,
    imagen: `https://homepoint.site/img/10328.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,75`
  },
  {
    nombre: `TIMBRE INALAMBRICO`,
    codigo: `10342`,
    imagen: `https://homepoint.site/img/10342.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,16`
  },
  {
    nombre: `AURICULAR INALAMBRICO A6S/E6S`,
    codigo: `10350`,
    imagen: `https://homepoint.site/img/10350.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,61`
  },
  {
    nombre: `DESTORNILLADOR 115 EN 1`,
    codigo: `10351`,
    imagen: `https://homepoint.site/img/10351.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,18`
  },
  {
    nombre: `CUBIERTERO DE COCINA BY-889`,
    codigo: `10356`,
    imagen: `https://homepoint.site/img/10356.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,67`
  },
  {
    nombre: `ARRANCADOR DE AUTO`,
    codigo: `10375`,
    imagen: `https://homepoint.site/img/10375.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$51,92`
  },
  {
    nombre: `SOPORTE COLGANTE CELULAR`,
    codigo: `10397`,
    imagen: `https://homepoint.site/img/10397.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$1,03`
  },
  {
    nombre: `VENTILADOR PORTATIL DE MESA`,
    codigo: `10398`,
    imagen: `https://homepoint.site/img/10398.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,39`
  },
  {
    nombre: `LUNCHERA TERMICA`,
    codigo: `10399`,
    imagen: `https://homepoint.site/img/10399.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,54`
  },
  {
    nombre: `MOCHILA INFANTIL`,
    codigo: `10406`,
    imagen: `https://homepoint.site/img/10406.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,46`
  },
  {
    nombre: `PLANCHA PELO CON BUCLERA`,
    codigo: `10407`,
    imagen: `https://homepoint.site/img/10407.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,13`
  },
  {
    nombre: `CARGADOR NOTEBOOK UNIVERSAL`,
    codigo: `10480`,
    imagen: `https://homepoint.site/img/10480.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,29`
  },
  {
    nombre: `SET HERRAMIENTAS 129 PCS FR2262`,
    codigo: `10482`,
    imagen: `https://homepoint.site/img/10482.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,66`
  },
  {
    nombre: `RELOJ SMART 8 MALLAS`,
    codigo: `10492`,
    imagen: `https://homepoint.site/img/10492.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,26`
  },
  {
    nombre: `SET CONDIMENTERO`,
    codigo: `10523`,
    imagen: `https://homepoint.site/img/10523.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,51`
  },
  {
    nombre: `ARMADOR DE EMPANADAS`,
    codigo: `10537`,
    imagen: `https://homepoint.site/img/10537.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,42`
  },
  {
    nombre: `CINTA METRICA 3m`,
    codigo: `10539`,
    imagen: `https://homepoint.site/img/10539.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,77`
  },
  {
    nombre: `CINTA METRICA 5m`,
    codigo: `10540`,
    imagen: `https://homepoint.site/img/10540.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,06`
  },
  {
    nombre: `CINTA METRICA 7,5m`,
    codigo: `10541`,
    imagen: `https://homepoint.site/img/10541.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,39`
  },
  {
    nombre: `CINTA METRICA 10m`,
    codigo: `10542`,
    imagen: `https://homepoint.site/img/10542.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `BATERIA LITIO`,
    codigo: `10546`,
    imagen: `https://homepoint.site/img/10546.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,96`
  },
  {
    nombre: `PLANCHA DE PELO GW7029`,
    codigo: `10551`,
    imagen: `https://homepoint.site/img/10551.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,91`
  },
  {
    nombre: `MOCHILA INFANTIL XXL TRIPLE CIERRE`,
    codigo: `10579`,
    imagen: `https://homepoint.site/img/10579.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,41`
  },
  {
    nombre: `MAQUINA PASTAS PORTATIL`,
    codigo: `10587`,
    imagen: `https://homepoint.site/img/10587.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,83`
  },
  {
    nombre: `TESTER DIGITAL MULTIMETRO`,
    codigo: `10599`,
    imagen: `https://homepoint.site/img/10599.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,03`
  },
  {
    nombre: `ESTUFA VELA CUARZO VERTICAL`,
    codigo: `10606`,
    imagen: `https://homepoint.site/img/10606.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,19`
  },
  {
    nombre: `TECLADO CON MOUSE INALAMBRICO AN030`,
    codigo: `10613`,
    imagen: `https://homepoint.site/img/10613.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,91`
  },
  {
    nombre: `RASURADORA PELO 3 EN 1 DALING`,
    codigo: `10618`,
    imagen: `https://homepoint.site/img/10618.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,98`
  },
  {
    nombre: `CORTAPELO 2 EN 1 NARIZ DALING`,
    codigo: `10619`,
    imagen: `https://homepoint.site/img/10619.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,23`
  },
  {
    nombre: `BATIDOR CAFE A PILA`,
    codigo: `10620`,
    imagen: `https://homepoint.site/img/10620.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,99`
  },
  {
    nombre: `VELADOR CAPIBARA COD368`,
    codigo: `10621`,
    imagen: `https://homepoint.site/img/10621.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,11`
  },
  {
    nombre: `ESPEJO GRANDE MAQUILLADOR CON LUZ`,
    codigo: `10624`,
    imagen: `https://homepoint.site/img/10624.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,24`
  },
  {
    nombre: `RELOJ SMART ULTRA 2 7 EN 1`,
    codigo: `10626`,
    imagen: `https://homepoint.site/img/10626.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,23`
  },
  {
    nombre: `RELOJ TK500`,
    codigo: `10628`,
    imagen: `https://homepoint.site/img/10628.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$27,17`
  },
  {
    nombre: `LATTAFA YARA MOI 100 ML`,
    codigo: `10649`,
    imagen: `https://homepoint.site/img/10649.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$45,73`
  },
  {
    nombre: `LATTAFA YARA PINK 100 ML`,
    codigo: `10662`,
    imagen: `https://homepoint.site/img/10662.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$53,10`
  },
  {
    nombre: `BALANZA MINI ORO`,
    codigo: `10674`,
    imagen: `https://homepoint.site/img/10674.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `PARLANTE JBL CUADRADO`,
    codigo: `10676`,
    imagen: `https://homepoint.site/img/10676.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,54`
  },
  {
    nombre: `CARGADOR MAGSAFE`,
    codigo: `10678`,
    imagen: `https://homepoint.site/img/10678.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,47`
  },
  {
    nombre: `REMERA MULTIMARCA`,
    codigo: `10681`,
    imagen: `https://homepoint.site/img/10681.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,20`
  },
  {
    nombre: `PARLANTE JBL CLIP`,
    codigo: `10682`,
    imagen: `https://homepoint.site/img/10682.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,13`
  },
  {
    nombre: `BATERY PACK IPHONE`,
    codigo: `10684`,
    imagen: `https://homepoint.site/img/10684.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,80`
  },
  {
    nombre: `BALANZA COMERCIAL COLORES 40 KG`,
    codigo: `10692`,
    imagen: `https://homepoint.site/img/10692.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,30`
  },
  {
    nombre: `PLANCHA PARA PELO HT858`,
    codigo: `10694`,
    imagen: `https://homepoint.site/img/10694.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,51`
  },
  {
    nombre: `VAPORERA PLANCHA VAPOR`,
    codigo: `10695`,
    imagen: `https://homepoint.site/img/10695.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,71`
  },
  {
    nombre: `SOPORTE FIJO TV 40-80`,
    codigo: `10697`,
    imagen: `https://homepoint.site/img/10697.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,18`
  },
  {
    nombre: `AURICULAR P9`,
    codigo: `10702`,
    imagen: `https://homepoint.site/img/10702.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,32`
  },
  {
    nombre: `LUZ PARA BICI DOBLE`,
    codigo: `10710`,
    imagen: `https://homepoint.site/img/10710.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `BOLSA DE DORMIR`,
    codigo: `10713`,
    imagen: `https://homepoint.site/img/10713.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,67`
  },
  {
    nombre: `AURICULAR AIRPOD MAX`,
    codigo: `10715`,
    imagen: `https://homepoint.site/img/10715.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,25`
  },
  {
    nombre: `CORTAPELO DALING SEMIPROFESIONAL DL-1167`,
    codigo: `10733`,
    imagen: `https://homepoint.site/img/10733.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,50`
  },
  {
    nombre: `CAJA DE CUBIERTO X 24 BARICHELLO`,
    codigo: `10738`,
    imagen: `https://homepoint.site/img/10738.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,91`
  },
  {
    nombre: `CEPILLO SACA PELUSA`,
    codigo: `10739`,
    imagen: `https://homepoint.site/img/10739.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,01`
  },
  {
    nombre: `POWER BANK HASTA 15000 MAH`,
    codigo: `10752`,
    imagen: `https://homepoint.site/img/10752.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,18`
  },
  {
    nombre: `POWER BANK HASTA 25000 MAH`,
    codigo: `10753`,
    imagen: `https://homepoint.site/img/10753.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,50`
  },
  {
    nombre: `CASCO PARA BICICLETA`,
    codigo: `10755`,
    imagen: `https://homepoint.site/img/10755.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,41`
  },
  {
    nombre: `SET DESTORNILLADORES X 6 PCS`,
    codigo: `10757`,
    imagen: `https://homepoint.site/img/10757.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,34`
  },
  {
    nombre: `CEPILLO DE LIMPIEZA ELECTRICO`,
    codigo: `10758`,
    imagen: `https://homepoint.site/img/10758.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,74`
  },
  {
    nombre: `RELOJ SMART WATCH S10`,
    codigo: `10759`,
    imagen: `https://homepoint.site/img/10759.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,28`
  },
  {
    nombre: `CABEZAL CARGADOR CELULAR`,
    codigo: `10768`,
    imagen: `https://homepoint.site/img/10768.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,98`
  },
  {
    nombre: `CABLE CARGADOR USB-C`,
    codigo: `10774`,
    imagen: `https://homepoint.site/img/10774.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,70`
  },
  {
    nombre: `MINIPIMER / BATIDORA 4 EN 1`,
    codigo: `10776`,
    imagen: `https://homepoint.site/img/10776.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$43,22`
  },
  {
    nombre: `WOK`,
    codigo: `10778`,
    imagen: `https://homepoint.site/img/10778.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,05`
  },
  {
    nombre: `RELOJ SMART 8 EN 1 D 200`,
    codigo: `10783`,
    imagen: `https://homepoint.site/img/10783.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,30`
  },
  {
    nombre: `CEPILLO DE PELO`,
    codigo: `10785`,
    imagen: `https://homepoint.site/img/10785.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,06`
  },
  {
    nombre: `SOPORTE PLEGABLE TABLET/TELEFONO`,
    codigo: `10789`,
    imagen: `https://homepoint.site/img/10789.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,94`
  },
  {
    nombre: `SOFA INFLABLE`,
    codigo: `10791`,
    imagen: `https://homepoint.site/img/10791.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,81`
  },
  {
    nombre: `MASAJEADOR C/ MANGO JC395`,
    codigo: `10797`,
    imagen: `https://homepoint.site/img/10797.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,23`
  },
  {
    nombre: `POWER BANK MI XIAOMI`,
    codigo: `10800`,
    imagen: `https://homepoint.site/img/10800.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO SL21109`,
    codigo: `10803`,
    imagen: `https://homepoint.site/img/10803.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,52`
  },
  {
    nombre: `AURORA VANILLA EXPRESSO 100 ML`,
    codigo: `10809`,
    imagen: `https://homepoint.site/img/10809.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$67,85`
  },
  {
    nombre: `AURORA CHERRY IN THE WOODS 100 ML`,
    codigo: `10810`,
    imagen: `https://homepoint.site/img/10810.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$82,60`
  },
  {
    nombre: `LASER NIVEL LT11`,
    codigo: `10817`,
    imagen: `https://homepoint.site/img/10817.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,55`
  },
  {
    nombre: `LUZ PARA BICI CROO667`,
    codigo: `10820`,
    imagen: `https://homepoint.site/img/10820.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,21`
  },
  {
    nombre: `DESTORNILLADOR X 2`,
    codigo: `10822`,
    imagen: `https://homepoint.site/img/10822.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,92`
  },
  {
    nombre: `MINI MASAJEADOR PORTATIL PARCHE`,
    codigo: `10826`,
    imagen: `https://homepoint.site/img/10826.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,88`
  },
  {
    nombre: `FABRICA DE PIZZAS`,
    codigo: `10827`,
    imagen: `https://homepoint.site/img/10827.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$60,03`
  },
  {
    nombre: `BODY ARABES`,
    codigo: `10836`,
    imagen: `https://homepoint.site/img/10836.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,78`
  },
  {
    nombre: `TAG LOCALIZADOR BLUETOOTH`,
    codigo: `10837`,
    imagen: `https://homepoint.site/img/10837.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,64`
  },
  {
    nombre: `ASPIRADORA REMOVEDOR PELO Y PELUSA`,
    codigo: `10840`,
    imagen: `https://homepoint.site/img/10840.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,73`
  },
  {
    nombre: `SET DESTORNILLADOR LLAVE T 29 PCS`,
    codigo: `10841`,
    imagen: `https://homepoint.site/img/10841.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `BOTELLA INFANTIL 550 ML 4316`,
    codigo: `10844`,
    imagen: `https://homepoint.site/img/10844.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,28`
  },
  {
    nombre: `CAFETERA INALAMBRICA`,
    codigo: `10848`,
    imagen: `https://homepoint.site/img/10848.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$85,55`
  },
  {
    nombre: `BATIDOR INALAMBRICA OURUYU`,
    codigo: `10856`,
    imagen: `https://homepoint.site/img/10856.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,21`
  },
  {
    nombre: `MASAJEADOR DE PIE PLANTILLA`,
    codigo: `10858`,
    imagen: `https://homepoint.site/img/10858.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,36`
  },
  {
    nombre: `ORGANIZADOR DE MESADA`,
    codigo: `10859`,
    imagen: `https://homepoint.site/img/10859.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,89`
  },
  {
    nombre: `SET CUCHILLO COCINA 2 PCS`,
    codigo: `10861`,
    imagen: `https://homepoint.site/img/10861.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `LATTAFA ANGHAM EDP 100 ML`,
    codigo: `10871`,
    imagen: `https://homepoint.site/img/10871.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,20`
  },
  {
    nombre: `LATTAFA HER CONFESSION EDO 100 ML`,
    codigo: `10872`,
    imagen: `https://homepoint.site/img/10872.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$53,10`
  },
  {
    nombre: `MAQUINA CORTADORAPELO HITOSHY WL-10002`,
    codigo: `10882`,
    imagen: `https://homepoint.site/img/10882.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,03`
  },
  {
    nombre: `CAFETERA ELECTRICA ORYX`,
    codigo: `10884`,
    imagen: `https://homepoint.site/img/10884.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,25`
  },
  {
    nombre: `MOUSE INALAMBRICO`,
    codigo: `10887`,
    imagen: `https://homepoint.site/img/10887.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,23`
  },
  {
    nombre: `MASAJEADOR PIE USB CALEFACCION`,
    codigo: `10894`,
    imagen: `https://homepoint.site/img/10894.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,96`
  },
  {
    nombre: `ESCURRIDOR EXTENSIBLE`,
    codigo: `10897`,
    imagen: `https://homepoint.site/img/10897.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,80`
  },
  {
    nombre: `UTENSILLOS SILICONA 5 PCS`,
    codigo: `10898`,
    imagen: `https://homepoint.site/img/10898.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,79`
  },
  {
    nombre: `TERMOMETRO PARA HOGAR`,
    codigo: `10899`,
    imagen: `https://homepoint.site/img/10899.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,34`
  },
  {
    nombre: `PICADORA DE VERDURAS A CUERDA PVKA17`,
    codigo: `10900`,
    imagen: `https://homepoint.site/img/10900.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,58`
  },
  {
    nombre: `CAJA FICHERO POKER 200 FICHAS WTJM01`,
    codigo: `10901`,
    imagen: `https://homepoint.site/img/10901.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,46`
  },
  {
    nombre: `MASAJEDOR CORPORAL`,
    codigo: `10903`,
    imagen: `https://homepoint.site/img/10903.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,50`
  },
  {
    nombre: `ESPEJO VIAJERO`,
    codigo: `10906`,
    imagen: `https://homepoint.site/img/10906.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,16`
  },
  {
    nombre: `PARLANTE JBL ALEXE CHICO`,
    codigo: `10908`,
    imagen: `https://homepoint.site/img/10908.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,91`
  },
  {
    nombre: `PARLANTE JBL ALEXE GRANDE`,
    codigo: `10909`,
    imagen: `https://homepoint.site/img/10909.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,45`
  },
  {
    nombre: `CONTROL REMOTO 4K SMART ST404`,
    codigo: `10911`,
    imagen: `https://homepoint.site/img/10911.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,39`
  },
  {
    nombre: `ORGANIZADOR DE COCINA DSH888`,
    codigo: `10913`,
    imagen: `https://homepoint.site/img/10913.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,87`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 7 PCS`,
    codigo: `10915`,
    imagen: `https://homepoint.site/img/10915.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,62`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 10 PCS`,
    codigo: `10916`,
    imagen: `https://homepoint.site/img/10916.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,01`
  },
  {
    nombre: `CABLE PARA BATERIA 1000 W`,
    codigo: `10918`,
    imagen: `https://homepoint.site/img/10918.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,85`
  },
  {
    nombre: `CINTA DOBLE FAZ`,
    codigo: `10919`,
    imagen: `https://homepoint.site/img/10919.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,03`
  },
  {
    nombre: `ARRANCADOR AUTO CON COMPRESOR`,
    codigo: `10920`,
    imagen: `https://homepoint.site/img/10920.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$72,28`
  },
  {
    nombre: `MOVEDOR AUXILIAR DE MUEBLES`,
    codigo: `10923`,
    imagen: `https://homepoint.site/img/10923.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,08`
  },
  {
    nombre: `PATILLERA RETRO NOVATIX`,
    codigo: `10924`,
    imagen: `https://homepoint.site/img/10924.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,46`
  },
  {
    nombre: `CUCHILLA P9 MANGO CROMADO`,
    codigo: `10927`,
    imagen: `https://homepoint.site/img/10927.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,69`
  },
  {
    nombre: `CUCHILLO 6 MANGO MADERA`,
    codigo: `10930`,
    imagen: `https://homepoint.site/img/10930.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,65`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 108 PCS KTO`,
    codigo: `10936`,
    imagen: `https://homepoint.site/img/10936.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$60,92`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 150 PCS KTO`,
    codigo: `10937`,
    imagen: `https://homepoint.site/img/10937.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,04`
  },
  {
    nombre: `CORREA PARA PERRO RETRACTIL 5M`,
    codigo: `10940`,
    imagen: `https://homepoint.site/img/10940.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,14`
  },
  {
    nombre: `LUZ BALIZA SOLAR HB6609`,
    codigo: `10942`,
    imagen: `https://homepoint.site/img/10942.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,24`
  },
  {
    nombre: `CAFETERA EXPRESO 3 EN 1 CAPSULAS`,
    codigo: `10943`,
    imagen: `https://homepoint.site/img/10943.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$125,38`
  },
  {
    nombre: `CORTAPELO VINTAGE T9`,
    codigo: `10944`,
    imagen: `https://homepoint.site/img/10944.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,44`
  },
  {
    nombre: `AFEITADORA SHAVER CON VISOR BATERIA`,
    codigo: `10947`,
    imagen: `https://homepoint.site/img/10947.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,28`
  },
  {
    nombre: `VELADOR CAPIBARA COD343H`,
    codigo: `10949`,
    imagen: `https://homepoint.site/img/10949.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,87`
  },
  {
    nombre: `SET BOUTIQUE TOKYO CON HERRAMIENTAS`,
    codigo: `10954`,
    imagen: `https://homepoint.site/img/10954.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$73,75`
  },
  {
    nombre: `AURICULAR INALAMBRICO M88`,
    codigo: `10960`,
    imagen: `https://homepoint.site/img/10960.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,08`
  },
  {
    nombre: `HUMIDIFICADOR PIEDRAS VOLCANICAS`,
    codigo: `10962`,
    imagen: `https://homepoint.site/img/10962.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,07`
  },
  {
    nombre: `JUEGO DE LLAVE ALEN 9 PCS`,
    codigo: `10963`,
    imagen: `https://homepoint.site/img/10963.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,13`
  },
  {
    nombre: `SOPORTE CELULAR PARA AUTO CH252`,
    codigo: `10969`,
    imagen: `https://homepoint.site/img/10969.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,87`
  },
  {
    nombre: `ZAPATILLA ALARGUE 6 USB POWERSOCKET`,
    codigo: `10973`,
    imagen: `https://homepoint.site/img/10973.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,49`
  },
  {
    nombre: `HUMIDIFICADOR FOGATA CON LLAMAS CNW21608 270ML`,
    codigo: `10984`,
    imagen: `https://homepoint.site/img/10984.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,55`
  },
  {
    nombre: `HUMIDIFICADOR VOLCAN MACHINE JL1028`,
    codigo: `10985`,
    imagen: `https://homepoint.site/img/10985.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,34`
  },
  {
    nombre: `RELOJ DESPERTADOR ESPEJO LED DT6505`,
    codigo: `10988`,
    imagen: `https://homepoint.site/img/10988.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,20`
  },
  {
    nombre: `PANEL LUZ LED SELFIE BM017`,
    codigo: `10991`,
    imagen: `https://homepoint.site/img/10991.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,32`
  },
  {
    nombre: `LUNCHERA CONSERVADORA 6 LTS`,
    codigo: `10993`,
    imagen: `https://homepoint.site/img/10993.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,32`
  },
  {
    nombre: `INFLADOR COMPRESOR RUEDA`,
    codigo: `10995`,
    imagen: `https://homepoint.site/img/10995.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,42`
  },
  {
    nombre: `PARLANTE 4 X 2 SV 2401`,
    codigo: `10997`,
    imagen: `https://homepoint.site/img/10997.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,81`
  },
  {
    nombre: `CABLE USB-C APPLE`,
    codigo: `11000`,
    imagen: `https://homepoint.site/img/11000.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `CABEZAL CARGADOR APPLE`,
    codigo: `11002`,
    imagen: `https://homepoint.site/img/11002.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,83`
  },
  {
    nombre: `AURICULAR GAMER`,
    codigo: `10139`,
    imagen: `https://homepoint.site/img/10139.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,23`
  },
  {
    nombre: `CARGADOR IPHONE PH14P`,
    codigo: `10853`,
    imagen: `https://homepoint.site/img/10853.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,20`
  },
  {
    nombre: `SET CUCHILLO DE COCINA 3 PCS`,
    codigo: `10854`,
    imagen: `https://homepoint.site/img/10854.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,55`
  },
];
