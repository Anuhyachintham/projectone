import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useResturantmanu=(id)=>{

    const[resInfo,setResInfo]=useState(null);
    const MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="

     const menu_api=MENU_URL+id;
    //console.log(menu_api);
    
    useEffect(()=>{
    fetchMenu();
    },[])
    
    const fetchMenu=async()=>{
        const data=await fetch(MENU_URL+id);
        const response=await data.json();
        setResInfo(response);
    }
    return(<div>

    </div>)
}

export default useResturantmanu;