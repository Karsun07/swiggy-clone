import { useState } from "react";
import MenuInfo from "./MenuInfo";

export default function MenuCard({ menuItems }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItems) {
    return (
      <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <p className="text-xl font-bold mb-3 text-gray-800">
          {menuItems.title}
        </p>

        <div className="space-y-4 pl-2 border-l-2 border-gray-100">
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items} />
          ))}
        </div>

        <div className="h-2 bg-gray-100 mt-4 rounded-full"></div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full bg-white rounded-xl shadow-sm p-4 border border-gray-100 transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-lg font-semibold text-gray-800">
            {menuItems.title}
          </h1>

          <button
            className="text-2xl font-bold text-gray-500 hover:text-black transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>

        <div className="h-3 bg-gray-100 mt-3 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100 transition-all duration-300">

      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-semibold text-gray-800">
          {menuItems?.title}
        </h1>

        <button
          className="text-2xl font-bold text-gray-500 hover:text-black transition transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "⌃" : "⌄"}
        </button>
      </div>

      <div className="mt-3 space-y-3">
        {menuItems.itemCards.map((menu) => (
          <MenuInfo
            key={menu?.card?.info?.id}
            menu={menu?.card?.info}
          />
        ))}
      </div>
    </div>
  );
}