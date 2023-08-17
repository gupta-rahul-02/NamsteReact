import { imageCDN } from "../constants/constants"
const RestrauntMenuCard = ({imageId,name,price,description,itemAttribute,variantsV2}) =>{
    return (
        <div className="menu-card">
            <div className="details">
            <p>{itemAttribute.vegClassifier}</p>
            <h3>{name}</h3>
            <p>{price/100}/- Rs.</p>
            <p>{description}</p>
            </div>
            <div className="image">
            <img src = {imageCDN + imageId}></img>
            <button>Add</button>
            </div>
            
            
        </div>
    )
}

export default RestrauntMenuCard