import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero.jsx"
import ProductGrid from "../ProductGrid/ProductGrid"
import Searchbar from "../SearchBar/SearchBar"

export default function Home(props) {
  const {products} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;
  
  return (
    <div className="home">
      <Hero/>
      <Searchbar />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  )
}

