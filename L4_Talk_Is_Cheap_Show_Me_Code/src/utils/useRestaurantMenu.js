import { useState, useEffect} from "react"
const useRestaurantMenu = (resId) =>{
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
    {console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards)}
    ( json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards === undefined ? setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards) : setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards))

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

  };
  return {restaurant,menu}
}

export default useRestaurantMenu