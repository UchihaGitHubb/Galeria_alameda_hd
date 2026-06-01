import donaMargotPhoto from "../assets/vendors/dona-margot.png";
import donaPaolaPhoto from "../assets/vendors/dona-paola.png";
import donaLesviaPhoto from "../assets/vendors/dona-lesvia.png";
import donJuanPhoto from "../assets/vendors/don-juan.png";

import producto1 from "../assets/products/producto1.png";
import producto2 from "../assets/products/producto2.png";
import producto3 from "../assets/products/producto3.png";
import producto4 from "../assets/products/producto4.png";
import producto5 from "../assets/products/producto5.png";
import producto6 from "../assets/products/producto6.png";
import producto7 from "../assets/products/producto7.png";
import producto8 from "../assets/products/producto8.png";
import producto9 from "../assets/products/producto9.png";
import producto10 from "../assets/products/producto10.png";
import producto11 from "../assets/products/producto11.png";
import ruta1 from "../assets/rutas/ruta1.png";
import ruta2 from "../assets/rutas/ruta2.png";
import ruta3 from "../assets/rutas/ruta3.png";
import ruta4 from "../assets/rutas/ruta4.png";
import ruta5 from "../assets/rutas/ruta5.png";

export const vendors = [
  {
    id: 1,
    gender: "dona",
    routeIcon: ruta4,
    name: "Doña Margot",
    business: "Artesanías Margot",
    zoneColor: "#FBDD21",
    photo: donaMargotPhoto,
    description:
      "Productos elaborados a mano con técnicas tradicionales. Piezas únicas hechas con amor.",
    local: "#278",
    zone: "7",
    route: "4",
    x: 65.2,
    y: 64,
    schedule: "6:00 am / 4:00 pm",
    products: [producto1, producto2, producto3, producto4],
  },
  {
    id: 2,
    gender: "dona",
    name: "Doña Lesvia",
    routeIcon: ruta2,
    business: "El Yerberito",
    zoneColor: "#E5E05E",
    photo: donaLesviaPhoto,
    description:
      "Hierbas medicinales y productos naturales seleccionados cuidadosamente.",
    local: "#791",
    zone: "3",
    route: "2",
    x: 46,
    y: 53,
    schedule: "6:00 am / 4:00 pm",
    products: [producto9, producto10, producto11],
  },
  {
    id: 3,
    gender: "dona",
    name: "Doña Paola",
    routeIcon: ruta5,
    business: "CALIMA Artesanías",
    zoneColor: "#a1a64d",
    photo: donaPaolaPhoto,
    description: "Artesanías inspiradas en la tradición cultural colombiana.",
    local: "#731",
    zone: "6",
    route: "5",
    x: 74.9,
    y: 51.6,
    schedule: "6:00 am / 4:00 pm",
    products: [producto4, producto1, producto2],
  },
  {
    id: 4,
    gender: "don",
    routeIcon: ruta3,
    name: "Don Juan",
    business: "La Gracia de Dios",
    zoneColor: "#8abee8",
    photo: donJuanPhoto,
    description: "Productos frescos y seleccionados diariamente.",
    local: "#138",
    zone: "5",
    route: "3",
    x: 60.2,
    y: 58.9,
    schedule: "6:00 am / 4:00 pm",
    products: [producto5, producto6, producto7, producto8],
  },
];
