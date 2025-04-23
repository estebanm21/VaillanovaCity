import axios from "axios";

export const getPlayers = async () => {
  const API_URL = "http://185.230.55.63:4000/players";
  try {
    const response = await axios.get(API_URL);
    const { data } = response;

    // Si 'data' es un array, devolvemos la cantidad de jugadores conectados
    if (Array.isArray(data)) {
      return data.length;
    }

    // Si por alguna razón no es un array, devolvemos 0
    return 0;
  } catch (error) {
    // Si hay un error de red (servidor desconectado, etc), retornamos 0
    if (error.code === "ERR_NETWORK") {
      return 0;
    }

    // Otro tipo de error también retorna 0
    return 0;
  }
};
