import React from 'react';
import CommonText from '../../Components/CommonText/commonText';
import "./Body.css";

import desking_img from "../../assets/images/desk.jpg";
import Services from '../../Components/Services/Services';
import Counter from '../../Components/Counter/Counter';
import Different from '../../Components/Different/Different';

const Body = () => {
    return (
        <div>
            <CommonText />
            {/* <!-- desk image  --> */}
            <div class="desking" style={{ "backgroundImage": `url(${desking_img})` }}>

            </div>
            {/* <!-- desk image  --> */}
            <CommonText />
            <Services />
            <Counter />
            <Different />
        </div>
    )
}

export default Body;