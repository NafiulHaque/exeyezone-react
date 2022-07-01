import "./Footer.css";

import React from 'react';
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="bar">
                    <div class="skew-bar">
                        <div class="blue-bar"></div>
                        <div class="red-bar">
                        </div>
                    </div>
                    <div class="text">
                        <div class="t">Call Us Now</div>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <div class="number">+8801739184393</div>
                    </div>
                </div>
                <div class="body">
                    <div class="container py-3">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="f-contant">
                                    <div class="logo" style={{ backgroundImage: `url(${logo})` }}>

                                    </div>
                                    <div class="text py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore dolorum
                                        nostrum facilis? Voluptatem dolorum sunt, hic ducimus optio ipsum voluptatibus.
                                        Repellendus fuga asperiores error ullam numquam, explicabo alias recusandae.
                                    </div>
                                    <div class="icon-grp">
                                        <a href="#"> <i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                                        <a href="#"> <i class="fab fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="f-contant">
                                    <h4>Contact Us</h4>
                                    <div class="item pt-3 flex-row d-flex align-baseline  align-items-center gap-2">
                                        <div class="icon">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <div class="text">
                                            +8801739184393
                                            <br />
                                            +8801620978687
                                        </div>
                                    </div>
                                    <div class="item flex-row d-flex align-baseline  align-items-center gap-2">
                                        <div class="icon">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div class="text">
                                            nafiulhaque22@gmailcom
                                        </div>
                                    </div>
                                    <div class="item  flex-row d-flex align-baseline  align-items-center gap-2">
                                        <div class="icon">
                                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                        </div>
                                        <div class="text">
                                            H.No#16/6 (2nd Floor), Babar Road
                                            <br />
                                            Block#B, Shyamoli, Mohamadpur, Dhaka-1207
                                        </div>
                                    </div>
                                    <div class="item  flex-row d-flex align-baseline  align-items-center gap-2">
                                        <div class="icon">
                                            <i class="fa fa-clock" aria-hidden="true"></i>
                                        </div>
                                        <div class="text">
                                            Sun-Thursday
                                            <br />
                                            09:00 AM - 05:00 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="f-contant">
                                    <h4>Explore</h4>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Works</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copy-bar py-2">
                    Copyrights &copy; 2022 exeyezone Limited. All Rights Reserved to Nafiul
                </div>
            </footer>
        </div>
    )
}

export default Footer