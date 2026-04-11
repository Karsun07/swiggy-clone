import { GroceryGridCards } from "./utils/GroceryGridCards";
import Grocerycard from "./Grocerycard"
export default function Groceryoptions() {
    return (
        <div>
            <h1 className="text-2xl font-bold relative left-40 mt-20"> Shop groceries on Instamart</h1>
            <div className="max-w-[80%]  flex flex-nowrap overflow-x-auto gap-8 container mx-auto mt-5 ">
                {
                    GroceryGridCards.map((value) => <Grocerycard key={value.id} value={value} />)
                }
            </div>

        </div>
    )
}