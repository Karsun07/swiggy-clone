// MenuInfo.jsx — Swiggy-style individual dish card

export default function MenuInfo({ menu }) {
  if (!menu) return null;

  const price = menu?.price || menu?.defaultPrice;
  const formattedPrice = price ? `₹${(price / 100).toFixed(0)}` : null;
  const isVeg = "isVeg" in menu;
  const imageUrl = menu?.imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menu.imageId}`
    : null;

  return (
    <div className="flex gap-4 px-4 py-5 bg-white hover:bg-[#fafafa] transition-colors">

      {/* Left: Text content */}
      <div className="flex-1 min-w-0">

        {/* Veg / Non-veg indicator */}
        {isVeg !== undefined && (
          <span className={`inline-block w-4 h-4 rounded-sm border-2 mb-1.5
            ${isVeg ? "border-[#3d9b6d]" : "border-[#e43b4f]"}`}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span className={`w-1.5 h-1.5 rounded-full block
              ${isVeg ? "bg-[#3d9b6d]" : "bg-[#e43b4f]"}`}
            />
          </span>
        )}

        {/* Bestseller badge */}
        {menu?.isBestseller && (
          <div className="flex items-center gap-1 mb-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#f55d2c">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <span className="text-[11px] font-bold text-[#f55d2c] uppercase tracking-wide">Bestseller</span>
          </div>
        )}

        {/* Dish name */}
        <h3 className="text-[15px] font-semibold text-[#282c3f] leading-snug mb-1">
          {menu?.name}
        </h3>

        {/* Price */}
        {formattedPrice && (
          <p className="text-[14px] font-semibold text-[#282c3f] mb-2">{formattedPrice}</p>
        )}

        {/* Rating */}
        {menu?.ratings?.aggregatedRating?.rating && (
          <div className="flex items-center gap-1 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#1ba672">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <span className="text-[12px] font-semibold text-[#3d9b6d]">
              {menu.ratings.aggregatedRating.rating}
            </span>
            {menu.ratings.aggregatedRating.ratingCountV2 && (
              <span className="text-[12px] text-[#93959f]">
                ({menu.ratings.aggregatedRating.ratingCountV2})
              </span>
            )}
          </div>
        )}

        {/* Description */}
        {menu?.description && (
          <p className="text-[13px] text-[#93959f] leading-snug line-clamp-2">
            {menu.description}
          </p>
        )}
      </div>

      {/* Right: Image + Add button */}
      <div className="flex-shrink-0 relative w-[120px]">
        {imageUrl ? (
          <div className="relative">
            <img
              src={imageUrl}
              alt={menu?.name}
              className="w-[120px] h-[120px] object-cover rounded-lg"
              loading="lazy"
            />
            {/* ADD button over image */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <button className="bg-white text-[#fc8019] border border-[#d4d5d9] text-[13px] font-extrabold px-5 py-1 rounded-lg shadow-md hover:shadow-lg tracking-widest transition-shadow">
                ADD
              </button>
            </div>
          </div>
        ) : (
          /* No image: standalone ADD button */
          <div className="flex items-end justify-center h-full pb-1">
            <button className="bg-white text-[#fc8019] border border-[#d4d5d9] text-[13px] font-extrabold px-5 py-1.5 rounded-lg shadow-md hover:shadow-lg tracking-widest transition-shadow">
              ADD
            </button>
          </div>
        )}
      </div>

    </div>
  );
}