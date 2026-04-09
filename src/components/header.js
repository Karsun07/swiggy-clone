export default function Header(){
    return (
        <header className="bg-[#ff5200] font-serif text-white font-bold ">
            <div className="flex justify-between py-8 px-40  ">
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
                    <input className=" rounded-xl w-[34%] h-14 bg-white text-gray-800 pl-4" placeholder="Delhi, India"></input>
                    <input className=" rounded-xl w-[66%] h-14 bg-white text-gray-800 pl-4" placeholder="Search for restaurant, item or more"></input>
                </div>

            </div>
            
            
        </header>
    )
}