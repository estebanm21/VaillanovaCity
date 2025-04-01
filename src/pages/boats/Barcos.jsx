
import borderTitle from "../../assets/border_title.png";
import { NavLink } from "react-router-dom";
import { getBoats } from "../../helpers/getBoats"; // Suponiendo que tienes una función para obtener los botes
import { useVehicles } from "../../hooks/useVehicles";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Footer from "../../components/footer/Footer";

export function Barcos() {
    const { vehicles, activeImageIndex, handlePrevImage, handleNextImage } = useVehicles(getBoats);

    return (
        <>
            {/* El mismo código de renderizado de los vehículos, pero ahora con botes */}
            <div className="container_principal_cars">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Botes disponibles</h1>
                    <div className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>

                <div className="container_card_cars">
                    {/* Card de cada bote */}
                    {vehicles.map((boat) => {
                        const activeImage = activeImageIndex[boat.id] || 0;

                        return (
                            <div key={boat.id} className="card_car">
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to={`/boteDetail/${boat.id}`}
                                >
                                    <div className="conatainer_img_card_vehicle">
                                        <img
                                            src={boat[`imgUrl_${activeImage + 1}`]}
                                            alt={boat.title}
                                        />
                                    </div>

                                    <div className="container_title_car_vehicle">
                                        <h3 style={{ textAlign: "left" }}>{boat.title}</h3>
                                    </div>

                                    <div className="container_price_card">
                                        <h4 style={{ textAlign: "left" }}>Price: {boat.price}</h4>
                                    </div>

                                    <div className="btn_card_car">
                                        <p>Ver bote</p>
                                    </div>
                                </NavLink>

                                <div className="image-nav-arrows">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePrevImage(boat.id);
                                        }}
                                        className="arrow-btn left-arrow"
                                    >
                                        &#8249;
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNextImage(boat.id);
                                        }}
                                        className="arrow-btn right-arrow"
                                    >
                                        &#8250;
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <SocialMedia />
            <Footer />
        </>
    );
}
