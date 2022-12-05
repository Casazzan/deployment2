import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CustMainPage.css";

import CustomerViewBtn from "../CustomerViewBtn";

import Logo from './pandaLogo.png';
import Text from 'react-text';
import FoodBackground from './pandaFood.jpeg';


const CustMainPage = (props) => {

  let navigate = useNavigate();

  return (

    <div className="CustMainPage">

      <div className="header">

        <img src={Logo} className="img" width="25%" />

        <div className="options">
                <button className="addToCart" onClick={() => {navigate("/")}}> Back </button>
        </div>  

        <div className="CustOptions">
      
          <div class = "CustomerViewBtn" id = "FindRestaraunt" onClick={() => {navigate("/CustMainPage/StoreFinder")}}> <CustomerViewBtn Name = "Find Restaraunt"/></div>
          <div class = "CustomerViewBtn" id = "ViewMenu" onClick={() => {navigate("/CustMainPage/PublicMenu")}}> <CustomerViewBtn Name = "View Menu"/></div>

        </div>

      </div>

      <div className = "background">

         <img className = "backgroundImg" src={FoodBackground} />
         <box className = "welcomeBox" title = "Welcome!" />

      </div>

    </div>
  )

}

export default CustMainPage




