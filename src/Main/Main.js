import React, { useState } from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import "./Main.css";



const Main = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    const openNavBar = () => {
        setNavBarOpen(true);
    }
    const closeNavBar = () => {
        setNavBarOpen(false);
    }
    return (
        <div>
            <Header navbarOpen={navbarOpen} openNavBar={openNavBar} closeNavBar={closeNavBar} />
            <Body />
            <Footer />
        </div>
    )
}

export default Main