import { useParams } from "react-router-dom";
import RestrauntMenuCard from "./RestrauntMenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestrauntMenu = () => {
  const { resId } = useParams();
  const  {restaurant,menu} = useRestaurantMenu(resId)

  return(Object.values(menu).length === 0) ? <div className="restaurant-list">
  {Array.from({length:10}).map((el,i) =>{
  return <Shimmer key={i}></Shimmer>
})} 
 </div>:(
    
    <>
    <div className="restraunt-details">
    <h1>RestrauntMenu</h1>
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
