import { Link } from "react-router";
export default function Header(){
    return (
        <header className="bg-[#ff5200] font-serif text-white font-bold ">
            <div className="flex justify-between py-8 px-34  ">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className="  text-base font-bold flex gap-15 items-center ">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <div className="text-5xl max-w-[60%] text-center container mx-auto  ">
                    <img className="h-110 w-62 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                    <img className="h-110 w-62 absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                    <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
                </div>
                <div className="max-w-[60%] flex gap-5 container mx-auto mt-8 ">
                    <input className="text-base rounded-xl w-[34%] h-14 bg-white text-gray-800 pl-4" placeholder="Delhi, India"></input>
                    <input className="text-base  rounded-xl w-[66%] h-14 bg-white text-gray-800 pl-4" placeholder="Search for restaurant, item or more"></input>
                </div>

            </div>
            <div className="flex justify-center gap-8 ">
                <Link to="/restaurants">
                <img className="w-81 h-74" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img className="w-81 h-74" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img></a>
                <a href="https://www.swiggy.com/dineout"><img className="w-81 h-74" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></a>

            </div>

            
        </header>
    )
}