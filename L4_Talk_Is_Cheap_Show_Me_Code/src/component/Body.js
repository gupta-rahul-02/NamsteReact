import { useState , useEffect} from "react";
import { restaurantList } from "../constants/constants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurants) =>
    restaurants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

export const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    getRestaurants()
  },[])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.301054&lng=73.254065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
  }

 
//early return
  if(!allRestaurant) return null;

   
  return (allRestaurant.length === 0) ? <div className="restaurant-list">
    {Array.from({length:10}).map((el,i) =>{
    return <Shimmer key={i}></Shimmer>
  })}
  </div>: (
    <>
      <div className="search">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            //setRestaurant(data);
            
            setFilteredRestaurant(data)
 

          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurant.length  === 0 ? <h1>No Restaurant Found</h1> : filteredRestaurant.map((restaurant) => {
          return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};
