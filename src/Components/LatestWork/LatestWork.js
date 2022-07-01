import "./LatestWork.css";
import React from 'react'
import CommonText from "../CommonText/commonText";
import bg_1 from "../../assets/images/gallary/1.jpg";
import bg_2 from "../../assets/images/gallary/2-cat.jpg";
import bg_3 from "../../assets/images/gallary/carimg-.jpg";
import bg_4 from "../../assets/images/gallary/4.jpg";
import bg_5 from "../../assets/images/gallary/5.jpg";
import bg_6 from "../../assets/images/gallary/6.jpg";
import bg_7 from "../../assets/images/gallary/7.jpg";
import bg_8 from "../../assets/images/gallary/8.jpg";

const LatestWork = () => {
    return (
        <div>
            <div className="letestWork">

                <div className="container">
                    {/* <!-- common-text --> */}
                    <CommonText />
                    <div className="photoNav mx-5 py-2">
                        <div className="item"><a href="#">all</a></div>
                        <div className="item"><a href="#">graphic</a></div>
                        <div className="item"><a href="#">design</a></div>
                        <div className="item"><a href="#">photography</a></div>
                        <div className="item"><a href="#">ui design</a></div>
                        <div className="item"><a href="#">web design</a></div>
                    </div>


                </div>
                <div className="gallery my-5">
                    <div className="item " style={{ backgroundImage: `url(${bg_1})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>

                    <div className="item " style={{ backgroundImage: `url(${bg_2})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_3})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_4})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_5})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_6})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_7})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                    <div className="item " style={{ backgroundImage: `url(${bg_8})` }}>
                        <div className="hov">
                            <div className="icon-grp">
                                <a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="text">
                                <a href="#">brand identity</a>
                                <a href="#">Brand Graphic Design</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LatestWork