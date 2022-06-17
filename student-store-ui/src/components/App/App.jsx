import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home"
import Contact from "../Contact/Contact"
import Searchbar from "../SearchBar/SearchBar"

import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios'

let shoppingCartObject = {
  itemId: 0,
  quantity: 0
}

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([shoppingCartObject]);
  const [checkoutForm, submitCheckoutForm] = React.useState({});

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
      if (id.itemId != productId) {
        id.quantity = 1
      } else {
        id.quantity++;
      }
      products.map((item) => {
        if (item == id.itemId) {
          totalPrice += item.price * id.quantity;
          console.log(totalPrice);
        }
      })
    })
  }

  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart(shoppingCart.map((id, i) => {
      if (productId == id.itemId) {
        id.quantity--;
      }
      if (id.quantity == 0) {
        delete shoppingCart[i];
      }
    }));
  }

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ name, value });
  }

  const handleOnSubmitCheckoutForm = () => {
    axios.post("https://codepath-store-api.herokuapp.com/store", {
      user: { name: checkoutForm.name, email: checkoutForm.value }, shoppingCart
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // fetch products data from API via axios
  async function getProducts() {
    const apiUrl = "https://codepath-store-api.herokuapp.com/store"

    await axios.get(apiUrl)
      .then((response) => {
        console.log(`SUCCESS:!`)
        console.log(response.data.products)
        setProducts(response.data.products)
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
          {
            <Routes>
              <Route path="/" element={(
                <>
                  <Navbar />
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                  <Sidebar />
                  <Contact />
                </>
              )}
              />
              <Route path="/products/:productsId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                  <Sidebar />
                  <Contact />
                </>
              )}
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <Sidebar />
                  <Contact />
                </>
              )}
              />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}