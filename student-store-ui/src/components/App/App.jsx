import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetails from "../ProductDetails/ProductDetails"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"


export default function App() {
  const [products, setProducts] = useState()
  const [isFetching, setIsFetching] = useState()
  const [error, setError] = useState()
  const [isOpen, setIsOpen] = useState()
  const [shoppingCart, setShoppingCart] = useState()
  const [checkoutForm, setCheckoutForm] = useState()

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
