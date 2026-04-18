resto1=>https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=555307&catalog_qa=undefined&submitAction=ENTER

restro2=>   
<!-- they differ by restaurant id if i get restro id i can fetch there data in 1 go -->

we can find them all at=>
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
<!-- but swiggy doesnt allow cross origin fetch requests-->
<!-- so we use a proxy url -->
https://cors-anywhere.herokuapp.com/
<!-- what on mind api -->
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
