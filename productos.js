const productos = [
  {
    nombre: `ASAD ZANZIBAR`,
    codigo: `11122`,
    imagen: `https://homepoint.site/img/11122.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$33,38`
  },
  {
    nombre: `LATTAFA PRIDE FAKHAR FEMENINO 100 ML`,
    codigo: `11121`,
    imagen: `https://homepoint.site/img/11121.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$49,40`
  },
  {
    nombre: `LATTAFA OUD MOOD`,
    codigo: `11120`,
    imagen: `https://homepoint.site/img/11120.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$42,72`
  },
  {
    nombre: `XIAOMI POCO M6 PRO`,
    codigo: `11119`,
    imagen: `https://homepoint.site/img/11119.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$280,35`
  },
  {
    nombre: `CLUB DE NUIT ELIXIR`,
    codigo: `11118`,
    imagen: `https://homepoint.site/img/11118.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$56,07`
  },
  {
    nombre: `CLUB DE NUIT MILESTONE`,
    codigo: `11117`,
    imagen: `https://homepoint.site/img/11117.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$52,06`
  },
  {
    nombre: `TV SMART 32 TALENT`,
    codigo: `11116`,
    imagen: `https://homepoint.site/img/11116.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$197,58`
  },
  {
    nombre: `LLAVE KIT 216 PCS`,
    codigo: `11115`,
    imagen: `https://homepoint.site/img/11115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$122,82`
  },
  {
    nombre: `NEBULIZADOR`,
    codigo: `11114`,
    imagen: `https://homepoint.site/img/11114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,95`
  },
  {
    nombre: `TV BOX MX10`,
    codigo: `11113`,
    imagen: `https://homepoint.site/img/11113.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$32,04`
  },
  {
    nombre: `CONSOLA RETRO GAME STICK BLANCA`,
    codigo: `11112`,
    imagen: `https://homepoint.site/img/11112.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$36,05`
  },
  {
    nombre: `AUTO CONTROL REMOTO CYBERTRUCK`,
    codigo: `11111`,
    imagen: `https://homepoint.site/img/11111.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,82`
  },
  {
    nombre: `CARTEL ABIERTO/KIOSCO`,
    codigo: `11110`,
    imagen: `https://homepoint.site/img/11110.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,55`
  },
  {
    nombre: `CAMARA CON IMPRESORA INFANTIL`,
    codigo: `11109`,
    imagen: `https://homepoint.site/img/11109.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,56`
  },
  {
    nombre: `SET TAPPER COLORES X 4 UNIDADES`,
    codigo: `11108`,
    imagen: `https://homepoint.site/img/11108.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `ORGANIZADOR LAVARROPA`,
    codigo: `11107`,
    imagen: `https://homepoint.site/img/11107.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,23`
  },
  {
    nombre: `AURICULAR BINCHA CAPIBARA`,
    codigo: `11106`,
    imagen: `https://homepoint.site/img/11106.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,68`
  },
  {
    nombre: `LINTERNA PARLANTE SOLAR`,
    codigo: `11105`,
    imagen: `https://homepoint.site/img/11105.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,41`
  },
  {
    nombre: `LUZ BINCHA MINERA`,
    codigo: `11104`,
    imagen: `https://homepoint.site/img/11104.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,35`
  },
  {
    nombre: `ALARGUE TORRE`,
    codigo: `11103`,
    imagen: `https://homepoint.site/img/11103.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,02`
  },
  {
    nombre: `CEPILLO ELECTRICO DE DUCHA`,
    codigo: `11102`,
    imagen: `https://homepoint.site/img/11102.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,89`
  },
  {
    nombre: `HUMIDIFICADOR TEMPLO`,
    codigo: `11101`,
    imagen: `https://homepoint.site/img/11101.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,42`
  },
  {
    nombre: `LICUADORA GRANDE JARRA SVD-703`,
    codigo: `11100`,
    imagen: `https://homepoint.site/img/11100.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$34,71`
  },
  {
    nombre: `POWER BANK 20.000 HYTOSHY DOBLE CABLE`,
    codigo: `11099`,
    imagen: `https://homepoint.site/img/11099.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,02`
  },
  {
    nombre: `PISTA DINOSAURIO FLEXIBLE`,
    codigo: `11098`,
    imagen: `https://homepoint.site/img/11098.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,62`
  },
  {
    nombre: `PIZARRA GRANDE CAPIBARA / LABUBU`,
    codigo: `11097`,
    imagen: `https://homepoint.site/img/11097.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,67`
  },
  {
    nombre: `FOUNTAIN CHOCOLATE`,
    codigo: `11096`,
    imagen: `https://homepoint.site/img/11096.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$32,04`
  },
  {
    nombre: `AUTO ANIMALES TRANSFORMABLES`,
    codigo: `11095`,
    imagen: `https://homepoint.site/img/11095.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,95`
  },
  {
    nombre: `AUTO CONTROL REMOTO RUEDA GRANDE`,
    codigo: `11094`,
    imagen: `https://homepoint.site/img/11094.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$33,11`
  },
  {
    nombre: `AURICULAR SAMSUNG GALAXY BUDS 3 PRO`,
    codigo: `11093`,
    imagen: `https://homepoint.site/img/11093.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,02`
  },
  {
    nombre: `AURICULAR JBL TUNE K63`,
    codigo: `11092`,
    imagen: `https://homepoint.site/img/11092.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,02`
  },
  {
    nombre: `AURICULAR VINCHA JBL J127`,
    codigo: `11091`,
    imagen: `https://homepoint.site/img/11091.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `MAQUINA DE COSER SM505A`,
    codigo: `11090`,
    imagen: `https://homepoint.site/img/11090.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$38,72`
  },
  {
    nombre: `SECARROPA ELECTRICO`,
    codigo: `11089`,
    imagen: `https://homepoint.site/img/11089.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,24`
  },
  {
    nombre: `PARÑANTE 4 X 2 RGB ZQS4210S`,
    codigo: `11088`,
    imagen: `https://homepoint.site/img/11088.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,50`
  },
  {
    nombre: `LUZ DE RELLENO GRANDE`,
    codigo: `11087`,
    imagen: `https://homepoint.site/img/11087.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,36`
  },
  {
    nombre: `HUMIDIFICADOR ENCASTRE LEGO`,
    codigo: `11086`,
    imagen: `https://homepoint.site/img/11086.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `MOPA C/BALDE SEPARADORA DE AGUA`,
    codigo: `11085`,
    imagen: `https://homepoint.site/img/11085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `PARLANTE BOOMBOX 2 RGB`,
    codigo: `11084`,
    imagen: `https://homepoint.site/img/11084.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$36,82`
  },
  {
    nombre: `PARLANTE BOOMBOX 3`,
    codigo: `11083`,
    imagen: `https://homepoint.site/img/11083.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$38,31`
  },
  {
    nombre: `PAVA ELECTRICA PLEGABLE`,
    codigo: `11082`,
    imagen: `https://homepoint.site/img/11082.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,08`
  },
  {
    nombre: `MOCHILA MATERNAL CUNA CAMBIADOR`,
    codigo: `11081`,
    imagen: `https://homepoint.site/img/11081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,63`
  },
  {
    nombre: `AURICULAR INPODS 12 COLORES`,
    codigo: `11080`,
    imagen: `https://homepoint.site/img/11080.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,00`
  },
  {
    nombre: `CINTA LEVANTA BUSTO`,
    codigo: `11079`,
    imagen: `https://homepoint.site/img/11079.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,14`
  },
  {
    nombre: `CARTERA MAQUILLAJE TINY`,
    codigo: `11078`,
    imagen: `https://homepoint.site/img/11078.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,02`
  },
  {
    nombre: `MAQUILLAJE BLISTER TINY`,
    codigo: `11077`,
    imagen: `https://homepoint.site/img/11077.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,54`
  },
  {
    nombre: `LIBRETA ANIMADA`,
    codigo: `11076`,
    imagen: `https://homepoint.site/img/11076.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,40`
  },
  {
    nombre: `GAS PIMIENTA LLAVERO`,
    codigo: `11075`,
    imagen: `https://homepoint.site/img/11075.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,54`
  },
  {
    nombre: `MAQUILLAJE MARIPOSA`,
    codigo: `11074`,
    imagen: `https://homepoint.site/img/11074.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `SONNY ANGELS`,
    codigo: `11073`,
    imagen: `https://homepoint.site/img/11073.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `KIT BASKET`,
    codigo: `11072`,
    imagen: `https://homepoint.site/img/11072.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,38`
  },
  {
    nombre: `MAQUILLAJE CARRUAJE`,
    codigo: `11071`,
    imagen: `https://homepoint.site/img/11071.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,50`
  },
  {
    nombre: `MAQUILLAJE PALETA`,
    codigo: `11070`,
    imagen: `https://homepoint.site/img/11070.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,55`
  },
  {
    nombre: `BATE BASEBALL`,
    codigo: `11069`,
    imagen: `https://homepoint.site/img/11069.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,67`
  },
  {
    nombre: `MAQUILLAJE VALIJA TINY`,
    codigo: `11068`,
    imagen: `https://homepoint.site/img/11068.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$32,04`
  },
  {
    nombre: `SORPRESA CAPIBARA BOLA`,
    codigo: `11067`,
    imagen: `https://homepoint.site/img/11067.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,40`
  },
  {
    nombre: `LABUBU SORPRESA CHICO`,
    codigo: `11066`,
    imagen: `https://homepoint.site/img/11066.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,54`
  },
  {
    nombre: `ROMPECABEZA CHICO`,
    codigo: `11065`,
    imagen: `https://homepoint.site/img/11065.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,54`
  },
  {
    nombre: `GOMA LABUBU X4`,
    codigo: `11064`,
    imagen: `https://homepoint.site/img/11064.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,40`
  },
  {
    nombre: `GUITARRA MUSICAL`,
    codigo: `11063`,
    imagen: `https://homepoint.site/img/11063.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,68`
  },
  {
    nombre: `TERMOMETRO COCINA`,
    codigo: `11062`,
    imagen: `https://homepoint.site/img/11062.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,60`
  },
  {
    nombre: `CALCULADORA DM-1200V`,
    codigo: `11061`,
    imagen: `https://homepoint.site/img/11061.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `SLIME BOTELLA`,
    codigo: `11060`,
    imagen: `https://homepoint.site/img/11060.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,47`
  },
  {
    nombre: `PONY SALTARIN`,
    codigo: `11059`,
    imagen: `https://homepoint.site/img/11059.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,43`
  },
  {
    nombre: `HAMBURGUESA CAJA`,
    codigo: `11058`,
    imagen: `https://homepoint.site/img/11058.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,47`
  },
  {
    nombre: `HAMBURGUESA BLISTER`,
    codigo: `11057`,
    imagen: `https://homepoint.site/img/11057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,60`
  },
  {
    nombre: `CARRITO BEBE`,
    codigo: `11056`,
    imagen: `https://homepoint.site/img/11056.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,60`
  },
  {
    nombre: `GUANTE TOUCH`,
    codigo: `11055`,
    imagen: `https://homepoint.site/img/11055.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,67`
  },
  {
    nombre: `DINOSAURIO A CUERDA`,
    codigo: `11054`,
    imagen: `https://homepoint.site/img/11054.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,47`
  },
  {
    nombre: `PELUCHE CAPIBARA XXL 90 CM`,
    codigo: `11053`,
    imagen: `https://homepoint.site/img/11053.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$69,42`
  },
  {
    nombre: `PELUCHE COLAPINTO GRANDE`,
    codigo: `11052`,
    imagen: `https://homepoint.site/img/11052.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$60,08`
  },
  {
    nombre: `CAJA REGISTRADORA GRANDE`,
    codigo: `11051`,
    imagen: `https://homepoint.site/img/11051.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,42`
  },
  {
    nombre: `CAJA REGISTRADORA CHICA`,
    codigo: `11050`,
    imagen: `https://homepoint.site/img/11050.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,21`
  },
  {
    nombre: `AUTO R.CONTROL ARTICULADO CX-83`,
    codigo: `11049`,
    imagen: `https://homepoint.site/img/11049.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$26,57`
  },
  {
    nombre: `AUTO R.CONTROL ARTICULADO SPIDERMAN CX-86Z`,
    codigo: `11048`,
    imagen: `https://homepoint.site/img/11048.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,18`
  },
  {
    nombre: `AUTO R.CONTROL SPIDERMAN CX-81Z`,
    codigo: `11047`,
    imagen: `https://homepoint.site/img/11047.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$26,57`
  },
  {
    nombre: `JUEGO DE OLLAS CON PLANCHA TOKIO 8`,
    codigo: `11046`,
    imagen: `https://homepoint.site/img/11046.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$62,74`
  },
  {
    nombre: `LUZ DE EMERGENCIA SOLAR`,
    codigo: `11045`,
    imagen: `https://homepoint.site/img/11045.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,15`
  },
  {
    nombre: `CINTA NEUROMUSCULAR KINESIOLOGICA`,
    codigo: `11044`,
    imagen: `https://homepoint.site/img/11044.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,27`
  },
  {
    nombre: `RODILLERA DE COMPRESION`,
    codigo: `11043`,
    imagen: `https://homepoint.site/img/11043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,34`
  },
  {
    nombre: `JUEGO DE OLLAS CON M. DESMONTABLE Y SARTENES`,
    codigo: `11042`,
    imagen: `https://homepoint.site/img/11042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$57,38`
  },
  {
    nombre: `ASPIRADORA INALAMBRICA CON BATERIA`,
    codigo: `11041`,
    imagen: `https://homepoint.site/img/11041.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,35`
  },
  {
    nombre: `LICUADORA DE MANO 6 CUCHILLAS`,
    codigo: `11040`,
    imagen: `https://homepoint.site/img/11040.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,70`
  },
  {
    nombre: `BOTELLA ATOMIZADOR SPRAY DE ACEITE`,
    codigo: `11039`,
    imagen: `https://homepoint.site/img/11039.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,04`
  },
  {
    nombre: `MAQUINA AFEITADORA FLIPULPS`,
    codigo: `11038`,
    imagen: `https://homepoint.site/img/11038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,93`
  },
  {
    nombre: `RELOJ SMART T900`,
    codigo: `11037`,
    imagen: `https://homepoint.site/img/11037.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,58`
  },
  {
    nombre: `PERRITO LABUBU SONIDOS`,
    codigo: `11036`,
    imagen: `https://homepoint.site/img/11036.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,74`
  },
  {
    nombre: `LLAVERO LABUBU/CAPIBARA`,
    codigo: `11035`,
    imagen: `https://homepoint.site/img/11035.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,14`
  },
  {
    nombre: `LUZ DE LED PARA BOTELLA`,
    codigo: `11034`,
    imagen: `https://homepoint.site/img/11034.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,54`
  },
  {
    nombre: `SOPORTE CELULAR VIDEO MAKER`,
    codigo: `11033`,
    imagen: `https://homepoint.site/img/11033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,81`
  },
  {
    nombre: `CANDADO CON ALARMA`,
    codigo: `11032`,
    imagen: `https://homepoint.site/img/11032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,54`
  },
  {
    nombre: `BASE CARGADOR DOBLE JOYSTICK PS5`,
    codigo: `11031`,
    imagen: `https://homepoint.site/img/11031.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,28`
  },
  {
    nombre: `SORPRESA CAPIBARA`,
    codigo: `11030`,
    imagen: `https://homepoint.site/img/11030.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,27`
  },
  {
    nombre: `TENSIOMETRO DE BRAZO DSH397`,
    codigo: `11029`,
    imagen: `https://homepoint.site/img/11029.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,56`
  },
  {
    nombre: `SECADOR DE PELO 2200 W 4 EN 1 CAUIPE`,
    codigo: `11028`,
    imagen: `https://homepoint.site/img/11028.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,28`
  },
  {
    nombre: `PISTA DE AUTOS LABUBU PARKING LOT`,
    codigo: `11027`,
    imagen: `https://homepoint.site/img/11027.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,95`
  },
  {
    nombre: `CARGADOR CELULAR 25W CON CABLE USB-C`,
    codigo: `11026`,
    imagen: `https://homepoint.site/img/11026.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `ESCURRIDOR DE TELA PARA CUBIERTOS`,
    codigo: `11025`,
    imagen: `https://homepoint.site/img/11025.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,48`
  },
  {
    nombre: `PISTOLA BURBUJERO CON REPUESTO THC01`,
    codigo: `11024`,
    imagen: `https://homepoint.site/img/11024.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,95`
  },
  {
    nombre: `TABLA DE MADERA Y MARMOL`,
    codigo: `11023`,
    imagen: `https://homepoint.site/img/11023.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,62`
  },
  {
    nombre: `CHALECO FLUOR REFLEX`,
    codigo: `11022`,
    imagen: `https://homepoint.site/img/11022.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,60`
  },
  {
    nombre: `VINCHA DEPORTIVA CON BLUETOOTH`,
    codigo: `11021`,
    imagen: `https://homepoint.site/img/11021.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,94`
  },
  {
    nombre: `ORGANIZADOR ESQUINERO DE BAÑO`,
    codigo: `11020`,
    imagen: `https://homepoint.site/img/11020.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,08`
  },
  {
    nombre: `ORGANIZADOR PARA BAÑO TW103`,
    codigo: `11019`,
    imagen: `https://homepoint.site/img/11019.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,76`
  },
  {
    nombre: `VALIJA DE PINTURA 42 PCS`,
    codigo: `11018`,
    imagen: `https://homepoint.site/img/11018.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,20`
  },
  {
    nombre: `VALIJA DE PINTURA 160 PCS`,
    codigo: `11017`,
    imagen: `https://homepoint.site/img/11017.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,01`
  },
  {
    nombre: `MATE LISTO 750 ML ROLAN`,
    codigo: `11016`,
    imagen: `https://homepoint.site/img/11016.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,09`
  },
  {
    nombre: `MATE LISTO 500 ML ROLAN`,
    codigo: `11015`,
    imagen: `https://homepoint.site/img/11015.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,89`
  },
  {
    nombre: `PISTA LABUBU CAPIBARA`,
    codigo: `11014`,
    imagen: `https://homepoint.site/img/11014.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,15`
  },
  {
    nombre: `PULSERA LABUBU`,
    codigo: `11013`,
    imagen: `https://homepoint.site/img/11013.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,41`
  },
  {
    nombre: `CINTA METRICA CON LASER Y NIVEL`,
    codigo: `11012`,
    imagen: `https://homepoint.site/img/11012.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,01`
  },
  {
    nombre: `CUTTER 188 MM BLISTER X 12`,
    codigo: `11011`,
    imagen: `https://homepoint.site/img/11011.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,27`
  },
  {
    nombre: `CARGADOR PARA AUTO CON LUCES 4 EN 1`,
    codigo: `11010`,
    imagen: `https://homepoint.site/img/11010.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,75`
  },
  {
    nombre: `CABLE CARGADOR 4 EN 1 SPRING`,
    codigo: `11009`,
    imagen: `https://homepoint.site/img/11009.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,07`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CARA / BOZO`,
    codigo: `11008`,
    imagen: `https://homepoint.site/img/11008.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,74`
  },
  {
    nombre: `AVION FIGHTER PLANE`,
    codigo: `11007`,
    imagen: `https://homepoint.site/img/11007.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,10`
  },
  {
    nombre: `PINZA 8 PULGADAS`,
    codigo: `11006`,
    imagen: `https://homepoint.site/img/11006.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `MINI PIMER SOKANY`,
    codigo: `11005`,
    imagen: `https://homepoint.site/img/11005.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,36`
  },
  {
    nombre: `MANTA CISNE EDREDON INTERMEDIO 2 1/2`,
    codigo: `11004`,
    imagen: `https://homepoint.site/img/11004.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,76`
  },
  {
    nombre: `TRIPODE ALTO`,
    codigo: `11003`,
    imagen: `https://homepoint.site/img/11003.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,07`
  },
  {
    nombre: `CABEZAL CARGADOR APPLE`,
    codigo: `11002`,
    imagen: `https://homepoint.site/img/11002.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,20`
  },
  {
    nombre: `CABLE LIGHTNING APPLE`,
    codigo: `11001`,
    imagen: `https://homepoint.site/img/11001.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,14`
  },
  {
    nombre: `CABLE USB-C APPLE`,
    codigo: `11000`,
    imagen: `https://homepoint.site/img/11000.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,40`
  },
  {
    nombre: `TV SMART 43 BGH B4325FH5`,
    codigo: `10999`,
    imagen: `https://homepoint.site/img/10999.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$293,70`
  },
  {
    nombre: `TV SMART 32 BGH B3223H5`,
    codigo: `10998`,
    imagen: `https://homepoint.site/img/10998.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$210,93`
  },
  {
    nombre: `PARLANTE 4 pulg 4 X 2 SV 2401`,
    codigo: `10997`,
    imagen: `https://homepoint.site/img/10997.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,36`
  },
  {
    nombre: `ASPIRADORA MOPA`,
    codigo: `10996`,
    imagen: `https://homepoint.site/img/10996.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$20,96`
  },
  {
    nombre: `INFLADOR COMPRESOR RUEDA`,
    codigo: `10995`,
    imagen: `https://homepoint.site/img/10995.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,15`
  },
  {
    nombre: `HORNO CAFETERO DESAYUNADOR`,
    codigo: `10994`,
    imagen: `https://homepoint.site/img/10994.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$72,09`
  },
  {
    nombre: `LUNCHERA CONSERVADORA 6 LTS`,
    codigo: `10993`,
    imagen: `https://homepoint.site/img/10993.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,68`
  },
  {
    nombre: `LIFTING MASAJEADOR`,
    codigo: `10992`,
    imagen: `https://homepoint.site/img/10992.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,02`
  },
  {
    nombre: `PANEL LUZ LED SELFIE BM017`,
    codigo: `10991`,
    imagen: `https://homepoint.site/img/10991.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,88`
  },
  {
    nombre: `BANQUETAS PVC REFORZADAS`,
    codigo: `10990`,
    imagen: `https://homepoint.site/img/10990.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,54`
  },
  {
    nombre: `SET DE BANO BAMBU`,
    codigo: `10989`,
    imagen: `https://homepoint.site/img/10989.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,68`
  },
  {
    nombre: `RELOJ DESPERTADOR ESPEJO LED DT6505`,
    codigo: `10988`,
    imagen: `https://homepoint.site/img/10988.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `CINTA AISLADORA PACK X 10`,
    codigo: `10987`,
    imagen: `https://homepoint.site/img/10987.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,07`
  },
  {
    nombre: `AURICULARES X15`,
    codigo: `10986`,
    imagen: `https://homepoint.site/img/10986.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,34`
  },
  {
    nombre: `HUMIDIFICADOR VOLCAN MACHINE JL1028`,
    codigo: `10985`,
    imagen: `https://homepoint.site/img/10985.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,08`
  },
  {
    nombre: `HUMIDIFICADOR FOGATA CON LLAMAS CNW21608 270ML`,
    codigo: `10984`,
    imagen: `https://homepoint.site/img/10984.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,23`
  },
  {
    nombre: `MOPA SIN LAVADO A MANO DSH`,
    codigo: `10983`,
    imagen: `https://homepoint.site/img/10983.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,35`
  },
  {
    nombre: `AURICULAR A9S PRO`,
    codigo: `10982`,
    imagen: `https://homepoint.site/img/10982.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,34`
  },
  {
    nombre: `LATTAFA ASAD BOURBON`,
    codigo: `10981`,
    imagen: `https://homepoint.site/img/10981.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$49,40`
  },
  {
    nombre: `TAZA DE VIDRIO MEZCLADORA MIXER`,
    codigo: `10980`,
    imagen: `https://homepoint.site/img/10980.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,89`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA X 24 PCS`,
    codigo: `10979`,
    imagen: `https://homepoint.site/img/10979.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `FREIDORA OM 6 LITROS`,
    codigo: `10978`,
    imagen: `https://homepoint.site/img/10978.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$73,42`
  },
  {
    nombre: `DRONE PLEGABLE`,
    codigo: `10977`,
    imagen: `https://homepoint.site/img/10977.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$26,70`
  },
  {
    nombre: `POWER BANK 10.000 MAH`,
    codigo: `10976`,
    imagen: `https://homepoint.site/img/10976.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,68`
  },
  {
    nombre: `SALERO Y PIMENTERO ALUMINIO 8971`,
    codigo: `10975`,
    imagen: `https://homepoint.site/img/10975.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,94`
  },
  {
    nombre: `SET ASADOR X 2 PCS ESTUCHE NEGRO`,
    codigo: `10974`,
    imagen: `https://homepoint.site/img/10974.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,88`
  },
  {
    nombre: `ZAPATILLA ALARGUE 6 USB POWERSOCKET`,
    codigo: `10973`,
    imagen: `https://homepoint.site/img/10973.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `CANDADO PLATEADO TLO3543`,
    codigo: `10972`,
    imagen: `https://homepoint.site/img/10972.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,27`
  },
  {
    nombre: `CANDADO PLATEADO 3546`,
    codigo: `10971`,
    imagen: `https://homepoint.site/img/10971.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,94`
  },
  {
    nombre: `DISPENSER PORTA ESPONJA`,
    codigo: `10970`,
    imagen: `https://homepoint.site/img/10970.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,67`
  },
  {
    nombre: `SOPORTE CELULAR PARA AUTO CH252`,
    codigo: `10969`,
    imagen: `https://homepoint.site/img/10969.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,00`
  },
  {
    nombre: `SOPORTE CELULAR PARA AUTO CH290`,
    codigo: `10968`,
    imagen: `https://homepoint.site/img/10968.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,00`
  },
  {
    nombre: `LATTAFA BADEE NOBLE BLUSH`,
    codigo: `10967`,
    imagen: `https://homepoint.site/img/10967.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$44,05`
  },
  {
    nombre: `LATTAFA OPULENT DUBAI`,
    codigo: `10966`,
    imagen: `https://homepoint.site/img/10966.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$38,72`
  },
  {
    nombre: `LATTAFA KHAMRAH DUKHAN`,
    codigo: `10965`,
    imagen: `https://homepoint.site/img/10965.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$62,74`
  },
  {
    nombre: `CLUB DE NUIT WOMAN`,
    codigo: `10964`,
    imagen: `https://homepoint.site/img/10964.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,73`
  },
  {
    nombre: `JUEGO DE LLAVE ALEN 9 PCS`,
    codigo: `10963`,
    imagen: `https://homepoint.site/img/10963.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,47`
  },
  {
    nombre: `HUMIDIFICADOR PIEDRAS VOLCANICAS`,
    codigo: `10962`,
    imagen: `https://homepoint.site/img/10962.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,36`
  },
  {
    nombre: `POWER BANK PORTATIL 20000 MAH`,
    codigo: `10961`,
    imagen: `https://homepoint.site/img/10961.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,62`
  },
  {
    nombre: `AURICULAR INALAMBRICO M88`,
    codigo: `10960`,
    imagen: `https://homepoint.site/img/10960.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,09`
  },
  {
    nombre: `TAZA CAPUCCINO X 4 PCS`,
    codigo: `10959`,
    imagen: `https://homepoint.site/img/10959.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,27`
  },
  {
    nombre: `JUEGO DE OLLAS 10 PCS WOVE`,
    codigo: `10958`,
    imagen: `https://homepoint.site/img/10958.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$70,62`
  },
  {
    nombre: `FREIDORA DE AIRE OM 3,5 LITROS`,
    codigo: `10957`,
    imagen: `https://homepoint.site/img/10957.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,73`
  },
  {
    nombre: `FREIDORA DE AIRE DIGITAL OM 4,5 LITROS`,
    codigo: `10956`,
    imagen: `https://homepoint.site/img/10956.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$62,61`
  },
  {
    nombre: `LINTERNA PICANA 1101AR2786`,
    codigo: `10955`,
    imagen: `https://homepoint.site/img/10955.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,41`
  },
  {
    nombre: `SET BOUTIQUE TOKYO CON HERRAMIENTAS`,
    codigo: `10954`,
    imagen: `https://homepoint.site/img/10954.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$63,81`
  },
  {
    nombre: `VELADOR CAPIBARA XJD-74`,
    codigo: `10953`,
    imagen: `https://homepoint.site/img/10953.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,47`
  },
  {
    nombre: `VELADOR DE FORMAS`,
    codigo: `10952`,
    imagen: `https://homepoint.site/img/10952.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,17`
  },
  {
    nombre: `VELADOR SILICONA CONEJITO`,
    codigo: `10951`,
    imagen: `https://homepoint.site/img/10951.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,21`
  },
  {
    nombre: `VELADOR CAPIBARA HONGO 339/340H`,
    codigo: `10950`,
    imagen: `https://homepoint.site/img/10950.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,08`
  },
  {
    nombre: `VELADOR CAPIBARA COD343H`,
    codigo: `10949`,
    imagen: `https://homepoint.site/img/10949.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,41`
  },
  {
    nombre: `ESPEJO MAQUILLADOR PLEGABLE 3 VIDRIOS`,
    codigo: `10948`,
    imagen: `https://homepoint.site/img/10948.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,49`
  },
  {
    nombre: `AFEITADORA SHAVER CON VISOR BATERIA`,
    codigo: `10947`,
    imagen: `https://homepoint.site/img/10947.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,74`
  },
  {
    nombre: `TV STICK BLANCO X10`,
    codigo: `10946`,
    imagen: `https://homepoint.site/img/10946.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,38`
  },
  {
    nombre: `CORTAPELO VINTAGE T9`,
    codigo: `10944`,
    imagen: `https://homepoint.site/img/10944.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,28`
  },
  {
    nombre: `CAFETERA EXPRESO 3 EN 1 CAPSULAS`,
    codigo: `10943`,
    imagen: `https://homepoint.site/img/10943.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$110,81`
  },
  {
    nombre: `LUZ BALIZA SOLAR HB6609`,
    codigo: `10942`,
    imagen: `https://homepoint.site/img/10942.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,89`
  },
  {
    nombre: `PARLANTE 4X2 GTS 1773 CON MICROFONO`,
    codigo: `10941`,
    imagen: `https://homepoint.site/img/10941.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,68`
  },
  {
    nombre: `CORREA PARA PERRO RETRACTIL 5M`,
    codigo: `10940`,
    imagen: `https://homepoint.site/img/10940.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,88`
  },
  {
    nombre: `CAFETERA EXPRESO DOBLE TAZA OM`,
    codigo: `10939`,
    imagen: `https://homepoint.site/img/10939.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$110,14`
  },
  {
    nombre: `LUZ DE EMERGENCIA 60 LED STAR 220V`,
    codigo: `10938`,
    imagen: `https://homepoint.site/img/10938.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,88`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 150 PCS KTO`,
    codigo: `10937`,
    imagen: `https://homepoint.site/img/10937.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$38,05`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 108 PCS KTO`,
    codigo: `10936`,
    imagen: `https://homepoint.site/img/10936.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$55,14`
  },
  {
    nombre: `VALIJA DE HERRAMIENTAS 245 PCS`,
    codigo: `10935`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$152,19`
  },
  {
    nombre: `MANTA PELUCHE CAPIBARA`,
    codigo: `10933`,
    imagen: `https://homepoint.site/img/10933.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,36`
  },
  {
    nombre: `TV SMART 32 XIAOMI`,
    codigo: `10931`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$226,95`
  },
  {
    nombre: `CUCHILLO 6 MANGO MADERA`,
    codigo: `10930`,
    imagen: `https://homepoint.site/img/10930.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,40`
  },
  {
    nombre: `CUCHILLO N 8 TRAMONTINA MANGO BLANCO`,
    codigo: `10929`,
    imagen: `https://homepoint.site/img/10929.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,34`
  },
  {
    nombre: `SET BOUTIQUE TOKYO CON MARTILLO Y CIERRA`,
    codigo: `10928`,
    imagen: `https://homepoint.site/img/10928.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$86,78`
  },
  {
    nombre: `CUCHILLA P9 MANGO CROMADO`,
    codigo: `10927`,
    imagen: `https://homepoint.site/img/10927.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,34`
  },
  {
    nombre: `VASO CAPIBARA CON PELOTITAS`,
    codigo: `10926`,
    imagen: `https://homepoint.site/img/10926.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,75`
  },
  {
    nombre: `LATTAFA YARA TOUS`,
    codigo: `10925`,
    imagen: `https://homepoint.site/img/10925.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,05`
  },
  {
    nombre: `PATILLERA RETRO NOVATIX`,
    codigo: `10924`,
    imagen: `https://homepoint.site/img/10924.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,94`
  },
  {
    nombre: `MOVEDOR AUXILIAR DE MUEBLES`,
    codigo: `10923`,
    imagen: `https://homepoint.site/img/10923.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,41`
  },
  {
    nombre: `CORTADORA PELO PARA PERRO`,
    codigo: `10922`,
    imagen: `https://homepoint.site/img/10922.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,35`
  },
  {
    nombre: `PARLANTE 6,5 PULGADAS`,
    codigo: `10921`,
    imagen: `https://homepoint.site/img/10921.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,49`
  },
  {
    nombre: `ARRANCADOR AUTO CON COMPRESOR`,
    codigo: `10920`,
    imagen: `https://homepoint.site/img/10920.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$63,95`
  },
  {
    nombre: `CINTA DOBLE FAZ`,
    codigo: `10919`,
    imagen: `https://homepoint.site/img/10919.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$801,00`
  },
  {
    nombre: `CABLE PARA BATERIA 1000 W`,
    codigo: `10918`,
    imagen: `https://homepoint.site/img/10918.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,74`
  },
  {
    nombre: `LINGA TRAKA CON TENSOR`,
    codigo: `10917`,
    imagen: `https://homepoint.site/img/10917.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 10 PCS`,
    codigo: `10916`,
    imagen: `https://homepoint.site/img/10916.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,42`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 7 PCS`,
    codigo: `10915`,
    imagen: `https://homepoint.site/img/10915.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,08`
  },
  {
    nombre: `PARLANTE 4 GTS 1868`,
    codigo: `10914`,
    imagen: `https://homepoint.site/img/10914.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,02`
  },
  {
    nombre: `ORGANIZADOR DE COCINA DSH888`,
    codigo: `10913`,
    imagen: `https://homepoint.site/img/10913.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,55`
  },
  {
    nombre: `PARLANTE 3 X 2 KTX1475`,
    codigo: `10912`,
    imagen: `https://homepoint.site/img/10912.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,28`
  },
  {
    nombre: `CONTROL REMOTO 4K SMART ST404`,
    codigo: `10911`,
    imagen: `https://homepoint.site/img/10911.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,94`
  },
  {
    nombre: `BASE HUB USB CARGA RAPIDA 66W`,
    codigo: `10910`,
    imagen: `https://homepoint.site/img/10910.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,47`
  },
  {
    nombre: `PARLANTE JBL ALEXE GRANDE`,
    codigo: `10909`,
    imagen: `https://homepoint.site/img/10909.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,23`
  },
  {
    nombre: `PARLANTE JBL ALEXE CHICO`,
    codigo: `10908`,
    imagen: `https://homepoint.site/img/10908.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,02`
  },
  {
    nombre: `LAPIZ 3D`,
    codigo: `10907`,
    imagen: `https://homepoint.site/img/10907.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,62`
  },
  {
    nombre: `ESPEJO VIAJERO`,
    codigo: `10906`,
    imagen: `https://homepoint.site/img/10906.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,75`
  },
  {
    nombre: `HUMIDIFICADOR NUBE`,
    codigo: `10905`,
    imagen: `https://homepoint.site/img/10905.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,29`
  },
  {
    nombre: `PAVA ELECTRICA AUTO 500 ML`,
    codigo: `10904`,
    imagen: `https://homepoint.site/img/10904.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,35`
  },
  {
    nombre: `MASAJEDOR CORPORAL`,
    codigo: `10903`,
    imagen: `https://homepoint.site/img/10903.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,70`
  },
  {
    nombre: `TIRA LED RGB TV LEED MOOD LIGHTS`,
    codigo: `10902`,
    imagen: `https://homepoint.site/img/10902.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,20`
  },
  {
    nombre: `CAJA FICHERO POKER 200 FICHAS WTJM01`,
    codigo: `10901`,
    imagen: `https://homepoint.site/img/10901.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,08`
  },
  {
    nombre: `PICADORA DE VERDURAS A CUERDA PVKA17`,
    codigo: `10900`,
    imagen: `https://homepoint.site/img/10900.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,10`
  },
  {
    nombre: `TERMOMETRO PARA HOGAR`,
    codigo: `10899`,
    imagen: `https://homepoint.site/img/10899.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,47`
  },
  {
    nombre: `UTENSILLOS SILICONA 5 PCS`,
    codigo: `10898`,
    imagen: `https://homepoint.site/img/10898.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,14`
  },
  {
    nombre: `ESCURRIDOR EXTENSIBLE`,
    codigo: `10897`,
    imagen: `https://homepoint.site/img/10897.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,68`
  },
  {
    nombre: `BUFANDA CALEFACTOR USB`,
    codigo: `10896`,
    imagen: `https://homepoint.site/img/10896.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,56`
  },
  {
    nombre: `LLAVE T 24 PCS AMARILLA TL00311 TL0125`,
    codigo: `10895`,
    imagen: `https://homepoint.site/img/10895.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,94`
  },
  {
    nombre: `MASAJEADOR PIE USB CALEFACCION`,
    codigo: `10894`,
    imagen: `https://homepoint.site/img/10894.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,02`
  },
  {
    nombre: `CARGADOR DE AUTO CARG7`,
    codigo: `10893`,
    imagen: `https://homepoint.site/img/10893.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,34`
  },
  {
    nombre: `SOPORTE MOVIL 32-75`,
    codigo: `10892`,
    imagen: `https://homepoint.site/img/10892.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$26,17`
  },
  {
    nombre: `LAMPARA DE CAMPING UFO LIGHT 150 W`,
    codigo: `10890`,
    imagen: `https://homepoint.site/img/10890.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,54`
  },
  {
    nombre: `COMEDERO / BEBEDERO PARA MASCOTAS`,
    codigo: `10889`,
    imagen: `https://homepoint.site/img/10889.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,27`
  },
  {
    nombre: `PELUCHE MANTA FRAZADA`,
    codigo: `10888`,
    imagen: `https://homepoint.site/img/10888.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,36`
  },
  {
    nombre: `MOUSE INALAMBRICO`,
    codigo: `10887`,
    imagen: `https://homepoint.site/img/10887.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,28`
  },
  {
    nombre: `CAJA SORPRESA LABUBU`,
    codigo: `10886`,
    imagen: `https://homepoint.site/img/10886.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,02`
  },
  {
    nombre: `DISPENSER VIDRIO BASE BAMBU X 2`,
    codigo: `10885`,
    imagen: `https://homepoint.site/img/10885.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,22`
  },
  {
    nombre: `CAFETERA ELECTRICA ORYX`,
    codigo: `10884`,
    imagen: `https://homepoint.site/img/10884.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$30,44`
  },
  {
    nombre: `HUMIDIFICADOR LLAMAS DQ-701/P775`,
    codigo: `10883`,
    imagen: `https://homepoint.site/img/10883.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,42`
  },
  {
    nombre: `MAQUINA CORTADORAPELO HITOSHY WL-10002`,
    codigo: `10882`,
    imagen: `https://homepoint.site/img/10882.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,08`
  },
  {
    nombre: `PAVA ELECTRICA DIGITAL`,
    codigo: `10881`,
    imagen: `https://homepoint.site/img/10881.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,97`
  },
  {
    nombre: `VAPER SUPREME`,
    codigo: `10880`,
    imagen: `https://homepoint.site/img/10880.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,02`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS KING`,
    codigo: `10879`,
    imagen: `https://homepoint.site/img/10879.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,79`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS QUEEN`,
    codigo: `10878`,
    imagen: `https://homepoint.site/img/10878.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,96`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS FULL`,
    codigo: `10877`,
    imagen: `https://homepoint.site/img/10877.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,36`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS TWIN`,
    codigo: `10876`,
    imagen: `https://homepoint.site/img/10876.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,29`
  },
  {
    nombre: `MANTA PIEL DE ANGEL`,
    codigo: `10875`,
    imagen: `https://homepoint.site/img/10875.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,63`
  },
  {
    nombre: `LATTAFA TERIAQ EDP 100 ML`,
    codigo: `10874`,
    imagen: `https://homepoint.site/img/10874.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$45,39`
  },
  {
    nombre: `LATTAFA HIS CINFESSION EDO 100 ML`,
    codigo: `10873`,
    imagen: `https://homepoint.site/img/10873.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$48,06`
  },
  {
    nombre: `LATTAFA HER CONFESSION EDO 100 ML`,
    codigo: `10872`,
    imagen: `https://homepoint.site/img/10872.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$48,06`
  },
  {
    nombre: `LATTAFA ANGHAM EDP 100 ML`,
    codigo: `10871`,
    imagen: `https://homepoint.site/img/10871.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,72`
  },
  {
    nombre: `LATTAFA MAAHIR LEGACY EDP 100 ML`,
    codigo: `10870`,
    imagen: `https://homepoint.site/img/10870.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,72`
  },
  {
    nombre: `SOPORTE CELULAR C/ INDUCCION IS53175`,
    codigo: `10869`,
    imagen: `https://homepoint.site/img/10869.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,68`
  },
  {
    nombre: `LLAVE TUBO 121 PCS`,
    codigo: `10868`,
    imagen: `https://homepoint.site/img/10868.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$86,78`
  },
  {
    nombre: `JARRA CUBIERTOS BARRICHELO`,
    codigo: `10867`,
    imagen: `https://homepoint.site/img/10867.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,55`
  },
  {
    nombre: `RELOJ SMART P9 ULTRA CON VINCHA AURICULAR`,
    codigo: `10866`,
    imagen: `https://homepoint.site/img/10866.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,69`
  },
  {
    nombre: `AURICULAR INALAMBRICO Y80`,
    codigo: `10865`,
    imagen: `https://homepoint.site/img/10865.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,54`
  },
  {
    nombre: `PARLANTE CON IMAN RUEDA`,
    codigo: `10864`,
    imagen: `https://homepoint.site/img/10864.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,41`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CEJAS DSH1082`,
    codigo: `10863`,
    imagen: `https://homepoint.site/img/10863.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,60`
  },
  {
    nombre: `RAYADOR DE MANO WISHOME`,
    codigo: `10862`,
    imagen: `https://homepoint.site/img/10862.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,14`
  },
  {
    nombre: `SET CUCHILLO COCINA 2 PCS`,
    codigo: `10861`,
    imagen: `https://homepoint.site/img/10861.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `ORGANIZADOR DE MESADA`,
    codigo: `10859`,
    imagen: `https://homepoint.site/img/10859.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,62`
  },
  {
    nombre: `MASAJEADOR DE PIE PLANTILLA`,
    codigo: `10858`,
    imagen: `https://homepoint.site/img/10858.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `RASURADORA RQ817A`,
    codigo: `10857`,
    imagen: `https://homepoint.site/img/10857.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,75`
  },
  {
    nombre: `BATIDOR INALAMBRICA OURUYU`,
    codigo: `10856`,
    imagen: `https://homepoint.site/img/10856.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,15`
  },
  {
    nombre: `MINI CAMARA CON IMPRESORA PERRITO`,
    codigo: `10855`,
    imagen: `https://homepoint.site/img/10855.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$26,30`
  },
  {
    nombre: `SET CUCHILLO DE COCINA 3 PCS`,
    codigo: `10854`,
    imagen: `https://homepoint.site/img/10854.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,32`
  },
  {
    nombre: `CARGADOR IPHONE PH14P`,
    codigo: `10853`,
    imagen: `https://homepoint.site/img/10853.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,34`
  },
  {
    nombre: `SOPLADORA ORYX`,
    codigo: `10852`,
    imagen: `https://homepoint.site/img/10852.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$36,98`
  },
  {
    nombre: `DISPENSER DE HUEVOS`,
    codigo: `10851`,
    imagen: `https://homepoint.site/img/10851.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,21`
  },
  {
    nombre: `GUANTES INVIERNO`,
    codigo: `10849`,
    imagen: `https://homepoint.site/img/10849.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,07`
  },
  {
    nombre: `CAFETERA INALAMBRICA`,
    codigo: `10848`,
    imagen: `https://homepoint.site/img/10848.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$77,43`
  },
  {
    nombre: `SOPORTE TRIANGULAR AUTO`,
    codigo: `10847`,
    imagen: `https://homepoint.site/img/10847.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,07`
  },
  {
    nombre: `MINI CAMARA INFANTIL`,
    codigo: `10846`,
    imagen: `https://homepoint.site/img/10846.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,68`
  },
  {
    nombre: `GORRO AURICULAR CON BLUETOOTH`,
    codigo: `10845`,
    imagen: `https://homepoint.site/img/10845.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,48`
  },
  {
    nombre: `BOTELLA INFANTIL 550 ML 4316`,
    codigo: `10844`,
    imagen: `https://homepoint.site/img/10844.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,02`
  },
  {
    nombre: `SET DESTORNILLADOR LLAVE T 29 PCS`,
    codigo: `10841`,
    imagen: `https://homepoint.site/img/10841.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `ASPIRADORA REMOVEDOR PELO Y PELUSA`,
    codigo: `10840`,
    imagen: `https://homepoint.site/img/10840.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,81`
  },
  {
    nombre: `ANTIFAZ PARA DORMIR MUSIC BLUETOOTH`,
    codigo: `10838`,
    imagen: `https://homepoint.site/img/10838.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,96`
  },
  {
    nombre: `TAG LOCALIZADOR BLUETOOTH`,
    codigo: `10837`,
    imagen: `https://homepoint.site/img/10837.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,67`
  },
  {
    nombre: `BODY ARABES`,
    codigo: `10836`,
    imagen: `https://homepoint.site/img/10836.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,29`
  },
  {
    nombre: `MOTOROLA G15 4RAM/128GB`,
    codigo: `10835`,
    imagen: `https://homepoint.site/img/10835.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$189,57`
  },
  {
    nombre: `XIAOMI POCO C75 6RAM/128GB`,
    codigo: `10834`,
    imagen: `https://homepoint.site/img/10834.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$162,87`
  },
  {
    nombre: `SAMSUNG A05 4RAM/128GB`,
    codigo: `10833`,
    imagen: `https://homepoint.site/img/10833.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$146,85`
  },
  {
    nombre: `ASPIRADORA ROBOT 8088`,
    codigo: `10830`,
    imagen: `https://homepoint.site/img/10830.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,36`
  },
  {
    nombre: `FABRICA DE PIZZAS`,
    codigo: `10827`,
    imagen: `https://homepoint.site/img/10827.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,34`
  },
  {
    nombre: `MINI MASAJEADOR PORTATIL PARCHE`,
    codigo: `10826`,
    imagen: `https://homepoint.site/img/10826.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,67`
  },
  {
    nombre: `SOPORTE PARA AUTO F04 CAJA NEGRA`,
    codigo: `10825`,
    imagen: `https://homepoint.site/img/10825.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,81`
  },
  {
    nombre: `TIMBRE CON CAMARA`,
    codigo: `10824`,
    imagen: `https://homepoint.site/img/10824.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,48`
  },
  {
    nombre: `CALCULADORA COLORES CT2278`,
    codigo: `10823`,
    imagen: `https://homepoint.site/img/10823.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,74`
  },
  {
    nombre: `DESTORNILLADOR X 2`,
    codigo: `10822`,
    imagen: `https://homepoint.site/img/10822.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,74`
  },
  {
    nombre: `CARGADOR PORTATIL ESPADA`,
    codigo: `10821`,
    imagen: `https://homepoint.site/img/10821.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,35`
  },
  {
    nombre: `LUZ PARA BICI CROO667`,
    codigo: `10820`,
    imagen: `https://homepoint.site/img/10820.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,80`
  },
  {
    nombre: `SET COMPOTERA`,
    codigo: `10819`,
    imagen: `https://homepoint.site/img/10819.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,47`
  },
  {
    nombre: `MOPA CON BALDE CENTRIFUGADO`,
    codigo: `10818`,
    imagen: `https://homepoint.site/img/10818.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,89`
  },
  {
    nombre: `LASER NIVEL LT11`,
    codigo: `10817`,
    imagen: `https://homepoint.site/img/10817.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,34`
  },
  {
    nombre: `PARAGUA NEGRO CHICO`,
    codigo: `10816`,
    imagen: `https://homepoint.site/img/10816.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,94`
  },
  {
    nombre: `PARLANTE 4X2 KTX1526`,
    codigo: `10815`,
    imagen: `https://homepoint.site/img/10815.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,35`
  },
  {
    nombre: `PARLANTE 4X2 KK666/655`,
    codigo: `10814`,
    imagen: `https://homepoint.site/img/10814.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,73`
  },
  {
    nombre: `SOPORTE MOTO MTC63`,
    codigo: `10813`,
    imagen: `https://homepoint.site/img/10813.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,21`
  },
  {
    nombre: `RELOJ ELEGANTE LAIBIN CINTURON Y ANTEOJOS`,
    codigo: `10812`,
    imagen: `https://homepoint.site/img/10812.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,36`
  },
  {
    nombre: `RELOJ ELEGANTE FASHION GYFT IS53530`,
    codigo: `10811`,
    imagen: `https://homepoint.site/img/10811.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,76`
  },
  {
    nombre: `AURORA CHERRY IN THE WOODS 100 ML`,
    codigo: `10810`,
    imagen: `https://homepoint.site/img/10810.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$74,76`
  },
  {
    nombre: `AURORA VANILLA EXPRESSO 100 ML`,
    codigo: `10809`,
    imagen: `https://homepoint.site/img/10809.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$61,41`
  },
  {
    nombre: `AL HAR AMBER OUD DUBAI NIGHT 100 ML`,
    codigo: `10808`,
    imagen: `https://homepoint.site/img/10808.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$80,10`
  },
  {
    nombre: `AL HAR AMBER OUD AQUA DUBAI 100 ML`,
    codigo: `10807`,
    imagen: `https://homepoint.site/img/10807.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$84,11`
  },
  {
    nombre: `LATTAFA THE KINGDOM 100 ML`,
    codigo: `10806`,
    imagen: `https://homepoint.site/img/10806.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$54,73`
  },
  {
    nombre: `AFNAM 9 AM DIVE 100 ML`,
    codigo: `10805`,
    imagen: `https://homepoint.site/img/10805.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$57,41`
  },
  {
    nombre: `ALARGUE T23 ZAPATILLA`,
    codigo: `10804`,
    imagen: `https://homepoint.site/img/10804.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,43`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO SL21109`,
    codigo: `10803`,
    imagen: `https://homepoint.site/img/10803.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,99`
  },
  {
    nombre: `MICROFONO WI-FI`,
    codigo: `10802`,
    imagen: `https://homepoint.site/img/10802.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,37`
  },
  {
    nombre: `UTENSILLOS KIT 19 PCS`,
    codigo: `10801`,
    imagen: `https://homepoint.site/img/10801.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,36`
  },
  {
    nombre: `POWER BANK MI XIAOMI`,
    codigo: `10800`,
    imagen: `https://homepoint.site/img/10800.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,02`
  },
  {
    nombre: `LENTES INTELIGENTES CON AUDIO M8PRO`,
    codigo: `10799`,
    imagen: `https://homepoint.site/img/10799.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `ALARGUE ZAPATILLA 424U`,
    codigo: `10798`,
    imagen: `https://homepoint.site/img/10798.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,21`
  },
  {
    nombre: `MASAJEADOR C/ MANGO JC395`,
    codigo: `10797`,
    imagen: `https://homepoint.site/img/10797.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,74`
  },
  {
    nombre: `RELOJ SMART ET22 ULTRA`,
    codigo: `10796`,
    imagen: `https://homepoint.site/img/10796.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,66`
  },
  {
    nombre: `RELOJ SMART T800 ULTRA`,
    codigo: `10795`,
    imagen: `https://homepoint.site/img/10795.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,21`
  },
  {
    nombre: `PARLANTE BLUETOOTH PORTATIL LED`,
    codigo: `10794`,
    imagen: `https://homepoint.site/img/10794.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,94`
  },
  {
    nombre: `CAFETERA EXPRESSO DIGITAL SUONO`,
    codigo: `10792`,
    imagen: `https://homepoint.site/img/10792.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$110,81`
  },
  {
    nombre: `SOFA INFLABLE`,
    codigo: `10791`,
    imagen: `https://homepoint.site/img/10791.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$24,03`
  },
  {
    nombre: `SOPORTE PARA AUTO F02`,
    codigo: `10790`,
    imagen: `https://homepoint.site/img/10790.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,87`
  },
  {
    nombre: `SOPORTE PLEGABLE`,
    codigo: `10789`,
    imagen: `https://homepoint.site/img/10789.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,47`
  },
  {
    nombre: `LINTERNA SWAT 8081`,
    codigo: `10788`,
    imagen: `https://homepoint.site/img/10788.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,87`
  },
  {
    nombre: `SOPORTE DE AUTO F05`,
    codigo: `10787`,
    imagen: `https://homepoint.site/img/10787.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,26`
  },
  {
    nombre: `LAMPARA DOBLE DE ESCRITORIO A8`,
    codigo: `10786`,
    imagen: `https://homepoint.site/img/10786.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,35`
  },
  {
    nombre: `CEPILLO DE PELO`,
    codigo: `10785`,
    imagen: `https://homepoint.site/img/10785.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,87`
  },
  {
    nombre: `DESPERTADOR CON CARGADOR SZ07`,
    codigo: `10784`,
    imagen: `https://homepoint.site/img/10784.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,69`
  },
  {
    nombre: `RELOJ SMART 8 EN 1 D 200`,
    codigo: `10783`,
    imagen: `https://homepoint.site/img/10783.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,09`
  },
  {
    nombre: `CEPILLO PELO 5 EN 1 HYTOSHY`,
    codigo: `10781`,
    imagen: `https://homepoint.site/img/10781.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,36`
  },
  {
    nombre: `MiCROONDAS ORYX 20 L`,
    codigo: `10779`,
    imagen: `https://homepoint.site/img/10779.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$137,50`
  },
  {
    nombre: `WOK`,
    codigo: `10778`,
    imagen: `https://homepoint.site/img/10778.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,91`
  },
  {
    nombre: `PILA RECARGABLES AA USB`,
    codigo: `10777`,
    imagen: `https://homepoint.site/img/10777.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,06`
  },
  {
    nombre: `MINIPIMER / BATIDORA 4 EN 1`,
    codigo: `10776`,
    imagen: `https://homepoint.site/img/10776.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$38,05`
  },
  {
    nombre: `RELOJ DESPERTADOR`,
    codigo: `10775`,
    imagen: `https://homepoint.site/img/10775.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,14`
  },
  {
    nombre: `CABLE CARGADOR USB-C`,
    codigo: `10774`,
    imagen: `https://homepoint.site/img/10774.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,40`
  },
  {
    nombre: `SANDWICHERA ELECTRICA ACERO HYTOSHY`,
    codigo: `10773`,
    imagen: `https://homepoint.site/img/10773.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,02`
  },
  {
    nombre: `PICADORA DE CARNE`,
    codigo: `10772`,
    imagen: `https://homepoint.site/img/10772.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$28,97`
  },
  {
    nombre: `CANDADO MOTO/BICICLETA ULOCK 214`,
    codigo: `10771`,
    imagen: `https://homepoint.site/img/10771.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,62`
  },
  {
    nombre: `FREIDORA ELECTRICA CON ACEITE`,
    codigo: `10770`,
    imagen: `https://homepoint.site/img/10770.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$55,14`
  },
  {
    nombre: `LAMPARA RECARGABLE JL719`,
    codigo: `10769`,
    imagen: `https://homepoint.site/img/10769.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,40`
  },
  {
    nombre: `CABEZAL CARGADOR CELULAR`,
    codigo: `10768`,
    imagen: `https://homepoint.site/img/10768.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,39`
  },
  {
    nombre: `PAVA PARA AUTO 1 L`,
    codigo: `10767`,
    imagen: `https://homepoint.site/img/10767.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,62`
  },
  {
    nombre: `RELOJ DE PARED`,
    codigo: `10766`,
    imagen: `https://homepoint.site/img/10766.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,61`
  },
  {
    nombre: `TERMO BALA PLATA 500 CC`,
    codigo: `10765`,
    imagen: `https://homepoint.site/img/10765.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,28`
  },
  {
    nombre: `BOTELLA TERMICA ROMANIA 660 ML`,
    codigo: `10764`,
    imagen: `https://homepoint.site/img/10764.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,35`
  },
  {
    nombre: `SELLADOR AL VACIO COMIDA`,
    codigo: `10763`,
    imagen: `https://homepoint.site/img/10763.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,22`
  },
  {
    nombre: `LICUADORA JARRA VIDRIO`,
    codigo: `10762`,
    imagen: `https://homepoint.site/img/10762.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$36,98`
  },
  {
    nombre: `ESCURRIDOR GRANDE BLANCO Y NEGRO`,
    codigo: `10761`,
    imagen: `https://homepoint.site/img/10761.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,67`
  },
  {
    nombre: `RELOJ SMART 10 MALLAS W10`,
    codigo: `10760`,
    imagen: `https://homepoint.site/img/10760.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,02`
  },
  {
    nombre: `RELOJ SMART WATCH S10`,
    codigo: `10759`,
    imagen: `https://homepoint.site/img/10759.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,08`
  },
  {
    nombre: `CEPILLO DE LIMPIEZA ELECTRICO`,
    codigo: `10758`,
    imagen: `https://homepoint.site/img/10758.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,63`
  },
  {
    nombre: `SET DESTORNILLADORES X 6 PCS`,
    codigo: `10757`,
    imagen: `https://homepoint.site/img/10757.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `PINZA X 3 PCS`,
    codigo: `10756`,
    imagen: `https://homepoint.site/img/10756.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,45`
  },
  {
    nombre: `CASCO PARA BICICLETA`,
    codigo: `10755`,
    imagen: `https://homepoint.site/img/10755.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,75`
  },
  {
    nombre: `CAFETERA ITALIANA 600 ML`,
    codigo: `10754`,
    imagen: `https://homepoint.site/img/10754.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,75`
  },
  {
    nombre: `POWER BANK HASTA 25000 MAH`,
    codigo: `10753`,
    imagen: `https://homepoint.site/img/10753.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,70`
  },
  {
    nombre: `POWER BANK HASTA 15000 MAH`,
    codigo: `10752`,
    imagen: `https://homepoint.site/img/10752.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `ASPIRADORA ROBOT`,
    codigo: `10751`,
    imagen: `https://homepoint.site/img/10751.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$109,47`
  },
  {
    nombre: `ASPIRADORA INDUSTRIAL 25 L`,
    codigo: `10750`,
    imagen: `https://homepoint.site/img/10750.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$88,11`
  },
  {
    nombre: `ASPIRADORA INDUSTRIAL 15 L`,
    codigo: `10749`,
    imagen: `https://homepoint.site/img/10749.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$85,44`
  },
  {
    nombre: `CONTADORA PLATA GADMIC`,
    codigo: `10748`,
    imagen: `https://homepoint.site/img/10748.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$78,77`
  },
  {
    nombre: `CAFETERA ITALIANA`,
    codigo: `10747`,
    imagen: `https://homepoint.site/img/10747.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,02`
  },
  {
    nombre: `INFLADOR OM 4 EN 1`,
    codigo: `10746`,
    imagen: `https://homepoint.site/img/10746.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$29,37`
  },
  {
    nombre: `CONVECTOR MAGICLICK`,
    codigo: `10744`,
    imagen: `https://homepoint.site/img/10744.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$32,31`
  },
  {
    nombre: `CHANGUITO CON RUEDAS`,
    codigo: `10743`,
    imagen: `https://homepoint.site/img/10743.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,55`
  },
  {
    nombre: `BALANZA COMERCIAL LUO 40KG`,
    codigo: `10742`,
    imagen: `https://homepoint.site/img/10742.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,51`
  },
  {
    nombre: `HUMIDIFICADOR XM-006`,
    codigo: `10741`,
    imagen: `https://homepoint.site/img/10741.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,47`
  },
  {
    nombre: `LINTERNA MILITAR TACTICA P50KA`,
    codigo: `10740`,
    imagen: `https://homepoint.site/img/10740.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,01`
  },
  {
    nombre: `CEPILLO SACA PELUSA`,
    codigo: `10739`,
    imagen: `https://homepoint.site/img/10739.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,34`
  },
  {
    nombre: `CAJA DE CUBIERTO X 24 BARICHELLO`,
    codigo: `10738`,
    imagen: `https://homepoint.site/img/10738.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,01`
  },
  {
    nombre: `LINTERNA LED DOBLE CAMPING`,
    codigo: `10737`,
    imagen: `https://homepoint.site/img/10737.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,74`
  },
  {
    nombre: `VELADOR DE ESCRITORIO FLEXIBLE`,
    codigo: `10736`,
    imagen: `https://homepoint.site/img/10736.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,69`
  },
  {
    nombre: `FREIDORA DE AIRE 3.5 L HYTOSHY`,
    codigo: `10735`,
    imagen: `https://homepoint.site/img/10735.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$54,73`
  },
  {
    nombre: `TOSTADORA ACERO`,
    codigo: `10734`,
    imagen: `https://homepoint.site/img/10734.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,70`
  },
  {
    nombre: `CORTAPELO DALING SEMIPROFESIONAL DL-1167`,
    codigo: `10733`,
    imagen: `https://homepoint.site/img/10733.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,16`
  },
  {
    nombre: `HUMIDIFICADOR VOLCAN 1265`,
    codigo: `10732`,
    imagen: `https://homepoint.site/img/10732.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,01`
  },
  {
    nombre: `BALANZA PERSONAL DIGITAL`,
    codigo: `10731`,
    imagen: `https://homepoint.site/img/10731.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,21`
  },
  {
    nombre: `SET CUCHILLOS X 6`,
    codigo: `10730`,
    imagen: `https://homepoint.site/img/10730.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,62`
  },
  {
    nombre: `MASAJEADOR PISTOLA MANO`,
    codigo: `10729`,
    imagen: `https://homepoint.site/img/10729.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,69`
  },
  {
    nombre: `BATERIA COCINA ORYX`,
    codigo: `10728`,
    imagen: `https://homepoint.site/img/10728.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$43,39`
  },
  {
    nombre: `VAPER RABBEATS`,
    codigo: `10727`,
    imagen: `https://homepoint.site/img/10727.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,68`
  },
  {
    nombre: `VAPER GEEK SKYVIEW`,
    codigo: `10726`,
    imagen: `https://homepoint.site/img/10726.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `VAPER GEEK PULSE`,
    codigo: `10725`,
    imagen: `https://homepoint.site/img/10725.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `VAPER ELFBAR 10 K`,
    codigo: `10724`,
    imagen: `https://homepoint.site/img/10724.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `VAPER IGNITE V120`,
    codigo: `10722`,
    imagen: `https://homepoint.site/img/10722.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,02`
  },
  {
    nombre: `VAPER VPLAY`,
    codigo: `10719`,
    imagen: `https://homepoint.site/img/10719.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,02`
  },
  {
    nombre: `MOTOROLA E14`,
    codigo: `10718`,
    imagen: `https://homepoint.site/img/10718.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$118,81`
  },
  {
    nombre: `AURICULAR VINCHA JBL`,
    codigo: `10717`,
    imagen: `https://homepoint.site/img/10717.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,62`
  },
  {
    nombre: `AURICULAR AIRPODS PRO 2`,
    codigo: `10716`,
    imagen: `https://homepoint.site/img/10716.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,02`
  },
  {
    nombre: `AURICULAR AIRPOD MAX`,
    codigo: `10715`,
    imagen: `https://homepoint.site/img/10715.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,76`
  },
  {
    nombre: `FOCO DE LUZ CON CONTROL REMOTO`,
    codigo: `10714`,
    imagen: `https://homepoint.site/img/10714.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,74`
  },
  {
    nombre: `BOLSA DE DORMIR`,
    codigo: `10713`,
    imagen: `https://homepoint.site/img/10713.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,99`
  },
  {
    nombre: `AURICULAR M25`,
    codigo: `10711`,
    imagen: `https://homepoint.site/img/10711.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,45`
  },
  {
    nombre: `LUZ PARA BICI DOBLE`,
    codigo: `10710`,
    imagen: `https://homepoint.site/img/10710.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,27`
  },
  {
    nombre: `KIT PINTURA DIAMANTE`,
    codigo: `10709`,
    imagen: `https://homepoint.site/img/10709.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,54`
  },
  {
    nombre: `PATILLERA DRAGON OM T99`,
    codigo: `10708`,
    imagen: `https://homepoint.site/img/10708.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,62`
  },
  {
    nombre: `RELOJ SMART T500`,
    codigo: `10706`,
    imagen: `https://homepoint.site/img/10706.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,82`
  },
  {
    nombre: `RELOJ SMART X10`,
    codigo: `10705`,
    imagen: `https://homepoint.site/img/10705.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,21`
  },
  {
    nombre: `MOPA CON BALDE`,
    codigo: `10704`,
    imagen: `https://homepoint.site/img/10704.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,41`
  },
  {
    nombre: `PARLANTE JBL FLIP 6`,
    codigo: `10703`,
    imagen: `https://homepoint.site/img/10703.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,36`
  },
  {
    nombre: `AURICULAR P9`,
    codigo: `10702`,
    imagen: `https://homepoint.site/img/10702.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,35`
  },
  {
    nombre: `PARLANTE KTS 2205 CILINDRICO 6.5`,
    codigo: `10701`,
    imagen: `https://homepoint.site/img/10701.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,36`
  },
  {
    nombre: `BOTELLA DEPORTIVA 350 ML SPORT`,
    codigo: `10700`,
    imagen: `https://homepoint.site/img/10700.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,68`
  },
  {
    nombre: `SET DE PINTURAS PARA CHICOS VALIJA 145 PCS`,
    codigo: `10698`,
    imagen: `https://homepoint.site/img/10698.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,43`
  },
  {
    nombre: `SOPORTE TV FIJO 40 A 80`,
    codigo: `10697`,
    imagen: `https://homepoint.site/img/10697.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,60`
  },
  {
    nombre: `LUNCHERA ELECTRICA`,
    codigo: `10696`,
    imagen: `https://homepoint.site/img/10696.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,43`
  },
  {
    nombre: `VAPORERA PLANCHA VAPOR`,
    codigo: `10695`,
    imagen: `https://homepoint.site/img/10695.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$36,85`
  },
  {
    nombre: `PLANCHA PARA PELO HT858`,
    codigo: `10694`,
    imagen: `https://homepoint.site/img/10694.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,68`
  },
  {
    nombre: `ESPEJO MAQUILLADOR LED Y VENTILADOR`,
    codigo: `10693`,
    imagen: `https://homepoint.site/img/10693.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,15`
  },
  {
    nombre: `BALANZA COMERCIAL COLORES 40 KG`,
    codigo: `10692`,
    imagen: `https://homepoint.site/img/10692.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,32`
  },
  {
    nombre: `BARRA DE SONIDO`,
    codigo: `10691`,
    imagen: `https://homepoint.site/img/10691.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$45,39`
  },
  {
    nombre: `LAMPARA PORTALAPICERA`,
    codigo: `10690`,
    imagen: `https://homepoint.site/img/10690.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,01`
  },
  {
    nombre: `XIAOMI REDMI 14C 16 GB 256`,
    codigo: `10689`,
    imagen: `https://homepoint.site/img/10689.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$197,58`
  },
  {
    nombre: `XIAOMI REDMI 14C 8 GB 128`,
    codigo: `10688`,
    imagen: `https://homepoint.site/img/10688.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$157,53`
  },
  {
    nombre: `ARO DE LED RGB`,
    codigo: `10687`,
    imagen: `https://homepoint.site/img/10687.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,44`
  },
  {
    nombre: `VELADOR LUNA LUZ LED`,
    codigo: `10686`,
    imagen: `https://homepoint.site/img/10686.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,66`
  },
  {
    nombre: `RELOJ APPLE WATCH`,
    codigo: `10685`,
    imagen: `https://homepoint.site/img/10685.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$34,71`
  },
  {
    nombre: `BATERY PACK IPHONE`,
    codigo: `10684`,
    imagen: `https://homepoint.site/img/10684.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,68`
  },
  {
    nombre: `PARLANTE JBL CILINDRO`,
    codigo: `10683`,
    imagen: `https://homepoint.site/img/10683.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,35`
  },
  {
    nombre: `PARLANTE JBL CLIP`,
    codigo: `10682`,
    imagen: `https://homepoint.site/img/10682.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,88`
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
    nombre: `PROYECTOR 4K CON VIDEOJUEGOS`,
    codigo: `10679`,
    imagen: `https://homepoint.site/img/10679.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$89,44`
  },
  {
    nombre: `CARGADOR MAGSAFE`,
    codigo: `10678`,
    imagen: `https://homepoint.site/img/10678.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,48`
  },
  {
    nombre: `PARLANTE JBL B42`,
    codigo: `10677`,
    imagen: `https://homepoint.site/img/10677.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$24,03`
  },
  {
    nombre: `PARLANTE JBL CUADRADO`,
    codigo: `10676`,
    imagen: `https://homepoint.site/img/10676.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,35`
  },
  {
    nombre: `AUTO ESTEREO DESMONTABLE`,
    codigo: `10675`,
    imagen: `https://homepoint.site/img/10675.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,44`
  },
  {
    nombre: `BALANZA MINI ORO`,
    codigo: `10674`,
    imagen: `https://homepoint.site/img/10674.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `SECADOR PELO OSR 2200 W`,
    codigo: `10673`,
    imagen: `https://homepoint.site/img/10673.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,68`
  },
  {
    nombre: `CAMARA DOMO DOBLE V380`,
    codigo: `10670`,
    imagen: `https://homepoint.site/img/10670.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$34,71`
  },
  {
    nombre: `ANAFE VITROCERAMICO`,
    codigo: `10668`,
    imagen: `https://homepoint.site/img/10668.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$39,78`
  },
  {
    nombre: `CAFETERA EXPRESO`,
    codigo: `10667`,
    imagen: `https://homepoint.site/img/10667.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$110,81`
  },
  {
    nombre: `LATTAFA YARA CANDY`,
    codigo: `10665`,
    imagen: `https://homepoint.site/img/10665.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,38`
  },
  {
    nombre: `MANTA PLUSH ROMBO CORDERITO TONO`,
    codigo: `10664`,
    imagen: `https://homepoint.site/img/10664.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,96`
  },
  {
    nombre: `LATTAFA QAED AL FURSAN 90 ML`,
    codigo: `10663`,
    imagen: `https://homepoint.site/img/10663.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$34,71`
  },
  {
    nombre: `LATTAFA YARA PINK 100 ML`,
    codigo: `10662`,
    imagen: `https://homepoint.site/img/10662.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$48,06`
  },
  {
    nombre: `LATTAFA BADEE OUD FOR GLORY`,
    codigo: `10661`,
    imagen: `https://homepoint.site/img/10661.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$37,38`
  },
  {
    nombre: `ARMAF CLUB DE NUIT UNTOLD 105 ML`,
    codigo: `10660`,
    imagen: `https://homepoint.site/img/10660.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$64,08`
  },
  {
    nombre: `AL HAR AMBER OUD GOLD 120 ML`,
    codigo: `10659`,
    imagen: `https://homepoint.site/img/10659.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$82,77`
  },
  {
    nombre: `ARMAF ODYSSEY MANDARIN SKY`,
    codigo: `10658`,
    imagen: `https://homepoint.site/img/10658.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$62,74`
  },
  {
    nombre: `LATTAFA HAYA 100 ML`,
    codigo: `10657`,
    imagen: `https://homepoint.site/img/10657.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$44,05`
  },
  {
    nombre: `LATTAFA PRIDE FAKHAR 100 ML`,
    codigo: `10656`,
    imagen: `https://homepoint.site/img/10656.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,05`
  },
  {
    nombre: `ARMAF CLUB DE NUIT INTENSE 105 ML`,
    codigo: `10655`,
    imagen: `https://homepoint.site/img/10655.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$52,06`
  },
  {
    nombre: `LATTAFA ASAD 100 ML`,
    codigo: `10654`,
    imagen: `https://homepoint.site/img/10654.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,38`
  },
  {
    nombre: `LATTAFA KHAMRAH QAHWA 100 ML`,
    codigo: `10653`,
    imagen: `https://homepoint.site/img/10653.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$48,06`
  },
  {
    nombre: `BHARARA KING 150 ML`,
    codigo: `10652`,
    imagen: `https://homepoint.site/img/10652.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$82,77`
  },
  {
    nombre: `AFNAN 9 PM 100 ML`,
    codigo: `10651`,
    imagen: `https://homepoint.site/img/10651.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$54,73`
  },
  {
    nombre: `LATTAFA BADEE AL OUD SUBLIME 100 ML`,
    codigo: `10650`,
    imagen: `https://homepoint.site/img/10650.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,05`
  },
  {
    nombre: `LATTAFA YARA MOI 100 ML`,
    codigo: `10649`,
    imagen: `https://homepoint.site/img/10649.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,72`
  },
  {
    nombre: `PLANCHA DE PELO ONDAS VT-8010`,
    codigo: `10644`,
    imagen: `https://homepoint.site/img/10644.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,54`
  },
  {
    nombre: `AURICULAR M90`,
    codigo: `10639`,
    imagen: `https://homepoint.site/img/10639.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,41`
  },
  {
    nombre: `PARLANTE ACUATICO P171`,
    codigo: `10638`,
    imagen: `https://homepoint.site/img/10638.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,76`
  },
  {
    nombre: `PARLANTE PORTATIL RX07`,
    codigo: `10637`,
    imagen: `https://homepoint.site/img/10637.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,35`
  },
  {
    nombre: `PARLANTE RUEDA TOKIO X-507`,
    codigo: `10635`,
    imagen: `https://homepoint.site/img/10635.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,68`
  },
  {
    nombre: `PARLANTEJK P70`,
    codigo: `10634`,
    imagen: `https://homepoint.site/img/10634.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,01`
  },
  {
    nombre: `PARLANTE CUBO X912`,
    codigo: `10633`,
    imagen: `https://homepoint.site/img/10633.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,81`
  },
  {
    nombre: `AURICULAR CON PANTALLA T600`,
    codigo: `10632`,
    imagen: `https://homepoint.site/img/10632.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,02`
  },
  {
    nombre: `AURICULAR OWS HEADSET`,
    codigo: `10631`,
    imagen: `https://homepoint.site/img/10631.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,21`
  },
  {
    nombre: `AURICULAR BINCHA CONEJO CON PELO MSL 835`,
    codigo: `10630`,
    imagen: `https://homepoint.site/img/10630.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,89`
  },
  {
    nombre: `AMOLADORA INALAMBRICA PORTATIL STARDOM`,
    codigo: `10629`,
    imagen: `https://homepoint.site/img/10629.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$35,65`
  },
  {
    nombre: `RELOJ TK500`,
    codigo: `10628`,
    imagen: `https://homepoint.site/img/10628.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,59`
  },
  {
    nombre: `RELOJ A58`,
    codigo: `10627`,
    imagen: `https://homepoint.site/img/10627.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,70`
  },
  {
    nombre: `RELOJ SMART ULTRA 2 7 EN 1`,
    codigo: `10626`,
    imagen: `https://homepoint.site/img/10626.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,69`
  },
  {
    nombre: `RELOJ Y AURICULARES 3 EN 1`,
    codigo: `10625`,
    imagen: `https://homepoint.site/img/10625.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,69`
  },
  {
    nombre: `ESPEJO GRANDE MAQUILLADOR CON LUZ`,
    codigo: `10624`,
    imagen: `https://homepoint.site/img/10624.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,36`
  },
  {
    nombre: `SANDWICHERA 3 EN 1 HITOSHY`,
    codigo: `10622`,
    imagen: `https://homepoint.site/img/10622.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,38`
  },
  {
    nombre: `VELADOR CAPIBARA COD368`,
    codigo: `10621`,
    imagen: `https://homepoint.site/img/10621.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,01`
  },
  {
    nombre: `BATIDOR CAFE A PILA`,
    codigo: `10620`,
    imagen: `https://homepoint.site/img/10620.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,71`
  },
  {
    nombre: `CORTAPELO 2 EN 1 NARIZ DALING`,
    codigo: `10619`,
    imagen: `https://homepoint.site/img/10619.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,01`
  },
  {
    nombre: `RASURADORA PELO 3 EN 1 DALING`,
    codigo: `10618`,
    imagen: `https://homepoint.site/img/10618.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,08`
  },
  {
    nombre: `SOPORTE MOVIL OM 32-60`,
    codigo: `10617`,
    imagen: `https://homepoint.site/img/10617.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,83`
  },
  {
    nombre: `CUBIERTOS PLASTICO X 25 PCS`,
    codigo: `10616`,
    imagen: `https://homepoint.site/img/10616.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,35`
  },
  {
    nombre: `LAMPARA VELADOR TOUCH`,
    codigo: `10615`,
    imagen: `https://homepoint.site/img/10615.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,54`
  },
  {
    nombre: `SOPORTE CELULAR MAGNETICO AUTO`,
    codigo: `10614`,
    imagen: `https://homepoint.site/img/10614.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,27`
  },
  {
    nombre: `TECLADO CON MOUSE INALAMBRICO AN030`,
    codigo: `10613`,
    imagen: `https://homepoint.site/img/10613.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,88`
  },
  {
    nombre: `ADAPTADOR UNIVERSAL LWJ`,
    codigo: `10612`,
    imagen: `https://homepoint.site/img/10612.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,44`
  },
  {
    nombre: `INFLADOR MULTIUSO COLORES`,
    codigo: `10611`,
    imagen: `https://homepoint.site/img/10611.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,94`
  },
  {
    nombre: `AURICULARES M19`,
    codigo: `10610`,
    imagen: `https://homepoint.site/img/10610.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,15`
  },
  {
    nombre: `SET HERRAMIENTAS 108 PCS STARDOM`,
    codigo: `10608`,
    imagen: `https://homepoint.site/img/10608.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$46,06`
  },
  {
    nombre: `ESTUFA VELA CUARZO VERTICAL`,
    codigo: `10606`,
    imagen: `https://homepoint.site/img/10606.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,75`
  },
  {
    nombre: `HUMIDIFICADOR JSQ07`,
    codigo: `10605`,
    imagen: `https://homepoint.site/img/10605.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,14`
  },
  {
    nombre: `ESPUMADOR CAFE`,
    codigo: `10603`,
    imagen: `https://homepoint.site/img/10603.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,88`
  },
  {
    nombre: `TESTER DIGITAL MULTIMETRO`,
    codigo: `10599`,
    imagen: `https://homepoint.site/img/10599.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,44`
  },
  {
    nombre: `PAVA ELECTRICA DE COLORES`,
    codigo: `10598`,
    imagen: `https://homepoint.site/img/10598.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,35`
  },
  {
    nombre: `PAVA ELETRICA DE VIDRIO CON LUZ`,
    codigo: `10597`,
    imagen: `https://homepoint.site/img/10597.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,02`
  },
  {
    nombre: `POWER BANK CHICO`,
    codigo: `10596`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `PISTOLA DE HIDROGEL`,
    codigo: `10594`,
    imagen: `https://homepoint.site/img/10594.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,42`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 12u.`,
    codigo: `10593`,
    imagen: `https://homepoint.site/img/10593.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,41`
  },
  {
    nombre: `PICADOR DE ALIMENTOS CHOPPER`,
    codigo: `10592`,
    imagen: `https://homepoint.site/img/10592.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,14`
  },
  {
    nombre: `SET DESTORNILLADOR CON CUTTER`,
    codigo: `10591`,
    imagen: `https://homepoint.site/img/10591.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,25`
  },
  {
    nombre: `CUTER GRANDE`,
    codigo: `10590`,
    imagen: `https://homepoint.site/img/10590.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,57`
  },
  {
    nombre: `HUMIDIFICADOR BLUETHOOT T00K8`,
    codigo: `10589`,
    imagen: `https://homepoint.site/img/10589.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$24,99`
  },
  {
    nombre: `MAQUINA ALGODON DE AZUCAR`,
    codigo: `10588`,
    imagen: `https://homepoint.site/img/10588.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$28,84`
  },
  {
    nombre: `MAQUINA PASTAS PORTATIL`,
    codigo: `10587`,
    imagen: `https://homepoint.site/img/10587.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,28`
  },
  {
    nombre: `PARLANTE KARAOKE K12`,
    codigo: `10585`,
    imagen: `https://homepoint.site/img/10585.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,08`
  },
  {
    nombre: `HIDROLAVADORA STARDOM`,
    codigo: `10583`,
    imagen: `https://homepoint.site/img/10583.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$85,24`
  },
  {
    nombre: `TAPON TERMO SISTEM`,
    codigo: `10582`,
    imagen: `https://homepoint.site/img/10582.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,67`
  },
  {
    nombre: `MOCHILA INFANTIL XXL TRIPLE CIERRE`,
    codigo: `10579`,
    imagen: `https://homepoint.site/img/10579.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,02`
  },
  {
    nombre: `AURICULAR M 20`,
    codigo: `10577`,
    imagen: `https://homepoint.site/img/10577.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,14`
  },
  {
    nombre: `AUTO ESTEREO FIJO 1782E`,
    codigo: `10576`,
    imagen: `https://homepoint.site/img/10576.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,35`
  },
  {
    nombre: `CARTERA GOLFITO N 2459`,
    codigo: `10573`,
    imagen: `https://homepoint.site/img/10573.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,96`
  },
  {
    nombre: `CARTERA GOLFITO CALPE N2260`,
    codigo: `10572`,
    imagen: `https://homepoint.site/img/10572.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,89`
  },
  {
    nombre: `CARTERA SOHPIA NAPA 9312`,
    codigo: `10571`,
    imagen: `https://homepoint.site/img/10571.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,63`
  },
  {
    nombre: `CARTERA BIN BIN 0003`,
    codigo: `10568`,
    imagen: `https://homepoint.site/img/10568.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,56`
  },
  {
    nombre: `CARTERA COCO NAPA S-002`,
    codigo: `10566`,
    imagen: `https://homepoint.site/img/10566.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,90`
  },
  {
    nombre: `SALERO PIMENTERO VIDRIO Y ACERO`,
    codigo: `10558`,
    imagen: `https://homepoint.site/img/10558.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,75`
  },
  {
    nombre: `AURICULAR ULTRAPODS`,
    codigo: `10556`,
    imagen: `https://homepoint.site/img/10556.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,27`
  },
  {
    nombre: `CARGADOR CELULAR 3.1 TIPO C`,
    codigo: `10555`,
    imagen: `https://homepoint.site/img/10555.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,94`
  },
  {
    nombre: `PILA AA`,
    codigo: `10554`,
    imagen: `https://homepoint.site/img/10554.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$240,00`
  },
  {
    nombre: `SOPORTE PARA AUTO`,
    codigo: `10553`,
    imagen: `https://homepoint.site/img/10553.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,94`
  },
  {
    nombre: `PLANCHA DE PELO GW7029`,
    codigo: `10551`,
    imagen: `https://homepoint.site/img/10551.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,21`
  },
  {
    nombre: `PROYECTOR REDONDO ESTRELLAS`,
    codigo: `10547`,
    imagen: `https://homepoint.site/img/10547.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,14`
  },
  {
    nombre: `BATERIA LITIO`,
    codigo: `10546`,
    imagen: `https://homepoint.site/img/10546.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,35`
  },
  {
    nombre: `RALLADOR MANUAL ACCESORIOS X 4`,
    codigo: `10545`,
    imagen: `https://homepoint.site/img/10545.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,01`
  },
  {
    nombre: `TRABA DISCO CON ALARMA`,
    codigo: `10544`,
    imagen: `https://homepoint.site/img/10544.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,28`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO CITRUS JUICER`,
    codigo: `10543`,
    imagen: `https://homepoint.site/img/10543.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,16`
  },
  {
    nombre: `CINTA METRICA 10m`,
    codigo: `10542`,
    imagen: `https://homepoint.site/img/10542.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,14`
  },
  {
    nombre: `CINTA METRICA 7,5m`,
    codigo: `10541`,
    imagen: `https://homepoint.site/img/10541.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,07`
  },
  {
    nombre: `CINTA METRICA 5m`,
    codigo: `10540`,
    imagen: `https://homepoint.site/img/10540.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,87`
  },
  {
    nombre: `CINTA METRICA 3m`,
    codigo: `10539`,
    imagen: `https://homepoint.site/img/10539.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,60`
  },
  {
    nombre: `CONTADORA DE BILLETES`,
    codigo: `10538`,
    imagen: `https://homepoint.site/img/10538.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$78,77`
  },
  {
    nombre: `ARMADOR DE EMPANADAS`,
    codigo: `10537`,
    imagen: `https://homepoint.site/img/10537.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,00`
  },
  {
    nombre: `PECHERA ANTIROBO`,
    codigo: `10536`,
    imagen: `https://homepoint.site/img/10536.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,41`
  },
  {
    nombre: `TAZA AUTOMEZCLADORA`,
    codigo: `10534`,
    imagen: `https://homepoint.site/img/10534.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,81`
  },
  {
    nombre: `BOLSO MATELASE MARWAL MATERA`,
    codigo: `10533`,
    imagen: `https://homepoint.site/img/10533.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,62`
  },
  {
    nombre: `ASTRONAUTA CHICO SIN PARLANTE SM9`,
    codigo: `10532`,
    imagen: `https://homepoint.site/img/10532.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,42`
  },
  {
    nombre: `MANGUERA LUZ BLANCA LED`,
    codigo: `10525`,
    imagen: `https://homepoint.site/img/10525.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,38`
  },
  {
    nombre: `SET CONDIMENTERO`,
    codigo: `10523`,
    imagen: `https://homepoint.site/img/10523.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,41`
  },
  {
    nombre: `DISPENSER DE BAÑO PLASTICO`,
    codigo: `10521`,
    imagen: `https://homepoint.site/img/10521.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,87`
  },
  {
    nombre: `CAFETERA ELECTRICA`,
    codigo: `10520`,
    imagen: `https://homepoint.site/img/10520.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,29`
  },
  {
    nombre: `TV BOX`,
    codigo: `10519`,
    imagen: `https://homepoint.site/img/10519.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$32,84`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 60u.`,
    codigo: `10518`,
    imagen: `https://homepoint.site/img/10518.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,42`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 48u.`,
    codigo: `10517`,
    imagen: `https://homepoint.site/img/10517.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,61`
  },
  {
    nombre: `LAMPARA SOLAR 2 LED LAMPARA`,
    codigo: `10516`,
    imagen: `https://homepoint.site/img/10516.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,48`
  },
  {
    nombre: `LAMPARA SOLAR 3 LEDS LAMPARA`,
    codigo: `10515`,
    imagen: `https://homepoint.site/img/10515.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,68`
  },
  {
    nombre: `CONSOLA RETRO NEGRO Y VERDE`,
    codigo: `10513`,
    imagen: `https://homepoint.site/img/10513.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$39,38`
  },
  {
    nombre: `MATA MOSQUITOS SOLAR`,
    codigo: `10512`,
    imagen: `https://homepoint.site/img/10512.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,48`
  },
  {
    nombre: `CAMARA 4K SPORTS`,
    codigo: `10511`,
    imagen: `https://homepoint.site/img/10511.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$27,10`
  },
  {
    nombre: `SET ASADOR ACERO Y MADERA 3 PCS ESTUCHE NEGRO`,
    codigo: `10509`,
    imagen: `https://homepoint.site/img/10509.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,75`
  },
  {
    nombre: `LUZ RGB LUO CON CONTROL`,
    codigo: `10502`,
    imagen: `https://homepoint.site/img/10502.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,94`
  },
  {
    nombre: `PICADORA ELECTRICA ORYX`,
    codigo: `10500`,
    imagen: `https://homepoint.site/img/10500.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,36`
  },
  {
    nombre: `ESCURRIDOR PLEGABLE`,
    codigo: `10498`,
    imagen: `https://homepoint.site/img/10498.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,60`
  },
  {
    nombre: `AURICULAR RGB VINCHA`,
    codigo: `10496`,
    imagen: `https://homepoint.site/img/10496.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,09`
  },
  {
    nombre: `RELOJ SMART 8 MALLAS`,
    codigo: `10492`,
    imagen: `https://homepoint.site/img/10492.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,09`
  },
  {
    nombre: `TV STICK GAME RETRO`,
    codigo: `10491`,
    imagen: `https://homepoint.site/img/10491.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$43,39`
  },
  {
    nombre: `LUCES 3 SPOT CON CONTROL REMOTO`,
    codigo: `10490`,
    imagen: `https://homepoint.site/img/10490.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,74`
  },
  {
    nombre: `AUTO PARLANTE`,
    codigo: `10489`,
    imagen: `https://homepoint.site/img/10489.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,23`
  },
  {
    nombre: `SECADOR Y PLANCHA DE PELO COMBO`,
    codigo: `10488`,
    imagen: `https://homepoint.site/img/10488.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,56`
  },
  {
    nombre: `PLANCHA DE PELO Y CEPILLO SECADOR COMBO`,
    codigo: `10487`,
    imagen: `https://homepoint.site/img/10487.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$30,57`
  },
  {
    nombre: `VENTILADOR METALICO 18 3 EN 1`,
    codigo: `10486`,
    imagen: `https://homepoint.site/img/10486.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$37,38`
  },
  {
    nombre: `PIZARRA MAGICA PERSONAJES GRANDE`,
    codigo: `10484`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,14`
  },
  {
    nombre: `PIZARRA MAGICA PERSONAJES CHICA`,
    codigo: `10483`,
    imagen: `https://homepoint.site/img/10483.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,81`
  },
  {
    nombre: `SET HERRAMIENTAS 129 PCS FR2262`,
    codigo: `10482`,
    imagen: `https://homepoint.site/img/10482.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,94`
  },
  {
    nombre: `PANEL MATA MOSQUITO OM 757`,
    codigo: `10481`,
    imagen: `https://homepoint.site/img/10481.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,95`
  },
  {
    nombre: `CARGADOR NOTEBOOK UNIVERSAL`,
    codigo: `10480`,
    imagen: `https://homepoint.site/img/10480.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,88`
  },
  {
    nombre: `CORTAPELO 3 CABEZALES USB OM`,
    codigo: `10479`,
    imagen: `https://homepoint.site/img/10479.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,35`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 80u.`,
    codigo: `10478`,
    imagen: `https://homepoint.site/img/10478.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,42`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 40u.`,
    codigo: `10415`,
    imagen: `https://homepoint.site/img/10415.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,35`
  },
  {
    nombre: `CEPILLO MOLDEADOR 5 EN 1 OM`,
    codigo: `10413`,
    imagen: `https://homepoint.site/img/10413.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,29`
  },
  {
    nombre: `PURIFICADOR DE AGUA`,
    codigo: `10412`,
    imagen: `https://homepoint.site/img/10412.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,81`
  },
  {
    nombre: `PLANCHA PELO CON BUCLERA`,
    codigo: `10407`,
    imagen: `https://homepoint.site/img/10407.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,88`
  },
  {
    nombre: `MOCHILA INFANTIL`,
    codigo: `10406`,
    imagen: `https://homepoint.site/img/10406.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,08`
  },
  {
    nombre: `PROYECTOR ANDROID 4K`,
    codigo: `10405`,
    imagen: `https://homepoint.site/img/10405.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$65,42`
  },
  {
    nombre: `LICUADORA DEPORTIVA 600 ML ORYX`,
    codigo: `10404`,
    imagen: `https://homepoint.site/img/10404.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,38`
  },
  {
    nombre: `CORTA PELO 2 PCS OM KM1948`,
    codigo: `10403`,
    imagen: `https://homepoint.site/img/10403.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,62`
  },
  {
    nombre: `AURICULAR PANTALLA NEGRO YX29`,
    codigo: `10402`,
    imagen: `https://homepoint.site/img/10402.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,89`
  },
  {
    nombre: `DESTORNILLADOR SET 41 PCS`,
    codigo: `10400`,
    imagen: `https://homepoint.site/img/10400.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,63`
  },
  {
    nombre: `LUNCHERA TERMICA`,
    codigo: `10399`,
    imagen: `https://homepoint.site/img/10399.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,95`
  },
  {
    nombre: `VENTILADOR PORTATIL DE MESA`,
    codigo: `10398`,
    imagen: `https://homepoint.site/img/10398.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,36`
  },
  {
    nombre: `SOPORTE COLGANTE CELULAR`,
    codigo: `10397`,
    imagen: `https://homepoint.site/img/10397.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$935,00`
  },
  {
    nombre: `CAMARA DIGITAL CON IMPRESORA`,
    codigo: `10396`,
    imagen: `https://homepoint.site/img/10396.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$33,38`
  },
  {
    nombre: `LUZ ESTRELLAS CON PARLANTE`,
    codigo: `10395`,
    imagen: `https://homepoint.site/img/10395.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,14`
  },
  {
    nombre: `ATORNILLADOR INALAMBRICO KIT`,
    codigo: `10394`,
    imagen: `https://homepoint.site/img/10394.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,48`
  },
  {
    nombre: `KIT HERRAMIENTAS LLAVES COMBINADAS`,
    codigo: `10390`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,55`
  },
  {
    nombre: `PLANCHA ELECTRICA CON GRILL PA2208`,
    codigo: `10389`,
    imagen: `https://homepoint.site/img/10389.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,05`
  },
  {
    nombre: `LAMPARA GIRATORIA LUZ CALIDAD Y COLORES HW978`,
    codigo: `10388`,
    imagen: `https://homepoint.site/img/10388.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,95`
  },
  {
    nombre: `SPINNER CON LUCES PELOTA O DISCO`,
    codigo: `10387`,
    imagen: `https://homepoint.site/img/10387.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,61`
  },
  {
    nombre: `PARLANTE STEPHY YS110`,
    codigo: `10386`,
    imagen: `https://homepoint.site/img/10386.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,02`
  },
  {
    nombre: `GAME BOX X7M PANTALLA Y JOYSTICK`,
    codigo: `10385`,
    imagen: `https://homepoint.site/img/10385.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,49`
  },
  {
    nombre: `MINIPIMER 5 EN 1 LUMA BELLA`,
    codigo: `10380`,
    imagen: `https://homepoint.site/img/10380.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,98`
  },
  {
    nombre: `LAMPARA VELADOR LED ANIMALITOS T512`,
    codigo: `10377`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,34`
  },
  {
    nombre: `VELADOR JIRAFA`,
    codigo: `10376`,
    imagen: `https://homepoint.site/img/10376.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,01`
  },
  {
    nombre: `ARRANCADOR DE AUTO`,
    codigo: `10375`,
    imagen: `https://homepoint.site/img/10375.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$46,99`
  },
  {
    nombre: `TV STICK`,
    codigo: `10373`,
    imagen: `https://homepoint.site/img/10373.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$33,38`
  },
  {
    nombre: `KIT UTENSILLOS COCINA`,
    codigo: `10372`,
    imagen: `https://homepoint.site/img/10372.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,62`
  },
  {
    nombre: `AURICULAR DEPORTIVO MANOS LIBRES`,
    codigo: `10367`,
    imagen: `https://homepoint.site/img/10367.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,67`
  },
  {
    nombre: `AURICULAR CON PANTALLA BLANCO`,
    codigo: `10366`,
    imagen: `https://homepoint.site/img/10366.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,69`
  },
  {
    nombre: `CORTADORA DE PAPAS FRITAS`,
    codigo: `10365`,
    imagen: `https://homepoint.site/img/10365.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,94`
  },
  {
    nombre: `MANDOLINA GRANDE 2022`,
    codigo: `10364`,
    imagen: `https://homepoint.site/img/10364.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,35`
  },
  {
    nombre: `SET DE SARTENES 3 PCS ORIX`,
    codigo: `10363`,
    imagen: `https://homepoint.site/img/10363.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$24,56`
  },
  {
    nombre: `RAQUETA MATA MOSQUITOS CON BASE`,
    codigo: `10361`,
    imagen: `https://homepoint.site/img/10361.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,84`
  },
  {
    nombre: `SARTEN MULTIFUNCION 3 EN 1`,
    codigo: `10360`,
    imagen: `https://homepoint.site/img/10360.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,88`
  },
  {
    nombre: `PICADORA MINI USB`,
    codigo: `10359`,
    imagen: `https://homepoint.site/img/10359.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,34`
  },
  {
    nombre: `CUBIERTERO DE COCINA BY-889`,
    codigo: `10356`,
    imagen: `https://homepoint.site/img/10356.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,67`
  },
  {
    nombre: `HUMIDIFICADOR FOGATA`,
    codigo: `10352`,
    imagen: `https://homepoint.site/img/10352.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,08`
  },
  {
    nombre: `DESTORNILLADOR 115 EN 1`,
    codigo: `10351`,
    imagen: `https://homepoint.site/img/10351.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,68`
  },
  {
    nombre: `AURICULAR INALAMBRICO A6S/E6S`,
    codigo: `10350`,
    imagen: `https://homepoint.site/img/10350.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,07`
  },
  {
    nombre: `INFLADOR INALAMBRICO 3 EN 1`,
    codigo: `10349`,
    imagen: `https://homepoint.site/img/10349.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,36`
  },
  {
    nombre: `TIMBRE INALAMBRICO`,
    codigo: `10342`,
    imagen: `https://homepoint.site/img/10342.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,54`
  },
  {
    nombre: `PATILLERA RETRO OM`,
    codigo: `10341`,
    imagen: `https://homepoint.site/img/10341.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,74`
  },
  {
    nombre: `SOPLADORA CON 2 BATERIAS`,
    codigo: `10340`,
    imagen: `https://homepoint.site/img/10340.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$49,40`
  },
  {
    nombre: `MATE ALPACA`,
    codigo: `10337`,
    imagen: `https://homepoint.site/img/10337.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `MINI IMPRESORA`,
    codigo: `10334`,
    imagen: `https://homepoint.site/img/10334.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,35`
  },
  {
    nombre: `TENDER ROPA`,
    codigo: `10333`,
    imagen: `https://homepoint.site/img/10333.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,03`
  },
  {
    nombre: `PICADORA MANUAL PARA VERDURAS`,
    codigo: `10328`,
    imagen: `https://homepoint.site/img/10328.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `PANQUEQUERA ELECTRICA`,
    codigo: `10326`,
    imagen: `https://homepoint.site/img/10326.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,09`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO`,
    codigo: `10324`,
    imagen: `https://homepoint.site/img/10324.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,95`
  },
  {
    nombre: `ARO LED RGB CON TRIPODE`,
    codigo: `10323`,
    imagen: `https://homepoint.site/img/10323.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,35`
  },
  {
    nombre: `OLLA ELECTRICA`,
    codigo: `10322`,
    imagen: `https://homepoint.site/img/10322.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$30,57`
  },
  {
    nombre: `ESCURRIDOR ADAPTABLE PVC`,
    codigo: `10321`,
    imagen: `https://homepoint.site/img/10321.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,74`
  },
  {
    nombre: `SACACORCHO PARA VINO USB`,
    codigo: `10320`,
    imagen: `https://homepoint.site/img/10320.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,35`
  },
  {
    nombre: `AURICULAR M10`,
    codigo: `10319`,
    imagen: `https://homepoint.site/img/10319.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,94`
  },
  {
    nombre: `BOTELLA INFANTIL 500 ML YQ`,
    codigo: `10303`,
    imagen: `https://homepoint.site/img/10303.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,55`
  },
  {
    nombre: `MASAJEADOR CERVICAL`,
    codigo: `10296`,
    imagen: `https://homepoint.site/img/10296.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,63`
  },
  {
    nombre: `LAMPARA LED SOLAR BK-100`,
    codigo: `10292`,
    imagen: `https://homepoint.site/img/10292.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,41`
  },
  {
    nombre: `SANDWICHERA PANINI ORYX OR-1700`,
    codigo: `10290`,
    imagen: `https://homepoint.site/img/10290.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$24,83`
  },
  {
    nombre: `LAMPARA MATA MOSQUITOS`,
    codigo: `10289`,
    imagen: `https://homepoint.site/img/10289.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `VENTILADOR DE PIE`,
    codigo: `10288`,
    imagen: `https://homepoint.site/img/10288.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,38`
  },
  {
    nombre: `LICUADORA PORTATIL`,
    codigo: `10287`,
    imagen: `https://homepoint.site/img/10287.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,21`
  },
  {
    nombre: `MOCHILA ANTI-ROBO`,
    codigo: `10286`,
    imagen: `https://homepoint.site/img/10286.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,48`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 30u.`,
    codigo: `10280`,
    imagen: `https://homepoint.site/img/10280.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,68`
  },
  {
    nombre: `RAQUETA MATA MOSQUITOS`,
    codigo: `10278`,
    imagen: `https://homepoint.site/img/10278.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,01`
  },
  {
    nombre: `MAQUINA POCHOCLERA`,
    codigo: `10276`,
    imagen: `https://homepoint.site/img/10276.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,51`
  },
  {
    nombre: `ASPIRADORA DE MANO`,
    codigo: `10275`,
    imagen: `https://homepoint.site/img/10275.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,74`
  },
  {
    nombre: `BATIDORA MANUAL`,
    codigo: `10274`,
    imagen: `https://homepoint.site/img/10274.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,99`
  },
  {
    nombre: `SECAPLATO ESCURRIDOR`,
    codigo: `10266`,
    imagen: `https://homepoint.site/img/10266.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,84`
  },
  {
    nombre: `BRAZO DUCHA`,
    codigo: `10265`,
    imagen: `https://homepoint.site/img/10265.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,67`
  },
  {
    nombre: `PELOTA FUTBOL`,
    codigo: `10263`,
    imagen: `https://homepoint.site/img/10263.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,34`
  },
  {
    nombre: `CONSOLA PORTATIL GAME BOX`,
    codigo: `10245`,
    imagen: `https://homepoint.site/img/10245.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,08`
  },
  {
    nombre: `PARLANTE KARAOKE REDONDO`,
    codigo: `10244`,
    imagen: `https://homepoint.site/img/10244.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,75`
  },
  {
    nombre: `MAQUINA BOXEO`,
    codigo: `10242`,
    imagen: `https://homepoint.site/img/10242.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,78`
  },
  {
    nombre: `CORTINA BLACK OUT TEXTIL LINO`,
    codigo: `10241`,
    imagen: `https://homepoint.site/img/10241.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$30,70`
  },
  {
    nombre: `PIZARRA MAGICA 12`,
    codigo: `10235`,
    imagen: `https://homepoint.site/img/10235.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,67`
  },
  {
    nombre: `MONOPATIN PLEGABLE`,
    codigo: `10230`,
    imagen: `https://homepoint.site/img/10230.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,36`
  },
  {
    nombre: `BURBUJERO`,
    codigo: `10228`,
    imagen: `https://homepoint.site/img/10228.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,47`
  },
  {
    nombre: `VASO CAFETERO PUSH`,
    codigo: `10226`,
    imagen: `https://homepoint.site/img/10226.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,81`
  },
  {
    nombre: `CONTROL REMOTO UNIVERSAL`,
    codigo: `10223`,
    imagen: `https://homepoint.site/img/10223.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,34`
  },
  {
    nombre: `GRIFERIA MONOCOMANDO ALTA NEGRA`,
    codigo: `10222`,
    imagen: `https://homepoint.site/img/10222.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,02`
  },
  {
    nombre: `LUZ NEON`,
    codigo: `10217`,
    imagen: `https://homepoint.site/img/10217.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,54`
  },
  {
    nombre: `CACTUS BAILARIN SIN ROPA`,
    codigo: `10215`,
    imagen: `https://homepoint.site/img/10215.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,34`
  },
  {
    nombre: `FOCO PARLANTE`,
    codigo: `10214`,
    imagen: `https://homepoint.site/img/10214.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,47`
  },
  {
    nombre: `FOCO GIRATORIO CON ESTRELLAS`,
    codigo: `10213`,
    imagen: `https://homepoint.site/img/10213.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,27`
  },
  {
    nombre: `MONOPATIN CANASTO PERSONAJES`,
    codigo: `10210`,
    imagen: `https://homepoint.site/img/10210.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,96`
  },
  {
    nombre: `BALANZA PERSONAL 180 KG`,
    codigo: `10206`,
    imagen: `https://homepoint.site/img/10206.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,88`
  },
  {
    nombre: `PITON MOTO`,
    codigo: `10203`,
    imagen: `https://homepoint.site/img/10203.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,14`
  },
  {
    nombre: `HIDROLAVADORA PORTATIL`,
    codigo: `10202`,
    imagen: `https://homepoint.site/img/10202.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$42,05`
  },
  {
    nombre: `TALADRO INALAMBRICO KIT 24 PCS`,
    codigo: `10201`,
    imagen: `https://homepoint.site/img/10201.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,38`
  },
  {
    nombre: `AFEITADORA SHAVER`,
    codigo: `10200`,
    imagen: `https://homepoint.site/img/10200.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,01`
  },
  {
    nombre: `CORTADORA PELO TRANSPARENTE`,
    codigo: `10199`,
    imagen: `https://homepoint.site/img/10199.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,28`
  },
  {
    nombre: `PROYECTOR ASTRONAUTA CON PARLANTE`,
    codigo: `10197`,
    imagen: `https://homepoint.site/img/10197.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,49`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 53 PCS`,
    codigo: `10195`,
    imagen: `https://homepoint.site/img/10195.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,69`
  },
  {
    nombre: `VASO CAFETERO`,
    codigo: `10192`,
    imagen: `https://homepoint.site/img/10192.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,21`
  },
  {
    nombre: `ESTUFA DOS VELAS HORIZONTAL CUARZO`,
    codigo: `10188`,
    imagen: `https://homepoint.site/img/10188.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,62`
  },
  {
    nombre: `ESPEJO LED`,
    codigo: `10187`,
    imagen: `https://homepoint.site/img/10187.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,61`
  },
  {
    nombre: `SECADOR PELO SY2436 OM`,
    codigo: `10186`,
    imagen: `https://homepoint.site/img/10186.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,82`
  },
  {
    nombre: `PLANCHA A VAPOR ROPA 1172F`,
    codigo: `10185`,
    imagen: `https://homepoint.site/img/10185.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,49`
  },
  {
    nombre: `CONSOLA RETRO STICK M15`,
    codigo: `10184`,
    imagen: `https://homepoint.site/img/10184.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$34,71`
  },
  {
    nombre: `CEPILLO ALISADOR`,
    codigo: `10182`,
    imagen: `https://homepoint.site/img/10182.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,68`
  },
  {
    nombre: `CALOVENTOR / CONVECTOR`,
    codigo: `10175`,
    imagen: `https://homepoint.site/img/10175.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,49`
  },
  {
    nombre: `MONOCOMANDO GRIFERIA BANO CORTA RORY`,
    codigo: `10174`,
    imagen: `https://homepoint.site/img/10174.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,95`
  },
  {
    nombre: `PATILLERA RETRO`,
    codigo: `10170`,
    imagen: `https://homepoint.site/img/10170.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,74`
  },
  {
    nombre: `RELOJ INTELIGENTE T20 ULTRA 2`,
    codigo: `10169`,
    imagen: `https://homepoint.site/img/10169.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,35`
  },
  {
    nombre: `MINIPIMER LUMABELLA COMUN`,
    codigo: `10158`,
    imagen: `https://homepoint.site/img/10158.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$0,00`
  },
  {
    nombre: `PAVA ELECTRICA CON CORTE`,
    codigo: `10152`,
    imagen: `https://homepoint.site/img/10152.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,49`
  },
  {
    nombre: `MAQUINA CUPKES`,
    codigo: `10151`,
    imagen: `https://homepoint.site/img/10151.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$34,71`
  },
  {
    nombre: `CACTUS BAILARIN CON ROPA`,
    codigo: `10149`,
    imagen: `https://homepoint.site/img/10149.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,61`
  },
  {
    nombre: `PLANCHA PELO SZPL047`,
    codigo: `10147`,
    imagen: `https://homepoint.site/img/10147.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,61`
  },
  {
    nombre: `AURICULAR KD38`,
    codigo: `10145`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,68`
  },
  {
    nombre: `AURICULAR BINCHA K12`,
    codigo: `10144`,
    imagen: `https://homepoint.site/img/10144.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,94`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 108 PCS`,
    codigo: `10143`,
    imagen: `https://homepoint.site/img/10143.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$55,80`
  },
  {
    nombre: `MAQUINA DONAS`,
    codigo: `10140`,
    imagen: `https://homepoint.site/img/10140.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,04`
  },
  {
    nombre: `AURICULAR GAMER`,
    codigo: `10139`,
    imagen: `https://homepoint.site/img/10139.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,54`
  },
  {
    nombre: `MATE LISTO 750 ML`,
    codigo: `10124`,
    imagen: `https://homepoint.site/img/10124.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,22`
  },
  {
    nombre: `MOTOSIERRA CHICA`,
    codigo: `10123`,
    imagen: `https://homepoint.site/img/10123.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,72`
  },
  {
    nombre: `LINGA MOTO 22mm`,
    codigo: `10119`,
    imagen: `https://homepoint.site/img/10119.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,96`
  },
  {
    nombre: `PIZARRA DIBUJO 8,5`,
    codigo: `10118`,
    imagen: `https://homepoint.site/img/10118.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,27`
  },
  {
    nombre: `ANAFE ELECTRICO 2 ORNALLAS 2000w`,
    codigo: `10115`,
    imagen: `https://homepoint.site/img/10115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$22,96`
  },
  {
    nombre: `CAMARA WI-FI 360 SMART IP66`,
    codigo: `10114`,
    imagen: `https://homepoint.site/img/10114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,23`
  },
  {
    nombre: `CARGADOR-PARLANTE 3-1 G`,
    codigo: `10113`,
    imagen: `https://homepoint.site/img/10113.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,62`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 46 PCS`,
    codigo: `10112`,
    imagen: `https://homepoint.site/img/10112.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,41`
  },
  {
    nombre: `INFLADOR ALUMINIO BICI`,
    codigo: `10105`,
    imagen: `https://homepoint.site/img/10105.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,20`
  },
  {
    nombre: `ALFORJA BICI B-SOUL`,
    codigo: `10104`,
    imagen: `https://homepoint.site/img/10104.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$1,96`
  },
  {
    nombre: `LINGA BICICLETA`,
    codigo: `10103`,
    imagen: `https://homepoint.site/img/10103.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,91`
  },
  {
    nombre: `GRIFERIA MONOCOMANDO COCINA FLEXIBLE CROMADA`,
    codigo: `10089`,
    imagen: `https://homepoint.site/img/10089.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,16`
  },
  {
    nombre: `GRIFERIA MONOCOMANDO COCINA FLEXIBLE NEGRA`,
    codigo: `10088`,
    imagen: `https://homepoint.site/img/10088.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,62`
  },
  {
    nombre: `FLOR DUCHA CUADRADA`,
    codigo: `10087`,
    imagen: `https://homepoint.site/img/10087.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,90`
  },
  {
    nombre: `ROLLO LED RGB 5M`,
    codigo: `10085`,
    imagen: `https://homepoint.site/img/10085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `AURICULAR P47`,
    codigo: `10081`,
    imagen: `https://homepoint.site/img/10081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,34`
  },
  {
    nombre: `MANTA ACANALADA CORDERITO 2 PLAZAS Y MEDIA`,
    codigo: `10076`,
    imagen: `https://homepoint.site/img/10076.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,36`
  },
  {
    nombre: `MATERA ECOCUERO`,
    codigo: `10069`,
    imagen: `https://homepoint.site/img/10069.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,47`
  },
  {
    nombre: `PARLANTE ORYX CANCUN 8 SP1949-2`,
    codigo: `10067`,
    imagen: `https://homepoint.site/img/10067.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$34,44`
  },
  {
    nombre: `CADENA MOTO ANCHI`,
    codigo: `10066`,
    imagen: `https://homepoint.site/img/10066.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,68`
  },
  {
    nombre: `LATA YERBERA / AZUCARERA MATERO`,
    codigo: `10061`,
    imagen: `https://homepoint.site/img/10061.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,67`
  },
  {
    nombre: `BALANZA COMERCIAL 40 KG`,
    codigo: `10058`,
    imagen: `https://homepoint.site/img/10058.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$32,04`
  },
  {
    nombre: `LUZ LED EMERGENCIA`,
    codigo: `10057`,
    imagen: `https://homepoint.site/img/10057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,21`
  },
  {
    nombre: `BALANZA COCINA 10 KG`,
    codigo: `10055`,
    imagen: `https://homepoint.site/img/10055.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,00`
  },
  {
    nombre: `GRIFERIA RORY COCINA LARGA`,
    codigo: `10051`,
    imagen: `https://homepoint.site/img/10051.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,42`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 10 PCS`,
    codigo: `10050`,
    imagen: `https://homepoint.site/img/10050.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,87`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 40 PCS`,
    codigo: `10048`,
    imagen: `https://homepoint.site/img/10048.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `JOYSTICK PS3`,
    codigo: `10047`,
    imagen: `https://homepoint.site/img/10047.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,41`
  },
  {
    nombre: `SOPORTE MOVIL TV-117-2`,
    codigo: `10045`,
    imagen: `https://homepoint.site/img/10045.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,48`
  },
  {
    nombre: `SOPORTE FIJO TV-50 26/63`,
    codigo: `10044`,
    imagen: `https://homepoint.site/img/10044.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,81`
  },
  {
    nombre: `SOPORTE FIJO TV-14-42`,
    codigo: `10043`,
    imagen: `https://homepoint.site/img/10043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,67`
  },
  {
    nombre: `PILA AAA`,
    codigo: `10042`,
    imagen: `https://homepoint.site/img/10042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$227,00`
  },
  {
    nombre: `PARLANTE 3 Pulgadas`,
    codigo: `10040`,
    imagen: `https://homepoint.site/img/10040.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,61`
  },
  {
    nombre: `JOYSTICK PS4`,
    codigo: `10038`,
    imagen: `https://homepoint.site/img/10038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,22`
  },
  {
    nombre: `FOCO CAMARA`,
    codigo: `10033`,
    imagen: `https://homepoint.site/img/10033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,42`
  },
  {
    nombre: `POPIT ELECTRONICO`,
    codigo: `10032`,
    imagen: `https://homepoint.site/img/10032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,14`
  },
  {
    nombre: `PAVA JARRA ACERO`,
    codigo: `10028`,
    imagen: `https://homepoint.site/img/10028.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,55`
  },
  {
    nombre: `BOTELLA DEPORTIVA 750 ML`,
    codigo: `10024`,
    imagen: `https://homepoint.site/img/10024.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,01`
  },
  {
    nombre: `DISPENSER AUTOMATICO`,
    codigo: `10020`,
    imagen: `https://homepoint.site/img/10020.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `ANAFE ELECTRICO 1 ORNALLA 1000w`,
    codigo: `10010`,
    imagen: `https://homepoint.site/img/10010.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,42`
  },
  {
    nombre: `REFLECTOR LED 100W`,
    codigo: `10008`,
    imagen: `https://homepoint.site/img/10008.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,74`
  },
  {
    nombre: `ORYX SANDWICHERA OR-1800`,
    codigo: `10005`,
    imagen: `https://homepoint.site/img/10005.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,36`
  },
  {
    nombre: `WAFLERA SK -114`,
    codigo: `10004`,
    imagen: `https://homepoint.site/img/10004.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,45`
  },
];
