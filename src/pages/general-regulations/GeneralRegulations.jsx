import AOS from 'aos';
import './generalRegulations.css';
import { useEffect } from 'react';
import borderTitle from "../../assets/border_title.png"
import manGenralRegulations from "../../assets/man_general_regulations.png"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Footer from "../../components/footer/Footer"
export const GeneralRegulations = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div data-aos="fade-right" className="regulations-container">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Normativa General</h1>
                    <div className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="" />
                    </div>
                </div>

                <div className="container_img_man_genral_regulations">
                    <img src={manGenralRegulations} alt="" />
                </div>

                <div style={{ marginTop: "40px" }} className="regulation-item">
                    <h2>1. In Character (IC)</h2>
                    <p>Todo lo que sucede dentro del juego relacionado con tu personaje o el entorno de la ciudad es IC. Todas tus acciones, reacciones y decisiones deben estar alineadas con la personalidad, historia y lógica de tu personaje.</p>
                </div>

                <div className="regulation-item">
                    <h2>2. Out of Character (OOC)</h2>
                    <p>Todo lo que ocurre fuera del rol de tu personaje (tanto dentro como fuera del juego) se considera OOC. Ejemplos:</p>
                    <ul>
                        <li>Conversaciones en Discord que no se escuchen dentro del servidor.</li>
                        <li>Reportes a administradores.</li>
                    </ul>
                    <p>No mezcles OOC con IC bajo ninguna circunstancia.</p>
                </div>

                <div className="regulation-item">
                    <h2>3. Expresiones OOC</h2>
                    <p>Expresiones o unión de Palabras que consisten en hacer entender acciones OOC de manera IC. Estos SI están permitidos. Ejemplos:</p>
                    <ul>
                        <li>"Músculo".</li>
                        <li>"Dolor de cabeza".</li>
                        <li>"Problema con las gafas".</li>
                        <li>"Chicle en el zapato".</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>4. Interpretación del Personaje (IDP)</h2>
                    <p>Es fundamental actuar siempre acorde a la personalidad, historia y evolución de tu personaje. Esto incluye:</p>
                    <ul>
                        <li>Respetar su acento, forma de hablar y reacciones.</li>
                        <li>Asegurarte de que su evolución sea coherente y progresiva.</li>
                        <li>Los civiles no pueden actuar como mafias o bandas, lo que incluye vestirse de forma similar o realizar acciones típicas de estas.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>5. Rol de Entorno</h2>
                    <p>Debemos recordar que la ciudad está viva, llena de transeúntes, cámaras de seguridad y personas que observan. Actúa siempre como si existieran estos elementos. Ejemplos:</p>
                    <ul>
                        <li>No entres en una base militar como si no estuviera custodiada.</li>
                        <li>No realices grafitis cerca de una comisaría.</li>
                        <li>Solo podrás rolear cámaras de seguridad si están físicamente instaladas, salvo en zonas predefinidas como bancos, comisarías y aeropuertos.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>6. Fairplay</h2>
                    <p>El Fairplay consiste en priorizar el disfrute del rol sobre el afán de ganar. Da oportunidad a los demás jugadores para participar y evita actuar de manera egoísta o ambiciosa. Ejemplos de violaciones:</p>
                    <ul>
                        <li>Esconderte en un callejón con una moto Akuma, sin dar opción a la policía de atraparte.</li>
                        <li>Secuestrar al líder de una banda rival y llevarlo a un territorio inaccesible para ellos.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>7. Powergaming (PG)</h2>
                    <p>El Powergaming está prohibido y se refiere a realizar acciones imposibles o ilógicas en la vida real, o forzar el rol de otros jugadores. Ejemplos:</p>
                    <ul>
                        <li>Hablar por radio estando esposado, herido o inconsciente.</li>
                        <li>Ocultarte en arbustos para aprovechar la vista en tercera persona.</li>
                        <li>No rolear lesiones tras accidentes graves.</li>
                        <li>Seguir conduciendo un vehículo con dos o más ruedas pinchadas. Con una rueda pinchada, deberás rolear pérdida de control y baja velocidad.</li>
                    </ul>
                </div>



                <div className="regulation-item">
                    <h2>8. Metagaming (MG)
                    </h2>
                    <p>El Metagaming está prohibido y ocurre cuando usas información obtenida fuera del rol para
                        obtener ventaja dentro del juego. Ejemplos:
                    </p>
                    <ul>
                        <li>Reconocer a alguien por su voz si lleva una máscara.</li>
                        <li>Utilizar información obtenida por Discord o streams para actuar en el servidor</li>
                        <p>Cualquier infracción de esta norma conlleva sanciones administrativas.</p>
                    </ul>
                </div>


                <div className="regulation-item">
                    <h2>9. Death Match (DM)
                    </h2>
                    <p>El Death Match está prohibido y se refiere a atacar o matar a otros jugadores sin un motivo
                        válido. Ejemplos:
                    </p>
                    <ul>
                        <li>Agredir a otro jugador por aburrimiento o sin una razón de rol.</li>
                        <li>Matar en zonas seguras sin sentido alguno</li>

                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>10. Revenge Kill (RK)

                    </h2>
                    <p>El Revenge Kill está prohibido. Ocurre cuando un jugador, tras un PK, ignora la pérdida de
                        memoria y busca vengarse del causante de su situación.
                    </p>

                </div>

                <div className="regulation-item">
                    <h2>11. Character Kill (CK)


                    </h2>
                    <p>Un CK implica la muerte definitiva del personaje, lo que conlleva la pérdida de todo su
                        dinero, objetos e identidad. Para seguir jugando, deberás crear un nuevo personaje con una
                        historia y nombre distintos.

                    </p>

                </div>


                <div className="regulation-item">
                    <h2>12. Player Kill (PK)


                    </h2>
                    <p>Un PK ocurre cuando tu personaje queda inconsciente y es reanimado por un EMS. Esto
                        implica pérdida de memoria de los últimos 30 minutos, lo cual debe respetarse.


                    </p>

                </div>

                <div className="regulation-item">
                    <h2>13. Vehicle Death Match (VDM)



                    </h2>
                    <p>El Vehicle Death Match está prohibido y ocurre cuando utilizas un vehículo
                        intencionalmente para dejar inconsciente a otro jugador.
                        No se considera VDM: atropellar a un civil que intente detener tu vehículo poniéndose
                        delante.

                    </p>

                </div>


                <div className="regulation-item">
                    <h2>14. Bunny Jump (BJ)

                    </h2>
                    <p>El Bunny Jump está prohibido. Se refiere a usar saltos constantes para moverse más
                        rápido en el mapa.



                    </p>

                </div>




                <div className="regulation-item">
                    <h2>15. Uso del /me y /do

                    </h2>

                    <ul>
                        <li>/me: Describe acciones de tu personaje que no tienen animación. Debe escribirse
                            en tercera persona. Ejemplo: "/me saca la billetera de su bolsillo".
                        </li>


                        <li>/do: Define expresiones del personaje o situaciones del entorno. No puede
                            expresar pensamientos o sentimientos, ni usarse para ventaja personal. Mentir en
                            el /do es sancionable.
                        </li>
                    </ul>
                    <p>El Bunny Jump está prohibido. Se refiere a usar saltos constantes para moverse más
                        rápido en el mapa.



                    </p>

                </div>


                <div className="regulation-item">
                    <h2>16. AFK

                    </h2>
                    <p>Quedarse AFK en el servidor está prohibido. Si necesitas ausentarte brevemente, rolearlo
                        es obligatorio (por ejemplo, usando un emote estático en una zona de trabajo).


                    </p>

                </div>


                <div className="regulation-item">
                    <h2>17. Ajuste de Cuentas


                    </h2>
                    <p>Es una venganza medida y justificada en respuesta a un daño previo. No debe confundirse
                        con un RK.



                    </p>

                </div>


                <div className="regulation-item">
                    <h2>18. Dupeo


                    </h2>
                    <p>Duplicar objetos o dinero está prohibido. Deberás reportarlo inmediatamente a un
                        administrador. Si sabes que otro jugador realiza esta práctica y no lo informas, también
                        podrías ser sancionado.

                    </p>

                </div>



                <div className="regulation-item">
                    <h2>19. Forzar Rol



                    </h2>
                    <p>El forzar rol está prohibido en el servidor y se define como realizar acciones que no
                        permiten a otros jugadores responder o reaccionar de manera coherente y justa
                    </p>

                </div>



                <div className="regulation-item">
                    <h2>20. Cortar Rol



                    </h2>
                    <p>Cortar rol se refiere a interrumpir o finalizar una situación de rol de manera abrupta sin una
                        justificación dentro del juego, afectando la continuidad del rol. Está estrictamente
                        prohibido.

                    </p>

                </div>

                <h2 style={{ textAlign: "center" }}>QUEDA TOTALMENTE PROHIBIDO USAR MIRAS
                    EXTERNAS-</h2>


                <div className="regulation-item">
                    <h2><b>DEFCON</b></h2>


                </div>

                <div className="regulation-item">
                    <h2>DEFCON 5
                    </h2>

                    <p>La Policía Local de Vilanova informa que se activa el nivel DEFCON 5. La seguridad está
                        garantizada, pero manténganse atentos. No duden en contactarnos si es necesario.
                    </p>

                </div>


                <div className="regulation-item">
                    <h2>DEFCON 4
                    </h2>

                    <p>La Policía Local de Vilanova informa que se establece el nivel DEFCON 4 debido a actos
                        ilícitos. Manténganse alerta y contactenos si es necesario.

                    </p>

                </div>


                <div className="regulation-item">
                    <h2>DEFCON 3
                    </h2>

                    <p>La Policía Local de Vilanova informa que se establece el nivel DEFCON 3 por múltiples
                        tiroteos. Armamento medio desplegado. Procederemos a detener a civiles sospechosos.

                    </p>

                </div>



                <div className="regulation-item">
                    <h2>DEFCON 2
                    </h2>

                    <p>La Policía Local de Vilanova informa que se establece el nivel DEFCON 2 debido al
                        aumento de tiroteos y asesinatos. Armamento pesado desplegado. Manténganse seguros y
                        sigan las indicaciones.


                    </p>

                </div>



                <div className="regulation-item">
                    <h2>DEFCON 1
                    </h2>

                    <p>La Policía Local de Vilanova informa que se activa el nivel DEFCON 1 y el estado de Ley
                        Marcial. Sigan las indicaciones de las autoridades y permanezcan en casa.

                    </p>

                </div>



            </div>
            <SocialMedia />
            <Footer />

        </>
    );
};
