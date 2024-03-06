import React, { useEffect, useState } from "react";
import AboutUs from "./About";
import ContactUs from "./Contact";
import Home from "./Home";
import { Link } from "react-router-dom";
import "../index.css"


const Header=()=>{
const[btn,setBtn]=useState("login")
console.log("Above useeffect");
useEffect(()=>{
console.log("Inside useeffect");
},[btn])
console.log("below useeffect")

    return(<div className="header">
        <img className="logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"/>
        <ul className="nav-items">
      
  <Link to="/"><li className="li-items">Home</li> </Link>
  <Link to="/About"><li className="li-items">AboutUs</li>  </Link>   
    <Link to="/Contact"> <li className="li-items">ContactUs</li> </Link> 
     <Link to="/Services"><li className="li-items">Services</li> </Link> 
      <button onClick={()=>btn==="login"?setBtn("logout"):setBtn("login")}>{btn}</button>
        </ul>
      {console.log("initial render")}
        
    </div>)
}

export default Header;