export default function MenuInfo({ menu }) {

    const price = (menu?.price || menu?.defaultPrice) / 100;

    const rating = menu?.ratings?.aggregatedRating?.rating;
    const ratingCount = menu?.ratings?.aggregatedRating?.ratingCountV2;

    const imageUrl = menu?.imageId
        ? "https://media-assets.swiggy.com/swiggy/image/upload/" + menu.imageId
        : null;
    
    return (
        <div className="flex justify-between py-6 border-b border-gray-300">

            {/* LEFT */}
            <div className="w-[70%]">

                <p className="font-semibold text-lg">
                    {menu?.name}
                </p>

                <p className="text-gray-800 font-medium mt-1">
                    ₹{price}
                </p>

                {rating && (
                    <p className="text-green-600 text-sm mt-1">
                        ⭐ {rating} ({ratingCount})
                    </p>
                )}

                <p className="text-gray-500 text-sm mt-2">
                    {menu?.description}
                </p>
            </div>

            {/* RIGHT */}
            <div className="w-[30%] flex flex-col items-center relative">

                {imageUrl && (
                    <img
                        className="w-36 h-28 object-cover rounded-lg"
                        src={imageUrl}
                        alt={menu?.name}
                    />
                )}

                <button className="bg-black text-white px-4 py-1 rounded absolute bottom-[-10px]">
                    ADD
                </button>
            </div>

        </div>
    );
}