import { useParams } from "react-router-dom";
import { getOneBoat } from "../../helpers/getBoats"; // Importa la función para obtener un bote
import { useVehicleDetail } from "../../hooks/useVehicleDetail"; // Importa el hook
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Footer from "../../components/footer/Footer";

function DetailBoat() {
    const { id } = useParams(); // Obtén el ID del bote desde la URL
    const { vehicle, currentImage, nextImage, prevImage } = useVehicleDetail(id, getOneBoat); // Pasa getOneBoat al hook

    return (
        <>
            <div className="detail-car-container">
                <div className="carousel">
                    <img
                        src={vehicle[`imgUrl_${currentImage + 1}`]}
                        alt={`Boat image ${currentImage + 1}`}
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
                        <button className="btn btn-primary">Obtener Bote</button>
                    </div>
                </div>
            </div>
            <SocialMedia />
            <Footer />
        </>
    );
}

export default DetailBoat;
