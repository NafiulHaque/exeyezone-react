import "./Header.css";

import React from 'react';
import himg from "../../assets/images/Hero.jpg";
import logo from "../../assets/images/logo.png";




const Header = () => {
    return (
        <div className="Header">
            <div className="header-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="text d-flex flex-row align-items-center justify-content-sm-between">
                                <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                                <span> H.No#16/6 (2nd Floor), Babar Road
                                    Block#B, Shyamoli, Mohamadpur, Dhaka-1207</span>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>+08801739184393</span>
                                <i className="fa fa-clock" aria-hidden="true"></i>
                                <span>Sun-Thu 9.00 AM - 17.00 PM</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon-grp d-flex flex-row align-items-center justify-content-end gap-3">
                                <a href="#"> <i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                                <a href="#"> <i className="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-main" >
                <div className="header-2">
                    <div className="container">
                        <nav>
                            <div className="row">
                                <div className="col-md-3">
                                    <a href="#">
                                        <img className="logo" src={logo} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-9">
                                    <ul className="items">
                                        <li className="item"><a href="#">Home</a></li>
                                        <li className="item"><a href="#">About</a></li>
                                        <li className="item"><a href="#">Services</a></li>
                                        <li className="item"><a href="#">Work</a></li>
                                        <li className="item"><a href="#">Pricing</a></li>
                                        <li className="item"><a href="#">Team</a></li>
                                        <li className="item"><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="hero-text-main">

                    <div className="container">
                        <h1 className="bold-text">
                            <span>Expect</span> nothing <br />
                            less than <span>perfect</span>
                        </h1>
                        <p className="text w-50">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla quisquam quo deleniti
                            dignissimos nisi saepe repudiandae suscipit atque error voluptates molestias placeat, eaque
                            repellat
                            ipsam quam. Esse, voluptate asperiores.
                        </p>
                        <a className="btn btn-outline-danger hero-btn" href="#" role="button">GET FREE QOUTE</a>

                    </div>
                </div>
                <div className="hero img" style={{ "backgroundImage": `url(${himg})` }}>
                    {/* <img className="img" src="/Assets/images/Hero.jpg" alt="" /> */}
                </div>
            </div>
        </div >
    )
}

export default Header