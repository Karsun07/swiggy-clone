import Restcard from "./Restcard";
export default function Restaurantoptions({restData}){
    return (
        <div className="max-w-[80%] mx-auto mb-20">
            <h1 className="text-2xl font-bold relative mt-20 ">Top restaurant chains in Delhi</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-8 mt-6">
                {
                    restData.map((value) => (<Restcard key={value?.info?.id} value={value}/>))
                }
            </div>
        
        </div>
    )
}