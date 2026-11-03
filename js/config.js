/* ==========================================================
   CONFIGURACIÓN DE LA INVITACIÓN
   Edita estos datos y la invitación se actualiza sola.
   ========================================================== */
window.INVITACION = {
  novio: "Diego",
  novia: "Mariela",

  // Fecha y hora de la boda (formato ISO con zona horaria de Paraguay, UTC-3)
  fecha: "2026-12-19T17:00:00-03:00",
  duracionHoras: 7, // duración del evento en el calendario

  frase: "Hay encuentros que cambian una vida entera. El nuestro llegó sin aviso, y hoy queremos celebrarlo contigo.",

  lugar: {
    nombre: "Estancia Los Olivos",
    direccion: "Ruta PY02, km 28, Capiatí, Paraguay",
    mapa: "https://maps.app.goo.gl/gHazhNH39Sq2r6Si6?g_st=aw"
  },

  // Fotos de la portada a pantalla completa
  portada: {
    movil: "assets/portada-bn.jpg",              // vertical, para celular
    escritorio: "assets/portada-bn.jpg"         // en computadora se muestra al costado del texto
  },

  // Ceremonia y recepción (tarjetas con ícono)
  eventos: [
    { icono: "iglesia", titulo: "Ceremonia", lugar: "Estancia Los Olivos", hora: "17:00", mapa: "https://maps.app.goo.gl/gHazhNH39Sq2r6Si6?g_st=aw" },
    { icono: "copas", titulo: "Recepción & Brindis", lugar: "Estancia Los Olivos", hora: "19:00", mapa: "https://maps.app.goo.gl/gHazhNH39Sq2r6Si6?g_st=aw" }
  ],

  // Foto que acompaña la frase "Y ahora, para siempre" (vacío = sin foto)
  fotoFrase: "",

  // Carrusel de fotos (se pasan solas). Agrega o quita rutas a gusto.
  galeria: [
    "assets/galeria-mirador.jpg",
    "assets/galeria-auto.jpg"
  ],
  galeriaSegundos: 4,

  // Foto del cierre, antes de los nombres (vacío = sin foto)
  fotoCierre: "",

  // Música de fondo (vacío = se oculta el botón de sonido)
  musica: "assets/musica.mp3", // Canon en Re de Pachelbel (arreglo para arpa y cuerdas)

  programa: [
    { hora: "17:00", titulo: "Ceremonia", detalle: "Bajo los olivos del jardín" },
    { hora: "19:00", titulo: "Recepción y brindis", detalle: "Con nuestros seres queridos" },
    { hora: "20:00", titulo: "Cena", detalle: "En el salón principal" },
    { hora: "22:00", titulo: "Fiesta", detalle: "Hasta que el cuerpo aguante" }
  ],

  vestimenta: {
    ellos: "Traje arena, beige o verde oscuro",
    ellas: "Vestido largo o midi en tonos tierra",
    tonos: [
      { nombre: "Verde oliva", color: "#9aa85a" },
      { nombre: "Verde musgo", color: "#6f7d3e" },
      { nombre: "Arena", color: "#e4d6b4" },
      { nombre: "Terracota suave", color: "#c99577" }
    ],
    nota: "Telas ligeras y zapatos cómodos para el jardín.",
    notaFinal: "El blanco se lo dejamos a la novia."
  },

  regalo: {
    texto: "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, aquí tienes nuestra cuenta. También habrá un buzón para la lluvia de sobres.",
    datos: [
      { etiqueta: "Banco", valor: "Banco Familiar" },
      { etiqueta: "Alias", valor: "0985198784" }
    ]
  },

  confirmacion: {
    fechaLimite: "5 de diciembre de 2026",
    whatsapp: "595973111807" // número con código de país, sin + ni espacios
  },

  hashtag: "#DiegoYMariela2026"
};