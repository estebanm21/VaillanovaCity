import "./socialmedia.css"

import manSocialMedia from "../../assets/man_socialmedia.png"
import AOS from "aos"
import { useEffect } from "react"

export default function SocialMedial() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div data-aos="zoom-in" className="container_socialmedia">

            <div className="container_cards_redes">



                <div className="card_discord">

                </div>

                <div className="card_instagam">

                </div>

                <div className="card_youtube">

                </div>

                <div className="card_tiktok">

                </div>

            </div>

            <div className="container_man_redes">
                <img src={manSocialMedia} alt="" />
            </div>
        </div>
    )
}