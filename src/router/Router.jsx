import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { GeneralRegulations } from "../pages/general-regulations/GeneralRegulations"
import Home from "../pages/home/Home"
import BandsRegulations from "../pages/bands-regulations/BandsRegulations"
import HowToDonate from "../pages/howToDonate/HowToDonate"



export const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="inicio" element={<Home />}></Route>
                    <Route path="normativa-general" element={<GeneralRegulations />}></Route>
                    <Route path="normativa-de-bandas" element={<BandsRegulations />}></Route>
                    <Route path="como-donar" element={<HowToDonate />}></Route>
                    <Route path='*' element={<Navigate to={"/inicio"} />} />
                </Route>
            </Routes>
        </>
    )
} 