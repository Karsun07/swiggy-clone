export default function MenuInfo({ menu,pref }) {

    const price = (menu?.price || menu?.defaultPrice) / 100;

    const rating = menu?.ratings?.aggregatedRating?.rating;
    const ratingCount = menu?.ratings?.aggregatedRating?.ratingCountV2;

    const imageUrl = menu?.imageId
        ? "https://media-assets.swiggy.com/swiggy/image/upload/" + menu.imageId
        : null;
    if(menu.isVeg==1 && pref==='Non-Veg'){
        return null;
    } 
    else if(menu.isVeg==0 && pref==='Veg'){
        return null;
    }
    
    return (
        
        <div className="flex justify-between py-6 border-b border-gray-200">

            
            <div className="w-[70%] pr-4">

                <p className="font-semibold text-base text-gray-900">
                    {menu?.name}
                </p>

                <p className="text-gray-800 font-medium mt-1">₹{price}</p>

                {rating && (
                    <p className="text-green-600 text-xs mt-1 font-medium">
                      ⭐ {rating} ({ratingCount})
                    </p>
                )}

                <p className="text-gray-500 text-sm mt-2 line-clamp-2 mb-8">
                    {menu?.description}
                </p>
            </div>

           
            <div className="w-[30%] flex flex-col items-center relative">

                {imageUrl && (
                    <img className="w-46 h-40 object-cover rounded-lg shadow-sm" src={imageUrl} alt={menu?.name} />
                )}

                <button className="bg-white text-green-600 border border-gray-300 px-6 py-1 rounded-md font-semibold absolute bottom-[-10px] shadow">
                    ADD
                </button>
            </div>

        </div>
    );

}