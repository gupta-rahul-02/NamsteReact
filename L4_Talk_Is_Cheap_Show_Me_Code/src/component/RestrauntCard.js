import { imageCDN } from "../constants/constants";
const RestrauntCard = ({name,image,cusines,rating,totalRating}) => {
    return (
      <div className="card">
        <img src={imageCDN+image}></img>
        <h2>{name}</h2>
        <h3>{cusines.join(",")}</h3>
        <h4>{rating} Rating</h4>
        <h5>{totalRating} rated</h5>
      </div>
    );
  };

export default RestrauntCard