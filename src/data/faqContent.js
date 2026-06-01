export const FAQ_CATEGORIES = [
  { id: "general", icon: "info" },
  { id: "routes", icon: "map" },
  { id: "vendors", icon: "store" },
  { id: "account", icon: "user" },
  { id: "favorites", icon: "heart" },
  { id: "support", icon: "alert" },
];

export function getFaqData(language) {
  const data = {
    es: {
      general: {
        items: [
          {
            q: "¿Qué es la Galería Alameda?",
            a: "Es un mercado tradicional que puedes explorar de forma interactiva con mapas, rutas y zonas.",
          },
          {
            q: "¿Cómo funciona el mapa interactivo?",
            a: "Puedes acercar, alejar y desplazarte por el mapa para ubicar locales, rutas y zonas.",
          },
        ],
      },
      routes: {
        items: [
          {
            q: "¿Qué son las rutas?",
            a: "Son recorridos temáticos que conectan distintas zonas y locales del mercado.",
          },
          {
            q: "¿Cómo filtro por zona?",
            a: "Desde el mapa o la pantalla de zonas puedes seleccionar una zona y ver los locales asociados.",
          },
        ],
      },
      vendors: {
        items: [
          {
            q: "¿Cómo encuentro un local?",
            a: "Usa el buscador del mapa o explora por categorías en la pantalla de inicio.",
          },
          {
            q: "¿Qué información muestra cada local?",
            a: "Nombre, zona, ruta, productos destacados y opción para marcarlo en favoritos.",
          },
        ],
      },
      account: {
        items: [
          {
            q: "¿Cómo recupero mi contraseña?",
            a: "En inicio de sesión elige «¿Olvidaste tu contraseña?» e ingresa tu correo.",
          },
          {
            q: "¿Puedo cambiar el idioma?",
            a: "Sí, desde Configuración puedes elegir entre español e inglés.",
          },
        ],
      },
      favorites: {
        items: [
          {
            q: "¿Cómo guardo un favorito?",
            a: "Toca el ícono de corazón en la tarjeta del local o en su detalle.",
          },
          {
            q: "¿Dónde veo mis favoritos?",
            a: "En la barra inferior, pestaña Favoritos, o desde el menú lateral.",
          },
        ],
      },
      support: {
        items: [
          {
            q: "¿Cómo reporto un problema?",
            a: "Ve a Ayuda → Reportar un problema y completa el formulario.",
          },
          {
            q: "¿Cómo envío una sugerencia?",
            a: "Desde Ayuda elige Enviar sugerencia y comparte tu comentario.",
          },
        ],
      },
    },
    en: {
      general: {
        items: [
          {
            q: "What is Galería Alameda?",
            a: "It is a traditional market you can explore interactively with maps, routes, and zones.",
          },
          {
            q: "How does the interactive map work?",
            a: "You can zoom and pan the map to find stores, routes, and zones.",
          },
        ],
      },
      routes: {
        items: [
          {
            q: "What are routes?",
            a: "Themed paths that connect different zones and businesses in the market.",
          },
          {
            q: "How do I filter by zone?",
            a: "From the map or zones screen, select a zone to see related businesses.",
          },
        ],
      },
      vendors: {
        items: [
          {
            q: "How do I find a store?",
            a: "Use the map search or browse categories on the home screen.",
          },
          {
            q: "What does each store page show?",
            a: "Name, zone, route, featured products, and favorites option.",
          },
        ],
      },
      account: {
        items: [
          {
            q: "How do I reset my password?",
            a: 'On login, tap "Forgot your password?" and enter your email.',
          },
          {
            q: "Can I change the language?",
            a: "Yes, from Settings you can choose Spanish or English.",
          },
        ],
      },
      favorites: {
        items: [
          {
            q: "How do I save a favorite?",
            a: "Tap the heart icon on the store card or detail page.",
          },
          {
            q: "Where are my favorites?",
            a: "In the bottom bar under Favorites, or from the side menu.",
          },
        ],
      },
      support: {
        items: [
          {
            q: "How do I report a problem?",
            a: "Go to Help → Report a problem and fill out the form.",
          },
          {
            q: "How do I send a suggestion?",
            a: "From Help choose Send suggestion and share your feedback.",
          },
        ],
      },
    },
  };

  return data[language] || data.es;
}
