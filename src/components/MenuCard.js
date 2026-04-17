import MenuInfo from "./MenuInfo";
export default function MenuCard({menuItems}){
    return(
        <div className="max-w-[80%]">
            <h1 >{menuItems?.title}</h1>
            <div className="flex-row">
                {
                    menuItems.itemCards.map((menu)=><MenuInfo key={menu?.card?.info?.id} menu={menu?.card?.info}/>)
                }
            </div>
        </div>
    )

}