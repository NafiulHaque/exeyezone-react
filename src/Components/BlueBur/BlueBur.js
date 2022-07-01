import "./BlueBur.css";
import React from 'react';
import blue_bar_img from "../../assets/images/blue-bar.jpg";

const BlueBur = () => {
    return (
        <div className="bluebar" style={{ backgroundImage: `url(${blue_bar_img})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="text">LOOKING FOR A QUALITY AND AFFORDABLE <span>website
                            or software</span> FOR YOUR organization?</h3>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        <a className="btn btn-outline-light btn-lg" href="#" role="button">GET FREE QUOTE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlueBur