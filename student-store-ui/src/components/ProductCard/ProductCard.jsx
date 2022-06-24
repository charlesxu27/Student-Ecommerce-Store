/*
import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    const {product} = props;
    const {handleAddItemToCart} = props;
    const {handleRemoveItemToCart} = props;
    const {showDescriptiont} = props;
    
    return (
    <div className="product-card">
        <div className="image">
            //{<Link to={{'/products/{product.id}'}}}>} 
                // <img src={product.image}></img>
        // <h3 className="name">{product.name}</h3>
            
        // </div>
            // <p className="product-price">${product.price.toFixed(2)}</p>
    // </div>
//   )
// }
*/
import * as React from "react"
import { Link } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard(props) {
  const {product} = props;
  const {productId} = props;
  const {quantity} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;
  const showDescription = props.showDescription;
  console.log(95,product);
  console.log(props)
  console.log(props.product.description);

    return (
      <div className="product-card">
        <Link to = {`/products/${props.product.id}`}>
          <img className="media" src={props.product.image} alt="" />
        </Link>
        <h3 className="product-name">{props.product.name}</h3>
        <h4>{ratingToStars(5)}</h4>
        <h5 className="product-price">${props.product.price.toFixed(2)}</h5>
        {showDescription == true && <h6 className="product-description">{props.product.description}</h6>}
      </div>
    )
}

function ratingToStars(rating) {
  if (rating === null || rating == 0) {
      return "⭐";

  }
  let result = ""
  let stars = Math.ceil(rating)
  for (let i = 0; i < stars; i++) {
      result += "⭐";

  }
  return result;
}