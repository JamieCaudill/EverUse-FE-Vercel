import { useParams } from "react-router-dom";
import { camelToPascalCase } from "../helperFunctions";
import horizontalBG from '../images/detail-horizontal-bg.jpg';

const ProductDetail = ({itemsForDisplay}) => {
  console.log(itemsForDisplay)
  const productID = useParams().productID;
  const product = itemsForDisplay.find(item => item.id === camelToPascalCase(productID));
  console.log(product)
 
  return (
    <>
      <div className="details">
        <div className="details__header">
          <h2 className="details__header-text">Products handmade from upcycled climbing rope in an effort to reduce unnecessary waste</h2>
        </div>
      </div>
    </>
  )
}

export default ProductDetail