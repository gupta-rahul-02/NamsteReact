import { imageCDN } from "../constants/constants";
const RestrauntCard = ({name,cloudinaryImageId,avgRating,locality,cuisines}) => {
    return (
      <div className="card">
        <img src={imageCDN+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(' , ')}</h3>
        {/* <h3>Location: {locality}</h3> */}
        <h4>{avgRating} Rating</h4>
      </div>
    );
  };

export default RestrauntCard