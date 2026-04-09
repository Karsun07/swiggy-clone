import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
function App(){
    return (
        <>
        <Header/>
        </>
        
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
