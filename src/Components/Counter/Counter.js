import "./Counter.css";
import React from 'react'
import counter_img from "../../assets/images/counterImg.jpg";
const Counter = () => {
    return (

        <div className="counter-img my-4" style={{ backgroundImage: `url(${counter_img})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="imoji-grp">
                            <div className="icon">
                                <i className="far fa-smile" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>240</h3>
                                <p>Happy customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="imoji-grp">
                            <div className="icon">
                                <i className="far fa-thumbs-up" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>500</h3>
                                <p>Award Winner</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="imoji-grp">
                            <div className="icon">
                                <i className="fa fa-tag" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>2210</h3>
                                <p>Working Hours</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="imoji-grp">
                            <div className="icon">
                                <i className="fa fa-paperclip" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <h3>402</h3>
                                <p>Complete Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Counter