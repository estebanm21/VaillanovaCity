import * as React from "react"
const ParallaxDonation = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#111"
        viewBox="0 0 1000 100"
        {...props}
    >
        <path
            d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z"
            opacity={0.5}
        />
        <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" />
    </svg>
)
export default ParallaxDonation