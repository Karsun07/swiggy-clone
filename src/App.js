import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Foodoptions from "./components/foodoptions";
import Groceryoptions from "./components/Groceryoptions";
import Dineoptions from "./components/Dineoptions";
import Restaurants from "./components/Restaurants";
function App(){
    return (
        <>
        <Header/>
        <Foodoptions/>
        <Groceryoptions/>
        <Dineoptions/>
        <Restaurants/>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
