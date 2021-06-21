import React from 'react'
import web from "../img/hero.svg";
import Common from "../components/Common"
const Home = () => {
    return (
        <>
            <Common
                heading="Grow your business with"
                subHeading="we are the team of talented of making websites"
                imgSrc={web}
                btnName="Get Started"
                link="/service"
            />
        </>
    )

}

export default Home;
