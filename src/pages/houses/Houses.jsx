import "./houses.css"

import { NavLink } from "react-router-dom"

import manHouses from "../../assets/man_features.png"
import AOS from "aos"

import { useEffect, useState } from "react"
import { getHouses } from "../../helpers/getHouses"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Footer from "../../components/footer/Footer"




function Houses() {

    // const [houses, setHouses] = useState([])

    // useEffect(() => {
    //     setHouses(getHouses())
    // }, [])

    // useEffect(() => {
    //     AOS.init()
    // }, [])
    return (
        <>
            {/* <div data-aos="fade-right" className="container_principal_houses">


                <div className="container_title_houses_principal">
                    <h1>Casas premium</h1>
                </div>


                <div className="container_text_houses">
                    <p>¿Quieres destacar entre la multitud y conducir con estilo? Nuestra exclusiva colección de vehículos VIP te ofrece la oportunidad de experimentar el lujo y la exclusividad como nunca antes. Desde deportivos de alta gama hasta limusinas elegantes, tenemos el vehículo perfecto para cada ocasión.</p>
                </div>

                <div className="container_img_man_houses">
                    <img src={manHouses} alt="" />
                </div>


                <div className="container_card_cars"> */}

            {/* card  */}

            {/* {
                        houses.map((house) => (

                            <div key={house.id} className="card_car">
                                <div className="conatainer_img_card_vehicle">
                                    <img src={house.imgUrl} alt="" />
                                </div>

                                <div className="container_title_car_vehicle">
                                    <h3>{house.tilte}</h3>
                                </div>

                                <div className="container_price_card">
                                    <h4> Price: {house.price} $</h4>
                                </div>



                                <div className="container_text_car_vehicle">
                                    <p>{house.description}</p>
                                </div>

                                <NavLink className="btn_card_car" to="/coches">

                                    <p>Obtener</p>

                                </NavLink>
                            </div>
                        ))
                    } */}

            {/* </div>






            </div> */}

            <div className="container text-center mt-5">
                <h1>Disponible muy pronto...</h1>
            </div>


            <SocialMedia />

            <Footer />






        </>


    )
}

export default Houses