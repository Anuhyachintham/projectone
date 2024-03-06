import React from "react";
import "../index.css"

const ResturantCard=(props)=>{
    console.log(props.res.info);

    const image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const {name, cloudinaryImageId,cuisines,costForTwo,avgRating}=props.res.info
    return(<div className="res-card">
        <img className="image-logo" src={image+cloudinaryImageId}/>
        <h1>{name}</h1>
        
        <h3>{cuisines[0]}</h3>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>

    </div>)
}

export default ResturantCard;