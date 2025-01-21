import "./donations.css"
import imgProducts from "../../assets/img_principal_products.png"
import { useEffect } from "react"
import AOS from "aos"
export function Donations() {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div data-aos="fade-right" className="container_principal_products">
                <div className="container_products">
                    <h1>Texto  o algun elemento aqui</h1>
                    <div data-aos="fade-up" className="container_img_products">
                        <img src={imgProducts} alt="" />
                        <div className="difuminar_img_products"></div>
                    </div>
                </div>
            </div>

        </>
    )
}