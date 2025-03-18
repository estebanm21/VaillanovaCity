import { useEffect } from "react";
import "./policia.css";
import AOS from "aos";
import borderTitle from "../../assets/border_title.png";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Footer from "../../components/footer/Footer";

const PoliciaRegulations = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div data-aos="fade-right" className="regulations-container">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Normativa General de la Policía Local de Vilanova</h1>
                    <div style={{ marginBottom: "50px" }} className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="border" />
                    </div>
                </div>

                <div className="regulation-item">
                    <h2>Negociaciones</h2>
                    <ul>
                        <li>Se deberá respetar las negociaciones en su totalidad. Si el atracador hiere de gravedad a un rehén o deja de mostrar interés por 5 minutos, la policía podrá romperlas, notificando previamente a los atracadores.</li>
                        <li>Si se abate al rehén, los atracadores pueden abrir fuego a la policía sin previo aviso y viceversa. Lo mismo aplica si se hiere a un rehén o un policía en el transcurso de una negociación.</li>

                    </ul>
                    <h3>Se podrá negociar:</h3>
                    <ul>
                        <li>Dinero a cambio de los rehenes (máximo 5k).</li>
                        <li>Condiciones de huida: no pinchos, no obstáculos, no bloqueo, no código 100. (La policía a
                            los 3 avisos no hará caso a las cosas negociadoras.)
                        </li>
                    </ul>

                    <h3>No se podrá negociar:</h3>
                    <ul>
                        <li>Que un policía abandone la escena a cambio de un rehén.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2> Normas Generales</h2>
                    <ul>
                        <li>En caso de rol de corrupción, se deberá avisar a los rangos altos de administración.</li>
                        <li>No se podrá cachear a civiles a menos que estemos en alerta 2 o sean sospechosos de un delito.</li>
                        <li>Se debe dar prioridad a un compañero abatido o herido.</li>
                        <li>Si no se leen los derechos de un detenido antes de entrar a comisaría, este quedará libre de cualquier delito.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Robos</h2>
                    <h3>Atracos Pequeños (Badulaques, Licorerías)</h3>
                    <ul>
                        <li>Mínimo 2 policías - Máximo 3 policías.</li>
                        <li>Máximo 2 atracadores.</li>
                        <li>Máximo 2 rehenes.</li>
                        <li>Equipamiento: pistola de combate y armas básicas.</li>
                    </ul>

                    <h3>Atracos Medianos (Fleeca)</h3>
                    <ul>
                        <li>Mínimo 4 policías - Máximo 8 policías.</li>
                        <li>Máximo 4 atracadores (3 dentro, 1 fuera o dentro).</li>
                        <li>Máximo 4 rehenes.</li>
                        <li>Equipamiento: escopeta, subfusil, pistola AP, pistola de combate.</li>
                    </ul>

                    <h3>Atracos Grandes (Banco Central, Joyería)</h3>
                    <ul>
                        <li>Mínimo 8 policías - Máximo 12 policías.</li>
                        <li>Máximo 10 atracadores (7 dentro, 3 fuera o dentro).</li>
                        <li>Máximo 5 rehenes.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Secuestros</h2>
                    <ul>
                        <li>Secuestrar policías: mínimo 5 policías.</li>
                        <li>Robar policías: mínimo 4 policías.</li>
                        <li>Secuestrar civiles: mínimo 4 policías.</li>
                        <li>Equipamiento: cualquier tipo de arma.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Derechos de Detención</h2>
                    <p>Los derechos se deben leer en el siguiente orden:</p>
                    <ul>
                        <li>1. Tiene derecho a guardar silencio, cualquier cosa que diga podrá ser usada en su contra.</li>
                        <li>2. Tiene derecho a conocer el motivo de su detención.</li>
                        <li>3. Tiene derecho a no declararse culpable.</li>
                        <li>4. Tiene derecho a no contestar preguntas.</li>
                        <li>5. Tiene derecho a comida, bebida y asistencia sanitaria.</li>
                        <li>6. Tiene derecho a un abogado (excepto en flagrante delito).</li>
                        <li>7. Tiene derecho a una llamada de hasta 1 minuto en presencia de un funcionario.</li>
                    </ul>
                    <p>Si el detenido alega no haberlo entendido, se leerán hasta dos veces. Si no responde, se entenderá que los ha comprendido.</p>
                </div>

                <div className="regulation-item">
                    <h2> DEFCON</h2>
                    <ul>
                        <li><strong>DEFCON 5:</strong> La Policía Local de Vilanova informa que se activa el nivel DEFCON 5. La seguridad está garantizada, pero manténganse atentos.</li>
                        <li><strong>DEFCON 4:</strong> La Policía Local de Vilanova informa que se establece el nivel DEFCON 4 debido a actos ilícitos. Manténganse alerta.</li>
                        <li><strong>DEFCON 3:</strong> La Policía Local de Vilanova informa que se establece el nivel DEFCON 3 por múltiples tiroteos. Armamento medio desplegado.</li>
                        <li><strong>DEFCON 2:</strong> La Policía Local de Vilanova informa que se establece el nivel DEFCON 2 debido al aumento de tiroteos y asesinatos. Armamento pesado desplegado.</li>
                        <li><strong>DEFCON 1:</strong> La Policía Local de Vilanova informa que se activa el nivel DEFCON 1 y el estado de Ley Marcial. Sigan las indicaciones de las autoridades y permanezcan en casa.</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Códigos</h2>
                    <p><strong>Códigos mono:</strong></p>
                    <ul>
                        <li>Código 100: Bloqueo de paso a vehículo</li>
                        <li>Código 187: Homicidio</li>
                        <li>Código 205: Secuestro</li>
                        <li>Código 211: Robo a un civil</li>
                        <li>Código 215: Accidente de tráfico</li>
                        <li>Código 254 Víctor: Persecución en vehículo</li>
                        <li>Código 254 Pol: Persecución a pie</li>
                    </ul>

                    <p><strong>Códigos 10:</strong></p>
                    <ul>
                        <li>10-00: Precaución</li>
                        <li>10-01: Precaución por animal peligroso</li>
                        <li>10-03: Pedir información de un sujeto.</li>
                        <li>10-04: Afirmativo.</li>
                        <li>10-05: Negativo.
                        </li>


                        <li>10-08: Regreso a comisaría</li>

                        <li>10-09: Repetir mensaje.
                        </li>
                        <li>10-10: Entrada de servicio</li>

                        <li>10-14: Persona sospechosa.
                        </li>
                        <li>10-15: Sujeto bajo custodia policial.
                        </li>
                        <li>10-20: Ubicación actual del agente.
                        </li>
                        <li>10-22: Debe presentarse en comisaría.
                        </li>






                        <li>10-23: Mantenerse a la espera</li>

                        <li>10-30: Solicitar refuerzos.
                        </li>




                        <li>10-31: Sin novedades</li>
                        <li>10-37: Necesidad de una grúa</li>

                        <li>10-38: Necesidad de una ambulancia.
                        </li>
                        <li>10-50: Accidente.
                        </li>
                        <li>10-71: Tiroteo.
                        </li>
                        <li>10-77: Robo pequeño</li>
                        <li>10-78: Robo mediano.
                        </li>
                        <li>10-79: Robo grande.
                        </li>
                        <li>10-80: Reunión de todas las patrullas disponibles.
                        </li>
                        <li>10-90: Falsa alarma.
                        </li>
                        <li>10-95: Procesamiento de un sujeto.
                        </li>
                        <li>10-97: Llegada al objetivo</li>

                        <li>10-98: Misión completada.
                        </li>
                        <li>10-100: Parada momentánea.</li>









                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Códigos y Claves</h2>
                    <p><strong>Códigos y claves:</strong></p>
                    <ul>
                        <li><strong>Código PIT:</strong> Desestabilizar vehículo.</li>
                        <li><strong>Clave ROBERT:</strong> Autorización para el uso de armas letales.</li>
                        <li><strong>Código QRR:</strong> Agente en peligro.</li>
                        <li><strong>Clave BRAWL:</strong> Pelea callejera.</li>
                        <li><strong>Modo CHARLIE:</strong> Silencio total en radio.</li>
                        <li><strong>Código AT:</strong> Tiempo estimado de llegada.</li>
                        <li><strong>Código 1:</strong> Última alerta.</li>
                        <li><strong>Código 3:</strong> Situación actual.</li>
                        <li><strong>Código 4:</strong> Aviso leve (activar luces).</li>
                        <li><strong>Código 5:</strong> Aviso grave (activar luces y sirenas).</li>
                        <li><strong>Código 6:</strong> Vigilancia por la zona.</li>
                        <li><strong>Código 9:</strong> Busca y captura.</li>
                        <li><strong>Código 10:</strong> Frecuencia de radio despejada.</li>
                    </ul>
                </div>


                <div className="regulation-item">
                    <h2>Elementos que no se pueden robar a un policía</h2>
                    <ul>
                        <li>Armas policiales</li>
                        <li>Porra</li>
                        <li>Taser</li>
                    </ul>
                </div>

                <div className="regulation-item">
                    <h2>Código Interno</h2>
                    <ul>
                        <li>1. Los policías deben ir identificados y dar su número de placa si se solicita.</li>
                        <li>2. Prohibido realizar acciones ilegales, colaborar con mafias/bandas o aceptar sobornos (sanción administrativa y CK).</li>
                        <li>3. Un agente puede solicitar identificación y cachear a sospechosos con previo aviso.</li>
                        <li>4. No se pueden usar armas de fuego contra civiles desarmados; se permite la porra o taser.</li>
                        <li>5. Se dará dos avisos a civiles faltando el respeto antes de detenerlos. Se permite el uso de taser en caso de violencia.</li>
                        <li> Obedecer órdenes de superiores, siempre que no contradigan normativas.
                        </li>
                        <li>No prestar vehículos o equipo policial, salvo entre altos cargos.
                        </li>
                        <li>Uso de armas solo permitido si la otra parte ya abrió el rol.
                        </li>
                        <li>Respetar normas de tráfico, salvo en urgencias o robos.
                        </li>
                        <li>Puertas de comisaría abiertas salvo en alerta o en caso de roles agresivos.
                        </li>
                        <li>Prohibido llevar amigos o conocidos en coches oficiales.
                        </li>
                        <li>. En distancias cortas, se usará el taser; en distancias largas, arma letal para salvar
                            vidas.
                        </li>
                        <li>Si mueres en rol, no puedes volver; solo procesar detenidos de ese rol.
                        </li>
                        <li>Fuera de servicio, solo portar lo reglamentario (pistola, linterna).
                        </li>
                        <li> Al detener, retirar comunicaciones y devolver teléfono en comisaría si necesita una
                            llamada</li>
                        <li>Activar la radio policial antes de empezar servicio.
                        </li>
                        <li>Solo son legales armas blancas y pistolas.
                        </li>

                        <li>Al salir del cuerpo, devolver armas a un administrador (PKT administrativo).
                        </li>
                        <li>Prohibido quedarse AFK en servicio (sanción administrativa).
                        </li>
                        <li>Prohibido faltar al respeto a compañeros y civiles.</li>
                        <li>No abandonar vehículos oficiales. Si es necesario, llamar a un mecánico o grúa.
                        </li>
                        <li>Revisiones periódicas de armarios y vehículos para evitar corrupción.
                        </li>
                        <li>Mínimo 8h semanales de servicio (salvo excepciones puntuales).
                        </li>

                        <li>Policías en prácticas siempre patrullarán con un superior.

                        </li>
                        <li>Atender robos y atracos a menos que haya algo más importante en curso.
                        </li>
                        <li>Solo el superior al mando puede decretar alertas.
                        </li>
                    </ul>
                </div>
            </div>

            <SocialMedia />
            <Footer />
        </>
    );
};

export default PoliciaRegulations;
