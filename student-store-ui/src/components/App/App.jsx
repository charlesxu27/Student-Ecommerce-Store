import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetails from "../ProductDetails/ProductDetails"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios'


export default function App() {
  const [products, setProducts] = useState()
  const [isFetching, setIsFetching] = useState()
  const [error, setError] = useState()
  const [isOpen, setIsOpen] = useState()
  const [shoppingCart, setShoppingCart] = useState()
  const [checkoutForm, setCheckoutForm] = useState()

  const apiUrl = "https://codepath-store-api.herokuapp.com"

  // fetch products data from API via axios
  async function getProducts() {
    await axios.get(apiUrl + "/store")
    .then((response) => {
      console.log(`SUCCESS:!`)
      console.log(response.data.products)
      setProducts(response)
      setIsFetching(true)
    })
    .catch((error) => {
      alert(`ERROR: ${error}`)
      setIsFetching(false)
    })
    .then(() => {
      console.log("Finished requesting Products!")
      setIsFetching(false)
    })
  }

  useEffect(() => {
    getProducts(); // call getProducts every time we render the App component
  }, []); // [] signals getProducts is called only once on render.

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product-details" element={<ProductDetails />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="*" element={<p>Not found!</p>} />
          </Routes>
        </main>
        <Navbar />
        <Sidebar />
        <Home />
      </BrowserRouter>
    </div>
  )
}
