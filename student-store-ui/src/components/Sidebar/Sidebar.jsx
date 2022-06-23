import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar() {
  const handleOnClick = (event) => {
    console.log("Clicked Sidebar button!")
    if (document.getElementById("sidebar").classList.contains("closed")) {
      document.getElementById("sidebar").classList.remove("closed")
      document.getElementById("sidebar").classList.add("open")
    } else {
      document.getElementById("sidebar").classList.add("closed")
      document.getElementById("sidebar").classList.remove("open")
    }
  }

  const handleCartClick = (event) => {
    console.log("Clicked Shopping Cart!")
    return <ShoppingCart />
  }

  return (
    <section className="sidebar closed" id="sidebar">
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={handleOnClick}><p className="material-icons"><BsFillArrowRightCircleFill /></p></button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons" onClick={handleCartClick}><BsFillCartPlusFill /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><MdPayment /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><BsFillInfoCircleFill /></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

