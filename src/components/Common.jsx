import React from 'react'
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto py-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 order-2 hero-content order-lg-1 my-2  mt-lg-0">
                                <h1>{props.heading} <strong className="brand_name">AbuBakkar </strong></h1>
                                <h5 className="my-3">{props.subHeading}</h5>
                                <div className="mt-1 mt-lg-5">
                                    <NavLink to={props.link} className="get-start"> {props.btnName} </NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 py-5 order-1 order-lg-2 header-img">
                                <img src={props.imgSrc} className="img-fluid animated" alt="hero-img" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;
