import { useEffect, useState } from "react";
import Mind from "./Mind";
import Restaurantoptions from "./Restaurantoptions";
export default function Restaurants(){
    const [restData,setRestData]=useState([]);
    const [mindData,setMindData]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            const proxyServer="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response=await fetch(proxyServer+swiggyAPI);
            const data=await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);   
            setMindData(data.data.cards[0].card.card.imageGridCards.info);
        }
        fetchData();
    },[])
    // console.log(restData);
    // console.log(mindData);
    return (
        <>
        <Mind mindData={mindData}/>
        {/* <Restaurantoptions restData={restData}/> */}
        </>
    )
}