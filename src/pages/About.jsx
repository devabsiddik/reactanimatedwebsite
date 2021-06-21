import React from 'react';
import web from "../img/marketing.svg";
import Common from "../components/Common";
const About = () => {
    return (
        <>
            <Common
                heading="Welcome to About page"
                subHeading="Let's have a brief discussion about your project"
                imgSrc={web}
                btnName="Contact Now"
                link="/Contact"
            />
        </>
    )

}

export default About;
