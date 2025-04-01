import "./cars.css";
import borderTitle from "../../assets/border_title.png";
import { NavLink } from "react-router-dom";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import Footer from "../../components/footer/Footer";

import { useEffect } from "react";
import { getCars } from "../../helpers/getVehicles";
import AOS from "aos";
import { useVehicles } from "../../hooks/useVehicles"; // Importa el hook

export function Cars() {
    const { vehicles, activeImageIndex, handlePrevImage, handleNextImage } = useVehicles(getCars);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div data-aos="fade-right" className="container_principal_cars">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Carros disponibles</h1>
                    <div className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>

                <div className="container_card_cars">
                    {/* Card de cada coche */}
                    {vehicles.map((car) => {
                        const activeImage = activeImageIndex[car.id] || 0;

                        return (
                            <div key={car.id} className="card_car">
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to={`/cocheDetail/${car.id}`}
                                >
                                    <div className="conatainer_img_card_vehicle">
                                        <img
                                            src={car[`imgUrl_${activeImage + 1}`]}
                                            alt={car.title}
                                        />
                                    </div>

                                    <div className="container_title_car_vehicle">
                                        <h3 style={{ textAlign: "left" }}>{car.title}</h3>
                                    </div>

                                    <div className="container_price_card">
                                        <h4 style={{ textAlign: "left" }}>Price: {car.price}</h4>
                                    </div>

                                    <div className="btn_card_car">
                                        <p>Ver coche</p>
                                    </div>
                                </NavLink>

                                {/* Flechas para cambiar imagen */}
                                <div className="image-nav-arrows">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // Evitar que se navegue al hacer clic en las flechas
                                            handlePrevImage(car.id);
                                        }}
                                        className="arrow-btn left-arrow"
                                    >
                                        &#8249;
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // Evitar que se navegue al hacer clic en las flechas
                                            handleNextImage(car.id);
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
