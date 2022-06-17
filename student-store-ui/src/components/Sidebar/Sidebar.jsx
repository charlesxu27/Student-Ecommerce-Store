import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar closed">
      <div className="wrapper">
        <button className="toggle-button button closed">Forward Button</button>
      <div className="shopping-cart">
        <div className="cart-icons">
          <span className="cart-icon icon button">
            <i>Shopping Button</i>
          </span>
          <span className="cart-icon icon button">
            <i>Money Button</i>
          </span>
          <span className="cart-icon icon button">
            <i>Checkout Button</i>
          </span>
        </div>
      </div>
      </div>
    </section>
  )
}

