import { imageCDN } from "../constants/constants"
const RestrauntMenuCard = ({imageId,name,price,description,itemAttribute,variantsV2,defaultPrice}) =>{
    return (
        <div className="menu-card">
            <div className="details">
            <p>{itemAttribute.vegClassifier}</p>
            <h3>{name}</h3>
            {/* {(typeof(price) === undefined ? <p>{price/100}/- Rs.</p> :  <p>{defaultPrice/100}/- Rs.</p>)} */}
            {/* <p>{defaultPrice/100}-/ Rs.</p> */}
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