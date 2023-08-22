import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurant, filteredRestaurant } = useRestaurant();
  const isOnline = useOnline()
  if (!isOnline){
    return <h1>You Are Offline!!! Please check your connection</h1>
  }
  //early return
  if (!allRestaurant) return null;
  return allRestaurant.length === 0 ? (
    <div className="restaurant-list">
      {Array.from({ length: 10 }).map((el, i) => {
        return <Shimmer key={i}></Shimmer>;
      })}
    </div>
  ) : (
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
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurant.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </>
  );
};
