import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import { BrowserRouter,Routes,Route } from "react-router";
function App(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurants" element={<Restaurants></Restaurants>}></Route>
        </Routes>
        </BrowserRouter>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
