
import "./detailCar.css"
import { useParams } from "react-router-dom";
import { getOneCar } from "../../helpers/getVehicles"; // Importa la función para obtener un carro
import { useVehicleDetail } from "../../hooks/useVehicleDetail"; // Importa el hook
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Footer from "../../components/footer/Footer";

function DetailCar() {
    const { id } = useParams(); // Obtén el ID del coche desde la URL
    const { vehicle, currentImage, nextImage, prevImage } = useVehicleDetail(id, getOneCar); // Pasa getOneCar al hook

    return (
        <>
            <div className="detail-car-container">
                <div className="carousel">
                    <img
                        src={vehicle[`imgUrl_${currentImage + 1}`]}
                        alt={`Car image ${currentImage + 1}`}
                        className="carousel-image"
                    />
                    <button onClick={prevImage} className="prev-button" disabled={currentImage === 0}>
                        Prev
                    </button>
                    <button onClick={nextImage} className="next-button" disabled={currentImage === 5}>
                        Next
                    </button>
                </div>

                <div className="car-details">
                    <h2 className="car-title">{vehicle.tilte}</h2>
                    <p className="car-description">{vehicle.description}</p>
                    <p className="car-price">{vehicle.price}</p>
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

