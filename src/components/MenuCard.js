import { useState } from "react";
import MenuInfo from "./MenuInfo";

// Chevron icons
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#686b78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke="#686b78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MenuCard({ menuItems, pref, isLast }) {

  const [isOpen, setIsOpen] = useState(true);

  // Category group with nested sub-categories
  if ("categories" in menuItems) {
    return (
      <div>
        {/* Section heading */}
        <div className="px-4 pt-5 pb-2">
          <h2 className="text-[18px] font-bold text-[#282c3f]">{menuItems.title}</h2>
        </div>

        <div>
          {menuItems?.categories?.map((item, idx) => (
            <MenuCard
              key={item?.title}
              menuItems={item}
              pref={pref}
              isLast={idx === menuItems.categories.length - 1}
            />
          ))}
        </div>

        {/* Section divider */}
        <div className="h-3 bg-[#f2f2f2]" />
      </div>
    );
  }

  // Filter items by preference
  let items = menuItems?.itemCards || [];

  if (pref === "veg") {
    items = items.filter((val) => "isVeg" in val?.card?.info);
  }
  if (pref === "nonveg") {
    items = items.filter((val) => !("isVeg" in val?.card?.info));
  }

  if (items.length === 0) return null;

  return (
    <div>
      {/* Accordion header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center px-4 py-4 bg-white hover:bg-[#fafafa] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold text-[#282c3f]">
            {menuItems.title}
          </span>
          <span className="text-[13px] font-semibold text-[#686b78]">
            ({items.length})
          </span>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Horizontal rule below header */}
      <div className="mx-4 border-t border-gray-100" />

      {/* Items list */}
      {isOpen && (
        <div className="divide-y divide-gray-100">
          {items.map((menu) => (
            <MenuInfo
              key={menu?.card?.info?.id}
              menu={menu?.card?.info}
            />
          ))}
        </div>
      )}

      {/* Bottom separator between sub-sections (not after last) */}
      {!isLast && <div className="mx-4 border-t border-gray-100" />}
    </div>
  );
}