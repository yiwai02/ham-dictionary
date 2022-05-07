import React from "react";

import "./Header.css";

export default function Header(){
    return(
    <div className="Header">
        <img src={require('./pics/ham1.png')} alt="hamster" className="topHamster" /> 
         Hamstapedia Word Dictionary 
        <img src={require('./pics/sunflower.png')} alt="hamster" className="topHamster" /> 
    </div>
    );
}