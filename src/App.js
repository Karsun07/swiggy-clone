import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Foodoptions from "./components/foodoptions"
function App(){
    return (
        <>
        <Header/>
        <Foodoptions/>
        
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
