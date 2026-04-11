import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Foodoptions from "./components/foodoptions";
import Groceryoptions from "./components/Groceryoptions";
import Dineoptions from "./components/Dineoptions";
function App(){
    return (
        <>
        <Header/>
        <Foodoptions/>
        <Groceryoptions/>
        <Dineoptions/>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
