import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

import About from "../About/About"
import Sidebar from "../Sidebar/Sidebar"

export default function Home(props) {
  console.log(props);
  const { products } = props;

  return (
    <div className="home">
      <Hero />
      {/* <Searchbar searched={searched} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} /> */}
      <ProductGrid products={products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}