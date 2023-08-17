import { imageCDN } from "../constants/constants";
import { Link } from "react-router-dom";
const RestrauntCard = ({name,cloudinaryImageId,avgRating,locality,cuisines,id}) => {
    return (
      <div className="card">
        <img src={imageCDN+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(' , ')}</h3>
        {/* <h3>Location: {locality}</h3> */}
        <h4>{avgRating} Rating</h4>
        <Link to={"/restaurant/" + id}  >
          <button>Go</button>
        </Link>
      </div>
    );
  };

export default RestrauntCard