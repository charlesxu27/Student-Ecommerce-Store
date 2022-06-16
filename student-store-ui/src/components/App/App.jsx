import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetails from "../ProductDetails/ProductDetails"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


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
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/products/:productId" element={<ProductDetails/>}/>
            </Routes>
            <Routes>
              <Route path="*" element={<p>Not found!</p>}/>
            </Routes>
          
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
