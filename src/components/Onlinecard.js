export default function Onlinecard({ value }) {
  const info = value?.info;

  return (
    <div className="cursor-pointer">
      
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-[180px] object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            info?.cloudinaryImageId
          }
          alt={info?.name}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>

        {/* Offer */}
        <h2 className="absolute bottom-2 left-3 text-white font-bold text-lg">
          {info?.aggregatedDiscountInfoV3?.header}
        </h2>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h2 className="font-bold text-lg">{info?.name}</h2>

        {/* Rating + Time */}
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded-md">
            ⭐ {info?.avgRating}
          </span>
          <span className="font-medium">
            {info?.sla?.slaString}
          </span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-600 text-sm truncate">
          {info?.cuisines?.join(", ")}
        </p>

        {/* Area */}
        <p className="text-gray-500 text-sm">
          {info?.areaName}
        </p>
      </div>
    </div>
  );
}