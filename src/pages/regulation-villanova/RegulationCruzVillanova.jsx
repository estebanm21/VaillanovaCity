import React from "react";
import borderTitle from "../../assets/border_title.png";  // Ajusta las rutas de las imágenes
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Footer from "../../components/footer/Footer"



export default function RegulationCruzVilanova() {
    return (
        <>

            <div data-aos="fade-right" className="regulations-container">
                <div className="container_title_cars_disponibles">
                    <h1 style={{ textAlign: "center" }}>Normativa General Cruz Vilanova</h1>
                    <div className="container_border_title_cars_disponibles">
                        <img src={borderTitle} alt="Border" />
                    </div>
                </div>


                <div style={{ marginTop: "40px" }} className="regulation-item">
                    <h2>1. Rol y Profesionalismo</h2>
                    <p>Todos los miembros de Cruz Vilanova deben mantener una actitud profesional en todo momento. Esto incluye la manera de hablar, los procedimientos y las interacciones con otros jugadores.</p>
                    <p>Los médicos deben seguir el rol de su personaje y actuar conforme a su papel, sin involucrarse en actividades ilegales o ajenas a su función como personal de emergencias.</p>
                </div>

                <div className="regulation-item">
                    <h2>2. Prioridades y Atención a Emergencias</h2>
                    <p>La prioridad de Cruz Vilanova es atender llamadas de emergencia en el orden en que se reciben y dar prioridad a situaciones de vida o muerte.</p>
                    <p>Los miembros deben acudir a todas las llamadas de emergencia, a menos que estén ya ocupados en otro servicio. Si reciben múltiples llamadas, deben priorizar según la gravedad de cada caso.</p>
                </div>

                <div className="regulation-item">
                    <h2>3. Interacción con Jugadores y Manejo de Pacientes</h2>
                    <p>Los médicos deben evaluar y tratar a cada paciente con un procedimiento adecuado y realista, incluyendo la evaluación de heridas, estabilización y, si es necesario, traslado al hospital.</p>
                    <p>La interacción con los pacientes debe ser respetuosa y profesional, evitando comentarios fuera de rol o conversaciones OOC durante la atención médica.</p>
                </div>

                <div className="regulation-item">
                    <h2>4. Uso de Vehículos y Equipamiento Médico</h2>
                    <p>Los vehículos de Cruz deben usarse únicamente para responder a llamadas de emergencia o para patrullas preventivas en áreas de alta actividad.</p>
                    <p>No está permitido el uso de vehículos de Cruz Vilanova para actividades personales o fuera del rol.</p>
                    <p>El equipamiento médico (kit de primeros auxilios, desfibriladores, etc.) debe usarse exclusivamente para el tratamiento de pacientes y no debe compartirse ni usarse fuera de situaciones de emergencia.</p>
                </div>

                <div className="regulation-item">
                    <h2>5. Desconexión en Servicio (Combat Logging)</h2>
                    <p>Los miembros de Cruz Vilanova deben evitar desconectarse mientras están en servicio o atendiendo una emergencia. Si es necesario desconectarse por una emergencia real, deben notificar a un administrador o informar a los jugadores involucrados si es posible.</p>
                    <p>Desconectarse durante una emergencia médica activa será considerado una infracción grave.</p>
                </div>

                <div className="regulation-item">
                    <h2>6. Rol de Reanimación y Deceso</h2>
                    <p>Cruz Vilanova debe seguir protocolos de rol para determinar si un paciente puede ser reanimado o declarado muerto. Los médicos deben evaluar la gravedad de las heridas y actuar de manera realista, sin revivir automáticamente a todos los pacientes.</p>
                    <p>Si un jugador es declarado muerto IC, la Cruz Vilanova no podrá reanimarlo y deberá seguir los procedimientos de rol adecuados (ej. declaración de fallecimiento).</p>
                </div>

                <div className="regulation-item">
                    <h2>7. Colaboración con la Policía y Otros Servicios</h2>
                    <p>Cruz Vilanova debe colaborar estrechamente con la policía y otros servicios de emergencia en situaciones de alto riesgo, como tiroteos, accidentes o catástrofes.</p>
                    <p>Los médicos deben seguir las indicaciones de la policía en escenas peligrosas y no deben ingresar a zonas inseguras hasta que sean despejadas.</p>
                </div>

                <div className="regulation-item">
                    <h2>8. Interacción con Mafias y Bandas</h2>
                    <p>Cruz Vilanova debe mantenerse neutral en conflictos de bandas o mafias y limitarse a atender a los heridos sin involucrarse en el conflicto.</p>
                    <p>Los miembros no deben proporcionar información ni asistir a ningún grupo en particular, manteniendo siempre la imparcialidad en su rol.</p>
                </div>

                <div className="regulation-item">
                    <h2>9. Sanciones</h2>
                    <p>Los miembros de Cruz Vilanova que incumplan estas normativas estarán sujetos a sanciones que pueden incluir advertencias, suspensiones temporales o la expulsión del equipo de Cruz Vilanova.</p>
                    <p>Las infracciones graves, como el uso inapropiado de vehículos, equipo médico o desconexiones en servicio, serán tratadas con sanciones estrictas.</p>
                </div>
            </div>

            <SocialMedia />
            <Footer />

        </>
    );
}
