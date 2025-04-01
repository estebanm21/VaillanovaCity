import { useState, useEffect } from "react";

export function useVehicles(getVehicles) {
  const [vehicles, setVehicles] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  useEffect(() => {
    setVehicles(getVehicles());
  }, [getVehicles]);

  const handlePrevImage = (vehicleId) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[vehicleId] || 0;
      return {
        ...prev,
        [vehicleId]: currentIndex > 0 ? currentIndex - 1 : 5, // Cicla entre las imágenes
      };
    });
  };

  const handleNextImage = (vehicleId) => {
    setActiveImageIndex((prev) => {
      const currentIndex = prev[vehicleId] || 0;
      return {
        ...prev,
        [vehicleId]: currentIndex < 5 ? currentIndex + 1 : 0, // Cicla entre las imágenes
      };
    });
  };

  return {
    vehicles,
    activeImageIndex,
    handlePrevImage,
    handleNextImage,
  };
}
