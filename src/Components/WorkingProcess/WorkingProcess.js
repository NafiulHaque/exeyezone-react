import "./WorkingProcess.css"
import React from 'react'
import CommonText from "../CommonText/commonText"

const WorkingProcess = () => {
    return (
        <div className="workingProcess py-3">
            <div className="container">
                {/* <!------ CommonText ------> */}
                <CommonText />
                {/* <!---xx--- CommonText ---xx---> */}

                <div className="box-cont">
                    <a href="#" className="box">
                        <div className="icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <span>Analysis</span>
                    </a>
                    <div className="icon">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="box">
                        <div className="icon">
                            <i className="fa fa-paint-brush" aria-hidden="true"></i>
                        </div>
                        <span>Design</span>
                    </a>
                    <div className="icon">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="box">
                        <div className="icon">
                            <i className="fa fa-code" aria-hidden="true"></i>
                        </div>
                        <span>Code</span>
                    </a>
                    <div className="icon">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="box">
                        <div className="icon">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                        </div>
                        <span>Deliver</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkingProcess