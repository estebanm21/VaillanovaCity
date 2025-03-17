import "./cars.css"

import borderTitle from "../../assets/border_title.png"
import { NavLink } from "react-router-dom"
import carImg from "../../assets/car_card.png"

import { useEffect, useState } from "react"
import { getCars } from "../../helpers/getVehicles"

export function Cars() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        setCars(getCars())
    }, [])






    return (
        <div className="container_principal_cars">

            <div className="container_title_cars_disponibles">
                <h1 style={{ textAlign: "center" }}>Carros disponibles</h1>
                <div className="container_border_title_cars_disponibles">
                    <img src={borderTitle} alt="" />
                </div>
            </div>



            <div className="container_card_cars">

                {/* card 1 */}

                {
                    cars.map((car) => (

                        <div key={car.id} className="card_car">
                            <div className="conatainer_img_card_vehicle">
                                <img src={car.imgUrl} alt="" />
                            </div>

                            <div className="container_title_car_vehicle">
                                <h3>{car.title}</h3>
                            </div>

                            <div className="container_price_card">
                                <h4> Price: {car.price} $</h4>
                            </div>

                            <div className="container_Maximum_speed">
                                <p>Maximum Speed: <span> {car.maximunSpeed} mph</span></p>
                            </div>

                            <div className="container_text_car_vehicle">
                                <p>{car.description}</p>
                            </div>

                            <NavLink className="btn_card_car" to="/coches">

                                <p>Obtener</p>

                            </NavLink>
                        </div>
                    ))
                }

            </div>

        </div>
    )


}
