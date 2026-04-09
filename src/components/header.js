export default function Header(){
    return (
        <header className="bg-[#ff5200] font-serif  ">
            <div className="flex justify-between py-8 px-40  ">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className=" text-white text-base font-bold flex gap-15 items-center ">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                </div>
            </div>
            
        </header>
    )
}