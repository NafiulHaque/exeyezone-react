import "./Question.css";
import React from 'react'

const Question = () => {
    return (
        <div>
            <div className="question">
                <div className="container">
                    <div className="text">
                        <span>Write a message</span>
                        <h2>Have Any Questions?</h2>
                        <p className="w-50">Thank you very much for your interest in our company and our services and if you have
                            any questions,
                            please write us a message now!</p>
                    </div>
                    <div className="form my-4">
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-6">
                                {/* <!-- <label for="validationCustom01" className="form-label">First name</label> --> */}
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Your Name"
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <!-- <label for="validationCustom02" className="form-label">Last name</label> --> */}
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Your e-mail"
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>

                            <div className="col-md-12">
                                {/* <!-- <label for="validationCustom03" className="form-label">City</label> --> */}
                                <textarea className="form-control" placeholder="Your messages" id="validationCustom03" rows="8"
                                    required></textarea>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>


                            <div className="col-md-12" align="center">
                                <button className="btn btn-danger shadow btn-lg px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question