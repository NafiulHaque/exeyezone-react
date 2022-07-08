import "./Header.css";

import React from 'react';
import himg from "../../assets/images/Hero.jpg";
import logo from "../../assets/images/logo.png";




const Header = ({ navbarOpen, closeNavBar, openNavBar }) => {
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
                                <a href="#" alt="link"> <i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                                <a href="#" alt="link"> <i className="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" alt="link"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                <a href="#" alt="link"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-main" >
                <div className="header-2">
                    <div className="container">

                        <div className="navBar">
                            <div className="navItem">
                                <a href="#" alt="link">
                                    <img className="logo" src={logo} alt="" />
                                </a>
                            </div>
                            <div className={navbarOpen ? "nav_responsive" : "navItem"}>

                                <ul className={navbarOpen ? "nav_display" : "items"}>
                                    <div className="nav_icon close_icon" onClick={() => closeNavBar()} >
                                        <i className="fa fa-times"></i>
                                    </div>
                                    <li className="item"><a href="#" alt="link">Home</a></li>
                                    <li className="item"><a href="#" alt="link">About</a></li>
                                    <li className="item"><a href="#" alt="link">Services</a></li>
                                    <li className="item"><a href="#" alt="link">Work</a></li>
                                    <li className="item"><a href="#" alt="link">Pricing</a></li>
                                    <li className="item"><a href="#" alt="link">Team</a></li>
                                    <li className="item"><a href="#" alt="link">Contact</a></li>
                                </ul>

                            </div>
                            <div className="nav_icon navItem" onClick={() => openNavBar()} >
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="hero-text-main">

                    <div className="container">
                        <div className="hero-text">
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

                        </div>
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