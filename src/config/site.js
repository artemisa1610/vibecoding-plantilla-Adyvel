/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Este es el archivo que debes editar para personalizar tu landing page.
 * Cambia los textos, colores y datos de contacto aqui.
 * Los cambios se aplicaran automaticamente en toda la pagina.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "Pasticcio Lasagnas",
  tagline: "Lasagnas artesanales por encargo, hechas en casa con amor.",
  description:
    "La opcion deliciosa y sin complicaciones para familias ocupadas en la zona norte de Chihuahua.",

  // ─────────────────────────────────────────────
  // SECCION HERO (la primera pantalla que ven los visitantes)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Hecho en casa, con sabor de verdad",
    title: "La lasagna que te",
    titleHighlight: "resuelve el dia",
    // Variante visual del titulo: "classicBold" o "roundedFoodie"
    titleVariant: "roundedFoodie",
    subtitle:
      "En Pasticcio Lasagnas cocinamos por encargo para que tu familia coma rico, casero y sin prisas, aunque tu agenda este llena.",
    ctaPrimary: "Haz tu pedido",
    ctaSecondary: "Ver menu",
    // Enlace del boton principal. Puedes poner una URL de Calendly o Google Calendar.
    // Ejemplo Calendly: "https://calendly.com/tu-usuario/30min"
    // Ejemplo Google Calendar: "https://calendar.google.com/calendar/appointments/..."
    ctaPrimaryUrl: "#contact",
    ctaSecondaryUrl: "#features",
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (seccion de caracteristicas)
  // ─────────────────────────────────────────────
  features: {
    heading: "Una ayuda real para tus dias ocupados",
    subheading: "Como tener una comida casera lista sin estres.",
    items: [
      {
        icon: "lightning",
        title: "Pedido facil y rapido",
        description:
          "Nos escribes, te confirmamos y coordinamos todo sin vueltas largas.",
      },
      {
        icon: "mobile",
        title: "Sabor artesanal confiable",
        description:
          "Recetas caseras con ingredientes de calidad, pensadas para compartir en familia.",
      },
      {
        icon: "settings",
        title: "Para mamas que no paran",
        description:
          "Tu comida resuelta para que llegues a casa con tranquilidad.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes de pago)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Precios claros, porciones honestas",
    subheading:
      "Elige el tamano ideal para tu mesa. Todo se prepara por encargo.",
    plans: [
      {
        name: "Lasagna chica",
        price: "$280",
        period: "MXN",
        description: "Ideal para 2 a 3 personas",
        features: [
          "Pasta y salsa casera",
          "Queso gratinado al horno",
          "Lista para calentar y servir",
        ],
        cta: "Quiero la chica",
        highlighted: false,
      },
      {
        name: "Lasagna mediana",
        price: "$420",
        period: "MXN",
        description: "Perfecta para 4 a 6 personas",
        features: [
          "La favorita de la casa",
          "Porcion abundante",
          "Horneado artesanal",
          "Ideal para comida familiar",
        ],
        cta: "Quiero la mediana",
        highlighted: true,
      },
      {
        name: "Lasagna grande",
        price: "$560",
        period: "MXN",
        description: "Rinde para 7 a 9 personas",
        features: [
          "Perfecta para reunion familiar",
          "Textura cremosa y doradita",
          "Lista para compartir",
          "Sabor casero en cada capa",
        ],
        cta: "Quiero la grande",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Te respondemos rapido para que pidas con confianza.",
    items: [
      {
        question: "Con cuanta anticipacion debo hacer mi pedido?",
        answer:
          "Lo ideal es pedir con 24 horas de anticipacion para asegurar disponibilidad.",
      },
      {
        question: "Tienen entrega a domicilio?",
        answer:
          "Si, entregamos en la zona norte de Chihuahua. Tambien puedes recoger en punto acordado.",
      },
      {
        question: "Las lasagnas ya vienen cocinadas?",
        answer:
          "Si, van listas para disfrutar. Solo calientas y sirves.",
      },
      {
        question: "Que metodos de pago aceptan?",
        answer:
          "Aceptamos transferencia y pago por PayPal.",
      },
      {
        question: "Puedo pedir para una reunion especial?",
        answer:
          "Claro, te ayudamos a elegir porciones y opciones segun el numero de personas.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Haz tu pedido aqui",
    subheading:
      "Escribenos y te confirmamos disponibilidad, precio y entrega.",
    // URL para agendar una cita (Calendly o Google Calendar)
    // Si no tienes, deja el valor vacio: ""
    schedulingUrl: "",
    schedulingCta: "Agendar por WhatsApp",
    form: {
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tucorreo@email.com",
      // Telefono es opcional. Cambia phoneRequired a true si quieres hacerlo obligatorio.
      phonePlaceholder: "Tu telefono para confirmar pedido (opcional)",
      phoneRequired: false,
      messagePlaceholder:
        "Cuantas porciones necesitas, para que fecha y en que zona seria la entrega?",
      submitButton: "Quiero hacer mi pedido",
      sendingButton: "Enviando pedido...",
      successMessage:
        "Gracias. Ya recibimos tu pedido y te contactaremos en breve.",
      errorMessage:
        "No pudimos enviar el pedido. Intentalo de nuevo en un momento.",
    },
    // Datos de contacto opcionales para mostrar en el footer o sidebar
    email: "hola@pasticciolasagnas.com",
    phone: "",
    address: "Zona norte, Chihuahua, Chihuahua",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menu", href: "#features" },
      { label: "Galeria", href: "#galeria" },
      { label: "Precios", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Comida casera, calida y sin complicaciones para tu familia.",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menu", href: "#features" },
      { label: "Galeria", href: "#galeria" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright: "Todos los derechos reservados. Pasticcio Lasagnas.",
  },

  // ─────────────────────────────────────────────
  // EMAIL (notificaciones automaticas al recibir un contacto)
  // ─────────────────────────────────────────────
  email: {
    subject: "Recibimos tu pedido en Pasticcio Lasagnas",
    teamSignature: "Equipo Pasticcio Lasagnas",
    // El remitente del email. Debe coincidir con tu dominio verificado en Resend.
    from: "onboarding@resend.dev",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES (referencia para personalizar globals.css)
  // ─────────────────────────────────────────────
  // Estos valores son documentacion. Para cambiar colores en Tailwind v4,
  // edita el archivo src/app/globals.css y modifica las variables CSS.
  colors: {
    primary: "#FF6D0D",       // Botones y llamados de accion
    secondary: "#704F43",     // Textos principales
    accent: "#368925",        // Acentos naturales
    background: "#F8F3EA",    // Fondo crema calido
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    // Cambia enabled a true cuando tengas tu cuenta de PayPal lista
    enabled: true,
    // Tu nombre de usuario de PayPal.me
    // Para obtenerlo: ve a paypal.com > Perfil > Configura tu link PayPal.me
    // Ejemplo: si tu link es paypal.me/juanperez, escribe "juanperez"
    paypalMeUsername: "adyvelcr",
    // Monto sugerido en dolares. Pon 0 para que el comprador elija cuanto pagar.
    defaultAmount: 0,
    currency: "MXN",
    buttonText: "Pagar anticipo por PayPal",
  },

  // ─────────────────────────────────────────────
  // GALERIA
  // ─────────────────────────────────────────────
  gallery: {
    heading: "Asi se ve un antojo bien cumplido",
    subheading:
      "Un vistazo real a nuestras lasagnas artesanales recien horneadas.",
    items: [
      {
        src: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Rebanada de lasagna artesanal de Pasticcio",
      },
      {
        src: "https://images.pexels.com/photos/6941036/pexels-photo-6941036.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Lasagna dorada recien salida del horno",
      },
      {
        src: "https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Porcion de lasagna servida para comida familiar",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO (lo que aparece en Google y redes sociales)
  // ─────────────────────────────────────────────
  metadata: {
    title: "Pasticcio Lasagnas | Lasagnas artesanales por encargo",
    description:
      "Lasagnas artesanales por encargo en la zona norte de Chihuahua. Comida casera, elegante y sin complicaciones para tu familia.",
  },
};
