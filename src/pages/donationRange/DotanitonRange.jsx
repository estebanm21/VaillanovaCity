import "./donationrange.css"
import crow from "../../assets/crow.png"
import medal from "../../assets/medal.png"
import trophy from "../../assets/trophy.png"
import start from "../../assets/start.png"
import flash from "../../assets/flash.png"
import AOS from "aos"
import { useEffect } from "react"
export const DotanitonRange = () => {


    useEffect(() => {

        AOS.init()

    }, [])
    return (
        <div className="container_principal_peds">
            <h1 data-aos="fade-up" style={{ color: "#000", textAlign: "center", paddingTop: 80 }}>Rango de donación</h1>
            <div data-aos="fade-up" className="container_peds">
                <div className="card_peds">
                    <div className="container_logo_peds">
                        <img src={medal} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador VIP</h4>
                    </div>

                    <div className="container_price">
                        <h1>0-50€</h1>
                    </div>
                    <div className="container_description_peds">

                    </div>
                </div>

                <div className="card_peds">
                    <div className="container_logo_peds">
                        <img src={trophy} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador VIP+</h4>
                    </div>

                    <div className="container_price">
                        <h1>60-100€</h1>
                    </div>
                    <div className="container_description_peds">

                    </div>
                </div>

                <div className="card_peds">
                    <div className="container_logo_peds">
                        <img src={flash} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador Élite</h4>
                    </div>

                    <div className="container_price">
                        <h1>150-200€</h1>
                    </div>
                    <div className="container_description_peds">

                    </div>
                </div>

                <div className="card_peds">
                    <div className="container_logo_peds">
                        <img src={crow} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador Supremo</h4>
                    </div>

                    <div className="container_price">
                        <h1>250-400€</h1>
                    </div>
                    <div className="container_description_peds">

                    </div>
                </div>


                <div className="card_peds">
                    <div className="container_logo_peds">
                        <img src={start} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador Legendario</h4>
                    </div>

                    <div className="container_price">
                        <h1>500+ €</h1>
                    </div>
                    <div className="container_description_peds">

                    </div>
                </div>
            </div>
        </div>
    )
}
