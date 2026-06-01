export const translations = {
  es: {
    settings: {
      title: "Configuración",
      notifications: "Notificaciones",
      language: "Idioma",
      theme: "Tema",
      help: "Ayuda",
      privacy: "Privacidad",
      terms: "Términos y condiciones",

      light: "Claro",
      dark: "Oscuro",

      spanish: "Español",
      english: "English",
    },

    nav: {
      home: "Inicio",
      map: "Mapa",
      search: "Buscar",
      favorites: "Favoritos",
      menu: "Menú",
    },

    splash: {
      start: "Iniciar",
    },

    onboarding1: {
      title: "Descubre\nnegocios\núnicos.",
      description:
        "Explora la Galería Alameda\ny conoce historias\nque hacen comunidad.",
      next: "Siguiente",
    },

    onboarding2: {
      title: "Encuentra, explora\ny guarda.",
      description:
        "Guarda tus favoritos y\nencuentra lo que buscas\nfácilmente.",
      next: "Siguiente",
    },

    onboarding3: {
      title: "Explora nuestras\nrutas",
      description:
        "Recorre la Galería Alameda a través de diferentes rutas diseñadas para ayudarte a descubrir experiencias, sabores y emprendimientos únicos. Cada recorrido conecta distintas zonas del mercado, permitiéndote explorar múltiples espacios y categorías de productos mientras navegas por la alameda.",
      next: "Siguiente",
    },

    onboarding4: {
      title: "Descubre nuestras\nzonas",
      description:
        "Cada zona de la Galería Alameda reúne productos y emprendimientos con características similares. Al recorrer las distintas rutas, podrás atravesar varias zonas y descubrir experiencias, sabores y tradiciones que hacen única a la Alameda.",
      start: "Comenzar",
    },

    homePage: {
      welcome: "¡Bienvenido!",
      description:
        "Descubre la Galería Alameda de una manera interactiva. Recorre rutas temáticas, explora zonas organizadas por experiencias y encuentra locales únicos llenos de sabores, artesanías y productos tradicionales que hacen especial cada rincón del mercado.",
      exploreMap: "Explorar Mapa",
      categories: "Categorías",

      routes: "Rutas",
      zones: "Zonas",
      owner: "Don/Doña",
      businessName: "Nombre Local",
      localNumber: "Local #",
      product: "Producto",
    },
    categorySearch: {
      back: "Volver",
      empty: "Sin resultados",
      business: {
        title: "Nombre local",
        placeholder: "BUSCA EL NOMBRE DEL LOCAL",
      },
      local: {
        title: "Local #",
        placeholder: "BUSCA EL NÚMERO DEL LOCAL",
      },
      product: {
        title: "Producto",
        placeholder: "BUSCA EL PRODUCTO",
        section: "{business}, Zona {zone}",
      },
      owner: {
        title: "Don/Doña",
        placeholder: "BUSCA A DON/DOÑA",
      },
    },
    routesPage: {
      title: "Rutas",
      back: "Volver",
      mapAlt: "Mapa de rutas de la Galería Alameda",
      hint: "Recorridos temáticos por la galería",
      localsLabel: "Locales",
      routes: {
        1: {
          name: "Colombia chiquita",
          stops: [
            { zone: "1", title: "Zona de frutas y verduras", locals: "#1-62" },
            { zone: "2", title: "Saberes gastronómicos", locals: "#63-116" },
          ],
        },
        2: {
          name: "Camino de hierbas",
          stops: [{ zone: "3", title: "Hierbas medicinales", locals: "#117-163" }],
        },
        3: {
          name: "Cali, rincón del Pacífico",
          stops: [
            { zone: "4", title: "Carnes", locals: "#164-207" },
            { zone: "5", title: "Mágico - Religioso", locals: "#208-235" },
          ],
        },
        4: {
          name: "Colores de sabores",
          stops: [
            { zone: "6", title: "Flores", locals: "#236-255" },
            { zone: "7", title: "Artesanías", locals: "#256-275" },
          ],
        },
        5: {
          name: "La vuelta a la alameda",
          stops: [
            { zone: "8", title: "La Vuelta Alameda", locals: "#276-350" },
          ],
        },
      },
    },
    mapFrame: {
      zoomIn: "Acercar mapa",
      zoomOut: "Alejar mapa",
      reset: "Restablecer vista del mapa",
      hint: "Pellizca o arrastra para explorar el mapa",
    },
    map: {
      searchPlaceholder: "BUSCA EN EL MERCADO",

      filterRoute: "Filtrar por Ruta",
      filterZone: "Filtrar por Zona",
      filterSelectTitle: "Selecciona para filtrar",
      filterApplyCategories: "Aplicar filtros",
      filterOwnerDon: "Don",
      filterOwnerDona: "Doña",
      filterCategories: {
        routes: "Rutas",
        zones: "Zonas",
        owner: "Don/Doña",
        local: "Local #",
        businessName: "Nombre Local",
        product: "Producto",
      },

      clear: "Limpiar",
      apply: "Aplicar",
      centerMap: "Centrar mapa",
      compass: "Brújula",
    },

    search: {
      placeholder: "BUSCAR",
      results: "Resultados",
      noResults: "No hay resultados para tu búsqueda.",
      tabs: {
        locals: "Locales",
        products: "Productos",
        routes: "Rutas",
        owners: "Don/Doña",
      },
    },
    zonesPage: {
      title: "Zonas",
      back: "Volver",
      mapAlt: "Mapa de zonas de la Galería Alameda",
      hint: "Toca una zona para verla en el mapa",
      items: {
        1: "Zona de frutas y verduras",
        2: "Saberes gastronómicos",
        3: "Hierbas medicinales",
        4: "Carnes",
        5: "Mágico - Religioso (esotérico)",
        6: "Flores",
        7: "Artesanías",
        8: "La Vuelta Alameda",
      },
    },

    vendor: {
      route: "Ruta",
      zone: "Zona",
      local: "Local",
      products: "Productos",
      markRoute: "Marcar ruta",
      viewDetails: "Ver detalles",
      description: "Descripción",
      location: "Ubicación",
      schedule: "Horario",
      scheduleDays: "Lunes - Domingo",
      viewMap: "Ver mapa",
      comment: "Comentar",
      share: "Compartir",
      actions: {
        back: "Volver",
      },
      message: {
        title: "Dejar mensaje",
        intro:
          "Comparte tu experiencia o deja un saludo para este emprendimiento.",
        nameLabel: "Tu nombre",
        namePlaceholder: "Opcional",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí…",
        submit: "Enviar mensaje",
        success: "¡Gracias! Tu mensaje se publicó en este local.",
        recentTitle: "Mensajes recientes",
        empty: "Aún no hay mensajes para este local. ¡Sé el primero!",
        anonymous: "Visitante",
      },
      sharePage: {
        title: "Compartir",
        intro:
          "Invita a más personas a conocer este emprendimiento de la Galería Alameda.",
        linkLabel: "Enlace del local",
        copy: "Copiar enlace",
        copied: "¡Enlace copiado!",
        copyDesc: "Pégalo donde quieras compartirlo",
        whatsapp: "WhatsApp",
        whatsappDesc: "Enviar por chat con un mensaje listo",
        nativeShare: "Más opciones",
        nativeShareDesc: "Usar las opciones de compartir del dispositivo",
        openVendor: "Ver local",
        openVendorDesc: "Volver al detalle del emprendimiento",
        shareText: "Conoce {name} — {business} en Galería Alameda",
        shareError: "No se pudo compartir. Intenta copiar el enlace.",
      },
      zoneLine: "Zona {zone} · Ruta {route} · Local {local}",
      zoneOnly: "Zona {zone}",
      routeMeta: "Ruta {route}",
    },
    menu: {
      viewProfile: "Ver perfil",
      myFavorites: "Mis favoritos",
      myRoutes: "Mis rutas",
      logout: "Cerrar sesión",
    },
    favorites: {
      emptyTitle: "No tienes favoritos",
      emptyDesc:
        "Agrega comerciantes a favoritos para encontrarlos fácilmente aquí.",
    },
    auth: {
      email: "Correo",
      password: "Contraseña",
      confirmPassword: "Confirmar contraseña",
      login: {
        title: "Inicia sesión",
        submit: "Inicia",
        forgot: "¿Olvidaste la contraseña?",
        noAccount: "¿No tienes una cuenta?",
        register: "Regístrate ahora",
      },
      register: {
        title: "Regístrate",
        submit: "Regístrate",
        hasAccount: "¿Ya tienes una cuenta?",
        login: "Inicia ahora",
      },
      forgot: {
        title: "¿Olvidaste tu\ncontraseña?",
        description:
          "No te preocupes. Ingresa el correo electrónico asociado a tu cuenta y te enviaremos un enlace para recuperar tu contraseña.",
        submit: "Enviar enlace",
        spamNote: "Recuerda revisar tu bandeja de spam",
        spamNoteLine2: "o correo no deseado.",
      },
      newPassword: {
        title: "Crear nueva\ncontraseña",
        description:
          "Ingresa una nueva contraseña para acceder nuevamente a tu cuenta.",
        password: "Ingresa tu nueva contraseña",
        confirm: "Confirmar tu nueva contraseña",
        submit: "Guardar contraseña",
      },
      createProfile: {
        title: "¿Cómo quieres\nque te llamemos?",
        description:
          "Este nombre será visible dentro de la aplicación y podrás cambiarlo más adelante.",
        namePlaceholder: "Ingresa tu nombre",
        submit: "Continuar",
      },
      passwordUpdated: {
        title: "¡Contraseña actualizada!",
        description:
          "Tu contraseña se actualizó correctamente. Ya puedes iniciar sesión nuevamente.",
        submit: "Iniciar sesión",
      },
      checkEmail: {
        title: "Revisa tu correo",
        description:
          "Te enviamos un enlace a tu correo electrónico para restablecer tu contraseña. Abre el mensaje y sigue las instrucciones para continuar.",
        resend: "Reenviar",
        changeEmail: "Cambiar correo",
        spamNote: "Recuerda revisar tu bandeja de spam",
        spamNoteLine2: "o correo no deseado.",
      },
    },

    help: {
      common: { back: "Volver" },
      hub: {
        title: "Ayuda",
        intro:
          "Encuentra respuestas, contáctanos o comparte tus comentarios sobre la Galería Alameda.",
        faq: "Preguntas frecuentes",
        faqDesc: "Respuestas rápidas sobre la app, rutas y zonas.",
        contact: "Contáctanos",
        contactDesc: "WhatsApp, teléfono y correo de atención.",
        report: "Reportar un problema",
        reportDesc: "Cuéntanos qué falló para ayudarte pronto.",
        suggestion: "Enviar sugerencia",
        suggestionDesc: "Comparte ideas para mejorar la experiencia.",
      },
      faq: {
        title: "Preguntas frecuentes",
        intro:
          "Encuentra respuestas rápidas a las dudas más comunes sobre la Galería Alameda, las rutas, zonas y el funcionamiento de la aplicación.",
        searchPlaceholder: "BUSCAR UNA PREGUNTA",
        noResults: "No encontramos preguntas con ese término.",
        categories: {
          general: {
            title: "General",
            description:
              "Información básica sobre la aplicación y el funcionamiento del mapa interactivo.",
          },
          routes: {
            title: "Rutas y zonas",
            description:
              "Todo lo relacionado con recorridos, zonas y navegación dentro del mercado.",
          },
          vendors: {
            title: "Locales",
            description:
              "Información sobre locales, productos y emprendimientos disponibles.",
          },
          account: {
            title: "Cuenta y perfil",
            description:
              "Configuración de cuenta, inicio de sesión y recuperación de contraseña.",
          },
          favorites: {
            title: "Favoritos",
            description:
              "Cómo guardar, gestionar y acceder a tus emprendimientos y rutas favoritas.",
          },
          support: {
            title: "Reportes y soporte",
            description:
              "Problemas técnicos, errores y ayuda relacionada con la aplicación.",
          },
        },
      },
      contact: {
        title: "Contáctanos",
        intro:
          "Estamos aquí para ayudarte. Comunícate con nosotros a través de cualquiera de nuestros canales de atención.",
        whatsapp: "Whatsapp",
        whatsappDesc:
          "Escríbenos directamente para resolver dudas o recibir asistencia rápida.",
        phone: "Llamada telefónica",
        phoneDesc:
          "Llámanos para resolver dudas o recibir orientación inmediata.",
        email: "Correo electrónico",
        emailDesc:
          "Envíanos tus preguntas, sugerencias o solicitudes de soporte.",
        hoursTitle: "Horario de Atención",
        hoursWeekday: "Lunes - Sábado / 6:00 am - 5:00 pm",
        hoursWeekend: "Domingo - Festivos / 6:00 am - 4:00 pm",
      },
      report: {
        title: "Reportar un problema",
        intro:
          "Cuéntanos qué ocurrió para poder ayudarte a solucionar el inconveniente lo antes posible.",
        issueLabel: "Tipo de problema",
        issuePlaceholder: "Selecciona una opción",
        issueApp: "Error en la aplicación",
        issueMap: "Problema con el mapa",
        issueAccount: "Cuenta o inicio de sesión",
        issueOther: "Otro",
        descLabel: "Descripción del problema",
        descPlaceholder: "Describe lo sucedido...",
        uploadLabel: "Adjuntar captura (opcional)",
        uploadHint: "Sube una imagen (JPG, PNG)",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "Tu correo electrónico",
        submit: "Enviar reporte",
        success: "¡Reporte enviado! Te contactaremos pronto.",
        fileTypeError: "Solo se permiten imágenes JPG o PNG.",
        fileSizeError: "La imagen no debe superar 5 MB.",
      },
      suggestion: {
        title: "Enviar sugerencia",
        intro:
          "Tu opinión nos ayuda a mejorar la experiencia dentro de la Galería Alameda. Comparte tus ideas, recomendaciones o comentarios.",
        categoryLabel: "¿Sobre qué quieres sugerir?",
        categoryPlaceholder: "Selecciona una categoría",
        catExperience: "Experiencia general",
        catRoutes: "Rutas y zonas",
        catDesign: "Diseño de la app",
        catOther: "Otro",
        descLabel: "Descripción del problema",
        descPlaceholder: "Tu sugerencia",
        emailLabel: "Correo electrónico (opcional)",
        emailPlaceholder: "Tu correo electrónico",
        submit: "Enviar sugerencia",
        success: "¡Gracias por tu sugerencia!",
      },
    },
  },

  en: {
    settings: {
      title: "Settings",
      notifications: "Notifications",
      language: "Language",
      theme: "Theme",
      help: "Help",
      privacy: "Privacy",
      terms: "Terms and Conditions",

      light: "Light",
      dark: "Dark",

      spanish: "Spanish",
      english: "English",
    },

    mapFrame: {
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      reset: "Reset map view",
      hint: "Pinch or drag to explore the map",
    },
    map: {
      searchPlaceholder: "SEARCH IN THE MARKET",

      filterRoute: "Filter by Route",
      filterZone: "Filter by Zone",
      filterSelectTitle: "Select to filter",
      filterApplyCategories: "Apply filters",
      filterOwnerDon: "Don",
      filterOwnerDona: "Doña",
      filterCategories: {
        routes: "Routes",
        zones: "Zones",
        owner: "Owner",
        local: "Store #",
        businessName: "Business Name",
        product: "Product",
      },

      clear: "Clear",
      apply: "Apply",
      centerMap: "Center map",
      compass: "Compass",
    },

    search: {
      placeholder: "SEARCH",
      results: "Results",
      noResults: "No results for your search.",
      tabs: {
        locals: "Stores",
        products: "Products",
        routes: "Routes",
        owners: "Don/Doña",
      },
    },
    zonesPage: {
      title: "Zones",
      back: "Back",
      mapAlt: "Galería Alameda zones map",
      hint: "Tap a zone to view it on the map",
      items: {
        1: "Fruits and vegetables zone",
        2: "Gastronomic knowledge",
        3: "Medicinal herbs",
        4: "Meats",
        5: "Magic - Religious (esoteric)",
        6: "Flowers",
        7: "Handicrafts",
        8: "La Vuelta Alameda",
      },
    },

    nav: {
      home: "Home",
      map: "Map",
      search: "Search",
      favorites: "Favorites",
      menu: "Menu",
    },

    splash: {
      start: "Start",
    },

    onboarding1: {
      title: "Discover\nunique\nbusinesses.",
      description:
        "Explore Galería Alameda\nand discover stories\nthat build community.",
      next: "Next",
    },

    onboarding2: {
      title: "Find, explore\nand save.",
      description:
        "Save your favorites and\nfind what you're looking\nfor easily.",
      next: "Next",
    },

    onboarding3: {
      title: "Explore our\nroutes",
      description:
        "Travel through Galería Alameda using different routes designed to help you discover unique experiences, flavors, and local businesses. Each route connects different areas of the market, allowing you to explore multiple spaces and product categories while navigating the Alameda.",
      next: "Next",
    },

    onboarding4: {
      title: "Discover our\nzones",
      description:
        "Each zone of Galería Alameda brings together products and businesses with similar characteristics. As you follow the different routes, you can move through multiple zones and discover experiences, flavors, and traditions that make Alameda unique.",
      start: "Get Started",
    },

    homePage: {
      welcome: "Welcome!",
      description:
        "Discover Galería Alameda in an interactive way. Explore themed routes, browse experience-based zones, and find unique local businesses filled with flavors, crafts, and traditional products that make every corner of the market special.",
      exploreMap: "Explore Map",
      categories: "Categories",

      routes: "Routes",
      zones: "Zones",
      owner: "Owner",
      businessName: "Business Name",
      localNumber: "Store #",
      product: "Product",
    },
    categorySearch: {
      back: "Back",
      empty: "No results",
      business: {
        title: "Business name",
        placeholder: "SEARCH BUSINESS NAME",
      },
      local: {
        title: "Store #",
        placeholder: "SEARCH STORE NUMBER",
      },
      product: {
        title: "Product",
        placeholder: "SEARCH PRODUCT",
        section: "{business}, Zone {zone}",
      },
      owner: {
        title: "Owner",
        placeholder: "SEARCH OWNER",
      },
    },
    routesPage: {
      title: "Routes",
      back: "Back",
      mapAlt: "Galería Alameda routes map",
      hint: "Themed tours through the gallery",
      localsLabel: "Stores",
      routes: {
        1: {
          name: "Colombia chiquita",
          stops: [
            { zone: "1", title: "Fruits and vegetables", locals: "#1-62" },
            { zone: "2", title: "Gastronomic flavors", locals: "#63-116" },
          ],
        },
        2: {
          name: "Herb trail",
          stops: [{ zone: "3", title: "Medicinal herbs", locals: "#117-163" }],
        },
        3: {
          name: "Cali, Pacific corner",
          stops: [
            { zone: "4", title: "Meats", locals: "#164-207" },
            { zone: "5", title: "Magic - Religious", locals: "#208-235" },
          ],
        },
        4: {
          name: "Colors and flavors",
          stops: [
            { zone: "6", title: "Flowers", locals: "#236-255" },
            { zone: "7", title: "Handicrafts", locals: "#256-275" },
          ],
        },
        5: {
          name: "The Alameda loop",
          stops: [{ zone: "8", title: "La Vuelta Alameda", locals: "#276-350" }],
        },
      },
    },

    vendor: {
      route: "Route",
      zone: "Zone",
      local: "Store",
      products: "Products",
      markRoute: "Mark route",
      viewDetails: "View details",
      description: "Description",
      location: "Location",
      schedule: "Hours",
      scheduleDays: "Monday - Sunday",
      viewMap: "View map",
      comment: "Comment",
      share: "Share",
      actions: {
        back: "Back",
      },
      message: {
        title: "Leave a message",
        intro: "Share your experience or leave a note for this vendor.",
        nameLabel: "Your name",
        namePlaceholder: "Optional",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here…",
        submit: "Send message",
        success: "Thanks! Your message was posted for this vendor.",
        recentTitle: "Recent messages",
        empty: "No messages for this vendor yet. Be the first!",
        anonymous: "Visitor",
      },
      sharePage: {
        title: "Share",
        intro: "Invite others to discover this Galería Alameda vendor.",
        linkLabel: "Vendor link",
        copy: "Copy link",
        copied: "Link copied!",
        copyDesc: "Paste it anywhere you want to share",
        whatsapp: "WhatsApp",
        whatsappDesc: "Send a ready-made chat message",
        nativeShare: "More options",
        nativeShareDesc: "Use your device's share menu",
        openVendor: "View vendor",
        openVendorDesc: "Back to vendor details",
        shareText: "Discover {name} — {business} at Galería Alameda",
        shareError: "Could not share. Try copying the link.",
      },
      zoneLine: "Zone {zone} · Route {route} · Store {local}",
      zoneOnly: "Zone {zone}",
      routeMeta: "Route {route}",
    },
    menu: {
      viewProfile: "View profile",
      myFavorites: "My favorites",
      myRoutes: "My routes",
      logout: "Log out",
    },
    favorites: {
      emptyTitle: "No favorites yet",
      emptyDesc: "Add vendors to favorites to find them easily here.",
    },
    auth: {
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      login: {
        title: "Log in",
        submit: "Log in",
        forgot: "Forgot your password?",
        noAccount: "Don't have an account?",
        register: "Sign up now",
      },
      register: {
        title: "Sign up",
        submit: "Sign up",
        hasAccount: "Already have an account?",
        login: "Log in now",
      },
      forgot: {
        title: "Forgot your\npassword?",
        description:
          "Don't worry. Enter the email associated with your account and we will send you a link to reset your password.",
        submit: "Send link",
        spamNote: "Remember to check your spam folder",
        spamNoteLine2: "or junk mail.",
      },
      newPassword: {
        title: "Create new\npassword",
        description: "Enter a new password to access your account again.",
        password: "Enter your new password",
        confirm: "Confirm your new password",
        submit: "Save password",
      },
      createProfile: {
        title: "What should we\ncall you?",
        description:
          "This name will be visible in the app and you can change it later.",
        namePlaceholder: "Enter your name",
        submit: "Continue",
      },
      passwordUpdated: {
        title: "Password updated!",
        description:
          "Your password was updated successfully. You can log in again.",
        submit: "Log in",
      },
      checkEmail: {
        title: "Check your email",
        description:
          "We sent a link to your email address to reset your password. Open the message and follow the instructions to continue.",
        resend: "Resend",
        changeEmail: "Change email",
        spamNote: "Remember to check your spam folder",
        spamNoteLine2: "or junk mail.",
      },
    },

    help: {
      common: { back: "Back" },
      hub: {
        title: "Help",
        intro:
          "Find answers, contact us, or share your feedback about Galería Alameda.",
        faq: "FAQ",
        faqDesc: "Quick answers about the app, routes, and zones.",
        contact: "Contact us",
        contactDesc: "WhatsApp, phone, and support email.",
        report: "Report a problem",
        reportDesc: "Tell us what went wrong so we can help.",
        suggestion: "Send suggestion",
        suggestionDesc: "Share ideas to improve the experience.",
      },
      faq: {
        title: "Frequently asked questions",
        intro:
          "Find quick answers to common questions about Galería Alameda, routes, zones, and how the app works.",
        searchPlaceholder: "SEARCH A QUESTION",
        noResults: "No questions match your search.",
        categories: {
          general: {
            title: "General",
            description:
              "Basic information about the app and the interactive map.",
          },
          routes: {
            title: "Routes and zones",
            description:
              "Everything about tours, zones, and navigation in the market.",
          },
          vendors: {
            title: "Stores",
            description:
              "Information about stores, products, and available businesses.",
          },
          account: {
            title: "Account and profile",
            description: "Account settings, login, and password recovery.",
          },
          favorites: {
            title: "Favorites",
            description: "How to save and manage your favorite places and routes.",
          },
          support: {
            title: "Reports and support",
            description: "Technical issues, errors, and app-related help.",
          },
        },
      },
      contact: {
        title: "Contact us",
        intro:
          "We are here to help. Reach us through any of our support channels.",
        whatsapp: "WhatsApp",
        whatsappDesc: "Message us for quick assistance.",
        phone: "Phone call",
        phoneDesc: "Call us for immediate guidance.",
        email: "Email",
        emailDesc: "Send us your questions or support requests.",
        hoursTitle: "Service hours",
        hoursWeekday: "Monday - Saturday / 6:00 am - 5:00 pm",
        hoursWeekend: "Sunday - Holidays / 6:00 am - 4:00 pm",
      },
      report: {
        title: "Report a problem",
        intro:
          "Tell us what happened so we can help you fix the issue as soon as possible.",
        issueLabel: "Issue type",
        issuePlaceholder: "Select an option",
        issueApp: "App error",
        issueMap: "Map issue",
        issueAccount: "Account or login",
        issueOther: "Other",
        descLabel: "Issue description",
        descPlaceholder: "Describe what happened...",
        uploadLabel: "Attach screenshot (optional)",
        uploadHint: "Upload an image (JPG, PNG)",
        emailLabel: "Email",
        emailPlaceholder: "Your email address",
        submit: "Send report",
        success: "Report sent! We will contact you soon.",
        fileTypeError: "Only JPG or PNG images are allowed.",
        fileSizeError: "Image must be under 5 MB.",
      },
      suggestion: {
        title: "Send suggestion",
        intro:
          "Your feedback helps us improve the Galería Alameda experience.",
        categoryLabel: "What is your suggestion about?",
        categoryPlaceholder: "Select a category",
        catExperience: "General experience",
        catRoutes: "Routes and zones",
        catDesign: "App design",
        catOther: "Other",
        descLabel: "Description",
        descPlaceholder: "Your suggestion",
        emailLabel: "Email (optional)",
        emailPlaceholder: "Your email address",
        submit: "Send suggestion",
        success: "Thank you for your suggestion!",
      },
    },
  },
};
