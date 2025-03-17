import "./howToDonate.css"
import imgProducts from "../../assets/img_principal_products.png"
import { useEffect } from "react"
import AOS from "aos"
import paypalLogo from "../../assets/paypal.png"
import bizum from "../../assets/bizum.png"
import cripto from "../../assets/cripto.png"
import revolut from "../../assets/revolut.png"
import paysafecard from "../../assets/paysafecard.png"

import mondeda from "../../assets/moneda.png"

import borderTitle from "../../assets/border_title.png"
import card1 from "../../assets/card_1.png"
import card2 from "../../assets/card_2.png"
import card3 from "../../assets/card_3.png"
import card4 from "../../assets/card_4.png"
import card5 from "../../assets/card_5.png"

import SocialMedia from "../../components/socialMedia/SocialMedia"

import { DotanitonRange } from "../../pages/donationRange/DotanitonRange"

import WomanHowtodonate from "../../assets/woman_howtodonate.png"


export default function HowToDonate() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div data-aos="fade-right" className="container_principal_products">
                {/* <div className="bubbless">
                    <span style={{ "--i": 11, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 12, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 24, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 10, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 14, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 23, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 18, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 16, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 19, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 20, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 22, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 25, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 18, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 21, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 15, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 13, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 26, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 17, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 13, backgroundImage: `url(${mondeda})` }}></span>
                    <span style={{ "--i": 28, backgroundImage: `url(${mondeda})` }}></span>
                </div> */}
                <div className="container_products">

                    <div className="container_title_donations">
                        <h1>Dona y apoya a Vilanova City</h1>
                        <p>Tu apoyo nos ayuda a mantener los costos del servidor, implementar nuevas
                            funciones y mejorar la experiencia para todos los jugadores.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="container_img_products">
                        <div className="container_moneda_1">
                            <img src={mondeda} alt="" />
                        </div>
                        <div className="container_moneda_2">
                            <img src={mondeda} alt="" />
                        </div>
                        <div className="container_moneda_3">
                            <img src={mondeda} alt="" />
                        </div>
                        <img src={imgProducts} alt="" />
                        <div className="difuminar_img_products"></div>
                    </div>
                </div>
            </div>


            <div className="container_principal_payment_methods">
                <div className="container_title_pago">
                    <h1 style={{ textAlign: "center", }}>Metodos de pago</h1>
                    <div className="container_border_title">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="container_payment_methods">


                    <div className="container_logo_pago">
                        <img src={bizum} alt="" />
                    </div>




                    <div className="container_logo_pago">
                        <img src={cripto} alt="" />
                    </div>






                    <div className="container_logo_pago">
                        <img src={paypalLogo} alt="" />
                    </div>




                    <div className="container_logo_pago">
                        <img src={paysafecard} alt="" />
                    </div>




                    <div className="container_logo_pago">
                        <img src={revolut} alt="" />
                    </div>


                </div>


            </div>


            <div className="container_principal_how_to_donate">

                <div className="container_img_woman_how_to_donate">
                    <img src={WomanHowtodonate} alt="" />
                </div>


                <div className="container_title_pago">
                    <h1 style={{ textAlign: "center" }}>¿Como donar?</h1>
                    <div className="container_border_title">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" className="container_how_to_donate">

                    <div className="card_donation">
                        <img src={card1} alt="" />

                    </div>

                    <div className="card_donation">
                        <img src={card2} alt="" />

                    </div>



                    <div className="card_donation">
                        <img src={card3} alt="" />

                    </div>




                    <div className="card_donation">
                        <img src={card4} alt="" />

                    </div>

                    <div className="card_donation">
                        <img src={card5} alt="" />

                    </div>








                </div>

            </div>



            <div className="container_principal_other_products">
                <div className="container_title_pago">
                    <h1 style={{ textAlign: "center" }}>Rango de donación</h1>
                    <div className="container_border_title">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>

                <DotanitonRange />

            </div>

            <SocialMedia />


        </>
    )
}