import "./cars.css"
import imgCover from "../../assets/img_principal_cars.jpg"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import car_1 from "../../assets/car_product.png"
import car_2 from "../../assets/car_product_2.png"
import boat_2 from "../../assets/boat_2.png"
import boat_1 from "../../assets/boat_1.png"
import AOS from "aos"
import LogoDiscord from "../../components/LogoDiscord";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SailingIcon from '@mui/icons-material/Sailing';


// Import Swiper styles
import 'swiper/css';
import { useEffect } from "react"

export default function Cars() {

    useEffect(() => {

        AOS.init()

    }, [])


    const backgroundStyle = {
        backgroundImage: `url(${imgCover})`
    }

    const carImages = [
        { id: 1, title: "Coches VIPS: a partir de 4,99€", description: "Disfruta de coches VIP basados en modelos reales en VilanovaCity! Vehículos únicos con gran diseño y rendimiento para destacar en el servidor", src: car_1, alt: "Car 1" },
        { id: 2, title: "Coche único: por 24,99€", description: "Quieres algo totalmente exclusivo? pide un coche único en el servidor, solo para ti. Nadie mas lo tendrá!", src: car_2, alt: "Car 2" },
        ,
    ];


    // ======================================

    const barcos = [
        { id: 1, title: "Barcos VIP a partir de 4,99€", description: "Accede a una selección especial de embarcaciones lujosas y personalizables", src: boat_1, alt: "boat   1" },
        { id: 2, title: "Barco con sistema de casa: a partir de 12,99€", description: "Convierte tu barco en un espcio único con áreas personalizadas para vivir y disfrutar del mar", src: boat_2, alt: "boat 2" },
        ,
    ];





    return <>

        <div data-aos="fade-right" style={backgroundStyle} className="container_principal_vehiculos_vips">
            <h1>VEHICULOS VIP
            </h1>
        </div>
        <div data-aos="fade-right" className="container_principal_coches">
            <div className="container_title_cars">
                <h2>Coches</h2>
                <p>Opciones disponibles</p>
            </div>
            <div className="container_coches">


                {carImages.map((image) => (

                    <div key={image.id} className="card_cars">
                        <div className="info_card">
                            <h3>{image.title}</h3>
                            <p>
                                {
                                    image.description
                                }
                            </p>
                        </div>
                        <div className="container_img_coche" style={{ width: 300 }}>
                            <img src={image.src} alt={image.alt} style={{ width: "100%", borderRadius: "10px" }} />
                        </div>
                    </div>

                ))}


            </div>
        </div>

        <div data-aos="fade-up" className="container_principal_how_to_get_a_car">
            <h2>Cómo obtener tu coche VIP?
            </h2>
            <div className="container_how_to_get_a_car">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="fff"
                        >
                            <h5>1.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot style={{ background: "#7487d9" }}>
                                {/* <FastfoodIcon /> */}
                                <LogoDiscord />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Visita nuestro Discord
                            </Typography>
                            <Typography> y accede al apartado de coches VIP.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>2.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <ArrowForwardIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Elige
                            </Typography>
                            <Typography>Elige la opción que más te guste.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>3.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <ConfirmationNumberIcon />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Ticket
                            </Typography>
                            <Typography>Ábrenos un ticket.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>4.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <DirectionsCarIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Recibe
                            </Typography>
                            <Typography> tu vehículo en el servidor y empieza a disfrutarlo.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>

                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot style={{ background: "transparent" }} color="secondary">
                                {/* <SailingIcon /> */}
                                <div style={{ textAlign: "center", width: "100%" }}>

                                    <div class="relative inline-block w-full py-3 modgp">
                                        <div class="relative">
                                            <button
                                                class="inline-flex items-center justify-center bg-primary text-sm text-white font-medium rounded-lg enabled:hover:bg-primary-dark enabled:hover:shadow-md enabled:active:bg-primary-dark enabled:focus:bg-primary-dark focus:outline-none px-4 py-2 w-full py-2.5 relative disabled:opacity-50 transition-all"
                                                type="button"
                                            >
                                                <div class="w-full flex items-center justify-center">
                                                    Descubre tu Coche VIP
                                                </div>
                                            </button>
                                        </div>
                                        <div class="absolute inset-0 pointer-events-none">
                                            <div
                                                id="style-AQliM"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-AQliM"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-WCb99"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-WCb99"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-dBNZV"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-dBNZV"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="7"
                                                    width="7"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-tiisO"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-tiisO"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-re9B7"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-re9B7"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-BKG4G"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-BKG4G"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="5"
                                                    width="5"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-NaoVe"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-NaoVe"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-pwIlv"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-pwIlv"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-QmcAd"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-QmcAd"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="5"
                                                    width="5"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-VG2eL"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-VG2eL"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </TimelineDot>

                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>



                        </TimelineContent>

                    </TimelineItem>
                </Timeline>
            </div>
        </div >


        <div data-aos="fade-right" className="container_principal_coches">
            <div className="container_title_cars">
                <h2>Barcos</h2>
                <p>Explora los mares de VilanovaCity con nuestros barcos VIP. Disfruta de los yates
                    con un diseño impresionante y un rendimiento fluido para navegar con estilo y
                    comodidad.
                </p>
            </div>
            <div className="container_coches">


                {barcos.map((image) => (

                    <div key={image.id} className="card_cars">
                        <div className="info_card">
                            <h3>{image.title}</h3>
                            <p>
                                {
                                    image.description
                                }
                            </p>
                        </div>
                        <div className="container_img_coche" style={{ width: 300 }}>
                            <img src={image.src} alt={image.alt} style={{ width: "100%", borderRadius: "10px" }} />
                        </div>
                    </div>

                ))}


            </div>
        </div>

        <div data-aos="fade-up" className="container_principal_how_to_get_a_car">
            <h2>Cómo obtener tu Barco VIP?
            </h2>
            <div className="container_how_to_get_a_car">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="fff"
                        >
                            <h5>1.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot style={{ background: "#7487d9" }}>
                                {/* <FastfoodIcon /> */}
                                <LogoDiscord />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Visita nuestro Discord
                            </Typography>
                            <Typography> Visita nuestro Discord y accede al apartado de Barcos VIP</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>2.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <ArrowForwardIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Elige
                            </Typography>
                            <Typography>Elige la opción que más te guste.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>3.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <ConfirmationNumberIcon />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Ticket
                            </Typography>
                            <Typography>Ábrenos un ticket.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="fff"
                        >
                            <h5>4.</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <SailingIcon />

                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Recibe
                            </Typography>
                            <Typography> Recibe tu barco en el servidor y empieza a disfrutarlo</Typography>

                        </TimelineContent>

                    </TimelineItem>


                    <TimelineItem>

                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot style={{ background: "transparent" }} color="secondary">
                                {/* <SailingIcon /> */}
                                <div style={{ textAlign: "center", display: "flex", padding: 20, flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 30 }}>

                                    <div class="relative inline-block w-full py-3 modgp">
                                        <div class="relative">
                                            <button
                                                class="inline-flex items-center justify-center bg-primary text-sm text-white font-medium rounded-lg enabled:hover:bg-primary-dark enabled:hover:shadow-md enabled:active:bg-primary-dark enabled:focus:bg-primary-dark focus:outline-none px-4 py-2 w-full py-2.5 relative disabled:opacity-50 transition-all"
                                                type="button"
                                            >
                                                <div class="w-full flex items-center justify-center">
                                                    Descubre tu Barco VIP
                                                </div>
                                            </button>
                                        </div>
                                        <div class="absolute inset-0 pointer-events-none">
                                            <div
                                                id="style-AQliM"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-AQliM"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-WCb99"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-WCb99"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-dBNZV"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-dBNZV"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="7"
                                                    width="7"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-tiisO"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-tiisO"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }} fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-re9B7"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-re9B7"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-BKG4G"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-BKG4G"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="5"
                                                    width="5"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-NaoVe"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-NaoVe"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="6"
                                                    width="6"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-pwIlv"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-pwIlv"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-QmcAd"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-QmcAd"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="5"
                                                    width="5"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                id="style-VG2eL"
                                                class="pointer-events-none absolute z-10 animate-magic-sparkle style-VG2eL"
                                            >
                                                <svg
                                                    style={{ filter: "drop-shadow(rgb(96, 165, 250) 0px 0px 2px)" }}
                                                    fill="none"
                                                    viewBox="0 0 68 68"
                                                    height="9"
                                                    width="9"
                                                    class="animate-spin-slow"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </TimelineDot>

                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>



                        </TimelineContent>

                    </TimelineItem>

                </Timeline>

            </div>
        </div>


    </>
}
