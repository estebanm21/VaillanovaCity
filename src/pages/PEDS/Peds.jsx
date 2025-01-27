import "./peds.css"
import AOS from "aos"
import { useEffect } from "react"

export const Peds = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (

        <>
            <div data-aos="fade-right" className="container_principal_cards_peds">
                <h1 >Peds Y Multicaracter</h1>
                <div className="container_peds_cards">
                    <div className="card_peds_multicaracter">
                        <h4>Ped vanilla - 4,99€
                        </h4>
                        <p>Personaliza tu experiencia en VilanovaCity con una PED clásica y destaca en el
                            servidor!
                        </p>
                    </div>
                    <div className="card_peds_multicaracter">
                        <h4>Ped a elegir - 9,99€
                        </h4>
                        <p>Haz que tu personaje sea único eligiendo la PED que más te guste de nuestro
                            catálogo y marca tu estilo en VilanovaCity!
                        </p>
                    </div>


                    <div className="card_peds_multicaracter">
                        <h4>Ped única en el servidor - 14,99€

                        </h4>
                        <p>Destácate del resto con una PED exclusiva solo para ti en VilanovaCity y marca la
                            diferencia! El precio no incluye el costo del modelo de la ped en caso de ser de
                            pago.

                        </p>
                    </div>




                    <div className="card_peds_multicaracter">
                        <h4>Slot para segundo personaje - 9,99€


                        </h4>
                        <p>Desbloquea un nuevo personaje y vive más aventuras en VilanovaCity!


                        </p>
                    </div>

                    <div className="card_peds_multicaracter">
                        <h4>Slot para segundo personaje + Ped vanilla - 12,99€



                        </h4>
                        <p>Duplica tu diversión con un nuevo personaje y destaca con una PED vanilla
                            en VilanovaCity!

                        </p>
                    </div>

                    <div className="card_peds_multicaracter">
                        <h4>Slot para segundo personaje + Ped a elegir - 14,99€




                        </h4>
                        <p>Duplica tu diversión con un nuevo personaje y elige la PED que más te guste de
                            nuestra lista para destacar en VilanovaCity!

                        </p>
                    </div>




                    <div className="card_peds_multicaracter">
                        <h4>Slot para segundo personaje + Ped única - 19,99€




                        </h4>
                        <p>Expande tu aventura con un nuevo personaje y consigue una PED exclusiva solo
                            para ti, destacando como nadie en VilanovaCity! El precio no incluye el costo del
                            modelo de la ped en caso de ser de pago.


                        </p>
                    </div>









                </div>



            </div>

            <div className="container_tickets">
                <h1>Ábrenos un ticket y te
                    ayudaremos enseguida!
                </h1>
                <button class="button">Canal de tickets</button>
            </div>




        </>


    )
}
