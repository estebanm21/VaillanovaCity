import { useState, useEffect } from "react";

export function useVehicleDetail(id, getVehicle) {
  const [vehicle, setVehicle] = useState({});
  const [currentImage, setCurrentImage] = useState(0); // Control del índice de la imagen actual

  useEffect(() => {
    setVehicle(getVehicle(id));
  }, [id, getVehicle]); // Dependemos de id y la función getVehicle

  // Función para cambiar la imagen en el carrusel
  const nextImage = () => {
    if (currentImage < 5) {
      // Solo permite avanzar hasta la imagen 6 (índice 5)
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      // Solo permite regresar hasta la imagen 1 (índice 0)
      setCurrentImage(currentImage - 1);
    }
  };

  return {
    vehicle,
    currentImage,
    nextImage,
    prevImage,
  };
}
