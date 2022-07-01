import "./Analytics.css";
import React from 'react'
import CommonText from "../CommonText/commonText";
import vector_img from "../../assets/images/VectorObj.png";

const Analytics = () => {
    return (
        <div>
            <div className="analytics py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <!------ CommonText ------> */}
                            <CommonText />
                            {/* <!---xx--- CommonText ---xx---> */}
                        </div>
                        <div className="col-md-6">
                            <div className="obj-img" style={{ backgroundImage: `url(${vector_img})` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics