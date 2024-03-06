import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";



const Body=()=>{
    const[resList,setResList]=useState([])
    const[dummyData,setDummyData]=useState([])
const[search,setSearch]=useState("");


useEffect(()=>{

fetchData();
},[])



const fetchData=async()=>{
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4048122&lng=79.9570411&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res_data=await response.json()
    //console.log(res_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setResList(res_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setDummyData(res_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

}
 
const filteredData=()=>{
    //console.log("clicked");
    const filterData=dummyData.filter(each=>each.info.avgRating>4.5)
   // console.log(filterData)
    setDummyData(filterData)
}




return resList.length===0?(<Shimmer/>):(
    <div>
        <div>
        <button onClick={filteredData}>Top rated resturants</button>
        <input type="search" onChange={(e)=>{setSearch(e.target.value)}}/>
        <button onClick={()=>
{let searchData=resList.filter((each)=>each.info.name.toUpperCase().includes(search.toUpperCase()))

console.log(searchData);
setDummyData(searchData)
}
  }
  
  >
            search</button>
        </div>
    <div className="res-container">
        {dummyData.map(each => (
        <Link to={"./restaurant/"+each.info.id}> <ResturantCard key={each.info.id} res={each} /></Link>   
      
        
        ))}
    </div>
    </div>
);
};
  
export default Body;