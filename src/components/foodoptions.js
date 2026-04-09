import {imageGridCards} from "./utils/imageGridCards";
import Foodcard from "./utils/foodcard"
export default function Foodoptions(){
    return (
        <div >
            <h1 className="text-2xl font-bold relative left-40 mt-20  ">Order our best food options</h1>
            <div className="max-w-[80%] flex flex-wrap container mx-auto mt-5 gap-6 ">     
        {imageGridCards.map((value)=>
            <Foodcard key={value.id} value={value}/>  
        )}
        </div>
        </div>
    )
}