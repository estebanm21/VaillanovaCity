import "./peds.css"
import AOS from "aos"
import { useEffect } from "react"
import borderTitle from "../../assets/border_title.png"
import carPed1 from "../../assets/ped_vanilla.png"
import carPed2 from "../../assets/ped_2.png"
import carPed3 from "../../assets/ped_3.png"
import carPed4 from "../../assets/ped_4.png"
import carPed5 from "../../assets/ped_5.png"
import carPed6 from "../../assets/ped_6.png"
import carPed7 from "../../assets/ped_7.png"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import womenPeds from "../../assets/woman_peds.png"

export const Peds = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (

        <>
            <div data-aos="fade-right" className="container_principal_cards_peds">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Peds y multicaracter</h1>
                    <div className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>



                <div className="container_women_peds">
                    <img src={womenPeds} alt="" />
                </div>




                <div className="container_peds_cards">

                    <div className="card_ped">
                        <img src={carPed1} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed2} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed3} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed4} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed5} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed6} alt="" />
                    </div>
                    <div className="card_ped">
                        <img src={carPed7} alt="" />
                    </div>



                </div>



            </div>

            <SocialMedia />

            {/* <div className="container_tickets">
                <h1>Ábrenos un ticket y te
                    ayudaremos enseguida!
                </h1>
                <button class="button">Canal de tickets</button>
            </div> */}






        </>


    )
}
