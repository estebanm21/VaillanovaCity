import "./detailCar.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneCar } from "../../helpers/getVehicles";
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Footer from "../../components/footer/Footer"

function DetailCar() {
    const [car, setCar] = useState({});
    const [currentImage, setCurrentImage] = useState(0); // Control del índice de la imagen actual

    const { id } = useParams();

    useEffect(() => {
        setCar(getOneCar(id));
    }, [id]);

    // Función para cambiar la imagen en el carrusel
    const nextImage = () => {
        if (currentImage < 5) { // Solo permite avanzar hasta la imagen 6 (índice 5)
            setCurrentImage(currentImage + 1);
        }
    };

    const prevImage = () => {
        if (currentImage > 0) { // Solo permite regresar hasta la imagen 1 (índice 0)
            setCurrentImage(currentImage - 1);
        }
    };

    return (
        <>

            <div className="detail-car-container">
                <div className="carousel">
                    <img
                        src={car[`imgUrl_${currentImage + 1}`]}
                        alt={`Car image ${currentImage + 1}`}
                        className="carousel-image"
                    />
                    <button onClick={prevImage} className="prev-button" disabled={currentImage === 0}>Prev</button>
                    <button onClick={nextImage} className="next-button" disabled={currentImage === 5}>Next</button>
                </div>

                <div className="car-details">
                    <h2 className="car-title">{car.title}</h2>
                    <p className="car-description">{car.description}</p>
                    <p className="car-price">{car.price}</p>
                    <div className="text-start">
                        <button className="btn btn-primary">Obtener Coche</button>
                    </div>
                </div>
            </div>
            <SocialMedia />
            <Footer />

        </>
    );
}

export default DetailCar;
