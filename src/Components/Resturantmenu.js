import React from "react";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import useResturantmanu from "../utils/useResturantmenu";

import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
// const [resInfo, setResInfo]= useState(null);
 //const MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="

//   //  const params= useParams();
//   //  console.log(params)
  const { resId } = useParams();
  console.log("resId:", resId)

// const url=MENU_URL+resId
// // console.log(url)
//   //resInfo has single responsiblity that means it is bother about fetching data

 const resInfo = useResturantmanu(resId);

  //     useEffect(()=>{
  // fetchMenu();
  //     },[])

  //     const fetchMenu=async()=>{
  //       const data= await fetch(url)
  //       const data_one= await data.json();
  //       console.log(data_one)
  //      setResInfo(data_one)
  //     }

//   // if (resInfo.length===0){
//   //     return <Shimmer />
//   // }

if (resInfo === null) return <Shimmer />


    const {name,cuisines,costForTwoMessage} =resInfo.data.cards[0].card.card.info
const {itemCards}= resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
console.log(itemCards)
  return resInfo===null?(<Shimmer/>): (
    <div>
    <h1>{name}</h1>
    <p>{cuisines.join(",")}</p>
    <h3>{costForTwoMessage}</h3>
    <div>
      <ul>
        {itemCards.map((each)=>(
          <li>
            {each.card.info.name}-
            Rs-{each.card.info.price ? each.card.info.price/100 : each.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>


    </div>
  )
}


export default RestaurantMenu



// Rest of your code
//   // // return resInfo === null ? (
//   // //   <Shimmer />
//   // ) :
  