import React from 'react';
import Header from "./header";
import Sides from "./sides";
import "./menuContainer.css";


const sideOption = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Sides />
            </div></>
    )
}

export default sideOption