import React from 'react'
import Sdata from "../components/Sdata";
import Card from "../components/Card";
const Service = () => {
    return (
        <>
            <div className="text-center my-5">
                <h1 className="service-heading">Our Services </h1>
            </div>
            <div className="container-fluid">
                <div className="row mb-5 pb-5">
                    <div className="col-10 mx-auto">
                        <div className="row  gy-5">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card
                                        index={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
