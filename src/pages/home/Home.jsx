// import Smoke from "../../components/Smoke/Smoke";
import "./home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import imgPrincipal from "../../assets/FotoWebHome.png"


import imgWhiteList from "../../assets/white_list.png"
import imgVelocidad from "../../assets/velocidad.png"
import imgBandas from "../../assets/bandas.png"
import imgOptimizacion from "../../assets/optimizacion.png"

import win from "../../assets/win.png"
import imgRol from "../../assets/rol_img.png"
import autoRol from "../../assets/auto_rol.png"
import romboImg from "../../assets/rombo.png"
import imgWork1 from "../../assets/imgwork1.png"
import manFeatures from "../../assets/man_features.png"

import SocialMedia from "../../components/socialMedia/SocialMedia"

import imgWork2 from "../../assets/imgwork2.png"

import Footer from "../../components/footer/Footer"


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

                        <h2 data-aos="fade-up" data-aos-duration="1000" className="title">El mejor servidor de Roleplay en GTA V</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" className="text_home">Experimenta un mundo único en FiveM, diseñado para hispanohablantes como tú. En VilanovaCity, la ciudad está llena de oportunidades y aventuras que esperan por ti. Sé parte de una comunidad vibrante donde tus decisiones definen tu camino.</p>

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

                    <div className="btn_players">
                        <div className="container_btn_active">
                            <div className="btn_active">

                            </div>
                        </div>
                        <div><h4>3230+</h4></div>
                        <div className="separator"></div>
                        <h6 style={{ textAlign: "center" }}>JUGADORES ACTIVOS</h6>
                    </div>

                    <div className="container_btns_servidor">

                        <div className="btn_servidor">
                            Únete al servidor
                        </div>

                        <div className="btn_descubre_mas">
                            Descubre más
                        </div>

                    </div>



                </div>





            </div >



            <div className="container_principal_beneficios_home">
                <div className="container_beneficios_home">

                    <div className="container_rombo">
                        <img src={romboImg} alt="" />
                    </div>

                    <div data-aos="flip-left" className="contariner_img_rol">
                        <img src={imgRol} alt="" />
                    </div>

                    <div data-aos="flip-right" className="contariner_img_autoRol">
                        <img src={autoRol} alt="" />
                    </div>


                </div>
            </div>

            <div className="container_list_features">

                <div className="container_man_features">
                    <img src={manFeatures} alt="" />
                </div>

                <div className="container_info_list">
                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgWhiteList} alt="" />
                            </div>

                        </div>
                        <h2>Con whitelist</h2>
                        <p>Nuestro servidor cuenta con whitelist, por lo que necesitarás ser aprobado para poder entrar.</p>
                    </div>

                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgBandas} alt="" />
                            </div>


                        </div>
                        <h2>Bandas gratis</h2>
                        <p>En nuestro servidor puedes crear una banda totalmente gratis</p>
                    </div>
                    <div data-aos="fade-up" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgVelocidad} alt="" />
                            </div>


                        </div>
                        <h2>Velocidades moderadas</h2>
                        <p>Los vehículos tienen velocidades moderadas para una
                            experiencia más auténtica.</p>
                    </div>

                    <div data-aos="flip-down" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={imgOptimizacion} alt="" />
                            </div>

                        </div>
                        <h2>Optimizado al maximo</h2>
                        <p>Disfruta de un servidor optimizado con FPS estables en
                            todo momento.</p>
                    </div>

                    <div data-aos="flip-down" duration="1000" className="card_feature">
                        <div className="container_title_card">
                            <div className="icon_title_card">
                                <img src={win} alt="" />
                            </div>

                        </div>
                        <h2>Sin pay to win
                        </h2>
                        <p>En nuestro servidor no necesitas pagar para progresar.</p>
                    </div>
                </div>

            </div>


            <div data-aos="zoom-in" className="container_work">
                <div className="containet_list_works">

                </div>

                <div data-aos="zoom-in" className="container_imgs_work">
                    <div className="container_img_work">
                        <img src={imgWork1} alt="" />
                    </div>
                    <div className="container_img_work">
                        <img src={imgWork2} alt="" />
                    </div>
                </div>
            </div>

            <SocialMedia />


            <Footer />


        </>

    );
}
