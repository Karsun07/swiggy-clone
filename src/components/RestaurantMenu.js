import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
   
    const { id } = useParams();
    const [RestData, setRestData] = useState([]);

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

    console.log(RestData);

    return (
    <div className="bg-gray-100 min-h-screen py-6">
        <div className="max-w-[800px] mx-auto bg-white px-6 py-4 rounded-lg shadow">

            {RestData.map((menu) => (
                <MenuCard
                    key={menu?.card?.card?.title}
                    menuItems={menu?.card?.card}
                />
            ))}

        </div>
    </div>
);

}