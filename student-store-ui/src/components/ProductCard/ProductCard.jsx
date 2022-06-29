import * as React from "react"
import { Link } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard(props) {
  const { product } = props.product;
  const showDescription = props.showDescription;


  return (
    <div className="product-card">
      <Link to={`/products/${props.product.id}`}>
        <img className="media" src={props.product.image} alt="" />
      </Link>
      <h3 className="product-name">{props.product.name}</h3>
      <h4>{ratingToStars(5)}</h4>
      <h5 className="product-price">${props.product.price.toFixed(2)}</h5>
      {showDescription == true && <h6 className="product-description">{props.product.description ? props.product.description : "No description found"}</h6>}
      <div className="addRemoveArea">
        <button className="addButton" onClick={() => (props.handleAddItemToCart(props.product.id))}>+</button>
        <button className="removeButton" onClick={() => (props.handleRemoveItemFromCart(props.product.id))}>-</button>
      </div>
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