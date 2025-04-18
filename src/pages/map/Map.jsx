import React, { useState, useEffect, useRef } from "react";
import "./map.css";
import MapaLocales from "../../assets/mapa_principal.png";
import pin from "../../assets/pin_mapa.png";
import Aos from "aos";

import imgWomanModal from "../../assets/woman_modal.png"
import manMapa from "../../assets/man_mapa.png"
import Footer from "../../components/footer/Footer"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import { getLocales } from "../../helpers/getLocales";


export default function Map() {
    // Información de los locales con coordenadas de los pines


    // Estado para manejar qué local se muestra al pasar el mouse
    const [localSeleccionado, setLocalSeleccionado] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [modalGrandeAbierto, setModalGrandeAbierto] = useState(false);
    const modalRef = useRef(null);
    const [locales, setLocales] = useState([])

    // Función para abrir el modal cuando se hace clic en un pin
    const handlePinClick = (local) => {
        if (modalGrandeAbierto) {
            // Si el modal grande está abierto, cerramos el modal grande al hacer clic en el pin
            setModalGrandeAbierto(false);
            setLocalSeleccionado(local);
            setModalAbierto(true); // Abrimos solo el modal pequeño
        } else {
            // Si el modal grande no está abierto, gestionamos el modal pequeño
            if (modalAbierto && localSeleccionado.id === local.id) {
                setModalAbierto(false);
                setLocalSeleccionado(null);
            } else {
                setModalAbierto(true);
                setLocalSeleccionado(local);
            }
        }
    };

    // Animaciones AOS
    useEffect(() => {
        Aos.init();
    }, []);


    useEffect(() => {
        setLocales(getLocales())
    }, [])

    // Función para abrir el modal grande
    const handleVerMasClick = () => {
        setModalGrandeAbierto(true);
        setModalAbierto(false); // Cerramos el modal pequeño
    };

    // Función para cerrar el modal grande
    const closeModalGrande = () => {
        setModalGrandeAbierto(false);
        setModalAbierto(false); // Cerramos también el modal pequeño
        setLocalSeleccionado(null); // Restablecer selección
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setModalAbierto(false); // Cierra el modal pequeño si el clic es fuera de él
                setLocalSeleccionado(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>        <div className="container_principal_mapa_y_locales">
            <div className="container_map_mapa">
                <img src={manMapa} alt="" />
            </div>
            <div className="container_title_mapa_y_locales">
                <h1>Mapa y locales</h1>
            </div>

            <div className="container_text_mapa_locales">
                <p>
                    Nuestro mapa interactivo te permite descubrir todos los secretos y
                    lugares de interés de Vilanova City. Encuentra negocios, residencias,
                    puntos de encuentro y mucho más.
                </p>
            </div>

            <div className="buton_ver_locales">
                <p>Ver locales</p>
            </div>

            <div className="container_img_mapa" style={{ position: "relative" }}>
                <img src={MapaLocales} alt="Mapa de locales" />

                {/* Colocar los pines */}
                {locales.map((local) => (
                    <div
                        key={local.id}
                        className="pin"
                        style={{
                            position: "absolute",
                            top: local.coordenadas.top,
                            left: local.coordenadas.left,
                            cursor: "pointer",

                            width: "22px"
                        }}
                        onClick={() => handlePinClick(local)} // Abre o cierra el modal al hacer clic
                    >
                        <img
                            src={pin} // Imagen del pin
                            alt={`Pin ${local.nombre}`}
                            style={{
                                width: "100%",




                            }}
                        />
                    </div>
                ))}

                {/* Mostrar la información del local seleccionado */}
                {modalAbierto && localSeleccionado && (
                    <div
                        data-aos="zoom-in"
                        className="info-local"
                        ref={modalRef}
                        style={{
                            position: "fixed", // Usamos fixed para posicionarlo con respecto a la ventana
                            top: "50%", // Centrado verticalmente
                            left: "50%", // Centrado horizontalmente
                            transform: "translate(-50%, -50%)", // Desplazamos el modal para que esté perfectamente centrado
                            background: "#262626",
                            color: "white",
                            padding: "20px",
                            border: "3px solid #525252",
                            borderRadius: "8px",
                            width: "300px",
                            zIndex: 100,
                        }}
                    >
                        <div className="container_img_card_local">
                            <img src={localSeleccionado.imagen} alt={localSeleccionado.nombre} />
                        </div>
                        <h4>{localSeleccionado.nombre}</h4>
                        <div
                            className="btn_card_local"
                            onClick={handleVerMasClick} // Abre el modal grande
                        >
                            Ver más
                        </div>
                    </div>
                )}


                {/* Modal Grande */}
                {modalGrandeAbierto && localSeleccionado && (
                    <div className="container_modal_and_image">
                        <div className="container_woman_modal">
                            <img src={imgWomanModal} alt="" />
                        </div>
                        <div className="modal-grande">

                            <div className="modal-header">
                                <h3>{localSeleccionado.nombre}</h3>
                                <span
                                    className="close-btn"
                                    onClick={closeModalGrande} // Cerrar el modal grande solo cuando se hace clic en la "X"
                                >
                                    X
                                </span>
                            </div>
                            <div className="modal-body">
                                <div className="modal-img">
                                    <img src={localSeleccionado.imagen} alt={localSeleccionado.nombre} />
                                </div>
                                <div className="modal-info">
                                    <p>{localSeleccionado.descripcion}</p>
                                    <p style={{ fontSize: "25px", fontWeight: "500" }}>Precio: {localSeleccionado.precio}</p>
                                    <button className="btn-obtener-local">Obtener local</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
            {/* <SocialMedia /> */}

            <Footer />

        </>

    );
}
