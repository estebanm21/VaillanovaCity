import boatImg1 from "../assets/barco1/1.jpg";
import boatImg2 from "../assets/barco1/2.jpg";
import boatImg3 from "../assets/barco1/3.jpg";
import boatImg4 from "../assets/barco1/4.jpg";
import boatImg5 from "../assets/barco1/5.jpg";
import boatImg6 from "../assets/barco1/6.jpg";

import boatImg1_2 from "../assets/barco2/1.jpg";
import boatImg2_2 from "../assets/barco2/2.jpg";
import boatImg3_2 from "../assets/barco2/3.jpg";
import boatImg4_2 from "../assets/barco2/4.jpg";
import boatImg5_2 from "../assets/barco2/5.jpg";
import boatImg6_2 from "../assets/barco2/6.jpg";

const boats = [
  {
    id: 1,
    tilte: "Velero Sovereign",
    price: "9,99€",
    maximunSpeed: "116.4",
    imgUrl_1: boatImg1,
    imgUrl_2: boatImg2,
    imgUrl_3: boatImg3,
    imgUrl_4: boatImg4,
    imgUrl_5: boatImg5,
    imgUrl_6: boatImg6,

    description:
      "El Sovereign es un velero diseñado para quienes buscan navegar con clase. Con un acabado en madera pulida, detalles cuidados y líneas limpias, este barco no solo ofrece estilo, sino también funcionalidad y comodidad.",
  },

  {
    id: 2,
    tilte: "Sovereign Wind",
    price: "14,99€",
    maximunSpeed: "116.4",
    imgUrl_1: boatImg1_2,
    imgUrl_2: boatImg2_2,
    imgUrl_3: boatImg3_2,
    imgUrl_4: boatImg4_2,
    imgUrl_5: boatImg5_2,
    imgUrl_6: boatImg6_2,

    description:
      "Tiene un aire elegante y poderoso, y combina perfectamente con el concepto de navegación con clase, líneas limpias y estilo refinado. Si quieres más opciones en esa línea, te dejo otras",
  },
];

export function getBoats() {
  return boats;
}

export function getOneBoat(id) {
  let newId = Number(id);
  if (isNaN(newId)) {
    console.error("el id proporcionado no es un numero valido");
    return null;
  }
  return boats.find((boat) => {
    if (boat.id === newId) {
      return boat;
    }
  });
}
