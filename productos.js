const productos = [
  {
    nombre: `RAQUETA MOSQUITO PLEGABLE`,
    codigo: `11176`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,09`
  },
  {
    nombre: `LINGA COMBINADA 1.2 X 80 CM`,
    codigo: `11175`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,02`
  },
  {
    nombre: `PERCHERO PARA REPASADOR / TOALLA ADHESIVO`,
    codigo: `11174`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,68`
  },
  {
    nombre: `AFILADOR DE CUCHILLO`,
    codigo: `11173`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,94`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CEJAS Y BOZO 2 EN 1`,
    codigo: `11172`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,02`
  },
  {
    nombre: `MOCHILA DEPORTIVA IMPERMEABLE`,
    codigo: `11171`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,66`
  },
  {
    nombre: `MOCHILLA CARGA USB ANTIRROBO IMPERMEABLE`,
    codigo: `11170`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,84`
  },
  {
    nombre: `SOPORTE DE CELULAR AUTO REJILLA BA140`,
    codigo: `11169`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,43`
  },
  {
    nombre: `SOPORTE DE CELULAR VIDRIO SOPAPA BA139`,
    codigo: `11168`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `KIT MATERO FESTIVO`,
    codigo: `11167`,
    imagen: `https://homepoint.site/img/11167.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,00`
  },
  {
    nombre: `MEDIDOR DE GLUCOSA`,
    codigo: `11166`,
    imagen: `https://homepoint.site/img/11166.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,75`
  },
  {
    nombre: `SET DE CUBIERTOS 25 PCS CON BANDEJA`,
    codigo: `11165`,
    imagen: `https://homepoint.site/img/11165.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,11`
  },
  {
    nombre: `DUCHA FLEX 1.5 MTS`,
    codigo: `11164`,
    imagen: `https://homepoint.site/img/11164.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,36`
  },
  {
    nombre: `SOPORTE PARA AUTO ELECTRICO`,
    codigo: `11163`,
    imagen: `https://homepoint.site/img/11163.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,71`
  },
  {
    nombre: `DESPOLVILLADOR`,
    codigo: `11162`,
    imagen: `https://homepoint.site/img/11162.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,87`
  },
  {
    nombre: `PISTOLA DE PINTURA SD2011`,
    codigo: `11161`,
    imagen: `https://homepoint.site/img/11161.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$58,85`
  },
  {
    nombre: `ALARGUE RUEDA UNIVERSAL`,
    codigo: `11160`,
    imagen: `https://homepoint.site/img/11160.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,15`
  },
  {
    nombre: `GAS PIMIENTA 110 ML`,
    codigo: `11159`,
    imagen: `https://homepoint.site/img/11159.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `TIRA NEON RGB MULTICOLOR`,
    codigo: `11158`,
    imagen: `https://homepoint.site/img/11158.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,43`
  },
  {
    nombre: `FREIDORA DE AIRE 7 L`,
    codigo: `11157`,
    imagen: `https://homepoint.site/img/11157.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$68,54`
  },
  {
    nombre: `PAVA ELECTRICA CON TERMOMETRO`,
    codigo: `11156`,
    imagen: `https://homepoint.site/img/11156.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,18`
  },
  {
    nombre: `LUZ LINTERNA CAMPING EXT / INT`,
    codigo: `11155`,
    imagen: `https://homepoint.site/img/11155.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `PARLANTE TRANSFORMER`,
    codigo: `11154`,
    imagen: `https://homepoint.site/img/11154.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,41`
  },
  {
    nombre: `PINZA X 3 PCS VERDES`,
    codigo: `11153`,
    imagen: `https://homepoint.site/img/11153.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,41`
  },
  {
    nombre: `FREIDORA DE AIRE 4 L SPRINT`,
    codigo: `11152`,
    imagen: `https://homepoint.site/img/11152.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$70,48`
  },
  {
    nombre: `DEPILADORA 4 EN 1 LADY SHAVER SN8866`,
    codigo: `11151`,
    imagen: `https://homepoint.site/img/11151.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,24`
  },
  {
    nombre: `MOLINILLO ELECTRICO`,
    codigo: `11150`,
    imagen: `https://homepoint.site/img/11150.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,73`
  },
  {
    nombre: `POWER BANK 25 MAH TECH`,
    codigo: `11149`,
    imagen: `https://homepoint.site/img/11149.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,26`
  },
  {
    nombre: `VENTILADOR TURBO 20 PULGADAS 90W`,
    codigo: `11148`,
    imagen: `https://homepoint.site/img/11148.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,05`
  },
  {
    nombre: `TV BOX BLANCO MXPRO`,
    codigo: `11147`,
    imagen: `https://homepoint.site/img/11147.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$31,89`
  },
  {
    nombre: `TCL 40SE 128GB / 8 RAM`,
    codigo: `11146`,
    imagen: `https://homepoint.site/img/11146.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$144,53`
  },
  {
    nombre: `TOALLON SECADO RAPIDO`,
    codigo: `11145`,
    imagen: `https://homepoint.site/img/11145.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `TOALLON PESADO PREMIUN`,
    codigo: `11144`,
    imagen: `https://homepoint.site/img/11144.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,90`
  },
  {
    nombre: `TUPPER MAGICLICK X 5 PCS`,
    codigo: `11143`,
    imagen: `https://homepoint.site/img/11143.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,81`
  },
  {
    nombre: `KIT DE LIMPIEZA PARA AUTO`,
    codigo: `11142`,
    imagen: `https://homepoint.site/img/11142.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$20,41`
  },
  {
    nombre: `PISTOLA DE RIEGO 5 PCS`,
    codigo: `11141`,
    imagen: `https://homepoint.site/img/11141.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,26`
  },
  {
    nombre: `PARLANTE 6,5 X 2 MS1953BT`,
    codigo: `11140`,
    imagen: `https://homepoint.site/img/11140.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$35,61`
  },
  {
    nombre: `PARLANTE 8 MS2067BT`,
    codigo: `11139`,
    imagen: `https://homepoint.site/img/11139.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,80`
  },
  {
    nombre: `PARLANTE 4 X 2 MS3627BT`,
    codigo: `11138`,
    imagen: `https://homepoint.site/img/11138.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,80`
  },
  {
    nombre: `PARLANTE 8 X 2 MS2052BT`,
    codigo: `11137`,
    imagen: `https://homepoint.site/img/11137.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,72`
  },
  {
    nombre: `KIT TALADRO Y AMOLADORA`,
    codigo: `11135`,
    imagen: `https://homepoint.site/img/11135.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$111,75`
  },
  {
    nombre: `LIMPIAVIDRIOS CHICO`,
    codigo: `11134`,
    imagen: `https://homepoint.site/img/11134.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,38`
  },
  {
    nombre: `SET 5 RECIPIENTE / TUPPER`,
    codigo: `11133`,
    imagen: `https://homepoint.site/img/11133.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$20,11`
  },
  {
    nombre: `PROYECTOR CARRUSEL / PATO`,
    codigo: `11132`,
    imagen: `https://homepoint.site/img/11132.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,46`
  },
  {
    nombre: `MINI BATIDOR Y PROCESADOR`,
    codigo: `11131`,
    imagen: `https://homepoint.site/img/11131.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,22`
  },
  {
    nombre: `CHISPERO`,
    codigo: `11130`,
    imagen: `https://homepoint.site/img/11130.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,02`
  },
  {
    nombre: `MORTERO MADERA BAMBU`,
    codigo: `11129`,
    imagen: `https://homepoint.site/img/11129.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,64`
  },
  {
    nombre: `PICADOR DE VERDURA MULTI GATLING SLICER`,
    codigo: `11128`,
    imagen: `https://homepoint.site/img/11128.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,90`
  },
  {
    nombre: `QUENCHER VIDRIO Y SORBETE`,
    codigo: `11126`,
    imagen: `https://homepoint.site/img/11126.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,39`
  },
  {
    nombre: `MASAJEADOR DE CUELLO`,
    codigo: `11125`,
    imagen: `https://homepoint.site/img/11125.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,33`
  },
  {
    nombre: `RELOJ SMART DOBLE JUEGO AURICULAR`,
    codigo: `11124`,
    imagen: `https://homepoint.site/img/11124.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,67`
  },
  {
    nombre: `PANEL SOLAR BK10`,
    codigo: `11123`,
    imagen: `https://homepoint.site/img/11123.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,73`
  },
  {
    nombre: `ASAD ZANZIBAR`,
    codigo: `11122`,
    imagen: `https://homepoint.site/img/11122.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,25`
  },
  {
    nombre: `LATTAFA PRIDE FAKHAR FEMENINO 100 ML`,
    codigo: `11121`,
    imagen: `https://homepoint.site/img/11121.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$55,13`
  },
  {
    nombre: `LATTAFA OUD MOOD`,
    codigo: `11120`,
    imagen: `https://homepoint.site/img/11120.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$46,19`
  },
  {
    nombre: `XIAOMI POCO M6 PRO`,
    codigo: `11119`,
    imagen: `https://homepoint.site/img/11119.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$312,90`
  },
  {
    nombre: `CLUB DE NUIT ELIXIR`,
    codigo: `11118`,
    imagen: `https://homepoint.site/img/11118.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$67,05`
  },
  {
    nombre: `CLUB DE NUIT MILESTONE`,
    codigo: `11117`,
    imagen: `https://homepoint.site/img/11117.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$58,11`
  },
  {
    nombre: `TV SMART 32 TALENT`,
    codigo: `11116`,
    imagen: `https://homepoint.site/img/11116.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$220,52`
  },
  {
    nombre: `LLAVE KIT 216 PCS`,
    codigo: `11115`,
    imagen: `https://homepoint.site/img/11115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$141,55`
  },
  {
    nombre: `NEBULIZADOR`,
    codigo: `11114`,
    imagen: `https://homepoint.site/img/11114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,79`
  },
  {
    nombre: `TV BOX MX10`,
    codigo: `11113`,
    imagen: `https://homepoint.site/img/11113.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$35,76`
  },
  {
    nombre: `CONSOLA RETRO GAME STICK BLANCA`,
    codigo: `11112`,
    imagen: `https://homepoint.site/img/11112.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$41,72`
  },
  {
    nombre: `AUTO CONTROL REMOTO CYBERTRUCK`,
    codigo: `11111`,
    imagen: `https://homepoint.site/img/11111.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,16`
  },
  {
    nombre: `CARTEL ABIERTO/KIOSCO`,
    codigo: `11110`,
    imagen: `https://homepoint.site/img/11110.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,37`
  },
  {
    nombre: `CAMARA CON IMPRESORA INFANTIL`,
    codigo: `11109`,
    imagen: `https://homepoint.site/img/11109.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,82`
  },
  {
    nombre: `SET TUPPER COLORES X 4 UNIDADES`,
    codigo: `11108`,
    imagen: `https://homepoint.site/img/11108.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,32`
  },
  {
    nombre: `ORGANIZADOR LAVARROPA`,
    codigo: `11107`,
    imagen: `https://homepoint.site/img/11107.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,69`
  },
  {
    nombre: `AURICULAR VINCHA CAPIBARA`,
    codigo: `11106`,
    imagen: `https://homepoint.site/img/11106.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,69`
  },
  {
    nombre: `LINTERNA PARLANTE SOLAR`,
    codigo: `11105`,
    imagen: `https://homepoint.site/img/11105.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,62`
  },
  {
    nombre: `LUZ VINCHA MINERA`,
    codigo: `11104`,
    imagen: `https://homepoint.site/img/11104.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,03`
  },
  {
    nombre: `ALARGUE TORRE`,
    codigo: `11103`,
    imagen: `https://homepoint.site/img/11103.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,84`
  },
  {
    nombre: `CEPILLO ELECTRICO DE DUCHA`,
    codigo: `11102`,
    imagen: `https://homepoint.site/img/11102.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,16`
  },
  {
    nombre: `HUMIDIFICADOR TEMPLO`,
    codigo: `11101`,
    imagen: `https://homepoint.site/img/11101.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,37`
  },
  {
    nombre: `LICUADORA GRANDE JARRA SVD-703`,
    codigo: `11100`,
    imagen: `https://homepoint.site/img/11100.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$40,23`
  },
  {
    nombre: `POWER BANK 20.000 HYTOSHY DOBLE CABLE`,
    codigo: `11099`,
    imagen: `https://homepoint.site/img/11099.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,24`
  },
  {
    nombre: `PISTA DINOSAURIO FLEXIBLE`,
    codigo: `11098`,
    imagen: `https://homepoint.site/img/11098.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,43`
  },
  {
    nombre: `PIZARRA GRANDE CAPIBARA / LABUBU`,
    codigo: `11097`,
    imagen: `https://homepoint.site/img/11097.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,45`
  },
  {
    nombre: `FOUNTAIN CHOCOLATE`,
    codigo: `11096`,
    imagen: `https://homepoint.site/img/11096.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,10`
  },
  {
    nombre: `AURICULAR SAMSUNG GALAXY BUDS 3 PRO`,
    codigo: `11093`,
    imagen: `https://homepoint.site/img/11093.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,37`
  },
  {
    nombre: `AURICULAR JBL TUNE K63`,
    codigo: `11092`,
    imagen: `https://homepoint.site/img/11092.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `AURICULAR VINCHA JBL J127`,
    codigo: `11091`,
    imagen: `https://homepoint.site/img/11091.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,64`
  },
  {
    nombre: `MAQUINA DE COSER SM505A`,
    codigo: `11090`,
    imagen: `https://homepoint.site/img/11090.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,70`
  },
  {
    nombre: `SECARROPA ELECTRICO`,
    codigo: `11089`,
    imagen: `https://homepoint.site/img/11089.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$33,52`
  },
  {
    nombre: `PARÑANTE 4 X 2 RGB ZQS4210S`,
    codigo: `11088`,
    imagen: `https://homepoint.site/img/11088.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,82`
  },
  {
    nombre: `LUZ DE RELLENO GRANDE`,
    codigo: `11087`,
    imagen: `https://homepoint.site/img/11087.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,80`
  },
  {
    nombre: `HUMIDIFICADOR ENCASTRE LEGO`,
    codigo: `11086`,
    imagen: `https://homepoint.site/img/11086.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,64`
  },
  {
    nombre: `MOPA C/BALDE SEPARADORA DE AGUA`,
    codigo: `11085`,
    imagen: `https://homepoint.site/img/11085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,15`
  },
  {
    nombre: `PARLANTE BOOMBOX 2 RGB`,
    codigo: `11084`,
    imagen: `https://homepoint.site/img/11084.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$38,74`
  },
  {
    nombre: `PARLANTE BOOMBOX 3`,
    codigo: `11083`,
    imagen: `https://homepoint.site/img/11083.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$40,23`
  },
  {
    nombre: `PAVA ELECTRICA PLEGABLE`,
    codigo: `11082`,
    imagen: `https://homepoint.site/img/11082.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,60`
  },
  {
    nombre: `MOCHILA MATERNAL CUNA CAMBIADOR`,
    codigo: `11081`,
    imagen: `https://homepoint.site/img/11081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,31`
  },
  {
    nombre: `AURICULAR INPODS 12 COLORES`,
    codigo: `11080`,
    imagen: `https://homepoint.site/img/11080.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,47`
  },
  {
    nombre: `CINTA LEVANTA BUSTO`,
    codigo: `11079`,
    imagen: `https://homepoint.site/img/11079.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,68`
  },
  {
    nombre: `CARTERA MAQUILLAJE TINY`,
    codigo: `11078`,
    imagen: `https://homepoint.site/img/11078.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,88`
  },
  {
    nombre: `MAQUILLAJE BLISTER TINY`,
    codigo: `11077`,
    imagen: `https://homepoint.site/img/11077.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,95`
  },
  {
    nombre: `LIBRETA ANIMADA`,
    codigo: `11076`,
    imagen: `https://homepoint.site/img/11076.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,68`
  },
  {
    nombre: `GAS PIMIENTA LLAVERO`,
    codigo: `11075`,
    imagen: `https://homepoint.site/img/11075.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,83`
  },
  {
    nombre: `MAQUILLAJE MARIPOSA`,
    codigo: `11074`,
    imagen: `https://homepoint.site/img/11074.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,37`
  },
  {
    nombre: `MAQUILLAJE CARRUAJE`,
    codigo: `11071`,
    imagen: `https://homepoint.site/img/11071.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,22`
  },
  {
    nombre: `MAQUILLAJE VALIJA TINY`,
    codigo: `11068`,
    imagen: `https://homepoint.site/img/11068.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,76`
  },
  {
    nombre: `GUITARRA MUSICAL`,
    codigo: `11063`,
    imagen: `https://homepoint.site/img/11063.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,69`
  },
  {
    nombre: `TERMOMETRO COCINA`,
    codigo: `11062`,
    imagen: `https://homepoint.site/img/11062.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,02`
  },
  {
    nombre: `CALCULADORA DM-1200V`,
    codigo: `11061`,
    imagen: `https://homepoint.site/img/11061.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,45`
  },
  {
    nombre: `SLIME BOTELLA`,
    codigo: `11060`,
    imagen: `https://homepoint.site/img/11060.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,32`
  },
  {
    nombre: `HAMBURGUESA BLISTER`,
    codigo: `11057`,
    imagen: `https://homepoint.site/img/11057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `CARRITO BEBE`,
    codigo: `11056`,
    imagen: `https://homepoint.site/img/11056.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,32`
  },
  {
    nombre: `GUANTE TOUCH`,
    codigo: `11055`,
    imagen: `https://homepoint.site/img/11055.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,34`
  },
  {
    nombre: `DINOSAURIO A CUERDA`,
    codigo: `11054`,
    imagen: `https://homepoint.site/img/11054.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,32`
  },
  {
    nombre: `PELUCHE CAPIBARA XXL 90 CM`,
    codigo: `11053`,
    imagen: `https://homepoint.site/img/11053.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$74,50`
  },
  {
    nombre: `PELUCHE COLAPINTO GRANDE`,
    codigo: `11052`,
    imagen: `https://homepoint.site/img/11052.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$74,50`
  },
  {
    nombre: `CAJA REGISTRADORA GRANDE`,
    codigo: `11051`,
    imagen: `https://homepoint.site/img/11051.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,09`
  },
  {
    nombre: `JUEGO DE OLLAS CON PLANCHA TOKIO 8`,
    codigo: `11046`,
    imagen: `https://homepoint.site/img/11046.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$73,01`
  },
  {
    nombre: `LUZ DE EMERGENCIA SOLAR`,
    codigo: `11045`,
    imagen: `https://homepoint.site/img/11045.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,86`
  },
  {
    nombre: `CINTA NEUROMUSCULAR KINESIOLOGICA`,
    codigo: `11044`,
    imagen: `https://homepoint.site/img/11044.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,83`
  },
  {
    nombre: `RODILLERA DE COMPRESION`,
    codigo: `11043`,
    imagen: `https://homepoint.site/img/11043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `JUEGO DE OLLAS CON M. DESMONTABLE Y SARTENES`,
    codigo: `11042`,
    imagen: `https://homepoint.site/img/11042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$65,41`
  },
  {
    nombre: `ASPIRADORA INALAMBRICA GRANDE`,
    codigo: `11041`,
    imagen: `https://homepoint.site/img/11041.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,73`
  },
  {
    nombre: `LICUADORA DE MANO 6 CUCHILLAS`,
    codigo: `11040`,
    imagen: `https://homepoint.site/img/11040.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,98`
  },
  {
    nombre: `BOTELLA ATOMIZADOR SPRAY DE ACEITE`,
    codigo: `11039`,
    imagen: `https://homepoint.site/img/11039.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,46`
  },
  {
    nombre: `MAQUINA AFEITADORA FLIPULPS`,
    codigo: `11038`,
    imagen: `https://homepoint.site/img/11038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `RELOJ SMART T900`,
    codigo: `11037`,
    imagen: `https://homepoint.site/img/11037.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,75`
  },
  {
    nombre: `LUZ DE LED PARA BOTELLA`,
    codigo: `11034`,
    imagen: `https://homepoint.site/img/11034.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,83`
  },
  {
    nombre: `SOPORTE CELULAR VIDEO MAKER`,
    codigo: `11033`,
    imagen: `https://homepoint.site/img/11033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,60`
  },
  {
    nombre: `CANDADO CON ALARMA`,
    codigo: `11032`,
    imagen: `https://homepoint.site/img/11032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,75`
  },
  {
    nombre: `BASE CARGADOR DOBLE JOYSTICK PS5`,
    codigo: `11031`,
    imagen: `https://homepoint.site/img/11031.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,24`
  },
  {
    nombre: `TENSIOMETRO DE BRAZO DSH397`,
    codigo: `11029`,
    imagen: `https://homepoint.site/img/11029.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,37`
  },
  {
    nombre: `SECADOR DE PELO 2200 W 4 EN 1 CAUIPE`,
    codigo: `11028`,
    imagen: `https://homepoint.site/img/11028.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,15`
  },
  {
    nombre: `PISTA DE AUTOS LABUBU PARKING LOT`,
    codigo: `11027`,
    imagen: `https://homepoint.site/img/11027.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$18,92`
  },
  {
    nombre: `CARGADOR CELULAR 25W CON CABLE USB-C`,
    codigo: `11026`,
    imagen: `https://homepoint.site/img/11026.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `ESCURRIDOR DE TELA PARA CUBIERTOS`,
    codigo: `11025`,
    imagen: `https://homepoint.site/img/11025.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,47`
  },
  {
    nombre: `TABLA DE MADERA Y MARMOL`,
    codigo: `11023`,
    imagen: `https://homepoint.site/img/11023.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,20`
  },
  {
    nombre: `CHALECO FLUOR REFLEX`,
    codigo: `11022`,
    imagen: `https://homepoint.site/img/11022.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,94`
  },
  {
    nombre: `VINCHA DEPORTIVA CON BLUETOOTH`,
    codigo: `11021`,
    imagen: `https://homepoint.site/img/11021.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,20`
  },
  {
    nombre: `ORGANIZADOR ESQUINERO DE BAÑO`,
    codigo: `11020`,
    imagen: `https://homepoint.site/img/11020.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,60`
  },
  {
    nombre: `ORGANIZADOR PARA BAÑO TW103`,
    codigo: `11019`,
    imagen: `https://homepoint.site/img/11019.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,05`
  },
  {
    nombre: `VALIJA DE PINTURA 42 PCS`,
    codigo: `11018`,
    imagen: `https://homepoint.site/img/11018.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,58`
  },
  {
    nombre: `VALIJA DE PINTURA 160 PCS`,
    codigo: `11017`,
    imagen: `https://homepoint.site/img/11017.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,18`
  },
  {
    nombre: `MATE LISTO 750 ML ROLAN`,
    codigo: `11016`,
    imagen: `https://homepoint.site/img/11016.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,07`
  },
  {
    nombre: `MATE LISTO 500 ML ROLAN`,
    codigo: `11015`,
    imagen: `https://homepoint.site/img/11015.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,73`
  },
  {
    nombre: `CINTA METRICA CON LASER Y NIVEL`,
    codigo: `11012`,
    imagen: `https://homepoint.site/img/11012.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,62`
  },
  {
    nombre: `CUTTER 188 MM BLISTER X 12`,
    codigo: `11011`,
    imagen: `https://homepoint.site/img/11011.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,77`
  },
  {
    nombre: `CARGADOR PARA AUTO CON LUCES 4 EN 1`,
    codigo: `11010`,
    imagen: `https://homepoint.site/img/11010.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,58`
  },
  {
    nombre: `CABLE CARGADOR 4 EN 1 SPRING`,
    codigo: `11009`,
    imagen: `https://homepoint.site/img/11009.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,98`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CARA / BOZO`,
    codigo: `11008`,
    imagen: `https://homepoint.site/img/11008.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,32`
  },
  {
    nombre: `PINZA 8 PULGADAS`,
    codigo: `11006`,
    imagen: `https://homepoint.site/img/11006.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `MINI PIMER SOKANY`,
    codigo: `11005`,
    imagen: `https://homepoint.site/img/11005.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,37`
  },
  {
    nombre: `MANTA CISNE EDREDON INTERMEDIO 2 1/2`,
    codigo: `11004`,
    imagen: `https://homepoint.site/img/11004.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$24,29`
  },
  {
    nombre: `TRIPODE ALTO`,
    codigo: `11003`,
    imagen: `https://homepoint.site/img/11003.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `CABEZAL CARGADOR APPLE`,
    codigo: `11002`,
    imagen: `https://homepoint.site/img/11002.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,87`
  },
  {
    nombre: `CABLE LIGHTNING APPLE`,
    codigo: `11001`,
    imagen: `https://homepoint.site/img/11001.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,53`
  },
  {
    nombre: `CABLE USB-C APPLE`,
    codigo: `11000`,
    imagen: `https://homepoint.site/img/11000.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,83`
  },
  {
    nombre: `TV SMART 43 BGH B4325FH5`,
    codigo: `10999`,
    imagen: `https://homepoint.site/img/10999.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$327,80`
  },
  {
    nombre: `TV SMART 32 BGH B3223H5`,
    codigo: `10998`,
    imagen: `https://homepoint.site/img/10998.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$235,42`
  },
  {
    nombre: `PARLANTE 4 X 2 SV 2401`,
    codigo: `10997`,
    imagen: `https://homepoint.site/img/10997.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,07`
  },
  {
    nombre: `ASPIRADORA MOPA`,
    codigo: `10996`,
    imagen: `https://homepoint.site/img/10996.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,84`
  },
  {
    nombre: `INFLADOR COMPRESOR RUEDA`,
    codigo: `10995`,
    imagen: `https://homepoint.site/img/10995.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,56`
  },
  {
    nombre: `HORNO CAFETERO DESAYUNADOR`,
    codigo: `10994`,
    imagen: `https://homepoint.site/img/10994.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$84,93`
  },
  {
    nombre: `LUNCHERA CONSERVADORA 6 LTS`,
    codigo: `10993`,
    imagen: `https://homepoint.site/img/10993.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,43`
  },
  {
    nombre: `LIFTING MASAJEADOR`,
    codigo: `10992`,
    imagen: `https://homepoint.site/img/10992.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,81`
  },
  {
    nombre: `PANEL LUZ LED SELFIE BM017`,
    codigo: `10991`,
    imagen: `https://homepoint.site/img/10991.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,43`
  },
  {
    nombre: `BANQUETAS PVC REFORZADAS`,
    codigo: `10990`,
    imagen: `https://homepoint.site/img/10990.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,07`
  },
  {
    nombre: `SET DE BAÑO BAMBU`,
    codigo: `10989`,
    imagen: `https://homepoint.site/img/10989.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,15`
  },
  {
    nombre: `RELOJ DESPERTADOR ESPEJO LED DT6505`,
    codigo: `10988`,
    imagen: `https://homepoint.site/img/10988.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,26`
  },
  {
    nombre: `CINTA AISLADORA PACK X 10`,
    codigo: `10987`,
    imagen: `https://homepoint.site/img/10987.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,43`
  },
  {
    nombre: `AURICULARES X15`,
    codigo: `10986`,
    imagen: `https://homepoint.site/img/10986.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,96`
  },
  {
    nombre: `HUMIDIFICADOR VOLCAN MACHINE JL1028`,
    codigo: `10985`,
    imagen: `https://homepoint.site/img/10985.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$15,50`
  },
  {
    nombre: `HUMIDIFICADOR FOGATA CON LLAMAS CNW21608 270ML`,
    codigo: `10984`,
    imagen: `https://homepoint.site/img/10984.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,82`
  },
  {
    nombre: `MOPA SIN LAVADO A MANO DSH`,
    codigo: `10983`,
    imagen: `https://homepoint.site/img/10983.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,14`
  },
  {
    nombre: `LATTAFA ASAD BOURBON`,
    codigo: `10981`,
    imagen: `https://homepoint.site/img/10981.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$56,62`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA X 24 PCS`,
    codigo: `10979`,
    imagen: `https://homepoint.site/img/10979.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,96`
  },
  {
    nombre: `FREIDORA OM 6 LITROS`,
    codigo: `10978`,
    imagen: `https://homepoint.site/img/10978.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$86,42`
  },
  {
    nombre: `DRONE PLEGABLE`,
    codigo: `10977`,
    imagen: `https://homepoint.site/img/10977.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$31,74`
  },
  {
    nombre: `POWER BANK 10.000 MAH`,
    codigo: `10976`,
    imagen: `https://homepoint.site/img/10976.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,15`
  },
  {
    nombre: `SALERO Y PIMENTERO ALUMINIO 8971`,
    codigo: `10975`,
    imagen: `https://homepoint.site/img/10975.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,40`
  },
  {
    nombre: `SET ASADOR X 2 PCS ESTUCHE NEGRO`,
    codigo: `10974`,
    imagen: `https://homepoint.site/img/10974.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,39`
  },
  {
    nombre: `ZAPATILLA ALARGUE 6 USB POWERSOCKET`,
    codigo: `10973`,
    imagen: `https://homepoint.site/img/10973.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,64`
  },
  {
    nombre: `CANDADO PLATEADO TLO3543`,
    codigo: `10972`,
    imagen: `https://homepoint.site/img/10972.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,64`
  },
  {
    nombre: `CANDADO PLATEADO 3545`,
    codigo: `10971`,
    imagen: `https://homepoint.site/img/10971.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,83`
  },
  {
    nombre: `DISPENSER PORTA ESPONJA`,
    codigo: `10970`,
    imagen: `https://homepoint.site/img/10970.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,45`
  },
  {
    nombre: `SOPORTE CELULAR PARA AUTO CH252`,
    codigo: `10969`,
    imagen: `https://homepoint.site/img/10969.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,92`
  },
  {
    nombre: `SOPORTE CELULAR PARA AUTO CH290`,
    codigo: `10968`,
    imagen: `https://homepoint.site/img/10968.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,92`
  },
  {
    nombre: `LATTAFA BADEE NOBLE BLUSH`,
    codigo: `10967`,
    imagen: `https://homepoint.site/img/10967.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$49,17`
  },
  {
    nombre: `LATTAFA OPULENT DUBAI`,
    codigo: `10966`,
    imagen: `https://homepoint.site/img/10966.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$43,21`
  },
  {
    nombre: `LATTAFA KHAMRAH DUKHAN`,
    codigo: `10965`,
    imagen: `https://homepoint.site/img/10965.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$70,03`
  },
  {
    nombre: `CLUB DE NUIT WOMAN`,
    codigo: `10964`,
    imagen: `https://homepoint.site/img/10964.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$53,64`
  },
  {
    nombre: `JUEGO DE LLAVE ALEN 9 PCS`,
    codigo: `10963`,
    imagen: `https://homepoint.site/img/10963.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,17`
  },
  {
    nombre: `HUMIDIFICADOR PIEDRAS VOLCANICAS`,
    codigo: `10962`,
    imagen: `https://homepoint.site/img/10962.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,33`
  },
  {
    nombre: `POWER BANK PORTATIL 20000 MAH`,
    codigo: `10961`,
    imagen: `https://homepoint.site/img/10961.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,43`
  },
  {
    nombre: `AURICULAR INALAMBRICO M88`,
    codigo: `10960`,
    imagen: `https://homepoint.site/img/10960.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,15`
  },
  {
    nombre: `TAZA CAPUCCINO X 4 PCS`,
    codigo: `10959`,
    imagen: `https://homepoint.site/img/10959.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,77`
  },
  {
    nombre: `JUEGO DE OLLAS 10 PCS WOVE`,
    codigo: `10958`,
    imagen: `https://homepoint.site/img/10958.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$78,82`
  },
  {
    nombre: `FREIDORA DE AIRE OM 3,5 LITROS`,
    codigo: `10957`,
    imagen: `https://homepoint.site/img/10957.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$64,07`
  },
  {
    nombre: `FREIDORA DE AIRE DIGITAL OM 4,5 LITROS`,
    codigo: `10956`,
    imagen: `https://homepoint.site/img/10956.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$71,52`
  },
  {
    nombre: `LINTERNA PICANA 1101AR2786`,
    codigo: `10955`,
    imagen: `https://homepoint.site/img/10955.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,39`
  },
  {
    nombre: `SET BOUTIQUE TOKYO CON HERRAMIENTAS`,
    codigo: `10954`,
    imagen: `https://homepoint.site/img/10954.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$74,50`
  },
  {
    nombre: `VELADOR CAPIBARA XJD-74`,
    codigo: `10953`,
    imagen: `https://homepoint.site/img/10953.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,11`
  },
  {
    nombre: `VELADOR DE FORMAS`,
    codigo: `10952`,
    imagen: `https://homepoint.site/img/10952.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,24`
  },
  {
    nombre: `VELADOR SILICONA CONEJITO`,
    codigo: `10951`,
    imagen: `https://homepoint.site/img/10951.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,05`
  },
  {
    nombre: `VELADOR CAPIBARA HONGO 339/340H`,
    codigo: `10950`,
    imagen: `https://homepoint.site/img/10950.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,13`
  },
  {
    nombre: `VELADOR CAPIBARA COD343H`,
    codigo: `10949`,
    imagen: `https://homepoint.site/img/10949.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,92`
  },
  {
    nombre: `ESPEJO MAQUILLADOR PLEGABLE 3 VIDRIOS`,
    codigo: `10948`,
    imagen: `https://homepoint.site/img/10948.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,18`
  },
  {
    nombre: `AFEITADORA SHAVER CON VISOR BATERIA`,
    codigo: `10947`,
    imagen: `https://homepoint.site/img/10947.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `TV STICK BLANCO X10`,
    codigo: `10946`,
    imagen: `https://homepoint.site/img/10946.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$43,21`
  },
  {
    nombre: `CORTAPELO VINTAGE T9`,
    codigo: `10944`,
    imagen: `https://homepoint.site/img/10944.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,54`
  },
  {
    nombre: `CAFETERA EXPRESO 3 EN 1 CAPSULAS`,
    codigo: `10943`,
    imagen: `https://homepoint.site/img/10943.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$126,65`
  },
  {
    nombre: `LUZ BALIZA SOLAR HB6609`,
    codigo: `10942`,
    imagen: `https://homepoint.site/img/10942.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,37`
  },
  {
    nombre: `PARLANTE 4X2 GTS 1773 CON MICROFONO`,
    codigo: `10941`,
    imagen: `https://homepoint.site/img/10941.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,15`
  },
  {
    nombre: `CORREA PARA PERRO RETRACTIL 5M`,
    codigo: `10940`,
    imagen: `https://homepoint.site/img/10940.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,24`
  },
  {
    nombre: `CAFETERA EXPRESO DOBLE TAZA OM`,
    codigo: `10939`,
    imagen: `https://homepoint.site/img/10939.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$126,65`
  },
  {
    nombre: `LUZ DE EMERGENCIA 60 LED STAR 220V`,
    codigo: `10938`,
    imagen: `https://homepoint.site/img/10938.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,03`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 150 PCS KTO`,
    codigo: `10937`,
    imagen: `https://homepoint.site/img/10937.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,47`
  },
  {
    nombre: `JUEGO DE HERRAMIENTAS 108 PCS KTO`,
    codigo: `10936`,
    imagen: `https://homepoint.site/img/10936.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$61,54`
  },
  {
    nombre: `VALIJA DE HERRAMIENTAS 245 PCS`,
    codigo: `10935`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$169,86`
  },
  {
    nombre: `MANTA PELUCHE CAPIBARA`,
    codigo: `10933`,
    imagen: `https://homepoint.site/img/10933.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,84`
  },
  {
    nombre: `TV SMART 32 XIAOMI`,
    codigo: `10931`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$253,30`
  },
  {
    nombre: `CUCHILLO 6 MANGO MADERA`,
    codigo: `10930`,
    imagen: `https://homepoint.site/img/10930.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,68`
  },
  {
    nombre: `CUCHILLO N 8 TRAMONTINA MANGO BLANCO`,
    codigo: `10929`,
    imagen: `https://homepoint.site/img/10929.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,61`
  },
  {
    nombre: `SET BOUTIQUE TOKYO CON MARTILLO Y CIERRA`,
    codigo: `10928`,
    imagen: `https://homepoint.site/img/10928.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$101,32`
  },
  {
    nombre: `CUCHILLA P9 MANGO CROMADO`,
    codigo: `10927`,
    imagen: `https://homepoint.site/img/10927.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,73`
  },
  {
    nombre: `VASO CAPIBARA CON PELOTITAS`,
    codigo: `10926`,
    imagen: `https://homepoint.site/img/10926.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,58`
  },
  {
    nombre: `LATTAFA YARA TOUS`,
    codigo: `10925`,
    imagen: `https://homepoint.site/img/10925.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$44,70`
  },
  {
    nombre: `PATILLERA RETRO NOVATIX`,
    codigo: `10924`,
    imagen: `https://homepoint.site/img/10924.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,51`
  },
  {
    nombre: `MOVEDOR AUXILIAR DE MUEBLES`,
    codigo: `10923`,
    imagen: `https://homepoint.site/img/10923.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$7,15`
  },
  {
    nombre: `CORTADORA PELO PARA PERRO`,
    codigo: `10922`,
    imagen: `https://homepoint.site/img/10922.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,26`
  },
  {
    nombre: `PARLANTE 6,5 PULGADAS`,
    codigo: `10921`,
    imagen: `https://homepoint.site/img/10921.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$22,95`
  },
  {
    nombre: `ARRANCADOR AUTO CON COMPRESOR`,
    codigo: `10920`,
    imagen: `https://homepoint.site/img/10920.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$73,01`
  },
  {
    nombre: `CINTA DOBLE FAZ`,
    codigo: `10919`,
    imagen: `https://homepoint.site/img/10919.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,04`
  },
  {
    nombre: `CABLE PARA BATERIA 1000 W`,
    codigo: `10918`,
    imagen: `https://homepoint.site/img/10918.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,94`
  },
  {
    nombre: `LINGA TRAKA CON TENSOR`,
    codigo: `10917`,
    imagen: `https://homepoint.site/img/10917.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,43`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 10 PCS`,
    codigo: `10916`,
    imagen: `https://homepoint.site/img/10916.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,15`
  },
  {
    nombre: `ORGANIZADOR DE CUBIERTOS 7 PCS`,
    codigo: `10915`,
    imagen: `https://homepoint.site/img/10915.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,73`
  },
  {
    nombre: `ORGANIZADOR DE COCINA DSH888`,
    codigo: `10913`,
    imagen: `https://homepoint.site/img/10913.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,01`
  },
  {
    nombre: `CONTROL REMOTO 4K SMART ST404`,
    codigo: `10911`,
    imagen: `https://homepoint.site/img/10911.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,43`
  },
  {
    nombre: `BASE HUB USB CARGA RAPIDA 66W`,
    codigo: `10910`,
    imagen: `https://homepoint.site/img/10910.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$6,56`
  },
  {
    nombre: `PARLANTE JBL ALEXE GRANDE`,
    codigo: `10909`,
    imagen: `https://homepoint.site/img/10909.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,69`
  },
  {
    nombre: `PARLANTE JBL ALEXE CHICO`,
    codigo: `10908`,
    imagen: `https://homepoint.site/img/10908.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$20,11`
  },
  {
    nombre: `LAPIZ 3D`,
    codigo: `10907`,
    imagen: `https://homepoint.site/img/10907.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,96`
  },
  {
    nombre: `ESPEJO VIAJERO`,
    codigo: `10906`,
    imagen: `https://homepoint.site/img/10906.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,30`
  },
  {
    nombre: `HUMIDIFICADOR NUBE`,
    codigo: `10905`,
    imagen: `https://homepoint.site/img/10905.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,65`
  },
  {
    nombre: `PAVA ELECTRICA AUTO 500 ML`,
    codigo: `10904`,
    imagen: `https://homepoint.site/img/10904.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,71`
  },
  {
    nombre: `MASAJEDOR CORPORAL`,
    codigo: `10903`,
    imagen: `https://homepoint.site/img/10903.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$29,80`
  },
  {
    nombre: `TIRA LED RGB TV LEED MOOD LIGHTS`,
    codigo: `10902`,
    imagen: `https://homepoint.site/img/10902.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,45`
  },
  {
    nombre: `CAJA FICHERO POKER 200 FICHAS WTJM01`,
    codigo: `10901`,
    imagen: `https://homepoint.site/img/10901.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,60`
  },
  {
    nombre: `PICADORA DE VERDURAS A CUERDA PVKA17`,
    codigo: `10900`,
    imagen: `https://homepoint.site/img/10900.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,62`
  },
  {
    nombre: `TERMOMETRO PARA HOGAR`,
    codigo: `10899`,
    imagen: `https://homepoint.site/img/10899.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `UTENSILLOS SILICONA 5 PCS`,
    codigo: `10898`,
    imagen: `https://homepoint.site/img/10898.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,85`
  },
  {
    nombre: `ESCURRIDOR EXTENSIBLE`,
    codigo: `10897`,
    imagen: `https://homepoint.site/img/10897.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,92`
  },
  {
    nombre: `BUFANDA CALEFACTOR USB`,
    codigo: `10896`,
    imagen: `https://homepoint.site/img/10896.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,71`
  },
  {
    nombre: `LLAVE T 24 PCS AMARILLA TL00311 TL0125`,
    codigo: `10895`,
    imagen: `https://homepoint.site/img/10895.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,28`
  },
  {
    nombre: `MASAJEADOR PIE USB CALEFACCION`,
    codigo: `10894`,
    imagen: `https://homepoint.site/img/10894.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,14`
  },
  {
    nombre: `CARGADOR DE AUTO CARG7`,
    codigo: `10893`,
    imagen: `https://homepoint.site/img/10893.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,02`
  },
  {
    nombre: `SOPORTE MOVIL 32-75`,
    codigo: `10892`,
    imagen: `https://homepoint.site/img/10892.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$29,20`
  },
  {
    nombre: `LAMPARA DE CAMPING UFO LIGHT 150 W`,
    codigo: `10890`,
    imagen: `https://homepoint.site/img/10890.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,65`
  },
  {
    nombre: `COMEDERO / BEBEDERO PARA MASCOTAS`,
    codigo: `10889`,
    imagen: `https://homepoint.site/img/10889.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,89`
  },
  {
    nombre: `PELUCHE MANTA FRAZADA`,
    codigo: `10888`,
    imagen: `https://homepoint.site/img/10888.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,84`
  },
  {
    nombre: `MOUSE INALAMBRICO`,
    codigo: `10887`,
    imagen: `https://homepoint.site/img/10887.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,30`
  },
  {
    nombre: `CAJA SORPRESA LABUBU`,
    codigo: `10886`,
    imagen: `https://homepoint.site/img/10886.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `DISPENSER VIDRIO BASE BAMBU X 2`,
    codigo: `10885`,
    imagen: `https://homepoint.site/img/10885.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,99`
  },
  {
    nombre: `CAFETERA ELECTRICA ORYX`,
    codigo: `10884`,
    imagen: `https://homepoint.site/img/10884.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,61`
  },
  {
    nombre: `HUMIDIFICADOR LLAMAS DQ-701/P775`,
    codigo: `10883`,
    imagen: `https://homepoint.site/img/10883.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,86`
  },
  {
    nombre: `MAQUINA CORTADORAPELO HITOSHY WL-10002`,
    codigo: `10882`,
    imagen: `https://homepoint.site/img/10882.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,13`
  },
  {
    nombre: `PAVA ELECTRICA DIGITAL`,
    codigo: `10881`,
    imagen: `https://homepoint.site/img/10881.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$29,80`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS KING`,
    codigo: `10879`,
    imagen: `https://homepoint.site/img/10879.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,16`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS QUEEN`,
    codigo: `10878`,
    imagen: `https://homepoint.site/img/10878.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,39`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS FULL`,
    codigo: `10877`,
    imagen: `https://homepoint.site/img/10877.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$23,24`
  },
  {
    nombre: `SABANA TORERO 3800 HILOS TWIN`,
    codigo: `10876`,
    imagen: `https://homepoint.site/img/10876.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$18,18`
  },
  {
    nombre: `MANTA PIEL DE ANGEL`,
    codigo: `10875`,
    imagen: `https://homepoint.site/img/10875.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$24,14`
  },
  {
    nombre: `LATTAFA TERIAQ EDP 100 ML`,
    codigo: `10874`,
    imagen: `https://homepoint.site/img/10874.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$50,66`
  },
  {
    nombre: `LATTAFA HIS CINFESSION EDO 100 ML`,
    codigo: `10873`,
    imagen: `https://homepoint.site/img/10873.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$53,64`
  },
  {
    nombre: `LATTAFA HER CONFESSION EDO 100 ML`,
    codigo: `10872`,
    imagen: `https://homepoint.site/img/10872.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$53,64`
  },
  {
    nombre: `LATTAFA ANGHAM EDP 100 ML`,
    codigo: `10871`,
    imagen: `https://homepoint.site/img/10871.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,68`
  },
  {
    nombre: `LATTAFA MAAHIR LEGACY EDP 100 ML`,
    codigo: `10870`,
    imagen: `https://homepoint.site/img/10870.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$43,21`
  },
  {
    nombre: `SOPORTE CELULAR C/ INDUCCION IS53175`,
    codigo: `10869`,
    imagen: `https://homepoint.site/img/10869.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,92`
  },
  {
    nombre: `LLAVE TUBO 121 PCS`,
    codigo: `10868`,
    imagen: `https://homepoint.site/img/10868.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$99,83`
  },
  {
    nombre: `JARRA CUBIERTOS BARRICHELO`,
    codigo: `10867`,
    imagen: `https://homepoint.site/img/10867.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,77`
  },
  {
    nombre: `PARLANTE CON IMAN RUEDA`,
    codigo: `10864`,
    imagen: `https://homepoint.site/img/10864.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,62`
  },
  {
    nombre: `LAPIZ DEPILADOR DE CEJAS`,
    codigo: `10863`,
    imagen: `https://homepoint.site/img/10863.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,02`
  },
  {
    nombre: `RAYADOR DE MANO WISHOME`,
    codigo: `10862`,
    imagen: `https://homepoint.site/img/10862.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,50`
  },
  {
    nombre: `SET CUCHILLO COCINA 2 PCS`,
    codigo: `10861`,
    imagen: `https://homepoint.site/img/10861.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,66`
  },
  {
    nombre: `ORGANIZADOR DE MESADA`,
    codigo: `10859`,
    imagen: `https://homepoint.site/img/10859.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,92`
  },
  {
    nombre: `MASAJEADOR DE PIE PLANTILLA`,
    codigo: `10858`,
    imagen: `https://homepoint.site/img/10858.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,47`
  },
  {
    nombre: `RASURADORA / AFEITADORA`,
    codigo: `10857`,
    imagen: `https://homepoint.site/img/10857.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,77`
  },
  {
    nombre: `BATIDOR INALAMBRICA OURUYU`,
    codigo: `10856`,
    imagen: `https://homepoint.site/img/10856.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,32`
  },
  {
    nombre: `SET CUCHILLO DE COCINA 3 PCS`,
    codigo: `10854`,
    imagen: `https://homepoint.site/img/10854.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,64`
  },
  {
    nombre: `CARGADOR IPHONE PH14P`,
    codigo: `10853`,
    imagen: `https://homepoint.site/img/10853.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `SOPLADORA ORYX`,
    codigo: `10852`,
    imagen: `https://homepoint.site/img/10852.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$41,27`
  },
  {
    nombre: `DISPENSER DE HUEVOS`,
    codigo: `10851`,
    imagen: `https://homepoint.site/img/10851.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,94`
  },
  {
    nombre: `GUANTES INVIERNO`,
    codigo: `10849`,
    imagen: `https://homepoint.site/img/10849.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,19`
  },
  {
    nombre: `CAFETERA INALAMBRICA`,
    codigo: `10848`,
    imagen: `https://homepoint.site/img/10848.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$86,42`
  },
  {
    nombre: `SOPORTE TRIANGULAR AUTO`,
    codigo: `10847`,
    imagen: `https://homepoint.site/img/10847.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,43`
  },
  {
    nombre: `MINI CAMARA INFANTIL`,
    codigo: `10846`,
    imagen: `https://homepoint.site/img/10846.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,60`
  },
  {
    nombre: `GORRO AURICULAR CON BLUETOOTH`,
    codigo: `10845`,
    imagen: `https://homepoint.site/img/10845.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,58`
  },
  {
    nombre: `BOTELLA INFANTIL 550 ML 4316`,
    codigo: `10844`,
    imagen: `https://homepoint.site/img/10844.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `SET DESTORNILLADOR LLAVE T 29 PCS`,
    codigo: `10841`,
    imagen: `https://homepoint.site/img/10841.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `ASPIRADORA REMOVEDOR PELO Y PELUSA`,
    codigo: `10840`,
    imagen: `https://homepoint.site/img/10840.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,83`
  },
  {
    nombre: `ANTIFAZ PARA DORMIR MUSIC BLUETOOTH`,
    codigo: `10838`,
    imagen: `https://homepoint.site/img/10838.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,88`
  },
  {
    nombre: `TAG LOCALIZADOR BLUETOOTH`,
    codigo: `10837`,
    imagen: `https://homepoint.site/img/10837.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,71`
  },
  {
    nombre: `BODY ARABES`,
    codigo: `10836`,
    imagen: `https://homepoint.site/img/10836.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,94`
  },
  {
    nombre: `MOTOROLA G15 4RAM/128GB`,
    codigo: `10835`,
    imagen: `https://homepoint.site/img/10835.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$211,58`
  },
  {
    nombre: `XIAOMI POCO C75 8RAM/256GB`,
    codigo: `10834`,
    imagen: `https://homepoint.site/img/10834.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$223,50`
  },
  {
    nombre: `SAMSUNG A05 4RAM/128GB`,
    codigo: `10833`,
    imagen: `https://homepoint.site/img/10833.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$163,90`
  },
  {
    nombre: `ASPIRADORA ROBOT 8088`,
    codigo: `10830`,
    imagen: `https://homepoint.site/img/10830.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$28,31`
  },
  {
    nombre: `FABRICA DE PIZZAS`,
    codigo: `10827`,
    imagen: `https://homepoint.site/img/10827.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$60,64`
  },
  {
    nombre: `MINI MASAJEADOR PORTATIL PARCHE`,
    codigo: `10826`,
    imagen: `https://homepoint.site/img/10826.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,91`
  },
  {
    nombre: `SOPORTE PARA AUTO F04 CAJA NEGRA`,
    codigo: `10825`,
    imagen: `https://homepoint.site/img/10825.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,25`
  },
  {
    nombre: `TIMBRE CON CAMARA`,
    codigo: `10824`,
    imagen: `https://homepoint.site/img/10824.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,11`
  },
  {
    nombre: `CALCULADORA COLORES CT2278`,
    codigo: `10823`,
    imagen: `https://homepoint.site/img/10823.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,41`
  },
  {
    nombre: `DESTORNILLADOR X 2`,
    codigo: `10822`,
    imagen: `https://homepoint.site/img/10822.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,94`
  },
  {
    nombre: `CARGADOR PORTATIL ESPADA`,
    codigo: `10821`,
    imagen: `https://homepoint.site/img/10821.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,79`
  },
  {
    nombre: `LUZ PARA BICI CROO667`,
    codigo: `10820`,
    imagen: `https://homepoint.site/img/10820.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,23`
  },
  {
    nombre: `SET COMPOTERA`,
    codigo: `10819`,
    imagen: `https://homepoint.site/img/10819.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,76`
  },
  {
    nombre: `MOPA CON BALDE CENTRIFUGADO`,
    codigo: `10818`,
    imagen: `https://homepoint.site/img/10818.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,73`
  },
  {
    nombre: `LASER NIVEL LT11`,
    codigo: `10817`,
    imagen: `https://homepoint.site/img/10817.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,64`
  },
  {
    nombre: `PARAGUA NEGRO CHICO`,
    codigo: `10816`,
    imagen: `https://homepoint.site/img/10816.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,28`
  },
  {
    nombre: `SOPORTE MOTO MTC63`,
    codigo: `10813`,
    imagen: `https://homepoint.site/img/10813.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,81`
  },
  {
    nombre: `RELOJ ELEGANTE LAIBIN CINTURON Y ANTEOJOS`,
    codigo: `10812`,
    imagen: `https://homepoint.site/img/10812.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$21,61`
  },
  {
    nombre: `RELOJ ELEGANTE FASHION GYFT IS53530`,
    codigo: `10811`,
    imagen: `https://homepoint.site/img/10811.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$22,05`
  },
  {
    nombre: `AURORA CHERRY IN THE WOODS 100 ML`,
    codigo: `10810`,
    imagen: `https://homepoint.site/img/10810.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$83,44`
  },
  {
    nombre: `AURORA VANILLA EXPRESSO 100 ML`,
    codigo: `10809`,
    imagen: `https://homepoint.site/img/10809.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$68,54`
  },
  {
    nombre: `AL HAR AMBER OUD DUBAI NIGHT 100 ML`,
    codigo: `10808`,
    imagen: `https://homepoint.site/img/10808.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$89,40`
  },
  {
    nombre: `AL HAR AMBER OUD AQUA DUBAI 100 ML`,
    codigo: `10807`,
    imagen: `https://homepoint.site/img/10807.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$93,87`
  },
  {
    nombre: `LATTAFA THE KINGDOM 100 ML`,
    codigo: `10806`,
    imagen: `https://homepoint.site/img/10806.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$61,09`
  },
  {
    nombre: `AFNAM 9 AM DIVE 100 ML`,
    codigo: `10805`,
    imagen: `https://homepoint.site/img/10805.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$56,62`
  },
  {
    nombre: `ALARGUE T23 ZAPATILLA`,
    codigo: `10804`,
    imagen: `https://homepoint.site/img/10804.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,39`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO SL21109`,
    codigo: `10803`,
    imagen: `https://homepoint.site/img/10803.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$16,69`
  },
  {
    nombre: `MICROFONO WI-FI`,
    codigo: `10802`,
    imagen: `https://homepoint.site/img/10802.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,71`
  },
  {
    nombre: `UTENSILLOS KIT 19 PCS`,
    codigo: `10801`,
    imagen: `https://homepoint.site/img/10801.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$28,31`
  },
  {
    nombre: `POWER BANK MI XIAOMI`,
    codigo: `10800`,
    imagen: `https://homepoint.site/img/10800.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `LENTES INTELIGENTES CON AUDIO M8PRO`,
    codigo: `10799`,
    imagen: `https://homepoint.site/img/10799.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,90`
  },
  {
    nombre: `ALARGUE ZAPATILLA 424U`,
    codigo: `10798`,
    imagen: `https://homepoint.site/img/10798.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,05`
  },
  {
    nombre: `MASAJEADOR C/ MANGO JC395`,
    codigo: `10797`,
    imagen: `https://homepoint.site/img/10797.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,49`
  },
  {
    nombre: `PARLANTE BLUETOOTH PORTATIL LED`,
    codigo: `10794`,
    imagen: `https://homepoint.site/img/10794.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,66`
  },
  {
    nombre: `SOFA INFLABLE`,
    codigo: `10791`,
    imagen: `https://homepoint.site/img/10791.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,07`
  },
  {
    nombre: `SOPORTE PLEGABLE`,
    codigo: `10789`,
    imagen: `https://homepoint.site/img/10789.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,99`
  },
  {
    nombre: `LAMPARA DOBLE DE ESCRITORIO A8`,
    codigo: `10786`,
    imagen: `https://homepoint.site/img/10786.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,43`
  },
  {
    nombre: `CEPILLO DE PELO`,
    codigo: `10785`,
    imagen: `https://homepoint.site/img/10785.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,09`
  },
  {
    nombre: `RELOJ SMART 8 EN 1 D 200`,
    codigo: `10783`,
    imagen: `https://homepoint.site/img/10783.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$23,54`
  },
  {
    nombre: `CEPILLO MOLDEADOR PELO 5 EN 1`,
    codigo: `10781`,
    imagen: `https://homepoint.site/img/10781.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,37`
  },
  {
    nombre: `MiCROONDAS ORYX 20 L`,
    codigo: `10779`,
    imagen: `https://homepoint.site/img/10779.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$153,47`
  },
  {
    nombre: `WOK`,
    codigo: `10778`,
    imagen: `https://homepoint.site/img/10778.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,17`
  },
  {
    nombre: `PILA RECARGABLES AA USB`,
    codigo: `10777`,
    imagen: `https://homepoint.site/img/10777.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,36`
  },
  {
    nombre: `MINIPIMER / BATIDORA 4 EN 1`,
    codigo: `10776`,
    imagen: `https://homepoint.site/img/10776.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$43,66`
  },
  {
    nombre: `RELOJ DESPERTADOR`,
    codigo: `10775`,
    imagen: `https://homepoint.site/img/10775.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,97`
  },
  {
    nombre: `CABLE CARGADOR USB-C`,
    codigo: `10774`,
    imagen: `https://homepoint.site/img/10774.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,71`
  },
  {
    nombre: `SANDWICHERA ELECTRICA ACERO HYTOSHY`,
    codigo: `10773`,
    imagen: `https://homepoint.site/img/10773.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,11`
  },
  {
    nombre: `PICADORA DE CARNE`,
    codigo: `10772`,
    imagen: `https://homepoint.site/img/10772.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$32,33`
  },
  {
    nombre: `CANDADO MOTO/BICICLETA ULOCK 214`,
    codigo: `10771`,
    imagen: `https://homepoint.site/img/10771.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,51`
  },
  {
    nombre: `FREIDORA ELECTRICA CON ACEITE`,
    codigo: `10770`,
    imagen: `https://homepoint.site/img/10770.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$63,03`
  },
  {
    nombre: `LAMPARA RECARGABLE JL719`,
    codigo: `10769`,
    imagen: `https://homepoint.site/img/10769.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,68`
  },
  {
    nombre: `CABEZAL CARGADOR CELULAR`,
    codigo: `10768`,
    imagen: `https://homepoint.site/img/10768.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,02`
  },
  {
    nombre: `PAVA PARA AUTO 1 L`,
    codigo: `10767`,
    imagen: `https://homepoint.site/img/10767.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,67`
  },
  {
    nombre: `RELOJ DE PARED`,
    codigo: `10766`,
    imagen: `https://homepoint.site/img/10766.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,49`
  },
  {
    nombre: `TERMO BALA PLATA 500 CC`,
    codigo: `10765`,
    imagen: `https://homepoint.site/img/10765.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,24`
  },
  {
    nombre: `BOTELLA TERMICA ROMANIA 660 ML`,
    codigo: `10764`,
    imagen: `https://homepoint.site/img/10764.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,43`
  },
  {
    nombre: `SELLADOR AL VACIO COMIDA`,
    codigo: `10763`,
    imagen: `https://homepoint.site/img/10763.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,73`
  },
  {
    nombre: `LICUADORA JARRA VIDRIO`,
    codigo: `10762`,
    imagen: `https://homepoint.site/img/10762.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,68`
  },
  {
    nombre: `RELOJ SMART 10 MALLAS W10`,
    codigo: `10760`,
    imagen: `https://homepoint.site/img/10760.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,88`
  },
  {
    nombre: `RELOJ SMART WATCH S10`,
    codigo: `10759`,
    imagen: `https://homepoint.site/img/10759.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,41`
  },
  {
    nombre: `CEPILLO DE LIMPIEZA ELECTRICO`,
    codigo: `10758`,
    imagen: `https://homepoint.site/img/10758.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,86`
  },
  {
    nombre: `SET DESTORNILLADORES X 6 PCS`,
    codigo: `10757`,
    imagen: `https://homepoint.site/img/10757.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `CASCO PARA BICICLETA`,
    codigo: `10755`,
    imagen: `https://homepoint.site/img/10755.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,58`
  },
  {
    nombre: `CAFETERA ITALIANA 600 ML`,
    codigo: `10754`,
    imagen: `https://homepoint.site/img/10754.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,58`
  },
  {
    nombre: `POWER BANK HASTA 25000 MAH`,
    codigo: `10753`,
    imagen: `https://homepoint.site/img/10753.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,80`
  },
  {
    nombre: `POWER BANK HASTA 15000 MAH`,
    codigo: `10752`,
    imagen: `https://homepoint.site/img/10752.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,37`
  },
  {
    nombre: `ASPIRADORA INDUSTRIAL 25 L`,
    codigo: `10750`,
    imagen: `https://homepoint.site/img/10750.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$98,34`
  },
  {
    nombre: `ASPIRADORA INDUSTRIAL 15 L`,
    codigo: `10749`,
    imagen: `https://homepoint.site/img/10749.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$95,36`
  },
  {
    nombre: `CAFETERA ITALIANA`,
    codigo: `10747`,
    imagen: `https://homepoint.site/img/10747.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,88`
  },
  {
    nombre: `INFLADOR AUTOMATICO 4 EN 1`,
    codigo: `10746`,
    imagen: `https://homepoint.site/img/10746.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$32,78`
  },
  {
    nombre: `BALANZA COMERCIAL LUO 40KG`,
    codigo: `10742`,
    imagen: `https://homepoint.site/img/10742.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$43,21`
  },
  {
    nombre: `HUMIDIFICADOR XM-006`,
    codigo: `10741`,
    imagen: `https://homepoint.site/img/10741.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,71`
  },
  {
    nombre: `LINTERNA MILITAR TACTICA P50KA`,
    codigo: `10740`,
    imagen: `https://homepoint.site/img/10740.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,66`
  },
  {
    nombre: `CEPILLO SACA PELUSA`,
    codigo: `10739`,
    imagen: `https://homepoint.site/img/10739.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `CAJA DE CUBIERTO X 24 BARICHELLO`,
    codigo: `10738`,
    imagen: `https://homepoint.site/img/10738.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,03`
  },
  {
    nombre: `LINTERNA LED DOBLE CAMPING`,
    codigo: `10737`,
    imagen: `https://homepoint.site/img/10737.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,41`
  },
  {
    nombre: `VELADOR DE ESCRITORIO FLEXIBLE`,
    codigo: `10736`,
    imagen: `https://homepoint.site/img/10736.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,39`
  },
  {
    nombre: `FREIDORA DE AIRE 3.5 L HYTOSHY`,
    codigo: `10735`,
    imagen: `https://homepoint.site/img/10735.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$62,58`
  },
  {
    nombre: `TOSTADORA ACERO`,
    codigo: `10734`,
    imagen: `https://homepoint.site/img/10734.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,03`
  },
  {
    nombre: `CORTAPELO DALING SEMIPROFESIONAL DL-1167`,
    codigo: `10733`,
    imagen: `https://homepoint.site/img/10733.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,71`
  },
  {
    nombre: `HUMIDIFICADOR VOLCAN 1265`,
    codigo: `10732`,
    imagen: `https://homepoint.site/img/10732.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,18`
  },
  {
    nombre: `BALANZA PERSONAL DIGITAL`,
    codigo: `10731`,
    imagen: `https://homepoint.site/img/10731.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,52`
  },
  {
    nombre: `SET CUCHILLOS X 6`,
    codigo: `10730`,
    imagen: `https://homepoint.site/img/10730.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,09`
  },
  {
    nombre: `MASAJEADOR PISTOLA MANO`,
    codigo: `10729`,
    imagen: `https://homepoint.site/img/10729.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `BATERIA COCINA ORYX`,
    codigo: `10728`,
    imagen: `https://homepoint.site/img/10728.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$48,42`
  },
  {
    nombre: `MOTOROLA E14`,
    codigo: `10718`,
    imagen: `https://homepoint.site/img/10718.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$135,59`
  },
  {
    nombre: `AURICULAR AIRPODS PRO 2`,
    codigo: `10716`,
    imagen: `https://homepoint.site/img/10716.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,88`
  },
  {
    nombre: `AURICULAR AIRPOD MAX`,
    codigo: `10715`,
    imagen: `https://homepoint.site/img/10715.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,52`
  },
  {
    nombre: `FOCO DE LUZ CON CONTROL REMOTO`,
    codigo: `10714`,
    imagen: `https://homepoint.site/img/10714.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `BOLSA DE DORMIR`,
    codigo: `10713`,
    imagen: `https://homepoint.site/img/10713.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,85`
  },
  {
    nombre: `AURICULAR M25`,
    codigo: `10711`,
    imagen: `https://homepoint.site/img/10711.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,20`
  },
  {
    nombre: `LUZ PARA BICI DOBLE`,
    codigo: `10710`,
    imagen: `https://homepoint.site/img/10710.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `KIT PINTURA DIAMANTE`,
    codigo: `10709`,
    imagen: `https://homepoint.site/img/10709.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,83`
  },
  {
    nombre: `PATILLERA DRAGON OM T99`,
    codigo: `10708`,
    imagen: `https://homepoint.site/img/10708.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,96`
  },
  {
    nombre: `RELOJ SMART T500`,
    codigo: `10706`,
    imagen: `https://homepoint.site/img/10706.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,73`
  },
  {
    nombre: `RELOJ SMART X10`,
    codigo: `10705`,
    imagen: `https://homepoint.site/img/10705.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,52`
  },
  {
    nombre: `MOPA CON BALDE`,
    codigo: `10704`,
    imagen: `https://homepoint.site/img/10704.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,62`
  },
  {
    nombre: `PARLANTE JBL FLIP 6`,
    codigo: `10703`,
    imagen: `https://homepoint.site/img/10703.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$22,35`
  },
  {
    nombre: `AURICULAR P9`,
    codigo: `10702`,
    imagen: `https://homepoint.site/img/10702.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,43`
  },
  {
    nombre: `BOTELLA DEPORTIVA 350 ML SPORT`,
    codigo: `10700`,
    imagen: `https://homepoint.site/img/10700.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,69`
  },
  {
    nombre: `SET DE PINTURAS PARA CHICOS VALIJA 145 PCS`,
    codigo: `10698`,
    imagen: `https://homepoint.site/img/10698.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$25,03`
  },
  {
    nombre: `SOPORTE TV FIJO 40 A 80`,
    codigo: `10697`,
    imagen: `https://homepoint.site/img/10697.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `LUNCHERA ELECTRICA`,
    codigo: `10696`,
    imagen: `https://homepoint.site/img/10696.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$29,50`
  },
  {
    nombre: `VAPORERA PLANCHA VAPOR`,
    codigo: `10695`,
    imagen: `https://homepoint.site/img/10695.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,12`
  },
  {
    nombre: `PLANCHA PARA PELO HT858`,
    codigo: `10694`,
    imagen: `https://homepoint.site/img/10694.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,62`
  },
  {
    nombre: `ESPEJO MAQUILLADOR LED Y VENTILADOR`,
    codigo: `10693`,
    imagen: `https://homepoint.site/img/10693.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$11,32`
  },
  {
    nombre: `BALANZA COMERCIAL COLORES 40 KG`,
    codigo: `10692`,
    imagen: `https://homepoint.site/img/10692.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,72`
  },
  {
    nombre: `BARRA DE SONIDO`,
    codigo: `10691`,
    imagen: `https://homepoint.site/img/10691.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$50,66`
  },
  {
    nombre: `LAMPARA PORTALAPICERA`,
    codigo: `10690`,
    imagen: `https://homepoint.site/img/10690.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,62`
  },
  {
    nombre: `XIAOMI REDMI 14C 16 GB 256`,
    codigo: `10689`,
    imagen: `https://homepoint.site/img/10689.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$220,52`
  },
  {
    nombre: `XIAOMI REDMI 14C 8 GB 128`,
    codigo: `10688`,
    imagen: `https://homepoint.site/img/10688.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$175,82`
  },
  {
    nombre: `ARO DE LED RGB`,
    codigo: `10687`,
    imagen: `https://homepoint.site/img/10687.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,98`
  },
  {
    nombre: `VELADOR LUNA LUZ LED`,
    codigo: `10686`,
    imagen: `https://homepoint.site/img/10686.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,12`
  },
  {
    nombre: `RELOJ APPLE WATCH`,
    codigo: `10685`,
    imagen: `https://homepoint.site/img/10685.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$37,25`
  },
  {
    nombre: `BATERY PACK IPHONE`,
    codigo: `10684`,
    imagen: `https://homepoint.site/img/10684.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,92`
  },
  {
    nombre: `PARLANTE JBL CILINDRO`,
    codigo: `10683`,
    imagen: `https://homepoint.site/img/10683.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,81`
  },
  {
    nombre: `PARLANTE JBL CLIP`,
    codigo: `10682`,
    imagen: `https://homepoint.site/img/10682.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,26`
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
    precio_ars: `$89,40`
  },
  {
    nombre: `CARGADOR MAGSAFE`,
    codigo: `10678`,
    imagen: `https://homepoint.site/img/10678.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,58`
  },
  {
    nombre: `PARLANTE JBL CUADRADO`,
    codigo: `10676`,
    imagen: `https://homepoint.site/img/10676.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,66`
  },
  {
    nombre: `AUTO ESTEREO DESMONTABLE`,
    codigo: `10675`,
    imagen: `https://homepoint.site/img/10675.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,69`
  },
  {
    nombre: `BALANZA MINI ORO`,
    codigo: `10674`,
    imagen: `https://homepoint.site/img/10674.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,32`
  },
  {
    nombre: `CAMARA DOMO DOBLE V380`,
    codigo: `10670`,
    imagen: `https://homepoint.site/img/10670.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$41,27`
  },
  {
    nombre: `ANAFE VITROCERAMICO`,
    codigo: `10668`,
    imagen: `https://homepoint.site/img/10668.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,40`
  },
  {
    nombre: `LATTAFA YARA CANDY`,
    codigo: `10665`,
    imagen: `https://homepoint.site/img/10665.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,68`
  },
  {
    nombre: `MANTA PLUSH ROMBO CORDERITO TONO`,
    codigo: `10664`,
    imagen: `https://homepoint.site/img/10664.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,39`
  },
  {
    nombre: `LATTAFA QAED AL FURSAN 90 ML`,
    codigo: `10663`,
    imagen: `https://homepoint.site/img/10663.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,74`
  },
  {
    nombre: `LATTAFA YARA PINK 100 ML`,
    codigo: `10662`,
    imagen: `https://homepoint.site/img/10662.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$53,64`
  },
  {
    nombre: `LATTAFA BADEE OUD FOR GLORY`,
    codigo: `10661`,
    imagen: `https://homepoint.site/img/10661.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$41,72`
  },
  {
    nombre: `ARMAF CLUB DE NUIT UNTOLD 105 ML`,
    codigo: `10660`,
    imagen: `https://homepoint.site/img/10660.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$77,48`
  },
  {
    nombre: `AL HAR AMBER OUD GOLD 120 ML`,
    codigo: `10659`,
    imagen: `https://homepoint.site/img/10659.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$95,36`
  },
  {
    nombre: `ARMAF ODYSSEY MANDARIN SKY`,
    codigo: `10658`,
    imagen: `https://homepoint.site/img/10658.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$73,01`
  },
  {
    nombre: `LATTAFA HAYA 100 ML`,
    codigo: `10657`,
    imagen: `https://homepoint.site/img/10657.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$49,17`
  },
  {
    nombre: `LATTAFA PRIDE FAKHAR 100 ML`,
    codigo: `10656`,
    imagen: `https://homepoint.site/img/10656.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$50,66`
  },
  {
    nombre: `ARMAF CLUB DE NUIT INTENSE 105 ML`,
    codigo: `10655`,
    imagen: `https://homepoint.site/img/10655.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$58,11`
  },
  {
    nombre: `LATTAFA ASAD 100 ML`,
    codigo: `10654`,
    imagen: `https://homepoint.site/img/10654.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$47,68`
  },
  {
    nombre: `LATTAFA KHAMRAH QAHWA 100 ML`,
    codigo: `10653`,
    imagen: `https://homepoint.site/img/10653.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$53,64`
  },
  {
    nombre: `BHARARA KING 150 ML`,
    codigo: `10652`,
    imagen: `https://homepoint.site/img/10652.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$93,87`
  },
  {
    nombre: `AFNAN 9 PM 100 ML`,
    codigo: `10651`,
    imagen: `https://homepoint.site/img/10651.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$61,09`
  },
  {
    nombre: `LATTAFA BADEE AL OUD SUBLIME 100 ML`,
    codigo: `10650`,
    imagen: `https://homepoint.site/img/10650.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$52,15`
  },
  {
    nombre: `LATTAFA YARA MOI 100 ML`,
    codigo: `10649`,
    imagen: `https://homepoint.site/img/10649.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$46,19`
  },
  {
    nombre: `PLANCHA DE PELO ONDAS VT-8010`,
    codigo: `10644`,
    imagen: `https://homepoint.site/img/10644.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,65`
  },
  {
    nombre: `AURICULAR M90`,
    codigo: `10639`,
    imagen: `https://homepoint.site/img/10639.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,15`
  },
  {
    nombre: `PARLANTE RUEDA TOKIO X-507`,
    codigo: `10635`,
    imagen: `https://homepoint.site/img/10635.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,69`
  },
  {
    nombre: `AMOLADORA INALAMBRICA PORTATIL STARDOM`,
    codigo: `10629`,
    imagen: `https://homepoint.site/img/10629.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$39,78`
  },
  {
    nombre: `RELOJ TK500`,
    codigo: `10628`,
    imagen: `https://homepoint.site/img/10628.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$27,45`
  },
  {
    nombre: `RELOJ SMART ULTRA 2 7 EN 1`,
    codigo: `10626`,
    imagen: `https://homepoint.site/img/10626.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,39`
  },
  {
    nombre: `ESPEJO GRANDE MAQUILLADOR CON LUZ`,
    codigo: `10624`,
    imagen: `https://homepoint.site/img/10624.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,37`
  },
  {
    nombre: `SANDWICHERA 3 EN 1 HITOSHY`,
    codigo: `10622`,
    imagen: `https://homepoint.site/img/10622.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$42,47`
  },
  {
    nombre: `VELADOR CAPIBARA COD368`,
    codigo: `10621`,
    imagen: `https://homepoint.site/img/10621.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,20`
  },
  {
    nombre: `BATIDOR CAFE A PILA`,
    codigo: `10620`,
    imagen: `https://homepoint.site/img/10620.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,01`
  },
  {
    nombre: `CORTAPELO 2 EN 1 NARIZ DALING`,
    codigo: `10619`,
    imagen: `https://homepoint.site/img/10619.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,30`
  },
  {
    nombre: `RASURADORA PELO 3 EN 1 DALING`,
    codigo: `10618`,
    imagen: `https://homepoint.site/img/10618.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,11`
  },
  {
    nombre: `SOPORTE MOVIL OM 32-60`,
    codigo: `10617`,
    imagen: `https://homepoint.site/img/10617.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$23,24`
  },
  {
    nombre: `CUBIERTOS PLASTICO X 25 PCS`,
    codigo: `10616`,
    imagen: `https://homepoint.site/img/10616.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,90`
  },
  {
    nombre: `LAMPARA VELADOR TOUCH`,
    codigo: `10615`,
    imagen: `https://homepoint.site/img/10615.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,54`
  },
  {
    nombre: `SOPORTE CELULAR MAGNETICO AUTO`,
    codigo: `10614`,
    imagen: `https://homepoint.site/img/10614.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,77`
  },
  {
    nombre: `TECLADO CON MOUSE INALAMBRICO AN030`,
    codigo: `10613`,
    imagen: `https://homepoint.site/img/10613.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,03`
  },
  {
    nombre: `ADAPTADOR UNIVERSAL LWJ`,
    codigo: `10612`,
    imagen: `https://homepoint.site/img/10612.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,84`
  },
  {
    nombre: `INFLADOR MULTIUSO COLORES`,
    codigo: `10611`,
    imagen: `https://homepoint.site/img/10611.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,73`
  },
  {
    nombre: `AURICULARES M19`,
    codigo: `10610`,
    imagen: `https://homepoint.site/img/10610.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,75`
  },
  {
    nombre: `ESTUFA VELA CUARZO VERTICAL`,
    codigo: `10606`,
    imagen: `https://homepoint.site/img/10606.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$15,35`
  },
  {
    nombre: `HUMIDIFICADOR JSQ07`,
    codigo: `10605`,
    imagen: `https://homepoint.site/img/10605.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `ESPUMADOR CAFE`,
    codigo: `10603`,
    imagen: `https://homepoint.site/img/10603.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,67`
  },
  {
    nombre: `TESTER DIGITAL MULTIMETRO`,
    codigo: `10599`,
    imagen: `https://homepoint.site/img/10599.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,13`
  },
  {
    nombre: `PAVA ELECTRICA DE COLORES`,
    codigo: `10598`,
    imagen: `https://homepoint.site/img/10598.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,14`
  },
  {
    nombre: `PAVA ELETRICA DE VIDRIO CON LUZ`,
    codigo: `10597`,
    imagen: `https://homepoint.site/img/10597.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,22`
  },
  {
    nombre: `POWER BANK CHICO`,
    codigo: `10596`,
    imagen: `https://homepoint.site/img/10596.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,15`
  },
  {
    nombre: `PISTOLA DE HIDROGEL`,
    codigo: `10594`,
    imagen: `https://homepoint.site/img/10594.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$18,92`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 12u.`,
    codigo: `10593`,
    imagen: `https://homepoint.site/img/10593.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,77`
  },
  {
    nombre: `SET DESTORNILLADOR CON CUTTER`,
    codigo: `10591`,
    imagen: `https://homepoint.site/img/10591.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,86`
  },
  {
    nombre: `CUTER GRANDE`,
    codigo: `10590`,
    imagen: `https://homepoint.site/img/10590.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,76`
  },
  {
    nombre: `MAQUINA ALGODON DE AZUCAR`,
    codigo: `10588`,
    imagen: `https://homepoint.site/img/10588.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$32,18`
  },
  {
    nombre: `MAQUINA PASTAS PORTATIL`,
    codigo: `10587`,
    imagen: `https://homepoint.site/img/10587.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$27,10`
  },
  {
    nombre: `PARLANTE KARAOKE K12`,
    codigo: `10585`,
    imagen: `https://homepoint.site/img/10585.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,41`
  },
  {
    nombre: `TAPON TERMO SISTEM`,
    codigo: `10582`,
    imagen: `https://homepoint.site/img/10582.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,98`
  },
  {
    nombre: `MOCHILA INFANTIL XXL TRIPLE CIERRE`,
    codigo: `10579`,
    imagen: `https://homepoint.site/img/10579.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,58`
  },
  {
    nombre: `AURICULAR M 20`,
    codigo: `10577`,
    imagen: `https://homepoint.site/img/10577.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,74`
  },
  {
    nombre: `AUTO ESTEREO FIJO`,
    codigo: `10576`,
    imagen: `https://homepoint.site/img/10576.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,14`
  },
  {
    nombre: `SALERO PIMENTERO VIDRIO Y ACERO`,
    codigo: `10558`,
    imagen: `https://homepoint.site/img/10558.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$1,95`
  },
  {
    nombre: `AURICULAR ULTRAPODS`,
    codigo: `10556`,
    imagen: `https://homepoint.site/img/10556.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `CARGADOR CELULAR 3.1 TIPO C`,
    codigo: `10555`,
    imagen: `https://homepoint.site/img/10555.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$2,46`
  },
  {
    nombre: `PILA AA`,
    codigo: `10554`,
    imagen: `https://homepoint.site/img/10554.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$268,00`
  },
  {
    nombre: `PLANCHA DE PELO GW7029`,
    codigo: `10551`,
    imagen: `https://homepoint.site/img/10551.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,03`
  },
  {
    nombre: `PROYECTOR REDONDO ESTRELLAS`,
    codigo: `10547`,
    imagen: `https://homepoint.site/img/10547.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,85`
  },
  {
    nombre: `BATERIA LITIO`,
    codigo: `10546`,
    imagen: `https://homepoint.site/img/10546.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,14`
  },
  {
    nombre: `RALLADOR MANUAL CON ACCESORIOS`,
    codigo: `10545`,
    imagen: `https://homepoint.site/img/10545.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,18`
  },
  {
    nombre: `TRABA DISCO CON ALARMA`,
    codigo: `10544`,
    imagen: `https://homepoint.site/img/10544.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,26`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO CITRUS JUICER`,
    codigo: `10543`,
    imagen: `https://homepoint.site/img/10543.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,26`
  },
  {
    nombre: `CINTA METRICA 10m`,
    codigo: `10542`,
    imagen: `https://homepoint.site/img/10542.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `CINTA METRICA 7,5m`,
    codigo: `10541`,
    imagen: `https://homepoint.site/img/10541.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$3,43`
  },
  {
    nombre: `CINTA METRICA 5m`,
    codigo: `10540`,
    imagen: `https://homepoint.site/img/10540.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,09`
  },
  {
    nombre: `CINTA METRICA 3m`,
    codigo: `10539`,
    imagen: `https://homepoint.site/img/10539.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$1,79`
  },
  {
    nombre: `CONTADORA DE BILLETES`,
    codigo: `10538`,
    imagen: `https://homepoint.site/img/10538.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$73,01`
  },
  {
    nombre: `ARMADOR DE EMPANADAS`,
    codigo: `10537`,
    imagen: `https://homepoint.site/img/10537.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$4,47`
  },
  {
    nombre: `PECHERA ANTIROBO`,
    codigo: `10536`,
    imagen: `https://homepoint.site/img/10536.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,66`
  },
  {
    nombre: `TAZA AUTOMEZCLADORA`,
    codigo: `10534`,
    imagen: `https://homepoint.site/img/10534.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,07`
  },
  {
    nombre: `BOLSO MATELASE MARWAL MATERA`,
    codigo: `10533`,
    imagen: `https://homepoint.site/img/10533.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$12,96`
  },
  {
    nombre: `ASTRONAUTA CHICO SIN PARLANTE`,
    codigo: `10532`,
    imagen: `https://homepoint.site/img/10532.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,22`
  },
  {
    nombre: `SET CONDIMENTERO`,
    codigo: `10523`,
    imagen: `https://homepoint.site/img/10523.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,62`
  },
  {
    nombre: `CAFETERA ELECTRICA JARRA`,
    codigo: `10520`,
    imagen: `https://homepoint.site/img/10520.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$25,33`
  },
  {
    nombre: `TV BOX`,
    codigo: `10519`,
    imagen: `https://homepoint.site/img/10519.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$34,27`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 60u.`,
    codigo: `10518`,
    imagen: `https://homepoint.site/img/10518.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,11`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 48u.`,
    codigo: `10517`,
    imagen: `https://homepoint.site/img/10517.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `LAMPARA SOLAR 2 LED`,
    codigo: `10516`,
    imagen: `https://homepoint.site/img/10516.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,07`
  },
  {
    nombre: `LAMPARA SOLAR 3 LEDS`,
    codigo: `10515`,
    imagen: `https://homepoint.site/img/10515.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,69`
  },
  {
    nombre: `CAMARA 4K SPORTS`,
    codigo: `10511`,
    imagen: `https://homepoint.site/img/10511.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$30,25`
  },
  {
    nombre: `SET ASADOR ACERO Y MADERA 3 PCS ESTUCHE NEGRO`,
    codigo: `10509`,
    imagen: `https://homepoint.site/img/10509.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$13,11`
  },
  {
    nombre: `LUZ RGB LUO CON CONTROL`,
    codigo: `10502`,
    imagen: `https://homepoint.site/img/10502.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,75`
  },
  {
    nombre: `PICADORA ELECTRICA ORYX`,
    codigo: `10500`,
    imagen: `https://homepoint.site/img/10500.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$28,31`
  },
  {
    nombre: `ESCURRIDOR PLEGABLE`,
    codigo: `10498`,
    imagen: `https://homepoint.site/img/10498.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,02`
  },
  {
    nombre: `AURICULAR RGB VINCHA`,
    codigo: `10496`,
    imagen: `https://homepoint.site/img/10496.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,07`
  },
  {
    nombre: `RELOJ SMART 8 MALLAS`,
    codigo: `10492`,
    imagen: `https://homepoint.site/img/10492.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$17,43`
  },
  {
    nombre: `TV STICK GAME RETRO`,
    codigo: `10491`,
    imagen: `https://homepoint.site/img/10491.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$48,42`
  },
  {
    nombre: `LUCES 3 SPOT CON CONTROL REMOTO`,
    codigo: `10490`,
    imagen: `https://homepoint.site/img/10490.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,41`
  },
  {
    nombre: `AUTO PARLANTE`,
    codigo: `10489`,
    imagen: `https://homepoint.site/img/10489.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,16`
  },
  {
    nombre: `SECADOR Y PLANCHA DE PELO COMBO`,
    codigo: `10488`,
    imagen: `https://homepoint.site/img/10488.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$27,42`
  },
  {
    nombre: `PLANCHA DE PELO Y CEPILLO SECADOR COMBO`,
    codigo: `10487`,
    imagen: `https://homepoint.site/img/10487.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$35,61`
  },
  {
    nombre: `VENTILADOR METALICO 18 3 EN 1`,
    codigo: `10486`,
    imagen: `https://homepoint.site/img/10486.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$41,72`
  },
  {
    nombre: `PIZARRA MAGICA PERSONAJES GRANDE`,
    codigo: `10484`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,09`
  },
  {
    nombre: `PIZARRA MAGICA PERSONAJES CHICA`,
    codigo: `10483`,
    imagen: `https://homepoint.site/img/10483.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,36`
  },
  {
    nombre: `SET HERRAMIENTAS 129 PCS FR2262`,
    codigo: `10482`,
    imagen: `https://homepoint.site/img/10482.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,95`
  },
  {
    nombre: `PANEL MATA MOSQUITO OM 757`,
    codigo: `10481`,
    imagen: `https://homepoint.site/img/10481.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,22`
  },
  {
    nombre: `CARGADOR NOTEBOOK UNIVERSAL`,
    codigo: `10480`,
    imagen: `https://homepoint.site/img/10480.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,39`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 80u.`,
    codigo: `10478`,
    imagen: `https://homepoint.site/img/10478.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,35`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 40u.`,
    codigo: `10415`,
    imagen: `https://homepoint.site/img/10415.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,69`
  },
  {
    nombre: `PURIFICADOR DE AGUA`,
    codigo: `10412`,
    imagen: `https://homepoint.site/img/10412.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,48`
  },
  {
    nombre: `PLANCHA PELO CON BUCLERA`,
    codigo: `10407`,
    imagen: `https://homepoint.site/img/10407.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,26`
  },
  {
    nombre: `MOCHILA INFANTIL`,
    codigo: `10406`,
    imagen: `https://homepoint.site/img/10406.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$14,60`
  },
  {
    nombre: `PROYECTOR ANDROID 4K`,
    codigo: `10405`,
    imagen: `https://homepoint.site/img/10405.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$68,54`
  },
  {
    nombre: `LICUADORA DEPORTIVA 600 ML ORYX`,
    codigo: `10404`,
    imagen: `https://homepoint.site/img/10404.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$41,72`
  },
  {
    nombre: `CORTA PELO 2 PCS OM KM1948`,
    codigo: `10403`,
    imagen: `https://homepoint.site/img/10403.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,43`
  },
  {
    nombre: `DESTORNILLADOR SET 41 PCS`,
    codigo: `10400`,
    imagen: `https://homepoint.site/img/10400.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$5,17`
  },
  {
    nombre: `LUNCHERA TERMICA`,
    codigo: `10399`,
    imagen: `https://homepoint.site/img/10399.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$12,66`
  },
  {
    nombre: `VENTILADOR PORTATIL DE MESA`,
    codigo: `10398`,
    imagen: `https://homepoint.site/img/10398.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,61`
  },
  {
    nombre: `SOPORTE COLGANTE CELULAR`,
    codigo: `10397`,
    imagen: `https://homepoint.site/img/10397.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$1,04`
  },
  {
    nombre: `LUZ ESTRELLAS CON PARLANTE`,
    codigo: `10395`,
    imagen: `https://homepoint.site/img/10395.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,09`
  },
  {
    nombre: `ATORNILLADOR INALAMBRICO KIT`,
    codigo: `10394`,
    imagen: `https://homepoint.site/img/10394.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,09`
  },
  {
    nombre: `KIT HERRAMIENTAS LLAVES COMBINADAS`,
    codigo: `10390`,
    imagen: `https://homepoint.site/img/10390.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$14,01`
  },
  {
    nombre: `PLANCHA ELECTRICA CON GRILL PA2208`,
    codigo: `10389`,
    imagen: `https://homepoint.site/img/10389.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$44,70`
  },
  {
    nombre: `LAMPARA GIRATORIA LUZ CALIDAD Y COLORES HW978`,
    codigo: `10388`,
    imagen: `https://homepoint.site/img/10388.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,98`
  },
  {
    nombre: `SPINNER CON LUCES PELOTA O DISCO`,
    codigo: `10387`,
    imagen: `https://homepoint.site/img/10387.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,26`
  },
  {
    nombre: `PARLANTE STEPHY YS110`,
    codigo: `10386`,
    imagen: `https://homepoint.site/img/10386.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$20,11`
  },
  {
    nombre: `GAME BOX X7M PANTALLA Y JOYSTICK`,
    codigo: `10385`,
    imagen: `https://homepoint.site/img/10385.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,28`
  },
  {
    nombre: `ARRANCADOR DE AUTO`,
    codigo: `10375`,
    imagen: `https://homepoint.site/img/10375.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$52,45`
  },
  {
    nombre: `TV STICK`,
    codigo: `10373`,
    imagen: `https://homepoint.site/img/10373.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$35,76`
  },
  {
    nombre: `KIT UTENSILLOS COCINA`,
    codigo: `10372`,
    imagen: `https://homepoint.site/img/10372.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,60`
  },
  {
    nombre: `AURICULAR DEPORTIVO MANOS LIBRES`,
    codigo: `10367`,
    imagen: `https://homepoint.site/img/10367.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$7,45`
  },
  {
    nombre: `AURICULAR CON PANTALLA BLANCO`,
    codigo: `10366`,
    imagen: `https://homepoint.site/img/10366.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,39`
  },
  {
    nombre: `CORTADORA DE PAPAS FRITAS`,
    codigo: `10365`,
    imagen: `https://home-point.com.ar/no-disponible.png`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$3,28`
  },
  {
    nombre: `CORTADORA MANDOLINA GRANDE`,
    codigo: `10364`,
    imagen: `https://homepoint.site/img/10364.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$13,41`
  },
  {
    nombre: `SET DE SARTENES 3 PCS ORIX`,
    codigo: `10363`,
    imagen: `https://homepoint.site/img/10363.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$27,42`
  },
  {
    nombre: `RAQUETA MATA MOSQUITOS CON BASE`,
    codigo: `10361`,
    imagen: `https://homepoint.site/img/10361.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,98`
  },
  {
    nombre: `SARTEN MULTIFUNCION 3 EN 1`,
    codigo: `10360`,
    imagen: `https://homepoint.site/img/10360.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,26`
  },
  {
    nombre: `PICADORA MINI USB`,
    codigo: `10359`,
    imagen: `https://homepoint.site/img/10359.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,66`
  },
  {
    nombre: `CUBIERTERO DE COCINA BY-889`,
    codigo: `10356`,
    imagen: `https://homepoint.site/img/10356.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,75`
  },
  {
    nombre: `HUMIDIFICADOR FOGATA`,
    codigo: `10352`,
    imagen: `https://homepoint.site/img/10352.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$10,13`
  },
  {
    nombre: `DESTORNILLADOR 115 EN 1`,
    codigo: `10351`,
    imagen: `https://homepoint.site/img/10351.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$10,28`
  },
  {
    nombre: `AURICULAR INALAMBRICO A6S/E6S`,
    codigo: `10350`,
    imagen: `https://homepoint.site/img/10350.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$5,66`
  },
  {
    nombre: `INFLADOR INALAMBRICO 3 EN 1`,
    codigo: `10349`,
    imagen: `https://homepoint.site/img/10349.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$28,31`
  },
  {
    nombre: `TIMBRE INALAMBRICO`,
    codigo: `10342`,
    imagen: `https://homepoint.site/img/10342.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,21`
  },
  {
    nombre: `PATILLERA RETRO OM`,
    codigo: `10341`,
    imagen: `https://homepoint.site/img/10341.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,64`
  },
  {
    nombre: `SOPLADORA CON 2 BATERIAS`,
    codigo: `10340`,
    imagen: `https://homepoint.site/img/10340.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$56,62`
  },
  {
    nombre: `VENTILADOR DE TECHO RETRACTIL`,
    codigo: `10339`,
    imagen: `https://homepoint.site/img/10339.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$96,85`
  },
  {
    nombre: `BORDEADORA DESMALEZADORA`,
    codigo: `10335`,
    imagen: `https://homepoint.site/img/10335.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$116,22`
  },
  {
    nombre: `MINI IMPRESORA`,
    codigo: `10334`,
    imagen: `https://homepoint.site/img/10334.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$17,58`
  },
  {
    nombre: `TENDER ROPA`,
    codigo: `10333`,
    imagen: `https://homepoint.site/img/10333.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$24,73`
  },
  {
    nombre: `PICADORA MANUAL PARA VERDURAS`,
    codigo: `10328`,
    imagen: `https://homepoint.site/img/10328.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,81`
  },
  {
    nombre: `PANQUEQUERA ELECTRICA`,
    codigo: `10326`,
    imagen: `https://homepoint.site/img/10326.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$22,05`
  },
  {
    nombre: `EXPRIMIDOR ELECTRICO`,
    codigo: `10324`,
    imagen: `https://homepoint.site/img/10324.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$16,69`
  },
  {
    nombre: `OLLA ELECTRICA`,
    codigo: `10322`,
    imagen: `https://homepoint.site/img/10322.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$34,12`
  },
  {
    nombre: `ESCURRIDOR ADAPTABLE PVC`,
    codigo: `10321`,
    imagen: `https://homepoint.site/img/10321.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,00`
  },
  {
    nombre: `SACACORCHO PARA VINO USB`,
    codigo: `10320`,
    imagen: `https://homepoint.site/img/10320.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,94`
  },
  {
    nombre: `AURICULAR M10`,
    codigo: `10319`,
    imagen: `https://homepoint.site/img/10319.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,81`
  },
  {
    nombre: `BOTELLA INFANTIL 500 ML YQ`,
    codigo: `10303`,
    imagen: `https://homepoint.site/img/10303.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,01`
  },
  {
    nombre: `MASAJEADOR CERVICAL`,
    codigo: `10296`,
    imagen: `https://homepoint.site/img/10296.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$26,37`
  },
  {
    nombre: `LAMPARA LED SOLAR BK-100`,
    codigo: `10292`,
    imagen: `https://homepoint.site/img/10292.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,47`
  },
  {
    nombre: `SANDWICHERA PANINI ORYX OR-1700`,
    codigo: `10290`,
    imagen: `https://homepoint.site/img/10290.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$28,16`
  },
  {
    nombre: `LAMPARA MATA MOSQUITOS`,
    codigo: `10289`,
    imagen: `https://homepoint.site/img/10289.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,15`
  },
  {
    nombre: `VENTILADOR DE PIE`,
    codigo: `10288`,
    imagen: `https://homepoint.site/img/10288.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$37,25`
  },
  {
    nombre: `LICUADORA PORTATIL`,
    codigo: `10287`,
    imagen: `https://homepoint.site/img/10287.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,05`
  },
  {
    nombre: `MOCHILA ANTI-ROBO`,
    codigo: `10286`,
    imagen: `https://homepoint.site/img/10286.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$15,05`
  },
  {
    nombre: `MARCADORES DOBLE PUNTA x 30u.`,
    codigo: `10280`,
    imagen: `https://homepoint.site/img/10280.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,94`
  },
  {
    nombre: `RAQUETA MATA MOSQUITOS`,
    codigo: `10278`,
    imagen: `https://homepoint.site/img/10278.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,71`
  },
  {
    nombre: `MAQUINA POCHOCLERA`,
    codigo: `10276`,
    imagen: `https://homepoint.site/img/10276.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$39,63`
  },
  {
    nombre: `ASPIRADORA DE MANO CHICA`,
    codigo: `10275`,
    imagen: `https://homepoint.site/img/10275.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,66`
  },
  {
    nombre: `BATIDORA MANUAL`,
    codigo: `10274`,
    imagen: `https://homepoint.site/img/10274.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$13,38`
  },
  {
    nombre: `SECAPLATO ESCURRIDOR`,
    codigo: `10266`,
    imagen: `https://homepoint.site/img/10266.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$21,61`
  },
  {
    nombre: `BRAZO DUCHA`,
    codigo: `10265`,
    imagen: `https://homepoint.site/img/10265.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,98`
  },
  {
    nombre: `PELOTA FUTBOL`,
    codigo: `10263`,
    imagen: `https://homepoint.site/img/10263.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,56`
  },
  {
    nombre: `CONSOLA PORTATIL GAME BOX`,
    codigo: `10245`,
    imagen: `https://homepoint.site/img/10245.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,73`
  },
  {
    nombre: `MAQUINA BOXEO`,
    codigo: `10242`,
    imagen: `https://homepoint.site/img/10242.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$42,17`
  },
  {
    nombre: `CORTINA BLACK OUT TEXTIL LINO`,
    codigo: `10241`,
    imagen: `https://homepoint.site/img/10241.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$32,03`
  },
  {
    nombre: `PIZARRA MAGICA 12`,
    codigo: `10235`,
    imagen: `https://homepoint.site/img/10235.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,98`
  },
  {
    nombre: `VASO CAFETERO PUSH`,
    codigo: `10226`,
    imagen: `https://homepoint.site/img/10226.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,83`
  },
  {
    nombre: `CONTROL REMOTO UNIVERSAL`,
    codigo: `10223`,
    imagen: `https://homepoint.site/img/10223.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$3,73`
  },
  {
    nombre: `LUZ NEON`,
    codigo: `10217`,
    imagen: `https://homepoint.site/img/10217.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$9,54`
  },
  {
    nombre: `CACTUS BAILARIN SIN ROPA`,
    codigo: `10215`,
    imagen: `https://homepoint.site/img/10215.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,20`
  },
  {
    nombre: `FOCO PARLANTE`,
    codigo: `10214`,
    imagen: `https://homepoint.site/img/10214.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,56`
  },
  {
    nombre: `FOCO GIRATORIO CON ESTRELLAS`,
    codigo: `10213`,
    imagen: `https://homepoint.site/img/10213.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,53`
  },
  {
    nombre: `BALANZA PERSONAL 180 KG`,
    codigo: `10206`,
    imagen: `https://homepoint.site/img/10206.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,69`
  },
  {
    nombre: `PITON MOTO`,
    codigo: `10203`,
    imagen: `https://homepoint.site/img/10203.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$6,85`
  },
  {
    nombre: `HIDROLAVADORA PORTATIL`,
    codigo: `10202`,
    imagen: `https://homepoint.site/img/10202.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$47,38`
  },
  {
    nombre: `TALADRO INALAMBRICO KIT 24 PCS`,
    codigo: `10201`,
    imagen: `https://homepoint.site/img/10201.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$47,68`
  },
  {
    nombre: `CORTADORA PELO TRANSPARENTE`,
    codigo: `10199`,
    imagen: `https://homepoint.site/img/10199.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,71`
  },
  {
    nombre: `PROYECTOR ASTRONAUTA CON PARLANTE`,
    codigo: `10197`,
    imagen: `https://homepoint.site/img/10197.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,31`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 53 PCS`,
    codigo: `10195`,
    imagen: `https://homepoint.site/img/10195.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,39`
  },
  {
    nombre: `VASO CAFETERO`,
    codigo: `10192`,
    imagen: `https://homepoint.site/img/10192.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `ESTUFA DOS VELAS HORIZONTAL CUARZO`,
    codigo: `10188`,
    imagen: `https://homepoint.site/img/10188.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$21,90`
  },
  {
    nombre: `ESPEJO LED`,
    codigo: `10187`,
    imagen: `https://homepoint.site/img/10187.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,64`
  },
  {
    nombre: `SECADOR PELO PRO GM101`,
    codigo: `10186`,
    imagen: `https://homepoint.site/img/10186.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,66`
  },
  {
    nombre: `CONSOLA RETRO STICK M15`,
    codigo: `10184`,
    imagen: `https://homepoint.site/img/10184.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,74`
  },
  {
    nombre: `CEPILLO ALISADOR`,
    codigo: `10182`,
    imagen: `https://homepoint.site/img/10182.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,60`
  },
  {
    nombre: `CALOVENTOR / CONVECTOR`,
    codigo: `10175`,
    imagen: `https://homepoint.site/img/10175.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,52`
  },
  {
    nombre: `MONOCOMANDO GRIFERIA BANO CORTA RORY`,
    codigo: `10174`,
    imagen: `https://homepoint.site/img/10174.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,15`
  },
  {
    nombre: `PATILLERA RETRO`,
    codigo: `10170`,
    imagen: `https://homepoint.site/img/10170.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,17`
  },
  {
    nombre: `PAVA ELECTRICA CON CORTE`,
    codigo: `10152`,
    imagen: `https://homepoint.site/img/10152.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$17,58`
  },
  {
    nombre: `MAQUINA CUPKES`,
    codigo: `10151`,
    imagen: `https://homepoint.site/img/10151.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$38,74`
  },
  {
    nombre: `CACTUS BAILARIN CON ROPA`,
    codigo: `10149`,
    imagen: `https://homepoint.site/img/10149.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$8,94`
  },
  {
    nombre: `PLANCHA PELO SZPL047`,
    codigo: `10147`,
    imagen: `https://homepoint.site/img/10147.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,85`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 108 PCS`,
    codigo: `10143`,
    imagen: `https://homepoint.site/img/10143.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$63,33`
  },
  {
    nombre: `MAQUINA DONAS`,
    codigo: `10140`,
    imagen: `https://homepoint.site/img/10140.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$36,88`
  },
  {
    nombre: `AURICULAR GAMER`,
    codigo: `10139`,
    imagen: `https://homepoint.site/img/10139.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$7,30`
  },
  {
    nombre: `MATE LISTO 750 ML`,
    codigo: `10124`,
    imagen: `https://homepoint.site/img/10124.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,30`
  },
  {
    nombre: `MOTOSIERRA CHICA`,
    codigo: `10123`,
    imagen: `https://homepoint.site/img/10123.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$43,21`
  },
  {
    nombre: `LINGA MOTO 22mm`,
    codigo: `10119`,
    imagen: `https://homepoint.site/img/10119.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$9,69`
  },
  {
    nombre: `PIZARRA DIBUJO 8,5`,
    codigo: `10118`,
    imagen: `https://homepoint.site/img/10118.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,83`
  },
  {
    nombre: `ANAFE ELECTRICO 2 ORNALLAS 2000w`,
    codigo: `10115`,
    imagen: `https://homepoint.site/img/10115.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$26,07`
  },
  {
    nombre: `CAMARA WI-FI 360 SMART IP66`,
    codigo: `10114`,
    imagen: `https://homepoint.site/img/10114.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$25,33`
  },
  {
    nombre: `CARGADOR-PARLANTE 3-1 G`,
    codigo: `10113`,
    imagen: `https://homepoint.site/img/10113.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,69`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 46 PCS`,
    codigo: `10112`,
    imagen: `https://homepoint.site/img/10112.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$11,62`
  },
  {
    nombre: `ALFORJA BICI B-SOUL`,
    codigo: `10104`,
    imagen: `https://homepoint.site/img/10104.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$2,19`
  },
  {
    nombre: `LINGA BICICLETA`,
    codigo: `10103`,
    imagen: `https://homepoint.site/img/10103.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,23`
  },
  {
    nombre: `ROLLO LED RGB 5M`,
    codigo: `10085`,
    imagen: `https://homepoint.site/img/10085.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,11`
  },
  {
    nombre: `AURICULAR P47`,
    codigo: `10081`,
    imagen: `https://homepoint.site/img/10081.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,14`
  },
  {
    nombre: `MANTA ACANALADA CORDERITO 2 PLAZAS Y MEDIA`,
    codigo: `10076`,
    imagen: `https://homepoint.site/img/10076.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$19,37`
  },
  {
    nombre: `PARLANTE ORYX CANCUN 8 SP1949-2`,
    codigo: `10067`,
    imagen: `https://homepoint.site/img/10067.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$37,70`
  },
  {
    nombre: `CADENA MOTO ANCHI`,
    codigo: `10066`,
    imagen: `https://homepoint.site/img/10066.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$9,09`
  },
  {
    nombre: `BALANZA COMERCIAL 40 KG`,
    codigo: `10058`,
    imagen: `https://homepoint.site/img/10058.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$37,25`
  },
  {
    nombre: `LUZ LED EMERGENCIA`,
    codigo: `10057`,
    imagen: `https://homepoint.site/img/10057.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,28`
  },
  {
    nombre: `BALANZA COCINA 10 KG`,
    codigo: `10055`,
    imagen: `https://homepoint.site/img/10055.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,77`
  },
  {
    nombre: `GRIFERIA RORY COCINA LARGA`,
    codigo: `10051`,
    imagen: `https://homepoint.site/img/10051.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,45`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 10 PCS`,
    codigo: `10050`,
    imagen: `https://homepoint.site/img/10050.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,56`
  },
  {
    nombre: `KIT HERRAMIENTAS TUBO 40 PCS`,
    codigo: `10048`,
    imagen: `https://homepoint.site/img/10048.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$6,26`
  },
  {
    nombre: `JOYSTICK PS3`,
    codigo: `10047`,
    imagen: `https://homepoint.site/img/10047.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,62`
  },
  {
    nombre: `SOPORTE MOVIL TV-117-2`,
    codigo: `10045`,
    imagen: `https://homepoint.site/img/10045.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$8,64`
  },
  {
    nombre: `SOPORTE FIJO TV-50 26/63`,
    codigo: `10044`,
    imagen: `https://homepoint.site/img/10044.jpg`,
    estado: `Sin Stock`,
    color: `#f44336`,
    etiqueta: `❌ Sin stock`,
    precio_ars: `$4,47`
  },
  {
    nombre: `SOPORTE FIJO TV-14-42`,
    codigo: `10043`,
    imagen: `https://homepoint.site/img/10043.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$2,98`
  },
  {
    nombre: `PILA AAA`,
    codigo: `10042`,
    imagen: `https://homepoint.site/img/10042.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$253,00`
  },
  {
    nombre: `PARLANTE 3 Pulgadas`,
    codigo: `10040`,
    imagen: `https://homepoint.site/img/10040.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,96`
  },
  {
    nombre: `JOYSTICK PS4`,
    codigo: `10038`,
    imagen: `https://homepoint.site/img/10038.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$19,67`
  },
  {
    nombre: `FOCO CAMARA`,
    codigo: `10033`,
    imagen: `https://homepoint.site/img/10033.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$16,24`
  },
  {
    nombre: `POPIT ELECTRONICO`,
    codigo: `10032`,
    imagen: `https://homepoint.site/img/10032.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$4,62`
  },
  {
    nombre: `PAVA ELECTRICA`,
    codigo: `10028`,
    imagen: `https://homepoint.site/img/10028.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$12,22`
  },
  {
    nombre: `BOTELLA DEPORTIVA 750 ML`,
    codigo: `10024`,
    imagen: `https://homepoint.site/img/10024.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$10,13`
  },
  {
    nombre: `DISPENSER AUTOMATICO`,
    codigo: `10020`,
    imagen: `https://homepoint.site/img/10020.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$5,96`
  },
  {
    nombre: `ANAFE ELECTRICO 1 ORNALLA 1000w`,
    codigo: `10010`,
    imagen: `https://homepoint.site/img/10010.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$14,15`
  },
  {
    nombre: `REFLECTOR LED 150W`,
    codigo: `10009`,
    imagen: `https://homepoint.site/img/10009.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$11,92`
  },
  {
    nombre: `REFLECTOR LED 100W`,
    codigo: `10008`,
    imagen: `https://homepoint.site/img/10008.jpg`,
    estado: `Disponible`,
    color: `#4caf50`,
    etiqueta: `✔ Disponible`,
    precio_ars: `$8,20`
  },
  {
    nombre: `ORYX SANDWICHERA OR-1800`,
    codigo: `10005`,
    imagen: `https://homepoint.site/img/10005.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$19,37`
  },
  {
    nombre: `WAFLERA SK -114`,
    codigo: `10004`,
    imagen: `https://homepoint.site/img/10004.jpg`,
    estado: `Pocas Unidades`,
    color: `#ffeb3b`,
    etiqueta: `⚠ Pocas unidades`,
    precio_ars: `$20,11`
  },
];
