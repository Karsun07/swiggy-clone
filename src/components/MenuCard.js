import { useState } from "react";
import MenuInfo from "./MenuInfo";

export default function MenuCard({ menuItems, pref }) {

    const [isOpen, setIsOpen] = useState(true);

    // ✅ Handle nested categories
    if ("categories" in menuItems) {
        return (
            <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">

                <p className="text-xl font-bold mb-3 text-gray-800">
                    {menuItems.title}
                </p>

                <div className="space-y-4 pl-2 border-l-2 border-gray-100">
                    {menuItems?.categories?.map((items) => (
                        <MenuCard
                            key={items?.title}
                            menuItems={items}
                            pref={pref}
                        />
                    ))}
                </div>

                <div className="h-2 bg-gray-100 mt-4 rounded-full"></div>
            </div>
        );
    }

    // ❌ Closed accordion
    if (!isOpen) {
        return (
            <div className="mb-4 bg-white rounded-xl shadow-sm p-4 border">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">{menuItems.title}</h1>
                    <button onClick={() => setIsOpen(true)}>⌄</button>
                </div>
            </div>
        );
    }

    // ✅ Filtering logic
    let items = menuItems?.itemCards || [];

    if (pref === "veg") {
        items = items.filter(val => ("isVeg" in val?.card?.info));
    }

    if (pref === "nonveg") {
        items = items.filter(val => !("isVeg" in val?.card?.info));
    }

    // ✅ Hide empty sections
    if (items.length === 0) return null;

    return (
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">

            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">
                    {menuItems.title}
                </p>

                <button onClick={() => setIsOpen(false)}>
                    ⌃
                </button>
            </div>

            <div className="mt-3">
                {items.map((menu) => (
                    <MenuInfo
                        key={menu?.card?.info?.id}
                        menu={menu?.card?.info}
                    />
                ))}
            </div>

        </div>
    );
}