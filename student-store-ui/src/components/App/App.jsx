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
import CheckoutForm from '../CheckoutForm/CheckoutForm'

let shoppingCartObject = {
  itemId: 0,
  quantity: 0
}

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({});
  const [subTotal, setSubTotal] = React.useState(0)

  // Toggle the open/closed state of the Sidebar
  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const handleAddItemToCart = (productId) => {
    console.log(`ADDING PRODUCT ID ${productId} to CART`)
    const index = shoppingCart.findIndex(item => item.itemId === productId)
    if (index >= 0) {
      let newShoppingCart = shoppingCart
      shoppingCart[index].quantity++
      setShoppingCart([...newShoppingCart])
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }])
    }
  }

  const handleRemoveItemFromCart = (productId) => {
    console.log(`REMOVING PRODUCT ID ${productId} from CART`)
    const index = shoppingCart.findIndex(item => item.itemId === productId)
    if (index >= 0 && shoppingCart[index].quantity > 0) {
      let newShoppingCart = shoppingCart
      shoppingCart[index].quantity--
      if (newShoppingCart[index].quantity < 1) {
        shoppingCart.splice(index, 1)
      }
      setShoppingCart([...newShoppingCart])
    }
  }


  const handleOnCheckoutFormChange = (name, value) => {
    console.log("CHANGED CHECKOUT FORM", name, value);
    setCheckoutForm({ ...checkoutForm, [name]: value });
  }


  const handleOnSubmitCheckoutForm = () => {
    console.log("SUBMITTED CHECKOUT FORM")
    axios.post("http://localhost:3001/store", {
      user: { "name": checkoutForm.name, "email": checkoutForm.value }, shoppingCart
    })
      .then(function (response) {
        console.log(response);
        setShoppingCart([]);
        setCheckoutForm({ email: "", name: "" });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(
        < CheckoutForm />
      )
  }

  // fetch products data from API via axios
  async function getProducts() {
    const apiUrl = "http://localhost:3001/store"

    await axios.get(apiUrl)
      .then((response) => {
        console.log(`SUCCESSFULLY FETCHED PRODUCTS:!`)
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
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} subTotal={subTotal} setSubTotal={setSubTotal} />
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} shoppingCart={shoppingCart} handleOnToggle={handleOnToggle} subTotal={subTotal} setSubTotal={setSubTotal} products={products} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
                </>
              )}
              />
              <Route path="/products/:productsId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} subTotal={subTotal} setSubTotal={setSubTotal} />
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} shoppingCart={shoppingCart} handleOnToggle={handleOnToggle} subTotal={subTotal} setSubTotal={setSubTotal} products={products} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
                </>
              )}
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} shoppingCart={shoppingCart} handleOnToggle={handleOnToggle} subTotal={subTotal} setSubTotal={setSubTotal} products={products} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
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