import locaExample from "../assets/local_example.png";
import local1 from "../assets/local1.jpg";
import local2 from "../assets/local2.jpg";
import local3 from "../assets/local3.jpg";
import local4 from "../assets/local4.jpg";
import local5 from "../assets/local5.jpg";
import local6 from "../assets/local6.jpg";

const locales = [
  {
    id: 1,
    nombre: "REDLINE – El templo del motor en VilanovaCity",
    imagen: local1, // Sustituye con la URL real de la imagen
    descripcion:
      "¿Estás listo para llevar tu pasión por los coches al siguiente nivel? Este espectacular local de alto nivel está diseñado para los verdaderos amantes de la velocidad y la personalización.Taller de última generación con un diseño moderno y elegante. Búnker subterráneo exclusivo para exponer vehículos con estilo y máxima seguridad. Ideal para montar un concesionario premium, un taller de tuning o una galería de coches exóticos.Ubicación estratégica con gran visibilidad en la ciudad.Redline no es solo un negocio, es una experiencia pensada para destacar.",
    precio: "49,99€",
    coordenadas: { top: "54%", left: "63.7%" }, // Ajusta estas coordenadas según el mapa
  },
  {
    id: 2,
    nombre: "Rusty Garage – El taller más auténtico de VilanovaCity",
    imagen: local2,
    descripcion:
      "Un espacio industrial con alma, perfecto para quienes buscan montar un taller con carácter propio. Rusty Garage combina la esencia clásica de los garajes americanos con un toque urbano y moderno. Cuenta con una zona de trabajo completamente equipada para reparaciones, modificaciones y pintura.Incluye una cabina de pintura profesional y zona de herramientas lista para comenzar a operar.Además, este local destaca por su bar interior, ideal para crear un ambiente social,organizar eventos o simplemente ofrecer un espacio único a los clientes y empleados. Rusty Garage no es solo un taller, es un punto de encuentro para los apasionados del motor y la buena vida",
    precio: "19,99€",
    coordenadas: { top: "41%", left: "63%" },
  },

  {
    id: 3,
    nombre: "COLD BEER – El punto más fresco del centro de VilanovaCity",
    imagen: local3,
    descripcion:
      "Ubicado en pleno corazón de la ciudad, COLD BEER es un local moderno, con encanto y un ambiente relajado que lo convierte en una opción ideal para emprender. Su diseño en madera, rodeado de vegetación y con una distribución abierta, ofrece un entorno perfecto para montar un bar chill out, una coctelería o un espacio para eventos al aire libre.Cuenta con barra completamente equipada, zona de sofás y mesas repartidas estratégicamente para crear una experiencia cómoda y atractiva. COLD BEER es sinónimo de buen gusto, ubicación privilegiada y ambiente único. Un negocio listo para destacar en el centro de VilanovaCity.",
    precio: "9,99€",
    coordenadas: { top: "46%", left: "64%" },
  },

  {
    id: 4,
    nombre: "Luxury Autos – La casa del lujo sobre ruedas en VilanovaCity",
    imagen: local4,
    descripcion:
      "Este concesionario de alta gama es sinónimo de elegancia, prestigio y exclusividad. Con un diseño moderno y espacios amplios, Luxury Autos está pensado para ofrecer una experiencia premium tanto para compradores como para vendedores. Cuenta con una gran sala de exposición con plataformas elevadas, amplios ventanales que ofrecen visibilidad total desde el exterior y acabados de alto nivel en cada rincón.Su ubicación estratégica en zona urbana garantiza tránsito constante y un entorno ideal para atraer clientes de nivel alto.Luxury Autos es la opción perfecta para quienes quieren dominar el mercado de vehículos de lujo en VilanovaCity.",
    precio: "29,99€",
    coordenadas: { top: "46%", left: "59.5%" },
  },

  {
    id: 5,
    nombre:
      "Vanilla Unicorn – El club más exclusivo y con más estilo de VilanovaCity",
    imagen: local5,
    descripcion:
      "Con un ambiente nocturno único, luces de neón, buena música y un servicio impecable, Vanilla Unicorn es el lugar ideal para quienes buscan disfrutar de la noche con clase. Este club ya es un punto de referencia en la ciudad gracias a su diseño atrevido, su barra iluminada y su espectacular zona de escenario con barra de pole dance.Cuenta con zona de copas, pecera decorativa, iluminación ambiental, mesas privadas y decoración temática que lo convierten en el sitio perfecto para atraer a un público selecto. Ideal para montar un club nocturno, organizar eventos privados o establecer una marca propia dentro del ocio de VilanovaCity. Vanilla Unicorn no es solo un local, es una experiencia completa.",
    precio: "19,99€",
    coordenadas: { top: "47%", left: "67%" },
  },

  {
    id: 6,
    nombre: "Muscle Beach – El gimnasio al aire libre de VilanovaCity",
    imagen: local6,
    descripcion:
      "Ubicado frente al mar y rodeado de comercios turísticos, Muscle Beach es el gimnasio ideal para quienes buscan entrenar al máximo nivel en un entorno único. Equipado con máquinas de fuerza, bancos, pesas y todo lo necesario para un entrenamiento completo, este gimnasio ofrece una experiencia diferente al aire libre. Perfecto para montar un negocio de entrenamiento personal, un centro de fitness urbano ouna comunidad de deportistas que buscan destacar.Su localización en plena zona de playa lo convierte en un punto de encuentro para residentes y turistas. Muscle Beach no es solo un gimnasio, es un estilo de vida.",
    precio: "24,99€",
    coordenadas: { top: "60%", left: "67%" },
  },
];

export const getLocales = () => {
  return locales;
};
