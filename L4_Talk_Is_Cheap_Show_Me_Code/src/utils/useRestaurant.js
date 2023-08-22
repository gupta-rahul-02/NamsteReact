import {useState, useEffect} from "react"
const useRestaurant = () =>{
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    
    useEffect(() =>{
        getRestaurants()
      },[])
    
      async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
      }

      return{allRestaurant,filteredRestaurant}
}


export default useRestaurant