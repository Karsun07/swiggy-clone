    import MenuInfo from "./MenuInfo";
    export default function MenuCard({ menuItems }) {

    if ("categories" in menuItems) {
        return (
            <div className="mb-6">
                <p className="text-xl font-bold mb-3">{menuItems.title}</p>

                <div className="space-y-4">
                    {menuItems?.categories?.map((items) => (<MenuCard key={items?.title} menuItems={items}/>
                    ))}
                </div>
               <div className="h-2 bg-gray-100 mt-4"></div>

            </div>
        );
    }

    return (
        <div className="mb-6">

           
            <h1 className="text-lg font-semibold mb-3 border-b pb-2">
                {menuItems?.title}
            </h1>

            <div>
                {menuItems.itemCards.map((menu) => (
                    <MenuInfo
                        key={menu?.card?.info?.id}
                        menu={menu?.card?.info}
                    />
                ))}
            </div>

        </div>
    );
}