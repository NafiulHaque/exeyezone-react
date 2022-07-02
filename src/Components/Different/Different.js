import React from 'react'
import CommonText from '../CommonText/commonText';
import "./Different.css";
import diff_img from "../../assets/images/girl-img.png";

const Different = () => {
    return (
        <div className='different'>
            <div className="container">
                <div className="diff-img" style={{ backgroundImage: `url(${diff_img})` }}>
                </div>
                {/* <!------ CommonText ------> */}
                <CommonText />
                {/* <!---xx--- CommonText ---xx---> */}

                <div className="items w-50">
                    <div className="item">
                        <div className="icon">
                            <i className="fa fa-trophy" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <a href="#">Best quality</a>
                            <p>Lorem ipsum dolor sit la rem quasi corporis asperiores quos
                                aiores error harum non.</p>
                        </div>
                    </div>
                    <div className='items'>
                        <div className="item">
                            <div className="icon">
                                <i className="fa fa-building" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Strategy</a>
                                <p>Lorem ipsum dolor sit la rem quasi corporis asperiores quos
                                    aiores error harum non.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="fa fa-tasks" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Integrity</a>
                                <p>Lorem ipsum dolor sit la rem quasi corporis asperiores quos
                                    aiores error harum non.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="fa fa-chart-bar" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Sustainablity</a>
                                <p>Lorem ipsum dolor sit la rem quasi corporis asperiores quos
                                    aiores error harum non.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Different