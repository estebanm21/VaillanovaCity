import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./footer.css"

// Asegúrate de importar las imágenes de las redes sociales
import InstagramIcon from "../../assets/Instagram.png";
import YouTubeIcon from "../../assets/Youtube.png";
import TikTokIcon from "../../assets/TikTok.png";
import DiscordIcon from "../../assets/Discord.png";
import HomeIcon from "../../assets/home_icon.png";
import NormativaIcon from "../../assets/normativa_icon.png";
import DonacionesIcon from "../../assets/donaciones_icon.png";
import PostulacionIcon from "../../assets/postulaciones_icon.png";

const Footer = () => {
    return (
        <footer
            className="footer"
            style={{
                backgroundColor: "#262626",
                borderTop: "4px solid #a026d9",
                padding: "20px 0",
                color: "white",
            }}
        >
            {/* Logo */}
            <div className="text-center mb-4">
                <img style={{ width: "120px" }} src={Logo} alt="Logo" />
            </div>

            {/* Apartados del Navbar */}
            <div className="container text-center mb-4">
                <div className="row">
                    {/* Apartado Inicio */}
                    <div className="col-6 col-sm-3">
                        <NavLink to="/inicio" className="text-white text-decoration-none">
                            <img src={HomeIcon} alt="Inicio" style={{ width: "20px", marginRight: "8px" }} />
                            Inicio
                        </NavLink>
                    </div>

                    {/* Apartado Normativa */}
                    <div className="col-6 col-sm-3">
                        <div>
                            <button
                                className="btn text-white dropdown-toggle"
                                type="button"
                                id="navbarDropdownNormativa"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src={NormativaIcon} alt="Normativa" style={{ width: "20px", marginRight: "8px" }} />
                                Normativa
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownNormativa">
                                <li>
                                    <NavLink to="/normativa-general" className="dropdown-item">
                                        Normativa General
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/normativa-de-policias-locales" className="dropdown-item">
                                        Normativa Policia Local
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/normativa-cruz-vilanova" className="dropdown-item">
                                        Normativa Cruz Vilanova
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/normativa-de-bandas" className="dropdown-item">
                                        Normativa de Bandas
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Apartado Donaciones */}
                    <div className="col-6 col-sm-3">
                        <div>
                            <button
                                className="btn text-white dropdown-toggle"
                                type="button"
                                id="navbarDropdownDonaciones"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src={DonacionesIcon} alt="Donaciones" style={{ width: "20px", marginRight: "8px" }} />
                                Donaciones
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownDonaciones">
                                <li>
                                    <NavLink to="/como-donar" className="dropdown-item">
                                        Como Donar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vehiculos-vips" className="dropdown-item">
                                        Vehículos VIPS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/casas-premium" className="dropdown-item">
                                        Casas Premium
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/peds-multicaracter" className="dropdown-item">
                                        PEDS y Multicaracter
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Apartado Postulación */}
                    <div className="col-6 col-sm-3">
                        <NavLink to="/postulacion" className="text-white text-decoration-none">
                            <img src={PostulacionIcon} alt="Postulación" style={{ width: "20px", marginRight: "8px" }} />
                            Postulación
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Redes Sociales */}
            {/* Redes Sociales */}
            <div className="container text-center mb-4">
                <div className="row justify-content-center">
                    <div className="col-3 col-sm-3 col-md-2 social-icon">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="Instagram" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                    <div className="col-3 col-sm-3 col-md-2 social-icon">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={YouTubeIcon} alt="YouTube" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                    <div className="col-3 col-sm-3 col-md-2 social-icon">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={TikTokIcon} alt="TikTok" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                    <div className="col-3 col-sm-3 col-md-2 social-icon">
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <img src={DiscordIcon} alt="Discord" style={{ width: "50px", height: "50px" }} />
                        </a>
                    </div>
                </div>
            </div>



            {/* Línea de Degradado */}
            <div
                style={{
                    width: "90%",
                    margin: "0 auto",
                    height: "2px",
                    background: "linear-gradient(to right, #7523ab, #364bb3)",
                }}
            ></div>

            {/* Copyright */}
            <div style={{ fontSize: "14px", textAlign: "center" }}>
                <p style={{ maxWidth: "300px", width: "100%", margin: "20px auto" }}>Copyright © 2025 Vilanova City. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
