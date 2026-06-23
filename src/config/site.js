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
    "La opción deliciosa y sin complicaciones para familias ocupadas en la zona norte de Chihuahua.",

  // ─────────────────────────────────────────────
  // SECCION HERO (la primera pantalla que ven los visitantes)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Hecho en casa, con sabor de verdad",
    title: "Hecha sin prisa",
    titleHighlight: "y mucha intención",
    // Variante visual del titulo: "classicBold" o "roundedFoodie"
    titleVariant: "roundedFoodie",
    subtitle:
      "Hecha con calma, para días sin tregua, noches que piden vino y momentos que merecen recordarse.",
    ctaPrimary: "Haz tu pedido",
    ctaSecondary: "Ver menú",
    // Enlace del boton principal. Puedes poner una URL de Calendly o Google Calendar.
    // Ejemplo Calendly: "https://calendly.com/tu-usuario/30min"
    // Ejemplo Google Calendar: "https://calendar.google.com/calendar/appointments/..."
    ctaPrimaryUrl: "#contact",
    ctaSecondaryUrl: "#menu",
    logoSrc: "/imagenes%20pasticcio/Logo%20Pasticcio.png",
    logoAlt: "Logo de Pasticcio Lasagnas",
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (seccion de caracteristicas)
  // ─────────────────────────────────────────────
  features: {
    heading: "Una ayuda real para tus días ocupados",
    subheading: "Cómo tener una comida casera lista sin estrés.",
    items: [
      {
        icon: "lightning",
        title: "Pedido fácil y rápido",
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
        title: "Para mamás que no paran",
        description:
          "Tu comida resuelta para que llegues a casa con tranquilidad.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MENU (sabores de lasagna)
  // ─────────────────────────────────────────────
  menu: {
    heading: "Nuestras lasañas",
    subheading:
      "Elige tu sabor. Cada una se prepara por encargo, capa por capa, sin atajos.",
    items: [
      {
        name: "Carne",
        description:
          "Nuestra clásica boloñesa: carne lentamente cocida en salsa de tomate, capas de pasta y bechamel cremosa.",
        image: "/imagenes%20pasticcio/lasagna-pasticho.png",
      },
      {
        name: "Pollo",
        description:
          "Pollo deshebrado con un toque casero, salsa suave de poblano o chipotle y queso gratinado.",
        image: "/imagenes%20pasticcio/azteca.png",
      },
      {
        name: "Vegetales",
        description:
          "Verduras de temporada, espinaca, champiñones y queso fundido con bechamel. Ligera, fresca y llena de sabor.",
        image: "/imagenes%20pasticcio/vegetales.png",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes de pago)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Elige tu tamaño",
    subheading:
      "Porciones honestas para tu mesa. Todo se prepara por encargo.",
    plans: [
      {
        name: "Lasagna Individual",
        price: "$220",
        period: "MXN",
        description:
          "Ideal para ti. Una porción grande para una persona, perfecta para consentirte.",
        features: [
          "Porción generosa para 1 persona",
          "Lista para calentar y servir",
          "Horneado artesanal",
        ],
        cta: "Quiero individual",
        highlighted: false,
      },
      {
        name: "Lasagna Doble",
        price: "$320",
        period: "MXN",
        description: "Perfecta para 2 personas. Ideal para cena en pareja o para compartir.",
        features: [
          "Rinde para dos comensales",
          "Calientita, lista al momento",
          "Horneado artesanal",
        ],
        cta: "Quiero doble",
        highlighted: false,
      },
      {
        name: "Lasagna Familiar",
        price: "$1200",
        period: "MXN",
        description:
          "Para reunión familiar, hasta 6 personas. Domingos largos sin cocinar.",
        features: [
          "Ideal para compartir en familia",
          "Porción abundante",
          "Textura cremosa y doradita",
          "Lista para tu mesa",
        ],
        cta: "Quiero familiar",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Te respondemos rápido para que pidas con confianza.",
    items: [
      {
        question: "¿Con cuánta anticipación debo hacer mi pedido?",
        answer:
          "Lo ideal es pedir con 24 horas de anticipación para asegurar disponibilidad.",
      },
      {
        question: "¿Tienen entrega a domicilio?",
        answer:
          "Sí, entregamos en la zona norte de Chihuahua. También puedes recoger en punto acordado.",
      },
      {
        question: "¿Las lasañas ya vienen cocinadas?",
        answer:
          "Sí, van listas para disfrutar. Solo calientas y sirves.",
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Aceptamos transferencia y pago por PayPal.",
      },
      {
        question: "¿Puedo pedir para una reunión especial?",
        answer:
          "Claro, te ayudamos a elegir porciones y opciones según el número de personas.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Haz tu pedido aquí",
    subheading:
      "Escríbenos y te confirmamos disponibilidad, precio y entrega.",
    // URL para agendar una cita (Calendly o Google Calendar)
    // Si no tienes, deja el valor vacio: ""
    schedulingUrl: "",
    schedulingCta: "Agendar por WhatsApp",
    form: {
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tucorreo@email.com",
      // Telefono es opcional. Cambia phoneRequired a true si quieres hacerlo obligatorio.
      phonePlaceholder: "Tu teléfono para confirmar pedido (opcional)",
      phoneRequired: false,
      messagePlaceholder:
        "¿Cuántas porciones necesitas, para qué fecha y en qué zona sería la entrega?",
      submitButton: "Quiero hacer mi pedido",
      sendingButton: "Enviando pedido...",
      successMessage:
        "Gracias. Ya recibimos tu pedido y te contactaremos en breve.",
      errorMessage:
        "No pudimos enviar el pedido. Inténtalo de nuevo en un momento.",
    },
    // Datos de contacto opcionales para mostrar en el footer o sidebar
    email: "hola@pasticciolasagnas.com",
    phone: "",
    address: "Zona norte, Chihuahua, Chihuahua",
  },

  // ─────────────────────────────────────────────
  // WHATSAPP (boton flotante)
  // ─────────────────────────────────────────────
  whatsapp: {
    // Numero con codigo de pais Mexico (52) + 61412071188
    phone: "52161412071188",
    message: "¡Hola Pasticcio! Quiero hacer un pedido de lasaña",
    ariaLabel: "Escribir por WhatsApp",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menú", href: "#menu" },
      { label: "Acompaña", href: "#acompanamientos" },
      { label: "Precios", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Comida casera, cálida y sin complicaciones para tu familia.",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menú", href: "#menu" },
      { label: "Acompaña", href: "#acompanamientos" },
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
  // ACOMPANAMIENTOS
  // ─────────────────────────────────────────────
  gallery: {
    heading: "Acompáñala con…",
    subheading: "",
    items: [
      {
        name: "Pan con especies",
        description: "Pan untado con nuestra mezcla especiada.",
        image: "/imagenes%20pasticcio/pan.png",
        alt: "Pan con especies de Pasticcio Lasagnas",
      },
      {
        name: "Ensalada fresca",
        description: "Ligera y de temporada para equilibrar.",
        image: "/imagenes%20pasticcio/ensalada.png",
        alt: "Ensalada fresca de Pasticcio Lasagnas",
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
