Home.jsx

import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero.jsx"
import ProductGrid from "../ProductDetails/ProductDetails.jsx"

export default function Home(props) {
  const {products} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;
  
  return (
    <div className="home">
      <Hero/>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}