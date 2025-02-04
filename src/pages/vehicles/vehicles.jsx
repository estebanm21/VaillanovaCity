import "./vehicles.css"
import barco from "../../assets/barco.jpg"
import jet from "../../assets/jet.jpg"
import { NavLink } from "react-router-dom"

export default function Vehicles() {



    const backgrondCar = {
        backgroundImage: "url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)"
    }

    const backgrondBarco = {
        backgroundImage: `url(${barco})`
    }

    const backgrondJet = {
        backgroundImage: `url(${jet})`
    }






    return <>

        <div className="container_principal_vehicles">

            <h1>Vehiculos VIP</h1>
            <div className="container_card_vehicles">

                {/* card 1 */}

                <div className="container">
                    <div className="wrapper">
                        <div style={backgrondCar} className="banner-image"> </div>
                        <h1>Coches</h1>
                        <p>Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className="button-wrapper">

                        <NavLink to="/coches">
                            <button className="btn_vehicle fill">VER COCHES</button>
                        </NavLink>

                    </div>
                </div>

                {/* card 2 */}
                <div className="container">
                    <div className="wrapper">
                        <div style={backgrondBarco} className="banner-image"> </div>
                        <h1>Barcos</h1>
                        <p>Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className="button-wrapper">

                        <NavLink to="/barcos">
                            <button className="btn_vehicle fill">VER BARCOS</button>
                        </NavLink>

                    </div>
                </div>

                {/* card 3 */}
                <div className="container">
                    <div className="wrapper">
                        <div style={backgrondJet} className="banner-image"> </div>
                        <h1>Jets</h1>
                        <p>Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className="button-wrapper">
                        <NavLink to="/jets">

                            <button className="btn_vehicle fill">VER JETS</button>
                        </NavLink>

                    </div>
                </div>




            </div>

        </div>


    </>
}