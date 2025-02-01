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
            <h1 data-aos="fade-up" style={{ color: "#fff", textAlign: "center", paddingTop: 80 }}>Rango de donación</h1>
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
                        <ul>
                            <li> Rol exclusivo en Discord</li>
                        </ul>
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
                        <h1>50-100€</h1>
                    </div>
                    <div className="container_description_peds">
                        <ul>
                            <li>Rol exclusivo en Discord</li>
                            <li>Acceso exclusivo a sorteos mensuales donde solo los Donadores VIP+ podrán participar</li>
                        </ul>

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
                        <h1>100-200€</h1>
                    </div>
                    <div className="container_description_peds">
                        <ul>
                            <li>Rol exclusivo en Discord</li>
                            <li>Acceso exclusivo a sorteos mensuales donde solo los Donadores Élite podrán participar</li>
                            <li>Vehículo exclusivo de Donador Élite</li>
                            <li>Acceso a los eventos únicos</li>
                        </ul>

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
                        <h1>200-400€</h1>
                    </div>
                    <div className="container_description_peds">
                        <ul>
                            <li>Rol exclusivo en Discord</li>
                            <li>Acceso exclusivo a sorteos mensuales donde solo los Donadores Supremo podrán participar</li>
                            <li>Vehículo exclusivo de Donador Supremo</li>
                            <li>Acceso a los eventos únicos</li>
                            <li>Mención en la web del servidor</li>
                            <li>Ropa donador exclusiva</li>
                        </ul>

                    </div>
                </div>


                <div className="card_peds">
                    <div className="container_logo_peds_star">
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
                        <img src={start} alt="" />
                    </div>
                    <div className="container_title_peds">
                        <h4>Donador Legendario</h4>
                    </div>

                    <div className="container_price">
                        <h1>500+ €</h1>
                    </div>
                    <div className="container_description_peds">
                        <ul>
                            <li>Rol exclusivo en Discord.</li>
                            <li>Acceso exclusivo a sorteos mensuales donde solo los Donadores Legendarios podrán participar.</li>
                            <li>Vehículo exclusivo de Donador Legendario.</li>
                            <li>Yate y jet privado exclusivos.</li>
                            <li>Acceso prioritario a eventos únicos.</li>
                            <li>Mención destacada en la web del servidor.</li>
                            <li>Conjunto de ropa exclusiva para donadores legendarios.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
