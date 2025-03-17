import { useEffect } from "react";
import "./bandsRgegulations.css";
import AOS from "aos"
import borderTitle from "../../assets/border_title.png"

export default function BandsRegulations() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-right" className="regulations-container">
            <div className="container_title_cars_disponibles">
                <h1 style={{ textAlign: "center" }}>Normativa de bandas</h1>
                <div style={{ marginBottom: "50px" }} className="container_border_title_cars_disponibles">
                    <img src={borderTitle} alt="" />
                </div>
            </div>

            <div className="regulation-item">
                <h2>1. Definición y Estructura de las Bandas</h2>
                <p>Una banda es un grupo de personajes organizados para llevar a cabo actividades delictivas dentro del servidor.</p>
                <p>Cada banda debe tener una estructura definida, que incluya roles claros:</p>
                <ul>
                    <li><strong>Líder:</strong> Encargado de la toma de decisiones y la relación con otros grupos o facciones.</li>
                    <li><strong>Subjefes:</strong> Asisten al líder y gestionan tareas específicas.</li>
                    <li><strong>Miembros:</strong> Ejecutan las actividades operativas.</li>
                </ul>
                <p>Es obligatorio que cada banda cuente con una historia y motivación justificadas y
                    acordes al contexto del servidor.
                </p>
            </div>

            <div className="regulation-item">
                <h2>2. Registro y Reconocimiento de Bandas</h2>
                <p>Todas las bandas deben ser registradas y aprobadas por el staff antes de comenzar sus operaciones.</p>
                <p><strong>Requisitos para el registro:</strong></p>
                <ul>
                    <li>Nombre de la banda.</li>
                    <li>Historia, motivaciones y objetivos.</li>
                    <li>Líder y lista inicial de miembros.</li>
                    <li>Territorio solicitado (opcional, según normativa de territorios).</li>
                </ul>
                <p>Las bandas que no estén registradas se considerarán ilegales y podrían ser desmanteladas por el staff.</p>
            </div>

            <div className="regulation-item">
                <h2>3. Composición y Límite de Miembros</h2>
                <ul>
                    <li><strong>Bandas pequeñas:</strong> Máximo 6 miembros oficiales registrados en la banda, y mínimo 3 miembros.</li>
                    <li><strong>Organizaciones grandes (mafias o cárteles):</strong> Máximo 10 miembros oficiales, previa aprobación del staff, y mínimo 6.</li>
                    <li>Un personaje no puede pertenecer a más de una banda u organización al mismo tiempo.</li>
                    <li>Está prohibido el uso de personajes secundarios para beneficiar a la banda principal.</li>
                </ul>
            </div>

            <div className="regulation-item">
                <h2>4. Territorios y Control de Zonas</h2>
                <p>Cada banda puede solicitar un territorio exclusivo, sujeto a aprobación del staff. Este será el punto de reunión y operaciones principales de la banda.</p>
                <ul>
                    <li>Una banda no puede realizar actividades ilegales dentro del territorio de otra banda sin justificación y previo rol.</li>
                    <li>El control de un territorio solo puede cambiarse mediante un conflicto roleado y aprobado por el staff.</li>
                    <li>Los territorios no deben incluir zonas protegidas (hospitales, comisarías, etc.).</li>
                </ul>
            </div>

            <div className="regulation-item">
                <h2>5. Actividades Permitidas para Bandas</h2>
                <p>Las bandas pueden participar en actividades delictivas, siempre respetando las normas de rol del servidor:</p>
                <ul>
                    <li>Robos: Incluye robos a tiendas, casas, vehículos, y NPCs. Y también robos no tan
                        frecuentes como flecca, yate...
                    </li>
                    <li>Secuestros: Solo se permite con motivos justificados, respetando las reglas de
                        Fairplay y no forzando el rol.</li>
                    <li>Tráfico ilegal: Venta y distribución de drogas, productos falsificados...</li>
                    <li>Ajustes de cuentas: Venganza entre bandas o enfrentamientos por territorio.</li>
                    <li>Extorsión: Pedir dinero a negocios o civiles a cambio de “protección”.
                    </li>
                </ul>
            </div>

            <div className="regulation-item">
                <h2>6. Enfrentamientos y Guerras de Bandas</h2>

                <p><strong>6.1 Declaración de Conflicto:</strong></p>

                <ul>
                    <li>Cualquier guerra o enfrentamiento entre bandas debe tener una justificación
                        lógica y ser aprobada por el staff.</li>
                    <li>Está prohibido provocar guerras basándose en conflictos OOC o razones
                        insuficientes.</li>

                </ul>


                <p><strong>6.2 Reglas para Guerras:</strong></p>

                <ul>
                    <li>Máximo 6 participantes activos por banda en cada enfrentamiento.
                    </li>
                    <li>Los enfrentamientos deben realizarse en zonas alejadas de civiles y lugares
                        protegidos como hospitales o comisarías.
                    </li>

                    <li>Las armas de alto calibre solo están permitidas si el staff lo autoriza previamente.
                    </li>

                    <li>Cooldown: Una vez finalizada una guerra, debe respetarse un periodo de 72
                        horas antes de iniciar un nuevo conflicto con la misma banda.

                    </li>

                </ul>




            </div>

            <div className="regulation-item">
                <h2>7. Aliados y Tratos con Otras Bandas</h2>
                <p>Las bandas pueden establecer alianzas o enemistades, pero deben hacerlo de manera creíble y sin caer en comportamientos repetitivos de "team deathmatch".</p>
                <p>Las traiciones y rupturas de alianzas están permitidas, siempre y cuando se realicen con razones de rol y no de manera aleatoria o sin coherencia.</p>
            </div>

            <div className="regulation-item">
                <h2>8. Relación con Civiles y Otras Bandas</h2>
                <p>Las bandas deben evitar interacciones abusivas con civiles. No se permite robar o extorsionar a un mismo civil más de una vez en un período de 48 horas.</p>
                <p>Las alianzas, conflictos o interacciones con otras bandas deben basarse en rol y no involucrar asuntos OOC.</p>
            </div>

            <div className="regulation-item">
                <h2>9. Secuestros y Ajustes de Cuentas</h2>
                <p><strong>Secuestros:</strong></p>
                <ul>
                    <li>Se requiere una razón de peso dentro del rol para secuestrar a alguien.</li>
                    <li>Los civiles deben tener la oportunidad de negociar o escapar.</li>
                    <li>Máximo 3 horas de retención IC por secuestro.</li>

                </ul>

                <p><strong>Ajustes de Cuentas:</strong></p>
                <ul>
                    <li>Los ajustes de cuentas deben ser proporcionales al daño recibido.</li>
                    <li>Está prohibido realizar ajustes de cuentas basados en conflictos OOC.</li>


                </ul>



            </div>

            <div className="regulation-item">
                <h2>10. Robos a Policías</h2>
                <p>Las bandas solo podrán robar los siguientes objetos a los policías durante un asalto o secuestro:</p>
                <ul>
                    <li>Balas</li>
                    <li>Dinero</li>
                    <li>Comida</li>
                    <li>Bebida</li>
                    <li>Teléfono móvil.</li>

                </ul>
                <p>Está estrictamente prohibido robar armamento de alto calibre, chalecos antibalas u objetos que puedan desbalancear el juego.</p>
            </div>

            <div className="regulation-item">
                <h2>11. Sanciones</h2>
                <ul>
                    <li>El incumplimiento de esta normativa llevará a sanciones, como advertencias, suspensión de la banda o expulsión de miembros.</li>
                </ul>
                <p><strong>Las bandas que violen repetidamente la normativa podrán:</strong></p>
                <ul>
                    <li>Perder acceso a armas y recursos proporcionados por el servidor.</li>
                    <li>Ser disueltas por el staff en casos graves o de reiteración.</li>


                </ul>
            </div>

            <div className="regulation-item">
                <h2>12. Uso de Vehículos y Armamento</h2>
                <ul>
                    <li>Los vehículos y armas utilizados por las bandas deben ser coherentes con su historia y nivel económico.</li>


                </ul>

                <p><strong>No se permite el uso de:</strong></p>
                <ul>
                    <li>Helicópteros, jets o vehículos militares sin autorización.</li>
                    <li>Armas automáticas de alto calibre sin justificación IC y aprobación del staff.</li>


                </ul>


            </div>

            <div className="regulation-item">
                <h2>Normativa de Actuación en Robos</h2>


                <p><strong>1. Robos Menores (Tiendas, Licorerías, etc.)</strong></p>
                <ul>
                    <li>En situaciones de robos menores, queda completamente prohibido incorporar a cualquier persona adicional al equipo que originalmente inició el rol. Estas acciones deben mantenerse pequeñas y enfocadas, reflejando un escenario lógico y bien estructurado.</li>
                    <li>No se permite el uso de violencia innecesaria, y en caso de confrontación, el tiroteo debe ser siempre la última opción. En estos casos, se debe priorizar la huida y la búsqueda de soluciones que mantengan la fluidez y el realismo del rol.</li>

                </ul>

                <p><strong>2. Robos Mayores (Bancos, Joyerías, etc.)</strong></p>
                <ul>
                    <li>En eventos de mayor escala, se permitirá la incorporación de refuerzos siempre y cuando esto tenga sentido dentro del contexto del rol. Estas incorporaciones deben limitarse a funciones específicas, como:</li>
                    <li>Crear bloqueos o distracciones para evitar interferencias externas.</li>
                    <li>Proveer apoyo logístico o táctico, siempre de manera justificada dentro de la narrativa del rol.</li>
                    <li>Cualquier acción de este tipo deberá ser planificada y ejecutada de forma coherente, respetando las reglas del servidor y manteniendo la calidad del roleplay.</li>


                </ul>

                <p><strong>3.Consecuencias por Incumplimiento</strong></p>
                <ul>
                    <li>Las acciones fuera de estas normativas, como la incorporación injustificada de personas adicionales o el uso excesivo de violencia sin motivo claro en el rol, serán evaluadas por la administración del servidor. Dependiendo de la gravedad, esto podría derivar en sanciones para garantizar el respeto a las normas y preservar la experiencia de juego para todos los participantes.</li>
                </ul>

                <p>Recuerda que el objetivo principal es mantener un roleplay inmersivo, colaborativo y respetuoso con la narrativa y los demás jugadores.</p>

            </div>
        </div >
    );
}
