import "./vehicles.css"

import { NavLink } from "react-router-dom"
import carImg from "../../assets/car_card.png"
import barcoImg from "../../assets/barco_card.png"
import AvionImg from "../../assets/avion_card.png"
import SocialMedia from "../../components/socialMedia/SocialMedia"

export default function Vehiculos() {



    return <>

        <div className="container_principal_vehicles">


            <div className="container_title_vehicles_principal">
                <h1>Vehiculos VIP</h1>
            </div>


            <div className="container_text_vehicles">
                <p>¿Quieres destacar entre la multitud y conducir con estilo? Nuestra exclusiva colección de vehículos VIP te ofrece la oportunidad de experimentar el lujo y la exclusividad como nunca antes. Desde deportivos de alta gama hasta limusinas elegantes, tenemos el vehículo perfecto para cada ocasión.</p>
            </div>
            <div className="container_card_vehicles">

                {/* card 1 */}

                <div className="card_vehicles">
                    <div className="conatainer_img_card_vehicle">
                        <img src={carImg} alt="" />
                    </div>

                    <div className="container_title_car_vehicle">
                        <h3>Carros</h3>
                    </div>

                    <div className="container_text_car_vehicle">
                        <p> Estos vehículos están diseñados para la velocidad y el rendimiento. Suelen tener motores potentes, diseños aerodinámicos y una conducción ágil. Son ideales para carreras y persecuciones a alta velocidad.</p>
                    </div>

                    <NavLink to="/coches">
                        <div className="btn_card_vehicles">
                            <p>Ver catalogo</p>
                        </div>
                    </NavLink>
                </div>



                {/* card 2 */}

                <div className="card_vehicles">
                    <div className="conatainer_img_card_vehicle">
                        <img src={barcoImg} alt="" />
                    </div>

                    <div className="container_title_car_vehicle">
                        <h3>Barcos</h3>
                    </div>

                    <div className="container_text_car_vehicle">
                        <p> Estos barcos están diseñados para el ocio y la diversión. Suelen tener diseños elegantes, interiores lujosos y una gran velocidad. Son perfectos para navegar por las aguas de GTA V, participar en actividades acuáticas y disfrutar de las vistas.</p>
                    </div>

                    <div className="btn_card_vehicles">
                        <p>Ver catalogo</p>
                    </div>
                </div>



                {/* card 3 */}
                <div className="card_vehicles">
                    <div className="conatainer_img_card_vehicle">
                        <img src={AvionImg} alt="" />
                    </div>

                    <div className="container_title_car_vehicle">
                        <h3>Aviones</h3>
                    </div>

                    <div className="container_text_car_vehicle">
                        <p> Estos aviones están diseñados para el transporte de pasajeros y carga. Suelen tener una gran capacidad, un diseño elegante y un interior espacioso. Son ideales para viajes largos y misiones de transporte.</p>
                    </div>

                    <div className="btn_card_vehicles">
                        <p>Ver catalogo</p>
                    </div>
                </div>





            </div>

        </div>


        <SocialMedia />


    </>
}

