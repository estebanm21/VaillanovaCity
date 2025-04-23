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



                <a href="https://discord.gg/a25RMzsNvz" target="_blank">
                    <div className="card_discord">

                    </div>
                </a>

                <a href="https://www.instagram.com/vilanovacityrp/" target="_blank">
                    <div className="card_instagam">

                    </div>
                </a>

                <a href="https://www.youtube.com/channel/UCD2bEZM0Z4HmKpBwPh_lyWg" target="_blank">

                    <div className="card_youtube">

                    </div>

                </a>

                <a href="https://www.tiktok.com/@vilanovacity.roleplay" target="_blank">
                    <div className="card_tiktok">

                    </div>
                </a>

            </div>

            <div className="container_man_redes">
                <img src={manSocialMedia} alt="" />
            </div>
        </div>
    )
}