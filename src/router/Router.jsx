import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { GeneralRegulations } from "../pages/general-regulations/GeneralRegulations"
import Home from "../pages/home/Home"
import BandsRegulations from "../pages/bands-regulations/BandsRegulations"
import HowToDonate from "../pages/howToDonate/HowToDonate"
import { Peds } from "../pages/PEDS/Peds"
import Houses from "../pages/houses/Houses"
import DetailCar from "../pages/detailCar/DetailCar"




import { Jets } from "../pages/jets/Jets"

import { Cars } from "../pages/cars/Cars"
import { Barcos } from "../pages/boats/Barcos"
import Map from "../pages/map/Map"
import Vehiculos from "../pages/vehiculos/Vehiculos"
import PoliciaRegulations from "../pages/policia-regulations/PoliciaRegulations"
import RegulationCruzVilanova from "../pages/regulation-villanova/RegulationCruzVillanova"
// import { Vehicles } from "../pages/vehicles/Vehicles"

// cambios


export const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<Navbar />}>

                    <Route path="inicio" element={<Home />}></Route>
                    <Route path="normativa-general" element={<GeneralRegulations />}></Route>
                    <Route path="normativa-de-bandas" element={<BandsRegulations />}></Route>

                    <Route path="normativa-de-policias-locales" element={<PoliciaRegulations />}></Route>

                    <Route path="normativa-cruz-vilanova" element={<RegulationCruzVilanova />}></Route>


                    <Route path="peds-multicaracter" element={<Peds />}></Route>
                    <Route path="como-donar" element={<HowToDonate />}></Route>
                    <Route path="vehiculos-vips" element={<Vehiculos />}></Route>
                    {/* <Route path="rango-de-donacion" element={<DotanitonRange />}></Route> */}
                    <Route path="jets" element={<Jets />}></Route>
                    <Route path="barcos" element={<Barcos />}></Route>
                    <Route path="coches" element={<Cars />}></Route>
                    <Route path="cocheDetail/:id" element={<DetailCar />}></Route>
                    <Route path="casas-premium" element={<Houses />}></Route>
                    <Route path="mapa_y_locales" element={<Map />}></Route>


                    <Route path='*' element={<Navigate to={"/inicio"} />} />
                </Route>
            </Routes>
        </>
    )
} 