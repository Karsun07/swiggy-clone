import {dineoutRestaurants} from "./utils/Dinedata";
import Restrocard from "./Restrocard";
export default function Dineoptions(){
    return (
        <div className="w-[80%] mx-auto mb-20">
            <h1 className="text-2xl font-bold relative mt-20 ">Discover best restaurants on Dineout</h1>
            <div className=" flex flex-nowrap overflow-x-auto gap-6 mt-6">
                {
                dineoutRestaurants.map((value)=><Restrocard key={value?.info?.id} value={value}/>)
                }
            </div>
        </div>
    )

}