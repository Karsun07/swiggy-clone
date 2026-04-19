import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import { BrowserRouter,Routes,Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu"; 
import SearchFood from "./components/SearchFood";
function App(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurants" element={<Restaurants></Restaurants>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
             <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Routes>
        </BrowserRouter>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
