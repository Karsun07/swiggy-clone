import MenuInfo from "./MenuInfo";
export default function MenuCard({menuItems}){
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
                }
            </div>
            </div>
        )
    }
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