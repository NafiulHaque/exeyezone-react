import React from 'react';
import CommonText from '../../Components/CommonText/commonText';
import "./Body.css";

import desking_img from "../../assets/images/desk.jpg";
import Services from '../../Components/Services/Services';
import Counter from '../../Components/Counter/Counter';
import Different from '../../Components/Different/Different';
import BlueBur from '../../Components/BlueBur/BlueBur';
import WorkingProcess from '../../Components/WorkingProcess/WorkingProcess';
import Analytics from '../../Components/Analytics/Analytics';
import LatestWork from '../../Components/LatestWork/LatestWork';
import Question from '../../Components/Question/Question';

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
            <BlueBur />
            <WorkingProcess />
            <Analytics />
            <LatestWork />
            <Question />
        </div>
    )
}

export default Body;