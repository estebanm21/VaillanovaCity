import "./howToDonate.css"
import imgProducts from "../../assets/img_principal_products.png"
import { useEffect } from "react"
import AOS from "aos"
import paypalLogo from "../../assets/paypal.png"
import bizum from "../../assets/bizum.png"
import cripto from "../../assets/cripto.png"
import revolut from "../../assets/revolut.png"
import paysafecard from "../../assets/paysafecard.png"
import ParallaxDonation from "../../components/ParallaxDonation"
import carProduct from "../../assets/car_product.png"
import houseProduct from "../../assets/house_product.png"
import visor from "../../assets/visor.png"
import logoYoutube from "../../assets/Youtube.png"
import logoDiscord_ from "../../assets/Discord.png"
import logoInstagram from "../../assets/Instagram.png"
import logoTikTok from "../../assets/TikTok.png"
import mondeda from "../../assets/moneda.png"
import ParallaxFeaturesProducts from "../../components/ParallaxfeaturesProducts"
export default function HowToDonate() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div data-aos="fade-right" className="container_principal_products">
                <div className="bubbless">
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
                </div>
                <div className="container_products">

                    <div className="container_title_donations">
                        <h1>Dona y apoya a <span style={{ color: "#BB33FF" }}>Vilanova City</span></h1>
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
                <h1 style={{ textAlign: "center", }}><span style={{ borderBottom: "3px solid #bb33ff" }}>Metodos</span> de pago</h1>
                <div data-aos="fade-right" data-aos-duration="1000" className="container_payment_methods">

                    <div className="card">
                        <div className="container_principal_logo">
                            <div className="container_logo">
                                <img src={bizum} alt="" />
                            </div>
                            <h5>Bizum</h5>
                        </div>

                    </div>

                    <div className="card">
                        <div className="container_principal_logo">
                            <div className="container_logo">
                                <img src={cripto} alt="" />
                            </div>
                            <h5>Crypto</h5>
                        </div>

                    </div>

                    <div className="card">
                        <div className="container_principal_logo">
                            <div className="container_logo">
                                <img src={paypalLogo} alt="" />
                            </div>
                            <h5>Paypal</h5>
                        </div>

                    </div>

                    <div className="card">
                        <div className="container_principal_logo">
                            <div className="container_logo">
                                <img src={paysafecard} alt="" />
                            </div>
                            <h5>PaySafecard</h5>
                        </div>

                    </div>

                    <div className="card">
                        <div className="container_principal_logo">
                            <div className="container_logo">
                                <img src={revolut} alt="" />
                            </div>
                            <h5>Revolut</h5>
                        </div>

                    </div>
                </div>


            </div>


            <div className="container_principal_how_to_donate">



                <div className="container_parallax_donation">
                    <ParallaxDonation />
                </div>
                <h1 style={{ color: "#000", paddingTop: 120, textAlign: "center" }}>Como <span style={{ borderBottom: "3px solid #5C1A87" }}>donar</span></h1>
                <div data-aos="fade-right" className="container_how_to_donate">

                    <div className="card_donation">
                        <div className="container_img_and_icon">
                            <h3>Abre un ticket</h3>
                            <div className="container_img">
                                <box-icon color="#1A597B" size="60px" name='envelope-open'></box-icon>
                            </div>
                        </div>

                        <div className="container_description_card">
                            <p style={{ fontWeight: "bold" }}>Ábrenos un ticket en nuestro Discord</p>
                        </div>

                    </div>

                    <div className="card_donation">
                        <div className="container_img_and_icon">
                            <h3>Qué es lo que quieres</h3>
                            <div className="container_img">

                                <box-icon color="#1A597B" size="60px" name='question-mark'></box-icon>
                            </div>
                        </div>

                        <div className="container_description_card">
                            <p style={{ fontWeight: "bold" }}>Indícanos qué es lo que deseas obtener con tu donación.
                            </p>
                        </div>

                    </div>



                    <div className="card_donation">
                        <div className="container_img_and_icon">
                            <h3>Elige tu método de pago</h3>
                            <div className="container_img">

                                <box-icon color="#1A597B" size="60px" name='credit-card' type='solid' ></box-icon>
                            </div>
                        </div>

                        <div className="container_description_card">
                            <p style={{ fontWeight: "bold" }}>(Bizum, Crypto, PayPal, Paysafecard, o Revolut)
                            </p>
                        </div>

                    </div>





                    <div className="card_donation">
                        <div className="container_img_and_icon">
                            <h3>Realiza el pago</h3>
                            <div className="container_img">

                                <box-icon color="#1A597B" size="60px" type='solid' name='badge-check'></box-icon>
                            </div>
                        </div>

                        <div className="container_description_card">
                            <p style={{ fontWeight: "bold" }}>Realiza el pago según las instrucciones que te proporcionaremos.
                            </p>
                        </div>

                    </div>


                    <div className="card_donation">
                        <div className="container_img_and_icon">
                            <h3>Recibe</h3>
                            <div className="container_img">

                                <box-icon color="#1A597B" size="60px" name='package' type='solid' ></box-icon>
                            </div>
                        </div>

                        <div className="container_description_card">
                            <p style={{ fontWeight: "bold" }}>Recibe tu producto una vez confirmado el pago.

                            </p>
                        </div>

                    </div>








                </div>

            </div>

            <div style={{ textAlign: "center", width: "100%", padding: 20, background: "#ffffff" }}><p style={{ maxWidth: 700, width: "100%", margin: "auto", color: "#444" }}>Las donaciones a VillanovaCity son completamente voluntarias. Al realizar una donación, aceptas nuestra política de donaciones.</p></div>

            <div className="container_principal_other_products">
                <div data-aos="fade-up" className="container_other_products">

                    <div className="card_other_products">

                        <div className="header_card">
                            <div className="container_img_card_products">
                                <img src={carProduct} alt="" />
                            </div>
                        </div>

                        <div className="body_card">
                            <div className="container_title">
                                <h4>Coches VIP</h4>
                            </div>

                            <div className="container_price">
                                <div>Precio desde:</div>
                                <h1>4,99 € </h1>
                            </div>
                        </div>

                        <div className="footer_card">

                            <ul>
                                <li>¡Explora VilanovaCity con vehículos de colección únicos y exclusivos!
                                </li>
                                <li>Coche exclusivo unico en el servidos por: 24,99€
                                </li>
                            </ul>

                        </div>

                    </div>






                    <div className="card_other_products">

                        <div className="header_card">
                            <div className="container_img_card_products_house">
                                <img src={houseProduct} alt="" />
                            </div>
                        </div>

                        <div className="body_card">
                            <div className="container_title">
                                <h4>Casas Premium</h4>
                            </div>

                            <div className="container_price">
                                <div>Precio desde:</div>
                                <h1>29,99 € </h1>
                            </div>
                        </div>

                        <div className="footer_card">

                            <ul>
                                <li>¡Disfruta de casas exclusivas con mapeados únicos en VilanovaCity!

                                </li>

                            </ul>

                        </div>

                    </div>




                    <div className="card_other_products">

                        <div className="header_card_visor">
                            <div className="container_img_card_products_visor">
                                <img src={visor} alt="" />
                            </div>
                        </div>

                        <div className="body_card">
                            <div className="container_title">
                                <h4>PEDS y Multicaracter</h4>
                            </div>

                            <div className="container_price">
                                <div>Precio desde:</div>
                                <h1>4,99 € </h1>
                            </div>
                        </div>

                        <div className="footer_card">

                            <ul>
                                <li>¡Crea y disfruta de múltiples personajes únicos en VilanovaCity!
                                </li>
                                <li>Antes de crear tu segundo personaje, asegúrate de revisar la normativa de
                                    multipersonaje.
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </div>


            <div className="container_socialmedia">
                <ParallaxFeaturesProducts />
                <h1 data-aos="fade-right" style={{ textAlign: "center", color: "#fff", marginTop: 50, marginBottom: 50 }}>Únete a nuestra comunidad</h1>

                <div className="container_cards_socialmedia">

                    <div data-aos="flip-down" className="border_card_social_media_discord">
                        <div className="card_body_discord">

                            <div className="container_title_card">

                                <div className="container_logo_card">
                                    <img src={logoDiscord_} alt="" />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", marginLeft: 20 }}>
                                    <h5 style={{ color: "#94a8ae" }}>Canal oficial</h5>
                                    <h5 style={{ color: "#e5ffff" }}>DISCORD</h5>
                                </div>
                            </div>

                        </div>
                        <div className="difuminar_card"></div>
                        <a href="#" className="btn_suscripcion_discord">
                            <h4>Ingresar</h4>
                        </a>
                    </div>



                    <div data-aos="flip-down" className="border_card_social_media">
                        <div className="card_body">

                            <div className="container_title_card">

                                <div className="container_logo_card">
                                    <img src={logoYoutube} alt="" />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", marginLeft: 20 }}>
                                    <h5 style={{ color: "#94a8ae" }}>Canal oficial</h5>
                                    <h5 style={{ color: "#e5ffff" }}>YOUTUBE</h5>
                                </div>
                            </div>

                        </div>
                        <div className="difuminar_card"></div>
                        <a href="#" className="btn_suscripcion">
                            <h4>Suscribirse</h4>
                        </a>
                    </div>



                    <div data-aos="flip-down" className="border_card_social_media_instagram">
                        <div className="card_body_instagram">

                            <div className="container_title_card">

                                <div className="container_logo_card">
                                    <img src={logoInstagram} alt="" />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", marginLeft: 20 }}>
                                    <h5 style={{ color: "#94a8ae" }}>Instagram oficial</h5>
                                    <h5 style={{ color: "#e5ffff" }}>INSTAGRAM</h5>
                                </div>
                            </div>

                        </div>
                        <div className="difuminar_card"></div>
                        <a href="#" className="btn_suscripcion_instagram">
                            <h4>Suscribirse</h4>
                        </a>
                    </div>




                    <div data-aos="flip-down" className="border_card_social_media_tiktok">
                        <div className="card_body_tiktok">

                            <div className="container_title_card">

                                <div className="container_logo_card">
                                    <img src={logoTikTok} alt="" />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", marginLeft: 20 }}>
                                    <h5 style={{ color: "#94a8ae" }}>TikTok oficial</h5>
                                    <h5 style={{ color: "#e5ffff" }}>TIKTOK</h5>
                                </div>
                            </div>

                        </div>
                        <div className="difuminar_card"></div>
                        <a href="#" className="btn_suscripcion_tiktok">
                            <h4>Suscribirse</h4>
                        </a>
                    </div>







                </div>
            </div>

        </>
    )
}