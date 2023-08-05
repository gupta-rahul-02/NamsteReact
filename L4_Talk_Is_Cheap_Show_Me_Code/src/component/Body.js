import { useState } from "react";
import { restaurantList } from "../constants/constants";
import RestrauntCard from "./RestrauntCard";

const filterData = (searchText, restaurants) =>{
  return restaurants.filter((restaurants) => 
    restaurants.name.includes(searchText))
}

export const Body = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search">
        <input type="text" value={searchText} placeholder="Search" onChange={(e) =>{
          setSearchText(e.target.value)
        }}></input>
        <button
          onClick={() => {
            const data = filterData(searchText, restaurantList)
            setRestaurant(data)
          }}
        >
          Search
        </button>
       
      </div>

      <div className="restaurant-list">
        {restaurant.map((restaurant) => {
          return <RestrauntCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
