import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import { BrowserRouter,Routes,Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu"; 
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import store from "./stored/store";
import { Provider } from "react-redux";
function App(){
    return (
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurants" element={<Restaurants></Restaurants>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
