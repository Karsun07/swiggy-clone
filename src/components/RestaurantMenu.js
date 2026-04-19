import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import {Link} from "react-router";
export default function RestaurantMenu(){

    const { id } = useParams();
    const [RestData, setRestData] = useState([]);
    const [pref, setPref] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();

                const tempData = data?.data?.cards
                    ?.find((item) => item?.groupedCard)
                    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                if (!tempData) return;

                const filterData = tempData.filter(
                    (items) => items?.card?.card && 'title' in items.card.card
                );

                setRestData(filterData);

            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    return (
        
        <div className="bg-gray-100 min-h-screen py-6">
            <Link to={`city/delhi/${id}/search`}>
            <button className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</button>
            </Link>
            <div className="max-w-[800px] mx-auto bg-white px-6 py-4 rounded-lg shadow">

                <div className="flex gap-4 justify-center mb-6">
                    <button
                        className={`px-6 py-2 rounded-full border text-sm font-semibold 
                        ${pref==="veg" ? "bg-green-600 text-white" : "bg-gray-200"}`}
                        onClick={()=>setPref(pref==='veg'?null:'veg')}
                    >
                        Veg
                    </button>

                    <button
                        className={`px-6 py-2 rounded-full border text-sm font-semibold 
                        ${pref==="nonveg" ? "bg-red-500 text-white" : "bg-gray-200"}`}
                        onClick={()=>setPref(pref==='nonveg'?null:'nonveg')}
                    >
                        Non Veg
                    </button>
                </div>

                {RestData.map((menu) => (
                    <MenuCard
                        key={menu?.card?.card?.title}
                        menuItems={menu?.card?.card}
                        pref={pref}
                    />
                ))}

            </div>
        </div>
    );
}