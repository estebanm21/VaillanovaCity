import LogoDiscord from "../LogoDiscord"
import LogoFiveM from "../LogoFiveM"
import "./Navbar.css"
import "boxicons"
import { Outlet, NavLink } from "react-router-dom"
import vcLogo from "../../assets/VC_logo.png"

// pequeño comentario


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid px-5 py-2">
          <a className="navbar-brand" href="#">
            <div className="container_vc_logo">
              <img src={vcLogo} alt="" />
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/inicio"

                className={({ isActive }) => `${isActive ? "isActive" : ""} nav-link`}
              >
                Inicio
              </NavLink>


              {/* Menú desplegable "Normativa" */}
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Normativa
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li> <NavLink to="/normativa-general" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Normativa General</NavLink></li>
                  <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Normativa Policia Local</a></li>
                  <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Normativa Cruz Vilanova</a></li>
                  <li> <NavLink to="/normativa-de-bandas" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Normativa de Bandas</NavLink></li>
                  {/* <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Conceptos básicos</a></li> */}
                  <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Normativa de Locales</a></li>
                  <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Comandos Importantes</a></li>



                </ul>
              </div>


              {/* Menú desplegable "donaciones" */}
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Donaciones
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li> <NavLink to="/como-donar" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Como donar</NavLink></li>
                  <li><NavLink to="/vehiculos-vips" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Vehículos VIPS(aviones y barcos)</NavLink></li>
                  <li><a className="dropdown-item" href="#"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Casas Premium</a></li>
                  <li> <NavLink to="/peds-multicaracter" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>PEDS y multicaracter</NavLink></li>
                  <li> <NavLink to="/rango-de-donacion" className="dropdown-item"><box-icon color="#a1a4a8" type='solid' name='chevron-right'></box-icon>Rango de donación</NavLink></li>

                </ul>
              </div>
              <a className="nav-link" href="#">Postulación</a>
            </div>

            <div className="ms-auto" style={{ display: "flex", gap: 25 }}>
              {/* Botón de Discord (comentado) */}
              <a className="Btn">
                <span className="svgContainer">
                  <LogoDiscord />
                </span>
                <span className="BG"></span>
              </a>

              {/* Botón de Jugar */}
              <a href="#" className="btn_1">
                <strong>JUGAR</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
