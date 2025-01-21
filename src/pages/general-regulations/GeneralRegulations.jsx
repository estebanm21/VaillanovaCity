import AOS from 'aos';
import './GeneralRegulations.css';
import { useEffect } from 'react';


export const GeneralRegulations = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-right" className="regulations-container">
            <h1>Normativa General</h1>

            <div className="regulation-item">
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

            {/* Puedes seguir con las demás normas de manera similar */}
        </div>
    );
};
