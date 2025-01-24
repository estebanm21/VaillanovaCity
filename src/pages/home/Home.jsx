// import Smoke from "../../components/Smoke/Smoke";
import "./home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import LogoDiscord from "../../components/LogoDiscord"
import LogoFiveM from "../../components/LogoFiveM"
import imgPrincipal from "../../assets/img_principal.png"
import Parallax from "../../components/Parallax";

import imgWhiteList from "../../assets/white_list.png"
import imgVelocidad from "../../assets/velocidad.png"
import imgBandas from "../../assets/bandas.png"
import imgOptimizacion from "../../assets/optimizacion.png"
import ParallaxFeatures from "../../components/Smoke/ParallasFeatures";
import logoYoutube from "../../assets/Youtube.png"
import logoDiscord_ from "../../assets/Discord.png"
import logoInstagram from "../../assets/Instagram.png"
import logoTikTok from "../../assets/TikTok.png"



export default function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div data-aos="fade-right" className="container_principal">

                <div className="bubbles">
                    <span style={{ "--i": 11 }}></span>
                    <span style={{ "--i": 12 }}></span>
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 21 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 17 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 28 }}></span>
                </div>


                <div className="container_info_home">



                    <div className="container_text">


                        <div data-aos="zoom-in" data-aos-duration="1500">


                            <div className="kode-text">Descubre Vilanova City</div> {/* Aquí puedes personalizar el texto */}
                        </div>

                        <h2 data-aos="fade-up" data-aos-duration="1000" className="title">El mejor servidor de <span style={{ color: "#BB33FF" }}>Roleplay en GTA V</span></h2>
                        <p data-aos="fade-up" data-aos-duration="1000" className="text_home">Experimenta un mundo único en FiveM, diseñado para hispanohablantes como tú.

                            En VilanovaCity, la ciudad está llena de oportunidades y aventuras que esperan por ti.
                            Sé parte de una comunidad vibrante donde tus decisiones definen tu camino.

                            Crea tu propia historia, vive momentos emocionantes, y sumérgete en una experiencia inolvidable que nunca deja de sorprenderte.</p>

                    </div>


                    <div data-aos="fade-up" className="container_image">
                        <img className="character" src={imgPrincipal} alt="" />
                        <div className="difuminar"></div>



                    </div>



                    <div className="bubbles">
                        <span style={{ "--i": 11 }}></span>
                        <span style={{ "--i": 12 }}></span>
                        <span style={{ "--i": 24 }}></span>
                        <span style={{ "--i": 10 }}></span>
                        <span style={{ "--i": 14 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 16 }}></span>
                        <span style={{ "--i": 19 }}></span>
                        <span style={{ "--i": 20 }}></span>
                        <span style={{ "--i": 22 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 15 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 17 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 28 }}></span>

                    </div>






                    {/* 
                <div data-aos="zoom-in" className="container_btns">
                    <a href="#" class="btn btn_discord_home me-2">
                        <LogoDiscord width={90} heigth="auto" />
                    </a>
                    <a href="#" class="btn btn_jugar_home"><LogoFiveM /></a>
                </div> */}

                </div>





            </div >

            <div className="container_list_features">

                <Parallax style={{ position: "absolute", lef: 0 }} />

                <div className="container_info_list">
                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgWhiteList} alt="" />
                            </div>
                            <h2>SIN WHITELIST</h2>
                        </div>
                        <p>Nuestro servidor no tiene whitelist, por lo tanto puedes entrar sin
                            ninguna complicación.</p>
                    </div>

                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgBandas} alt="" />
                            </div>
                            <h2>BANDAS GRATIS</h2>

                        </div>
                        <p>En nuestro servidor puedes crear una banda totalmente gratis</p>
                    </div>
                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgVelocidad} alt="" />
                            </div>

                            <h2>VELOCIDADES MODERADAS</h2>
                        </div>
                        <p>Los vehículos tienen velocidades moderadas para una
                            experiencia más auténtica.</p>
                    </div>

                    <div data-aos="flip-down" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgOptimizacion} alt="" />
                            </div>
                            <h2>OPTIMIZADO AL MÁXIMO</h2>
                        </div>
                        <p>Disfruta de un servidor optimizado con FPS estables en
                            todo momento.</p>
                    </div>
                </div>

            </div>


            <div className="container_socialmedia">
                <ParallaxFeatures />
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

    );
}
