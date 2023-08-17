import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCDN } from "../constants/constants";
import RestrauntMenuCard from "./RestrauntMenuCard";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestrauntInfo();
  }, []);

  const getRestrauntInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId="+resId
    );
    const json = await data.json();

    
    ( json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards === undefined ? setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards) : setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards))

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

  };
  return (
    <>
    <div className="restraunt-details">
    <h1>RestrauntMenu</h1>
      {/* <h2>Restaurant id : {resId}</h2> */}
      <h2>{restaurant.name}</h2>
      <h3>
        {restaurant.locality} , {restaurant.areaName}
      </h3>
      {/* <img src={imageCDN + restaurant.cloudinaryImageId}></img> */}
    </div>
      
      <div className="restaurant-menu">
        <h1>Menu</h1>
        {Object.values(menu).map((item) => (
            <RestrauntMenuCard key={item?.card?.info?.id} {...item?.card?.info}/>
        ))}
        
        
      </div>
    </>
  );
};

export default RestrauntMenu;
