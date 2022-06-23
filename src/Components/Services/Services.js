import "./Services.css";
import React from 'react'

const Services = () => {
    return (
        <div>

            <div className="container">

                {/* <!-- 1st row  --> */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-tv" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Web Design</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">UI & UX Design</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Web Development</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 2nd row  --> */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">App Development</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-cogs" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Software Solution</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-ser">
                            <div className="icon">
                                <i className="fa fa-paint-brush" aria-hidden="true"></i>
                            </div>
                            <div className="text">
                                <a href="#">Branding</a>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti minima sed esse
                                    laboriosam dolorum corporis commodi voluptatem iste suscipit</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div align="center">
                    <a className="btn btn-danger btn-lg" href="#" role="button">VIEW ALL SERVICES</a>
                </div>
            </div>
        </div>
    )
}

export default Services