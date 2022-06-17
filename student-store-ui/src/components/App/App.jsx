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

  // Toggle the open/closed state of the Sidebar
  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const handleAddItemToCart = (productId) => {
    shoppingCart.map((id) => {
      if (id.itemId != productId){
        id.quantity = 1
      } else{
        id.quantity++;
      }
      products.map((item) => {
        if (item == id.itemId){
          totalPrice += item.price * id.quantity;
          console.log(totalPrice);
        }
      })
    })
  }

  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart(shoppingCart.map((id,i) => {
      if (productId == id.itemId){
        id.quantity--;
      }
      if (id.quantity == 0) {
        delete shoppingCart[i];
      }
    }));
  }

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({name, value});
  }

  const handleOnSubmitCheckoutForm = () => {
    axios.post("https://codepath-store-api.herokuapp.com/store",{
      user:{name: checkoutForm.name, email: checkoutForm.value}, shoppingCart
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  // fetch products data from API via axios
  async function getProducts(endpoint) {
    const apiUrl = "https://codepath-store-api.herokuapp.com"

    await axios.get(apiUrl + endpoint)
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
    getProducts("/store"); // call getProducts every time we render the App component
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
