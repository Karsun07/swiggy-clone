import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu() {
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
          (items) => items?.card?.card && "title" in items.card.card
        );

        setRestData(filterData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "'Okra', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      className="bg-[#f2f2f2] min-h-screen">

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-20 shadow-sm">
        <Link to={`city/delhi/${id}/search`}>
          <div className="flex items-center gap-3 bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-2.5 cursor-pointer hover:shadow-md transition-shadow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-500 flex-shrink-0">
              <circle cx="11" cy="11" r="8" stroke="#686b78" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" stroke="#686b78" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[#93959f] text-sm font-medium">Search for dishes</span>
          </div>
        </Link>
      </div>

      <div className="max-w-[800px] mx-auto">

        {/* Veg / Non-Veg Filter */}
        <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-[#282c3f] mr-1">Filter</span>

          <button
            onClick={() => setPref(pref === "veg" ? null : "veg")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-semibold transition-all duration-150
              ${pref === "veg"
                ? "border-[#3d9b6d] bg-[#eaf5ee] text-[#3d9b6d]"
                : "border-gray-300 text-[#282c3f] bg-white"
              }`}
          >
            {/* Veg indicator */}
            <span className={`w-3.5 h-3.5 rounded-sm border-2 flex items-center justify-center flex-shrink-0
              ${pref === "veg" ? "border-[#3d9b6d]" : "border-[#3d9b6d]"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d9b6d] block"></span>
            </span>
            Veg
          </button>

          <button
            onClick={() => setPref(pref === "nonveg" ? null : "nonveg")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-semibold transition-all duration-150
              ${pref === "nonveg"
                ? "border-[#e43b4f] bg-[#fdf0f2] text-[#e43b4f]"
                : "border-gray-300 text-[#282c3f] bg-white"
              }`}
          >
            <span className={`w-3.5 h-3.5 rounded-sm border-2 border-[#e43b4f] flex items-center justify-center flex-shrink-0`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e43b4f] block"></span>
            </span>
            Non-veg
          </button>
        </div>

        {/* Menu Sections */}
        <div className="bg-white">
          {RestData.map((menu, idx) => (
            <MenuCard
              key={menu?.card?.card?.title}
              menuItems={menu?.card?.card}
              pref={pref}
              isLast={idx === RestData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}